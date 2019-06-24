const mongoose = require('mongoose');
const moment = require('moment');

// Creates an instance of our conditions class (DB collection).
const Medicine = mongoose.model('medicines');

module.exports = app => {

  // Handle the post requests to make a new medicine/prescription
  app.post('/api/medicine', async (req, res) => {
    const date = moment().format('Do MMMM YYYY');
    console.log(date)
    const { values } = req.body;

    // Create the new medicine instance - adding the user's ID and date.
    const medicine = new Medicine({
      user: req.user.googleId,
      patientName: values.patientName,
      date: date,
      herbs: [
        { name: values.herb1, dosage: values.dosage1 },
        { name: values.herb2, dosage: values.dosage2 },
        { name: values.herb3, dosage: values.dosage3 },
        { name: values.herb4, dosage: values.dosage4 },
        { name: values.herb5, dosage: values.dosage5 },
        { name: values.herb6, dosage: values.dosage6 },
        { name: values.herb7, dosage: values.dosage7 }
      ],
      notes: values.notes
    })

    // Save the new medicine/prescription to the DB
    const data = await medicine.save();

    // Return the newly saved DB entry.
    res.send(data)
  })


  // Handle the medicines fetch request, to get a user list of medicines. Returns the medicines with most recently created first.
  app.get('/api/medicine_list', async (req, res) => {
    const data = await Medicine.find({ user: req.user.googleId }).sort({ date: -1 });
    res.send(data);
  })

  // Handle put request to update a stored prescription in the DB
  app.put('/api/medicine', async (req, res) => {
    const { values } = req.body;
    console.log(values.herb1);
    console.log(req.body.medicineID)
    const data = await Medicine.findByIdAndUpdate(req.body.medicineID, {
      patientName: values.patientName,
      herbs: [
        { name: values.herb1, dosage: values.dosage1 },
        { name: values.herb2, dosage: values.dosage2 },
        { name: values.herb3, dosage: values.dosage3 },
        { name: values.herb4, dosage: values.dosage4 },
        { name: values.herb5, dosage: values.dosage5 },
        { name: values.herb6, dosage: values.dosage6 },
        { name: values.herb7, dosage: values.dosage7 }
      ],
      notes: values.notes
    })
    res.send(data);
  })

  // Handle delete request to remove a medicine from the DB
  app.delete('/api/medicine', (req, res) => {
    console.log(req._parsedUrl.query);
    Medicine.findByIdAndDelete({ _id: req._parsedUrl.query })
      .then(data => res.send(data))
  })

};