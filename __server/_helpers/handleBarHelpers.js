module.exports = function(hbs) {
	
	hbs.registerHelper('jsonDebugger', function(context) {
		return JSON.stringify(context);
	});

};