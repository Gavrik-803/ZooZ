const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: String,
  timing: Date,
  groups: [String],
  url: String,
  active: Boolean,
  participants: [{ type: Schema.Types.ObjectId, ref: 'Participant' }],
  // maintain the state of the event
  state: {
    type: String,
    enum: ['active', 'paused', 'stopped'],
    default: 'active'
  },
  currentRound: {
    pairings: [{
      participant1: { type: Schema.Types.ObjectId, ref: 'Participant' },
      participant2: { type: Schema.Types.ObjectId, ref: 'Participant' },
      confirmed: Boolean
    }],
    // start time of the current round, for calculating expiration with timeLimit
    startTime: Date
  },
  maxParticipants: Number,
  timeLimit: Number
});

module.exports = mongoose.model('Event', EventSchema);