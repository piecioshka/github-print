/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @fileOverview Set style for CSS print on http://github.com/**
 */
(function () {
    'use strict';

    var PRINT_STYLE_FILE = chrome.extension.getURL("styles/print.css");

    function createLinkTag() {
        var tag = document.createElement("link");
        tag.setAttribute("type", "text/css");
        tag.setAttribute("rel", "stylesheet");
        tag.setAttribute("media", "print");
        return tag;
    }

    function applyPrintStyle() {
        var style = createLinkTag();
        style.setAttribute("href", PRINT_STYLE_FILE);
        document.getElementsByTagName("head")[0].appendChild(style);
    }

    // GO GO GO!
    applyPrintStyle();

}());

