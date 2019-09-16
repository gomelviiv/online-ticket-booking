import React from 'react';
import './Basket.css';

import axios from 'axios';


export default class Basket extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      basket: [],
      dataBlockPlace: [],
      placePaid: [],
    }
    this.buyTicket = (event,value) => {
      axios.post('http://127.0.0.1:8000/blockplaces/create/',{
        origin_name: value.origin_name,
        sector: value.sector,
        row: value.row,
        place: value.place,
        user: value.user,
        status: 'paid',
      })
      .then(res =>  console.log(201))
      .catch(err => console.log(res.data))
      this.setState({
        placePaid: this.state.placePaid.concat(value)
      })
    }
    this.deleteTicket = (event, i) => {
      document.getElementById(`basket-place-tr-${i+1}`).style.display = 'none'
    }
  }
  renderBasket(){
    const data = this.state.dataBlockPlace;
    const createChairRow = data.map( (value,i) => (
      <tbody>
        <tr id={`basket-place-tr-${i+1}`}>
          <th scope="row">{i+1}</th>
          <td>{value.origin_name}</td>
          <td>{`место: ${value.sector}-${value.row}-${value.place}`}</td>
          <td>{value.status == "booked" ? "Забронирован" : "Оплачен"}</td>
          <td>
            {value.status == "booked" ?
              <span>
                <button
                  id={`buy${i+1}`}
                  type="button"
                  class="btn btn-success"
                  onClick={ event => this.buyTicket(event,value)}
                  >Оплатить</button>
                <button
                  id={`delete${i+1}`}
                  type="button"
                  class="btn btn-danger"
                  onClick={event => this.deleteTicket(event,i)}
                  >Удалить</button>
              </span>
              :
              <button
                id={`remove{i+1}`}
                type="button"
                class="btn btn-danger"
                onClick={event => this.deleteTicket(event,i)}
                >Отменить</button>
            }
          </td>
        </tr>
      </tbody>
    ));
    return createChairRow
  }


  componentDidMount(){
    if(localStorage.getItem('booked') === 'booked'){
      this.setState({dataBlockPlace: JSON.parse(localStorage.getItem('allBlockPlaces'))})
    } else {
      axios.get(`http://127.0.0.1:8000/blockplaces/`)
      .then(res => {
        this.setState({dataBlockPlace: res.data.filter(value => (value.status === 'paid' && value.user === localStorage.getItem('userEmail')))})
      })
    }
  }

  render(){
    console.log(this.state.dataBlockPlace)
    return (
      <div className="basket">
      <h3> ЮЗЕр</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">название фильма</th>
            <th scope="col">купленные места</th>
            <th scope="col">статус</th>
            <th scope="col">оплатить</th>
          </tr>
        </thead>

        {this.renderBasket()}
      </table>
      </div>
    );
  }
}
