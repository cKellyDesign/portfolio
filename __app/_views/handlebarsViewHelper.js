module.exports = function(hbs) {

	// Basic For Each function
	hbs.registerHelper('forEachSubtopic', function(context, options) {
		var ret = "";
		for(var i=1, j=context.length; i<j; i++) {
			ret = ret + options.fn(context[i]);
		}
		return ret;
	});

	// Sets the scope of the model calls within this helper
	hbs.registerHelper('with', function(context, options) {
		return options.fn(context);
	});

};