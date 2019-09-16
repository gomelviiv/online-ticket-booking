import React from 'react';
import SignUp from './SignUp.jsx'

import { setEmailText, setPasswordText, setRepeatPasswordText } from '../../../store/signUp/actions'
import { setDataUserText } from '../../../store/slider/actions'
import { connect } from 'react-redux'

import './SignUp.css';



class SignUpContainer extends React.Component {
  render(){

    return (
      <SignUp
        email={this.props.email}
        password={this.props.password}
        repeatPassword={this.props.repeatPassword}
        setEmailText={this.props.setEmailText}
        setPasswordText={this.props.setPasswordText}
        setRepeatPasswordText={this.props.setRepeatPasswordText}
        dataUser={this.props.dataUser}
        setDataUserText={this.props.setDataUserText}
      />

    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.signUp.email,
    password: state.signUp.password,
    repeatPassword: state.signUp.repeatPassword,
    dataUser: state.allData.dataUser
  }
}

const mapDispatchToProps = {
  setEmailText,
  setEmailText,
  setPasswordText,
  setDataUserText
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
