import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Basket from './Basket.jsx'

import { connect } from 'react-redux'
import { setDataUserText } from '../../../store/slider/actions'




class BasketContainer extends React.Component {

  render(){
      return (
        <Basket
          dataUser={this.props.dataUser}
          setDataUserText={this.props.setDataUserText}
        />
      );
  }
}

const mapStateToProps = state => {
  return {
    dataUser: state.allData.dataUser
  }
}
const mapDispatchToProps = {
  setDataUserText
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);
