// Front End Single Page App for hadling this portoflio site
function FolioApp () {
	var self = this;

	this.getAppFocus = function () {
		if (!self.params.length) return 'general';

		for (var i = 0; i < self.params.length; i ++ ) {
			if ( self.params[i] && self.params[i].key && self.params[i].key.toLowerCase() === 'focus' ) 
				return self.params[i].val;
		}

		return 'general';
	}

	this.getAppTags = function () {
		return [];
	}; // todo : build in tag parsing

	this.parseQueryParams = function () {
		var pageQuery = location.search.slice(1);
		var arr = [];

		if (!!pageQuery) {
			var queryChunks = pageQuery.split('&');
			for (var i = 0; i < queryChunks.length; i++) {
				var keyVal = queryChunks[i].split('=');
				arr.push({ key: keyVal[0], val: keyVal[1] });
			}
		}

		return arr;
	}


	this.params = this.parseQueryParams();
	this.appFocus = this.getAppFocus();
	this.appTags = this.getAppTags();
	this.params = [];

}


window.folioApp = new FolioApp();

