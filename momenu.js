(function($) {
	/*
	* Mo' Menu! 1.3
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
				speed: 600,
				auto: false,
				animation: 'slideToggle',
				zindex: '',
				theme: '' // light, default
			};
			var options = $.extend(defaults, options);
			
			// --------------------------------
			// Mobile Menu
			// --------------------------------
			return this.each(function() {
				// variables
				var o = options;
				var obj = $(this);
				var cid = o.container.replace('#', '').replace('.', '');
				
				// automatically prepend #mobileMenu to body if desired
				if(o.auto == true) {
					$('body').prepend('<div id="' + cid + '" class="' + cid +'"></div>');
				}
				
				// mobile menu toggle button
				$(o.container).prepend('<a id="toggleMobileMenu" aria-hidden="true" href="#"></a>');
				
				// themes
				if(o.theme != '') {
					$(o.container).addClass('moMenu-' + o.theme);
				}
				
				// toggle button
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
				
				// z-index (added 10-17-2012)
				if(o.zindex != '') {
					$(o.container).css('z-index',o.zindex);
				}
				
			});
		}
	});
})(jQuery);