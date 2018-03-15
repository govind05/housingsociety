const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  subtitle: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true,
  }
});

const Notice = mongoose.model('Notice', noticeSchema);
module.exports = {
  Notice
}