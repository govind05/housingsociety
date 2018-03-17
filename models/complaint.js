const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
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