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
				animation: '',
				zindex: '',
				padding: '',
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
				var mobileWidth = 480;
				
				// automatically prepend #mobileMenu to body if desired
				if(o.auto == true) {
					$('body').prepend('<div id="' + cid + '" class="' + cid +'" aria-hidden="true"></div>');
				}
				
				// mobile menu toggle button
				$(o.container).prepend('<a id="toggleMobileMenu">Menu</a>');
				
				// themes
				if(o.theme != '') {
					$(o.container).addClass('moMenu-' + o.theme);
				}
				
				// toggle button
				$('a#toggleMobileMenu').click(function() {
					if(o.animation == '') {
						$(this).next('ul').stop().slideToggle(o.speed); // fold down animation
					} else if(o.animation == 'toggle') {
						$(this).next('ul').stop().toggle(0); // immediately appear (overrides user-defined speed)
					}
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
				
				// top padding on body for initial load (added 10-19-2012)
				var initialWidth = $(window).width();
				if(o.padding == '' && initialWidth < mobileWidth) {
					$('body').css('padding-top','40px');
				} else if(o.padding != '' && initialWidth < mobileWidth) {
					$('body').css('padding-top',o.padding);
				} else if(initialWidth > mobileWidth) {
					$('body').css('padding-top','');
				}
				
				// top padding on body when resized (added 10-19-2012)
				$(window).resize(function() {
					var resizeWidth = $(window).width();
					if(o.padding == '' && resizeWidth < mobileWidth) {
						$('body').css('padding-top','40px');
					} else if(o.padding != '' && resizeWidth < mobileWidth) {
						$('body').css('padding-top',o.padding);
					} else if(resizeWidth > mobileWidth) {
						$('body').css('padding-top','');
					}
				});
				
			});
		}
	});
})(jQuery);