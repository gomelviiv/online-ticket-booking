import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import store  from './store/index.js'
import { Provider } from 'react-redux';

import Header from './components/Header/Header.jsx'
import SliderContainer from './components/Content/Slider/SliderContainer.jsx'
import Hall from './components/Content/Hall/Hall.jsx'
import SignInContainer from './components/Content/SignIn/SignInContainer.jsx'
import SignUpContainer from './components/Content/SignUp/SignUpContainer.jsx'
import FilmsContainer from './components/Content/Films/FilmsContainer.jsx'
import SpecificFilm from './components/Content/SpecificFilm/SpecificFilm.jsx'
import BasketContainer from './components/Content/Basket/BasketContainer.jsx'


function App() {
  return (
    <Provider store={store}>
      <HashRouter className="App">
        <Header/>
        <Route exact path="/" component={SliderContainer}/>
        <Route exact path="/hall" component={Hall}/>
        <Route exact path="/hall/:origin_name/:id" component={Hall}/>
        <Route exact path="/signin" component={SignInContainer}/>
        <Route exact path="/signup" component={SignUpContainer}/>
        <Route exact path="/films" component={FilmsContainer}/>
        <Route exact path="/films/:origin_name/:id" component={SpecificFilm}/>
        <Route exact path="/basket" component={BasketContainer}/>
      </HashRouter>
    </Provider>
  );
}


export default App;
