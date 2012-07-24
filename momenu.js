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
		mobileMenu: function(options) {
			var defaults = {
				nocontainer: false,
				container: '#mobileMenu',
				speed: 'fast'
				//theme: 'default'
			};
			var options = $.extend(defaults, options);
			
			// --------------------------------
			// Mobile Menu
			// --------------------------------
			return this.each(function() {
				var o = options;
				var obj = $(this);
				
				// mobile menu toggle button
				$(o.container).prepend('<a id="toggleMobileMenu" href="#">Menu</a>');
				$('a#toggleMobileMenu').click(function() {
					$(this).next('ul').stop().slideToggle(o.speed);
					$(this).toggleClass('active');
				});
				
				// clone the menu ul from the navigation container
				if(o.nocontainer == false) {
					$('ul', obj).clone().appendTo(o.container);
				} else {
					$(obj).clone().appendTo(o.container);
				}
				
				// strip existing classes and id from cloned menu
				// cleans the cloned menu up so that overlapping styles don't occur
				$('ul', o.container).attr('class','').attr('id','').hide();
			});
		}
	});
})(jQuery);