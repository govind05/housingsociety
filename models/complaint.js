const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
})

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = {
  Complaint
};