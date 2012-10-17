# Mo' Menu!
Short for 'Mobile Menu', this is a tiny jQuery plugin I built as a drop-in solution for adding a simple menu for responsive and mobile-based websites. It essentially clones your main navigation unordered list into the <code>#mobileMenu</code> container and creates a mobile menu on the fly.

## How to use it
If your navigation is within a container, you can specify the container as the selector, or you can specify the navigation <code>ul</code> itself. In your design, add the 'mobileMenu' container towards the top of your page. It will automatically appear as fixed to the top of the page, so container placement isn't as crucial.

### The mobile menu container
This defaults to <code>#mobileMenu</code> but you can define your own container id instead.

```html
<div id="mobileMenu"></div>
```

### The jQuery
**Your nav container as the selector**

```javascript
$('nav').moMenu();
```

**or the navigation <code>ul</code> itself as the selector**

```javascript
$('#menu').moMenu();
```

**With optional parameters defined**

```javascript
$('#menu').moMenu({
	nocontainer: true,
	container: '#your-mobile-menu-container-id',
	speed: 300,
	theme: 'light'
});
```

### The options
I've included some simple options for minimal customization. I also plan on adding color themes that can be defined as a parameter as well. Currently supported:

* **nocontainer:** This defaults to false. If set to true, it will treat your navigation menu ul as the primary selector, as opposed to automatically grabbing the ul within a <code>nav</code> container or a <code>div</code>. Handy if your main navigation ul is not wrapped in anything.
* **container:** This defaults to <code>#mobileMenu</code> but if you prefer to use a different id for the container that your mobile menu will be rendered in, you can specify it.
* **speed:** This is the speed of the slide up/down animation of the menu when the mobile menu button is clicked. It defaults to <code>600</code> but you can define a custom speed in milliseconds.
* **auto:** If you don't want to manually add the <code>#mobileMenu</code> div to your markup, setting the <code>auto</code> option to true will automatically prepend the Mo Menu container to the body. This makes the plugin completely hands off.
* **theme:** There are currently 2 themes to pick from: the default (black) one and a 'light' generic style. If you decide to roll your own theme, you can define its class in the <code>theme</code> attribute and the plugin will render the class as <code>.moMenu-yourclassname</code>.
* **zindex:** ***NEW*** Now you can set the <code>z-index</code> of the menu.

The Mo' Menu script will do the rest. It will copy your main navigation into the mobileMenu container, format it all nicely and be completely accessible for mobile users.

### License
&copy; 2012, Daryn St. Pierre &mdash; [bloqhead.com](bh)

Released under the [WTFPL License](wtfpl).

[wtfpl]: "http://sam.zoy.org/wtfpl/"
[bh]: "http://bloqhead.com/"