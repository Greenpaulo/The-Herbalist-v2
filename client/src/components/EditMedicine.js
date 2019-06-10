import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import uuid from 'uuid';

class EditMedicine extends Component {
  // Local state to store input fields
  state = {
    patientName: this.props.storedMedicine.patientName || '',
    herb1: this.props.storedMedicine.herbs[0].name || '',
    dosage1: this.props.storedMedicine.herbs[0].dosage || '',
    herb2: this.props.storedMedicine.herbs[1].name || '',
    dosage2: this.props.storedMedicine.herbs[1].dosage || '',
    herb3: this.props.storedMedicine.herbs[2].name || '',
    dosage3: this.props.storedMedicine.herbs[2].dosage || '',
    herb4: this.props.storedMedicine.herbs[3].name || '',
    dosage4: this.props.storedMedicine.herbs[3].dosage || '',
    herb5: this.props.storedMedicine.herbs[4].name || '',
    dosage5: this.props.storedMedicine.herbs[4].dosage || '',
    herb6: this.props.storedMedicine.herbs[5].name || '',
    dosage6: this.props.storedMedicine.herbs[5].dosage || '',
    herb7: this.props.storedMedicine.herbs[6].name || '',
    dosage7: this.props.storedMedicine.herbs[6].dosage || '',
    notes: this.props.storedMedicine.notes || ''
  };

  // Fetch the list of herbs for the herb select
  componentDidMount() {
    this.props.fetchHerbList();
    console.log(this.props);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  renderHerbSelect = () => {
    if (this.props.herbList !== null && this.props.herbList !== undefined) {
      return this.props.herbList.map(herb => {
        return (
          <option key={uuid.v4()} value={herb.title} id={herb.title}>
            {herb.title}
          </option>
        );
      });
    }
  };

  selectHandler = e => {
    const select = e.currentTarget;
    const herbNumber = select.id;
    const selectedHerb = select.options[select.selectedIndex].text;
    this.setState({ [herbNumber]: selectedHerb });
  };

  clearInputField = e => {
    e.currentTarget.value = '';
  };

  onUpdateSubmit = e => {
    e.preventDefault();
    this.props.updateMedicine(this.props.history, this.props.storedMedicine._id, this.state);
  };

  render() {
    if (this.props.storedMedicine.patientName !== '') {
      const {
        patientName,
        herb1,
        dosage1,
        herb2,
        dosage2,
        herb3,
        dosage3,
        herb4,
        dosage4,
        herb5,
        dosage5,
        herb6,
        dosage6,
        herb7,
        dosage7,
        notes
      } = this.state;
      return (
        <div>
          {/* Edit Form */}
          <form onSubmit={this.onUpdateSubmit}>
            <div>
              <label htmlFor='patientName'>Patient Name</label>
              <br />
              <input
                type='text'
                name='patientName'
                placeholder='Patient Name'
                id='patientName'
                value={patientName}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div>
              <label htmlFor='herb1'>
                Herb One
                <input
                  type='text'
                  placeholder='Add herb...'
                  name='herb1'
                  id='herb1Input'
                  onClick={this.clearInputField}
                  value={herb1}
                  onChange={this.onChange}
                />
                <select
                  component='select'
                  id='herb1'
                  onChange={this.selectHandler}
                >
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>

              <label htmlFor='dosage1'>
                Dosage
                <input
                  type='number'
                  name='dosage1'
                  value={dosage1}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor='herb2'>
                Herb Two
                <input
                  type='text'
                  placeholder='Add herb...'
                  name='herb2'
                  id='herb2Input'
                  onClick={this.clearInputField}
                  value={herb2}
                  onChange={this.onChange}
                />
                <select
                  component='select'
                  id='herb2'
                  onChange={this.selectHandler}
                >
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor='dosage2'>
                Dosage
                <input
                  type='number'
                  name='dosage2'
                  value={dosage2}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor='herb3'>
                Herb Three
                <input
                  type='text'
                  placeholder='Add herb...'
                  name='herb3'
                  id='herb3Input'
                  onClick={this.clearInputField}
                  value={herb3}
                  onChange={this.onChange}
                />
                <select
                  component='select'
                  id='herb3'
                  onChange={this.selectHandler}
                >
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor='dosage3'>
                Dosage
                <input
                  type='number'
                  name='dosage3'
                  value={dosage3}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor='herb4'>
                Herb Four
                <input
                  type='text'
                  placeholder='Add herb...'
                  name='herb4'
                  id='herb4Input'
                  onClick={this.clearInputField}
                  value={herb4}
                  onChange={this.onChange}
                />
                <select
                  component='select'
                  id='herb4'
                  onChange={this.selectHandler}
                >
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor='dosage4'>
                Dosage
                <input
                  type='number'
                  name='dosage4'
                  value={dosage4}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor='herb5'>
                Herb Five
                <input
                  type='text'
                  placeholder='Add herb...'
                  name='herb5'
                  id='herb5Input'
                  onClick={this.clearInputField}
                  value={herb5}
                  onChange={this.onChange}
                />
                <select
                  component='select'
                  id='herb5'
                  onChange={this.selectHandler}
                >
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor='dosage5'>
                Dosage
                <input
                  type='number'
                  name='dosage5'
                  value={dosage5}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor='herb6'>
                Herb Six
                <input
                  type='text'
                  placeholder='Add herb...'
                  name='herb6'
                  id='herb6Input'
                  onClick={this.clearInputField}
                  value={herb6}
                  onChange={this.onChange}
                />
                <select
                  component='select'
                  id='herb6'
                  onChange={this.selectHandler}
                >
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor='dosage6'>
                Dosage
                <input
                  type='number'
                  name='dosage6'
                  value={dosage6}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor='herb7'>
                Herb Seven
                <input
                  type='text'
                  placeholder='Add herb...'
                  name='herb7'
                  id='herb7Input'
                  onClick={this.clearInputField}
                  value={herb7}
                  onChange={this.onChange}
                />
                <select
                  component='select'
                  id='herb7'
                  onChange={this.selectHandler}
                >
                  <option>Please select...</option>
                  {this.renderHerbSelect()}
                </select>
              </label>
              <label htmlFor='dosage7'>
                Dosage
                <input
                  type='number'
                  name='dosage7'
                  value={dosage7}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor='notes'>Notes:</label>
              <br />
              <input
                component='textarea'
                name='notes'
                id='notes'
                cols='50'
                rows='5'
                value={notes}
                onChange={this.onChange}
              />
            </div>
            <button type='submit'>Update</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome to the Edit page!</h1>
          <p>Please choose a prescription from your Medicine Cabinet to edit</p>
          <Link to='/cabinet'>Go To Your Medicine Cabinet</Link>
        </div>
      );
    }
  }
}


const mapStateToProps = state => {
  return { storedMedicine: state.storedMedicine, herbList: state.herbList };
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(EditMedicine)
);
