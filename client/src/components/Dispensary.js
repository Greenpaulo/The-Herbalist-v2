import React, { Component } from 'react';

class Dispensary extends Component {
  render() {
    return (
      <div>
        <h1>Dispensary</h1>
        <p>Here in the dispensary you can create herbal prescriptions for yourself, friends and family!</p>
        <p>Select the herb you wish to dispense and then select the amount you wish to add to your prescription. Please make sure you follow the dosage restrictions in the herb's materia medica entry.</p>
        <p>You can then save your newly created medicines in the medicine cabinet for future usage!</p>
        {/* Form to add herbs to a prescription */}
        <form>
          <div>
            <label htmlFor="name">Patient Name</label><br />
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="notes">Notes:</label><br />
            <textarea name="notes" id="notes" cols="50" rows="5"></textarea>
          </div>
        </form>

      </div>
    )
  }
}

export default Dispensary;