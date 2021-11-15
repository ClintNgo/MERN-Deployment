const {Pirate} = require('../models/model.jsx')

module.exports.createPirate = (req, res) => {
    const {name, image, chest, catchphrase, position} = req.body;
    Pirate.create({
        name,
        image,
        chest,
        catchphrase,
        position,
    })
    .then(pirate=>(res.json(pirate)))
    .catch(err=>(res.json(err)))
}

module.exports.getAllPirate = (req,res) =>{
    Pirate.find({})
        .then(pirate => res.json(pirate))
        .catch(err=> res.json(err))
}

module.exports.getPirate = (req, res) => {
    Pirate.findOne({_id:req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err))
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(deletePirate => res.json(deletePirate))
        .catch(err => res.json(err))
}