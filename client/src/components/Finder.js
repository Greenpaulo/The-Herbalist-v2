import React, { Component } from 'react';
import ConditionList from './ConditionList';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Finder extends Component {
  render() {
    return (
      <div>
        <h1> Herb Finder </h1>
        <p> Find your condition in the list of conditions below to see which herbs are traditionally used to help your condition.</p>

        <p>Then read the descriptions and choose which herbs you think best suit your condition. If you can't find your condition in the list below, then choose herbs that are in the category and you will probably find your condition listed in the Materia Medica entries for those herbs.</p>

        <h2> List of Conditions</h2>

        <button type='button' onClick={this.props.fetchCategory('mental')} className='btn btn-success'> Mental and Emotional</button>

        <ConditionList />
      </div>
    );
  }
}

export default connect(null, actions)(Finder);