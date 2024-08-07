// ==UserScript==
// @name         nicop
// @namespace    tknr.nicop
// @version      2024-08-07
// @description  try to take over the world!
// @author       tknr
// @homepage     https://tknr.github.io/greasemonkey_scripts/nicovideo/
// @homepageURL  https://tknr.github.io/greasemonkey_scripts/nicovideo/
// @match        https://www.nicovideo.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nicovideo.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let element = document.querySelector("meta[name='server-response']");
    let content = element.getAttribute("content");
    let newContent = content.replaceAll("&quot;isPremium&quot;:false,", "&quot;isPremium&quot;:true,")
    element.setAttribute("content", newContent);
})();
