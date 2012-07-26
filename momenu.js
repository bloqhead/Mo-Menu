(function($) {
	/*
	* Mo' Menu! 1.0
	* 
	* Copyright 2012, Daryn St. Pierre http://bloqhead.com
	* Released under the WTFPL License
	* http://sam.zoy.org/wtfpl/
	*
	* Date: Tue July 24, 2012
	*/
	
	$.fn.extend({
		moMenu: function(options) {
			var defaults = {
				nocontainer: false,
				container: '#mobileMenu',
				speed: 'fast',
				auto: false,
				animation: 'slideToggle'
			};
			var options = $.extend(defaults, options);
			
			// --------------------------------
			// Mobile Menu
			// --------------------------------
			return this.each(function() {
				var o = options;
				var obj = $(this);
				
				// automatically prepend #mobileMenu to body if desired
				if(o.auto == true) {
					$('body').prepend('<div id="mobileMenu"></div>')
				}
				
				// mobile menu toggle button
				$(o.container).prepend('<a id="toggleMobileMenu" aria-hidden="hidden" href="#"></a>');
				$('a#toggleMobileMenu').click(function() {
					$(this).next('ul').stop().slideToggle(o.speed);
					$(this).toggleClass('active');
				});
				
				// clone the menu ul from the navigation container
				if(o.nocontainer == false) {
					$('ul', obj).clone().appendTo(o.container).hide();
				} else {
					$(obj).clone().appendTo(o.container);
				}
				
				// strip existing classes and id from cloned menu
				// cleans the cloned menu up so that overlapping styles don't occur
				$('ul', o.container).attr('class','').attr('id','');
			});
		}
	});
})(jQuery);