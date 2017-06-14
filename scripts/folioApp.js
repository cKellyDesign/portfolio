// Front End Single Page App for hadling this portoflio site
var self;
function FolioApp () {
	self = this;
	this.model = CkD.loadedModel;
	this.model.FeaturedState.currentState = this.getAppFocus();
	console.log('appFocus :', this.model.FeaturedState.currentState);
	if (this.model.FeaturedState.currentState !== "general") $('#featured_work').show();
	
	// Define Elements
	this.$pitch = $('#pitch');
	this.$highlights = $('#highlights');
	this.$featuredWork = $('#featured_work');
	this.$workEl = $('#work');
	this.$projEl = $('#projects');
	this.$gallEl = $('#galView');

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
	this.renderWork();
	this.renderProj();


	this.sizeState.setSizeState(this.sizeState.getNewSizeState());
	$(window).on('resize', this.onWindowResize);
}

FolioApp.prototype.onWindowResize = _.debounce(function (e) {
	// console.log('resize',$(window).outerWidth());
	var newSizeState = self.sizeState.getNewSizeState();
	if (newSizeState !== 'small' && self.sizeState.currentSizeState === newSizeState) return false;

	switch (newSizeState) {
		case 'large' :
			if (self.sizeState.currentSizeState === 'medium') {
				self.updateGalleryThumbColumns();
			} else {
				$('.Gallery').remove();
				self.renderFeaturedGal();
				self.renderWork();
				self.renderProj();
			}
		break;
		case 'medium':
			if (self.sizeState.currentSizeState === 'large') {
				self.updateGalleryThumbColumns();
			} else {
				$('.Gallery').remove();
				self.renderFeaturedGal();
				self.renderWork();
				self.renderProj();
			}
		break;
		case 'small' :

			$('.Gallery').each(function(i) {
				self.setMobileGalThumbItemWidths($(this))
			});
		break;
	}

	self.sizeState.setSizeState(newSizeState);
}, 500);

FolioApp.prototype.sizeState = {
	currentSizeState : 'small',
	sizeStates : {
		'large' : 800,
		'medium': 550,
		'small' : 0
	},

	setSizeState : function (sizeStr) {
		self.sizeState.currentSizeState = sizeStr;
		// console.log('currentSizeState', self.sizeState.currentSizeState);
	},
	getNewSizeState: function () {
		var w = $(window).outerWidth();

		for (var size in self.sizeState.sizeStates) {
			if (w >= self.sizeState.sizeStates[size]) return size;
		}
		return 'large'
	}
};

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


	// gallery template
FolioApp.prototype.galElTemplate = _.template(
	'<article class="Gallery <%= columnWidth %>">'
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
						+	'<img src="<%= item.thumb %>" class="galItemImg">'
				+	'</a>'
			+	'</li>'
		+	'<% }); %>'
	+	'</ul>'
+	'</article>');

FolioApp.prototype.renderGalleryCollection = function (gal, galEl, n) {
	var column = this.determineColumnWidth(gal);
	if (!column.columnWidth.length) return;
	var n = n || column.n;


	for (var i = 0; i < gal.length; i++) {

		var thisGalCollection = gal[i];
			thisGalCollection.i = i;
		;

		// handle featured work columing
		if ( $(galEl).attr('id') === "featured_work") {
			thisGalCollection.columnWidth = column.columnWidth
			if ( (typeof n !== "undefined") && ( !i || !(i % n) ) ) {
				thisGalCollection.columnWidth = column.columnWidth + ' alpha';
			}
		} else {
			thisGalCollection.columnWidth = '';
		}

		
		// render gallery and append data to element
		$(galEl).append(self.galElTemplate(thisGalCollection));
		var $Gallery = $('.Gallery:last', galEl).data(thisGalCollection),
			$galList = $('.galList', $Gallery);

		// mobile item thumb sizing
		if ( $(window).outerWidth() < 550 ) {
			self.setMobileGalThumbItemWidths($Gallery);
		}
		
		// Listen for clicks to launch gallery view
		$('.galItemLink', $galList).on('click', this.onGalThumbClick);
	}

	if ( $(galEl).attr('id') !== "featured_work") self.updateGalleryThumbColumns(galEl);
}

FolioApp.prototype.setMobileGalThumbItemWidths = function ($Gallery) {
	var	$galList = $('.galList', $Gallery),
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

	$galList.off('touchstart', this.onGalTouchStart).on('touchstart', this.onGalTouchStart);
}

FolioApp.prototype.updateGalleryThumbColumns = function (galEl) {
	var columnStr = 'one-half',
		rowCount  = 2;

	if ( $(window).outerWidth() >= 800 ) {
		columnStr = 'four';
		rowCount = 3;
	}

	$('.Gallery', galEl)
		.removeClass('one-half').removeClass('three').removeClass('alpha')
		.addClass('column' + (rowCount === 3 ? 's' : ''))
		.addClass(columnStr)
		.each(function(i) {
			var index = $(this).index() - 1;

			if ( index === 0 || !(index % rowCount) ) $(this).addClass('alpha')
		})
	;

}

FolioApp.prototype.onGalThumbClick = function (e) {
	e.preventDefault();
	e.stopPropagation();

	var galModel = $(this).parents('.Gallery').data();
	galModel.activeItem = $(this).parents('.galItem').index();
	galModel.gallery.forEach(function (el, i) {
		el.active = (i === galModel.activeItem);
	});
	
	self.renderGalView(galModel);
}

FolioApp.prototype.galViewTemplate = _.template(
	'<div class="galImageContainer">'
	+ 	'<img>'
	+	'<div class="fadeOverlay"><div></div></div>'
	// + 	'<img src="<%= gallery[activeItem].gal %>">'
+	'</div>'

+	'<div class="galInfoContainer">'
	+	'<h3 class="galTitle"><%= title %></h3>'
	+	'<p><%= description %></p>'
	+	'<i class="show fa fa-angle-down"></i>'
	// +	'<i class="galnav prev"></i>'
	// +	'<i class="galnav next"></i>'
+	'</div>'

+	'<div class="galItemsListContainer">'
	+	'<div>'
	+	'<% _.each(gallery, function(item, i) { %>'
		
			+	'<a class="galItemLink" href="<%= item.fullRes %>" target="_blank" data-gal="<%= item.gal %>">'
				+	'<img src="<%= item.thumb %>">'
			+	'</a>'

	+	'<% }); %>'
	+	'</div>'
+	'</div>'

+ 	'<i class="fa fa-close closeGalView ghost"></i>'
);
FolioApp.prototype.swallowEvent = function (e) {
	e.stopPropagation();
}
FolioApp.prototype.renderGalView = function (galModel) {
	if (!galModel) return;

	// Render actual elements to DOM
	self.$gallEl.html(self.galViewTemplate(galModel))
		.addClass('active')
		.addClass('init');
	$('body').addClass('galView');


	// Add listener for load to img and set the src
	$('.galImageContainer > img').on('load', function(e) {
		var el = this,
			winRatio = $(window).width() / ($(window).height() * 0.85);

		setTimeout(function(){
			var imgRatio = ($(el).width()) / ($(el).height());
			// console.log('winRatio vs imgRatio : ', winRatio, imgRatio);
			$('.galImageContainer').attr('class','galImageContainer')
			$('.galImageContainer').addClass( ( imgRatio > winRatio ) ? 'horz' : 'vert' );
			$(el).removeClass('ghost');
		}, 200);
	})
	.attr('src', galModel.gallery[galModel.activeItem].gal);


	var width = $('.galItemsListContainer .galItemLink').width() * ($('.galItemsListContainer .galItemLink').length + 1);
	$('.galItemsListContainer > div').width(width);

	// Bind gal thumb click handler
	$('.galItemLink').on('click', self.onGalItemLinkClick);

	// Bind close button handler
	$('.closeGalView, body').on('mouseup', self.handleCloseGalView).removeClass('ghost');
	$(window).on('keydown', self.handleCloseGalView);

	$('.galInfoContainer .show').on('click', self.onShowMoreLess);


	setTimeout(function(){
		$('#galView').removeClass('init');
	},1500)
}

FolioApp.prototype.handleCloseGalView = function (e) {
	e.preventDefault();
	e.stopPropagation();


	if ( 	(	!!e.keyCode && e.keyCode !== 27
	)	||  (	$(e.target).attr('id') === 'galView' 
	)	|| 		$(e.target).parents('section').attr('id') === 'galView'	 
		&& 		!$(this).hasClass('closeGalView')
		) return false;


	$('.closeGalView, body').off('mouseup', self.handleCloseGalView);
	$(window).off('keydown', self.handleCloseGalView);

	$('#galView.active').removeClass('active');
	$('body').removeClass('galView');

	$('.closeGalView').addClass('ghost');
	$('.galItemLink').off('click', self.onGalItemLinkClick)
}

FolioApp.prototype.onShowMoreLess = function (e) {
	if ($(this).hasClass('less')) {
		$('#galView').removeClass('init');
	} else {
		$('#galView').addClass('init');
	}

	$('.galInfoContainer').height( (!$(this).hasClass('less')) ? $('.galInfoContainer p').height() + 64 : 50 );

	$(this).toggleClass('less');
}

FolioApp.prototype.onGalItemLinkClick = function (e) {
	e.preventDefault();
	e.stopPropagation();


	$('.galItemLink.active').removeClass('active');
	$(this).addClass('active');
	var galUrl = $(this).data('gal');

	$('.galImageContainer > img').addClass('ghost');
	setTimeout(function(){	
		$('.galImageContainer > img').attr('src', galUrl)
	},400);
}




FolioApp.prototype.onGalTouchStart = function (e) {
	e.stopPropagation()
	var $Gal = $(e.target).parents('.Gallery');
	if ( $Gal.hasClass('focus') ) return;

	// update gal focus
	$('.Gallery.focus').removeClass('focus');
	$Gal.addClass('focus');

	// if no gallery focus add it
	if ( !$('body').hasClass('focused') ) { 

		$('body').addClass('focused')

			// add event listener to un-focus the galleries
			.one('click', function (e) { 
				$('.Gallery.focus').removeClass('focus');
				$('body').removeClass('focused');
				$('.Gallery').animate({ scrollLeft: 0 }, 400);
		});
	}
}


FolioApp.prototype.determineColumnWidth = function (arr) {
	var columnWidth = '';
	switch (arr.length) {
		case 4 :
			columnWidth = 'three columns';
			n = 3;
		break;
		case 3 :
			columnWidth = 'four columns';
			n = 4;
		break;
		case 2 :
			columnWidth = 'six columns';
			n = 2;
		break;
		default :
			columnWidth = 'one-half column';
			n = 2;
		break;
	}

	return  { columnWidth : columnWidth, n: n};
}

FolioApp.prototype.renderFeaturedGal = function () {
	// debugger;
	var thisAppStateGallery = this.model.FeaturedState.appStates[this.model.FeaturedState.currentState].gallery;
	if (!thisAppStateGallery) return;

	this.renderGalleryCollection(thisAppStateGallery, this.$featuredWork);
}

FolioApp.prototype.renderWork = function () {
	this.renderGalleryCollection(this.model.Work, this.$workEl, 2);
}

FolioApp.prototype.renderProj = function () {
	this.renderGalleryCollection(this.model.Projects, this.$projEl, 2);
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

