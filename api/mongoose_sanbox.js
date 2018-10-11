'use strict'

var mongoose = require('mongoose');

mongoose.connect("mongoDB://localhost:27017/sandbox"); 

var db = mongoose.connection;

db.on("error", function() {
    console.error("connection error")l;
}); 

db.once("open");




