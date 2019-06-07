import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import uuid from 'uuid';

class Cabinet extends Component {
  // Fetch the users previously created medicines
  componentDidMount() {
    this.props.fetchMedicineList();
  }

  onEditClick(medicine) {
    this.props.storeMedicine(medicine);
    console.log(medicine)
    this.props.history.push('/edit_medicine');
  }

  // Render a list of user created medicines
  renderMedicines() {
    if (this.props.medicines !== null && this.props.medicines !== undefined) {
      const { medicines } = this.props;

      return medicines.map(medicine => {
        return (
          <div key={uuid.v4()}>
            <h3>Date: {medicine.date}</h3>
            <h3>Patient Name: {medicine.patientName}</h3>

            {this.renderHerbAndDosage(medicine)}

            <p>Notes: {medicine.notes}</p>
            <button onClick={this.onEditClick.bind(this, medicine)}>Edit</button>
            {/* TODO - DELETE - delete api request */}
            <button>Delete</button>
            <br />
            <br />
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
      <div>
        <h1>Medicine Cabinet</h1>
        <p>Here you'll find all your previously dispenced medicines!</p>
        {this.renderMedicines()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { medicines: state.medicineList }
}

export default connect(mapStateToProps, actions)(Cabinet);