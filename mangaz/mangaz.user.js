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
// @require     https://cdnjs.cloudflare.com/ajax/libs/sprintf/1.1.2/sprintf.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant       GM_addStyle
// @grant        GM.setValue
// @grant        GM.getValue
// @grant       GM.addStyle
// @grant        GM_registerMenuCommand
// @run-at      document-idle
// ==/UserScript==

/**
 * @var Object
 */
var src_obj = {};

(function (drawImage) {
    CanvasRenderingContext2D.prototype.drawImage = function () {
        console.log(arguments);
        let src = arguments[0].src;
        if (!checkValueExists(src_obj, src)) {
            let page_number = sprintf('%04d_%02d', getPageNumber(), Object.values(src_obj).length + 1);
            console.log({ 'page_number': page_number });
            src_obj[page_number] = src;
            renderDL(src_obj);
        }
        drawImage.apply(this, arguments);
    };
})(CanvasRenderingContext2D.prototype.drawImage);


(function () {
    'use strict';
    // debug
})();

/**
 * get page number from current url
 * @returns int
 */
function getPageNumber() {
    console.log('getPageNumber()');
    // https://vw.mangaz.com/virgo/view/190872/i:0#
    let location = document.location;
    console.log({ 'location': location });
    let href = location.href;
    console.log({ 'href': href });
    let href_array = href.split('/');
    console.log({ 'href_array': href_array });
    let href_last = href_array.slice(-1)[0];
    let last_array = href_last.split(':');
    let last_last = last_array.slice(-1)[0];
    let page_number_str = last_last.replace('#', '');
    let page_number = parseInt(page_number_str);
    console.log({ 'page_number': page_number });
    return page_number;
}

/**
 * get content id from url
 * @returns string
 */
function getContentId() {
    console.log('getContentId()');
    // https://vw.mangaz.com/virgo/view/190872/i:0#
    let location = document.location;
    console.log({ 'location': location });
    let href = location.href;
    console.log({ 'href': href });
    let href_array = href.split('/');
    console.log({ 'href_array': href_array });
    let content_id = href_array[2];
    console.log({ 'content_id': content_id });
    return content_id;
}

/**
 * 
 * @param {Object} obj 
 * @param {*} value 
 * @returns boolean
 */
function checkValueExists(obj, value) {
    console.log('checkValueExists()');
    return Object.values(obj).indexOf(value) > -1
}

/**
 * 
 * @param {Object} obj 
 */
function renderDL(obj) {
    console.log('renderDL()');

    //console.log(['JCOMI',JCOMI]);
    let current_number = parseInt($('.current-number').text());
    let total_number = parseInt($('.total-number').text());
    let is_last_page = (current_number == total_number);
    let obj_length = Object.values(obj).length

    console.log({ 'current_number': current_number, 'total_number': total_number, 'is_last_page': is_last_page, 'obj_length': obj_length });

    let innerHtml = '<div id="mtzdl_page_top"><a href="' + document.location.href.replace(/\/i:(\d+)/, "/i:0") + '">top</a></div>';
    innerHtml += '<div id="mtzdl_page">' + current_number + ' / ' + total_number + ' / ' + obj_length + (is_last_page ? ' / last page' : '') + '</div>';
    innerHtml += '<div id="mtzdl_dl"><button id="blob" class="btn btn-primary">click to download</button></div>'

    let elem = document.getElementById('mtzdl');
    if (elem) {
        elem.innerHTML = innerHtml;
    } else {

        elem = document.createElement('div');
        elem.id = 'mtzdl';
        elem.style.width = '80%';
        elem.style.wordBreak = 'break-all';
        elem.innerHTML = innerHtml;
        let parent = document.getElementById("book");
        parent.appendChild(elem);
    }

    jQuery("#blob").on("click", function () {

        const zip = new JSZip();
        Object.keys(obj).forEach(function (key) {
            let uri = obj[key];
            let idx = uri.indexOf('base64,') + 'base64,'.length;
            let content = uri.substring(idx);
            let jpg_filename = key + '.jpg';
            console.log(jpg_filename);
            zip.file(jpg_filename, content, { base64: true });
        });

        let zip_filename = getContentId() + '.zip';
        console.log(zip_filename);

        zip.generateAsync({ type: "blob" })
            .then(function (blob) {
                saveAs(blob, zip_filename);
                console.log('completed.');
            }, function (err) {
                console.error(err);
            });
        return false;
    });
}