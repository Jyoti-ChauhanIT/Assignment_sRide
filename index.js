const express = require('express');
const port = 5000;
const app = express();
const path = require('path');
const db = require('./config/mongoose');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,function(err){
    if (err){
        console.log("something wrong...");
        return false;
    }
    console.log("Server is running on : ",port);
})