// Front End Single Page App for hadling this portoflio site
var self;
function FolioApp () {
	self = this;

	this.appFocus = this.getAppFocus();

	this.model = CkD.loadedModel;
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
	if (!!this.appFocus && this.appFocus === 'general') this.initFeaturedGal();
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
	var focusGal = this.model.Featured[this.appFocus] || [];

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

FolioApp.prototype.getAppFocus = function () {
	var pageQuery = location.search.slice(1);
	return (!!pageQuery) ? pageQuery : "general";
}

window.folioApp = new FolioApp();

