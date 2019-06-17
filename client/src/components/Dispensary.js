import React, { Component, Fragment } from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import uuid from 'uuid';


class Dispensary extends Component {
  // Fetch the list of herbs for the herb select
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchHerbList();
  }

  renderHerbSelect = () => {
    if (this.props.herbList !== null && this.props.herbList !== undefined) {
      return this.props.herbList.map(herb => {
        return (
          <option key={uuid.v4()} id={herb.title}>{herb.title}</option>
        )
      })
    }
  }



  render() {
    return (
      <Fragment>

        <section className="container" id="dispensary">
          <h1 className="large text-primary">Dispensary</h1>

          <p className="lead">Here in the dispensary you can create herbal prescriptions for yourself, friends and family</p>

          <div className="card" id="card-one">
            <p><i className="fas fa-leaf fa-lg"></i>   Select the herb you wish to dispense and then select the amount you wish to add to your prescription. You should aim for about 5-7 herbs per prescription. The maximum recommended is 7.</p>
            <p><i className="fas fa-flask fa-lg"></i>   You can then save your newly created medicines in the medicine cabinet for future usage</p>
            <p><i className="fas fa-exclamation-circle fa-lg"></i><strong>IMPORTANT :</strong> Please make sure you follow the dosage restrictions in the herb's materia medica entry.</p>
          </div>
          <br />


          <p className="lead">Tips For Prescribing</p>

          <div className="card" id="card-two">
            <div className="list-group">
              <i className="fas fa-clipboard-check fa-lg"></i>
              <p> Try to focus on one or two problems to treat at a time. This will make a more focused prescription and increase the effectiveness of the treatment</p>
            </div>

            <div className="list-group">
              <i className="fas fa-clipboard-check fa-lg"></i>
              <p> At the same time try to treat the person hopstically - for each physical symptom/problem area, try to treat the physical, emotional, mental and spiritual aspect of that problem. </p>
            </div>

            <div className="list-group">
              <i className="fas fa-clipboard-check fa-lg"></i>
              <p> Note: Whilst treating hollistically, we are still focusing on one problem, but treating ALL aspects of that problem. This is not the same as treating many problems at once, which will lead to a more scattered treatment.</p>
            </div>
          </div>
          <br />

          <p className="lead">Prescription</p>

          {/* Form to add herbs to a prescription */}
          <div className="card" id="prescription-form">
            <Form className="form">
              <i className="fas fa-prescription fa-3x"></i>
              <div className="form-group">
                <label htmlFor="patientName">Patient Name</label><br />
                <Field type="text" name="patientName" placeholder="Enter name..." id="patientName" />
              </div>

              <div className="form-group">
                <label htmlFor="herb1">
                  Herb:
                    <Field component="select" name="herb1">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage1">
                  Dosage (ml)
                  <Field type="number" name="dosage1" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb2">
                  Herb:
                    <Field component="select" name="herb2">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage2">
                  Dosage (ml)
                  <Field type="number" name="dosage2" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb3">
                  Herb:
                    <Field component="select" name="herb3">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage3">
                  Dosage (ml)
                  <Field type="number" name="dosage3" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb4">
                  Herb:
                    <Field component="select" name="herb4">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage4">
                  Dosage (ml)
                  <Field type="number" name="dosage4" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb5">
                  Herb:
                    <Field component="select" name="herb5">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage5">
                  Dosage (ml)
                  <Field type="number" name="dosage5" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb6">
                  Herb:
                    <Field component="select" name="herb6">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage6">
                  Dosage (ml)
                  <Field type="number" name="dosage6" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="herb7">
                  Herb:
                    <Field component="select" name="herb7">
                    <option>Please select...</option>
                    {this.renderHerbSelect()}
                  </Field>
                </label>
                <label htmlFor="dosage7">
                  Dosage (ml)
                  <Field type="number" name="dosage7" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notes:</label><br />
                <Field component="textarea" name="notes" id="notes" cols="50" rows="5" />
              </div>

              <button className="btn btn-primary" type="submit">Dispense</button>
            </Form>
          </div>

        </section >

      </Fragment >
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
    props.createMedicine(props.history, values);
  }

})(Dispensary)

const mapStateToProps = state => {
  return { herbList: state.herbList }
}

export default withRouter(connect(mapStateToProps, actions)(FormikDispensary));