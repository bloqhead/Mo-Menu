(function($) {
	/*
	* ================================================
	* Mo' Menu -- v1.3.8
	* Mo' Money, Mo' Menu
	*
	* (c) 2012, Daryn St. Pierre http://bloqhead.com
	* Released under the WTFPL License
	* http://sam.zoy.org/wtfpl/
	*
	* Creation Date: Tue July 24, 2012
	*
	* @todo:
	* - Make use of CSS3 animations instead of jQuery
	* - Cleanup some items and update methods
	* - Test more rigorously
	* - More themes and/or better theming methods
	* ================================================
	*/

	$.fn.extend({
		moMenu: function(options) {
			var defaults = {
				type: '',
				nocontainer: false,
				container: '#mobileMenu',
				speed: 600,
				auto: false,
				animation: '',
				zindex: '',
				padding: '',
				theme: '' // light, default, your own
			};
			var options = $.extend(defaults, options);

			// --------------------------------
			// MoMenu
			// --------------------------------
			return this.each(function() {

				// ---------------------------------------------------------
				// Core Variables
				// ---------------------------------------------------------
				var o = options;
				var obj = $(this);
				var cid = o.container.replace('#', '').replace('.', '');
				var mobileWidth = 480;

				// ---------------------------------------------------------
				// Core Functions
				// ---------------------------------------------------------

				// Find window dimensions
				function docDimensions() {
					var bHeight = $(window).height();
					var bWidth = $(window).width();
				}

				// Automatically prepend #mobileMenu to body if desired
				if(o.auto == true) {
					$('body').prepend('<div id="' + cid + '" class="' + cid +'" aria-hidden="true"></div>');
				}

				// Theming
				if(o.theme != '') {
					$(o.container).addClass('moMenu-' + o.theme);
				}

				// Clone the menu ul from the navigation container
				if(o.nocontainer == false) {
					$('ul', obj).clone().appendTo(o.container).hide();
				} else {
					$(obj).clone().appendTo(o.container);
				}

				// Strip existing classes and id from cloned menu
				// Cleans the cloned menu up so that overlapping styles don't occur
				$('ul', o.container).attr('class','').attr('id','');

				// z-index (added 10-17-2012)
				if(o.zindex != '') {
					$(o.container).css('z-index',o.zindex);
				}

				// ---------------------------------------------------------
				// Menu Type -- Options: 'slide'
				// ---------------------------------------------------------

				// Menu Type (added: 10/24/12)
				if(o.type == 'slide') {
					
					// Mobile menu toggle button
					if(o.theme != '') {
						$('body').prepend('<span id="toggleMobileMenuSlide-'+ o.theme +'"><a id="toggleMobileMenu">Menu</a></span>');
					} else {
						$('body').prepend('<span id="toggleMobileMenuSlide"><a id="toggleMobileMenu">Menu</a></span>');
					}

					docDimensions();
					$(o.container).addClass('moMenu-slideOut');
					$(o.container).width(bWidth - 20 + 'px');
					$('ul', o.container).show();
					$(o.container)
						.css('position','fixed')
						.css('left','-' + bWidth + 'px');

					// toggle button
					$('a#toggleMobileMenu').css('z-index',o.zindex + '1');
					$(o.container).css('top','50px');
					$(o.container + 'ul').css('display','inline');

					// toggle the slide out animation
					$('a#toggleMobileMenu').toggle(
						function() {
							$(o.container).animate({ left: 0 }, o.speed);
							$(this).addClass('active');
						},
						function() {
							$(o.container).animate({ left: '-' + bWidth + 'px' }, o.speed);
							$(this).removeClass('active');
						}
					);

					// determine the menu dimensions based on browser dimensions
					$(window).resize(function() {
						docDimensions();
						$(o.container).addClass('moMenu-slideOut');
						$(o.container).width(bWidth).height(bHeight);
					});

				} else {

					// mobile menu toggle button
					$(o.container).prepend('<a id="toggleMobileMenu">Menu</a>');

					// toggle button
					$('a#toggleMobileMenu').click(function() {
						if(o.animation == '') {
							$(this).next('ul').stop().slideToggle(o.speed); // fold down animation
						} else if(o.animation == 'toggle') {
							$(this).next('ul').stop().toggle(0); // immediately appear (overrides user-defined speed)
						}
						$(this).toggleClass('active');
					});
				}

				// ---------------------------------------------------------
				// Browser Resizing
				// ---------------------------------------------------------

				// Top padding on body for initial load (added 10-19-2012)
				function bodyPadding() {
					var initialWidth = $(window).width();
					if(o.padding == '' && initialWidth < mobileWidth) {
						$('body').css('padding-top','40px');
					} else if(o.padding != '' && initialWidth < mobileWidth) {
						$('body').css('padding-top',o.padding);
					} else if(initialWidth > mobileWidth) {
						$('body').css('padding-top','');
					}
				}

				bodyPadding();

				// top padding on body when resized (added 10-19-2012)
				$(window).resize(function() {
					bodyPadding();
				});

			});
		}
	});
})(jQuery);
