# Klynt Player

Klynt Player is a cross-browser, JavaScript engine to playback rich-media sequences, which can be edited with [Klynt Editor](http://www.klynt.net/).

## Demos and documentation

* [Demo project](http://www.klynt.net/demo/)
* [klynt.net](http://www.klynt.net)
* [Original Github project](http://www.github.com/Klynt/Klynt-Player)

## Changes

* The player has been aligned with the one distributed with version 3.5.007 of Klynt Editor.
* A new API has been added that allows you to control a klynt player embedded in an iframe from the page hosting it via Javascript.
* Now, when the player loading process is complete, the player issues a notification via HTML 5 message api.
* A customizable stylesheet file has been added in Resouces folder to allow you to customize Klynt Splashscreen via CSS.

## Used libraries

The player uses the following libraries:

* [**Timesheets.js**](https://github.com/timesheets/timesheets.js): implementation of SMIL-Timing and SMIL-Timesheets
* [**MediaElement.js**](http://mediaelementjs.com/): HTML5 \<audio\> or \<video\> player with Flash and Silverlight shims that mimics the HTML5 MediaElement API, enabling a consistent UI in all browsers.
* [**Sigma**](http://sigmajs.org): Sigma is a JavaScript library dedicated to graph drawing. It makes easy to publish networks on Web pages, and allows developers to integrate network exploration in rich Web applications.
* [**jQuery**](http://jquery.com) for HTML document traversal, manipulation, event handling and animation.
* [**Mustashe**](http://mustache.github.io) for templates.
* [**Modernizr**](http://modernizr.com) for detecting HTML5 and CSS3 features in the browser.
* [**Lazyload**](http://www.appelsiini.net/projects/lazyload) for loading js and css files on demand.
* [**jQuery UI**](https://jqueryui.com) for tooltips.
* jQuery's [**Hammer**](http://eightmedia.github.com/hammer.js) plugin for multitouch gestures.
* jQuery's [**nanoscroller**](http://jamesflorentino.github.io/nanoScrollerJS/) plugin for Mac OS X Lion-styled scrollbars.
* jQuery's [**cookie**](https://github.com/carhartl/jquery-cookie) plugin for reading, writing and deleting cookies for tracking viewed sequences.