// Front End Single Page App for hadling this portoflio site
var self;
function FolioApp () {
	self = this;
	this.model = CkD.loadedModel;
	this.model.FeaturedState.currentState = this.getAppFocus();
	console.log('appFocus :', this.model.FeaturedState.currentState);
	
	// Define Elements
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
	this.initFeaturedGal();
	this.renderFeaturedGal();
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

	var featGalSlugs = this.model.FeaturedState.appStates[this.model.FeaturedState.currentState].gallerySlugs;
	var targetGal = this.model.FeaturedState.appStates[this.model.FeaturedState.currentState].gallery;

	// Build out current app state gallery while removing work from work / projects
	for (var i=0; i < featGalSlugs.length; i++) {
		var galSlug = featGalSlugs[i];

		var galItem = _.findWhere(this.model.Work, {slug: featGalSlugs[i]});
		if (!!galItem) {
			targetGal.push(galItem);
			this.model.Work = _.reject(this.model.Work, function (item) {
				return item.slug === featGalSlugs[i];
			});
		} else {

			galItem = _.findWhere(this.model.Projects, {slug: featGalSlugs[i]});
			if (!!galItem) {
				targetGal.push(galItem)
				this.model.Projects = _.reject(this.model.Projects, function (item) {
					return item.slug === featGalSlugs[i];
				});
			}
		}
	}
}

// todo - make this modular function for featured, work, and projects
FolioApp.prototype.renderFeaturedGal = function () {
	// debugger;
	var featuredArticles = [];
	var thisAppStateGallery = this.model.FeaturedState.appStates[this.model.FeaturedState.currentState].gallery;
	if (!thisAppStateGallery) return;
	
	var columnWidth = '';
	switch (thisAppStateGallery.length) {
		case 4 :
			columnWidth = 'three'
		break;
		case 3 :
			columnWidth = 'four'
		break;
		case 2 :
			columnWidth = 'six'
		break;
	}
	if (!columnWidth.length) return;

	// todo - move this to FolioApp
	this.galElTemplate = _.template(
		'<article class="Gallery <%= (i ? "" : "alpha ") + columnWidth %> columns">'
		+	'<ul class="galList">'
			+	'<li class="galItem first">'
				+	'<a class="galItemLink">'
					+	'<img src="<%= mainImage.feature %>">'
				+	'</a>'
			+	'</li>'
			+	'<% _.each(gallery, function(item, i) { %>'
				+	'<li class="galItem">'
					+	'<a '
						+	'href="<%= item.fullRes %>" '
						+	'class="galItemLink">'
							+	'<img src="<%= item.gal %>" class="galItemImg">'
					+	'</a>'
				+	'</li>'
			+	'<% }); %>'
		+	'</ul>'
	+	'</article>');

	// todo, move this to modular render gallery section
	for (var i = 0; i < thisAppStateGallery.length; i++) {

		var thisFeatured = thisAppStateGallery[i];
			thisFeatured.i = i;
			thisFeatured.columnWidth = columnWidth;

		$(this.$featuredWork).append(self.galElTemplate(thisFeatured)).data(thisFeatured);

		var $Gallery = $('.Gallery:last'),
			$galList = $('.galList', $Gallery),
			$galItem = $('.galItem', $Gallery),
			$galLink = $('.galItemLink', $Gallery),

			galItemMarginLeft = 12,

			galWidth = $Gallery.width(),
			galItemW = galWidth * .80,
			galItemH = galItemW * .5625,
			galListW = ( $galItem.length * galItemW ) + ( ($galItem.length - 1) * galItemMarginLeft)
			
		; 

		$galList.css("width", galListW);
		$galItem.css("width", galItemW).css("height", galItemH);

	}
	
}

FolioApp.prototype.getAppFocus = function () {
	var pageQuery = location.search.slice(1);
	startTime = performance.now();

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
		if (!!hardMatch) return state;
	}

	return (!!softMatch) ? { "soft" : softMatch } : -1;
}

window.folioApp = new FolioApp();

