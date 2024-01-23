function calloutsAdj(){
	var ctaImg1 = $('div.horizontal.callouts div.vertical div.diy-f-spot.callout1 img').height() / 2;
	var ctaImg2 = $('div.horizontal.callouts div.vertical div.diy-f-spot.callout2 img').height() / 2;
	if (ctaImg1 > ctaImg2 || ctaImg1 == ctaImg2) {
		var imgBuffer = ctaImg1;
	} else {
		var imgBuffer = ctaImg2;
	}
	$('div.horizontal.callouts div.vertical div.diy-f-spot.callout1 img').css("margin-top", "-" + ctaImg1 + "px");
	$('div.horizontal.callouts div.vertical div.diy-f-spot.callout2 img').css("margin-top", "-" + ctaImg2 + "px");

	var calloutsHeight = $('div.callouts').height();

	var calloutsTopMarg = ( calloutsHeight + 17 );
	var contentWrapMargTop = ( calloutsHeight + imgBuffer + 17 );
	$('div.horizontal.callouts').css("margin-top", "-" + calloutsTopMarg + "px");
	$('div#wrapper-content').css("margin-top", contentWrapMargTop + "px");
}	 

// For those who need them (< IE 9), add support for CSS functions
var isStyleFuncSupported = CSSStyleDeclaration.prototype.getPropertyValue != null;
if (!isStyleFuncSupported) {
    CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
        return this.getAttribute(a);
    };
    CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
        this.setAttribute(styleName,value);
        var priority = typeof priority != 'undefined' ? priority : '';
        if (priority != '') {
            // Add priority manually
            var rule = new RegExp(RegExp.escape(styleName) + '\\s*:\\s*' + RegExp.escape(value) + '(\\s*;)?', 'gmi');
            this.cssText = this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
        } 
    }
    CSSStyleDeclaration.prototype.removeProperty = function(a) {
        return this.removeAttribute(a);
    }
    CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
        var rule = new RegExp(RegExp.escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?', 'gmi');
        return rule.test(this.cssText) ? 'important' : '';
    }
}

// Escape regex chars with \
RegExp.escape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// The style function
jQuery.fn.style = function(styleName, value, priority) {
    // DOM node
    var node = this.get(0);
    // Ensure we have a DOM node 
    if (typeof node == 'undefined') {
        return;
    }
    // CSSStyleDeclaration
    var style = this.get(0).style;
    // Getter/Setter
    if (typeof styleName != 'undefined') {
        if (typeof value != 'undefined') {
            // Set style property
            var priority = typeof priority != 'undefined' ? priority : '';
            style.setProperty(styleName, value, priority);
        } else {
            // Get style property
            return style.getPropertyValue(styleName);
        }
    } else {
        // Get CSSStyleDeclaration
        return style;
    }
}