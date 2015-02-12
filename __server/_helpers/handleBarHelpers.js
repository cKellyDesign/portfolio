module.exports = function(hbs) {
	
	hbs.registerHelper('modelParse', function(context) {
		return JSON.stringify(context);
	});

	hbs.registerHelper('jsonParse', function(context) {

		var theStr = JSON.stringify(context);
		return theStr.substring(1, theStr.length-1);
	});

};