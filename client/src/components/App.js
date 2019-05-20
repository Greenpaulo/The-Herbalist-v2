import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Dummy components
const Cabinet = () => <h2>Medicine Cabinet!</h2>
const Materia = () => <h2>Materia Medica!</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route path='/' component={Header} />
            <Route exact path='/' component={Home} />
            <Route path='/cabinet' component={Cabinet} />
            <Route path='/materia_medica' component={Materia} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
};

export default connect(null, actions)(App);
