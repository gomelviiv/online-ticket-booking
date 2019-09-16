import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './SpecificFilm.css';
import axios from 'axios';


export default class SpecificFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentDidMount(){
    axios.get(`http://127.0.0.1:8000/film/${this.props.match.params.id}/`)
    .then(res => {
      this.setState({data: res.data})
    })
  }
  renderInformation(){
    let a =  Object.keys(this.state.data).map((key,i) => (
        i>1?
      <div className="row">
        <div className="col-lg-4">
          <img src=""/>
        </div>
        <div className="col-lg-4">
          <div className="">{key}</div>
        </div>
        <div className="col-lg-4">
          <div className="">{this.state.data[key]}</div>
        </div>
      </div>
      : ""
    ))
    return a
  }
  render(){
    return (
     <div className="specific-film w-50;">
      <div className="w-50">
        <h3>{this.state.data.title}</h3>
          {this.renderInformation()}
        <Link
          smooth
          to={`/hall/${this.state.data.origin_name}/${this.state.data.id}`}
          props={this.state.data.title}
          class="btn btn-light"
        >Забронировать место</Link>
      </div>
     </div>
    );
  }
}
