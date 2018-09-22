(function (root) {
	function calcStep(currentWidth){
		if(currentWidth < 30)
			return 5;
		if(currentWidth < 60)
			return 1;
		if(currentWidth < 85)
			return 0.8;
		if(currentWidth < 90)
			return 0.7;
		if(currentWidth < 95)
			return 0.3;
		return 0.01;
	};
	function removeElement(elementId) {
	    // Removes an element from the document
	    var element = document.getElementById(elementId);
	    element.parentNode.removeChild(element);
	};


	function addClass (el, cls) {
		if (el.classList) el.classList.add(cls)
		else el.className += ' ' + cls
	}

	function progressBar(options){
    	options = options || {}
		var nanobar = new Nanobar(options);
		nanobar.el.classList.remove("loaded");
		addClass(nanobar.el, "loading");
		nanobar.loaded = false;
		nanobar.autoProgress = function() {
			var apTimer = setInterval(function() {
				nanobar.stepup();
				if(nanobar.loaded){
					clearInterval(apTimer);
					nanobar.go(100);
				}
			}, 200);
		};
		nanobar.stepup = function() {
			var me = this;
			width = parseFloat(me.el.children[0].style.width) || 0;
			width = width + calcStep(width);
			if(width >= 100) width = 99.9;
			nanobar.go(width);
		};
		nanobar.done = function() {
			var me = this;
			nanobar.loaded = true;
			addClass(nanobar.el, "loaded");
			nanobar.el.classList.remove("loading");
			setTimeout(function() {
				nanobar.el.remove()
			}, 300);
		};
		if(options.autoProgress){
			nanobar.autoProgress();
		};
		return nanobar;
	};

	if (typeof exports === 'object') {
		// CommonJS
		module.exports = progressBar
	} else if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], function () { return progressBar })
	} else {
		// Browser globals
		root.progressBar = progressBar
	}
}(this));