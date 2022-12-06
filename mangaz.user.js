// ==UserScript==
// @name         mangaz
// @namespace    tknr.mangaz.mangaz
// @version      0.0.1
// @description  mangaz tool
// @author       tknr
// @homepage     https://tknr.github.io/greasemonkey_scripts/
// @homepageURL  https://tknr.github.io/greasemonkey_scripts/
// @match        https://*.mangaz.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mangaz.com
// @updateURL    https://tknr.github.io/greasemonkey_scripts/mangaz.meta.js
// @downloadURL  https://tknr.github.io/greasemonkey_scripts/mangaz.user.js
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    
    // debug
    console.log('mangaz',window.location.href);
    console.log(window);
    console.dir(window);
    for(var b in window) {
        if(window.hasOwnProperty(b)){
            console.log(b,window[b]);
        }
    }
        
})();
