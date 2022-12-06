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
    console.dir(window);

addJS_Node (null, null, interceptAjax());

})();

function interceptAjax () {
    $(document).ajaxSuccess (
        function (event, requestData)
        {
            console.log (requestData.responseText);
        }
    );
}

function addJS_Node (text, s_URL, funcToRun) {
    var D                                   = document;
    var scriptNode                          = D.createElement ('script');
    scriptNode.type                         = "text/javascript";
    if (text)       scriptNode.textContent  = text;
    if (s_URL)      scriptNode.src          = s_URL;
    if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

    var targ    = D.getElementsByTagName('head')[0] || D.body || D.documentElement;
    targ.appendChild (scriptNode);
}
