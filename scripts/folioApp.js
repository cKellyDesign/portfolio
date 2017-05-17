// Front End Single Page App for hadling this portoflio site
var self;
function FolioApp () {
	self = this;
	this.params = this.parseQueryParams();
	this.appFocus = this.getAppFocus();
	this.appTags = this.getAppTags();
	this.params = [];

	this.model = CkD.loadedModel;
	this.$pitch = $('#pitch');
	this.$featuredWork = $('#featured_work');


	this.initialize();
}

function Base () {}
FolioApp.prototype = new Base();
FolioApp.prototype.constructor = FolioApp;
FolioApp.constructor = Base.prototype.constructor;


FolioApp.prototype.initialize = function () {

	this.renderPitch();

}

FolioApp.prototype.renderPitch = function () {
	if (!this.model.About || !this.model.About.pitch) return false;
	this.$pitch.text(this.model.About.pitch);
}

FolioApp.prototype.getAppFocus = function () {
	if (!self.params.length) return 'general';

	for (var i = 0; i < self.params.length; i ++ ) {
		if ( self.params[i] && self.params[i].key && self.params[i].key.toLowerCase() === 'focus' ) 
			return self.params[i].val;
	}

	return 'general';
}

FolioApp.prototype.getAppTags = function () {
	return [];
} // todo : build in tag parsing


FolioApp.prototype.parseQueryParams = function () {
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


window.folioApp = new FolioApp();

