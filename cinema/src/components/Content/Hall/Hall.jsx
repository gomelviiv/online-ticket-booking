import React from 'react';
import './Hall.css';

import checkUserInSystem from '../CheckUserInSystem/CheckUserInSystem.jsx'
import axios from 'axios';


export default class Hall extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      basket: [],
      dataBlockPlace: [],
    }
    this.checkChair = (event,sector,row, place) => {
      let obj = {
        sector,
        row,
        place
      }
      const placeWhoBuy = this.state.dataBlockPlace;
      for( let i=0; i<placeWhoBuy.length; i++){
        if(this.props.match.params.origin_name === placeWhoBuy[i].origin_name){
          event.target.style.background = 'black';
        }
      }
      if(event.target.style.background == "" || event.target.style.background == "white"){
        this.state.basket.push(obj)
        event.target.style.background = "#232323"
      } else {
        for(let i=0; i<this.state.basket.length; i++){
          if(JSON.stringify(obj) == JSON.stringify(this.state.basket[i])){
            this.state.basket.splice(i,1);
          }
        }
        event.target.style.background = "white"
      }

    }
    this.buyTickets = () => {
      const data = this.state.basket;
      let allBlockPlaces = [];
      let obj = {
        origin_name: '',
        sector: '',
        row: '',
        place: '',
        user: '',
        status: '',
      }
      for( let i =0; i<data.length; i++){
          obj.origin_name = this.props.match.params.origin_name,
          obj.sector = data[i].sector,
          obj.row = data[i].row,
          obj.place = data[i].place,
          obj.user = localStorage.getItem('userEmail'),
          obj.status = 'booked',
          allBlockPlaces.push(obj)
          obj = {}
      }
      localStorage.setItem('booked', 'booked')
      localStorage.setItem('allBlockPlaces', JSON.stringify(allBlockPlaces))
      setTimeout(function(){
        if (localStorage.getItem('booked') === 'booked'){
          localStorage.removeItem('allBlockPlaces')
        }
        localStorage.removeItem('booked')
      }, 10000);
    }
    this.lockPlace = (data) => {
      const specificPlace = [];
      for( let i=0; i<data.length;i++){
        if(data[i].origin_name == this.props.match.params.origin_name){
          specificPlace.push(data[i])
        }
      }
      for(let i=0; i<specificPlace.length;i++){
        let a = document.getElementById(`place${data[i].sector}-${data[i].row}-${data[i].place}`)
        a.style.pointerEvents= 'none';
        a .style.background = 'black';
      }
    }
  }

  renderChair(number){
    const chair =  [1,2,3,4,5,6,7,8,9];
    let createChair = []
    const createChairRow = chair.map(value => (
      <div>
        <label>{value}</label>
        {createChair = chair.map(val => (
          <button
            id={`place${number}-${value}-${val}`}
            className=""
            onClick={event => this.checkChair(event, number,value, val)}
            title={`${number} - сектор, ${value} - ряд, ${val} - место`}
            value={[number,value, val  ]}
          ></button>
        ))}
        <label>{value}</label>
      </div>

    ));
    return createChairRow
  }
  componentDidMount(){
    axios.get(`http://127.0.0.1:8000/blockplaces/`)
    .then(res => {
       this.lockPlace(res.data)
    })
  }



  render(){
    this.renderChair()
    return (
     <div className="hall">
     <div className="screen-line"></div>
     <div className="screen">ЭКРАН</div>
     <table class="table table-borderless">
       <tbody className="hall-tbody mt-2">
        <tr>
          <td>
            {this.renderChair(1)}
          </td>
          <td>
            {this.renderChair(2)}
          </td>
          {checkUserInSystem() ?
            <button
              type="button"
              class="btn btn-light button-buy-tickets"
              onClick={this.buyTickets}
            >Купить билеты</button>
          : <div className="sign-in-system">Что бы купить билеты войдите в систему</div>}
        </tr>
        <tr>
          <td>
            {this.renderChair(3)}
          </td>
          <td>
            {this.renderChair(4)}
          </td>
        </tr>
       </tbody>
      </table>
     </div>

    );
  }
}
