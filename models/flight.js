const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema(
    {
        airline: {
            type: String,
            enum: ['American', 'Southwest', 'United', 'Spirit', 'Delta'],
        },
        airport: {
            type: String,
            enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'JFK', 'SFO'],
        },
        flightNo: {
            type: Number,
            require: true,
            min: 10,
            max: 9999,
        },
        departs: {
            type: Date,
            default: Date.now
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Flight', flightSchema)