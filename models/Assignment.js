const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const assignmentsSchema = new Schema({
    vehicle: {
        type: String,
        ref: 'vehicle',
        required: false
    },
    operator: {
        type: String,
        ref: 'operator',
        required: false
    },
    startDate: {
        type: Date,
        ref: 'start Date',
        required: true
    },
    endDate: {
        type: Date,
        ref: 'end Date',
        required: true
    },
    TripDetails: {
        type: String,
        ref: 'Trip details',
        required: true
    }
});

module.exports = mongoose.model('assignments', assignmentsSchema);