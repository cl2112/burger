// Dependencies
//-------------------------------------------------------------------------
var express = require("express");
var burger = require("../models/burger.js");

// Createing the Router() reference
var router = express.Router();
//=========================================================================

//Routes
//-------------------------------------------------------------------------
router.get("/", function(req, res){
	burger.getAll(function(data){
		
		console.log(data);

		var hbsObject = {
			burgers: data
		}
		
		res.render("index", hbsObject);
	});
	// res.render("index", {burgers: {burger_name: "Test",devoured: false, id:"100"}})
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