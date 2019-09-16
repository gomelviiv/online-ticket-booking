import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Films.css';
import axios from 'axios';
import SpecificFilm from '../SpecificFilm/SpecificFilm.jsx'


export default class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  renderFims(){
    const allFilms =  this.props.dataFilms;
    const createCardFilms = allFilms.map(film => (
      <div className="card" >
        <img src="" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-title">{film.title}</h4>
          <h6>{film.coutry}</h6>
          <h6>{film.year}</h6>
          <p className="card-text">{film.description}</p>
          <Link
            smooth
            to={`/films/${film.origin_name}/${film.id}`}
            className="btn btn-primary"
            props={film}
          >Смотреть</Link>
        </div>
      </div>
    ));
    return  createCardFilms
  }
  render(){
    return (
     <div className="films-component w-50;">
      <div className="films-catalog row">
        {this.renderFims()}
      </div>
     </div>
    );
  }
}
