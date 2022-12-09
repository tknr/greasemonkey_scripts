// ==UserScript==
// @name         不謹慎 to おちんちん
// @namespace    tknr.fto
// @version      0.0.1
// @description  try to take over the world!
// @author       tknr
// @homepage     https://tknr.github.io/greasemonkey_scripts/
// @homepageURL  https://tknr.github.io/greasemonkey_scripts/
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    var html = document.body.innerHTML;

    html = html.replace("不謹慎","おちんちん");

    console.log(html);

    document.body.innerHTML = html;
})();