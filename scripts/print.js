/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @fileOverview Print README.md file on Github
 */

/*global document, chrome */

(function () {
    'use strict';

    function PrintStyle() {
        this.initialize();
    }

    PrintStyle.PRINT_STYLE_FILE = chrome.extension.getURL('styles/print.css');

    PrintStyle.prototype = {
        initialize: function () {
            this.el = document.createElement('link');
            this.build();
        },

        build: function () {
            this.el.setAttribute('type', 'text/css');
            this.el.setAttribute('rel', 'stylesheet');
            this.el.setAttribute('media', 'print');
            this.el.setAttribute('href', PrintStyle.PRINT_STYLE_FILE);
        },

        render: function () {
            document.getElementsByTagName('head')[0].appendChild(this.el);
        }
    };

    // ------------------------------------------------------------------------

    var style = new PrintStyle();
    style.render();

}());

