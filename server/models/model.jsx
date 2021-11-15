const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: { 
        type: String,
        required : [true,'Pirate name is Required!']
    },
    image:{
        type:String,
        required : [true,'Pirate Image is Required!']
    },
    chest: { 
        type: Number,
        required : [true,'Pirate chest number is Required!']
    },
    catchphrase: { 
        type: String,
        required : [true,"Pirate's catch phrase is Required!"]
    },
    position: { 
        type: String,
        required : [true,'Pirate crew position is Required!']
    },
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);

