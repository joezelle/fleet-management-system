const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const VehicleSchema = new Schema({
  vehicleName: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  vin: {
    type: String,
    require: true
  },
  licensePlate: {
    type: String,
    require: true
  },
  year: {
    type: String,
    require: true
  },
  make: {
    type: String,
    require: true
  },
  model: {
    type: String,
    require: true
  },
  color: {
    type: String,
    require: false
  }
});

module.exports = mongoose.model("Vehicle", VehicleSchema);