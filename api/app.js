'use strict';

var express = require("express");
var app = express(); 
var routes = require('./routes')

   

    var jsonParser = require('body-parser').json
app.use(jsonParser())

app.use("/questions", routes)

var port = process.env.port || 3000; 

app.use(function(req,res,next) {
    console.log("first piece of middleware")
    req.myMessage = "hello middleware 2"
    console.log("The leaves on the trees are", req.query.color)
    next();
})

app.use("/different/:id", function(req,res,next) {
    console.log("second piece of middleware ID:", req.params.id);
    console.log(req.myMessage);
    next();
})
 
app.listen(port, function() {
    console.log("Express is listening on port", port)
})