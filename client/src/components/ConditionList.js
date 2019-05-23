import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConditionList extends Component {
  // Returns a title and herbs for each condition
  renderConditions() {
    if (this.props.conditions !== undefined) {
      return this.props.conditions.map((condition) => {
        return (
          <div>
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
      return <li>{herb}</li>
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


export default connect(mapStateToProps)(ConditionList);