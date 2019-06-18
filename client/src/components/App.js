import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../css/style.css'
import Navbar from './Navbar';
import HowToUse from './HowToUse';
import Landing from './Landing';
import Finder from './Finder';
import MateriaMedica from './MateriaMedica';
import Dispensary from './Dispensary'
import Cabinet from './Cabinet';
import Edit from './EditMedicine';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PrivateRoute from './routing/PrivateRoute'

// Dummy components
const About = () => <h2>About</h2>
const Login = () => <h2>Login</h2>


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path='/' component={Navbar} />
          <Route exact path='/' component={Landing} />
          <Route path='/how_to_use' component={HowToUse} />
          <Route path='/herb_finder' component={Finder} />
          <Route exact path='/materia_medica' component={MateriaMedica} />
          <Route path='/materia_medica/:herb' component={MateriaMedica} />
          <PrivateRoute path='/dispensary' component={Dispensary} />
          <PrivateRoute path='/cabinet' component={Cabinet} />
          <Route path='/about' component={About} />
          <PrivateRoute path='/edit_medicine' component={Edit} />
          <Route path='/login' component={Login} />
        </Fragment>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
