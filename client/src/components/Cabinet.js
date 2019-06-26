import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import uuid from 'uuid';
import axios from 'axios';

class Cabinet extends Component {
  // Fetch the users previously created medicines
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchMedicineList();
  }

  // Edit a medicine
  onEditClick(medicine) {
    this.props.storeMedicine(medicine);
    this.props.history.push('/edit_medicine');
  }

  // Delete a medicine from the cabinet
  onDeleteClick(medicine) {
    // Add animate bounceOutRight
    const form = document.querySelector(`#rx-${medicine._id}`);
    // form.classList.add('animated', 'fadeOut');
    form.classList.add('slide-out-elliptic-top-bck');
    setTimeout(() => {
      axios.delete(`/api/medicine?${medicine._id}`)
        .then(res => this.props.fetchMedicineList())
    }, 500);
  };


  // Render a list of user created medicines
  renderMedicines() {
    if (this.props.medicines !== null && this.props.medicines !== undefined) {
      const { medicines } = this.props;

      return medicines.map(medicine => {
        return (
          <div className="card prescription animated fadeInUp delay-custom2" id={`rx-${medicine._id}`} key={uuid.v4()}>
            <h3>
              <span className="prescription-heading">Date:</span>{medicine.date}
            </h3>
            <h3>
              <span className="prescription-heading">Patient Name:</span>{medicine.patientName}
            </h3>

            {/* <div id="herbs-dosages">
              <div>
                {this.renderHerbs(medicine)}
              </div>
              <div>
                {this.renderDosages(medicine)}
              </div>
            </div> */}

            <table id="prescription-table" className="my-1">
              <thead>
                <tr>
                  <th>Herb</th>
                  <th>Dosage (ml)</th>
                </tr>
              </thead>
              <tbody>
                {this.renderHerbsAndDosages(medicine)}
              </tbody>
            </table>

            <h3>Notes:  {medicine.notes}</h3>
            <div className="prescription-buttons">
              <button id="edit-btn" className="btn btn-dark" onClick={this.onEditClick.bind(this, medicine)}>Edit</button>
              <button id="delete-btn" className="btn btn-danger" onClick={this.onDeleteClick.bind(this, medicine)}>Delete</button>
            </div>
          </div>
        )
      })
    }
  }

  renderHerbsAndDosages(medicine) {
    return medicine.herbs.map(herb => {
      if (herb.dosage !== '') {
        return (
          <tr key={uuid.v4()}>
            <td>{herb.name}</td>
            <td>{herb.dosage}</td>
          </ tr>
        )
      }
      else {
        return null;
      }
    })
  }


  render() {
    return (
      <div className="container" id="cabinet">
        <h1 className="x-large text-primary animated fadeInDown">Medicine Cabinet</h1>
        <p className="medium animated fadeIn delay-custom1">Here you'll find all your previously dispensed medicines!</p>
        {this.renderMedicines()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { medicines: state.medicineList }
}

export default connect(mapStateToProps, actions)(Cabinet);