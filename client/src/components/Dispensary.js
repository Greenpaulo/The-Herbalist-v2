import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../actions';
import uuid from 'uuid';


class Dispensary extends Component {
  // Fetch the list of herbs for the herb select
  componentDidMount() {
    this.props.fetchHerbList();
  }

  renderHerbSelect = () => {
    if (this.props.herbList !== null && this.props.herbList !== undefined) {
      return this.props.herbList.map(herb => {
        return (
          <option key={uuid.v4()} value={herb.title}>{herb.title}</option>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Dispensary</h1>
        <p>Here in the dispensary you can create herbal prescriptions for yourself, friends and family</p>
        <p>Select the herb you wish to dispense and then select the amount you wish to add to your prescription. You should aim for about 5-7 herbs per prescription. The maximum recommended is 7.</p>
        <p>IMPORTANT: Please make sure you follow the dosage restrictions in the herb's materia medica entry.</p>
        <p>You can then save your newly created medicines in the medicine cabinet for future usage</p>

        <h2>TIPS FOR PRESCRIBING</h2>
        <ul>
          <li>Try to focus on one or two problems to treat at a time. This will make a more focused prescription and increase the effectiveness of the treatment</li>
          <li>At the same time try to treat the person holistically - for each physical symptom/problem area, try to treat the physical, emotional, mental and spiritual aspect of that problem. </li>
          <li> Note: Whilst treating holistically, we are still focusing on one problem, but treating ALL aspects of that problem. This is not the same as treating many problems at once, which will lead to a more scattered treatment.</li>
        </ul>

        {/* Form to add herbs to a prescription */}
        <Form>
          <div>
            <label htmlFor="patientName">Patient Name</label><br />
            <Field type="text" name="patientName" placeholder="Patient Name" id="patientName" />
          </div>
          <br />

          <div>
            <label htmlFor="herb1">
              Herb One
            <Field component="select" name="herb1">
                <option>Please select...</option>
                {this.renderHerbSelect()}
              </Field>
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
            <Field component="select" name="herb2">
                <option>Please select...</option>
                {this.renderHerbSelect()}
              </Field>
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
            <Field component="select" name="herb3">
                <option>Please select...</option>
                {this.renderHerbSelect()}
              </Field>
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
            <Field component="select" name="herb4">
                <option>Please select...</option>
                {this.renderHerbSelect()}
              </Field>
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
            <Field component="select" name="herb5">
                <option>Please select...</option>
                {this.renderHerbSelect()}
              </Field>
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
            <Field component="select" name="herb6">
                <option>Please select...</option>
                {this.renderHerbSelect()}
              </Field>
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
            <Field component="select" name="herb7">
                <option>Please select...</option>
                {this.renderHerbSelect()}
              </Field>
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
        </Form>

      </div>
    )
  }
}

const FormikDispensary = withFormik({
  mapPropsToValues({ patientName, notes, herb1, herb2, herb3, herb4, herb5, herb6, herb7, dosage1, dosage2, dosage3, dosage4, dosage5, dosage6, dosage7 }) {
    return {
      // TODO - later here when we implement edit functionality, we can fetch an existing Rx from the DB and then use mapStateToProps to put the info in the prop. Then we use mapPropsToValues to take fill the form.
      patientName: patientName || '',
      herb1: herb1 || '',
      herb2: herb2 || '',
      herb3: herb3 || '',
      herb4: herb4 || '',
      herb5: herb5 || '',
      herb6: herb6 || '',
      herb7: herb7 || '',
      dosage1: dosage1 || '',
      dosage2: dosage2 || '',
      dosage3: dosage3 || '',
      dosage4: dosage4 || '',
      dosage5: dosage5 || '',
      dosage6: dosage6 || '',
      dosage7: dosage7 || '',
      notes: notes || ''
    };
  },
  handleSubmit(values, { props }) {
    // TODO - HTTP Request to express API server goes here
    console.log(props);
    props.createMedicine(values);

  }
})(Dispensary)

const mapStateToProps = state => {
  return { herbList: state.herbList }
}

export default connect(mapStateToProps, actions)(FormikDispensary);