/* eslint-disable prefer-destructuring */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const issueSchema = new Schema({
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle"
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  summary: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Serious, not serious, urgent, very urgent
  priority: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true
    // ref: "Operator"
  },
  active: {
    type: Boolean
  }
});

module.exports = mongoose.model("Issue", issueSchema);
// Mongoose creates the name of the collection as the plural of user
