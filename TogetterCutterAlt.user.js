// ==UserScript==
// @name        togecutter-alt
// @namespace   tknr.togetter.cutter.alt
// @description togetterの特定ユーザのコメントを見えなくする
// @include     https://togetter.com/li/*
// @include     http://togetter.com/li/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @version     0.0.1
// @grant       none
// ==/UserScript==

// Copyright (c) 2017, recyclebin5385
// All rights reserved.
// https://github.com/recyclebin5385/togecutter-alt
//
// 説明
// ----
//
// togetterのまとめのコメントのうち、特定のユーザが作成したものをまとめて非表示にします。
//
// 非表示にするには、ユーザ名の隣の×をクリックします。
// 削除済の表示をダブルクリックすると再表示します。
//
//
// 連絡先
// ------
// recyclebin5385[at]yahoo.co.jp ([at]を@に置換してください)
//

(function() {
    jQuery.noConflict();
    var $ = jQuery;
    
    function getCookieMap() {
        var ret = new Array();

        var allCookies = document.cookie;
        if( allCookies != '' ) {
            var cookies = allCookies.split('; ');
            for (var i = 0; i < cookies.length; i++ ) {
                var cookie = cookies[i].split('=');

                // クッキーの名前をキーとして 配列に追加する
                ret[cookie[0]] = decodeURIComponent(cookie[1]);
            }
        }

        return ret;
    }

    function getHiddenUserIds() {
        var cookieMap = getCookieMap();
        var joinedHiddenUserIds = cookieMap['hiddenCommentUserIds'];
        if (joinedHiddenUserIds != null && joinedHiddenUserIds != '') {
            return joinedHiddenUserIds.split(' ');
        } else {
            return new Array();
        }
    }

    function setHiddenUserIds(ids) {
        var now = new Date();
        var maxAgeDay = 366;
        now.setTime(now.getTime() + maxAgeDay * 24 * 60 * 60 * 1000);
        var expires = now.toGMTString();
        var cookie = 'hiddenCommentUserIds=' + encodeURIComponent(ids.join(' ')) + ";expires=" + expires;

        if (cookie.length > 4096) {
            return false;
        }

        document.cookie = cookie;
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

        $("#comment_box .list_box").each(function(){
            var listItem = $(this);
            var idLink = $(this).find(".status_name");
            var id = idLink.text().replace(/^@/, "");

            if ($.inArray(id, hiddenUserIds) != -1) {
                listItem.find("> span").hide();
                listItem.find(".comment").hide();
                if (listItem.find(".removed").length == 0) {
                    $("<span>[削除済]</span>")
                        .hide()
                        .addClass("removed")
                        .css({"cursor": "pointer"})

                        .attr("title", id)
                        .dblclick(function() {
                            if (confirm("このユーザを見えるようにしますか？")) {
                                removeHiddenUserId(id);
                            }
                        })
                        .appendTo(listItem);
                }
                listItem.find(".removed").show();
            } else {
                listItem.find("> span").show();
                listItem.find(".comment").show();
                listItem.find(".removed").hide();
            }
        });
    }

    $(function() {
        $("#comment_box .list_box").each(function(){
            var listItem = $(this);
            var idLink = listItem.find(".status_name");
            var id = idLink.text().replace(/^@/, "");

            $("<span>[×]</span>")
                .addClass("button_cutter")
                .css({"cursor": "pointer"})
                .attr("title", "このユーザのコメントを見えなくする")
                .click(function() {
                    if (confirm("このユーザを見えなくしますか？")) {
                        addHiddenUserId(id);
                    }
                    hideUsers();
                    return false;
                })
                .insertAfter(idLink);
        });

        hideUsers();
    });
})();
