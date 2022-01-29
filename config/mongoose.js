const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/assignment");

const db = mongoose.connection;

db.on('error',console.error.bind(console,"error in Connection to Mongo.."));

db.once('open',function(err){
    if(err){
        console.log("Something Wrong");
    }
    console.log("database Connected Successfully..");
})