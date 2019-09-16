import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';

import './SignIn.css';



export default class SignIn extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [],
        userAddtoLocalStorage: false,
      };
    this.signInClick = () =>  {
      console.log(this.props.dataUser)

      const allUsers = this.state.data;
      for(let i=0; i<allUsers.length; i++){
        if(allUsers[i].email === this.props.email && allUsers[i].password === this.props.password){
          if(this.state.userAddtoLocalStorage == true){
            localStorage.setItem("userEmail", this.props.email)
          }
          return true
        }
      }
      return false
    }
    this.addInOnline = (value) => {
      this.setState({
        userAddtoLocalStorage: !value,
      })
    }

    this.handleEmailChange = (value) => {
      this.props.setEmailText(value)
    }
    this.handlePasswordChange = (value) => {
      this.props.setPasswordText(value)
    }
  }

  handleInput(key, value){
    this.setState({
      [key]: value,
    })
  };

  render(){
      return (
        <form className="sign-in w-25">
          <div className=" form-group">
            <label for="exampleInputEmail1">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={event => this.handleEmailChange(event.target.value)}

            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password:</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={event => this.handlePasswordChange(event.target.value)}
            />
          </div>

          <div className="form-group form-check">
            <input type="checkbox" onClick={event => this.addInOnline(this.state.userAddtoLocalStorage)} className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button
            className="btn btn-primary mx-1"
            onClick={this.signInClick}
            >Sign In</button>
          <Link type="submit" to="/signup" className="btn btn-primary">Sign Up</Link>
        </form>

      );
  }
}
