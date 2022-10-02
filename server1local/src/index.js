const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    numberAccount:{
        type: Number,
        required: true
    },
    client: {
        type: String,
        required:true
    },
    
});

module.exports = mongoose.model('Clients', clientSchema);