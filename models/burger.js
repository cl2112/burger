// Dependencies
//------------------------------------------------------------------------------
const orm = require("../config/orm.js");
//==============================================================================



// Burger Obj
//------------------------------------------------------------------------------
var burger = {

	selectAll: function(callback){
		orm.selectAll("burgers", function(response){
			callback(response);
		});
	},

	insertOne: function(columnsArray, valuesArray, callback){
		orm.insertOne("burgers", columnsArray, valuesArray, function(response){
			callback(response);
		});
	},

	updateOne: function(colToUpdate, valueToUpdate, condition, conditionValue, callback){
		orm.updateOne("burgers", colToUpdate, valueToUpdate, condition, conditionValue, function(response){
			callback(response);
		}
	}
}
//==================================================================================



// Export burger
//-------------------------------------------------------------------------------------
module.exports = burger;
//=====================================================================================