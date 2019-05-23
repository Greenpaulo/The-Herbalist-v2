import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Landing from './Landing';
import Finder from './Finder';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Dummy components
const Dispensary = () => <h2>Dispensary</h2>
const Cabinet = () => <h2>Medicine Cabinet</h2>
const About = () => <h2>About</h2>


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/' component={Header} />
          </Switch>
          <Route path='/home' component={Home} />
          <Route path='/herb_finder' component={Finder} />
          <Route path='/dispensary' component={Dispensary} />
          <Route path='/cabinet' component={Cabinet} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
