import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import checkUserInSystem from '../Content/CheckUserInSystem/CheckUserInSystem.jsx'
import './Header.css';



export default class Header extends React.Component {


  render(){
    return (
     <div className="header d-flex justify-content-center pt-3">
       <div className="col"></div>
       <div className="col-4 d-flex justify-content-center  ">
        <Link smooth className="white-ligth mx-2" to='/'><div>ГЛАВНАЯ</div></Link>
        <Link smooth className="white-ligth mx-2" to='/signin'><div>ВХОД</div></Link>
        <Link smooth className="white-ligth mx-2" to="/hall"><div>ЗАЛ</div></Link>
        <Link smooth className="white-ligth mx-2" to="/films"><div>ФИЛЬМЫ</div></Link>
        <Link smooth className="white-ligth mx-2" to="/contact">КОНТАКТЫ</Link>
        {checkUserInSystem() ?
          <Link smooth className="white-ligth mx-2" to="/basket">КОРЗИНА </Link>
          :
          ""}
       </div>
       <div className="col"></div>
     </div>

    );
  }
}
