const mongoose = require('mongoose');
const recordSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },

})
const record = mongoose.model('record',recordSchema);

module.exports = record;