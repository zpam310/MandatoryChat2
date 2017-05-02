"use strict";
var protractor_1 = require('protractor');
var Untitled42Page = (function () {
    function Untitled42Page() {
    }
    Untitled42Page.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Untitled42Page.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return Untitled42Page;
}());
exports.Untitled42Page = Untitled42Page;
