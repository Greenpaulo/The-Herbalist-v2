import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Dummy components
const Home = () => <h2>Home</h2>
const Cabinet = () => <h2>Medicine Cabinet!</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div id="router-container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Header} />
          </Switch>
          <Route path='/home' component={Home} />
          <Route path='/cabinet' component={Cabinet} />
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
