var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets')

/* GET home page. */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.delete('/flights/:flightId/tickets/:ticketId', ticketsCtrl.delete)

module.exports = router;
