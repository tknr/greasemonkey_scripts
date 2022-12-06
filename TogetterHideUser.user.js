// ==UserScript==
// @name        togetter-hide-user
// @namespace   tknr.togetter.hide.user
// @description togetterの特定ユーザを見えなくする
// @include     http://togetter.com/*
// @include     https://togetter.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @version     0.0.1
// @grant       none
// ==/UserScript==

// Copyright (c) 2016, recyclebin5385
// All rights reserved.
// https://github.com/recyclebin5385/togetter-hide-user

//
// 説明
// ----
//
// togetterのまとめのうち、特定のユーザが作成したものをまとめて非表示にします。
//
// 非表示にするには、プロフィール画像アイコンをダブルクリックします。
// 削除済みのまとめをダブルクリックすると再表示します。
// 注意: デフォルトの卵アイコンには効果がありません。
//
//
// 連絡先
// ------
// recyclebin5385[at]yahoo.co.jp ([at]を@に置換してください)
//

(function() {
    jQuery.noConflict();
    var $ = jQuery;

    var urlToIdPattern = /\/(?:default_)?profile_images\/([^\/]+)/;

    function urlToId(url) {
        if(url.match(urlToIdPattern)) {
            return RegExp.$1;
        } else {
            return null;
        }
    }

    function getCookieMap() {
        var ret = new Array();

        var allCookies = document.cookie;
        if( allCookies != '' ) {
            var cookies = allCookies.split('; ');
            for( var i = 0; i < cookies.length; i++ ) {
                var cookie = cookies[i].split('=');

                // クッキーの名前をキーとして 配列に追加する
                ret[cookie[0]] = decodeURIComponent(cookie[1]);
            }
        }

        return ret;
    }

    function getHiddenUserIds() {
        var joinedHiddenUserIds = null;
        if (typeof localStorage !== 'undefined') {
            // localStorageから取得
            joinedHiddenUserIds = localStorage.getItem('togetter-hide-user.hiddenUserIds');
        }
        if (!joinedHiddenUserIds) {
            // Cookieから取得
            var cookieMap = getCookieMap();
            joinedHiddenUserIds = cookieMap['hiddenUserIds'];
        }
        if (joinedHiddenUserIds) {
            return joinedHiddenUserIds.split(' ');
        } else {
            return new Array();
        }
    }

    function setHiddenUserIds(ids) {
        if (typeof localStorage !== 'undefined') {
            // localStorageに保存
            localStorage.setItem('togetter-hide-user.hiddenUserIds', ids.join(' '));
        } else {
            // Cookieに保存
            var now = new Date();
            var maxAgeDay = 30;
            now.setTime(now.getTime() + maxAgeDay * 24 * 60 * 60 * 1000);
            var expires = now.toGMTString();
            var cookie = 'hiddenUserIds=' + encodeURIComponent(ids.join(' ')) + ";expires=" + expires;

            if (cookie.length > 4096) {
                return false;
            }

            document.cookie = cookie;
        }
        hideUsers();
        return true;
    }

    function addHiddenUserId(id) {
        var ids = getHiddenUserIds();
        if ($.inArray(id, ids) == -1) {
            ids.push(id);
        }

        if (!setHiddenUserIds(ids)) {
            var deleted = 0;
            while (ids.length > 0) {
                ids.shift();
                deleted++;
                if (setHiddenUserIds(ids)) {
                    alert("容量オーバーのため古いIDを" + deleted + "件削除しました。");
                    return;
                }
            }
        }
    }

    function removeHiddenUserId(id) {
        var ids = getHiddenUserIds();
        var newIds = [];
        for (var i = 0; i < ids.length; i++) {
            if (id != ids[i]) {
                newIds.push(ids[i]);
            }
        }
        setHiddenUserIds(newIds);
    }

    function hideUsers() {
        var hiddenUserIds = getHiddenUserIds();
        $('.topics_box .icon_24').each(function() {
            var id = urlToId($(this).attr('data-lazy-src') || $(this).attr('src'));
            var parentLi = $(this).parents('li').filter(':not(.dummy)');
            var dummyParentLi = $(this).parents('li').next('li.dummy');

            if ($.inArray(id, hiddenUserIds) != -1) {
                parentLi.hide();
                if (dummyParentLi.length == 0) {
                    parentLi.after("<li class='clearfix dummy'></li>");
                    dummyParentLi = parentLi.next('.dummy');

                    // 削除済のまとめに対してユーザのアイコンを出す場合は以下をアンコメントする
                    // dummyParentLi.append($(this).clone(true).unbind('dblclick'));
                    dummyParentLi.attr('title', parentLi.find('h3').text());
                    dummyParentLi.append("[削除済]");
                    dummyParentLi.dblclick(function() {
                        if (confirm("このユーザを見えるようにしますか？")) {
                            removeHiddenUserId(id);
                        }
                    });
                };

                dummyParentLi.show();
            } else {
                parentLi.show();
                dummyParentLi.hide();
            }
        });
    }

    $(function() {
        $('.topics_box .icon_24').dblclick(function() {
            var id = urlToId($(this).attr('data-lazy-src') || $(this).attr('src'));
            if (id == null || id == '') {
                return;
            }

            var hiddenUserIds = getHiddenUserIds();
            if ($.inArray(id, hiddenUserIds) == -1) {
                if (confirm("このユーザを見えなくしますか？")) {
                    addHiddenUserId(id);
                }
            } else {
                if (confirm("このユーザを見えるようにしますか？")) {
                    removeHiddenUserId(id);
                }
            }
        });

        hideUsers();
    });
})();
