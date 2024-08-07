$(function() {
    if (window.JCOMI) throw Error("JCOMI LIBRARY ERROR");
    window.JCOMI = {};
    JCOMI.namespace = function(l) {
        l = l.split(".");
        var a = JCOMI;
        "JCOMI" === l[0] && (l = l.slice(1));
        for (var b = 0; b < l.length; ++b) "undefined" === typeof a[l[b]] && (a[l[b]] = {}), a = a[l[b]];
        return a
    };
    JCOMI.log = new function() {
        function l(b) {
            try {
                for (var h = 1; h < arguments.length; h++) b = b.replace(new RegExp("\\{" + (h - 1) + "\\}", "g"), arguments[h]);
                "undefined" != typeof console && ("undefined" != typeof console.debug ? a && console.debug(b) : "undefined" != typeof console.log &&
                    a && console.log(b))
            } catch (n) {}
        }
        var a = !0;
        this.setEnableLog = function(b) {
            a = b
        };
        this.debug = function(b) {
            l(b)
        }
    }
});
$(function() {
    JCOMI.config = new function() {
        this.getVersion = function() {
            return "6.5.3"
        };
        var l = {
            ar: "Arabic",
            "bs-Latn": "Bosnian (Latin)",
            bg: "Bulgarian",
            ca: "Catalan",
            "zh-CHS": "Chinese Simplified",
            "zh-CHT": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            fi: "Finnish",
            fr: "French",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            he: "Hebrew",
            hi: "Hindi",
            mww: "Hmong Daw",
            hu: "Hungarian",
            id: "Indonesian",
            it: "Italian",
            ja: "Japanese",
            sw: "Kiswahili",
            tlh: "Klingon",
            "tlh-Qaak": "Klingon (pIqaD)",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            otq: "Querétaro Otomi",
            ro: "Romanian",
            ru: "Russian",
            "sr-Cyrl": "Serbian (Cyrillic)",
            "sr-Latn": "Serbian (Latin)",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sv: "Swedish",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            ur: "Urdu",
            vi: "Vietnamese",
            cy: "Welsh",
            yua: "Yucatec Maya"
        };
        this.getBingLangTable = function() {
            return l
        };
        var a = {
            af: null,
            be: null,
            bg: "bg",
            ca: "ca",
            cs: "cs",
            da: "da",
            de: "de",
            "de-AU": "de",
            "de-CH": "de",
            "de-DE": "de",
            el: "el",
            en: "en",
            "en-GB": "en",
            "en-US": "en",
            es: "es",
            "es-AR": "es",
            "es-CO": "es",
            "es-ES": "es",
            "es-MX": "es",
            eu: null,
            fi: "fi",
            fo: null,
            fr: "fr",
            "fr-BE": "fr",
            "fr-CA": "fr",
            "fr-CH": "fr",
            "fr-FR": "fr",
            ga: null,
            gd: null,
            gl: null,
            hr: "hr",
            hu: "hu",
            id: "id",
            is: null,
            it: "it",
            ja: "en",
            ko: "ko",
            mk: null,
            nl: "nl",
            "nl-BE": "nl",
            no: "no",
            pl: "pl",
            pt: "pt",
            "pt-BR": "pt",
            ro: "ro",
            ru: "ru",
            sk: "sk",
            sl: "sl",
            sq: null,
            sr: null,
            sv: "sv",
            tr: "tr",
            uk: "uk",
            zh: "zh-CHS",
            "zh-CN": "zh-CHS",
            "zh-TW": "zh-CHT"
        };
        this.getTranslateLangCode = function(b) {
            return a[b] ?
                a[b] : "en"
        };
        this.getEnableLog = function() {
            return !0
        };
        this.getTwoPageMaxImageWidth = function() {
            return 827
        };
        this.getTwoPageMaxImageHeight = function() {
            return 1170
        };
        this.getSinglePageMaxImageWidth = function() {
            return 827
        };
        this.getSinglePageMaxImageHeight = function() {
            return 1170
        };
        this.getTranslateTimeout = function() {
            return 1E4
        };
        this.getGoogleTtsMaxLength = function() {
            return 100
        };
        this.getServerErrMsg = function() {
            return "サーバーと通信できませんでした。"
        }
    }
});
$(function() {
    function l() {
        return /opera/i.test(navigator.userAgent) ? "Opera" : /msie/i.test(navigator.userAgent) ? "IE" : /trident/i.test(navigator.userAgent) ? "IE" : /chrome/i.test(navigator.userAgent) ? "Chrome" : /safari/i.test(navigator.userAgent) ? "Safari" : /firefox/i.test(navigator.userAgent) ? "FireFox" : /gecko/i.test(navigator.userAgent) ? "Gecko" : "else"
    }
    JCOMI.vname = "virgo";
    JCOMI.log.setEnableLog(JCOMI.config.getEnableLog());
    JCOMI.sample = function() {};
    JCOMI.getTimestamp = function() {
        var a = new Date,
            b = a.getHours(),
            h = a.getMinutes(),
            n = a.getSeconds(),
            a = a.getMilliseconds();
        return b + ":" + h + ":" + n + ":" + a
    };
    JCOMI.setDisplayPosition = function() {
        var a = "0px";
        $("body").height() > $("#viewer").height() + $("#tool_bar").height() && (a = ($("body").height() - ($("#viewer").height() + $("#tool_bar_frame").height())) / 2 + "px");
        $("#viewer").css("margin-top", a)
    };
    JCOMI.ajaxPost = function(a) {
        var b = $.extend({
            url: "",
            type: "POST",
            dataType: "json",
            timeout: 1E4,
            success: function() {},
            error: function() {}
        }, a);
        $.ajax({
            url: b.url,
            type: b.type,
            dataType: b.dataType,
            data: b.data,
            timeout: b.timeout,
            async: b.async,
            success: function(a, n) {
                b.success(a, n)
            },
            error: function(a, n, l) {
                b.error(a, n, l)
            }
        })
    };
    JCOMI.DropDownList = function(a) {
        var b = $.extend({
            selector: "#"
        }, a).selector;
        this.getSelectedValue = function() {
            return $(":selected", $(b)).val()
        };
        this.getSelectedText = function() {
            return $(":selected", $(b)).text()
        };
        this.setSelectedValue = function(a) {
            var n = $(b).children();
            $.each(n, function() {
                a == $(this).val() ? $(this).attr("selected", !0) : $(this).attr("selected", !1)
            })
        }
    };
    JCOMI.TimeoutTimer =
        function(a) {
            var b = $.extend({
                    timeoutMsec: 1E4,
                    timeout: function() {}
                }, a),
                h = !1,
                n = !1,
                l;
            this.start = function(a) {
                var f = $.extend(b, a);
                h = !1;
                n = !0;
                clearTimeout(l);
                return l = setTimeout(function() {
                    n ? (h = !0, n = !1, f.timeout()) : (clearTimeout(l), h = n = !1)
                }, b.timeoutMsec)
            };
            this.stop = function() {
                var a = h;
                clearTimeout(l);
                h = n = !1;
                return a
            };
            this.isWait = function() {
                return !h
            }
        };
    JCOMI.isChrome = function() {
        return "Chrome" == l() ? !0 : !1
    };
    JCOMI.getBrowser = function() {
        return l()
    }
});
$(function() {
    JCOMI.PageSlider = new function(l) {
        function a(a) {
            return a
        }

        function b(a) {
            return h.max + 1 - a
        }
        var h = $.extend({
            selector: "",
            min: 1,
            max: 255,
            value: 3,
            isNormal: !0,
            onSlide: function(a) {},
            onStop: function(a) {}
        }, l);
        this.setPageSliderOption = function(a) {
            h = $.extend(h, a)
        };
        this.initPageSlider = function() {
            var l = h.min,
                t = h.max + 1,
                d = h.value,
                f = a;
            h.isNormal || (d = t - d, f = b);
            $(h.selector).slider({
                min: l,
                max: h.max,
                value: d,
                slide: function(a, b) {
                    var d = f(b.value);
                    h.onSlide(d)
                },
                stop: function(a, b) {
                    var d = f(b.value);
                    h.onStop(d)
                }
            })
        };
        this.setPageSliderValue = function(a) {
            h.isNormal || (a = b(a));
            $(h.selector).slider("option", "value", a)
        }
    }
});
$(function() {
    JCOMI.document = new function(l) {
        function a(a) {
            a = parseInt(a);
            a = 1E3 * (a - 10) - (new Date).getTime();
            0 >= a && (a = 1E3);
            k.start({
                timeoutMsec: a
            })
        }

        function b(b) {
            try {
                var h = p + "/" + JCOMI.vname + "/docx/" + x + ".json",
                    l = t.getApiParam();
                l.pub = forge.pki.publicKeyToPem(g.publicKey);
                forge.pki.privateKeyToPem(g.privateKey);
                JCOMI.ajaxPost({
                    url: h,
                    data: l,
                    success: function(h, l) {
                        if ("OK" != h.status) {
                            JCOMI.log.debug("" + JCOMI.vname + "API get page information failed.");
                            if (confirm(d.getServerErrMsg() + "\n\nリトライしますか？")) {
                                window.location.href =
                                    h.redirect;
                                return
                            }
                            window.close()
                        }
                        var k = window.atob(h.bi),
                            n = g.privateKey.decrypt(window.atob(h.ek)),
                            k = forge.aes.startDecrypting(n, k);
                        k.update(forge.util.createBuffer(window.atob(h.data)));
                        k.finish();
                        k = $.parseJSON(k.output.toString());
                        "undefined" !== typeof k.Enc && (k.Enc.key = window.atob(k.Enc.key), k.Enc.iv = window.atob(k.Enc.iv));
                        f = k;
                        f.bingToken && a(f.bingToken.expires);
                        b()
                    },
                    error: function(a, b, f) {
                        JCOMI.log.debug(b);
                        confirm(d.getServerErrMsg() + "\n\nリトライしますか？") ? window.location.reload() : window.close()
                    },
                    dataType: "json"
                })
            } catch (k) {
                JCOMI.log.debug(k),
                    confirm(d.getServerErrMsg() + "\n\nリトライしますか？") ? window.location.reload() : window.close()
            }
        }

        function h(a) {
            try {
                JCOMI.ajaxPost({
                    url: p + "/" + JCOMI.vname + "/serifs/" + x + ".json",
                    data: t.getApiParam(),
                    success: function(b, d) {
                        "OK" != b.status ? JCOMI.log.debug("" + JCOMI.vname + "API get serifs failed.") : (t._serifs = b._serifs, a())
                    },
                    error: function(a, b, d) {
                        JCOMI.log.debug(b)
                    },
                    dataType: "json"
                })
            } catch (b) {
                JCOMI.log.debug(b), confirm(d.getServerErrMsg() + "\n\nリトライしますか？") ? window.location.reload() : window.close()
            }
        }

        function n(b) {
            b = void 0 ===
                b ? null : b;
            try {
                var g = p + "/" + JCOMI.vname + "/bingToken/" + x + ".json";
                console.log("bing getting");
                JCOMI.ajaxPost({
                    url: g,
                    data: t.getApiParam(),
                    success: function(d, g) {
                        console.log("bing get : " + d.status);
                        JCOMI.log.debug(JCOMI.getTimestamp() + " ajaxGetDocument() callback() コールバック呼び出され直後");
                        "OK" != d.status ? JCOMI.log.debug("" + JCOMI.vname + "API get bing token failed.") : (f.bingToken = d.bingToken, a(f.bingToken.expires), console.log("bing get : " + f.bingToken), b && b())
                    },
                    error: function(a, b, d) {
                        JCOMI.log.debug(b)
                    },
                    dataType: "json"
                })
            } catch (h) {
                JCOMI.log.debug(h),
                    confirm(d.getServerErrMsg() + "\n\nリトライしますか？") ? window.location.reload() : window.close()
            }
        }
        var t = this,
            d = JCOMI.namespace("JCOMI.config"),
            f = null,
            r = null,
            C = !1,
            x = $("#baid").val(),
            p = $("#host").val(),
            A = $("body").hasClass("smp"),
            u = $("body").hasClass("tablet"),
            g = forge.pki.rsa.generateKeyPair(512),
            H = __serial;
        __serial = null;
        var k = new JCOMI.TimeoutTimer({
            timeoutMsec: 6E6,
            timeout: function() {
                k.stop();
                n()
            }
        });
        this.initialize = function(a) {
            b(a);
            $("#version").text(d.getVersion());
            a = d.getBingLangTable();
            $("#Language > option").remove();
            $.each(a, function(a, b) {
                var d = $("<option>").val(a).text(b);
                $("#Language").append(d)
            })
        };
        this.getDoc = function() {
            return f
        };
        this.getProtect = function() {
            return C
        };
        this.setProtect = function(a) {
            C = a
        };
        this.getBaid = function() {
            return x
        };
        this.isMobile = function() {
            return A
        };
        this.isTablet = function() {
            return u
        };
        this.isSmartPhone = function() {
            return A && !u
        };
        this.getUser = function() {
            return f.User
        };
        this.getUserPremium = function() {
            return f.User.premium
        };
        this.getBook = function() {
            return f.Book
        };
        this.getBookPageUrl = function() {
            return f.Book.url
        };
        this.getImages = function() {
            return f.Images
        };
        this.getImageSide = function(a) {
            return f.Images[a].side
        };
        this.getLoaction = function() {
            return f.Location
        };
        this.getLocationDir = function(a) {
            return f.Location.base + f.Location[a]
        };
        this.getPageDirection = function() {
            return f.Book.page_direction
        };
        this.getPageLayout = function() {
            return f.Book.page_layout
        };
        this.isTwoPageLayout = function() {
            return "TwoPageLeft" == f.Book.page_layout || "TwoColumnLeft" == f.Book.page_layout || "TwoPageRight" == f.Book.page_layout || "TwoColumnRight" == f.Book.page_layout ?
                !0 : !1
        };
        this.getPageMaxWidth = function() {
            return parseInt(f.Book.page_max_width)
        };
        this.getPageMaxHeight = function() {
            return parseInt(f.Book.page_max_height)
        };
        this.getImageCount = function() {
            return parseInt(f.Book.image_count)
        };
        this.getR18 = function() {
            return f.Book.r18
        };
        this.getRating = function() {
            return parseInt(f.Book.rating)
        };
        this.getLang = function() {
            return r ? r : lang = this.getDefaultTranslateLang()
        };
        this.setLang = function(a, b) {
            r = a;
            b && $.cookie(JCOMI.vname + "!lang", r, {
                path: "/" + JCOMI.vname + "/",
                expires: 30
            })
        };
        this.getBrowserLanguage =
            function() {
                return window.navigator.languages && window.navigator.languages[0] || window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage
            };
        this.getDefaultTranslateLang = function() {
            var a = this.getBrowserLanguage();
            return d.getTranslateLangCode(a)
        };
        this.getServerDomain = function() {
            return f.Location.domain
        };
        this.getBaid = function() {
            return f.Book.baid
        };
        this.getDebug = function() {
            return f.debug
        };
        this.getApiParam = function() {
            var a = $.cookie(JCOMI.vname + "!__ticket");
            return {
                __serial: H,
                __ticket: a
            }
        };
        this.isLogin = function() {
            return void 0 == f ? !1 : f.User.login
        };
        this.getBingToken = function() {
            return f.bingToken ? f.bingToken.token : !1
        };
        this.loadSerifs = function(a) {
            h(a)
        };
        this.resetBingToken = function(a) {
            f.bingToken || n(a);
            return f.bingToken
        }
    }
});
$(function() {
    JCOMI.viewer = new function(l) {
        function a() {
            $(".page .speech_bubble").remove()
        }

        function b(e) {
            if (D) {
                var a = "center";
                u.isTwoPageDisplay() && (a = g.getImageSide(e));
                var c = $(".page." + a).width(),
                    b = $(".page." + a).height();
                $(".page." + a + " .screen").width(c).height(b);
                b = $(".page." + a + " .page_unit").width();
                $(".page." + a + " .screen").css("left", (b - c) / 2);
                $(".page." + a + " .speech_bubble").remove();
                if (g._serifs[e]) {
                    var d = [];
                    $.each(g._serifs[e].s, function(e, c) {
                        lang = g.getLang();
                        c[lang] ? h(c, c[lang].text) : d.push(c)
                    });
                    0 < d.length && A(d, "ja", lang)
                }
            }
        }

        function h(e, a) {
            var c = e.ino;
            if (c == k || c == z) {
                var b = "center";
                u.isTwoPageDisplay() && (b = g.getImageSide(c));
                var d = g._serifs[c],
                    c = $(".page." + b + " .screen").height(),
                    f = c / d.img.ih,
                    d = $("#template .speech_bubble").clone(!0);
                d.attr("id", "serif" + e.id);
                d.html(a);
                var h = e.y * f;
                d.css("left", e.x * f).css("top", h);
                f *= e.w;
                100 < f && d.css("max-width", f + "px");
                $(".page." + b + " .screen").append(d);
                b = d.height();
                h + b > c && (d.css("max-height", c - h + "px"), d.css("max-width", "300px"));
                d.show()
            }
        }

        function n(e) {
            e =
                parseInt(e);
            $(".page .page_unit").hide();
            a();
            k = e;
            t(e, !0);
            var b = g.getImages(),
                c = b[e].pair_no;
            u.isTwoPageDisplay() ? null != c ? (z = c, c < e && (z = k, k = c), t(c, !1)) : (z = null, $(".page." + ("left" == b[e].side ? "right" : "left")).hide()) : z = null
        }

        function t(e, a) {
            e = parseInt(e);
            var c = g.getImageSide(e);
            u.isTwoPageDisplay() || (c = "center");
            "center" == c ? ($(".page.left").hide(), $(".page.right").hide(), $(".page-flip").width($(".page.center").width())) : ($(".page.center").hide(), $(".page-flip").width("100%"));
            c = ".page." + c;
            $(c).data("image",
                e).show();
            var d = C(e);
            if (null != d && "undefined" !== typeof w[v][e] && "undefined" !== typeof w[v][e].loaded && !1 !== w[v][e].loaded) {
                c += " .page_unit";
                if ("undefined" === typeof g.getDoc().Location.enc) $(c + " .image").attr("src", d.src);
                else {
                    var f = c + " canvas",
                        h = $(c).width(),
                        k = $(c).height();
                    $(f).attr("width", h);
                    $(f).attr("height", k);
                    $(f).get(0).getContext("2d").drawImage(d, 0, 0, d.width, d.height, 0, 0, h, k)
                }
                $(c).show();
                b(e);
                if ("undefined" === typeof B[e] || 0 == B[e]) B[e] = !0, G++
            } else a && (m && (m.stop(), m = null), r(e + 1, 4, !0))
        }

        function d() {
            var e =
                g.getPageMaxWidth(),
                a = g.getPageMaxHeight(),
                c = e,
                b = a;
            g.isMobile() ? (b = $("#viewer").height(), c = $("#viewer").width(), u.isTwoPageDisplay() && (c /= 2), b / c > a / e ? (b = Math.floor(c / e * a), c = b / a * e) : (c = Math.floor(b / a * e), b = c / e * a), $("#viewer .page").width(c).height(b), $("#viewer #book").height(b), u.isTwoPageDisplay() ? $("#viewer #book").width(2 * c) : $("#viewer #book").width(c), e = ($("#viewer").height() - $("#viewer #book").height()) / 2, c = ($("#viewer").width() - $("#viewer #book").width()) / 2, $("#viewer #book").css("top", e), $("#viewer #book").css("left",
                c)) : (J ? ($("html").css("overflow", "hidden"), b = $(window).innerHeight(), b /= a, bookWidth = 10 > g.getUser().premium ? $(window).innerWidth() - 356 : $(window).innerWidth() - 18, 600 > bookWidth && (bookWidth = 600), c = bookWidth, aspect2 = c / 2 / e, a * aspect2 <= $(window).innerHeight() - 4 && (b = aspect2), c = Math.floor(e * b), b = c / e * a, $("#viewer .page").width(c).height(b), e = 0, 10 > g.getUser().premium && 650 < $("#viewer").height() && (e = Math.floor(($("#viewer").height() - b) / 2), 0 >= e && (e = 0), 50 < e && (e = 50)), $("#viewer #book").height(b), $("#viewer #book").css("top",
                e), $("#viewer .ad_wall").css("top", e), $("html").css("overflow", "auto")) : $("#viewer .page").width(c).height(b), u.isTwoPageDisplay() ? ($("#viewer").width(2 * c + 16), $("#viewer #book").width(2 * c)) : ($("#viewer").width(c + 40), $("#viewer #book").width(c)), c = ($("body").width() - $("#viewer").width()) / 2, 0 > c ? c = 0 : 160 < c && (c = 160), $(".ad_wall.left").width(c), $(".ad_wall.left").css("left", -1 * c), $(".ad_wall.right").width(c), $(".ad_wall.right").css("right", -1 * c))
        }

        function f(e) {
            m && m.stop();
            m = new JCOMI.TimeoutTimer({
                timeoutMsec: 5E3
            });
            m.start(e)
        }

        function r(e, a, c) {
            var b = g.getImageCount(),
                d = e;
            if (0 < a)
                for (e = i = 0; 10 > i;) {
                    d >= b && (d = 0);
                    if (x(d)) d++;
                    else if (C(d), d++, ++e >= a) break;
                    i++
                } else 0 > a || (c = !1);
            c && b <= L && (c = !1);
            c && f({
                timeout: function() {
                    r(d, a, !0)
                }
            })
        }

        function C(e) {
            var a = g.getImageCount();
            if (0 > e || a <= e) return null;
            var c = null;
            if (x(e)) c = w[v][e].image;
            else {
                w[v][e] = {
                    image: null,
                    loaded: !1
                };
                var b = g.getDoc(),
                    a = g.getImages(),
                    a = g.getLocationDir(v) + a[e].file + "?vw=" + encodeURIComponent(H.getVersion()),
                    c = new Image;
                if ("undefined" === typeof b.Location.enc) w[v][e].image =
                    c, c.onload = function() {
                        w[v][e].loaded = !0;
                        L++;
                        k != e && z != e || t(e)
                    }, c.src = a;
                else {
                    w[v][e].image = c;
                    var d = new XMLHttpRequest;
                    d.open("GET", a, !0);
                    d.responseType = "arraybuffer";
                    d.onload = function() {
                        var a = forge.aes.startDecrypting(b.Enc.key, b.Enc.iv);
                        a.update(forge.util.createBuffer(this.response));
                        a.finish();
                        c.onload = function() {
                            w[v][e].loaded = !0;
                            L++;
                            k != e && z != e || t(e)
                        };
                        c.src = "data:image/jpg;base64," + a.output.toString()
                    };
                    d.send()
                }
            }
            return c
        }

        function x(e) {
            return "undefined" === typeof w[v][e] || "undefined" === typeof w[v][e].image ||
                null === w[v][e].image ? !1 : !0
        }

        function p(e) {
            if (!(G <= M && k == O)) try {
                var a = g.getBaid(),
                    c = "/" + JCOMI.vname + "/pp/" + a + ".json",
                    b = g.getApiParam();
                b.pages = G;
                b.current_image_no = k;
                JCOMI.ajaxPost({
                    url: c,
                    data: b,
                    success: function(e, a) {
                        "OK" != e.status ? JCOMI.log.debug("" + JCOMI.vname + " " + c + " failed.") : (M = G, O = k)
                    },
                    error: function(e, a, c) {
                        JCOMI.log.debug(a)
                    },
                    async: e,
                    dataType: "json"
                })
            } catch (d) {
                JCOMI.log.debug(d)
            }
        }

        function A(e, a, c) {
            if (a === c) h(serif, text);
            else {
                var b = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=" +
                    a + "&to=" + c,
                    d = [];
                $.each(e, function(e, c) {
                    d.push({
                        Text: c[a].text
                    })
                });
                var f = g.getBingToken();
                $.ajax({
                    url: b,
                    type: "POST",
                    dataType: "json",
                    data: JSON.stringify(d),
                    timeout: 1E4,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + f
                    },
                    success: function(a, b) {
                        var d = /^"(.+)"$/i;
                        $.each(a, function(b, f) {
                            var g = f.translations[0].text,
                                k;
                            null !== (k = d.exec(a)) && (g = k[1]);
                            g = g.replace(/\\"/gi, '"');
                            k = e[b];
                            k[c] = {
                                text: g
                            };
                            h(k, g)
                        })
                    },
                    error: function(a, e, c) {
                        JCOMI.log.debug(e)
                    }
                })
            }
        }
        var u = this,
            g = JCOMI.namespace("JCOMI.document"),
            H = JCOMI.namespace("JCOMI.config"),
            k = 0,
            z = null,
            v = "hq",
            J = !0,
            E = !1,
            D = !1,
            y = [],
            q = {
                langChanged: function() {}
            },
            m = null,
            w = {
                hq: [],
                st: [],
                enc: []
            },
            L = 0,
            B = {},
            G = 0,
            M = 0,
            O = 0,
            N = null,
            F = new JCOMI.TimeoutTimer({
                timeoutMsec: 3E5,
                timeout: function() {
                    F.stop();
                    console.log("_pp");
                    p(!0);
                    F.start()
                }
            }),
            I = new JCOMI.TimeoutTimer({
                timeoutMsec: 200,
                timeout: function() {
                    a();
                    n(k)
                }
            });
        this.addComicEventListener = function(a) {
            var b = $.extend({}, q);
            $.extend(b, a);
            y.push(b)
        };
        this.initialize = function() {
            if (g.isMobile())
                if (10 <= g.getUserPremium()) $("#viewer").css("bottom",
                    "0");
                else {
                    var a = $(".adv.bottom").height() + "px";
                    $("#viewer").css("bottom", a)
                } d();
            "undefined" !== typeof g.getDoc().Location.enc ? v = "enc" : (v = "st", $(".page .image").show(), $(".page canvas").remove());
            var a = g.getUser(),
                b = u.getImageNoFromUrl();
            $.isNumeric(b) ? k = parseInt(b) : a.initial.image_no && (k = parseInt(a.initial.image_no), console.log("_: " + k), u.hasNextPage() || (k = 0));
            if (k >= g.getImageCount() || 0 > k) k = 0;
            a = k;
            r(a, 4, !0);
            1 <= a && r(a - 1, -2);
            1 == g.getPageDirection() ? ($(".page.first").addClass("right"), $(".page.second").addClass("left")) :
                ($(".page.first").addClass("left"), $(".page.second").addClass("right"));
            g.isMobile() || ($(".flip-left").css("cursor", "url(/virgo/img/arrow_btn_left_on.cur),move"), $(".flip-right").css("cursor", "url(/virgo/img/arrow_btn_right_on.cur),move"))
        };
        this.startup = function() {
            $("#initial-screen").hide();
            if (18 <= g.getBook().rating && 0 == g.getUser().adult_gate && !$.cookie(JCOMI.vname + "!adult")) {
                var a = "#notice_rating18";
                "r18" == g.getBook().category && (a = "#notice_adult");
                g.setProtect(!0);
                $("#protect").show();
                $(a).dialog({
                    modal: !0,
                    buttons: {
                        "読みます": function() {
                            $(this).dialog("close")
                        },
                        "本を閉じます": function() {
                            u.exitViewer();
                            return !1
                        }
                    },
                    close: function() {
                        $.cookie(JCOMI.vname + "!adult", 1, {
                            path: "/" + JCOMI.vname + "/",
                            expires: 1
                        });
                        $("#protect").hide();
                        g.setProtect(!1)
                    }
                })
            }
            u.movePage(k, !0);
            $("#viewer").show();
            F.start()
        };
        this.getImageNoFromUrl = function() {
            if (window.location.href.match(/\/i:(\d+)/)) return parseInt(RegExp.$1);
            var a = location.hash;
            return a && a.match(/#i:(\d+)/) ? parseInt(RegExp.$1) : null
        };
        this.getCurrentImageNo = function() {
            return k
        };
        this.isBookmarkEnabled =
            function(a) {};
        this.isBookmarkSelected = function(a) {
            var b = !1,
                c = $.cookie(JCOMI.vname + "!bookmark");
            if (null != c && (c = c.split(":"), 2 == c.length)) {
                var d = c[1];
                c[0] == g.getBaid() && parseInt(d) == a && (b = !0)
            }
            return b
        };
        this.isLikeEnabled = function(a) {};
        this.isLikeSelected = function(a) {};
        this.countLike = function(a) {
            return 0
        };
        this.countLikeLevel = function(a) {
            a = this.countLike(a);
            return 0 >= a || 0 == a ? 0 : 20 >= a ? 1 : 100 >= a ? 2 : 3
        };
        this.isMostLike = function(a) {
            return !1
        };
        this.isTweetEnabled = function(a) {};
        this.selectBookmark = function(a) {
            $.cookie(JCOMI.vname +
                "!bookmark", g.getBaid() + ":" + a, {
                    path: "/",
                    domain: g.getLocation().domain,
                    expires: 365
                })
        };
        this.unselectBookmark = function(a) {
            $.cookie(JCOMI.vname + "!bookmark", null, {
                path: "/",
                domain: g.getLocation().domain,
                expires: 365
            })
        };
        this.selectLike = function(a) {
            this._pagefav(a, 1)
        };
        this.unselectLike = function(a) {
            this._pagefav(a, 0)
        };
        this._pagefav = function(a, b) {
            if (!_doc.Pages[a] || "image" != _doc.Pages[a].unit) return !1;
            var c = String(_doc.Pages[a].i);
            if (b) _doc.User.Favs.push(c), _doc.Favs.list[c] || (_doc.Favs.list[c] = 0), _doc.Favs.list[c]++;
            else {
                var d = jQuery.inArray(c, _doc.User.Favs);
                _doc.User.Favs.splice(d, 1);
                _doc.Favs.list[c] && _doc.Favs.list[c]--
            }
            try {
                var f = "/" + JCOMI.vname + "/pagefav/" + _doc.getBaid() + "/" + c + "/" + b,
                    g = $.cookie(JCOMI.vname + "!__ticket");
                JCOMI.ajaxPost({
                    url: f,
                    data: {
                        __ticket: g,
                        __dataset: __dataset,
                        __serial: __serialx
                    },
                    success: function(a, c) {
                        "OK" == a.status && (_doc.User.Favs = a._doc.User.Favs, _doc.Favs = a._doc.Favs)
                    },
                    error: function(a, c, b) {},
                    dataType: "json"
                })
            } catch (h) {}
        };
        this.isTwoPageDisplay = function() {
            return g.isMobile() && "landscape" !=
                N ? !1 : g.isTwoPageLayout()
        };
        this.movePage = function(a, b) {
            n(a);
            $.cookie("" + JCOMI.vname + "!marker", g.getBaid() + ":" + k, {
                path: "/" + JCOMI.vname + "/",
                expires: 365
            });
            this.hasNextPage();
            this.hasPrevPage() ? $(".flip .prev").show() : $(".flip .prev").hide();
            $(document).scrollTop(0);
            1 == g.getPageDirection() ? $(document).scrollLeft($(document).width()) : $(document).scrollLeft(0)
        };
        this.nextPage = function() {
            if (!this.hasNextPage()) return this.jumpFinishPage();
            var a = 1;
            this.isTwoPageDisplay() && (a = 2);
            var a = k + a,
                b = g.getImageCount();
            b <= a && (a = b - 1);
            this.movePage(a, !1)
        };
        this.prevPage = function() {
            if (!this.hasPrevPage()) return !1;
            var a = 1;
            this.isTwoPageDisplay() && (a = 2);
            a = k - a;
            0 > a && (a = 0);
            this.movePage(a, !1)
        };
        this.hasNextPage = function() {
            var a = g.getImageCount(),
                b = 1;
            this.isTwoPageDisplay() && (b = 2);
            return a - k > b ? !0 : !1
        };
        this.hasPrevPage = function() {
            return 0 < k ? !0 : !1
        };
        this.toggleDisplay = function() {
            J = E ? !0 : J ? !1 : !0;
            d();
            n(k)
        };
        this.getDisplayFit = function() {
            return J
        };
        this.isFullscreen = function() {
            return E
        };
        this.toggleFullscreen = function() {
            E ? ($.fullscreen.exit(),
                E = !1) : ($("body").fullscreen(), J = E = !0)
        };
        this.resize = function(b) {
            I.isWait() ? I.stop() : a();
            I.start();
            d()
        };
        this.setScreenOrientation = function(a) {
            N = a
        };
        this.jumpFinishPage = function() {
            var a = g.getBaid(),
                a = g.getLoaction().host + "/book/fin/" + a;
            window.location.href = a;
            return !1
        };
        this.exitViewer = function() {
            var a = g.getBookPageUrl();
            try {
                if (window.opener) {
                    window.opener.location.href = a;
                    window.blur();
                    window.opener.focus();
                    window.close();
                    return
                }
            } catch (b) {}
            location.href = a;
            return !1
        };
        this.unload = function() {
            F.stop();
            p(!1)
        };
        this.getDisplaySerif = function() {
            return D
        };
        this.toggleSerif = function() {
            D = D ? !1 : !0;
            this.refreshSerif()
        };
        this.refreshSerif = function() {
            D ? (a(), g.getImages(), b(k), null != z && b(z)) : a()
        };
        this.closeAdOverlap = function() {
            $(".ad_overlap_wrapper").hide();
            10 > g.getUser().premium && (_adOverlapTimer.stop(), _adOverlapTimer.start())
        }
    }
});
$(function() {
    JCOMI.event = new function(l) {
        function a() {
            $("#toolbar").addClass("visible");
            $("#top-area").hide();
            $(".attention-bounce").removeClass("bounce").removeClass("animated");
            window.setTimeout(function() {
                $(".attention-bounce").addClass("bounce").addClass("animated")
            }, 200)
        }

        function b() {
            $("#toolbar").removeClass("visible");
            $("#top-area").show()
        }

        function h() {
            $("#toolbar").hasClass("visible") ? b() : a();
            return !1
        }

        function n(a) {
            if (L) {
                L = !1;
                a();
                var b = null;
                $(".tap.left").is(":visible") && (b = ".tap.left");
                $(".tap.right").is(":visible") &&
                    (b = ".tap.right");
                setTimeout(function() {
                    b && $(b).fadeOut(100);
                    L = !0
                }, 50)
            }
        }

        function t() {
            if (N) {
                var a = $("#promo-image ul li");
                a.hide();
                a.eq(Math.floor(Math.random() * a.length)).show();
                b();
                $(".ad-page").show();
                $(".menu").hide();
                m.isMobile() && ($(".page-flip").hide(), $(".adv.bottom").hide());
                $("#top-area").hide();
                N = !1;
                return !0
            }
            $("#ad-page-adv").is(":visible") && ($(".ad-page").hide(), $(".menu").show(), m.isMobile() && ($(".page-flip").show(), $(".adv.bottom").show()), $("#top-area").show(), e.start());
            return !1
        }

        function d() {
            return F ?
                (F = !1, $(".adv.bottom").show(), $("#book").show(), $("#smp-finadv").hide(), !0) : !1
        }

        function f() {
            if (m.getProtect()) return !1;
            if (F) F = !1;
            else if (10 > m.getUserPremium() && m.isMobile() && !q.hasNextPage()) return N = !1, t(), F = !0, b(), $(".menu").hide(), $(".adv.bottom").hide(), $("#book").hide(), $("#smp-finadv").show(), !1;
            t() || q.nextPage();
            y.update();
            return !1
        }

        function r() {
            if (m.getProtect() || d()) return !1;
            t() || q.prevPage();
            y.update();
            return !1
        }

        function C() {
            if (m.getProtect()) return !1;
            q.movePage(0);
            y.update();
            return !1
        }

        function x() {
            if (m.getProtect()) return !1;
            var a = m.getImageCount();
            q.movePage(a - 1);
            y.update();
            return !1
        }

        function p() {
            if (m.getProtect()) return !1;
            if (m.getBingToken()) return m._serifs ? A() : (m.loadSerifs(A), !1);
            m.resetBingToken(p)
        }

        function A() {
            y._bubble_zidx = 50;
            q.toggleSerif();
            y.update();
            return !1
        }

        function u() {
            q.resize(this.update);
            y.update();
            k()
        }

        function g(a, b, d, e) {
            if (m.getProtect()) return !1;
            a = $(window).height() < $(document).height() ? 1 : 0;
            if (0 < e) {
                if (0 < $(window).scrollTop()) return B = 0, !0;
                if (B < a) return B++, !1;
                B = 0;
                if (m.getPageDirection()) {
                    if ($(window).scrollLeft() +
                        $(window).width() + 20 < $(document).width()) return $(document).scrollLeft($(window).width()), $(window).scrollTop() + $(window).height() == $(document).height() && $(document).scrollTop(0), !1
                } else if (0 < $(window).scrollLeft()) return $(document).scrollLeft(0), $(window).scrollTop() + $(window).height() == $(document).height() && $(document).scrollTop(0), !1;
                r()
            } else if (0 > e) {
                if ($(window).scrollTop() + $(window).height() < $(document).height()) return B = 0, !0;
                if (B < a) return B++, !1;
                B = 0;
                if (m.getPageDirection()) {
                    if (0 < $(window).scrollLeft()) return $(document).scrollLeft(0),
                        $(window).scrollTop() + $(window).height() == $(document).height() && $(document).scrollTop(0), !1
                } else if ($(window).scrollLeft() + $(window).width() + 20 < $(document).width()) return $(document).scrollLeft($(window).width()), $(window).scrollTop() + $(window).height() == $(document).height() && $(document).scrollTop(0), !1;
                f()
            }
            return !1
        }

        function H() {
            if ($("#ad-page-adv").is(":visible")) return !1;
            $("#protect, #protect .attention").show();
            m.setProtect(!0);
            return !1
        }

        function k() {
            $("iframe").blur();
            $("#protect .attention").is(":visible") &&
                ($("#protect, #protect .attention").hide(), $(window.top).focus(), m.setProtect(!1));
            return !1
        }

        function z() {
            q.closeAdOverlap();
            k();
            return !1
        }

        function v(a) {
            d()
        }

        function J(a) {
            q.movePage(a);
            y.update()
        }

        function E(a, b) {
            $(".tap." + a).is(":visible") || $(".tap." + a).fadeIn(100, b);
            K && clearTimeout(K);
            K = setTimeout(function() {
                K = null;
                D(a)
            }, 3E3)
        }

        function D(a, b) {
            K && (clearTimeout(K), K = null);
            I = !1;
            setTimeout(function() {
                $(".tap." + a).is(":visible") && $(".tap." + a).fadeOut(100, b);
                I = !0
            }, 10)
        }
        $.extend({}, l);
        var y = this,
            q = JCOMI.namespace("JCOMI.viewer"),
            m = JCOMI.namespace("JCOMI.document"),
            w = JCOMI.namespace("JCOMI.PageSlider"),
            L = !0,
            B = 0,
            G = null,
            M = null,
            O = 50;
        l = m.isSmartPhone() ? 60 : 40;
        var N = !1,
            F = !1,
            I = !0,
            e = new JCOMI.TimeoutTimer({
                timeoutMsec: 1E3 * l,
                timeout: function() {
                    N = !0
                }
            }),
            K = null;
        this.initialize = function() {
            $("#toolbar").addClass("visible");
            setTimeout(function() {
                $("#toolbar").removeClass("visible")
            }, 1500);
            $(window.top).blur(function() {
                H()
            });
            $(window.top).focus(function() {
                k()
            });
            $(document).on("keyup", function(a) {
                switch (a.keyCode) {
                    case 44:
                        return window.clipboardData &&
                            window.clipboardData.clearData(), H(), !1
                }
            });
            $(document).on("keydown", function(a) {
                if (a.altKey || a.ctrlKey || a.shiftKey && a.ctrlKey) return H(), !1
            });
            $("#protect, #un-protect").on("click", function() {
                k()
            });
            var c = "pgdn, space, down, enter",
                d = "pgup, backspace, up";
            1 == m.getPageDirection() ? (c += ", left", d += ", right", $(".btnNext span").text("進む"), $(".btnBack span").text("戻る"), $(".btnNext").addClass("next"), $(".btnBack").addClass("prev"), G = f, M = r) : (c += ", right", d += ", left", $(".btnNext span").text("戻る"), $(".btnBack span").text("進む"),
                $(".btnNext").addClass("prev"), $(".btnBack").addClass("next"), G = r, M = f);
            $(document).jkey(c, function() {
                1 == m.getPageDirection() ? $(".tap.left").show() : $(".tap.right").show();
                n(f)
            });
            $(document).jkey(d, function() {
                1 == m.getPageDirection() ? $(".tap.right").show() : $(".tap.left").show();
                n(r)
            });
            $(document).jkey("home", function() {
                n(C)
            });
            $(document).jkey("end", function() {
                n(x)
            });
            $(document).jkey("m", function() {
                n(h)
            });
            $(window).on("load orientationchange resize", function() {
                if (m.isMobile()) {
                    var a;
                    a = window.orientation ?
                        90 === Math.abs(window.orientation) ? "landscape" : "portrait" : $(window).innerHeight() <= $(window).innerWidth() ? "landscape" : "portrait";
                    q.setScreenOrientation(a)
                }
                u()
            });
            $(document).on("mousewheel", "html", function(a, b, c, d) {
                return g(a, b, c, d)
            });
            (m.isMobile() || "IE" != JCOMI.getBrowser()) && $("#viewer").swipe({
                swipe: function(a, b, c, d, e, f) {
                    if (!I) return !1;
                    "left" === b ? M() : "right" === b && G()
                },
                threshold: 40
            });
            c = "ontouchstart" in document ? "touchstart" : "mousedown";
            d = "ontouchend" in document ? "touchend" : "mouseup";
            $(".flip-left").on(c,
                function() {
                    E("left")
                });
            $(".flip-left").on(d, function() {
                D("left", G)
            });
            $(".flip-right").on(c, function() {
                E("right")
            });
            $(".flip-right").on(d, function() {
                D("right", M)
            });
            m.isMobile() || ($(".next").on("click", function(a) {
                return f(a)
            }), $(".prev").on("click", function(a) {
                return r(a)
            }), $(".flip-left").hover(function() {
                E("left")
            }, function() {
                D("left")
            }), $(".flip-right").hover(function() {
                E("right")
            }, function() {
                D("right")
            }));
            m.isMobile() ? ($("body").swipe({
                swipe: function(c, d, e, f, g, h) {
                    if (!I) return !1;
                    "up" == d ? b() : "down" ==
                        d && a()
                },
                threshold: 40
            }), $("#top-area").swipe({
                tap: function(a, b) {
                    return h()
                }
            }), $(".ad-next").swipe({
                tap: function(a, b) {
                    setTimeout(function() {
                        f(a)
                    }, 50);
                    return !1
                }
            })) : ($(".menu").on("click", function(a) {
                return h()
            }), $(".menu").on(c, function() {
                $("#toolbar").hasClass("visible") ? $(".tap.menu-up").show() : $(".tap.menu-down").show()
            }), $(".menu").on(d, function() {
                $("#toolbar").hasClass("visible") ? $(".tap.menu-up").hide() : $(".tap.menu-down").hide()
            }));
            $(".speech_bubble").click(function() {
                var a = $(this).css("z-index");
                O < a && (O = a);
                $(this).css("z-index", ++O)
            });
            c = "ontouchend" in document ? "click touchend" : "click";
            $(".ad_overlap_close_btn").on(c, function() {
                z();
                return !1
            });
            if (m.isMobile()) $(".ad_overlap_wrapper").on(c, function() {
                z();
                return !1
            });
            $(".size-fix").on(c, function() {
                q.toggleDisplay();
                y.update();
                return !1
            });
            $(".fullscreen").on(c, function() {
                q.toggleFullscreen();
                y.update();
                k();
                return !1
            });
            $(".serif").on(c, function() {
                return p()
            });
            $(".exit").on(c, function() {
                q.exitViewer();
                return !1
            });
            $(".finish").on(c, function() {
                q.jumpFinishPage();
                return !1
            });
            $(window).on("beforeunload", function(a) {
                q.unload()
            });
            w.setPageSliderOption({
                selector: "#slider",
                max: m.getImageCount() - 1,
                value: q.getCurrentImageNo(),
                isNormal: 0 == m.getPageDirection() ? !0 : !1,
                onSlide: v,
                onStop: J
            });
            w.initPageSlider();
            $(".help").colorbox({
                inline: !0
            });
            $(".setting").colorbox({
                inline: !0,
                speed: 150,
                onOpen: function() {
                    $("#Language").val(m.getLang())
                }
            });
            $(".twshare").click(function() {
                var a = m.getBook(),
                    b = encodeURIComponent(window.location.href),
                    c = a.title;
                document.volume && (c += " " + document.volume);
                c += " (p" + (q.getCurrentImageNo() + 1) + ")";
                a.Authors && (c += " [" + a.Authors.join(",") + "]");
                a = " #マンガ図書館Z" + (1 == parseInt(a.site_target) ? "R18" : "");
                c = encodeURIComponent(a + " " + c + "\n");
                window.open("https://twitter.com/share?url=" + b + "&text=" + c, "_tweet", "width=550,height=450").focus()
            });
            $("#Language").change(function() {
                "" == $("#Language").val() ? $("#Language").val(m.getLang()) : (m.setLang($("#Language").val(), !0), $.colorbox.close(), q.refreshSerif(), y.update())
            });
            $("#toolbarMod").show();
            if (0 == m.getUserPremium()) {
                if (m.isMobile()) {
                    c =
                        $("body").height();
                    $("#promotion").height(c);
                    var d = $("#ad-page-adv .ad-text").height() + 10,
                        l = d + 0,
                        t = (c - l) / 2;
                    c > 500 + l ? ($("#promo-image").remove(), $("#ad-page-adv .ad-top").css("top", (t - 250) / 2 + d), $("#ad-page-adv .ad-bottom").css("bottom", (t - 250) / 2 + 0)) : ($("#ad-page-adv .ad-top").remove(), $("#ad-page-adv .ad-bottom").css("bottom", 0))
                }
                e.start()
            }
        };
        this.update = function() {
            q.hasPrevPage() ? $(".flip.prev").show() : $(".flip.prev").hide();
            var a = q.getCurrentImageNo();
            $(".current-number").text(a + 1);
            $(".total-number").text(m.getImageCount());
            w.setPageSliderValue(q.getCurrentImageNo());
            q.getDisplayFit() ? ($(".btnZoom span").text("100%"), $(".btnZoom").removeClass("fit")) : ($(".btnZoom span").text("ﾌｨｯﾄ"), $(".btnZoom").addClass("fit"));
            q.isFullscreen() ? ($(".btnAll span").text("通常画面"), $(".btnAll").addClass("return")) : ($(".btnAll span").text("全画面"), $(".btnAll").removeClass("return"));
            q.getDisplaySerif() ? $(".btnSerif").addClass("on") : $(".btnSerif").removeClass("on");
            var b;
            window.history.replaceState ? (b = window.location.href.match(/\/i:(\d+)/) ?
                window.location.href.replace(/\/i:(\d+)/, "/i:" + a) : window.location.href + "/i:" + a, window.history.replaceState(JCOMI.vname, "", b)) : (window.location.hash = "#i:" + a, b = window.location.href + "/i:" + a);
            var d = "p" + (parseInt(a) + 1);
            $(".page.center").is(":hidden") && (d = [], $(".page.left").is(":visible") && d.push("p" + (parseInt($(".page.left").data("image")) + 1)), $(".page.right").is(":visible") && d.push("p" + (parseInt($(".page.right").data("image")) + 1)), d = d.join(" : "));
            $("#page-display").text(d);
            $("meta.share-url").prop("content",
                b);
            $("meta.image-url").prop("content", window.location.protocol + "//" + window.location.host + "/img/share/" + m.getBaid() + "/" + a);
            0 == m.getUserPremium() && m.isMobile() && $("#ad-page-adv").is(":visible")
        }
    }({})
});
$(document).ready(function() {
    var l = JCOMI.namespace("JCOMI.document"),
        a = JCOMI.namespace("JCOMI.viewer"),
        b = JCOMI.namespace("JCOMI.event");
    $(".social").hide();
    $("body").bind("contextmenu", function(a) {
        return 0 != l.getDebug() ? !0 : !1
    });
    document.oncopy = function(a) {
        return !1
    };
    $("div").css("user-select", "none");
    l.initialize(function() {
        a.initialize();
        b.initialize();
        a.startup();
        b.update()
    })
});

function parseUri(l) {
    var a = parseUri.options;
    l = a.parser[a.strictMode ? "strict" : "loose"].exec(l);
    for (var b = {}, h = 14; h--;) b[a.key[h]] = l[h] || "";
    b[a.q.name] = {};
    b[a.key[12]].replace(a.q.parser, function(h, l, d) {
        l && (b[a.q.name][l] = d)
    });
    return b
}
parseUri.options = {
    strictMode: !1,
    key: "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};
window.sprintf || function() {
    var l = {
            i: 32785,
            d: 32785,
            u: 32801,
            o: 33121,
            x: 33377,
            X: 37473,
            f: 146,
            c: 10240,
            s: 132
        },
        a = /%(?:(\d+)\$)?(#|0)?(\d+)?(?:\.(\d+))?(l)?([%iduoxXfcs])/g;
    window.sprintf = function(b) {
        var h = 1,
            n = 0,
            t = arguments;
        return b.replace(a, function(a, b, r, C, x, p, A) {
            if ("%" === A) return "%";
            a = "";
            p = l[A];
            var u;
            n = b ? parseInt(b) : h++;
            p & 1024 || (a = void 0 === t[n] ? "" : t[n]);
            p & 3 && (a = p & 1 ? parseInt(a) : parseFloat(a), a = isNaN(a) ? "" : a);
            p & 4 && (a = (("s" === A ? a : A) || "").toString());
            p & 32 && (a = 0 <= a ? a : a % 4294967296 + 4294967296);
            p & 768 && (a = a.toString(p &
                256 ? 8 : 16));
            p & 64 && "#" === r && (a = (p & 256 ? "0" : "0x") + a);
            p & 128 && x && (a = p & 2 ? a.toFixed(x) : a.slice(0, x));
            p & 24576 && (u = "number" !== typeof a || 0 > a);
            p & 8192 && (a = u ? "" : String.fromCharCode(a));
            p & 32768 && (r = "0" === r ? "" : r);
            a = p & 4096 ? a.toString().toUpperCase() : a.toString();
            p & 2048 || void 0 === C || a.length >= C || (b = Array(C - a.length + 1).join(r ? "#" === r ? " " : r : " "), a = p & 16 && "0" === r && !a.indexOf("-") ? "-" + b + a.slice(1) : b + a);
            return a
        })
    }
}();