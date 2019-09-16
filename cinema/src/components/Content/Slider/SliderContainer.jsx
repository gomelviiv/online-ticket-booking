import React from 'react';
import Slider from './Slider.jsx'

import axios from 'axios';
import store  from '../../../store/index.js'



import { setDataUserText, setDataFilmsText, setDataBlockPlaceText } from '../../../store/slider/actions'
import { connect } from 'react-redux'

class SliderContainer extends React.Component {
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/user/')
    .then(res => {
        this.props.setDataUserText(res.data)
      })
    axios.get('http://127.0.0.1:8000/film/')
    .then(res => {
        this.props.setDataFilmsText(res.data)
      })
    axios.get('http://127.0.0.1:8000/blockplaces/')
    .then(res => {
        this.props.setDataBlockPlaceText(res.data)
      })
  }

  render(){
    return (
      <Slider
        dataUser={this.props.dataUser}
        dataFilms={this.props.dataFilms}
        dataBlockPlace={this.props.dataBlockPlace}
        setDataUserText={this.props.setDataUserText}
        setDataFilmsText={this.props.setDataFilmsText}
        setDataBlockPlaceText={this.props.setDataBlockPlaceText}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    dataUser: state.allData.dataUser,
    dataFilms: state.allData.dataFilms,
    dataBlockPlace: state.allData.dataBlockPlace
  }
}
const mapDispatchToProps = {
  setDataUserText,
  setDataFilmsText,
  setDataBlockPlaceText
}
export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);
