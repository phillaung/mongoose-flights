const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', { flights, title: 'All Flights'})
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'})
}

async function create(req, res) {
    try {
        await Flight.create(req.body)
        res.redirect('/flights')
    } catch(err) {
        console.log(err)
        res.rener('/flights/new')
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: flight._id})
    res.render('flights/show', { flight, title: 'Flight Details', tickets });
}

module.exports = {
    index,
    new: newFlight,
    create,
    show
}