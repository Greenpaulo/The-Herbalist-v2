import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import uuid from 'uuid';

class EditMedicine extends Component {
  // Fetch the list of herbs for the herb select
  componentDidMount() {
    this.props.fetchHerbList();
  }

  renderHerbSelect = () => {
    if (this.props.herbList !== null && this.props.herbList !== undefined) {
      return this.props.herbList.map(herb => {
        return <option key={uuid.v4()} value={herb.title} id={herb.title} >{herb.title}</option>
      })
    }
  }

  selectHandler = (e) => {
    const select = e.currentTarget;
    const herbNumber = select.id;
    const selectedHerb = select.options[select.selectedIndex].text;
    console.log(select)
    console.log('name of the select option:', herbNumber)
    console.log(selectedHerb);
    this.setInputField(herbNumber, selectedHerb)
  }

  setInputField = (herbNumber, selectedHerb) => {
    const input = document.getElementById(herbNumber + 'Input');
    input.value = selectedHerb;
  }

  clearInputField = (e) => {
    e.currentTarget.value = '';
  }

  render() {
    if (this.props.medicine !== null) {
      return (
        <div>
          <Form>
            <div>
              <label htmlFor="patientName">Patient Name</label><br />
              <Field type="text" name="patientName" placeholder="Patient Name" id="patientName" />
            </div>
            <br />

            <div>
              <label htmlFor="herb1">
                Herb One

              <input type="text" placeholder="Add herb..." name="herb1" id="herb1Input" onClick={this.clearInputField} value={this.props.values.herb1} onChange={this.props.handleChange} />

                <select component="select" id="herb1" onChange={this.selectHandler}>
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>

              </label>
              <label htmlFor="dosage1">
                Dosage
              <Field type="number" name="dosage1" />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="herb2">
                Herb Two
              <input type="text" placeholder="Add herb..." name="herb2" id="herb2Input" onClick={this.clearInputField} value={this.props.values.herb2} onChange={this.props.handleChange} />
                <select component="select" id="herb2" onChange={this.selectHandler}>
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor="dosage2">
                Dosage
              <Field type="number" name="dosage2" />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="herb3">
                Herb Three
              <input type="text" placeholder="Add herb..." name="herb3" id="herb3Input" onClick={this.clearInputField} value={this.props.values.herb3} onChange={this.props.handleChange} />
                <select component="select" id="herb3" onChange={this.selectHandler}>
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor="dosage3">
                Dosage
              <Field type="number" name="dosage3" />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="herb4">
                Herb Four
              <input type="text" placeholder="Add herb..." name="herb4" id="herb4Input" onClick={this.clearInputField} value={this.props.values.herb4} onChange={this.props.handleChange} />
                <select component="select" id="herb4" onChange={this.selectHandler}>
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor="dosage4">
                Dosage
              <Field type="number" name="dosage4" />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="herb5">
                Herb Five
              <input type="text" placeholder="Add herb..." name="herb5" id="herb5Input" onClick={this.clearInputField} value={this.props.values.herb5} onChange={this.props.handleChange} />
                <select component="select" id="herb5" onChange={this.selectHandler}>
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor="dosage5">
                Dosage
              <Field type="number" name="dosage5" />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="herb6">
                Herb Six
              <input type="text" placeholder="Add herb..." name="herb6" id="herb6Input" onClick={this.clearInputField} value={this.props.values.herb6} onChange={this.props.handleChange} />
                <select component="select" id="herb6" onChange={this.selectHandler}>
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor="dosage6">
                Dosage
              <Field type="number" name="dosage6" />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="herb7">
                Herb Seven
              <input type="text" placeholder="Add herb..." name="herb7" id="herb7Input" onClick={this.clearInputField} value={this.props.values.herb7} onChange={this.props.handleChange} />
                <select component="select" id="herb7" onChange={this.selectHandler}>
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor="dosage7">
                Dosage
              <Field type="number" name="dosage7" />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="notes">Notes:</label><br />
              <Field component="textarea" name="notes" id="notes" cols="50" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </Form >
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome to the Edit page!</h1>
          <p>Please choose a prescription from your Medicine Cabinet to edit</p>
          <Link to="/cabinet">Go To Your Medicine Cabinet</Link>
        </div>
      )
    }
  }
}


const FormikEditMedicine = withFormik({
  mapPropsToValues({ medicine }) {
    if (medicine !== null) {
      return {
        patientName: medicine.patientName || '',
        herb1: medicine.herbs[0].name || '',
        herb2: medicine.herbs[1].name || '',
        herb3: medicine.herbs[2].name || '',
        herb4: medicine.herbs[3].name || '',
        herb5: medicine.herbs[4].name || '',
        herb6: medicine.herbs[5].name || '',
        herb7: medicine.herbs[6].name || '',
        dosage1: medicine || '',
        // dosage2: dosage2 || '',
        // dosage3: dosage3 || '',
        // dosage4: dosage4 || '',
        // dosage5: dosage5 || '',
        // dosage6: dosage6 || '',
        // dosage7: dosage7 || '',
        // notes: notes || ''
      };
    }
  },
  handleSubmit(values, { props }) {
    props.updateMedicine(props.history, values);
  }

})(EditMedicine)

const mapStateToProps = state => {
  return { medicine: state.storedMedicine, herbList: state.herbList }
}

export default withRouter(connect(mapStateToProps, actions)(FormikEditMedicine));

