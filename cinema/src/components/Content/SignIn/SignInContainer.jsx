import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SignIn from './SignIn.jsx'

import { setEmailText, setPasswordText } from '../../../store/signIn/actions'
import { connect } from 'react-redux'
import { setDataUserText } from '../../../store/slider/actions'

import './SignIn.css';



class SignInContainer extends React.Component {

  render(){
      return (
        <SignIn
          email={this.props.email}
          password={this.props.password}
          setEmailText={this.props.setEmailText}
          setPasswordText={this.props.setPasswordText}
          dataUser={this.props.dataUser}
          setDataUserText={this.props.setDataUserText}

        />
      );
  }
}

const mapStateToProps = state => {
  return {
    email: state.signIn.email,
    password: state.signIn.password,
    dataUser: state.allData.dataUser
  }
}
const mapDispatchToProps = {
  setEmailText,
  setPasswordText,
  setDataUserText
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
