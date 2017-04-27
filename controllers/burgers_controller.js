// Dependencies
//-------------------------------------------------------------------------
const express = require("express");
const burger = require("./../models/burger.js");

// Createing the Router() reference
const router = express.Router();
//=========================================================================

//Routes
//-------------------------------------------------------------------------
router.get("/", function(req, res){
	burger.selectAll(function(data){

	})
});

router.post("/", function(req, res){
	burger.insertOne(req.body.columsArray, req.body.valuesArray ,function(data){
		
	});
});

router.put("/", function(req,res){
	burger.updateOne(function(data){

	});
});
//=========================================================================



// Exporting the router
//-------------------------------------------------------------------------
module.exports = router;
//=========================================================================