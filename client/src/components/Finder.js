import React, { Component } from 'react';
import ConditionList from './ConditionList';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Finder extends Component {
  onCategorySelect(keyword) {
    this.props.fetchCategory(keyword);
  }

  render() {
    return (
      <div>
        <h1> Herb Finder </h1>
        <p> Find your condition in the list of conditions below to see which herbs are traditionally used to help your condition.</p>

        <p>Then read the descriptions and choose which herbs you think best suit your condition. If you can't find your condition in the list below, then choose herbs that are in the category and you will probably find your condition listed in the Materia Medica entries for those herbs.</p>

        <h2> List of Conditions</h2>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'mental')} className='btn btn-success'> Mental/Emotional</button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'skin')} className='btn btn-success'> Skin </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'joints')} className='btn btn-success'> Joints/Muscles </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'digestion')} className='btn btn-success'> Digestion </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'throat')} className='btn btn-success'> Throat/Chest </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'bladder')} className='btn btn-success'> Bladder/Urinary </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'heart')} className='btn btn-success'> Heart/Circulation </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'head')} className='btn btn-success'> Head </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'womens')} className='btn btn-success'> Women's Health </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'mens')} className='btn btn-success'> Men's Health </button>

        <button type='button' onClick={this.onCategorySelect.bind(this, 'children')} className='btn btn-success'> Children/Babies </button>

        <ConditionList />
      </div>
    );
  }
}

export default connect(null, actions)(Finder);