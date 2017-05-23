// Front End Single Page App for hadling this portoflio site
var self;
function FolioApp () {
	self = this;
	this.model = CkD.loadedModel;
	this.appFocus = this.getAppFocus();
	console.log('appFocus :', this.appFocus);


	
	this.$pitch = $('#pitch');
	this.$highlights = $('#highlights');
	this.$featuredWork = $('#featured_work');


	this.initialize();
}

function Base () {}
FolioApp.prototype = new Base();
FolioApp.prototype.constructor = FolioApp;
FolioApp.constructor = Base.prototype.constructor;


FolioApp.prototype.initialize = function () {

	this.renderPitch();
	this.renderHighlights();
	// this.initFeaturedGal();
	// if (!!this.appFocus && this.appFocus === 'general') this.initFeaturedGal();
}

FolioApp.prototype.renderPitch = function () {
	if (!this.model.About || !this.model.About.pitch) return false;
	this.$pitch.text(this.model.About.pitch);
}

FolioApp.prototype.renderHighlights = function () {
	if (!this.model.About || !this.model.About.highlights) return false;
	for (var i = 0; i < this.model.About.highlights.length; i++) {
		var thisHighlight = this.model.About.highlights[i];
		var thisHighlightHTML = '<div class="highlight six columns' + ((i % 2) ? '' : ' alpha') + '">' +
									'<h3 class="highlight_title">' + thisHighlight.title + '</h3>' +
									'<p class="highlight_par">' + thisHighlight.paragraph + '</p>' +
								'</div>';
		this.$highlights.append(thisHighlightHTML);
	}
}

FolioApp.prototype.initFeaturedGal = function () {










	// var focusGal = this.model.FeaturedState.
	// this.model.Featured[this.appFocus] || [];

	for (var i=0; i < focusGal.length; i++) {
		var galSlug = focusGal[i];
		var galItem = _.findWhere(this.model.Work, {slug: focusGal[i]});
		if (!!galItem) {
			this.model.FeaturedGallery.push(galItem);
			this.model.Work = _.reject(this.model.Work, function (item) {
				return item.slug === focusGal[i];
			});
		} else {
			galItem = _.findWhere(this.model.Projects, {slug: focusGal[i]});
			if (!!galItem) {
				
				this.model.Projects = _.reject(this.model.Projects, function (item) {
					return item.slug === focusGal[i];
				});
			}
		}
	}

	console.log(this.model.FeaturedGallery);
}

FolioApp.prototype.renderFeaturedGal = function () {
	
}
var startTime, endTime, temporalDelta;
FolioApp.prototype.getAppFocus = function () {
	var pageQuery = location.search.slice(1);
	startTime = performance.now();
	// console.log("pageQuery : ", pageQuery);
	if (!pageQuery || !this.model || !this.model.FeaturedState) return "general";

	if (pageQuery.indexOf(',') !== -1) pageQuery = pageQuery.split(',');

	var softFocus; // var for storing soft matching foci through iterations

	if (typeof pageQuery === "string") { // do thing once, else iterate over pageQuery as array
		var match = this.checkForTagMatch(pageQuery); 
		if (match === -1) return "general";
		if (typeof match === "string") return match; // return hard match if string!
		if (!!match.soft) softFocus = match.soft; // stash softFocus

	} else {
		for (var i = 0; i < pageQuery.length; i++) {
			var thisMatch = this.checkForTagMatch(pageQuery[i]);

			if (thisMatch !== -1) {
				if (typeof thisMatch === "string") return thisMatch; // if hard match, return 
				if (!!thisMatch.soft) softFocus = thisMatch.soft; // stash softFocus
			}
		}
	}
	
	return softFocus || "general";
}

// returns -1 for no match found; returns {"soft":"val"} for soft match; returns "val" for hard match
FolioApp.prototype.checkForTagMatch = function (pageQuery) {
	var hardMatch;
	var softMatch;

	pageQuery = pageQuery.replace(/ /g, '').replace(/-/g, '').replace(/_/g, '').toLowerCase();

	for (var state in this.model.FeaturedState.appStates) {
		var thisAppState = this.model.FeaturedState.appStates[state]

		for (var i = 0; i < thisAppState.tags.length; i++) {
			var tag = thisAppState.tags[i];
			if (tag.indexOf(pageQuery) !== -1) softMatch = state; // stash the soft matching tag
			if (pageQuery === tag) hardMatch = softMatch; // check softMatch for direct match
		}
		if (!!hardMatch) return state ;
		if (!!softMatch) return { "soft" : state}
	}

	return (!!softMatch) ? { "soft" : softMatch } : -1;
}

window.folioApp = new FolioApp();

