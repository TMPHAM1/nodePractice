'use strict';

var express = require("express");
var app = express(); 

var port = process.env.port || 3000; 

app.use(function(req,res,next) {
    console.log("first piece of middleware")
    next();
})

app.use("/different/:id", function(req,res,next) {
    console.log("second piece of middleware ID:", req.params.id);
    next();
})
 
app.listen(port, function() {
    console.log("Express is listening on port", port)
})