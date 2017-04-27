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
});

router.post("/", function(req, res){
	burger.insertOne(["burger_name","devoured"], [req.body.burger_name, false] ,function(data){
		res.redirect("/");
	});
});

router.put("/:id", function(req,res){
	console.log(res.body);
	burger.updateOne("devoured", res.body.devoured, "id", req.params.id, function(data){
		res.redirect("/");
	});
});
//=========================================================================



// Exporting the router
//-------------------------------------------------------------------------
module.exports = router;
//=========================================================================