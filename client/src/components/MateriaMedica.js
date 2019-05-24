import React, { Component } from 'react';
import { connect } from 'react-redux';

class MateriaMedica extends Component {
  onShowHerb = () => {
    console.log(this.props.currentHerb);
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentHerb.title}</h1>
        <button onClick={this.onShowHerb}> Log Herb to Console</button>
      </div>
    )
  }

}

const MapStateToProps = (state) => {
  return { currentHerb: state.herb }
}
export default connect(MapStateToProps)(MateriaMedica);