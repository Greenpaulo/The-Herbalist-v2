import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Landing from './Landing';
import Finder from './Finder';
import MateriaMedica from './MateriaMedica';
import Dispensary from './Dispensary'
import { connect } from 'react-redux';
import * as actions from '../actions';

// Dummy components
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
            <Route path='/' component={Navbar} />
          </Switch>
          <Route path='/home' component={Home} />
          <Route path='/herb_finder' component={Finder} />
          <Route path='/materia_medica/:herb' component={MateriaMedica} />
          <Route path='/dispensary' component={Dispensary} />
          <Route path='/cabinet' component={Cabinet} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
