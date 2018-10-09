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

router.get("/:qID", function(req, res) {
    // return all the questions 
    res.json({
        response: "You sent me a get Request for ID" + req.params.qID});


    
});

//POST questions/:qID/answers
router.post("/:qID/answers", function(req, res) {
    // return all the questions 
    res.json({response: "You sent me a POST request to / answers",
              questionId: req.params.qID,
              body: req.body,

    });
});

//PUT /questions/:qID/answers/:qID
//Edit a specific answer
router.put("/:qID/answers/:aID", function(req,res){

    res.json({response: "You sent me a PUT request to / asnwers",
               questionId: req.params.qID,
               answerId: req.params.aID,
            body: req.body})
})
router.delete("/:qID/answers/:aID", function(req,res){
    res.json({response: "You sent me a DELETE request to / asnwers",
               questionId: req.params.qID,
               answerId: req.params.aID,
    });
});

//POST /questions/:qIDanswers:aID/vote-up
//POST /questions/:qIDanswers:aID/vote-down

router.post("/:qID/answers/:aID/vote-:dir", function(req,res, next) {
    if (req.params.dir.search(/^up|down$/) === -1) {
        var err = new Error("not found")
        err.status = 404; 
        next(err);
    }
    else {
        next();
    }
}  ,function(req,res){
    res.json({response: "You sent me a DELETE request to /vote-" + req.params.dir,
               questionId: req.params.qID,
               answerId: req.params.aID,
               vote: req.params.dir
    });
});

module.exports = router;