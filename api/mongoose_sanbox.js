'use strict'

var mongoose = require('mongoose');

mongoose.connect("mongoDB://localhost:27017/sandbox"); 

var db = mongoose.connection;

db.on("error", function() {
    console.error("connection error");
}); 

db.once("open", function() {
    console.log("db connection successful");
    //All Data base conenction function
    var Schema = mongoose.Schema;
    var AnimalSchema = new Schema({
        type: String, 
        size: String,
        color: String, 
        mass: Number, 
        name: String
    }); 
    var Animal = mongoose.model("Animal", AnimalSchema); 

    var elephant = new 

    db.close(); 
});




