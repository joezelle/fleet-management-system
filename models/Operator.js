const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Create Schema
const OperatorSchema = new Schema({
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  gender: {
    type: String,
    require: false
  },
  number: {
    type: String,
    require: true
  },
  driverID: {
    type: String,
    require: true
  }
});


module.exports = mongoose.model('Operator', OperatorSchema);