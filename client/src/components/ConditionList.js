import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import uuid from 'uuid';

class ConditionList extends Component {
  // Call the fetchHerb action creator to fetch materia medica entry from DB.
  onHerbSelect(herb) {
    this.props.fetchHerb(herb);
  }


  // Returns a title and herbs for each condition
  renderConditions() {
    if (this.props.conditions !== undefined) {
      return this.props.conditions.map((condition) => {
        return (
          <div key={uuid.v4()}>
            <h2>{condition.title}</h2>
            {this.renderHerbs(condition)}
          </div>
        )
      })
    }
  }

  // Returns a list of herbs for the condition
  renderHerbs(condition) {
    return condition.herbs.map(herb => {
      return <li key={uuid.v4()} ><Link to={`/materia_medica/${herb.replace(/\W/g, '')}`} onClick={this.onHerbSelect.bind(this, herb)}>{herb}</Link></li>
    })
  }


  render() {
    return (
      <div>
        <h1>{this.props.category}</h1>
        {this.renderConditions()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.conditionList.category,
    conditions: state.conditionList.conditions
  }
}


export default connect(mapStateToProps, actions)(ConditionList);