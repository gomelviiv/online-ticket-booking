import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Films from './Films.jsx'

import { connect } from 'react-redux'
import { setDataFilmsText } from '../../../store/slider/actions'




class FilmsContainer extends React.Component {

  render(){
      return (
        <Films
          dataFilms={this.props.dataFilms}
          setDataFilmsText={this.props.setDataFilmsText}
        />
      );
  }
}

const mapStateToProps = state => {
  return {
    dataFilms: state.allData.dataFilms
  }
}
const mapDispatchToProps = {
  setDataFilmsText
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);
