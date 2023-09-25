const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
  meetingId: Number,
  group: String,
  color: String,
  number: Number
});

module.exports = mongoose.model('Participant', ParticipantSchema);