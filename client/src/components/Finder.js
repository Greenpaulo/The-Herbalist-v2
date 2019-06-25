import React, { Component } from 'react';
import ConditionList from './ConditionList';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Finder extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onCategorySelect(keyword) {
    this.props.fetchCategory(keyword);
  }

  render() {
    return (
      <div className="container">
        <h1 className="x-large text-primary animated fadeInDown" id="herb-finder-title"> Herb Finder </h1>
        <section id="finder-info">
          <div className="list-group">
            <i className="fa fa-search fa-lg"></i>
            <p> Find your condition in the list below to see which herbs are traditionally used to help your condition. This will give you the links to the herb's Materia Medica entry.</p>
          </div>

          <div className="list-group">
            <i className="fa fa-book-medical fa-lg"></i>
            <p>Then read the descriptions of the herbs and choose which herbs you think best suit your condition. If you can't find your condition in the list below, then choose herbs that are in the category and you will probably find your condition listed in the Materia Medica entries for those herbs.</p>
          </div>
        </section>




        <section id="condition-selector">
          <h2 className="medium"> List of Conditions</h2>
          <div id="buttons">
            <button type='button' onClick={this.onCategorySelect.bind(this, 'mental')} className='btn btn-primary shadow'> Mental/Emotional</button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'skin')} className='btn btn-primary shadow'> Skin </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'joints')} className='btn btn-primary shadow'> Joints/Muscles </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'digestion')} className='btn btn-primary shadow'> Digestion </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'throat')} className='btn btn-primary shadow'> Throat/Chest </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'bladder')} className='btn btn-primary shadow'> Bladder/Urinary </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'heart')} className='btn btn-primary shadow'> Heart/Circulation </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'head')} className='btn btn-primary shadow'> Head </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'womens')} className='btn btn-primary shadow'> Women's Health </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'mens')} className='btn btn-primary shadow'> Men's Health </button>

            <button type='button' onClick={this.onCategorySelect.bind(this, 'children')} className='btn btn-primary shadow'> Children/Babies </button>
          </div>
        </section>

        <section id="condition-list">
          <ConditionList />
        </section>

      </div>

    );
  }
}

export default connect(null, actions)(Finder);