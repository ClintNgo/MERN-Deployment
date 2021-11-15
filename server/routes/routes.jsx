const PirateController = require('../controllers/controller.jsx');
module.exports = function(app){
    app.get('/api/pirate', PirateController.getAllPirate);
    app.get('/api/pirate/:id', PirateController.getPirate);
    app.post('/api/pirate/new', PirateController.createPirate);
    app.delete('/api/pirate/delete/:id', PirateController.deletePirate);
}