const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'JFK', 'LAX', 'SAN', 'SFO'],
    },
    arrival: Date
}, {
    timestamps: true
});

const flightSchema = new Schema(
    {
        airline: {
            type: String,
            enum: ['American', 'Southwest', 'United', 'Spirit', 'Delta'],
        },
        airport: {
            type: String,
            enum: ['AUS', 'DFW', 'DEN', 'JFK', 'LAX', 'SAN', 'SFO'],
        },
        flightNo: {
            type: Number,
            require: true,
            min: 10,
            max: 9999,
        },
        departs: {
            type: Date,
            default: () => Date.now,
        },
        destinations: [destinationSchema]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Flight', flightSchema)