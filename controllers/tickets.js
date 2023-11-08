const Flight = require('../models/flight');
const Ticket = require('../models/ticket')
const mongoose = require('mongoose')

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id)
    res.render('tickets/new', { title: 'Add Ticket', flight})
}

async function create(req, res) {
    req.body.flight = new mongoose.Types.ObjectId(req.params.id)
    try {
        await Ticket.create(req.body)
        res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
        console.log(err)
        res.redirect(`/flights/${req.params.id}/tickets/new`)
    }
}

module.exports = {
    new: newTicket,
    create,
};
