// Dependencies
//--------------------------------------------------------------------
var connection = require("../config/connection.js");
//====================================================================



// orm helper function

function printQuestionMarks(howMany){
	var questionMarksArray = [];

	for (var i = 0; i < howMany; i++){
		questionMarksArray.push("?");
	}

	return questionMarksArray.toString();
};







var orm = {


selectAll: function(table,callback){
	var queryString = "SELECT * FROM " + table + ";";
	connection.query(queryString, function(err, queryResult){
		if (err){
			throw err
		};
		callback(queryResult);
	}); 
},


insertOne: function(table,columnsArray, valuesArray, callback){
	var queryString = "INSERT INTO "+table +
	" ("+ columnsArray.toString() + ")" +
	" VALUES (" + printQuestionMarks(valuesArray.length) + ") ";

	console.log(queryString);

	connection.query(queryString, valuesArray, function(err, queryResult){
		if (err){
			throw err;
		}
		callback(queryResult);
	}); 
},

updateOne: function(table,colToUpdate, valueToUpdate, condition, conditionValue, callback){
	var queryString = "UPDATE " + table +
	" SET " + colToUpdate + " = " + valueToUpdate + 
	" WHERE " + condition + " = " + conditionValue;

	console.log(queryString);

	connection.query(queryString, function(err, queryResult){
		if (err) {
			throw err;
		}
		callback(queryResult)
	});	
},




// End of ORM Object
} 



// Export ORM
//--------------------------------------------------------------------
module.exports = orm;
//====================================================================

