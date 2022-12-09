// ==UserScript==
// @name         不謹慎 to おちんちん
// @namespace    tknr.fto
// @version      0.0.1
// @description  try to take over the world!
// @author       tknr
// @homepage     https://tknr.github.io/greasemonkey_scripts/fto/
// @homepageURL  https://tknr.github.io/greasemonkey_scripts/fto/
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function () {
    document.body.innerHTML = document.body.innerHTML.replace(/不謹慎/g, 'おちんちん').replace(/謹慎/g, 'ちんちん');
    console.log(document.body.innerHTML);
})();