'use strict'

var express = require("express");
var router = express.Router();

//GET /questions
// Return all the questions
router.get("/", function(req, res) {
    // return all the questions 
    res.json({response: "You sent me a get Request"});


    
});

router.post("/", function(req, res) {
    // return all the questions 
    res.json({response: "You sent me a POST Request",
              body: req.body});

});

router.get("/:id", function(req, res) {
    // return all the questions 
    res.json({
        response: "You sent me a get Request for ID" + req.params.id});


    
});


module.exports = router;