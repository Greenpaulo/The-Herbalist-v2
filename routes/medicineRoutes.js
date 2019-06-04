const mongoose = require('mongoose');

// Creates an instance of our conditions class (DB collection).
const Medicine = mongoose.model('medicines');

module.exports = app => {

  // Handle the post requests to make a new medicine/prescription
  app.post('/api/medicine', async (req, res) => {
    const { values } = req.body;

    // Create the new medicine instance - adding the user's ID and date.
    const medicine = new Medicine({
      user: req.user.googleId,
      patientName: values.patientName,
      date: Date.now(),
      herb1: values.herb1,
      herb2: values.herb2,
      herb3: values.herb3,
      herb4: values.herb4,
      herb5: values.herb5,
      herb6: values.herb6,
      herb7: values.herb7,
      dosage1: values.dosage1,
      dosage2: values.dosage2,
      dosage3: values.dosage3,
      dosage4: values.dosage4,
      dosage5: values.dosage5,
      dosage6: values.dosage6,
      dosage7: values.dosage7,
      notes: values.notes
    })

    // Save the new medicine/prescription to the DB
    const data = await medicine.save();

    // Return the newly saved DB entry.
    res.send(data)
  })

};