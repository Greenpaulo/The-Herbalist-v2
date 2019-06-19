import React, { Component } from 'react';
import HerbEntry from './HerbEntry';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

class MateriaMedica extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.fetchHerb(this.props.match.params.herb)
    this.props.fetchHerbListByName();

  }

  onHerbClick = (e) => {
    // Fetch the herbs entry to update the state and re-render the component. Regex removes spaces between words.
    this.props.fetchHerb(e.target.innerText.replace(/\W/g, ''))
  }

  renderHerbSelect = (start, end) => {
    if (this.props.herbList !== null && this.props.herbList !== undefined) {
      const { herbList } = this.props;
      const list = herbList.slice(start, end);
      return list.map(herb => {
        return (
          <Link
            to={`/materia_medica/${herb.name.replace(/\W/g, '')}`}
            key={uuid.v4()}
            onClick={this.onHerbClick}>
            {herb.name.replace(/([a-z])([A-Z])/g, '$1 $2')}
          </Link>
        )
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Materia Medica</h1>

        <section id="herb-select-btns">
          <h2 className="lead">Herb Select:</h2>
          <div className="dropdown">
            <button className="dropbtn">A - D</button>
            <div className="dropdown-content">
              {this.renderHerbSelect(0, 14)}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">E - H</button>
            <div className="dropdown-content">
              {this.renderHerbSelect(15, 25)}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">I - L</button>
            <div className="dropdown-content">
              {this.renderHerbSelect(25, 29)}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">M - P</button>
            <div className="dropdown-content">
              {this.renderHerbSelect(29, 40)}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Q - T</button>
            <div className="dropdown-content">
              {this.renderHerbSelect(40, 47)}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">U - Z</button>
            <div className="dropdown-content">
              {this.renderHerbSelect(47, 55)}
            </div>
          </div>
        </section>

        <HerbEntry />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { herbList: state.herbList, herb: state.herb }
}

export default connect(mapStateToProps, actions)(MateriaMedica);