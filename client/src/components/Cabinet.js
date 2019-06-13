import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import uuid from 'uuid';
import axios from 'axios';

class Cabinet extends Component {
  // Fetch the users previously created medicines
  componentDidMount() {
    this.props.fetchMedicineList();
  }

  // Edit a medicine
  onEditClick(medicine) {
    this.props.storeMedicine(medicine);
    this.props.history.push('/edit_medicine');
  }

  // Delete a medicine from the cabinet
  onDeleteClick(medicine) {
    axios.delete(`/api/medicine?${medicine._id}`)
    this.props.fetchMedicineList();
  };

  // Render content based on authentication status
  renderContent() {

  }



  // Render a list of user created medicines
  renderMedicines() {
    if (this.props.medicines !== null && this.props.medicines !== undefined) {
      const { medicines } = this.props;

      return medicines.map(medicine => {
        return (
          <div className="card" key={uuid.v4()}>
            <h3>Date: {medicine.date}</h3>
            <h3>Patient Name: {medicine.patientName}</h3>

            {this.renderHerbAndDosage(medicine)}

            <p>Notes: {medicine.notes}</p>
            <button className="btn btn-dark" onClick={this.onEditClick.bind(this, medicine)}>Edit</button>
            <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, medicine)}>Delete</button>
          </div>
        )
      })
    }
  }

  renderHerbAndDosage(medicine) {
    return medicine.herbs.map(herb => {
      if (herb.dosage !== '') {
        return <h3 key={uuid.v4()}>Herb: {herb.name}  Dosage: {herb.dosage}</h3>
      }
      else {
        return null;
      }
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Medicine Cabinet</h1>
        <p className="lead">Here you'll find all your previously dispenced medicines!</p>
        {this.renderMedicines()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { medicines: state.medicineList }
}

export default connect(mapStateToProps, actions)(Cabinet);