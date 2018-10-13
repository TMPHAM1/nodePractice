'use strict'

var mongoose = require('mongoose');

mongoose.connect("mongoDB://localhost:27017/sandbox", {useNewUrlParser: true}); 

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

    var elephant = new Animal({
        type: "elephant",
        size: "Big",
        color: "gray",
        mass: 6000,
        name: "Lawrence"
    });

    elephant.save(function(err){
        if(err) console.error("Save Failed.", err)
        else console.log("Saved!");
        db.close( function() {
            console.log("connection is closed");
        }); 
    });
   
});




