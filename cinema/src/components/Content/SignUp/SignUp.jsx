import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';


import './SignUp.css';



export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      userAddtoLocalStorage: false,
    };

    this.handleClick = () => {
      let allUsers = this.props.dataUser
      for(let i=0; i<allUsers.length; i++){
        if(allUsers[i].email === this.props.email){
          return false
        }
      }
      console.log(`${this.props.email} ${this.props.password} ${this.props.repeatPassword}`)
      if(this.props.password === this.props.repeatPassword){
        axios.post('http://127.0.0.1:8000/user/create/',{
          email: this.props.email,
          password: this.props.password,
        })
        .then(res =>  console.log(res.data))
        if(this.state.userAddtoLocalStorage == true){
          localStorage.setItem("userEmail", this.props.email)
        }
        return true
      }
    }

    this.handleEmailChange = (value) => {
      this.props.setEmailText(value)
    }

    this.handlePasswordChange = (value) => {
      this.props.setPasswordText(value)
    }

    this.handleRepeatPasswordChange = (value) => {
      this.props.setRepeatPasswordText(value)
    }

    this.addInOnline = (value) => {
      this.setState({
        userAddtoLocalStorage: !value,
      })
    }
  }

  render(){
    return (
      <form className="sign-up w-25">
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
        <div className="form-group">
          <label for="exampleInputPassword1">Again Password:</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={event => this.handleRepeatPasswordChange(event.target.value)}

          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onClick={event => this.addInOnline(this.state.userAddtoLocalStorage)}
          />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary mx-1" onClick={this.handleClick}>Registration</button>
      </form>

    );
  }
}
