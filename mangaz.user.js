// ==UserScript==
// @name         mangaz
// @namespace    tknr.mangaz.mangaz
// @version      0.0.1
// @description  mangaz tool
// @author       tknr
// @homepage     https://tknr.github.io/greasemonkey_scripts/
// @homepageURL  https://tknr.github.io/greasemonkey_scripts/
// @match        https://*.mangaz.com/virgo/view/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mangaz.com
// @updateURL    https://tknr.github.io/greasemonkey_scripts/mangaz.meta.js
// @downloadURL  https://tknr.github.io/greasemonkey_scripts/mangaz.user.js
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant       GM_addStyle
// @grant        GM.setValue
// @grant        GM.getValue
// @grant       GM.addStyle
// @grant        GM_registerMenuCommand
// @run-at      document-idle
// ==/UserScript==



(function () {
    'use strict';
    // debug
    console.log('mangaz', window.location.href);
    console.dir(window);

    var dataUri_1 = getDataUriFromCanvas('.first .page_image canvas');
    var dataUri_2 = getDataUriFromCanvas('.second .page_image canvas');

    console.dir($('.page_unit .image'));

})();

function getDataUriFromCanvas(elem) {
    var canvas = $(elem)[0];
    console.dir(canvas);
    var dataUri = canvas.toDataURL();
    console.log(dataUri)
    return dataUri;
}
