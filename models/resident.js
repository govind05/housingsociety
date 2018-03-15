const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
  wing: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  flatNo: {
    type: Number,
    required: true
  },
  floor: {
    type: Number,
    required: true
  }
});

const Resident = mongoose.model('Resident', residentSchema);

module.exports = {
  Resident
}