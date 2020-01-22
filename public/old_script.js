var aPageStart = (new Date()).getTime();
var ue_t0 = ue_t0 || +new Date();

P.when("ContentGridAccessibilityProcessor").execute(function(ContentGridA11yProcessor) {
    ContentGridA11yProcessor.getInstance().requestProcessMarkup();
});

P.when("ContentGridAccessibilityProcessor").execute(function(ContentGridA11yProcessor) {
    ContentGridA11yProcessor.getInstance().requestProcessMarkup();
});

var accessoryUpsellPopoverFactoryDataList = [];

var accessoryUpsellPopoverFactoryData = {
    popoverTriggerId: "abb-popover-trigger-B01LXP5TXI",
    popoverOptions: {
        name: "abb-product-view-B01LXP5TXI",
        header: "Amazon Ethernet Adaptador - Disfruta de la velocidad y la fiabilidad de la conexión a Internet por cable",
        width: 800,
        popoverLabel: "",
        closeButtonLabel: ""
    }
};
accessoryUpsellPopoverFactoryDataList.push(accessoryUpsellPopoverFactoryData);

var accessoryUpsellPopoverFactoryData = {
    popoverTriggerId: "abb-popover-trigger-B078KSHVCS",
    popoverOptions: {
        name: "abb-product-view-B078KSHVCS",
        header: "Cable USB de Corriente para el Amazon Fire TV",
        width: 800,
        popoverLabel: "",
        closeButtonLabel: ""
    }
};
accessoryUpsellPopoverFactoryDataList.push(accessoryUpsellPopoverFactoryData);

window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {
    var ue_csm = window,
        ue_hob = +new Date();
    (function(d) {
        var e = d.ue = d.ue || {},
            f = Date.now || function() {
                return +new Date
            };
        e.d = function(b) {
            return f() - (b ? 0 : d.ue_t0)
        };
        e.stub = function(b, a) {
            if (!b[a]) {
                var c = [];
                b[a] = function() {
                    c.push([c.slice.call(arguments), e.d(), d.ue_id])
                };
                b[a].replay = function(b) {
                    for (var a; a = c.shift();) b(a[0], a[1], a[2])
                };
                b[a].isStub = 1
            }
        };
        e.exec = function(b, a) {
            return function() {
                try {
                    return b.apply(this, arguments)
                } catch (c) {
                    ueLogError(c, {
                        attribution: a || "undefined",
                        logLevel: "WARN"
                    })
                }
            }
        }
    })(ue_csm);
    var ue_err_chan = 'jserr-rw';
    (function(d, e) {
        function h(f, b) {
            if (!(a.ec > a.mxe) && f) {
                a.ter.push(f);
                b = b || {};
                var c = f.logLevel || b.logLevel;
                c && c !== k && c !== m && c !== n && c !== p || a.ec++;
                c && c != k || a.ecf++;
                b.pageURL = "" + (e.location ? e.location.href : "");
                b.logLevel = c;
                b.attribution = f.attribution || b.attribution;
                a.erl.push({
                    ex: f,
                    info: b
                })
            }
        }

        function l(a, b, c, e, g) {
            d.ueLogError({
                m: a,
                f: b,
                l: c,
                c: "" + e,
                err: g,
                fromOnError: 1,
                args: arguments
            }, g ? {
                attribution: g.attribution,
                logLevel: g.logLevel
            } : void 0);
            return !1
        }
        var k = "FATAL",
            m = "ERROR",
            n = "WARN",
            p = "DOWNGRADED",
            a = {
                ec: 0,
                ecf: 0,
                pec: 0,
                ts: 0,
                erl: [],
                ter: [],
                mxe: 50,
                startTimer: function() {
                    a.ts++;
                    setInterval(function() {
                        d.ue && a.pec < a.ec && d.uex("at");
                        a.pec = a.ec
                    }, 1E4)
                }
            };
        l.skipTrace = 1;
        h.skipTrace = 1;
        h.isStub = 1;
        d.ueLogError = h;
        d.ue_err = a;
        e.onerror = l
    })(ue_csm, window);
    var ue_id = 'E81T54FVZ2MDMD0N7JR7',
        ue_url = '/gp/uedata',
        ue_navtiming = 1,
        ue_mid = 'A1RKKUPIHCS9HS',
        ue_sid = '261-8173218-5181763',
        ue_sn = 'www.amazon.es',
        ue_furl = 'fls-eu.amazon.es',
        ue_surl = 'https://unagi-eu.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
        ue_int = 0,
        ue_fcsn = 1,
        ue_urt = 3,
        ue_rpl_ns = 'cel-rpl',
        ue_ddq = 1,
        ue_fpf = '//fls-eu.amazon.es/1/batch/1/OP/A1RKKUPIHCS9HS:261-8173218-5181763:E81T54FVZ2MDMD0N7JR7$uedata=s:',
        ue_sbuimp = 1,
        ue_swi = 1;

    function ue_viz() {
        (function(c, e, a) {
            function k(b) {
                if (c.ue.viz.length < p && !l) {
                    var a = b.type;
                    b = b.originalEvent;
                    /^focus./.test(a) && b && (b.toElement || b.fromElement || b.relatedTarget) || (a = e[m] || ("blur" == a || "focusout" == a ? "hidden" : "visible"), c.ue.viz.push(a + ":" + (+new Date - c.ue.t0)), "visible" == a && (ue.isl && uex("at"), l = 1))
                }
            }
            for (var l = 0, f, g, m, n = ["", "webkit", "o", "ms", "moz"], d = 0, p = 20, h = 0; h < n.length && !d; h++)
                if (a = n[h], f = (a ? a + "H" : "h") + "idden", d = "boolean" == typeof e[f]) g = a + "visibilitychange", m = (a ? a + "V" : "v") + "isibilityState";
            k({});
            d && e.addEventListener(g, k, 0);
            c.ue && d && (c.ue.pageViz = {
                event: g,
                propHid: f
            })
        })(ue_csm, document, window)
    };
    (function(d, k, K) {
        function E(a) {
            return a && a.replace && a.replace(/^\s+|\s+$/g, "")
        }

        function r(a) {
            return "undefined" === typeof a
        }

        function F(a, b) {
            for (var c in b) b[t](c) && (a[c] = b[c])
        }

        function G(a) {
            try {
                var b = K.cookie.match(RegExp("(^| )" + a + "=([^;]+)"));
                if (b) return b[2].trim()
            } catch (c) {}
        }

        function L(p, b) {
            p && (d.ue_id = a.id = a.rid = p, w = w.replace(/((.*?:){2})(\w+)/, function(a, b) {
                return b + p
            }));
            b && (w = w.replace(/(.*?:)(\w|-)+/, function(a, d) {
                return d + b
            }), d.ue_sid = b);
            d.ue_fpf = w;
            d.ue.tag("accelerated-experience")
        }

        function M() {
            var a = {};
            return function(b) {
                b && (a[b] = 1);
                b = [];
                for (var c in a) a[t](c) && b.push(c);
                return b
            }
        }

        function x(d, b, c, e) {
            e = e || +new B;
            var f, m, y = k.csa;
            if (b || r(c)) {
                if (d) {
                    f = b ? h("t", b) || h("t", b, {}) : a.t;
                    f[d] = e;
                    for (m in c) c[t](m) && h(m, b, c[m]);
                    !b && k.ue_csa_pl && y && y("PageTiming")("mark", Z[d] || d)
                }
                return e
            }
        }

        function h(d, b, c) {
            var e = b && b != a.id ? a.sc[b] : a;
            e || (e = a.sc[b] = {});
            "id" === d && c && (N = 1);
            return e[d] = c || e[d]
        }

        function O(d, b, c, e, f) {
            c = "on" + c;
            var h = b[c];
            "function" === typeof h ? d && (a.h[d] = h) : h = function() {};
            b[c] = function(a) {
                f ? (e(a), h(a)) :
                    (h(a), e(a))
            };
            b[c] && (b[c].isUeh = 1)
        }

        function P(p, b, c, e) {
            function q(b, c) {
                var d = [b],
                    g = 0,
                    e = {},
                    f, k;
                c ? (d.push("m=1"), e[c] = 1) : e = a.sc;
                for (k in e)
                    if (e[t](k)) {
                        var q = h("wb", k),
                            m = h("t", k) || {},
                            n = h("t0", k) || a.t0,
                            l;
                        if (c || 2 == q) {
                            q = q ? g++ : "";
                            d.push("sc" + q + "=" + k);
                            for (l in m) 3 >= l.length && !r(m[l]) && null !== m[l] && d.push(l + q + "=" + (m[l] - n));
                            d.push("t" + q + "=" + m[p]);
                            if (h("ctb", k) || h("wb", k)) f = 1
                        }
                    }!v && f && d.push("ctb=1");
                return d.join("&")
            }

            function m(b, c, g, e) {
                if (b) {
                    var f = d.ue_err;
                    d.ue_url && !e && b && 0 < b.length && (e = new Image, a.iel.push(e),
                        e.src = b, a.count && a.count("postbackImageSize", b.length));
                    if (w) {
                        var h = k.encodeURIComponent;
                        h && b && (e = new Image, b = "" + d.ue_fpf + h(b) + ":" + (+new B - d.ue_t0), a.iel.push(e), e.src = b)
                    } else a.log && (a.log(b, "uedata", {
                        n: 1
                    }), a.ielf.push(b));
                    f && !f.ts && f.startTimer();
                    a.b && (f = a.b, a.b = "", m(f, c, g, 1))
                }
            }

            function y(b) {
                var c = z ? z.type : C,
                    d = c && 2 != c,
                    e = a.bfini;
                N || (e && 1 < e && (b += "&bfform=1", d || (a.isBFT = e - 1)), 2 == c && (b += "&bfnt=1", a.isBFT = a.isBFT || 1), a.ssw && a.isBFT && (r(a.isNRBF) && (c = a.ssw(a.oid), c.e || r(c.val) || (a.isNRBF = 1 < c.val ? 0 : 1)),
                    r(a.isNRBF) || (b += "&nrbf=" + a.isNRBF)), a.isBFT && !a.isNRBF && (b += "&bft=" + a.isBFT));
                return b
            }
            if (!a.paused && (b || r(c))) {
                for (var l in c) c[t](l) && h(l, b, c[l]);
                x("pc", b, c);
                l = h("id", b) || a.id;
                var g = a.url + "?" + p + "&v=" + a.v + "&id=" + l,
                    v = h("ctb", b) || h("wb", b),
                    n, u;
                v && (g += "&ctb=" + v);
                1 < d.ueinit && (g += "&ic=" + d.ueinit);
                if (!("ld" != p && "ul" != p || b && b != l)) {
                    if ("ld" == p) {
                        try {
                            k[H] && k[H].isUeh && (k[H] = null)
                        } catch (G) {}
                        if (k.chrome)
                            for (u = 0; u < I.length; u++) Q(D, I[u]);
                        (u = K.ue_backdetect) && u.ue_back && u.ue_back.value++;
                        d._uess && (n = d._uess());
                        a.isl = 1
                    }
                    a._bf && (g += "&bf=" + a._bf());
                    d.ue_navtiming && f && (h("ctb", l, "1"), x("tc", C, C, J));
                    A && !R && (f && F(a.t, {
                        na_: f.navigationStart,
                        ul_: f.unloadEventStart,
                        _ul: f.unloadEventEnd,
                        rd_: f.redirectStart,
                        _rd: f.redirectEnd,
                        fe_: f.fetchStart,
                        lk_: f.domainLookupStart,
                        _lk: f.domainLookupEnd,
                        co_: f.connectStart,
                        _co: f.connectEnd,
                        sc_: f.secureConnectionStart,
                        rq_: f.requestStart,
                        rs_: f.responseStart,
                        _rs: f.responseEnd,
                        dl_: f.domLoading,
                        di_: f.domInteractive,
                        de_: f.domContentLoadedEventStart,
                        _de: f.domContentLoadedEventEnd,
                        _dc: f.domComplete,
                        ld_: f.loadEventStart,
                        _ld: f.loadEventEnd,
                        ntd: ("function" !== typeof A.now || r(J) ? 0 : new B(J + A.now()) - new B) + a.t0
                    }), z && F(a.t, {
                        ty: z.type + a.t0,
                        rc: z.redirectCount + a.t0
                    }), R = 1);
                    F(a.t, {
                        hob: d.ue_hob,
                        hoe: d.ue_hoe
                    });
                    a.ifr && (g += "&ifr=1")
                }
                x(p, b, c, e);
                c = "ld" == p && b && h("wb", b);
                var s;
                c || b && b !== l || $(b);
                c || l == a.oid || aa(l, (h("t", b) || {}).tc || +h("t0", b), +h("t0", b));
                (e = d.ue_mbl) && e.cnt && !c && (g += e.cnt());
                c ? h("wb", b, 2) : "ld" == p && (a.lid = E(l));
                for (s in a.sc)
                    if (1 == h("wb", s)) break;
                if (c) {
                    if (a.s) return;
                    g = q(g, null)
                } else e = q(g, null), e !=
                    g && (e = y(e), a.b = e), n && (g += n), g = q(g, b || a.id);
                g = y(g);
                if (a.b || c)
                    for (s in a.sc) 2 == h("wb", s) && delete a.sc[s];
                n = 0;
                a._rt && (g += "&rt=" + a._rt());
                c || (a.s = 0, (n = d.ue_err) && 0 < n.ec && n.pec < n.ec && (n.pec = n.ec, g += "&ec=" + n.ec + "&ecf=" + n.ecf), n = h("ctb", b), h("t", b, {}));
                a.tag && a.tag().length && (g += "&csmtags=" + a.tag().join("|"), a.tag = M());
                s = a.viz || [];
                (e = s.length) && (g += "&viz=" + s.splice(0, e).join("|"));
                r(d.ue_pty) || (g += "&pty=" + d.ue_pty + "&spty=" + d.ue_spty + "&pti=" + d.ue_pti);
                a.tabid && (g += "&tid=" + a.tabid);
                a.aftb && (g += "&aftb=1");
                !a._ui || b && b != l || (g += a._ui());
                a.a = g;
                m(g, p, n, c)
            }
        }

        function $(a) {
            var b = k.ue_csm_markers || {},
                c;
            for (c in b) b[t](c) && x(c, a, C, b[c])
        }

        function v(a, b, c) {
            c = c || k;
            if (c[S]) c[S](a, b, !1);
            else if (c[T]) c[T]("on" + a, b)
        }

        function Q(a, b, c) {
            c = c || k;
            if (c[U]) c[U](a, b, !1);
            else if (c[V]) c[V]("on" + a, b)
        }

        function W() {
            function a() {
                d.onUl()
            }

            function b(a) {
                return function() {
                    c[a] || (c[a] = 1, P(a))
                }
            }
            var c = {},
                e, f;
            d.onLd = b("ld");
            d.onLdEnd = b("ld");
            d.onUl = b("ul");
            e = {
                stop: b("os")
            };
            k.chrome ? (v(D, a), I.push(a)) : e[D] = d.onUl;
            for (f in e) e[t](f) && O(0,
                k, f, e[f]);
            d.ue_viz && ue_viz();
            v("load", d.onLd);
            x("ue")
        }

        function aa(f, b, c) {
            var e = d.ue_mbl,
                h = k.csa,
                m = h && h("SPA"),
                h = h && h("Content");
            e && e.ajax && e.ajax(b, c);
            m && h && (m("newPage", {
                requestId: f,
                transitionType: "soft"
            }), h("get", "page")("emit", "loaded"));
            a.tag("ajax-transition")
        }
        d.ueinit = (d.ueinit || 0) + 1;
        var a = d.ue = d.ue || {};
        a.t0 = k.aPageStart || d.ue_t0;
        a.id = d.ue_id;
        a.url = d.ue_url;
        a.rid = d.ue_id;
        a.a = "";
        a.b = "";
        a.h = {};
        a.s = 1;
        a.t = {};
        a.sc = {};
        a.iel = [];
        a.ielf = [];
        a.viz = [];
        a.v = "0.206341.0";
        a.paused = !1;
        var t = "hasOwnProperty",
            D = "beforeunload",
            H = "on" + D,
            S = "addEventListener",
            U = "removeEventListener",
            T = "attachEvent",
            V = "detachEvent",
            Z = {
                cf: "criticalFeature",
                af: "aboveTheFold",
                fn: "functional",
                bb: "bodyBegin",
                be: "bodyEnd",
                ld: "loaded"
            },
            B = k.Date,
            A = k.performance || k.webkitPerformance,
            f = (A || {}).timing,
            z = (A || {}).navigation,
            J = (f || {}).navigationStart,
            w = d.ue_fpf,
            N = 0,
            R = 0,
            I = [],
            C;
        a.oid = E(a.id);
        a.lid = E(a.id);
        a._t0 = a.t0;
        a.tag = M();
        a.ifr = k.top !== k.self || k.frameElement ? 1 : 0;
        a.attach = v;
        a.detach = Q;
        if ("000-0000000-8675309" === d.ue_sid) {
            var X = G("cdn-rid"),
                Y = G("session-id");
            X && Y && L(X, Y)
        }
        d.uei = W;
        d.ueh = O;
        d.ues = h;
        d.uet = x;
        d.uex = P;
        a.reset = L;
        a.pause = function(d) {
            a.paused = d
        };
        W()
    })(ue_csm, window, ue_csm.document);
    ue.stub(ue, "event");
    ue.stub(ue, "onSushiUnload");
    ue.stub(ue, "onSushiFlush");
    ue.stub(ue, "log");
    ue.stub(ue, "onunload");
    ue.stub(ue, "onflush");
    (function(c) {
        var a = c.ue;
        a.cv = {};
        a.cv.scopes = {};
        a.count = function(d, c, b) {
            var e = {},
                f = a.cv,
                g = b && 0 === b.c;
            e.counter = d;
            e.value = c;
            e.t = a.d();
            b && b.scope && (f = a.cv.scopes[b.scope] = a.cv.scopes[b.scope] || {}, e.scope = b.scope);
            if (void 0 === c) return f[d];
            f[d] = c;
            d = 0;
            b && b.bf && (d = 1);
            ue_csm.ue_sclog || !a.clog || 0 !== d || g ? a.log && a.log(e, "csmcount", {
                c: 1,
                bf: d
            }) : a.clog(e, "csmcount", {
                bf: d
            })
        };
        a.count("baselineCounter2", 1);
        a && a.event && (a.event({
                requestId: c.ue_id || "rid",
                server: c.ue_sn || "sn",
                obfuscatedMarketplaceId: c.ue_mid || "mid"
            },
            "csm", "csm.CSMBaselineEvent.4"), a.count("nexusBaselineCounter", 1, {
            bf: 1
        }))
    })(ue_csm);
    var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;

function amz_js_PopWin(url, name, options) {
    var ContextWindow = window.open(url, name, options);
    ContextWindow.focus();
    return false;
}

window.navmet.push({
    key: 'NavBar',
    end: +new Date(),
    begin: window.navmet.main
});

window.$Nav && $Nav.declare('config.fixedBarBeacon', false);
window.$Nav && $Nav.when("data").run(function(data) {
    data({
        "freshTimeout": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "title": "<style>#nav-flyout-fresh{width:269px;padding:0;}#nav-flyout-fresh .nav-flyout-content{padding:0;}</style><a href='/amazonfresh'><img src='//images-eu.ssl-images-amazon.com/images/G/02/omaha/images/yoda/flyout_72dpi._V270092858_.png' /></a>"
                    }
                }
            }
        },
        "cartTimeout": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "button": {
                            "text": "Mi cesta",
                            "url": "/gp/cart/view.html?ref_=nav_err_cart_timeout"
                        },
                        "title": " ",
                        "paragraph": "Hay un problema al recuperar su cesta en este momento."
                    }
                }
            }
        },
        "primeTimeout": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "title": "<a href='/gp/prime?ref_=nav_prime_btn_fb'><img src='https://images-eu.ssl-images-amazon.com/images/G/02/prime/yourprime/yourprime-widget-piv-fallback._V310089192_.jpg' /></a>"
                    }
                }
            }
        },
        "ewcTimeout": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "button": {
                            "text": "Mi cesta",
                            "url": "/gp/cart/view.html?ref_=nav_err_ewc_timeout"
                        },
                        "title": " ",
                        "paragraph": "Hay un problema al recuperar su cesta en este momento"
                    }
                }
            }
        },
        "errorWishlist": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "button": {
                            "text": "Mi lista de deseos",
                            "url": "/gp/registry/wishlist/?ref_=nav_err_wishlist"
                        },
                        "title": " ",
                        "paragraph": "Hay un problema recuperar la lista ahora"
                    }
                }
            }
        },
        "emptyWishlist": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "button": {
                            "text": "Mi lista de deseos",
                            "url": "/gp/registry/wishlist/?ref_=nav_err_empty_wishlist"
                        },
                        "title": " ",
                        "paragraph": "La lista está vacía"
                    }
                }
            }
        },
        "yourAccountContent": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "button": {
                            "text": "Mi cuenta",
                            "url": "/gp/css/homepage.html?ref_=nav_err_youraccount"
                        },
                        "title": " ",
                        "paragraph": "Hay un problema recuperar la lista ahora"
                    }
                }
            }
        },
        "shopAllTimeout": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "paragraph": "Hay un problema recuperar la lista ahora"
                    }
                }
            }
        },
        "kindleTimeout": {
            "template": {
                "name": "flyoutError",
                "data": {
                    "error": {
                        "paragraph": "Hay un problema recuperar la lista ahora"
                    }
                }
            }
        }
    });
});
window.$Nav && $Nav.when("util.templates").run("FlyoutErrorTemplate", function(templates) {
    templates.add("flyoutError", "<# if(error.title) { #><span class='nav-title'><#=error.title #></span><# } #><# if(error.paragraph) { #><p class='nav-paragraph'><#=error.paragraph #></p><# } #><# if(error.button) { #><a href='<#=error.button.url #>' class='nav-action-button' ><span class='nav-action-inner'><#=error.button.text #></span></a><# } #>");
});
if (typeof uet == 'function') {
    uet('bb', 'iss-init-pc', {
        wb: 1
    });
}
if (!window.$SearchJS && window.$Nav) {
    window.$SearchJS = $Nav.make('sx');
}
var opts = {
    host: "completion.amazon.co.uk/search/complete",
    marketId: "44551",
    obfuscatedMarketId: "A1RKKUPIHCS9HS",
    searchAliases: ["amazon-devices", "stripbooks", "english-books", "foreign-books", "popular", "dvd", "electronics", "software", "videogames", "aps", "watches", "toys", "kitchen", "digital-text", "mobile-apps", "gift-cards", "baby", "shoes", "mp3-downloads", "digital-music", "digital-music-track", "digital-music-album", "computers", "automotive", "vehicles", "sporting", "diy", "jewelry", "lighting", "office-products", "hpc", "apparel", "mi", "warehouse-deals", "fashion", "handmade", "handmade-jewelry", "handmade-home-and-kitchen", "lawngarden", "grocery", "beauty", "industrial", "instant-video", "pantry", "black-friday", "cyber-monday", "pets", "appliances", "alexa-skills"],
    filterAliases: [],
    pageType: "Detail",
    requestId: "E81T54FVZ2MDMD0N7JR7",
    sessionId: "261-8173218-5181763",
    language: "es_ES",
    customerId: "A3PH2YNC1ENSG3",
    b2b: 0,
    fresh: 0,
    isJpOrCn: 0,
    isUseAuiIss: 1
};
var issOpts = {
    fallbackFlag: 1,
    isDigitalFeaturesEnabled: 0,
    isWayfindingEnabled: 0,
    dropdown: "select.searchSelect",
    departmentText: "en {department}",
    suggestionText: "Sugerencias de búsqueda",
    recentSearchesTreatment: "C",
    authorSuggestionText: "Explora libros XXAUTHXX",
    translatedStringsMap: {
        "sx-recent-searches": "",
        "sx-your-recent-search": "Inspirado por tu búsqueda reciente"
    },
    biaTitleText: "",
    biaPurchasedText: "",
    biaViewAllText: "",
    biaViewAllManageText: "",
    biaAndText: "",
    biaManageText: "",
    biaWeblabTreatment: "",
    issNavConfig: {},
    np: 0,
    issCorpus: [],
    cf: 1,
    removeDeepNodeISS: "",
    trendingTreatment: "C",
    useAPIV2: "",
    opfSwitch: "",
    isISSDesktopRefactorEnabled: "1",
    useServiceHighlighting: "true",
    isInternal: 0,
    isAPICachingDisabled: true,
    disableAutocompleteOnFocus: ""
};
if (opts.isUseAuiIss === 1 && window.$Nav) {
    window.$Nav.when('sx.iss').run('iss-mason-init', function(iss) {
        var issInitObj = buildIssInitObject(opts, issOpts, true);
        new iss.IssParentCoordinator(issInitObj);
        $SearchJS.declare('canCreateAutocomplete', issInitObj);
    });
} else if (window.$SearchJS) {
    var iss;
    // BEGIN Deprecated globals
    var issHost = opts.host,
        issMktid = opts.marketId,
        issSearchAliases = opts.searchAliases,
        updateISSCompletion = function() {
            iss.updateAutoCompletion();
        };
    // END deprecated globals
    $SearchJS.when('jQuery', 'search-js-autocomplete-lib').run('autocomplete-init', initializeAutocomplete);
    $SearchJS.when('canCreateAutocomplete').run('createAutocomplete', createAutocomplete);
} // END conditional for window.$SearchJS
function initializeAutocomplete(jQuery) {
    var issInitObj = buildIssInitObject(opts, issOpts);
    $SearchJS.declare("canCreateAutocomplete", issInitObj);
} // END initializeAutocomplete
function initSearchCsl(searchCSL, issInitObject) {
    searchCSL.init(
        opts.pageType,
        (window.ue && window.ue.rid) || opts.requestId
    );
    $SearchJS.declare("canCreateAutocomplete", issInitObject);
} // END initSearchCsl
function createAutocomplete(issObject) {
    iss = new AutoComplete(issObject);
    $SearchJS.publish("search-js-autocomplete", iss);
    logMetrics();
} // END createAutocomplete
function buildIssInitObject(opts, issOpts, isNewIss) {
    var issInitObj = {
        src: opts.host,
        sessionId: opts.sessionId,
        requestId: opts.requestId,
        mkt: opts.marketId,
        obfMkt: opts.obfuscatedMarketId,
        pageType: opts.pageType,
        language: opts.language,
        customerId: opts.customerId,
        fresh: opts.fresh,
        b2b: opts.b2b,
        aliases: opts.searchAliases,
        fb: issOpts.fallbackFlag,
        isDigitalFeaturesEnabled: issOpts.isDigitalFeaturesEnabled,
        isWayfindingEnabled: issOpts.isWayfindingEnabled,
        issPrimeEligible: issOpts.issPrimeEligible,
        deptText: issOpts.departmentText,
        sugText: issOpts.suggestionText,
        filterAliases: opts.filterAliases,
        biaWidgetUrl: opts.biaWidgetUrl,
        recentSearchesTreatment: issOpts.recentSearchesTreatment,
        authorSuggestionText: issOpts.authorSuggestionText,
        translatedStringsMap: issOpts.translatedStringsMap,
        biaTitleText: "",
        biaPurchasedText: "",
        biaViewAllText: "",
        biaViewAllManageText: "",
        biaAndText: "",
        biaManageText: "",
        biaWeblabTreatment: "",
        issNavConfig: issOpts.issNavConfig,
        cf: issOpts.cf,
        ime: opts.isJpOrCn,
        mktid: opts.marketId,
        qs: opts.isJpOrCn,
        issCorpus: issOpts.issCorpus,
        deepNodeISS: {
            searchAliasAccessor: function($) {
                return (window.SearchPageAccess && window.SearchPageAccess.searchAlias()) ||
                    $('select.searchSelect').children().attr('data-root-alias');
            },
            searchAliasDisplayNameAccessor: function() {
                return (window.SearchPageAccess && window.SearchPageAccess.searchAliasDisplayName());
            }
        },
        removeDeepNodeISS: issOpts.removeDeepNodeISS,
        trendingTreatment: issOpts.trendingTreatment,
        useAPIV2: issOpts.useAPIV2,
        opfSwitch: issOpts.opfSwitch,
        isISSDesktopRefactorEnabled: issOpts.isISSDesktopRefactorEnabled,
        useServiceHighlighting: issOpts.useServiceHighlighting,
        isInternal: issOpts.isInternal,
        isAPICachingDisabled: issOpts.isAPICachingDisabled,
        disableAutocompleteOnFocus: issOpts.disableAutocompleteOnFocus
    };
    // If we aren't using the new ISS then we need to add these properties
    if (!isNewIss) {
        issInitObj.dd = issOpts.dropdown; // The element with id searchDropdownBox doesn't exist in C.
        issInitObj.imeSpacing = issOpts.imeSpacing;
        issInitObj.isNavInline = 1;
        issInitObj.triggerISSOnClick = 0;
        issInitObj.sc = 1;
        issInitObj.np = issOpts.np;
    }
    return issInitObj;
} // END buildIssInitObject
function logMetrics() {
    if (typeof uet == 'function' && typeof uex == 'function') {
        uet('be', 'iss-init-pc', {
            wb: 1
        });
        uex('ld', 'iss-init-pc', {
            wb: 1
        });
    }
} // END logMetrics
window.$Nav && $Nav.declare('config.navDeviceType', 'desktop');
window.$Nav && $Nav.declare('config.navDebugHighres', false);
window.$Nav && $Nav.declare('config.pageType', 'Detail');
window.$Nav && $Nav.declare('config.subPageType', '');
window.$Nav && $Nav.declare('config.dynamicMenuUrl', '/gp/navigation/ajax/dynamic-menu.html');
window.$Nav && $Nav.declare('config.dismissNotificationUrl', '/gp/navigation/ajax/dismissnotification.html');
window.$Nav && $Nav.declare('config.enableDynamicMenus', true);
window.$Nav && $Nav.declare('config.isInternal', false);
window.$Nav && $Nav.declare('config.isBackup', false);
window.$Nav && $Nav.declare('config.isRecognized', true);
window.$Nav && $Nav.declare('config.transientFlyoutTrigger', '#nav-transient-flyout-trigger');
window.$Nav && $Nav.declare('config.subnavFlyoutUrl', '/gp/navigation/ajax/subnav-flyout');
window.$Nav && $Nav.declare('config.recordEvUrl', '/gp/navigation/ajax/recordevent.html');
window.$Nav && $Nav.declare('config.recordEvInterval', 15000);
window.$Nav && $Nav.declare('config.sessionId', '261-8173218-5181763');
window.$Nav && $Nav.declare('config.requestId', 'E81T54FVZ2MDMD0N7JR7');
window.$Nav && $Nav.declare('config.alexaListEnabled', false);
window.$Nav && $Nav.declare('config.readyOnATF', false);
window.$Nav && $Nav.declare('config.dynamicMenuArgs', {
    "rid": "E81T54FVZ2MDMD0N7JR7",
    "isFullWidthPrime": 0,
    "isPrime": 1,
    "dynamicRequest": 1,
    "weblabs": "",
    "isFreshRegionAndCustomer": "",
    "primeMenuWidth": 450
});
window.$Nav && $Nav.declare('config.customerName', 'Alejandro');
window.$Nav && $Nav.declare('config.yourAccountPrimeURL', 'https://www.amazon.es/gp/css/order-history/utils/first-order-for-customer.html/ref=ya_prefetch_beacon?ie=UTF8&s=261-8173218-5181763');
window.$Nav && $Nav.declare('config.yourAccountPrimeHover', true);
window.$Nav && $Nav.declare('config.searchBackState', {});
window.$Nav && $Nav.declare('nav.inline');
(function(i) {
    i.onload = function() {
        window.uet && uet('ne')
    };
    i.src = window._navbarSpriteUrl;
}(new Image()));
window.$Nav && $Nav.declare('config.autoFocus', false);
window.$Nav && $Nav.declare('config.responsiveTouchAgents', ["ieTouch"]);
window.$Nav && $Nav.declare('config.responsiveGW', false);
window.$Nav && $Nav.declare('config.pageHideEnabled', false);
window.$Nav && $Nav.declare('config.sslTriggerType', '');
window.$Nav && $Nav.declare('config.sslTriggerRetry', 0);
window.$Nav && $Nav.declare('config.doubleCart', false);
window.$Nav && $Nav.declare('config.signInOverride', false);
window.$Nav && $Nav.declare('config.signInTooltip', false);
window.$Nav && $Nav.declare('config.isPrimeMember', true);
window.$Nav && $Nav.declare('config.packardGlowTooltip', false);
window.$Nav && $Nav.declare('config.packardGlowFlyout', false);
window.$Nav && $Nav.declare('config.rightMarginAlignEnabled', true);
window.$Nav && $Nav.declare('config.flyoutAnimation', false);
window.$Nav && $Nav.declare('config.campusActivation', '');
window.$Nav && $Nav.declare('config.primeTooltip', {
    "url": "/gp/prime/digital-adoption/navigation-bar"
});
window.$Nav && $Nav.declare('config.primeDay', false);
window.$Nav && $Nav.declare('config.disableBuyItAgain', false);
window.$Nav && $Nav.declare('config.pseudoPrimeFirstBrowse', false);
window.$Nav && $Nav.declare('config.sdaYourAccount', false);
window.$Nav && $Nav.declare('config.csYourAccount', false);
window.$Nav && $Nav.declare('config.cartFlyoutDisabled', true);
window.$Nav && $Nav.declare('config.isTabletBrowser', false);
window.$Nav && $Nav.declare('config.HmenuProximityArea', [200, 200, 200, 200]);
window.$Nav && $Nav.declare('config.HMenuIsProximity', true);
window.$Nav && $Nav.declare('config.desktopHMenuRefactor', false);
window.$Nav && $Nav.declare('config.navfresh', false);
window.$Nav && $Nav.declare('config.isFreshRegion', false);
if (window.ue && ue.tag) {
    ue.tag('navbar');
};
window.$Nav && $Nav.declare('config.blackbelt', true);
window.$Nav && $Nav.declare('config.beaconbelt', true);
window.$Nav && $Nav.declare('config.beaconbeltCover', false);
window.$Nav && $Nav.declare('config.accountList', true);
window.$Nav && $Nav.declare('config.iPadTablet', false);
window.$Nav && $Nav.declare('config.searchapiEndpoint', false);
window.$Nav && $Nav.declare('config.timeline', false);
window.$Nav && $Nav.declare('config.timelineAsinPriceEnabled', false);
window.$Nav && $Nav.declare('config.timelineDeleteEnabled', false);
window.$Nav && $Nav.declare('config.extendedFlyout', false);
window.$Nav && $Nav.declare('config.flyoutCloseDelay', 600);
window.$Nav && $Nav.declare('config.flyoutClickState', 'T2');
window.$Nav && $Nav.declare('config.pssFlag', 0);
window.$Nav && $Nav.declare('config.isShortAccountList', false);
if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
    window.P.now('packardGlowIngressJsEnabled').execute(function(glowEnabled) {
        if (!glowEnabled) {
            window.P.declare('packardGlowIngressJsEnabled', true);
        }
    });
    window.P.now('packardGlowStoreName').execute(function(storeName) {
        if (!storeName) {
            window.P.declare('packardGlowStoreName', 'amazon-smp');;
        }
    });
}
window.$Nav && $Nav.declare('configComplete');





















































window.ue_ibe = (window.ue_ibe || 0) + 1;
if (window.ue_ibe === 1) {
    (function(e, c) {
        function h(b, a) {
            f.push([b, a])
        }

        function g(b, a) {
            if (b) {
                var c = e.head || e.getElementsByTagName("head")[0] || e.documentElement,
                    d = e.createElement("script");
                d.async = "async";
                d.src = b;
                d.setAttribute("crossorigin", "anonymous");
                a && a.onerror && (d.onerror = a.onerror);
                a && a.onload && (d.onload = a.onload);
                c.insertBefore(d, c.firstChild)
            }
        }

        function k() {
            ue.uels = g;
            for (var b = 0; b < f.length; b++) {
                var a = f[b];
                g(a[0], a[1])
            }
            ue.deffered = 1
        }
        var f = [];
        c.ue && (ue.uels = h, c.ue.attach && c.ue.attach("load", k))
    })(document, window);
    if (window.ue && window.ue.uels) {
        var cel_widgets = [{
            "c": "celwidget"
        }, {
            "s": "#nav-swmslot > div",
            "id_gen": function(elem, index) {
                return 'nav_sitewide_msg';
            }
        }, {
            "c": "feature"
        }, {
            "id": "detail-ilm_div"
        }];
        ue.uels("https://images-eu.ssl-images-amazon.com/images/I/31BVuidgT8L.js");
    }
    var ue_mbl = ue_csm.ue.exec(function(e, a) {
        function l(f) {
            b = f || {};
            a.AMZNPerformance = b;
            b.transition = b.transition || {};
            b.timing = b.timing || {};
            e.ue.exec(m, "csm-android-check")() && b.tags instanceof Array && (f = -1 != b.tags.indexOf("usesAppStartTime") || b.transition.type ? !b.transition.type && -1 < b.tags.indexOf("usesAppStartTime") ? "warm-start" : void 0 : "view-transition", f && (b.transition.type = f));
            "reload" === c._nt && e.ue_orct || "intrapage-transition" === c._nt ? a.performance && performance.timing && performance.timing.navigationStart ?
                b.timing.transitionStart = a.performance.timing.navigationStart : delete b.timing.transitionStart : "undefined" === typeof c._nt && a.performance && performance.timing && performance.timing.navigationStart && a.history && "function" === typeof a.History && "object" === typeof a.history && history.length && 1 != history.length && (b.timing.transitionStart = a.performance.timing.navigationStart);
            f = b.transition;
            var d;
            d = c._nt ? c._nt : void 0;
            f.subType = d;
            a.ue && a.ue.tag && a.ue.tag("has-AMZNPerformance");
            c.isl && a.uex && uex("at", "csm-timing");
            n()
        }

        function p(b) {
            a.ue && a.ue.count && a.ue.count("csm-cordova-plugin-failed", 1)
        }

        function m() {
            return a.webclient && "function" === typeof a.webclient.getRealClickTime ? a.cordova && a.cordova.platformId && "ios" == a.cordova.platformId ? !1 : !0 : !1
        }

        function n() {
            try {
                P.register("AMZNPerformance", function() {
                    return b
                })
            } catch (a) {}
        }

        function h() {
            if (!b) return "";
            ue_mbl.cnt = null;
            for (var a = b.timing, d = b.transition, a = ["mts", k(a.transitionStart), "mps", k(a.processStart), "mtt", d.type, "mtst", d.subType, "mtlt", d.launchType], d = "", c = 0; c <
                a.length; c += 2) {
                var e = a[c],
                    g = a[c + 1];
                "undefined" !== typeof g && (d += "&" + e + "=" + g)
            }
            return d
        }

        function k(a) {
            if ("undefined" !== typeof a && "undefined" !== typeof g) return a - g
        }

        function q(a, c) {
            b && (g = c, b.timing.transitionStart = a, b.transition.type = "view-transition", b.transition.subType = "ajax-transition", b.transition.launchType = "normal", ue_mbl.cnt = h)
        }
        var c = e.ue || {},
            g = e.ue_t0,
            b;
        if (a.P && a.P.when && a.P.register) return a.P.when("CSMPlugin").execute(function(a) {
            a.buildAMZNPerformance && a.buildAMZNPerformance({
                successCallback: l,
                failCallback: p
            })
        }), {
            cnt: h,
            ajax: q
        }
    }, "mobile-timing")(ue_csm, window);
    (function(d) {
        d._uess = function() {
            var a = "";
            screen && screen.width && screen.height && (a += "&sw=" + screen.width + "&sh=" + screen.height);
            var b = function(a) {
                    var b = document.documentElement["client" + a];
                    return "CSS1Compat" === document.compatMode && b || document.body["client" + a] || b
                },
                c = b("Width"),
                b = b("Height");
            c && b && (a += "&vw=" + c + "&vh=" + b);
            return a
        }
    })(ue_csm);
    (function(a) {
        var b = document.ue_backdetect;
        b && b.ue_back && a.ue && (a.ue.bfini = b.ue_back.value);
        a.uet && a.uet("be");
        a.onLdEnd && (window.addEventListener ? window.addEventListener("load", a.onLdEnd, !1) : window.attachEvent && window.attachEvent("onload", a.onLdEnd));
        a.ueh && a.ueh(0, window, "load", a.onLd, 1);
        a.ue && a.ue.tag && (a.ue_furl ? (b = a.ue_furl.replace(/\./g, "-"), a.ue.tag(b)) : a.ue.tag("nofls"))
    })(ue_csm);
    (function(g, h) {
        function d(a, d) {
            var b = {};
            if (!e || !f) try {
                var c = h.sessionStorage;
                c ? a && ("undefined" !== typeof d ? c.setItem(a, d) : b.val = c.getItem(a)) : f = 1
            } catch (g) {
                e = 1
            }
            e && (b.e = 1);
            return b
        }
        var b = g.ue || {},
            a = "",
            f, e, c, a = d("csmtid");
        f ? a = "NA" : a.e ? a = "ET" : (a = a.val, a || (a = b.oid || "NI", d("csmtid", a)), c = d(b.oid), c.e || (c.val = c.val || 0, d(b.oid, c.val + 1)), b.ssw = d);
        b.tabid = a
    })(ue_csm, window);
    ue_csm.ue.exec(function(e, f) {
        var a = e.ue || {},
            b = a._wlo,
            d;
        if (a.ssw) {
            d = a.ssw("CSM_previousURL").val;
            var c = f.location,
                b = b ? b : c && c.href ? c.href.split("#")[0] : void 0;
            c = (b || "") === a.ssw("CSM_previousURL").val;
            !c && b && a.ssw("CSM_previousURL", b);
            d = c ? "reload" : d ? "intrapage-transition" : "first-view"
        } else d = "unknown";
        a._nt = d
    }, "NavTypeModule")(ue_csm, window);
    ue_csm.ue.exec(function(c, a) {
        function g(a) {
            a.run(function(e) {
                d.tag("csm-feature-" + a.name + ":" + e);
                d.isl && c.uex("at")
            })
        }
        if (a.addEventListener)
            for (var d = c.ue || {}, f = [{
                    name: "touch-enabled",
                    run: function(b) {
                        var e = function() {
                                a.removeEventListener("touchstart", c, !0);
                                a.removeEventListener("mousemove", d, !0)
                            },
                            c = function() {
                                b("true");
                                e()
                            },
                            d = function() {
                                b("false");
                                e()
                            };
                        a.addEventListener("touchstart", c, !0);
                        a.addEventListener("mousemove", d, !0)
                    }
                }], b = 0; b < f.length; b++) g(f[b])
    }, "csm-features")(ue_csm, window);
    (function(b, c) {
        var a = c.images;
        a && a.length && b.ue.count("totalImages", a.length)
    })(ue_csm, document);
    (function(b) {
        function c() {
            var d = [];
            a.log && a.log.isStub && a.log.replay(function(a) {
                e(d, a)
            });
            a.clog && a.clog.isStub && a.clog.replay(function(a) {
                e(d, a)
            });
            d.length && (a._flhs += 1, n(d), p(d))
        }

        function g() {
            a.log && a.log.isStub && (a.onflush && a.onflush.replay && a.onflush.replay(function(a) {
                a[0]()
            }), a.onunload && a.onunload.replay && a.onunload.replay(function(a) {
                a[0]()
            }), c())
        }

        function e(d, b) {
            var c = b[1],
                f = b[0],
                e = {};
            a._lpn[c] = (a._lpn[c] || 0) + 1;
            e[c] = f;
            d.push(e)
        }

        function n(b) {
            q && (a._lpn.csm = (a._lpn.csm || 0) + 1, b.push({
                csm: {
                    k: "chk",
                    f: a._flhs,
                    l: a._lpn,
                    s: "inln"
                }
            }))
        }

        function p(a) {
            if (h) a = k(a), b.navigator.sendBeacon(l, a);
            else {
                a = k(a);
                var c = new b[f];
                c.open("POST", l, !0);
                c.setRequestHeader && c.setRequestHeader("Content-type", "text/plain");
                c.send(a)
            }
        }

        function k(a) {
            return JSON.stringify({
                rid: b.ue_id,
                sid: b.ue_sid,
                mid: b.ue_mid,
                mkt: b.ue_mkt,
                sn: b.ue_sn,
                reqs: a
            })
        }
        var f = "XMLHttpRequest",
            q = 1 === b.ue_ddq,
            a = b.ue,
            r = b[f] && "withCredentials" in new b[f],
            h = b.navigator && b.navigator.sendBeacon,
            l = "//" + b.ue_furl + "/1/batch/1/OE/",
            m = b.ue_fci_ft || 5E3;
        a && (r || h) &&
            (a._flhs = a._flhs || 0, a._lpn = a._lpn || {}, a.attach && (a.attach("beforeunload", g), a.attach("pagehide", g)), m && b.setTimeout(c, m), a._ffci = c)
    })(window);
    (function(k, c) {
        function l(a, b) {
            return a.filter(function(a) {
                return a.initiatorType == b
            })
        }

        function f(a, c) {
            if (b.t[a]) {
                var g = b.t[a] - b._t0,
                    e = c.filter(function(a) {
                        return 0 !== a.responseEnd && m(a) < g
                    }),
                    f = l(e, "script"),
                    h = l(e, "link"),
                    k = l(e, "img"),
                    n = e.map(function(a) {
                        return a.name.split("/")[2]
                    }).filter(function(a, b, c) {
                        return a && c.lastIndexOf(a) == b
                    }),
                    q = e.filter(function(a) {
                        return a.duration < p
                    }),
                    s = g - Math.max.apply(null, e.map(m)) < r | 0;
                "af" == a && (b._afjs = f.length);
                return a + ":" + [e[d], f[d], h[d], k[d], n[d], q[d], s].join("-")
            }
        }

        function m(a) {
            return a.responseEnd - (b._t0 - c.timing.navigationStart)
        }

        function n() {
            var a = c[h]("resource"),
                d = f("cf", a),
                g = f("af", a),
                a = f("ld", a);
            delete b._rt;
            b._ld = b.t.ld - b._t0;
            b._art && b._art();
            return [d, g, a].join("_")
        }
        var p = 20,
            r = 50,
            d = "length",
            b = k.ue,
            h = "getEntriesByType";
        b._rre = m;
        b._rt = c && c.timing && c[h] && n
    })(ue_csm, window.performance);
    ue_csm.ue._rtn = 1;
    (function(e, f) {
        function h(a) {
            a = a.split("?")[0] || a;
            a = a.replace("http://", "").replace("https://", "").replace("resource://", "").replace("res://", "").replace("undefined://", "").replace("chrome://", "").replace(/\*/g, "").replace(/!/g, "").replace(/~/g, "");
            var b = a.split("/");
            a = a.substr(a.lastIndexOf("/") + 1);
            b.splice(-1);
            b = b.map(function(a) {
                c[a] || (c[a] = (k++).toString(36));
                return c[a]
            });
            b.push(a);
            return b.join("!")
        }

        function l() {
            return f.getEntriesByType("resource").filter(function(a) {
                return d._rre(a) < d._ld
            }).sort(function(a,
                b) {
                return a.responseEnd - b.responseEnd
            }).splice(0, m).map(function(a) {
                var b = [],
                    c;
                for (c in a) g[c] && a[c] && b.push(g[c] + Math.max(a[c] | 0, -1).toString(36));
                b.push("i" + a.initiatorType);
                (1 == d._rtn && d._afjs > n || 2 == d._rtn) && b.push("n" + h(a.name));
                return b.join("_")
            }).join("*")
        }

        function p() {
            var a = "pm",
                b;
            for (b in c) c.hasOwnProperty(b) && (a += "*" + c[b] + "_" + b);
            return a
        }

        function q() {
            d.log({
                k: "rtiming",
                value: l() + "~" + p()
            }, "csm")
        }
        if (f && f.getEntriesByType && Array.prototype.map && Array.prototype.filter && e.ue && e.ue.log) {
            var g = {
                    connectStart: "c",
                    connectEnd: "C",
                    domainLookupStart: "d",
                    domainLookupEnd: "D",
                    duration: "z",
                    encodedBodySize: "e",
                    decodedBodySize: "E",
                    fetchStart: "f",
                    redirectStart: "r",
                    redirectEnd: "R",
                    requestStart: "q",
                    responseStart: "s",
                    responseEnd: "S",
                    startTime: "a",
                    transferSize: "t"
                },
                d = e.ue,
                c = {},
                k = 1,
                n = 20,
                m = 200;
            d && d._rre && (d._art = function() {
                d._ld && window.setTimeout(q, 0)
            })
        }
    })(ue_csm || {}, window.performance);
    (function(c, d) {
        var b = c.ue,
            a = d.navigator;
        b && b.tag && a && (a = a.connection || a.mozConnection || a.webkitConnection) && a.type && b.tag("netInfo:" + a.type)
    })(ue_csm, window);
    (function(c, d) {
        function h(a, b) {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a[d],
                    f = b.encode(e);
                if (e[k]) {
                    var g = b.metaSep,
                        e = e[k],
                        l = b.metaPairSep,
                        h = [],
                        m = void 0;
                    for (m in e) e.hasOwnProperty(m) && h.push(m + "=" + e[m]);
                    e = h.join(l);
                    f += g + e
                }
                c.push(f)
            }
            return c.join(b.resourceSep)
        }

        function s(a) {
            var b = a[k] = a[k] || {};
            b[t] || (b[t] = c.ue_mid);
            b[u] || (b[u] = c.ue_sid);
            b[f] || (b[f] = c.ue_id);
            b.csm = 1;
            a = "//" + c.ue_furl + "/1/" + a[v] + "/1/OP/" + a[w] + "/" + a[x] + "/" + h([a], y);
            if (n) try {
                n.call(d[p], a)
            } catch (g) {
                c.ue.sbf = 1, (new Image).src = a
            } else(new Image).src =
                a
        }

        function q() {
            g && g.isStub && g.replay(function(a, b, c) {
                a = a[0];
                b = a[k] = a[k] || {};
                b[f] = b[f] || c;
                s(a)
            });
            l.impression = s;
            g = null
        }
        if (!(1 < c.ueinit)) {
            var k = "metadata",
                x = "impressionType",
                v = "foresterChannel",
                w = "programGroup",
                t = "marketplaceId",
                u = "session",
                f = "requestId",
                p = "navigator",
                l = c.ue || {},
                n = d[p] && d[p].sendBeacon,
                r = function(a, b, c, d) {
                    return {
                        encode: d,
                        resourceSep: a,
                        metaSep: b,
                        metaPairSep: c
                    }
                },
                y = r("", "?", "&", function(a) {
                    return h(a.impressionData, z)
                }),
                z = r("/", ":", ",", function(a) {
                    return a.featureName + ":" + h(a.resources,
                        A)
                }),
                A = r(",", "@", "|", function(a) {
                    return a.id
                }),
                g = l.impression;
            n ? q() : (l.attach("load", q), l.attach("beforeunload", q));
            try {
                d.P && d.P.register && d.P.register("impression-client", function() {})
            } catch (B) {
                c.ueLogError(B, {
                    logLevel: "WARN"
                })
            }
        }
    })(ue_csm, window);
    var ue_pty = "Detail";
    var ue_spty = "Kindle_HW";
    var ue_pti = "B07PVCVBN7";
    var ue_adb = 4;
    var ue_adb_rtla = 1;
    ue_csm.ue.exec(function(w, a) {
        function q() {
            if (d && f) {
                var a;
                a: {
                    try {
                        a = d.getItem(g);
                        break a
                    } catch (c) {}
                    a = void 0
                }
                if (a) return b = a, !0
            }
            return !1
        }

        function r() {
            b = h;
            k();
            if (f) try {
                d.setItem(g, b)
            } catch (a) {}
        }

        function s() {
            b = 1 === a.ue_adb_chk ? l : h;
            k();
            if (f) try {
                d.setItem(g, b)
            } catch (c) {}
        }

        function m() {
            a.ue_adb_rtla && c && 0 < c.ec && !1 === n && (c.elh = null, ueLogError({
                m: "Hit Info",
                fromOnError: 1
            }, {
                logLevel: "INFO",
                adb: b
            }), n = !0)
        }

        function k() {
            e.tag(b);
            e.isl && a.uex && uex("at", b);
            p && p.updateCsmHit("adb", b);
            c && 0 < c.ec ? m() : a.ue_adb_rtla && c &&
                (c.elh = m)
        }

        function t() {
            return b
        }
        if (a.ue_adb) {
            a.ue_fadb = a.ue_fadb || 10;
            var e = a.ue,
                h = "adblk_yes",
                l = "adblk_no",
                b = "adblk_unk",
                d;
            a: {
                try {
                    d = a.localStorage;
                    break a
                } catch (x) {}
                d = void 0
            }
            var g = "csm:adb",
                c = a.ue_err,
                p = e.cookie,
                f = void 0 !== a.localStorage,
                u = Math.random() > 1 - 1 / a.ue_fadb,
                n = !1,
                v = q();
            u || !v ? e.uels("https://m.media-amazon.com/images/G/01/csm/showads.v2.js", {
                onerror: r,
                onload: s
            }) : k();
            a.ue_isAdb = t;
            a.ue_isAdb.unk = "adblk_unk";
            a.ue_isAdb.no = l;
            a.ue_isAdb.yes = h
        }
    }, "adb")(document, window);
    (function(c, l, m) {
        function h(a) {
            if (a) try {
                if (a.id) return "//*[@id='" + a.id + "']";
                var b, d = 1,
                    e;
                for (e = a.previousSibling; e; e = e.previousSibling) e.nodeName === a.nodeName && (d += 1);
                b = d;
                var c = a.nodeName;
                1 !== b && (c += "[" + b + "]");
                a.parentNode && (c = h(a.parentNode) + "/" + c);
                return c
            } catch (f) {
                return "DETACHED"
            }
        }

        function f(a) {
            if (a && a.getAttribute) return a.getAttribute(k) ? a.getAttribute(k) : f(a.parentElement)
        }
        var k = "data-cel-widget",
            g = !1,
            d = [];
        (c.ue || {}).isBF = function() {
            try {
                var a = JSON.parse(localStorage["csm-bf"] || "[]"),
                    b = 0 <= a.indexOf(c.ue_id);
                a.unshift(c.ue_id);
                a = a.slice(0, 20);
                localStorage["csm-bf"] = JSON.stringify(a);
                return b
            } catch (d) {
                return !1
            }
        }();
        c.ue_utils = {
            getXPath: h,
            getFirstAscendingWidget: function(a, b) {
                c.ue_cel && c.ue_fem ? !0 === g ? b(f(a)) : d.push({
                    element: a,
                    callback: b
                }) : b()
            },
            notifyWidgetsLabeled: function() {
                if (!1 === g) {
                    g = !0;
                    for (var a = f, b = 0; b < d.length; b++)
                        if (d[b].hasOwnProperty("callback") && d[b].hasOwnProperty("element")) {
                            var c = d[b].callback,
                                e = d[b].element;
                            "function" === typeof c && "function" === typeof a && c(a(e))
                        }
                    d = null
                }
            },
            extractStringValue: function(a) {
                if ("string" ===
                    typeof a) return a
            }
        }
    })(ue_csm, window, document);
    (function(a, c) {
        a.ue_cel || (a.ue_cel = function() {
            function h(a, b) {
                b ? b.r = y : b = {
                    r: y,
                    c: 1
                };
                !ue_csm.ue_sclog && b.clog && e.clog ? e.clog(a, b.ns || n, b) : b.glog && e.glog ? e.glog(a, b.ns || n, b) : e.log(a, b.ns || n, b)
            }

            function l() {
                var a = b.length;
                if (0 < a) {
                    for (var f = [], c = 0; c < a; c++) {
                        var g = b[c].api;
                        g.ready() ? (g.on({
                            ts: e.d,
                            ns: n
                        }), d.push(b[c]), h({
                            k: "mso",
                            n: b[c].name,
                            t: e.d()
                        })) : f.push(b[c])
                    }
                    b = f
                }
            }

            function f() {
                if (!f.executed) {
                    for (var a = 0; a < d.length; a++) d[a].api.off && d[a].api.off({
                        ts: e.d,
                        ns: n
                    });
                    q();
                    h({
                        k: "eod",
                        t0: e.t0,
                        t: e.d()
                    }, {
                        c: 1,
                        il: 1
                    });
                    f.executed = 1;
                    for (a = 0; a < d.length; a++) b.push(d[a]);
                    d = [];
                    clearTimeout(t);
                    clearTimeout(v)
                }
            }

            function q(a) {
                h({
                    k: "hrt",
                    t: e.d()
                }, {
                    c: 1,
                    il: 1,
                    n: a
                });
                g = Math.min(k, r * g);
                z()
            }

            function z() {
                clearTimeout(v);
                v = setTimeout(function() {
                    q(!0)
                }, g)
            }

            function u() {
                f.executed || q()
            }
            var r = 1.5,
                k = c.ue_cel_max_hrt || 3E4,
                b = [],
                d = [],
                n = a.ue_cel_ns || "cel",
                t, v, e = a.ue,
                m = a.uet,
                w = a.uex,
                y = e.rid,
                g = c.ue_cel_hrt_int || 3E3,
                s = c.requestAnimationFrame || function(a) {
                    a()
                };
            if (e.isBF) h({
                k: "bft",
                t: e.d()
            });
            else {
                "function" == typeof m && m("bb", "csmCELLSframework", {
                    wb: 1
                });
                setTimeout(l, 0);
                e.onunload(f);
                if (e.onflush) e.onflush(u);
                t = setTimeout(f, 6E5);
                z();
                "function" == typeof w && w("ld", "csmCELLSframework", {
                    wb: 1
                });
                return {
                    registerModule: function(a, c) {
                        b.push({
                            name: a,
                            api: c
                        });
                        h({
                            k: "mrg",
                            n: a,
                            t: e.d()
                        });
                        l()
                    },
                    reset: function(a) {
                        h({
                            k: "rst",
                            t0: e.t0,
                            t: e.d()
                        });
                        b = b.concat(d);
                        d = [];
                        for (var c = b.length, g = 0; g < c; g++) b[g].api.off(), b[g].api.reset();
                        y = a || e.rid;
                        l();
                        clearTimeout(t);
                        t = setTimeout(f, 6E5);
                        f.executed = 0
                    },
                    timeout: function(a, b) {
                        return c.setTimeout(function() {
                            s(function() {
                                f.executed ||
                                    a()
                            })
                        }, b)
                    },
                    log: h,
                    off: f
                }
            }
        }())
    })(ue_csm, window);
    (function(a, c, h) {
        a.ue_pdm || !a.ue_cel || ue.isBF || (a.ue_pdm = function() {
            function l() {
                try {
                    var b = window.screen;
                    if (b) {
                        var c = {
                            w: b.width,
                            aw: b.availWidth,
                            h: b.height,
                            ah: b.availHeight,
                            cd: b.colorDepth,
                            pd: b.pixelDepth
                        };
                        e && e.w === c.w && e.h === c.h && e.aw === c.aw && e.ah === c.ah && e.pd === c.pd && e.cd === c.cd || (e = c, e.t = t(), e.k = "sci", s(e))
                    }
                    var g = h.body || {},
                        f = h.documentElement || {},
                        d = {
                            w: Math.max(g.scrollWidth || 0, g.offsetWidth || 0, f.clientWidth || 0, f.scrollWidth || 0, f.offsetWidth || 0),
                            h: Math.max(g.scrollHeight || 0, g.offsetHeight || 0, f.clientHeight ||
                                0, f.scrollHeight || 0, f.offsetHeight || 0)
                        };
                    m && m.w === d.w && m.h === d.h || (m = d, m.t = t(), m.k = "doi", s(m));
                    n = a.ue_cel.timeout(l, v);
                    y += 1
                } catch (r) {
                    window.ueLogError && ueLogError(r, {
                        attribution: "csm-cel-page-module",
                        logLevel: "WARN"
                    })
                }
            }

            function f() {
                k("ebl", "default", !1)
            }

            function q() {
                k("efo", "default", !0)
            }

            function z() {
                k("ebl", "app", !1)
            }

            function u() {
                k("efo", "app", !0)
            }

            function r() {
                c.setTimeout(function() {
                    h[D] ? k("ebl", "pageviz", !1) : k("efo", "pageviz", !0)
                }, 0)
            }

            function k(a, b, c) {
                w !== c && s({
                    k: a,
                    t: t(),
                    s: b
                }, {
                    ff: !0 === c ? 0 : 1
                });
                w =
                    c
            }

            function b() {
                g.attach && (x && g.attach(p, r, h), A && P.when("mash").execute(function(a) {
                    a && a.addEventListener && (a.addEventListener("appPause", z), a.addEventListener("appResume", u))
                }), g.attach("blur", f, c), g.attach("focus", q, c))
            }

            function d() {
                g.detach && (x && g.detach(p, r, h), A && P.when("mash").execute(function(a) {
                    a && a.removeEventListener && (a.removeEventListener("appPause", z), a.removeEventListener("appResume", u))
                }), g.detach("blur", f, c), g.detach("focus", q, c))
            }
            var n, t, v, e, m, w = null,
                y = 0,
                g = a.ue,
                s = a.ue_cel.log,
                B = a.uet,
                E = a.uex,
                x = !!g.pageViz,
                p = x && g.pageViz.event,
                D = x && g.pageViz.propHid,
                A = c.P && c.P.when;
            "function" == typeof B && B("bb", "csmCELLSpdm", {
                wb: 1
            });
            return {
                on: function(a) {
                    v = a.timespan || 500;
                    t = a.ts;
                    b();
                    a = c.location;
                    s({
                        k: "pmd",
                        o: a.origin,
                        p: a.pathname,
                        t: t()
                    });
                    l();
                    "function" == typeof E && E("ld", "csmCELLSpdm", {
                        wb: 1
                    })
                },
                off: function(a) {
                    clearTimeout(n);
                    d();
                    g.count && g.count("cel.PDM.TotalExecutions", y)
                },
                ready: function() {
                    return h.body && a.ue_cel && a.ue_cel.log
                },
                reset: function() {
                    e = m = null
                }
            }
        }(), a.ue_cel && a.ue_cel.registerModule("page module",
            a.ue_pdm))
    })(ue_csm, window, document);
    (function(a, c) {
        a.ue_vpm || !a.ue_cel || ue.isBF || (a.ue_vpm = function() {
            function h() {
                var a = u(),
                    b = {
                        w: c.innerWidth,
                        h: c.innerHeight,
                        x: c.pageXOffset,
                        y: c.pageYOffset
                    };
                f && f.w == b.w && f.h == b.h && f.x == b.x && f.y == b.y || (b.t = a, b.k = "vpi", f = b, d(f, {
                    clog: 1
                }));
                q = 0;
                r = u() - a;
                k += 1
            }

            function l() {
                q || (q = a.ue_cel.timeout(h, z))
            }
            var f, q, z, u, r = 0,
                k = 0,
                b = a.ue,
                d = a.ue_cel.log,
                n = a.uet,
                t = a.uex,
                v = b.attach,
                e = b.detach;
            "function" == typeof n && n("bb", "csmCELLSvpm", {
                wb: 1
            });
            return {
                on: function(a) {
                    u = a.ts;
                    z = a.timespan || 100;
                    h();
                    v && (v("scroll", l), v("resize",
                        l));
                    "function" == typeof t && t("ld", "csmCELLSvpm", {
                        wb: 1
                    })
                },
                off: function(a) {
                    clearTimeout(q);
                    e && (e("scroll", l), e("resize", l));
                    b.count && (b.count("cel.VPI.TotalExecutions", k), b.count("cel.VPI.TotalExecutionTime", r), b.count("cel.VPI.AverageExecutionTime", r / k))
                },
                ready: function() {
                    return a.ue_cel && a.ue_cel.log
                },
                reset: function() {
                    f = void 0
                },
                getVpi: function() {
                    return f
                }
            }
        }(), a.ue_cel && a.ue_cel.registerModule("viewport module", a.ue_vpm))
    })(ue_csm, window);
    (function(a, c, h) {
        if (!a.ue_fem && a.ue_cel && a.ue_utils) {
            var l = a.ue || {};
            !l.isBF && !a.ue_fem && h.querySelector && c.getComputedStyle && [].forEach && (a.ue_fem = function() {
                function f(a, b) {
                    return a > b ? 3 > a - b : 3 > b - a
                }

                function q(a, b) {
                    var e = c.pageXOffset,
                        g = c.pageYOffset,
                        d;
                    a: {
                        try {
                            if (a) {
                                var h = a.getBoundingClientRect(),
                                    r, l = 0 === a.offsetWidth && 0 === a.offsetHeight;
                                c: {
                                    for (var k = a.parentNode, n = h.left || 0, p = h.top || 0, s = h.width || 0, t = h.height || 0; k && k !== document.body;) {
                                        var m;
                                        d: {
                                            try {
                                                var q = void 0;
                                                if (k) var C = k.getBoundingClientRect(),
                                                    q = {
                                                        x: C.left || 0,
                                                        y: C.top || 0,
                                                        w: C.width || 0,
                                                        h: C.height || 0
                                                    };
                                                else q = void 0;
                                                m = q;
                                                break d
                                            } catch (v) {}
                                            m = void 0
                                        }
                                        var u = window.getComputedStyle(k),
                                            w = "hidden" === u.overflow,
                                            N = w || "hidden" === u.overflowX,
                                            J = w || "hidden" === u.overflowY,
                                            z = p + t - 1 < m.y + 1 || p + 1 > m.y + m.h - 1;
                                        if ((n + s - 1 < m.x + 1 || n + 1 > m.x + m.w - 1) && N || z && J) {
                                            r = !0;
                                            break c
                                        }
                                        k = k.parentNode
                                    }
                                    r = !1
                                }
                                d = {
                                    x: h.left + e || 0,
                                    y: h.top + g || 0,
                                    w: h.width || 0,
                                    h: h.height || 0,
                                    d: (l || r) | 0
                                }
                            } else d = void 0;
                            break a
                        } catch (A) {}
                        d = void 0
                    }
                    if (d && !a.cel_b) a.cel_b = d, x({
                        n: a.getAttribute(y),
                        w: a.cel_b.w,
                        h: a.cel_b.h,
                        d: a.cel_b.d,
                        x: a.cel_b.x,
                        y: a.cel_b.y,
                        t: b,
                        k: "ewi",
                        cl: a.className
                    }, {
                        clog: 1
                    });
                    else {
                        if (e = d) e = a.cel_b, g = d, e = g.d === e.d && 1 === g.d ? !1 : !(f(e.x, g.x) && f(e.y, g.y) && f(e.w, g.w) && f(e.h, g.h) && e.d === g.d);
                        e && (a.cel_b = d, x({
                            n: a.getAttribute(y),
                            w: a.cel_b.w,
                            h: a.cel_b.h,
                            d: a.cel_b.d,
                            x: a.cel_b.x,
                            y: a.cel_b.y,
                            t: b,
                            k: "ewi"
                        }, {
                            clog: 1
                        }))
                    }
                }

                function z(b, e) {
                    var c;
                    c = b.c ? h.getElementsByClassName(b.c) : b.id ? [h.getElementById(b.id)] : h.querySelectorAll(b.s);
                    b.w = [];
                    for (var d = 0; d < c.length; d++) {
                        var f = c[d];
                        if (f) {
                            if (!f.getAttribute(y)) {
                                var r = f.getAttribute("cel_widget_id") ||
                                    (b.id_gen || E)(f, d) || f.id;
                                f.setAttribute(y, r)
                            }
                            b.w.push(f);
                            k(Q, f, e)
                        }
                    }!1 === B && (s++, s === g.length && (B = !0, a.ue_utils.notifyWidgetsLabeled()))
                }

                function u(a, b) {
                    p.contains(a) || x({
                        n: a.getAttribute(y),
                        t: b,
                        k: "ewd"
                    }, {
                        clog: 1
                    })
                }

                function r(a) {
                    I.length && ue_cel.timeout(function() {
                        if (m) {
                            for (var b = R(), c = !1; R() - b < e && !c;) {
                                for (c = S; 0 < c-- && 0 < I.length;) {
                                    var g = I.shift();
                                    T[g.type](g.elem, g.time)
                                }
                                c = 0 === I.length
                            }
                            U++;
                            r(a)
                        }
                    }, 0)
                }

                function k(a, b, c) {
                    I.push({
                        type: a,
                        elem: b,
                        time: c
                    })
                }

                function b(a, b) {
                    for (var c = 0; c < g.length; c++)
                        for (var e =
                                g[c].w || [], d = 0; d < e.length; d++) k(a, e[d], b)
                }

                function d() {
                    K || (K = a.ue_cel.timeout(function() {
                        K = null;
                        var c = w();
                        b(W, c);
                        for (var e = 0; e < g.length; e++) k(X, g[e], c);
                        0 === g.length && !1 === B && (B = !0, a.ue_utils.notifyWidgetsLabeled());
                        r(c)
                    }, v))
                }

                function n() {
                    K || O || (O = a.ue_cel.timeout(function() {
                        O = null;
                        var a = w();
                        b(Q, a);
                        r(a)
                    }, v))
                }

                function t() {
                    return A && F && p && p.contains && p.getBoundingClientRect && w
                }
                var v = 50,
                    e = 4.5,
                    m = !1,
                    w, y = "data-cel-widget",
                    g = [],
                    s = 0,
                    B = !1,
                    E = function() {},
                    x = a.ue_cel.log,
                    p, D, A, F, G = c.MutationObserver || c.WebKitMutationObserver ||
                    c.MozMutationObserver,
                    N = !!G,
                    H, C, J = "DOMAttrModified",
                    L = "DOMNodeInserted",
                    M = "DOMNodeRemoved",
                    O, K, I = [],
                    U = 0,
                    S = null,
                    W = "removedWidget",
                    X = "updateWidgets",
                    Q = "processWidget",
                    T, V = c.performance || {},
                    R = V.now && function() {
                        return V.now()
                    } || function() {
                        return Date.now()
                    };
                "function" == typeof uet && uet("bb", "csmCELLSfem", {
                    wb: 1
                });
                return {
                    on: function(b) {
                        function c() {
                            if (t()) {
                                T = {
                                    removedWidget: u,
                                    updateWidgets: z,
                                    processWidget: q
                                };
                                if (N) {
                                    var a = {
                                        attributes: !0,
                                        subtree: !0
                                    };
                                    H = new G(n);
                                    C = new G(d);
                                    H.observe(p, a);
                                    C.observe(p, {
                                        childList: !0,
                                        subtree: !0
                                    });
                                    C.observe(D, a)
                                } else A.call(p, J, n), A.call(p, L, d), A.call(p, M, d), A.call(D, L, n), A.call(D, M, n);
                                d()
                            }
                        }
                        p = h.body;
                        D = h.head;
                        A = p.addEventListener;
                        F = p.removeEventListener;
                        w = b.ts;
                        g = a.cel_widgets || [];
                        S = b.bs || 5;
                        l.deffered ? c() : l.attach && l.attach("load", c);
                        "function" == typeof uex && uex("ld", "csmCELLSfem", {
                            wb: 1
                        });
                        m = !0
                    },
                    off: function() {
                        t() && (C && (C.disconnect(), C = null), H && (H.disconnect(), H = null), F.call(p, J, n), F.call(p, L, d), F.call(p, M, d), F.call(D, L, n), F.call(D, M, n));
                        l.count && l.count("cel.widgets.batchesProcessed",
                            U);
                        m = !1
                    },
                    ready: function() {
                        return a.ue_cel && a.ue_cel.log
                    },
                    reset: function() {
                        g = a.cel_widgets || []
                    }
                }
            }(), a.ue_cel && a.ue_fem && a.ue_cel.registerModule("features module", a.ue_fem))
        }
    })(ue_csm, window, document);
    (function(a, c, h) {
        !a.ue_mcm && a.ue_cel && a.ue_utils && !a.ue.isBF && (a.ue_mcm = function() {
            function l(a, k) {
                var b = a.srcElement || a.target || {},
                    d = {
                        k: f,
                        w: (k || {}).ow || (c.body || {}).scrollWidth,
                        h: (k || {}).oh || (c.body || {}).scrollHeight,
                        t: (k || {}).ots || q(),
                        x: a.pageX,
                        y: a.pageY,
                        p: u.getXPath(b),
                        n: b.nodeName
                    };
                h && "function" === typeof h.now && a.timeStamp && (d.dt = (k || {}).odt || h.now() - a.timeStamp, d.dt = parseFloat(d.dt.toFixed(2)));
                a.button && (d.b = a.button);
                b.href && (d.r = u.extractStringValue(b.href));
                b.id && (d.i = b.id);
                b.className &&
                    b.className.split && (d.c = b.className.split(/\s+/));
                z(d, {
                    c: 1
                })
            }
            var f = "mcm",
                q, z = a.ue_cel.log,
                u = a.ue_utils;
            return {
                on: function(c) {
                    q = c.ts;
                    a.ue_cel_stub && a.ue_cel_stub.replayModule(f, l);
                    window.addEventListener && window.addEventListener("mousedown", l, !0)
                },
                off: function(a) {
                    window.addEventListener && window.removeEventListener("mousedown", l, !0)
                },
                ready: function() {
                    return a.ue_cel && a.ue_cel.log
                },
                reset: function() {}
            }
        }(), a.ue_cel && a.ue_cel.registerModule("mouse click module", a.ue_mcm))
    })(ue_csm, document, window.performance);
    (function(a, c) {
        a.ue_mmm || !a.ue_cel || a.ue.isBF || (a.ue_mmm = function(h) {
            function l(a, b) {
                var c = {
                    x: a.pageX || a.x || 0,
                    y: a.pageY || a.y || 0,
                    t: k()
                };
                !b && x && (c.t - x.t < z || c.x == x.x && c.y == x.y) || (x = c, s.push(c))
            }

            function f() {
                if (s.length) {
                    y = G.now();
                    for (var a = 0; a < s.length; a++) {
                        var b = s[a],
                            c = a;
                        p = s[E];
                        D = b;
                        var d = void 0;
                        if (!(d = 2 > c)) {
                            d = void 0;
                            a: if (s[c].t - s[c - 1].t > q) d = 0;
                                else {
                                    for (d = E + 1; d < c; d++) {
                                        var f = p,
                                            h = D,
                                            k = s[d];
                                        A = (h.x - f.x) * (f.y - k.y) - (f.x - k.x) * (h.y - f.y);
                                        if (A * A / ((h.x - f.x) * (h.x - f.x) + (h.y - f.y) * (h.y - f.y)) > u) {
                                            d = 0;
                                            break a
                                        }
                                    }
                                    d = 1
                                }
                            d = !d
                        }(F =
                            d) ? E = c - 1: B.pop();
                        B.push(b)
                    }
                    g = G.now() - y;
                    v = Math.min(v, g);
                    e = Math.max(e, g);
                    m = (m * w + g) / (w + 1);
                    w += 1;
                    n({
                        k: r,
                        e: B,
                        min: Math.floor(1E3 * v),
                        max: Math.floor(1E3 * e),
                        avg: Math.floor(1E3 * m)
                    }, {
                        c: 1
                    });
                    s = [];
                    B = [];
                    E = 0
                }
            }
            var q = 100,
                z = 20,
                u = 25,
                r = "mmm1",
                k, b, d = a.ue,
                n = a.ue_cel.log,
                t, v = 1E3,
                e = 0,
                m = 0,
                w = 0,
                y, g, s = [],
                B = [],
                E = 0,
                x, p, D, A, F, G = h && h.now && h || Date.now && Date || {
                    now: function() {
                        return (new Date).getTime()
                    }
                };
            return {
                on: function(a) {
                    k = a.ts;
                    b = a.ns;
                    d.attach && d.attach("mousemove", l, c);
                    t = setInterval(f, 3E3)
                },
                off: function(a) {
                    b && (x && l(x, !0), f());
                    clearInterval(t);
                    d.detach && d.detach("mousemove", l, c)
                },
                ready: function() {
                    return a.ue_cel && a.ue_cel.log
                },
                reset: function() {
                    s = [];
                    B = [];
                    E = 0;
                    x = null
                }
            }
        }(window.performance), a.ue_cel && a.ue_cel.registerModule("mouse move module", a.ue_mmm))
    })(ue_csm, document);
    ue_csm.ue.exec(function(b, c) {
        var e = function() {},
            f = function() {
                return {
                    send: function(b, d) {
                        if (d && b) {
                            var a;
                            if (c.XDomainRequest) a = new XDomainRequest, a.onerror = e, a.ontimeout = e, a.onprogress = e, a.onload = e, a.timeout = 0;
                            else if (c.XMLHttpRequest) {
                                if (a = new XMLHttpRequest, !("withCredentials" in a)) throw "";
                            } else a = void 0;
                            if (!a) throw "";
                            a.open("POST", b, !0);
                            a.setRequestHeader && a.setRequestHeader("Content-type", "text/plain");
                            a.send(d)
                        }
                    },
                    isSupported: !0
                }
            }(),
            g = function() {
                return {
                    send: function(c, d) {
                        if (c && d)
                            if (navigator.sendBeacon(c,
                                    d)) b.ue_sbuimp && b.ue && b.ue.ssw && b.ue.ssw("eelsts", "scs");
                            else throw "";
                    },
                    isSupported: !!navigator.sendBeacon && !(c.cordova && c.cordova.platformId && "ios" == c.cordova.platformId)
                }
            }();
        b.ue._ajx = f;
        b.ue._sBcn = g
    }, "Transportation-clients")(ue_csm, window);
    ue_csm.ue.exec(function(c, f) {
        function C() {
            for (var a = 0; a < arguments.length; a++) {
                var b = arguments[a];
                try {
                    var c;
                    if (b.isSupported) {
                        var g = t.buildPayload(k, e);
                        c = b.send(N, g)
                    } else throw dummyException;
                    return c
                } catch (m) {}
            }
            D({
                m: "All supported clients failed",
                attribution: "CSMSushiClient_TRANSPORTATION_FAIL",
                f: "sushi-client.js",
                logLevel: "ERROR"
            }, f.ue_err_chan || "jserr")
        }

        function n() {
            if (e.length) {
                for (var a = 0; a < p.length; a++) p[a]();
                C(d._sBcn || {}, d._ajx || {});
                e = [];
                h = {};
                k = {};
                u = v = q = w = 0
            }
        }

        function O() {
            var a = new Date,
                b = function(a) {
                    return 10 >
                        a ? "0" + a : a
                };
            return Date.prototype.toISOString ? a.toISOString() : a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds()) + "." + String((a.getUTCMilliseconds() / 1E3).toFixed(3)).slice(2, 5) + "Z"
        }

        function x(a) {
            try {
                return JSON.stringify(a)
            } catch (b) {}
            return null
        }

        function E(a, b, l, g) {
            var m = !1;
            g = g || {};
            r++;
            r == F && D({
                    m: "Max number of Sushi Logs exceeded",
                    f: "sushi-client.js",
                    logLevel: "ERROR",
                    attribution: "CSMSushiClient_MAX_CALLS"
                }, f.ue_err_chan ||
                "jserr");
            var y;
            if (y = !(r >= F))(y = a && -1 < a.constructor.toString().indexOf("Object") && b && -1 < b.constructor.toString().indexOf("String") && l && -1 < l.constructor.toString().indexOf("String")) || P++;
            y && (d.count && d.count("Event:" + l, 1), a.producerId = a.producerId || b, a.schemaId = a.schemaId || l, a.timestamp = O(), b = Date.now ? Date.now() : +new Date, l = Math.random().toString().substring(2, 12), a.messageId = c.ue_id + "-" + b + "-" + l, g && !g.ssd && (a.sessionId = a.sessionId || c.ue_sid, a.requestId = a.requestId || c.ue_id, a.obfuscatedMarketplaceId =
                a.obfuscatedMarketplaceId || c.ue_mid), (b = x(a)) ? (b = b.length, (e.length == Q || q + b > R) && n(), q += b, a = {
                data: t.compressEvent(a)
            }, e.push(a), (g || {}).n ? 0 === G ? n() : u || (u = f.setTimeout(n, G)) : v || (v = f.setTimeout(n, S)), m = !0) : m = !1);
            !m && c.ue_int && console.error("Invalid JS Nexus API call");
            return m
        }

        function H() {
            if (!I) {
                for (var a = 0; a < z.length; a++) z[a]();
                for (a = 0; a < p.length; a++) p[a]();
                e.length && (c.ue_sbuimp && c.ue && c.ue.ssw && (a = x({
                    dct: k,
                    evt: e
                }), c.ue.ssw("eeldata", a), c.ue.ssw("eelsts", "unk")), C(d._sBcn || {}));
                I = !0
            }
        }

        function J(a) {
            z.push(a)
        }

        function K(a) {
            p.push(a)
        }
        var F = 1E3,
            Q = 499,
            R = 524288,
            s = function() {},
            d = c.ue || {},
            D = d.log || s,
            T = c.uex || s;
        (c.uet || s)("bb", "ue_sushi_v1", {
            wb: 1
        });
        var N = c.ue_surl || "https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
            U = ["messageId", "timestamp"],
            A = "#",
            e = [],
            h = {},
            k = {},
            q = 0,
            w = 0,
            P = 0,
            r = 0,
            B = 0,
            L = 1,
            M = 2,
            z = [],
            p = [],
            I = !1,
            u, v, G = void 0 === c.ue_hpsi ? 1E3 : c.ue_hpsi,
            S = void 0 === c.ue_lpsi ? 1E4 : c.ue_lpsi,
            t = function() {
                function a(a) {
                    h[a] = A + w++;
                    k[h[a]] = a;
                    return h[a]
                }

                function b(a) {
                    return a.length > (A + w).length || a.charAt(0) ===
                        A
                }

                function c(a) {
                    if (a) switch (typeof a) {
                        case "number":
                            return !(isNaN(a) || Infinity === a) && b(a.toString());
                        case "boolean":
                            break;
                        case "string":
                            return b(a);
                        default:
                            return !0
                    }
                    return !1
                }

                function g(b) {
                    if (c(b)) {
                        var d = B;
                        b instanceof Array ? d = M : b instanceof Function ? d = B : b instanceof Object && (d = L);
                        switch (d) {
                            case B:
                                b = h[b] ? h[b] : a(b);
                                break;
                            case M:
                                var e = b;
                                b = [];
                                for (var d = e.length, f = 0; f < d; f++) b[f] = g(e[f]);
                                break;
                            case L:
                                d = {};
                                for (e in b) b.hasOwnProperty(e) && (d[h[e] ? h[e] : a(e)] = -1 == U.indexOf(e) ? g(b[e]) : b[e]);
                                b = d
                        }
                    }
                    return b
                }
                return {
                    compressEvent: g,
                    buildPayload: function() {
                        return x({
                            cs: {
                                dct: k
                            },
                            events: e
                        })
                    }
                }
            }();
        (function() {
            if (d.event && d.event.isStub) {
                if (c.ue_sbuimp && c.ue && c.ue.ssw) {
                    var a = c.ue.ssw("eelsts").val;
                    if (a && "unk" === a && (a = c.ue.ssw("eeldata").val)) {
                        var b;
                        a: {
                            try {
                                b = JSON.parse(a);
                                break a
                            } catch (f) {}
                            b = null
                        }
                        b && b.evt instanceof Array && b.dct instanceof Object && (e = b.evt, k = b.dct, e && k && (n(), c.ue.ssw("eeldata", "{}"), c.ue.ssw("eelsts", "scs")))
                    }
                }
                d.event.replay(function(a) {
                    a[3] = a[3] || {};
                    a[3].n = 1;
                    E.apply(this, a)
                });
                d.onSushiUnload.replay(function(a) {
                    J(a[0])
                });
                d.onSushiFlush.replay(function(a) {
                    K(a[0])
                })
            }
        })();
        d.attach("beforeunload", H);
        d.attach("pagehide", H);
        d._cmps = t;
        d.event = E;
        d.event.reset = function() {
            r = 0
        };
        d.onSushiUnload = J;
        d.onSushiFlush = K;
        try {
            f.P && f.P.register && f.P.register("sushi-client", s)
        } catch (V) {
            c.ueLogError(V, {
                logLevel: "WARN"
            })
        }
        T("ld", "ue_sushi_v1", {
            wb: 1
        })
    }, "Nxs-JS-Client")(ue_csm, window);
    ue_csm.ue_unrt = 1500;
    (function(d, b, t) {
        function u(a, b) {
            var c = a.srcElement || a.target || {},
                e = {
                    k: w,
                    t: b.t,
                    dt: b.dt,
                    x: a.pageX,
                    y: a.pageY,
                    p: f.getXPath(c),
                    n: c.nodeName
                };
            a.button && (e.b = a.button);
            c.type && (e.ty = c.type);
            c.href && (e.r = f.extractStringValue(c.href));
            c.id && (e.i = c.id);
            c.className && c.className.split && (e.c = c.className.split(/\s+/));
            g += 1;
            f.getFirstAscendingWidget(c, function(a) {
                e.wd = a;
                d.ue.log(e, r)
            })
        }

        function x(a) {
            if (!y(a.srcElement || a.target)) {
                k += 1;
                n = !0;
                var v = h = d.ue.d(),
                    c;
                p && "function" === typeof p.now && a.timeStamp && (c = p.now() -
                    a.timeStamp, c = parseFloat(c.toFixed(2)));
                s = b.setTimeout(function() {
                    u(a, {
                        t: v,
                        dt: c
                    })
                }, z)
            }
        }

        function A(a) {
            if (a) {
                var b = a.filter(B);
                a.length !== b.length && (q = !0, l = d.ue.d(), n && q && (l && h && d.ue.log({
                    k: C,
                    t: h,
                    m: Math.abs(l - h)
                }, r), m(), q = !1, l = 0))
            }
        }

        function B(a) {
            if (!a) return !1;
            var b = "characterData" === a.type ? a.target.parentElement : a.target;
            if (!b || !b.hasAttributes || !b.attributes) return !1;
            var c = {
                    "class": "gw-clock gw-clock-aria s-item-container-height-auto feed-carousel using-mouse kfs-inner-container".split(" "),
                    id: ["dealClock",
                        "deal_expiry_timer", "timer"
                    ],
                    role: ["timer"]
                },
                e = !1;
            Object.keys(c).forEach(function(a) {
                var d = b.attributes[a] ? b.attributes[a].value : "";
                (c[a] || "").forEach(function(a) {
                    -1 !== d.indexOf(a) && (e = !0)
                })
            });
            return e
        }

        function y(a) {
            if (!a) return !1;
            var b = (f.extractStringValue(a.nodeName) || "").toLowerCase(),
                c = (f.extractStringValue(a.type) || "").toLowerCase(),
                d = (f.extractStringValue(a.href) || "").toLowerCase();
            a = (f.extractStringValue(a.id) || "").toLowerCase();
            var g = "checkbox color date datetime-local email file month number password radio range reset search tel text time url week".split(" ");
            if (-1 !== ["select", "textarea", "html"].indexOf(b) || "input" === b && -1 !== g.indexOf(c) || "a" === b && -1 !== d.indexOf("http") || -1 !== ["sitbreaderrightpageturner", "sitbreaderleftpageturner", "sitbreaderpagecontainer"].indexOf(a)) return !0
        }

        function m() {
            n = !1;
            h = 0;
            b.clearTimeout(s)
        }

        function D() {
            b.ue.onSushiUnload(function() {
                ue.event({
                    violationType: "unresponsive-clicks",
                    violationCount: g,
                    totalScanned: k
                }, "csm", "csm.ArmoredCXGuardrailsViolation.3")
            });
            b.ue.onunload(function() {
                ue.count("armored-cxguardrails.unresponsive-clicks.violations",
                    g);
                ue.count("armored-cxguardrails.unresponsive-clicks.violationRate", g / k * 100 || 0)
            })
        }
        if (b.MutationObserver && b.addEventListener && Object.keys && d && d.ue && d.ue.log && d.ue_unrt && d.ue_utils) {
            var z = d.ue_unrt,
                r = "cel",
                w = "unr_mcm",
                C = "res_mcm",
                p = b.performance,
                f = d.ue_utils,
                n = !1,
                h = 0,
                s = 0,
                q = !1,
                l = 0,
                g = 0,
                k = 0;
            b.addEventListener && (b.addEventListener("mousedown", x, !0), b.addEventListener("beforeunload", m, !0), b.addEventListener("visibilitychange", m, !0), b.addEventListener("pagehide", m, !0));
            b.ue && b.ue.event && b.ue.onSushiUnload &&
                b.ue.onunload && D();
            (new MutationObserver(A)).observe(t, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            })
        }
    })(ue_csm, window, document);
    ue_csm.ue.exec(function(g, e) {
        if (e.ue_err) {
            var f = "";
            e.ue_err.errorHandlers || (e.ue_err.errorHandlers = []);
            e.ue_err.errorHandlers.push({
                name: "fctx",
                handler: function(a) {
                    if (!a.logLevel || "FATAL" === a.logLevel)
                        if (f = g.getElementsByTagName("html")[0].innerHTML) {
                            var b = f.indexOf("var ue_t0=ue_t0||+new Date();");
                            if (-1 !== b) {
                                var b = f.substr(0, b).split(String.fromCharCode(10)),
                                    d = Math.max(b.length - 10 - 1, 0),
                                    b = b.slice(d, b.length - 1);
                                a.fcsmln = d + b.length + 1;
                                a.cinfo = a.cinfo || {};
                                for (var c = 0; c < b.length; c++) a.cinfo[d + c + 1 + ""] =
                                    b[c]
                            }
                            b = f.split(String.fromCharCode(10));
                            a.cinfo = a.cinfo || {};
                            if (!(a.f || void 0 === a.l || a.l in a.cinfo))
                                for (c = +a.l - 1, d = Math.max(c - 5, 0), c = Math.min(c + 5, b.length - 1); d <= c; d++) a.cinfo[d + 1 + ""] = b[d]
                        }
                }
            })
        }
    }, "fatals-context")(document, window);
    (function(m, a) {
        function c(k) {
            function f(b) {
                b && "string" === typeof b && (b = (b = b.match(/^(?:https?:)?\/\/(.*?)(\/|$)/i)) && 1 < b.length ? b[1] : null, b && b && ("number" === typeof e[b] ? e[b]++ : e[b] = 1))
            }

            function d(b) {
                var e = 10,
                    d = +new Date;
                b && b.timeRemaining ? e = b.timeRemaining() : b = {
                    timeRemaining: function() {
                        return Math.max(0, e - (+new Date - d))
                    }
                };
                for (var c = a.performance.getEntries(), k = e; g < c.length && k > n;) c[g].name && f(c[g].name), g++, k = b.timeRemaining();
                g >= c.length ? h(!0) : l()
            }

            function h(b) {
                if (!b) {
                    b = m.scripts;
                    var c;
                    if (b)
                        for (var d =
                                0; d < b.length; d++)(c = b[d].getAttribute("src")) && "undefined" !== c && f(c)
                }
                0 < Object.keys(e).length && (p && ue_csm.ue && ue_csm.ue.event && ue_csm.ue.event({
                    domains: e,
                    pageType: a.ue_pty || null,
                    subPageType: a.ue_spty || null,
                    pageTypeId: a.ue_pti || null
                }, "csm", "csm.CrossOriginDomains.2"), a.ue_ext = e)
            }

            function l() {
                !0 === k ? d() : a.requestIdleCallback ? a.requestIdleCallback(d) : a.requestAnimationFrame ? a.requestAnimationFrame(d) : a.setTimeout(d, 100)
            }

            function c() {
                if (a.performance && a.performance.getEntries) {
                    var b = a.performance.getEntries();
                    !b || 0 >= b.length ? h(!1) : l()
                } else h(!1)
            }
            var e = a.ue_ext || {};
            a.ue_ext || c();
            return e
        }

        function q() {
            setTimeout(c, r)
        }
        var s = a.ue_dserr || !1,
            p = !0,
            n = 1,
            r = 2E3,
            g = 0;
        a.ue_err && s && (a.ue_err.errorHandlers || (a.ue_err.errorHandlers = []), a.ue_err.errorHandlers.push({
            name: "ext",
            handler: function(a) {
                if (!a.logLevel || "FATAL" === a.logLevel) {
                    var f = c(!0),
                        d = [],
                        h;
                    for (h in f) {
                        var f = h,
                            g = f.match(/amazon(\.com?)?\.\w{2,3}$/i);
                        g && 1 < g.length || -1 !== f.indexOf("amazon-adsystem.com") || -1 !== f.indexOf("amazonpay.com") || -1 !== f.indexOf("cloudfront-labs.amazonaws.com") ||
                            d.push(h)
                    }
                    a.ext = d
                }
            }
        }));
        a.ue && a.ue.isl ? c() : a.ue && ue.attach && ue.attach("load", q)
    })(document, window);
    ue_csm.ue.exec(function(b, e) {
        function q() {
            for (var a = 0; a < f.length; a++) a: for (var d = r.replace(A, f[a]) + g[f[a]] + s, c = arguments, b = 0; b < c.length; b++) try {
                c[b].send(d);
                break a
            } catch (e) {}
            g = {};
            f = [];
            m = 0;
            k = n
        }

        function t() {
            q(B, u)
        }

        function v(a, l, c) {
            p++;
            if (p > w) d.count && 1 == p - w && (d.count("WeblabTriggerThresholdReached", 1), b.ue_int && console.error("Number of max call reached. Data will no longer be send"));
            else {
                var h = c || {};
                h && -1 < h.constructor.toString().indexOf(C) && a && -1 < a.constructor.toString().indexOf(x) && l && -1 < l.constructor.toString().indexOf(x) ?
                    (h = b.ue_id, c && c.rid && (h = c.rid), c = h, a = encodeURIComponent(",wl=" + a + "/" + l), 2E3 > a.length + n ? (2E3 < k + a.length && t(), void 0 === g[c] && (g[c] = "", f.push(c)), g[c] += a, k += a.length, m || (m = e.setTimeout(t, D))) : b.ue_int && console.error("Invalid API call. The input provided is over 2000 chars.")) : d.count && (d.count("WeblabTriggerImproperAPICall", 1), b.ue_int && console.error("Invalid API call. The input provided does not match the API protocol i.e ue.trigger(String, String, Object)."))
            }
        }

        function E() {
            d.trigger && d.trigger.isStub &&
                d.trigger.replay(function(a) {
                    v.apply(this, a)
                })
        }

        function y() {
            z || (f.length && q(u), z = !0)
        }
        var s = ":1234",
            r = "//" + b.ue_furl + "/1/remote-weblab-triggers/1/OE/" + b.ue_mid + ":" + b.ue_sid + ":PLCHLDR_RID$s:wl-client-id%3DCSMTriger",
            A = "PLCHLDR_RID",
            D = b.wtt || 1E4,
            n = r.length + s.length,
            w = b.mwtc || 2E3,
            F = e.XMLHttpRequest && "withCredentials" in new e.XMLHttpRequest,
            x = "String",
            C = "Object",
            d = b.ue,
            g = {},
            f = [],
            k = n,
            m, z = !1,
            p = 0,
            B = function() {
                return {
                    send: function(a) {
                        if (F) {
                            var b = new e.XMLHttpRequest;
                            b.open("GET", a, !0);
                            b.send()
                        } else throw "";
                    }
                }
            }(),
            u = function() {
                return {
                    send: function(a) {
                        (new Image).src = a
                    }
                }
            }();
        e.encodeURIComponent && (d.attach && (d.attach("beforeunload", y), d.attach("pagehide", y)), E(), d.trigger = v)
    }, "client-wbl-trg")(ue_csm, window);
    (function(k, d, h) {
        function f(a, c, b) {
            a && a.indexOf && 0 === a.indexOf("http") && 0 !== a.indexOf("https") && l(s, c, a, b)
        }

        function g(a, c, b) {
            a && a.indexOf && (location.href.split("#")[0] != a && null !== a && "undefined" !== typeof a || l(t, c, a, b))
        }

        function l(a, c, b, e) {
            m[b] || (e = u && e ? n(e) : "N/A", d.ueLogError && d.ueLogError({
                message: a + c + " : " + b,
                logLevel: v,
                stack: "N/A"
            }, {
                attribution: e
            }), m[b] = 1, p++)
        }

        function e(a, c) {
            if (a && c)
                for (var b = 0; b < a.length; b++) try {
                    c(a[b])
                } catch (d) {}
        }

        function q() {
            return d.performance && d.performance.getEntriesByType ?
                d.performance.getEntriesByType("resource") : []
        }

        function n(a) {
            if (a.id) return "//*[@id='" + a.id + "']";
            var c;
            c = 1;
            var b;
            for (b = a.previousSibling; b; b = b.previousSibling) b.nodeName == a.nodeName && (c += 1);
            b = a.nodeName;
            1 != c && (b += "[" + c + "]");
            a.parentNode && (b = n(a.parentNode) + "/" + b);
            return b
        }

        function w() {
            var a = h.images;
            a && a.length && e(a, function(a) {
                var b = a.getAttribute("src");
                f(b, "img", a);
                g(b, "img", a)
            })
        }

        function x() {
            var a = h.scripts;
            a && a.length && e(a, function(a) {
                var b = a.getAttribute("src");
                f(b, "script", a);
                g(b, "script", a)
            })
        }

        function y() {
            var a = h.styleSheets;
            a && a.length && e(a, function(a) {
                if (a = a.ownerNode) {
                    var b = a.getAttribute("href");
                    f(b, "style", a);
                    g(b, "style", a)
                }
            })
        }

        function z() {
            if (A) {
                var a = q();
                e(a, function(a) {
                    f(a.name, a.initiatorType)
                })
            }
        }

        function B() {
            e(q(), function(a) {
                g(a.name, a.initiatorType)
            })
        }

        function r() {
            var a;
            a = d.location && d.location.protocol ? d.location.protocol : void 0;
            "https:" == a && (z(), w(), x(), y(), B(), p < C && setTimeout(r, D))
        }
        var s = "[CSM] Insecure content detected ",
            t = "[CSM] Ajax request to same page detected ",
            v = "WARN",
            m = {},
            p = 0,
            D = k.ue_nsip || 1E3,
            C = 5,
            A = 1 == k.ue_urt,
            u = !0;
        ue_csm.ue_disableNonSecure || (d.performance && d.performance.setResourceTimingBufferSize && d.performance.setResourceTimingBufferSize(300), r())
    })(ue_csm, window, document);
    var ue_aa_a = "";
    if (ue.trigger && (ue_aa_a === "C" || ue_aa_a === "T1")) {
        ue.trigger("UEDATA_AA_SERVERSIDE_ASSIGNMENT_CLIENTSIDE_TRIGGER_190249", ue_aa_a);
    }
    (function(f, b) {
        function g() {
            try {
                b.PerformanceObserver && "function" === typeof b.PerformanceObserver && (a = new b.PerformanceObserver(function(b) {
                    c(b.getEntries())
                }), a.observe(d))
            } catch (h) {
                k()
            }
        }

        function m() {
            for (var h = d.entryTypes, a = 0; a < h.length; a++) c(b.performance.getEntriesByType(h[a]))
        }

        function c(a) {
            if (a && Array.isArray(a)) {
                for (var c = 0, e = 0; e < a.length; e++) {
                    var d = l.indexOf(a[e].name);
                    if (-1 !== d) {
                        var g = Math.round(b.performance.timing.navigationStart + a[e].startTime);
                        f.uet(n[d], void 0, void 0, g);
                        c++
                    }
                }
                l.length ===
                    c && k()
            }
        }

        function k() {
            a && a.disconnect && "function" === typeof a.disconnect && a.disconnect()
        }
        if ("function" === typeof f.uet && b.performance && "object" === typeof b.performance && b.performance.getEntriesByType && "function" === typeof b.performance.getEntriesByType && b.performance.timing && "object" === typeof b.performance.timing && "number" === typeof b.performance.timing.navigationStart) {
            var d = {
                    entryTypes: ["paint"]
                },
                l = ["first-paint", "first-contentful-paint"],
                n = ["fp", "fcp"],
                a;
            try {
                m(), g()
            } catch (p) {
                f.ueLogError(p, {
                    logLevel: "ERROR",
                    attribution: "performanceMetrics"
                })
            }
        }
    })(ue_csm, window);
    if (window.csa) {
        csa("Events")("setEntity", {
            page: {
                pageType: "Detail",
                subPageType: "Kindle_HW",
                pageTypeId: "B07PVCVBN7"
            }
        });
    }
}

function showElement(id) {
    var elm = document.getElementById(id);
    if (elm) {
        elm.style.visibility = 'visible';
        if (elm.getAttribute('name') == 'heroQuickPromoDiv') {
            elm.style.display = 'block';
        }
    }
}

function hideElement(id) {
    var elm = document.getElementById(id);
    if (elm) {
        elm.style.visibility = 'hidden';
        if (elm.getAttribute('name') == 'heroQuickPromoDiv') {
            elm.style.display = 'none';
        }
    }
}

function showHideElement(h_id, div_id) {
    var hiddenTag = document.getElementById(h_id);
    if (hiddenTag) {
        showElement(div_id);
    } else {
        hideElement(div_id);
    }
}
if (typeof P === 'object' && typeof P.when === 'function') {
    P.register("isLazyLoadWeblabEnabled", function() {
        var isWeblabEnabled = 1;
        return isWeblabEnabled;
    });
}
window.isBowserFeatureCleanup = 0;
var touchDeviceDetected = false;
P.when('sp.load.js').register('sp.load.critical.js');
P.when('atf').register('sp.load.js');
var CSMReqs = {
    af: {
        c: 2,
        p: 'atf'
    },
    cf: {
        c: 2,
        p: 'cf'
    },
    x1: {
        c: 1,
        p: 'x1'
    },
    x2: {
        c: 1,
        p: 'x2'
    }
};

function setCSMReq(a) {
    a = a.toLowerCase();
    var b = CSMReqs[a];
    if (b && --b.c == 0) {
        if (typeof uet == 'function') {
            uet(a);
            (a == 'af') && (typeof replaceImg === 'function') && replaceImg();
        };
        if (typeof P != 'undefined') {
            P.register(b.p);
            if (a == 'af') {
                if (typeof uet === 'function') {
                    uet('bb', 'TwisterAUIWait', {
                        wb: 1
                    });
                }
            }
        };
    }
}
if (typeof P != 'undefined') {
    P.when('A').execute(function(A) {
        if (typeof uet === 'function') {
            uet('af', 'TwisterAUIWait', {
                wb: 1
            });
        }
    });
}
var addlongPoleTag = function(marker, customtag) {
    marker = marker.toLowerCase();
    var b = CSMReqs[marker];
    if (b.c == 0) {
        if (window.ue && typeof ue.tag === 'function') {
            ue.tag(customtag);
        }
    }
};
var gbEnableTwisterJS = 0;
var isTwisterPage = 0;
isTwisterPage = 1;


P.when("p-detect").execute(function() {
    var h = document.documentElement;
    h.className = h.className.replace(/(^|\b)a-touch(\b|$)/g, "");
});
window.weblabs = {};

P.now().execute('dp-create-feature-interactive-api', function() {
    if (typeof uet === 'function') {
        uet('bb', 'clickToCI', {
            wb: 1
        });
    }
    var records = [],
        timeToInteractiveObj;
    window.markFeatureRender = function(fName, options) {
        updateFeatureList(fName, options, 'render');
    };
    window.markFeatureInteractive = function(fName, options) {
        updateFeatureList(fName, options, 'interactive');
    };

    function updateFeatureList(fName, options, type) {
        var record = {
            name: fName,
            options: options,
            type: type,
            timestamp: +new Date
        };
        if (timeToInteractiveObj) {
            timeToInteractiveObj.updateFeatures([record]);
        } else {
            records.push(record);
        }
    }
    P.when('dp-time-to-interactive').execute('dp-update-interactive-feature-list', function(obj) {
        timeToInteractiveObj = obj;
        if (records.length) {
            timeToInteractiveObj.updateFeatures(records);
        }
    });
});

window.ue_ihe = (window.ue_ihe || 0) + 1;
if (window.ue_ihe === 1) {
    (function(k, l, g) {
        function m(a) {
            c || (c = b[a.type].id, "undefined" === typeof a.clientX ? (e = a.pageX, f = a.pageY) : (e = a.clientX, f = a.clientY), 2 != c || h && (h != e || n != f) ? (r(), d.isl && l.setTimeout(function() {
                p("at", d.id)
            }, 0)) : (h = e, n = f, c = 0))
        }

        function r() {
            for (var a in b) b.hasOwnProperty(a) && d.detach(a, m, b[a].parent)
        }

        function s() {
            for (var a in b) b.hasOwnProperty(a) && d.attach(a, m, b[a].parent)
        }

        function t() {
            var a = "";
            !q && c && (q = 1, a += "&ui=" + c);
            return a
        }
        var d = k.ue,
            p = k.uex,
            q = 0,
            c = 0,
            h, n, e, f, b = {
                click: {
                    id: 1,
                    parent: g
                },
                mousemove: {
                    id: 2,
                    parent: g
                },
                scroll: {
                    id: 3,
                    parent: l
                },
                keydown: {
                    id: 4,
                    parent: g
                }
            };
        d && p && (s(), d._ui = t)
    })(ue_csm, window, document);
    (function(s, l) {
        function m(b, e, c) {
            c = c || new Date(+new Date + t);
            c = "expires=" + c.toUTCString();
            n.cookie = b + "=" + e + ";" + c + ";path=/"
        }

        function p(b) {
            b += "=";
            for (var e = n.cookie.split(";"), c = 0; c < e.length; c++) {
                for (var a = e[c];
                    " " == a.charAt(0);) a = a.substring(1);
                if (0 === a.indexOf(b)) return decodeURIComponent(a.substring(b.length, a.length))
            }
            return ""
        }

        function q(b, e, c) {
            if (!e) return b; - 1 < b.indexOf("{") && (b = "");
            for (var a = b.split("&"), f, d = !1, h = !1, g = 0; g < a.length; g++) f = a[g].split(":"), f[0] == e ? (!c || d ? a.splice(g, 1) : (f[1] = c, a[g] =
                f.join(":")), h = d = !0) : 2 > f.length && (a.splice(g, 1), h = !0);
            h && (b = a.join("&"));
            !d && c && (0 < b.length && (b += "&"), b += e + ":" + c);
            return b
        }
        var k = s.ue || {},
            t = 6048E7,
            n = ue_csm.document || l.document,
            r = null,
            d;
        a: {
            try {
                d = l.localStorage;
                break a
            } catch (u) {}
            d = void 0
        }
        k.count && k.count("csm.cookieSize", document.cookie.length);
        k.cookie = {
            get: p,
            set: m,
            updateCsmHit: function(b, e, c) {
                try {
                    var a;
                    if (!(a = r)) {
                        var f;
                        a: {
                            try {
                                if (d && d.getItem) {
                                    f = d.getItem("csm-hit");
                                    break a
                                }
                            } catch (k) {}
                            f = void 0
                        }
                        a = f || p("csm-hit") || "{}"
                    }
                    a = q(a, b, e);
                    r = a = q(a, "t", +new Date);
                    try {
                        d && d.setItem && d.setItem("csm-hit", a)
                    } catch (h) {}
                    m("csm-hit", a, c)
                } catch (g) {
                    "function" == typeof l.ueLogError && ueLogError(Error("Cookie manager: " + g.message), {
                        logLevel: "WARN"
                    })
                }
            }
        }
    })(ue_csm, window);
    (function(l, d) {
        function c(b) {
            b = "";
            var c = a.isBFT ? "b" : "s",
                d = "" + a.oid,
                f = "" + a.lid,
                g = d;
            d != f && 20 == f.length && (c += "a", g += "-" + f);
            a.tabid && (b = a.tabid + "+");
            b += c + "-" + g;
            b != e && 100 > b.length && (e = b, a.cookie ? a.cookie.updateCsmHit(m, b + ("|" + +new Date)) : document.cookie = "csm-hit=" + b + ("|" + +new Date) + n + "; path=/")
        }

        function p() {
            e = 0
        }

        function h(b) {
            !0 === d[a.pageViz.propHid] ? e = 0 : !1 === d[a.pageViz.propHid] && c({
                type: "visible"
            })
        }
        var n = "; expires=" + (new Date(+new Date + 6048E5)).toGMTString(),
            m = "tb",
            e, a = l.ue || {},
            k = a.pageViz && a.pageViz.event &&
            a.pageViz.propHid;
        a.attach && (a.attach("click", c), a.attach("keyup", c), k || (a.attach("focus", c), a.attach("blur", p)), k && (a.attach(a.pageViz.event, h, d), h({})));
        a.aftb = 1
    })(ue_csm, document);
    ue_csm.ue.stub(ue, "impression");
    ue.stub(ue, "trigger");
    if (window.ue && uet) {
        uet('bb');
    }
}

window.P && P.register('bb');
if (typeof ues === 'function') {
    ues('t0', 'portal-bb', new Date());
    ues('ctb', 'portal-bb', 1);
}

typeof uex === 'function' && uex('ld', 'portal-bb', {
    wb: 1
})

! function() {
    function n(n, t) {
        var r = i(n);
        return t && (r = r("instance", t)), r
    }
    var r = [],
        c = 0,
        i = function(t) {
            return function() {
                var n = c++;
                return r.push([t, [].slice.call(arguments, 0), n, {
                    time: Date.now()
                }]), i(n)
            }
        };
    n._s = r, this.csa = n
}();;
csa('Config', {});
if (window.csa) {
    csa("Config", {
        'Application': 'Retail',
        'ObfuscatedMarketplaceId': 'A1RKKUPIHCS9HS',
        'Events.SushiEndpoint': 'https://unagi-eu.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
        'CacheDetection.RequestID': "E81T54FVZ2MDMD0N7JR7",
        'CacheDetection.Callback': window.ue && ue.reset
    });
    csa("Events")("setEntity", {
        page: {
            requestId: "E81T54FVZ2MDMD0N7JR7",
            meaningful: "interactive"
        },
        session: {
            id: "261-8173218-5181763"
        }
    });
}! function(n) {
    var e, o, r = "splice",
        t = n.csa,
        i = {},
        u = {},
        f = n.csa._s,
        c = 0,
        a = {},
        s = {},
        g = setTimeout,
        l = Object.keys;

    function d(n, i) {
        return t(n, i)
    }

    function h(n, i) {
        var t = u[n] || {};
        O(t, i), u[n] = t, g(b, 0)
    }

    function v(n, i) {
        a[n] || (a[n] = []), a[n].push(i)
    }

    function m(n, i) {
        if (n in s) i(s[n]);
        else {
            v(n, function(n) {
                return i(n), !1
            })
        }
    }

    function p(n) {
        if (i.DEBUG) throw n
    }

    function w() {
        return Math.abs(4294967295 * Math.random() | 0).toString(36)
    }

    function b() {
        for (var n = 0; n < f.length;) {
            var i = f[n],
                t = i[0] in u;
            if (!t && !o) return void(c = i.length);
            t ? (f[r](c = n, 1), S(i)) : n++
        }
    }

    function S(n) {
        var arguments, i = u[n[0]],
            t = (arguments = n[1])[0];
        if (!i || !i[t]) return p("Undefined function: " + i + "/" + t);
        e = n[3], u[n[2]] = i[t].apply(i, arguments.slice(1)) || {}, e = 0
    }

    function D() {
        o = 1, b()
    }

    function O(i, t) {
        l(t).forEach(function(n) {
            i[n] = t[n]
        })
    }
    m("$beforeunload", D), h("Config", {
        instance: function(n) {
            O(i, n)
        }
    }), t.plugin = function(n) {
        n(d)
    }, d.config = i, d.register = h, d.on = v, d.removeListener = function(n, i) {
        var t = a[n];
        t && t[r](t.indexOf(i), 1)
    }, d.once = m, d.emit = function(n, i) {
        for (var t = a[n] || [], e = 0; e < t.length;) !1 === t[e](i) ? t[r](e, 1) : e++;
        s[n] = i || {}
    }, d.UUID = function() {
        return [w(), w(), w(), w()].join("-")
    }, d.time = function(n) {
        var i = e ? new Date(e.time) : new Date;
        return "ISO" === n ? i.toISOString() : i.getTime()
    }, d.error = p, (d.global = n).csa._s.push = function(n) {
        n[0] in u && (!f.length || o) ? S(n) : f[r](c++, 0, n)
    }, b(), g(function() {
        g(D, i.SkipMissingPluginsTimeout || 5e3)
    }, 1)
}("undefined" != typeof window ? window : global);
csa.plugin(function(t) {
    var e;

    function n() {
        if (!e) try {
            e = t.global.localStorage || {}
        } catch (t) {
            e = {}
        }
    }
    t.store = function(t, c) {
        try {
            if (n(), !t) return Object.keys(e);
            if (!c) return e[t];
            e[t] = c
        } catch (t) {}
    }, t.deleteStored = function(t) {
        try {
            n(), delete e[t]
        } catch (t) {}
    }
});
csa.plugin(function(n) {
    var r, e = n.global,
        o = n("Events"),
        i = e.location,
        f = e.document,
        a = e.addEventListener,
        l = n.emit;

    function t(a) {
        var e = !!r;
        e && (l("$beforePageTransition"), l("$pageTransition"));
        var t = {
            schemaId: "csa.PageEntity.1",
            id: r = n.UUID(),
            url: i.href,
            server: i.hostname,
            path: i.pathname,
            referrer: f.referrer,
            title: f.title
        };
        Object.keys(a || {}).forEach(function(e) {
            t[e] = a[e]
        }), o("setEntity", {
            page: t
        }), e && l("$afterPageTransition")
    }

    function d() {
        l("$load"), l("$afterload")
    }

    function c() {
        l("$beforeunload"), l("$unload"), l("$afterunload")
    }
    i && f && (a && (a("beforeunload", c), a("pagehide", c), "complete" === f.readyState ? d() : a("load", d)), n.register("SPA", {
        newPage: t
    }), t())
});
csa.plugin(function(c) {
    var t = "UNKNOWN",
        a = "id",
        i = "messageId",
        e = "timestamp",
        u = "producerId",
        o = "application",
        f = "obfuscatedMarketplaceId",
        s = "entities",
        r = "schemaId",
        d = "version",
        l = "attributes",
        p = c.config,
        g = c("Transport"),
        v = {},
        I = function(n, t) {
            Object.keys(n).forEach(t)
        };

    function m(t, i, e) {
        I(i, function(n) {
            n in t || (t[n] = {
                version: 1,
                id: i[n][a] || c.UUID()
            }), U(t[n], i[n], e)
        })
    }

    function U(t, i, e) {
        I(i, function(n) {
            !e && n !== a || (t[n] = i[n])
        })
    }

    function b(c, n, o) {
        I(n, function(n) {
            var t = c[n];
            if (t[r]) {
                var i = {},
                    e = {};
                h(i), i[a] = t[a], i[u] = t[u] || o, i[r] = t[r], i[d] = t[d]++, U(i[l] = e, t, 1), E(e), g("log", i)
            }
        })
    }

    function h(n) {
        n[e] = n[e] || c.time("ISO"), n[i] = c.UUID(), n[o] = p.Application || t, n[f] = p.ObfuscatedMarketplaceId || t
    }

    function E(n) {
        delete n[d], delete n[r], delete n[u]
    }

    function O(c) {
        var o = {};
        this.log = function(n, t) {
            var i = {},
                e = (t || {}).full;
            h(n), m(i, v, e), m(i, o, e), m(i, n[s] || {}, e), I(i, function(n) {
                E(i[n])
            }), n[u] = c[u], n[s] = i, g("log", n)
        }, this.setEntity = function(n) {
            m(o, n, 1), b(o, n, c[u])
        }
    }
    c.on("$pageTransition", function() {
        v = {}
    }), c.register("Events", {
        setEntity: function(n) {
            m(v, n, 1), b(v, n, "csa")
        },
        instance: function(n) {
            return new O(n)
        }
    })
});
csa.plugin(function(o) {
    var n, i, r = "csa.cajun.",
        c = "post",
        u = "preflight",
        e = "addEventListener",
        f = "sendBeacon",
        t = "Transport",
        s = o.global,
        a = s.document,
        d = o.store,
        l = o.config,
        p = 0,
        v = [],
        h = [],
        g = l[t + ".BatchInterval"] || 5e3,
        y = l[t + ".MaxEvents"] || 1e3,
        m = 0,
        E = 864e5;

    function S(e) {
        if (y <= ++m) return m === y ? o.error("Max events reached") : 0;
        var t = e.timestamp;
        if (o.time() - new Date(t) > E) return o.error("Event is too old: " + t);
        !n && p && (n = setTimeout(T, g)), h.push(e)
    }

    function T() {
        v.forEach(function(t) {
            var n = [];
            h.forEach(function(e) {
                t.accepts(e) && n.push(e)
            }), n.length && function(t, n, e) {
                d(e, JSON.stringify(n));

                function r() {
                    o.deleteStored(e)
                }[function(e, t, n) {
                    var r = s.navigator || {},
                        o = s.cordova || {};
                    if (!r[f]) return;
                    if ("ios" === o.platformId && !i) {
                        if (!e[u]) return;
                        (new Image).src = e[u]().url, i = 1
                    }
                    var a = e[c](t);
                    if (!a.type && r[f](a.url, a.body)) return n(), 1
                }, function(e, t, n) {
                    var r = e[c](t),
                        o = r.type,
                        a = new XMLHttpRequest;
                    a.onload = function() {
                        a.status < 299 && n()
                    }, a.open("POST", r.url), o && a.setRequestHeader("Content-Type", o);
                    return a.send(r.body), 1
                }].some(function(e) {
                    try {
                        return e(t, n, r)
                    } catch (e) {}
                })
            }(t, n, r + o.UUID())
        }), h = [], n = 0
    }
    o.register(t, {
        log: S,
        register: function(e) {
            v.push(e)
        }
    }), o.once("$afterunload", function() {
        p = 1, T()
    }), o.once("$afterload", function() {
        p = 1, (d() || []).forEach(function(e) {
            if (!e.indexOf(r)) try {
                var t = d(e);
                o.deleteStored(e), JSON.parse(t).forEach(S)
            } catch (e) {}
        }), T(), a && a[e] && a[e]("visibilitychange", T, !1)
    }), o.on("$afterPageTransition", function() {
        m = 0
    })
});
csa.plugin(function(n) {
    var t, r = n.config["Events.SushiEndpoint"];
    var i = /\/\/(.*?)\//.exec(r);
    i && i[1] && (t = "https://" + i[1] + "/ping"), n("Transport")("register", {
        post: function(n) {
            return n = n.map(function(n) {
                return {
                    data: n
                }
            }), {
                url: r,
                body: JSON.stringify({
                    events: n
                })
            }
        },
        preflight: function() {
            return {
                url: t
            }
        },
        accepts: function() {
            return 1
        }
    })
});
csa.plugin(function(t) {
    var i, a, o, r, d = t.config["Content.ImpressionMinimumTime"] || 1e3,
        e = "addEventListener",
        c = "hidden",
        n = "renderedTo",
        s = n + "Viewed",
        u = n + "Meaningful",
        f = n + "Impressed",
        g = 1,
        m = 2,
        l = 3,
        v = 4,
        p = 5,
        h = "loaded",
        T = 7,
        I = t.global,
        P = t("Events", {
            producerId: "csa"
        }),
        y = I.document,
        C = {},
        b = {};
    if (!y || !y[e] || void 0 === y[c]) return E("PageStateChange.2", {
        state: "ignored"
    });

    function w(e) {
        if (!C[T]) {
            var n;
            if (C[e] = t.time(), e !== l && e !== h || (i = i || C[e]), i && !y[c]) a = a || C[e], (n = {})[u] = i - o, n[s] = a - o, E("PageView.4", n), r = r || setTimeout(S, d);
            if (e !== p && e !== g && e !== m || (clearTimeout(r), r = 0), e !== g && e !== m || E("PageRender.3", {
                    transitionType: e === g ? "hard" : "soft"
                }), e === T)(n = {})[u] = i - o, n[s] = a - o, n[f] = C[e] - o, E("PageImpressed.2", n)
        }
    }

    function E(e, n) {
        b[e] || (n.schemaId = "csa." + e, P("log", n, {
            full: 1
        }), b[e] = 1)
    }

    function M() {
        w(y[c] ? p : v)
    }

    function S() {
        w(T), r = 0
    }

    function V() {
        var e = o ? m : g;
        C = {}, b = {}, a = i = 0, o = t.time(), w(e), M()
    }

    function $() {
        var e = y.readyState;
        "interactive" === e && w(l), "complete" === e && w(h)
    }
    V(), y[e]("visibilitychange", M, !1), y[e]("readystatechange", $, !1), t.on("$afterPageTransition", V), t.once("$load", $), t.register("Content", {
        get: function() {
            return {
                emit: w
            }
        }
    })
});

(function(d) {
    document.createElement("header");

    function b(e) {
        return [].slice.call(e)
    }

    function c(f, e) {
        return {
            m: f,
            a: b(e)
        }
    }
    var a = function(f) {
        var g = {};
        g._sourceName = f;
        g._replay = [];
        g.getNow = function(i, h) {
            return h
        };

        function e(i, h, j) {
            i[j] = function() {
                g._replay.push(h.concat(c(j, arguments)))
            }
        }
        g.when = function() {
            var i = [c("when", arguments)];
            var h = {};
            e(h, i, "run");
            e(h, i, "declare");
            e(h, i, "publish");
            e(h, i, "build");
            return h
        };
        e(g, [], "declare");
        e(g, [], "build");
        e(g, [], "publish");
        e(g, [], "importEvent");
        a._shims.push(g);
        return g
    };
    a._shims = [];
    if (!d.$Nav) {
        d.$Nav = a("rcx-nav")
    }
    if (!d.$Nav.make) {
        d.$Nav.make = a
    }
}(window));
$Nav.importEvent('navbarJS-beaconbelt');
$Nav.declare('img.sprite', {
    'png8': 'https://images-eu.ssl-images-amazon.com/images/G/30/gno/sprites/global-sprite_bluebeacon-v1._CB308130928_.png',
    'png32': 'https://images-eu.ssl-images-amazon.com/images/G/30/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized_layout1._CB468502164_.png',
    'png32-2x': 'https://images-eu.ssl-images-amazon.com/images/G/30/gno/sprites/nav-sprite-global_bluebeacon-2x_optimized_layout1._CB468502167_.png'
});
$Nav.declare('img.timeline', {
    'timeline-icon-2x': 'https://images-eu.ssl-images-amazon.com/images/G/30/gno/sprites/timeline_sprite_2x._CB443580960_.png'
});
window._navbarSpriteUrl = 'https://images-eu.ssl-images-amazon.com/images/G/30/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized_layout1._CB468502164_.png';
$Nav.declare('img.pixel', 'https://images-eu.ssl-images-amazon.com/images/G/30/x-locale/common/transparent-pixel._CB386942486_.gif');

(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('navCF').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41VXo8p0cmL._RC|7166e+eXZOL.js,61J7BJn2HyL.js,41W9ohA0e+L.js,11vrNkbdcvL.js,21qaguVEGfL.js,31S40+p9LcL.js,51YeRc8UK1L.js,313jWehHlpL.js_.js?AUIClients/AmazonNavigationDesktopMetaAsset#desktop');
});

if (window.navmet === undefined) {
    window.navmet = [];
    if (window.performance && window.performance.timing && window.ue_t0) {
        var t = window.performance.timing;
        var now = +new Date();
        window.navmet.basic = {
            'networkLatency': (t.responseStart - t.fetchStart),
            'navFirstPaint': (now - t.responseStart),
            'NavStart': (now - window.ue_t0)
        };
    }
}

window.navmet.tmp = +new Date();

window.uet && uet('ns');
window._navbar = (function(o) {
    o.componentLoaded = o.loading = function() {};
    o.browsepromos = {};
    o.issPromos = [];
    return o;
}(window._navbar || {}));
window._navbar.declareOnLoad = function() {
    window.$Nav && $Nav.declare('page.load');
};
if (window.addEventListener) {
    window.addEventListener("load", window._navbar.declareOnLoad, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", window._navbar.declareOnLoad);
} else if (window.$Nav) {
    $Nav.when('page.domReady').run("OnloadFallbackSetup", function() {
        window._navbar.declareOnLoad();
    });
}
window.$Nav && $Nav.declare('logEvent.enabled',
    'false');
window.$Nav && $Nav.declare('config.lightningDeals', {
    "activeItems": [],
    "marketplaceID": "A1RKKUPIHCS9HS",
    "customerID": "A3PH2YNC1ENSG3"
});

try {
    if (window.navmet === undefined) window.navmet = [];
    window.$Nav && $Nav.when('$').run('defineIsArray', function(jQuery) {
        if (jQuery.isArray === undefined) {
            jQuery.isArray = function(param) {
                if (param.length === undefined) {
                    return false;
                }
                return true;
            };
        }
    });
    window.$Nav && window.$Nav.when("$", "subnav.initFlyouts", "constants", "nav.inline").build("subnav.builder", function(a, t, e) {
        var n = a("#navbar");
        return function(s) {
            var r = a("#nav-subnav");
            if (0 === r.length && (r = a("<div id='nav-subnav'></div>").appendTo("#navbar")), r.html(""), n.removeClass("nav-subnav"), s.categoryKey && s.digest) {
                r.attr("data-category", s.categoryKey).attr("data-digest", s.digest).attr("class", s.category.data.categoryStyle), s.style ? r.attr("style", s.style) : r.attr("style") && r.removeAttr("style");
                var i = function(t) {
                    if (t && t.href) {
                        var n = "nav-a",
                            s = t.text,
                            i = t.dataKey;
                        if (!s && !t.image) {
                            if (!i || 0 !== i.indexOf(e.ADVANCED_PREFIX)) return;
                            s = "", n += " nav-aText"
                        }
                        var d = t.image ? "<img src='" + t.image + "'class='nav-categ-image' ></a>" : s,
                            l = a("<a href='" + t.href + "' class='" + n + "'></a>"),
                            v = a("<span class='nav-a-content'>" + d + "</span>");
                        if ("image" === t.type && (v.html(""), l.addClass("nav-hasImage"), t.rightText = ""), t.bold && !t.image && l.addClass("nav-b"), t.floatRight && l.addClass("nav-right"), t.flyoutFullWidth && "0" !== t.flyoutFullWidth && l.attr("data-nav-flyout-full-width", "1"), t.src) {
                            var g = ["nav-image"];
                            t["absolute-right"] && g.push("nav-image-abs-right"), t["absolute-right"] && g.push("nav-image-abs-right"), a("<img src='" + t.src + "' class='" + g.join(" ") + "' alt='" + (t.alt || "") + "' />").appendTo(v)
                        }
                        t.rightText && v.append(t.rightText), v.appendTo(l), i && (a("<span class='nav-arrow'></span>").appendTo(l), l.attr("data-nav-key", i).addClass("nav-hasArrow")), l.appendTo(r), r.append(document.createTextNode(" "))
                    }
                };
                if (s.category && s.category.data && (s.category.data.bold = !0, i(s.category.data)), s.subnav && "linkSequence" === s.subnav.type)
                    for (var d = 0; d < s.subnav.data.length; d++) i(s.subnav.data[d]);
                n.addClass("nav-subnav"), t()
            }
        }
    });
    window.$Nav && $Nav.when('$', '$F', 'config', 'logEvent', 'panels', 'phoneHome', 'dataPanel', 'flyouts.renderPromo', 'flyouts.sloppyTrigger', 'flyouts.accessibility', 'util.mouseOut', 'util.onKey', 'debug.param').build('flyouts.buildSubPanels', function($, $F, config, logEvent, panels, phoneHome, dataPanel, renderPromo, createSloppyTrigger, a11yHandler, mouseOutUtility, onKey, debugParam) {
        var flyoutDebug = debugParam('navFlyoutClick');
        return function(flyout, event) {
            var linkKeys = [];
            $('.nav-item', flyout.elem()).each(function() {
                var $item = $(this);
                linkKeys.push({
                    link: $item,
                    panelKey: $item.attr('data-nav-panelkey')
                });
            });
            if (linkKeys.length === 0) {
                return;
            }
            var visible = false;
            var $parent = $('<div class=\'nav-subcats\'></div>').appendTo(flyout.elem());
            var panelGroup = flyout.getName() + 'SubCats';
            var hideTimeout = null;
            var sloppyTrigger = createSloppyTrigger($parent);
            var showParent = function() {
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
                if (visible) {
                    return;
                }
                var height = $('#nav-flyout-shopAll').height();
                $parent.css({
                    'height': height
                });
                $parent.animate({
                    width: 'show'
                }, {
                    duration: 200,
                    complete: function() {
                        $parent.css({
                            overflow: 'visible'
                        });
                    }
                });
                visible = true;
            };
            var hideParentNow = function() {
                $parent.stop().css({
                    overflow: 'hidden',
                    display: 'none',
                    width: 'auto',
                    height: 'auto'
                });
                panels.hideAll({
                    group: panelGroup
                });
                visible = false;
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
            };
            var hideParent = function() {
                if (!visible) {
                    return;
                }
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
                hideTimeout = setTimeout(hideParentNow, 10);
            };
            flyout.onHide(function() {
                sloppyTrigger.disable();
                hideParentNow();
                this.elem().hide();
            });
            var addPanel = function($link, panelKey) {
                var panel = dataPanel({
                    className: 'nav-subcat',
                    dataKey: panelKey,
                    groups: [panelGroup],
                    spinner: false,
                    visible: false
                });
                if (!flyoutDebug) {
                    var mouseout = mouseOutUtility();
                    mouseout.add(flyout.elem());
                    mouseout.action(function() {
                        panel.hide();
                    });
                    mouseout.enable();
                }
                var a11y = a11yHandler({
                    link: $link,
                    onEscape: function() {
                        panel.hide();
                        $link.focus();
                    }
                });
                var logPanelInteraction = function(promoID, wlTriggers) {
                    var logNow = $F.once().on(function() {
                        var panelEvent = $.extend({}, event, {
                            id: promoID
                        });
                        if (config.browsePromos && !!config.browsePromos[promoID]) {
                            panelEvent.bp = 1;
                        }
                        logEvent(panelEvent);
                        phoneHome.trigger(wlTriggers);
                    });
                    if (panel.isVisible() && panel.hasInteracted()) {
                        logNow();
                    } else {
                        panel.onInteract(logNow);
                    }
                };
                panel.onData(function(data) {
                    renderPromo(data.promoID, panel.elem());
                    logPanelInteraction(data.promoID, data.wlTriggers);
                });
                panel.onShow(function() {
                    var columnCount = $('.nav-column', panel.elem()).length;
                    panel.elem().addClass('nav-colcount-' + columnCount);
                    showParent();
                    var $subCatLinks = $('.nav-subcat-links > a', panel.elem());
                    var length = $subCatLinks.length;
                    if (length > 0) {
                        var firstElementLeftPos = $subCatLinks.eq(0).offset().left;
                        for (var i = 1; i < length; i++) {
                            if (firstElementLeftPos === $subCatLinks.eq(i).offset().left) {
                                $subCatLinks.eq(i).addClass('nav_linestart');
                            }
                        }
                        if ($('span.nav-title.nav-item', panel.elem()).length === 0) {
                            var catTitle = $.trim($link.html());
                            catTitle = catTitle.replace(/ref=sa_menu_top/g, 'ref=sa_menu');
                            var $subPanelTitle = $('<span class=\'nav-title nav-item\'>' + catTitle + '</span>');
                            panel.elem().prepend($subPanelTitle);
                        }
                    }
                    $link.addClass('nav-active');
                });
                panel.onHide(function() {
                    $link.removeClass('nav-active');
                    hideParent();
                    a11y.disable();
                    sloppyTrigger.disable();
                });
                panel.onShow(function() {
                    a11y.elems($('a, area', panel.elem()));
                });
                sloppyTrigger.register($link, panel);
                if (flyoutDebug) {
                    $link.click(function() {
                        if (panel.isVisible()) {
                            panel.hide();
                        } else {
                            panel.show();
                        }
                    });
                }
                var panelKeyHandler = onKey($link, function() {
                    if (this.isEnter() || this.isSpace()) {
                        panel.show();
                    }
                }, 'keydown', false);
                $link.focus(function() {
                    panelKeyHandler.bind();
                }).blur(function() {
                    panelKeyHandler.unbind();
                });
                panel.elem().appendTo($parent);
            };
            var hideParentAndResetTrigger = function() {
                hideParent();
                sloppyTrigger.disable();
            };
            for (var i = 0; i < linkKeys.length; i++) {
                var item = linkKeys[i];
                if (item.panelKey) {
                    addPanel(item.link, item.panelKey);
                } else {
                    item.link.mouseover(hideParentAndResetTrigger);
                }
            }
        };
    });
} catch (err) {
    if (window.$Nav) {
        window.$Nav.when('metrics', 'logUeError').run(function(metrics, log) {
            metrics.increment('NavJS:AboveNavInjection:error');
            log(err.toString(), {
                'attribution': 'rcx-nav',
                'logLevel': 'FATAL'
            });
        });
    }
}

window.navmet.push({
    key: 'PreNav',
    end: +new Date(),
    begin: window.navmet.tmp
});

window.navmet.main = +new Date();

var hmenu = document.getElementById("nav-hamburger-menu");
hmenu.setAttribute("href", "javascript: void(0)");
window.navHamburgerMetricLogger = function() {
    if (window.ue && window.ue.count) {
        var metricName = "Nav:Hmenu:IconClickActionPending";
        window.ue.count(metricName, (ue.count(metricName) || 0) + 1);
    }
    window.$Nav && $Nav.declare("navHMenuIconClicked", !0);
};
hmenu.addEventListener("click", window.navHamburgerMetricLogger);
window.$Nav && $Nav.declare('hamburgerMenuIconAvailableOnLoad', false);
window.$Nav && $Nav.declare('hamburgerMenuWeblabTreatment', 'T1');


window.navmet.push({
    key: 'HamburgerMenuIcon',
    end: +new Date(),
    begin: window.navmet.tmp
});

window.navmet.tmp = +new Date();

window.navmet.push({
    key: 'Logo',
    end: +new Date(),
    begin: window.navmet.tmp
});

window.navmet.push({
    key: 'Tools',
    end: +new Date(),
    begin: window.navmet.tmp
});

window.navmet.push({
    key: 'Search',
    end: +new Date(),
    begin: window.navmet.tmp
});

window.navmet.push({
    key: 'CrossShop',
    end: +new Date(),
    begin: window.navmet.tmp
});

window.navmet.push({
    key: 'SWM',
    end: +new Date(),
    begin: window.navmet.tmp
});

if (typeof P !== "undefined" && typeof P.when === "function") {
    P.when('cf').execute(function() {
        P.when('navbarJS-jQuery').execute(function() {});
        P.when('finderFitsJS').execute(function() {});
        P.when('twister').execute(function() {});
        P.when('swfjs').execute(function() {});
    });
}

(typeof setCSMReq === 'function') && setCSMReq("x1");
if (typeof uet === 'function') {
    uet('bb', 'udpV3atfwait', {
        wb: 1
    });
};

P.when('A', 'ready').execute(function(A) {
    var $ = A.$;

    function collectMetrics(placementId) {
        A.ajax('/gp/aw/social/swf/metrics.html/ref=cm_sw_em_mt_dp_' + placementId, {
            method: 'post',
            params: {
                id: 'mailtoDp',
                result: 'mailto share triggered'
            }
        });
    }
    $('#swfMailTo,#swfImage').click(function() {
        collectMetrics('dp_U_tb1gEbE15FZMM');
    });
});

P.when("A", "jQuery").execute(function(A, $) {
    var taf = $("#tell-a-friend");
    taf.children("[data-height]").click(function() {
        var height = $(this).attr("data-height");
        window.open(this.href, "_blank", "location=yes,width=700,height=" + height);
        return false;
    });
    A.on.load(function() {
        var hashValue = window.location.hash;
        var hashIndex;
        var swfHashValue = "_swftext_Swf";
        hashIndex = hashValue.indexOf(swfHashValue);
        if (hashValue != "" && hashIndex > -1 && typeof(window.swfPopUpShown) === 'undefined') {
            $("#swfText").click();
            window.swfPopUpShown = 1;
        }
    });
});


(function(f) {
    var _np = (window.P._namespace("DetailPageBuyBoxTemplate"));
    if (_np.guardFatal) {
        _np.guardFatal(f)(_np);
    } else {
        f(_np);
    }
}(function(P) {
    P.now().execute('dp-mark-atc', function() {
        if (typeof window.markFeatureRender === 'function') {
            window.markFeatureRender('atc', {
                isInteractive: false
            });
        }
    });
}));

(function(f) {
    var _np = (window.P._namespace("TurboClientDetailPage"));
    if (_np.guardFatal) {
        _np.guardFatal(f)(_np);
    } else {
        f(_np);
    }
}(function(P) {
    P.when('cf').execute(function executeTurboAssetsLoadTriggerEvent() {
        P.now('turbo-checkout-assets-load-trigger').execute(function(assetsLoadTrigger) {
            if (assetsLoadTrigger) {
                logTurboCounter("AssetTriggerDedupe");
                return;
            }
            try {
                P.declare('turbo-checkout-assets-load-trigger', true);
                logTurboCounter('AssetTrigger');
            } catch (e) {
                logTurboCounter('AssetTriggerException');
            }
        });

        function logTurboCounter(name) {
            var counter = 'turboCheckout' + name;
            if (window.ue && window.ue.count) {
                window.ue.count(counter, 1);
            }
        }
    });
}));

(function(f) {
    var _np = (window.P._namespace("PreRegistration"));
    if (_np.guardFatal) {
        _np.guardFatal(f)(_np);
    } else {
        f(_np);
    }
}(function(P) {
    P.when("PreRegistration.Controller", "ready").execute(function(PreRegistrationController) {
        var controllerDataJson = {
            "maxQuantity": 3,
            "defaultValue": true,
            "showStatus": true,
            "asin": "B07PVCVBN7",
            "status": "ALLOWED_CONDITIONAL"
        };
        PreRegistrationController.getInstance(controllerDataJson);
    });
}));

(function(f) {
    var _np = (window.P._namespace("list-CF-register-js"));
    if (_np.guardFatal) {
        _np.guardFatal(f)(_np);
    } else {
        f(_np);
    }
}(function(P) {
    "use strict";
    window.P.now('atwl-cf').execute(function(module) {
        var isRegistered = (typeof module !== 'undefined');
        if (!isRegistered) {
            window.P.register('atwl-cf');
        }
    });
}));

P.when("accordionBuyBoxJS").execute(function(buyBoxJS) {
    buyBoxJS.initialize();
});

P.when('A', 'jQuery').execute(function(A, $) {
    function toggleExpanderHeaderTextWeight(data) {
        $("[data-a-expander-name=" + data.expander.expanderName + "] .a-mbc-expander-heading-text").toggleClass("a-mbc-expander-heading-text-bold");
    }
    var offerCount = 0;
    for (var i = 1; i <= offerCount; i++) {
        $(".mbcLi" + i).bind("click", function() {
            this.click();
        });
        $(".mbcLi" + i + " .a-button a").bind("click", function() {
            window.open(this.href, "_self");
        });
        A.on('a:expander:mbc_expander_' + i + ':toggle:expand', toggleExpanderHeaderTextWeight);
        A.on('a:expander:mbc_expander_' + i + ':toggle:collapse', toggleExpanderHeaderTextWeight);
    }
    if ($("#mbc-panel").length == 0) {
        $("#mbc-action-panel-wrapper").show();
    }
});

var mainImgContainer = document.getElementById("main-image-container");
var landingImage = document.getElementById("landingImage");
var imgWrapperDiv = document.getElementById("imgTagWrapperId");
var containerWidth = mainImgContainer.offsetWidth;
var holderRatio = 1.0;
var shouldAutoPlay = false;
var containerHeight = containerWidth / holderRatio;
containerHeight = Math.min(containerHeight, 700);
var dynamicImageMaxHeight = 679;
var dynamicImageMaxWidth = 679;
dynamicImageMaxHeight = landingImage.naturalHeight;
dynamicImageMaxWidth = landingImage.naturalWidth;
var aspectRatio = dynamicImageMaxWidth / dynamicImageMaxHeight;
var imageMaxHeight = containerHeight;
var imageMaxWidth = containerWidth;
if (!shouldAutoPlay && !true) {
    imageMaxHeight = Math.min(imageMaxHeight, dynamicImageMaxHeight);
    imageMaxWidth = Math.min(imageMaxWidth, dynamicImageMaxWidth);
}
var useImageBlockLeftColCentering = false;
var rightMargin = 58;
if (typeof useImageBlockLeftColCentering !== "undefined" && useImageBlockLeftColCentering) {
    mainImgContainer.style.marginRight = rightMargin + "px";
}
mainImgContainer.style.height = containerHeight + "px";
var imageMaxWidthBasedOnHeight = imageMaxHeight * aspectRatio;
var imageMaxHeightBasedOnWidth = imageMaxWidth / aspectRatio;
imageMaxHeight = Math.min(imageMaxHeight, imageMaxHeightBasedOnWidth);
imageMaxWidth = Math.min(imageMaxWidth, imageMaxWidthBasedOnHeight);
if (imgWrapperDiv) {
    imgWrapperDiv.style.height = containerHeight + "px";
}
if (landingImage) {
    landingImage.style.maxHeight = imageMaxHeight + "px";
    landingImage.style.maxWidth = imageMaxWidth + "px";
}
if (shouldAutoPlay) {
    if (landingImage) {
        landingImage.style.height = imageMaxHeight + "px";
        landingImage.style.width = imageMaxWidth + "px";
    }
}

P.when('A').register("ImageBlockATF", function(A) {
    var data = {
        'colorImages': {
            'initial': [{
                "hiRes": "https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SL1500_.jpg",
                "thumb": "https://images-na.ssl-images-amazon.com/images/I/51xX9%2B33enL._AC_US40_.jpg",
                "large": "https://images-na.ssl-images-amazon.com/images/I/51xX9%2B33enL._AC_.jpg",
                "main": {
                    "https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY355_.jpg": [355, 355],
                    "https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY450_.jpg": [450, 450],
                    "https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX425_.jpg": [425, 425],
                    "https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX466_.jpg": [466, 466],
                    "https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX522_.jpg": [522, 522],
                    "https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX569_.jpg": [569, 569],
                    "https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX679_.jpg": [679, 679]
                },
                "variant": "LEFT",
                "lowRes": null
            }, {
                "hiRes": "https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SL1500_.jpg",
                "thumb": "https://images-na.ssl-images-amazon.com/images/I/31uYRbHGk3L._AC_US40_.jpg",
                "large": "https://images-na.ssl-images-amazon.com/images/I/31uYRbHGk3L._AC_.jpg",
                "main": {
                    "https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SY355_.jpg": [355, 355],
                    "https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SY450_.jpg": [450, 450],
                    "https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX425_.jpg": [425, 425],
                    "https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX466_.jpg": [466, 466],
                    "https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX522_.jpg": [522, 522],
                    "https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX569_.jpg": [569, 569],
                    "https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX679_.jpg": [679, 679]
                },
                "variant": "MAIN",
                "lowRes": null
            }, {
                "hiRes": "https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SL1500_.jpg",
                "thumb": "https://images-na.ssl-images-amazon.com/images/I/41q5ws%2BOwNL._AC_US40_.jpg",
                "large": "https://images-na.ssl-images-amazon.com/images/I/41q5ws%2BOwNL._AC_.jpg",
                "main": {
                    "https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SY355_.jpg": [355, 355],
                    "https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SY450_.jpg": [450, 450],
                    "https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX425_.jpg": [425, 425],
                    "https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX466_.jpg": [466, 466],
                    "https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX522_.jpg": [522, 522],
                    "https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX569_.jpg": [569, 569],
                    "https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX679_.jpg": [679, 679]
                },
                "variant": "PT01",
                "lowRes": null
            }, {
                "hiRes": "https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SL1500_.jpg",
                "thumb": "https://images-na.ssl-images-amazon.com/images/I/51eab8AoMtL._AC_US40_.jpg",
                "large": "https://images-na.ssl-images-amazon.com/images/I/51eab8AoMtL._AC_.jpg",
                "main": {
                    "https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SY355_.jpg": [355, 355],
                    "https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SY450_.jpg": [450, 450],
                    "https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX425_.jpg": [425, 425],
                    "https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX466_.jpg": [466, 466],
                    "https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX522_.jpg": [522, 522],
                    "https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX569_.jpg": [569, 569],
                    "https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX679_.jpg": [679, 679]
                },
                "variant": "PT02",
                "lowRes": null
            }]
        },
        'colorToAsin': {
            'initial': {}
        },
        'holderRatio': 1.0,
        'holderMaxHeight': 700,
        'heroImage': {
            'initial': []
        },
        'heroVideo': {
            'initial': []
        },
        'spin360ColorData': {
            'initial': {}
        },
        'spin360ColorEnabled': {
            'initial': 0
        },
        'spin360ConfigEnabled': false,
        'spin360LazyLoadEnabled': false,
        'showroomEnabled': false,
        'showroomViewModel': {
            'initial': {}
        },
        'playVideoInImmersiveView': true,
        'useTabbedImmersiveView': true,
        'totalVideoCount': '0',
        'videoIngressATFSlateThumbURL': '',
        'mediaTypeCount': '0',
        'atfEnhancedHoverOverlay': false,
        'winningAsin': 'B07PVCVBN7',
        'weblabs': {},
        'aibExp3Layout': 0,
        'aibRuleName': 'frank-powered',
        'acEnabled': true,
        'dp60VideoPosition': 0,
        'dp60VariantList': '',
        'dp60VideoThumb': '',
        'dp60MainImage': 'https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY355_.jpg',
        'airyConfig': A.$.parseJSON('{"jsUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/js/airy.skin._CB513066589_.js","cssUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/css/beacon._CB513066589_.css","swfUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/flash/AiryBasicRenderer._CB513066589_.swf","foresterMetadataParams":{"marketplaceId":"A1RKKUPIHCS9HS","method":"AmazonSmp.ImageBlock","requestId":"E81T54FVZ2MDMD0N7JR7","session":"261-8173218-5181763","client":"Dpx"}}')
    };
    A.trigger('P.AboveTheFold'); // trigger ATF event.
    return data;
});

(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/311%2BNUiljjL._RC|51QMAqir34L.js_.js?AUIClients/AskAuiAssets#155248-T1');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/11omjJhwsqL.js?AUIClients/DetailPageLazyLoadLibAssets');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/31K5PJjjggL._RC|11tXe99yWBL.js,01-4MbsHMWL.js,11gFiYe7KbL.js,217PnHIylxL.js_.js?AUIClients/DesktopMedleyFilteringMetaAsset');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/317cKjadXIL.js?AUIClients/MarsContentGridAssets');

(function() {
    var performance = window.performance;
    var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;
    if (isApiSupported) {
        performance.mark('content-grid-widget:1.0' + ':bb');
    } else if (window.ue) {
        window.ue.count('mars:missing-performance-api', 1);
    }
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

P.when("A", "ready").execute(function(A) {
    var $ = A.$;
    var $image = $('img[src="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/stream_on-pack._QL20_CB438265839_.jpg"][data-a-hires="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/stream_on-pack._CB438265839_.jpg"]');
    A.loadHiResImage($image);
});

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

P.when("A", "ready").execute(function(A) {
    var $ = A.$;
    var $image = $('img[src="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/take_your_tv-pack._QL20_CB438265839_.jpg"][data-a-hires="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/take_your_tv-pack._CB438265839_.jpg"]');
    A.loadHiResImage($image);
});

(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/21KU8J2HwrL.js?AUIClients/MarsDeviceUpgraderAssets');

(function() {
    var performance = window.performance;
    var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;
    if (isApiSupported) {
        performance.mark('mars-device-upgrader-widget:1.0' + ':bb');
    } else if (window.ue) {
        window.ue.count('mars:missing-performance-api', 1);
    }
})();

window.uet && uet('bb', 'MakoTechSpecs', {
    wb: 1
});

(function(f) {
    var _np = (window.P._namespace("DetailPageImageBlockTemplate"));
    if (_np.guardFatal) {
        _np.guardFatal(f)(_np);
    } else {
        f(_np);
    }
}(function(P) {
    P.now().execute('dp-mark-imageblock', function() {
        var options = {
            hasComponents: true,
            components: [{
                name: 'mainimage'
            }, {
                name: 'thumbnail'
            }]
        };
        if (typeof window.markFeatureRender === 'function') {
            window.markFeatureRender('imageblock', options);
        }
    });
}));

P.when('A', 'ready').execute(function(A) {
    A.declarative('acrLink-click-metrics', 'click', {
        "allowLinkDefault": true
    }, function(event) {
        if (window.ue) {
            ue.count("acrLinkClickCount", (ue.count("acrLinkClickCount") || 0) + 1);
        }
    });
});

P.when('A', 'cf').execute(function(A) {
    A.declarative('acrStarsLink-click-metrics', 'click', {
        "allowLinkDefault": true
    }, function(event) {
        if (window.ue) {
            ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
        }
    });
});

P.when("A", "jQuery", "cf").execute(function(A, $) {
    window.registeredDDMCountdown || P.register("DDMCountdownComponent", function() {
        var countdonwHandler;
        return {
            init: function(ddmContext) {
                countdonwHandler || (countdonwHandler = new CountdownHandler(ddmContext));
            },
            start: function(fastSecondsLeftToOrder, cheapSecondsLeftToOrder) {
                countdonwHandler.start(fastSecondsLeftToOrder, cheapSecondsLeftToOrder);
            },
            stop: function() {
                countdonwHandler.stop();
            }
        };
    });
    window.registeredDDMCountdown = true;

    function CountdownHandler(ddmContext) {
        var strings = ddmContext.strings;
        var asin = ddmContext.asin;
        var shippingMessageSectionId = ddmContext.shippingMessageSectionId;
        var fastCountdownElementId = ddmContext.fastCountdownElementId;
        var cheapCountdownElementId = ddmContext.cheapCountdownElementId;
        var showAndInCountDown = ddmContext.showAndInCountDown;
        var fastCountdownTimer = null;
        var cheapCountdownTimer = null;
        this.start = function(fastSecondsLeftToOrder, cheapSecondsLeftToOrder) {
            this.stop();
            if (fastCountdownElementId && fastSecondsLeftToOrder > 0) {
                fastCountdownTimer = new CountdownTimer(strings, asin, shippingMessageSectionId,
                    fastCountdownElementId, fastSecondsLeftToOrder, showAndInCountDown);
                fastCountdownTimer.start();
            }
            if (cheapCountdownElementId && cheapSecondsLeftToOrder > 0) {
                cheapCountdownTimer = new CountdownTimer(strings, asin, shippingMessageSectionId,
                    cheapCountdownElementId, cheapSecondsLeftToOrder, showAndInCountDown);
                cheapCountdownTimer.start();
            }
        };
        this.stop = function() {
            if (fastCountdownTimer) {
                fastCountdownTimer.stop();
                fastCountdownTimer = null;
            }
            if (cheapCountdownTimer) {
                cheapCountdownTimer.stop();
                cheapCountdownTimer = null;
            }
        };
    };

    function CountdownTimer(strings, asin, shippingMessageSectionId, countdownElementId, secondsLeft, showAndInCountDown) {
        this.secondsLeft = secondsLeft;
        this.intervalHandle = null;
        this.start = function() {
            var thisObj = this;
            this.intervalHandle = A.interval(function() {
                if (thisObj) {
                    thisObj.updateCountdownText();
                }
            }, 1000);
        };
        this.stop = function() {
            if (this.intervalHandle) {
                window.clearInterval(this.intervalHandle);
            }
        };
        this.updateCountdownText = function() {
            this.secondsLeft--;
            if (this.secondsLeft > 0) {
                var remainMins = Math.floor(this.secondsLeft / 60);
                var minutes = remainMins % 60;
                var hours = Math.floor(remainMins / 60);
                var seconds = this.secondsLeft % 60;
                var hourString = (hours > 1) ? strings.hours : strings.hour;
                var minuteString = (minutes > 1) ? strings.minutes : strings.minute;
                var secondString = (seconds > 1) ? strings.seconds : strings.second;
                var seperatorString = strings.timeSeperator;
                var andString = strings.and;
                var countdownText;
                if (hours > 0 && minutes > 0) {
                    if (showAndInCountDown) {
                        countdownText = hours + seperatorString + hourString + seperatorString + andString + seperatorString + minutes + seperatorString + minuteString;
                    } else {
                        countdownText = hours + seperatorString + hourString + seperatorString + minutes + seperatorString + minuteString;
                    }
                } else if (hours > 0 && minutes == 0) {
                    countdownText = hours + seperatorString + hourString;
                } else if (hours == 0 && minutes > 0) {
                    countdownText = minutes + seperatorString + minuteString;
                } else {
                    countdownText = seconds + seperatorString + secondString;
                }
                $(countdownElementId).html(countdownText);
            } else {
                this.stop();
                var refreshText = "<a href='/gp/product/" + asin + "'>" + strings.refreshTimeout + "</a>";
                $(shippingMessageSectionId).html(refreshText);
            }
        };
    };
});

var context = {
    strings: {
        day: "día",
        days: "días",
        hour: "hr",
        hours: "hrs",
        minute: "min",
        minutes: "mins",
        second: "",
        seconds: "segs",
        refreshTimeout: "Haz clic aquí para una nueva fecha estimada de entrega.",
        timeSeperator: " ",
        and: "y",
        serverBusy: "Lo sentimos, el servidor está momentáneamente fuera de servicio. Por favor inténtalo de nuevo más tarde."
    },
    fastCountdownElementId: "#ddmFastestCountdown",
    cheapCountdownElementId: null,
    shippingMessageSectionId: "#ddmDeliveryMessage",
    asin: "B07PVCVBN7",
    showAndInCountDown: true
};
P.when("A", "jQuery").execute(function(A, $) {
    var showVhvFeature = function() {
        $("#veryHighValueMessage").removeClass("a-hidden");
    };
    var hideVhvFeature = function() {
        $("#veryHighValueMessage").addClass("a-hidden");
    };
    P.when("DDMCountdownComponent").execute(function(countDownComp) {
        countDownComp.init(context);
        countDownComp.start(24360, 0);
    });
    if (true) {
        showVhvFeature();
    } else {
        hideVhvFeature();
    }
});

setCSMReq('af');
if (typeof addlongPoleTag === 'function') {
    addlongPoleTag('af', 'desktop-html-atf-marker');
}
if (window.ue) {
    ue.count("dp_aib_centerCol_height", document.getElementById('centerCol').clientHeight);
}

P.register('twister-js-init-dpx-data', function() {
    var dataToReturn = {
        "dimensionsDisplayType": [
            "singleton",
        ],
        "pwEnabledDimensionMap": {
            "style_name": false
        },
        "isPWBadgeEnabled": false,
        "isImmersiveExperience": false,
        "isTabletWeb": false,
        "immersiveBannersPresent": true,
        "immersivePartialStateMessage": "",
        "immersiveFullySelectedStateMessage": "",
        "multiDimensionWeblabEnabled": false,
        "dimensionSelectionData": [{
            "isSelected": 1,
            "isRequired": 0
        }],
        "updateDivLists": {
            "full": [{
                "updateOnHover": 0,
                "divToUpdate": "makoEmergencyFixAtf_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfTop1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfTop2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "instantOrderUpdate_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfTop3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfTop4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "companyCompliancePolicies_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfLeft1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfLeft2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "thumbs-image",
                "customClientFunction": 1,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 1,
                "divToUpdate": "twister-main-image",
                "customClientFunction": 1,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfLeft3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfLeft4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "alexaInteractionCannedPpdLeft_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "title_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "bylineInfo_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "averageCustomerReviews_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "ask_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "primeExclusiveBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "acBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "sharkBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "zeitgeistBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "unifiedPrice_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "customPriceMessaging_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "pmpux_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "issuancePriceblockAmabot_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "alternativeOfferEligibilityMessaging_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "promiseBasedBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter5_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter6_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "availability_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "holidayDeliveryMessage_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "dynamicDeliveryMessage_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "shipsFromSoldBy_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "amazonDeviceAdditionalAvailabilityMessaging_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "holidayAvailabilityMessage_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter7_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter8_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "olpPocs_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "alexaInteractionCannedAtfCenter_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "specialOffersInformation_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "clickToContact_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter9_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter10_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "extendWhatYouOwn_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "smartHomeWidget_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "valuePick_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "featurebullets_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 1
            }, {
                "updateOnHover": 0,
                "divToUpdate": "jumpLinks_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter11_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter12_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "addOnItem_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "andonCord_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter13_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter14_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "ageWarning_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "newerVersion_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "whiteGloveMessage_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter15_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter16_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "tellAFriendBox_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "buybox_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "olpLinkWidget_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "buyBoxUpsell_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "accessoryUpsell_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "upsellModuleExecutor_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "pocs_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "moreBuyingChoicesPocs_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight5_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight6_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfBottom1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfBottom2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "bundle_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfBottom3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfBottom4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "bundleV2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "legal_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "smartHomeBtfHub_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "aplus_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "aplus3p_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "ajaxBlockComponents_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "contentGrid_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent5_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent5_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent6_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent7_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent8_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent9_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent10_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent11_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent12_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent13_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent14_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent15_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent16_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent17_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent18_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent19_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent20_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent21_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent22_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent23_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent24_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent25_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent26_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent27_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent28_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent29_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent30_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent31_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent32_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent33_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent34_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent35_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent36_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent37_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent38_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent39_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent40_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent41_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent42_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent43_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent44_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent45_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent46_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent47_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent48_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent49_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent50_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent51_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent52_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent53_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent54_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent55_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent56_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent57_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent58_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent59_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent60_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent61_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent62_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent63_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent64_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent65_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "makoEmergencyFix_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }],
            "partial": [{
                "updateOnHover": 0,
                "divToUpdate": "thumbs-image",
                "customClientFunction": 1,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 1,
                "divToUpdate": "twister-main-image",
                "customClientFunction": 1,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "zeitgeistBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "specialOffersInformation_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "tellAFriendBox_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "legal_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "ajaxBlockComponents_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }],
            "parent": [{
                "updateOnHover": 0,
                "divToUpdate": "makoEmergencyFixAtf_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfTop1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfTop2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "instantOrderUpdate_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfTop3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfTop4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "companyCompliancePolicies_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfLeft1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfLeft2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfLeft3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfLeft4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "alexaInteractionCannedPpdLeft_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "title_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "bylineInfo_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "averageCustomerReviews_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "ask_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "primeExclusiveBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "acBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "sharkBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "unifiedPrice_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "customPriceMessaging_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "pmpux_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "issuancePriceblockAmabot_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "alternativeOfferEligibilityMessaging_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "promiseBasedBadge_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter5_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter6_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "availability_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "holidayDeliveryMessage_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "dynamicDeliveryMessage_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "shipsFromSoldBy_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "amazonDeviceAdditionalAvailabilityMessaging_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "holidayAvailabilityMessage_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter7_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter8_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "olpPocs_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "alexaInteractionCannedAtfCenter_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "clickToContact_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter9_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter10_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "extendWhatYouOwn_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "smartHomeWidget_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "valuePick_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "featurebullets_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 1
            }, {
                "updateOnHover": 0,
                "divToUpdate": "jumpLinks_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter11_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter12_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "addOnItem_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "andonCord_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter13_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter14_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "ageWarning_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "newerVersion_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "whiteGloveMessage_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter15_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfCenter16_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "buybox_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "olpLinkWidget_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "buyBoxUpsell_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "accessoryUpsell_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "upsellModuleExecutor_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "pocs_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "moreBuyingChoicesPocs_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight5_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfRight6_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfBottom1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfBottom2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "bundle_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfBottom3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfBottom4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "bundleV2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "smartHomeBtfHub_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "aplus_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "aplus3p_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "contentGrid_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "atfContent5_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent1_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent2_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent3_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent4_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent5_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent6_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent7_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent8_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent9_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent10_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent11_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent12_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent13_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent14_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent15_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent16_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent17_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent18_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent19_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent20_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent21_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent22_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent23_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent24_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent25_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent26_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent27_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent28_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent29_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent30_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent31_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent32_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent33_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent34_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent35_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent36_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent37_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent38_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent39_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent40_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent41_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent42_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent43_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent44_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent45_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent46_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent47_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent48_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent49_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent50_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent51_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent52_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent53_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent54_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent55_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent56_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent57_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent58_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent59_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent60_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent61_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent62_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent63_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent64_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "btfContent65_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }, {
                "updateOnHover": 0,
                "divToUpdate": "makoEmergencyFix_feature_div",
                "customClientFunction": 0,
                "isPrefetchable": 1,
                "loadingBar": 0
            }],
            "master": []
        },
        "dpEnvironment": "hardlines",
        "ajaxUrlParams": "&productTypeDefinition=DIGITAL_DEVICE_4&productGroupId=amazon_smp_display_on_website&parentAsin=B07X2YMW9G&isPrime=1&isOneClickEnabled=0",
        "isImmersiveViewEnabled": false,
        "isImmersiveViewEnabledOnDim": [
            false,
        ],
        "isSlotsEnabled": [
            false,
        ],
        "maxSwatchesForImmersiveView": [0, ],
        "dimensionsDisplaySubType": ["", ],
        "singletonDimensionKeys": ["style_name"],
        "twisterUpdateURLAppend": {},
        "displayTypeProperties": [{}],
        "shouldUseDPXTwisterData": 1,
        "currentAsin": "B07PVCVBN7",
        "parentAsin": "B07X2YMW9G",
        "dimensionToAsinMap": {
            "0": "B07PVCVBN7"
        },
        "variationValues": {
            "style_name": ["Fire TV Stick"]
        },
        "asinVariationValues": {
            "B07PVCVBN7": {
                "ASIN": "B07PVCVBN7",
                "style_name": "0"
            }
        },
        "dimensionValuesData": [
            ["Fire TV Stick"]
        ],
        "asinToDimensionIndexMap": {
            "B07PVCVBN7": [0]
        },
        "selectedVariationValues": {
            "style_name": 0
        },
        "reactId": "0",
        "currentDimensionCombinationId": "0",
        "deletedLandingAsinInfo": {
            "dimValues": ["Please Select"],
            "asin": "B07PVCVBN7"
        },
        "num_total_variations": 1,
        "dimensions": ["style_name"],
        "unselectedDimCount": 0,
        "selected_variations": {
            "style_name": "Fire TV Stick"
        },
        "dimensionValuesDisplayData": {
            "B07PVCVBN7": ["Fire TV Stick"]
        },
        "prioritizeReqPrefetch": 0,
        "num_variation_dimensions": 1,
        "num_total_variations": 1,
        "dimensionsDisplay": ["Nombre de estilo"],
        "variationDisplayLabels": {
            "style_name": "Nombre de estilo"
        },
        "dimensionHierarchyData": [0],
        "topHierarchicalDimensionIndex": {},
        "hierarchicalPivoting": false,
        "isIconPresentForDimensionValue": [
            [0]
        ]
    };
    return dataToReturn;
});

P.when('jQuery').register('ImageBlockBTF', function(jQuery) {
    if (window.performance && performance.now && window.ue && ue.count) {
        ue.count('DPIBBTFRegisterTime', window.parseInt(performance.now()));
    }
    var data = {};
    var obj = jQuery.parseJSON('{"dataInJson":null,"alwaysIncludeVideo":true,"autoplayVideo":false,"defaultColor":"initial","mainImageSizes":[["355","355"],["450","450"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]],"maxAlts":7,"altsOnLeft":true,"productGroupID":"amazon_smp_display_on_website","lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"useChromelessVideoPlayer":false,"colorToAsin":{"Fire TV Stick":{"asin":"B07PVCVBN7"}},"refactorEnabled":true,"useIV":true,"tabletWeb":false,"views":["ImageBlockMagnifierView","ImageBlockAltImageView","ImageBlockVideoView","ImageBlockTwisterView","ImageBlockImmersiveViewImages","ImageBlockImmersiveViewVideos","ImageBlockImmersiveView360","ImageBlockTabbedImmersiveView"],"enhancedHoverOverlay":false,"landingAsinColor":"Fire TV Stick","colorImages":{"Fire TV Stick":[{"large":"https://images-na.ssl-images-amazon.com/images/I/51xX9%2B33enL._AC_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xX9%2B33enL._AC_US40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SL1500_.jpg","variant":"LEFT","main":{"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/81mHCOq5vqL._AC_SX522_.jpg":["522","522"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/31uYRbHGk3L._AC_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/31uYRbHGk3L._AC_US40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SL1500_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SX679_.jpg":["679","679"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/41q5ws%2BOwNL._AC_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41q5ws%2BOwNL._AC_US40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SL1500_.jpg","variant":"PT01","main":{"https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71K6IZt-MsL._AC_SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51eab8AoMtL._AC_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51eab8AoMtL._AC_US40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SL1500_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/81-NOvh9WDL._AC_SY450_.jpg":["450","450"]}}]},"heroImages":{"Fire TV Stick":[]},"enable360Map":{},"staticImages":{"hoverZoomIcon":null,"zoomLensBackground":"https://images-na.ssl-images-amazon.com/images/G/30/apparel/rcxgs/tile._CB483369954_.gif","zoomInCur":"https://images-na.ssl-images-amazon.com/images/G/30/detail-page/cursors/zoomIn._CB271900056_.cur","arrow":"https://images-na.ssl-images-amazon.com/images/G/30/javascripts/lib/popover/images/light/sprite-vertical-popover-arrow._CB150740342_.png","zoomIn":"https://images-na.ssl-images-amazon.com/images/G/30/detail-page/cursors/zoom-in._CB150737508_.bmp","zoomOut":"https://images-na.ssl-images-amazon.com/images/G/30/detail-page/cursors/zoom-out._CB150737508_.bmp","videoThumbIcon":"https://images-na.ssl-images-amazon.com/images/G/30/Quarterdeck/en_US/images/video._CB342681680_SS40_.gif","spinnerNoLabel":"https://images-na.ssl-images-amazon.com/images/G/30/ui/loadIndicators/loading-large._CB181118334_.gif","zoomOutCur":"https://images-na.ssl-images-amazon.com/images/G/30/detail-page/cursors/zoomOut._CB271900059_.cur","videoSWFPath":null,"grabbing":"https://images-na.ssl-images-amazon.com/images/G/30/HomeCustomProduct/grabbingbox._CB498022716_.cur","icon360":"https://images-na.ssl-images-amazon.com/images/G/30/HomeCustomProduct/360_icon_73x73v2._CB498022716_SS40_.png","grab":"https://images-na.ssl-images-amazon.com/images/G/30/HomeCustomProduct/grabbox._CB498022716_.cur","spinner":"https://images-na.ssl-images-amazon.com/images/G/30/ui/loadIndicators/loading-large_labeled._CB148490224_.gif"},"staticStrings":{"images":"Imágenes","watchMoreVideos":"Haz clic para ver más vídeos.","allMedia":"Todos los medios","dragToSpin":"Arrastrar para girar","videos":"Vídeos","video":"vídeo","rollOverToZoom":"Pasa el ratón por encima de la imagen para ampliarla","clickToExpand":"Haz clic para obtener una vista ampliada","playVideo":"Haz clic para reproducir el vídeo","touchToZoom":"Toque la imagen para ampliarla","multipleVideos":"VÍDEOS","singleVideo":"VÍDEO","pleaseSelect":"Selecciona","close":"Cerrar","clickToZoom":"Haga clic en la imagen para ampliarla con zoom"},"useChildVideos":true,"useClickZoom":false,"useHoverZoom":true,"useHoverZoomIpad":false,"visualDimensions":["style_name"],"mainImageHeightPartitions":null,"mainImageMaxSizes":null,"heroFocalPoint":null,"showMagnifierOnHover":false,"disableHoverOnAltImages":false,"overrideAltImageClickAction":false,"naturalMainImageSize":null,"imgTagWrapperClasses":null,"prioritizeVideos":false,"usePeekHover":false,"fadeMagnifier":false,"repositionHeroImage":false,"heroVideoVariant":null,"videos":[],"title":"Amazon Fire TV Stick con mando por voz Alexa | Reproductor de contenido multimedia en streaming","airyConfigEnabled":false,"airyConfig":null,"vseVideoDataSourceTreatment":"C","mediaAsin":"B07PVCVBN7","largeSCLVideoThumbnail":false,"displayVideoBanner":false,"useVSEVideos":false,"useTabbedImmersiveView":true,"dpRequestId":"E81T54FVZ2MDMD0N7JR7","dp60VideoThumbMap":null}');
    data["alwaysIncludeVideo"] = obj.alwaysIncludeVideo ? 1 : 0;
    data["autoplayVideo"] = obj.autoplayVideo ? 1 : 0;
    data["defaultColor"] = obj.defaultColor;
    data["maxAlts"] = obj.maxAlts;
    data["altsOnLeft"] = obj.altsOnLeft;
    data["newVideoMissing"] = obj.newVideoMissing;
    data["lazyLoadExperienceDisabled"] = obj.lazyLoadExperienceDisabled;
    data["lazyLoadExperienceOnHoverDisabled"] = obj.lazyLoadExperienceOnHoverDisabled;
    data["useChromelessVideoPlayer"] = obj.useChromelessVideoPlayer ? 1 : 0;
    data["colorToAsin"] = obj.colorToAsin;
    data["ivRepresentativeAsin"] = obj.ivRepresentativeAsin;
    data["ivImageSetKeys"] = obj.ivImageSetKeys;
    data["useIV"] = obj.useIV ? 1 : 0;
    data["tabletWeb"] = obj.tabletWeb ? 1 : 0;
    data["views"] = obj.views;
    data["enhancedHoverOverlay"] = obj.enhancedHoverOverlay;
    data["landingAsinColor"] = obj.landingAsinColor;
    data["colorImages"] = obj.colorImages;
    data["heroImage"] = obj.heroImages;
    data["spin360ColorEnabled"] = obj.enable360Map;
    data["staticImages"] = obj.staticImages;
    data["staticStrings"] = obj.staticStrings;
    data["useChildVideos"] = obj.useChildVideos ? 1 : 0;
    data["useClickZoom"] = obj.useClickZoom ? 1 : 0;
    data["useHoverZoom"] = obj.useHoverZoom ? 1 : 0;
    data["useHoverZoomIpad"] = obj.useHoverZoomIpad ? 1 : 0;
    data["visualDimensions"] = obj.visualDimensions;
    data["isLargeSCLVideoThumbnail"] = obj.largeSCLVideoThumbnail;
    data["mainImageSizes"] = obj.mainImageSizes;
    data["displayVideoBanner"] = obj.displayVideoBanner;
    data["mainImageHeightPartitions"] = obj.mainImageHeightPartitions;
    data["mainImageMaxSizes"] = obj.mainImageMaxSizes;
    data["heroFocalPoint"] = obj.heroFocalPoint;
    data["showMagnifierOnHover"] = obj.showMagnifierOnHover ? 1 : 0;
    data["disableHoverOnAltImages"] = obj.disableHoverOnAltImages ? 1 : 0;
    data["overrideAltImageClickAction"] = obj.overrideAltImageClickAction ? 1 : 0;
    data["naturalMainImageSize"] = obj.naturalMainImageSize;
    data["imgTagWrapperClasses"] = obj.imgTagWrapperClasses;
    data["prioritizeVideos"] = obj.prioritizeVideos;
    data["usePeekHover"] = obj.usePeekHover;
    data["fadeMagnifier"] = obj.fadeMagnifier;
    data["repositionHeroImage"] = obj.repositionHeroImage;
    data["heroVideoVariant"] = obj.heroVideoVariant;
    data["videos"] = obj.videos;
    data["productGroupID"] = obj.productGroupID;
    data["title"] = obj.title;
    data["airyConfigEnabled"] = obj.airyConfigEnabled;
    if (obj.airyConfigEnabled) {
        data["airyConfig"] = obj.airyConfig;
    }
    data["isDPXFeatureEnabled"] = true;
    data["useTabbedImmersiveView"] = obj.useTabbedImmersiveView;
    data["vseVideoDataSourceTreatment"] = obj.vseVideoDataSourceTreatment;
    data["useVSEVideos"] = obj.useVSEVideos;
    data["dpRequestId"] = obj.dpRequestId;
    data["mediaAsin"] = obj.mediaAsin;
    data["dp60VideoThumbMap"] = obj.dp60VideoThumbMap;
    return data;
});

(function(f) {
    var _np = (window.P._namespace("AskAuiAssets"));
    if (_np.guardFatal) {
        _np.guardFatal(f)(_np);
    } else {
        f(_np);
    }
}(function(P) {
    window.P && P.when('jQuery', 'ready').execute(function($) {
        var btf = $('#ask-btf_feature_div');
        if ($('html').is('.a-lt-ie10')) {
            var assetsLink = btf.find('link').attr('href');
            document.styleSheets[document.styleSheets.length - 1].addImport(assetsLink);
        } else {
            btf.find('script, link').appendTo('head');
        }
        var atf = $('.askATFLink');
        atf.attr("href", "#Ask");
    });
}));

(function(f) {
    var _np = (window.P._namespace("AskAuiAssets"));
    if (_np.guardFatal) {
        _np.guardFatal(f)(_np);
    } else {
        f(_np);
    }
}(function(P) {
    (function(P) {
        P.when("jQuery").execute(function($) {
            "use strict";
            $('.cdQuestionAnswerBucket').height(432);
        });
    })(window.AmazonUIPageJS || window.P);
}));

P.when("jQuery", "lazyLoadLib", "ready").execute(function($) {
    $('#ask_lazy_load_div').lazyLoadContent({
        threshold: 800,
        url: "/gp/ask-widget/askWidget.html?asin=B07PVCVBN7&askError=&askMessage=&wdg=amazon_smp_display_on_website&askLanguage=&requestID=E81T54FVZ2MDMD0N7JR7",
        metrics: true,
        name: 'ask_btf',
        cache: false
    });
});

var isAUI = typeof P === 'object' && typeof P.when === 'function';
if (typeof setCSMReq == 'function') {
    setCSMReq('cf');
} else {
    if (typeof uet == 'function') {
        uet('cf');
    }
    if (isAUI) {
        P.trigger("cf");
    } else {
        amznJQ.completedStage('amznJQ.criticalFeature');
    }
}

(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('cf').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/21q6fNgsQrL._RC|21XJFDMQuNL.js,11OyIHCq0lL.js_.js?AUIClients/HardlinesFeatureDetailPageMetaAsset');
});
if (typeof P !== "undefined" && typeof P.when === "function") {
    P.when('cf').execute(function() {
        P.when('search-js-jq').execute(function() {});
        P.when('amazonShoveler').execute(function() {});
        P.when('simsJS').execute(function() {});
        P.when('cmuAnnotations').execute(function() {});
        P.when('externalJS.tagging').execute(function() {});
        P.when('amzn-ratings-bar').execute(function() {});
        P.when('accessoriesJS').execute(function() {});
        P.when('priceformatterJS').execute(function() {});
        P.when('CustomerPopover').execute(function() {});
    });
}

var cloudfrontImg = new Image();
var shouldExecuteOnload = ("1" == "1");
if (shouldExecuteOnload) {
    if (window.addEventListener) {
        window.addEventListener("load", function() {
            setTimeout(function() {
                cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png";
            }, 400);
        }, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", function() {
            setTimeout(function() {
                cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png";
            }, 400);
        });
    }
} else {
    setTimeout(function() {
        cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png";
    }, 400);
}

var isAUI = typeof P === 'object' && typeof P.when === 'function';
if (typeof setCSMReq == 'function') {
    setCSMReq('cf');
} else {
    if (typeof uet == 'function') {
        uet('cf');
    }
    if (isAUI) {
        P.trigger("cf");
    } else {
        amznJQ.completedStage('amznJQ.criticalFeature');
    }
}

P.register('page-refresh-js-init-mason-data', function() {
    var dataToReturn = {
        "divToUpdateData": {
            "twister": {
                "btf-content-3-m": {
                    "divToUpdate": "btf-content-3-m_feature_div"
                },
                "center-37": {
                    "divToUpdate": "center-37_feature_div"
                },
                "btf-content-44-m": {
                    "divToUpdate": "btf-content-44-m_feature_div"
                },
                "center-14": {
                    "divToUpdate": "center-14_feature_div"
                },
                "center-37-3": {
                    "divToUpdate": "center-37-3_feature_div"
                },
                "btf-content-27": {
                    "divToUpdate": "btf-content-27_feature_div"
                },
                "center-92": {
                    "divToUpdate": "center-92_feature_div"
                },
                "center-27-0": {
                    "divToUpdate": "center-27-0_feature_div"
                },
                "btf-center-20": {
                    "divToUpdate": "btf-center-20_feature_div"
                },
                "center-21-2": {
                    "divToUpdate": "center-21-2_feature_div"
                },
                "btf-content-16-m": {
                    "divToUpdate": "btf-content-16-m_feature_div"
                },
                "btf-content-23": {
                    "divToUpdate": "btf-content-23_feature_div"
                },
                "center-17": {
                    "divToUpdate": "center-17_feature_div"
                },
                "btf-content-58": {
                    "divToUpdate": "btf-content-58_feature_div"
                },
                "btf-content-2": {
                    "divToUpdate": "btf-content-2_feature_div"
                },
                "center-26-3": {
                    "divToUpdate": "center-26-3_feature_div"
                },
                "btf-content-22-m": {
                    "divToUpdate": "btf-content-22-m_feature_div"
                },
                "btf-center-6": {
                    "divToUpdate": "btf-center-6_feature_div"
                },
                "center-29-3": {
                    "divToUpdate": "center-29-3_feature_div"
                },
                "center-20-0": {
                    "divToUpdate": "center-20-0_feature_div"
                },
                "center-13-1": {
                    "divToUpdate": "center-13-1_feature_div"
                },
                "dpx-legal": {
                    "divToUpdate": "dpx-legal_feature_div"
                },
                "ask-btf": {
                    "divToUpdate": "ask-btf_feature_div"
                },
                "btf-content-31-m": {
                    "divToUpdate": "btf-content-31-m_feature_div"
                },
                "btf-content-22": {
                    "divToUpdate": "btf-content-22_feature_div"
                },
                "btf-content-6-m": {
                    "divToUpdate": "btf-content-6-m_feature_div"
                },
                "center-39-2": {
                    "divToUpdate": "center-39-2_feature_div"
                },
                "center-31-2": {
                    "divToUpdate": "center-31-2_feature_div"
                },
                "btf-content-7": {
                    "divToUpdate": "btf-content-7_feature_div"
                },
                "center-25": {
                    "divToUpdate": "center-25_feature_div"
                },
                "dpx-family-stripe": {
                    "divToUpdate": "dpx-family-stripe_feature_div"
                },
                "center-26-2": {
                    "divToUpdate": "center-26-2_feature_div"
                },
                "center-28-3": {
                    "divToUpdate": "center-28-3_feature_div"
                },
                "center-20": {
                    "divToUpdate": "center-20_feature_div"
                },
                "btf-content-45": {
                    "divToUpdate": "btf-content-45_feature_div"
                },
                "center-17-2": {
                    "divToUpdate": "center-17-2_feature_div"
                },
                "center-24-3": {
                    "divToUpdate": "center-24-3_feature_div"
                },
                "center-18-3": {
                    "divToUpdate": "center-18-3_feature_div"
                },
                "btf-content-38": {
                    "divToUpdate": "btf-content-38_feature_div"
                },
                "btf-content-47": {
                    "divToUpdate": "btf-content-47_feature_div"
                },
                "center-35-3": {
                    "divToUpdate": "center-35-3_feature_div"
                },
                "center-29": {
                    "divToUpdate": "center-29_feature_div"
                },
                "btf-content-54-m": {
                    "divToUpdate": "btf-content-54-m_feature_div"
                },
                "btf-content-33": {
                    "divToUpdate": "btf-content-33_feature_div"
                },
                "accessory-popover-5": {
                    "divToUpdate": "accessory-popover-5_feature_div"
                },
                "btf-content-48-m": {
                    "divToUpdate": "btf-content-48-m_feature_div"
                },
                "btf-content-9-m": {
                    "divToUpdate": "btf-content-9-m_feature_div"
                },
                "center-27-2": {
                    "divToUpdate": "center-27-2_feature_div"
                },
                "btf-content-32": {
                    "divToUpdate": "btf-content-32_feature_div"
                },
                "btf-content-59-m": {
                    "divToUpdate": "btf-content-59-m_feature_div"
                },
                "btf-content-44": {
                    "divToUpdate": "btf-content-44_feature_div"
                },
                "btf-center-19": {
                    "divToUpdate": "btf-center-19_feature_div"
                },
                "btf-content-5-m": {
                    "divToUpdate": "btf-content-5-m_feature_div"
                },
                "center-41-2": {
                    "divToUpdate": "center-41-2_feature_div"
                },
                "center-22": {
                    "divToUpdate": "center-22_feature_div"
                },
                "center-40-3": {
                    "divToUpdate": "center-40-3_feature_div"
                },
                "btf-content-45-m": {
                    "divToUpdate": "btf-content-45-m_feature_div"
                },
                "dvd-rental-badge": {
                    "divToUpdate": "dvd-rental-badge_feature_div"
                },
                "btf-content-39-m": {
                    "divToUpdate": "btf-content-39-m_feature_div"
                },
                "btf-content-63-m": {
                    "divToUpdate": "btf-content-63-m_feature_div"
                },
                "btf-content-40": {
                    "divToUpdate": "btf-content-40_feature_div"
                },
                "andon-cord-pulling": {
                    "divToUpdate": "andon-cord-pulling_feature_div"
                },
                "center-40-0": {
                    "divToUpdate": "center-40-0_feature_div"
                },
                "btf-center-3": {
                    "divToUpdate": "btf-center-3_feature_div"
                },
                "center-43-0": {
                    "divToUpdate": "center-43-0_feature_div"
                },
                "center-19-0": {
                    "divToUpdate": "center-19-0_feature_div"
                },
                "center-32-2": {
                    "divToUpdate": "center-32-2_feature_div"
                },
                "center-90": {
                    "divToUpdate": "center-90_feature_div"
                },
                "center-24-1": {
                    "divToUpdate": "center-24-1_feature_div"
                },
                "btf-content-18": {
                    "divToUpdate": "btf-content-18_feature_div"
                },
                "btf-content-61-m": {
                    "divToUpdate": "btf-content-61-m_feature_div"
                },
                "center-85": {
                    "divToUpdate": "center-85_feature_div"
                },
                "center-30": {
                    "divToUpdate": "center-30_feature_div"
                },
                "center-16-0": {
                    "divToUpdate": "center-16-0_feature_div"
                },
                "btf-center-11": {
                    "divToUpdate": "btf-center-11_feature_div"
                },
                "center-36-0": {
                    "divToUpdate": "center-36-0_feature_div"
                },
                "btf-content-10-m": {
                    "divToUpdate": "btf-content-10-m_feature_div"
                },
                "center-89": {
                    "divToUpdate": "center-89_feature_div"
                },
                "center-22-3": {
                    "divToUpdate": "center-22-3_feature_div"
                },
                "accessory-popover-1": {
                    "divToUpdate": "accessory-popover-1_feature_div"
                },
                "btf-content-13": {
                    "divToUpdate": "btf-content-13_feature_div"
                },
                "btf-content-15-m": {
                    "divToUpdate": "btf-content-15-m_feature_div"
                },
                "center-33": {
                    "divToUpdate": "center-33_feature_div"
                },
                "center-42-0": {
                    "divToUpdate": "center-42-0_feature_div"
                },
                "btf-content-62-m": {
                    "divToUpdate": "btf-content-62-m_feature_div"
                },
                "btf-content-29": {
                    "divToUpdate": "btf-content-29_feature_div"
                },
                "btf-content-60": {
                    "divToUpdate": "btf-content-60_feature_div"
                },
                "twister-cf-marker": {
                    "divToUpdate": "twister-cf-marker_feature_div"
                },
                "btf-content-46-m": {
                    "divToUpdate": "btf-content-46-m_feature_div"
                },
                "center-27-1": {
                    "divToUpdate": "center-27-1_feature_div"
                },
                "btf-content-20-m": {
                    "divToUpdate": "btf-content-20-m_feature_div"
                },
                "btf-content-40-m": {
                    "divToUpdate": "btf-content-40-m_feature_div"
                },
                "btf-content-53-m": {
                    "divToUpdate": "btf-content-53-m_feature_div"
                },
                "center-36-2": {
                    "divToUpdate": "center-36-2_feature_div"
                },
                "center-21-3": {
                    "divToUpdate": "center-21-3_feature_div"
                },
                "btf-content-57-m": {
                    "divToUpdate": "btf-content-57-m_feature_div"
                },
                "btf-content-6": {
                    "divToUpdate": "btf-content-6_feature_div"
                },
                "btf-content-14": {
                    "divToUpdate": "btf-content-14_feature_div"
                },
                "btf-center-23": {
                    "divToUpdate": "btf-center-23_feature_div"
                },
                "center-39-0": {
                    "divToUpdate": "center-39-0_feature_div"
                },
                "center-22-2": {
                    "divToUpdate": "center-22-2_feature_div"
                },
                "center-36-1": {
                    "divToUpdate": "center-36-1_feature_div"
                },
                "center-34": {
                    "divToUpdate": "center-34_feature_div"
                },
                "btf-center-7": {
                    "divToUpdate": "btf-center-7_feature_div"
                },
                "accessory-popover-2": {
                    "divToUpdate": "accessory-popover-2_feature_div"
                },
                "btf-content-50-m": {
                    "divToUpdate": "btf-content-50-m_feature_div"
                },
                "btf-content-17-m": {
                    "divToUpdate": "btf-content-17-m_feature_div"
                },
                "center-31-1": {
                    "divToUpdate": "center-31-1_feature_div"
                },
                "btf-content-32-m": {
                    "divToUpdate": "btf-content-32-m_feature_div"
                },
                "center-37-2": {
                    "divToUpdate": "center-37-2_feature_div"
                },
                "center-19-3": {
                    "divToUpdate": "center-19-3_feature_div"
                },
                "center-31": {
                    "divToUpdate": "center-31_feature_div"
                },
                "btf-content-64-m": {
                    "divToUpdate": "btf-content-64-m_feature_div"
                },
                "center-19": {
                    "divToUpdate": "center-19_feature_div"
                },
                "listmania-center": {
                    "divToUpdate": "listmania-center_feature_div"
                },
                "center-30-0": {
                    "divToUpdate": "center-30-0_feature_div"
                },
                "btf-content-30-m": {
                    "divToUpdate": "btf-content-30-m_feature_div"
                },
                "btf-content-19-m": {
                    "divToUpdate": "btf-content-19-m_feature_div"
                },
                "btf-center-4": {
                    "divToUpdate": "btf-center-4_feature_div"
                },
                "center-34-1": {
                    "divToUpdate": "center-34-1_feature_div"
                },
                "btf-content-57": {
                    "divToUpdate": "btf-content-57_feature_div"
                },
                "btf-content-46": {
                    "divToUpdate": "btf-content-46_feature_div"
                },
                "btf-content-23-m": {
                    "divToUpdate": "btf-content-23-m_feature_div"
                },
                "qpe-title-tag": {
                    "divToUpdate": "qpe-title-tag_feature_div"
                },
                "twister-atf-marker": {
                    "divToUpdate": "twister-atf-marker_feature_div"
                },
                "btf-content-65-m": {
                    "divToUpdate": "btf-content-65-m_feature_div"
                },
                "hero-quick-promo-grid": {
                    "divToUpdate": "hero-quick-promo-grid_feature_div"
                },
                "btf-content-61": {
                    "divToUpdate": "btf-content-61_feature_div"
                },
                "btf-content-12-m": {
                    "divToUpdate": "btf-content-12-m_feature_div"
                },
                "center-29-2": {
                    "divToUpdate": "center-29-2_feature_div"
                },
                "center-38-2": {
                    "divToUpdate": "center-38-2_feature_div"
                },
                "center-15-0": {
                    "divToUpdate": "center-15-0_feature_div"
                },
                "center-21": {
                    "divToUpdate": "center-21_feature_div"
                },
                "center-17-0": {
                    "divToUpdate": "center-17-0_feature_div"
                },
                "center-23-1": {
                    "divToUpdate": "center-23-1_feature_div"
                },
                "center-28-2": {
                    "divToUpdate": "center-28-2_feature_div"
                },
                "dpx-image-block-variations": {
                    "divToUpdate": "dpx-image-block-variations_feature_div"
                },
                "center-25-0": {
                    "divToUpdate": "center-25-0_feature_div"
                },
                "btf-content-41": {
                    "divToUpdate": "btf-content-41_feature_div"
                },
                "btf-center-22": {
                    "divToUpdate": "btf-center-22_feature_div"
                },
                "center-17-3": {
                    "divToUpdate": "center-17-3_feature_div"
                },
                "center-41-3": {
                    "divToUpdate": "center-41-3_feature_div"
                },
                "center-33-1": {
                    "divToUpdate": "center-33-1_feature_div"
                },
                "btf-content-8-m": {
                    "divToUpdate": "btf-content-8-m_feature_div"
                },
                "center-40-2": {
                    "divToUpdate": "center-40-2_feature_div"
                },
                "btf-content-34": {
                    "divToUpdate": "btf-content-34_feature_div"
                },
                "btf-center-14": {
                    "divToUpdate": "btf-center-14_feature_div"
                },
                "center-19-2": {
                    "divToUpdate": "center-19-2_feature_div"
                },
                "dp-fast-track-logger": {
                    "divToUpdate": "dp-fast-track-logger_feature_div"
                },
                "center-18-0": {
                    "divToUpdate": "center-18-0_feature_div"
                },
                "btf-content-21": {
                    "divToUpdate": "btf-content-21_feature_div"
                },
                "center-25-1": {
                    "divToUpdate": "center-25-1_feature_div"
                },
                "center-88": {
                    "divToUpdate": "center-88_feature_div"
                },
                "center-39-3": {
                    "divToUpdate": "center-39-3_feature_div"
                },
                "center-41": {
                    "divToUpdate": "center-41_feature_div"
                },
                "btf-content-37-m": {
                    "divToUpdate": "btf-content-37-m_feature_div"
                },
                "btf-content-56": {
                    "divToUpdate": "btf-content-56_feature_div"
                },
                "btf-content-5": {
                    "divToUpdate": "btf-content-5_feature_div"
                },
                "center-20-1": {
                    "divToUpdate": "center-20-1_feature_div"
                },
                "center-43-1": {
                    "divToUpdate": "center-43-1_feature_div"
                },
                "center-24-2": {
                    "divToUpdate": "center-24-2_feature_div"
                },
                "btf-center-18": {
                    "divToUpdate": "btf-center-18_feature_div"
                },
                "btf-content-1": {
                    "divToUpdate": "btf-content-1_feature_div"
                },
                "btf-content-25": {
                    "divToUpdate": "btf-content-25_feature_div"
                },
                "btf-content-4-m": {
                    "divToUpdate": "btf-content-4-m_feature_div"
                },
                "btf-center-9": {
                    "divToUpdate": "btf-center-9_feature_div"
                },
                "accessory-popover-9": {
                    "divToUpdate": "accessory-popover-9_feature_div"
                },
                "center-21-0": {
                    "divToUpdate": "center-21-0_feature_div"
                },
                "center-32-1": {
                    "divToUpdate": "center-32-1_feature_div"
                },
                "btf-content-52": {
                    "divToUpdate": "btf-content-52_feature_div"
                },
                "center-93": {
                    "divToUpdate": "center-93_feature_div"
                },
                "btf-content-26-m": {
                    "divToUpdate": "btf-content-26-m_feature_div"
                },
                "btf-content-21-m": {
                    "divToUpdate": "btf-content-21-m_feature_div"
                },
                "center-80": {
                    "divToUpdate": "center-80_feature_div"
                },
                "twister-log-metrics": {
                    "divToUpdate": "twister-log-metrics_feature_div"
                },
                "btf-content-2-m": {
                    "divToUpdate": "btf-content-2-m_feature_div"
                },
                "center-33-0": {
                    "divToUpdate": "center-33-0_feature_div"
                },
                "center-30-3": {
                    "divToUpdate": "center-30-3_feature_div"
                },
                "center-99": {
                    "divToUpdate": "center-99_feature_div"
                },
                "btf-content-64": {
                    "divToUpdate": "btf-content-64_feature_div"
                },
                "center-42-3": {
                    "divToUpdate": "center-42-3_feature_div"
                },
                "btf-content-39": {
                    "divToUpdate": "btf-content-39_feature_div"
                },
                "center-26-1": {
                    "divToUpdate": "center-26-1_feature_div"
                },
                "center-28": {
                    "divToUpdate": "center-28_feature_div"
                },
                "btf-content-48": {
                    "divToUpdate": "btf-content-48_feature_div"
                },
                "center-13": {
                    "divToUpdate": "center-13_feature_div"
                },
                "btf-content-47-m": {
                    "divToUpdate": "btf-content-47-m_feature_div"
                },
                "center-84": {
                    "divToUpdate": "center-84_feature_div"
                },
                "center-37-0": {
                    "divToUpdate": "center-37-0_feature_div"
                },
                "center-24-0": {
                    "divToUpdate": "center-24-0_feature_div"
                },
                "center-100": {
                    "divToUpdate": "center-100_feature_div"
                },
                "btf-content-54": {
                    "divToUpdate": "btf-content-54_feature_div"
                },
                "btf-content-9": {
                    "divToUpdate": "btf-content-9_feature_div"
                },
                "dpx-ajax-block-components": {
                    "divToUpdate": "dpx-ajax-block-components_feature_div"
                },
                "center-23-2": {
                    "divToUpdate": "center-23-2_feature_div"
                },
                "center-31-0": {
                    "divToUpdate": "center-31-0_feature_div"
                },
                "center-20-2": {
                    "divToUpdate": "center-20-2_feature_div"
                },
                "btf-center-16": {
                    "divToUpdate": "btf-center-16_feature_div"
                },
                "center-35": {
                    "divToUpdate": "center-35_feature_div"
                },
                "center-43-2": {
                    "divToUpdate": "center-43-2_feature_div"
                },
                "btf-content-36-m": {
                    "divToUpdate": "btf-content-36-m_feature_div"
                },
                "btf-content-10": {
                    "divToUpdate": "btf-content-10_feature_div"
                },
                "btf-content-62": {
                    "divToUpdate": "btf-content-62_feature_div"
                },
                "btf-content-41-m": {
                    "divToUpdate": "btf-content-41-m_feature_div"
                },
                "btf-center-1": {
                    "divToUpdate": "btf-center-1_feature_div"
                },
                "btf-center-13": {
                    "divToUpdate": "btf-center-13_feature_div"
                },
                "center-41-0": {
                    "divToUpdate": "center-41-0_feature_div"
                },
                "btf-content-13-m": {
                    "divToUpdate": "btf-content-13-m_feature_div"
                },
                "center-28-0": {
                    "divToUpdate": "center-28-0_feature_div"
                },
                "btf-content-31": {
                    "divToUpdate": "btf-content-31_feature_div"
                },
                "center-29-1": {
                    "divToUpdate": "center-29-1_feature_div"
                },
                "btf-center-8": {
                    "divToUpdate": "btf-center-8_feature_div"
                },
                "btf-center-12": {
                    "divToUpdate": "btf-center-12_feature_div"
                },
                "center-87": {
                    "divToUpdate": "center-87_feature_div"
                },
                "btf-content-11-m": {
                    "divToUpdate": "btf-content-11-m_feature_div"
                },
                "btf-content-18-m": {
                    "divToUpdate": "btf-content-18-m_feature_div"
                },
                "center-35-2": {
                    "divToUpdate": "center-35-2_feature_div"
                },
                "btf-content-50": {
                    "divToUpdate": "btf-content-50_feature_div"
                },
                "accessory-popover-7": {
                    "divToUpdate": "accessory-popover-7_feature_div"
                },
                "mako-emergency-fix": {
                    "divToUpdate": "mako-emergency-fix_feature_div"
                },
                "btf-content-35": {
                    "divToUpdate": "btf-content-35_feature_div"
                },
                "accessory-popover-3": {
                    "divToUpdate": "accessory-popover-3_feature_div"
                },
                "btf-content-43": {
                    "divToUpdate": "btf-content-43_feature_div"
                },
                "center-38-1": {
                    "divToUpdate": "center-38-1_feature_div"
                },
                "center-33-2": {
                    "divToUpdate": "center-33-2_feature_div"
                },
                "btf-content-65": {
                    "divToUpdate": "btf-content-65_feature_div"
                },
                "center-13-0": {
                    "divToUpdate": "center-13-0_feature_div"
                },
                "btf-content-38-m": {
                    "divToUpdate": "btf-content-38-m_feature_div"
                },
                "center-39": {
                    "divToUpdate": "center-39_feature_div"
                },
                "btf-content-60-m": {
                    "divToUpdate": "btf-content-60-m_feature_div"
                },
                "center-96": {
                    "divToUpdate": "center-96_feature_div"
                },
                "btf-content-11": {
                    "divToUpdate": "btf-content-11_feature_div"
                },
                "center-14-0": {
                    "divToUpdate": "center-14-0_feature_div"
                },
                "btf-content-4": {
                    "divToUpdate": "btf-content-4_feature_div"
                },
                "center-83": {
                    "divToUpdate": "center-83_feature_div"
                },
                "center-16": {
                    "divToUpdate": "center-16_feature_div"
                },
                "btf-content-42": {
                    "divToUpdate": "btf-content-42_feature_div"
                },
                "center-36": {
                    "divToUpdate": "center-36_feature_div"
                },
                "center-42-2": {
                    "divToUpdate": "center-42-2_feature_div"
                },
                "center-40": {
                    "divToUpdate": "center-40_feature_div"
                },
                "btf-content-1-m": {
                    "divToUpdate": "btf-content-1-m_feature_div"
                },
                "btf-content-15": {
                    "divToUpdate": "btf-content-15_feature_div"
                },
                "center-12": {
                    "divToUpdate": "center-12_feature_div"
                },
                "center-21-1": {
                    "divToUpdate": "center-21-1_feature_div"
                },
                "center-12-0": {
                    "divToUpdate": "center-12-0_feature_div"
                },
                "btf-content-55": {
                    "divToUpdate": "btf-content-55_feature_div"
                },
                "center-94": {
                    "divToUpdate": "center-94_feature_div"
                },
                "center-37-1": {
                    "divToUpdate": "center-37-1_feature_div"
                },
                "dpx-giveaway": {
                    "divToUpdate": "dpx-giveaway_feature_div"
                },
                "btf-content-51": {
                    "divToUpdate": "btf-content-51_feature_div"
                },
                "center-18-1": {
                    "divToUpdate": "center-18-1_feature_div"
                },
                "btf-content-33-m": {
                    "divToUpdate": "btf-content-33-m_feature_div"
                },
                "center-24": {
                    "divToUpdate": "center-24_feature_div"
                },
                "center-34-2": {
                    "divToUpdate": "center-34-2_feature_div"
                },
                "center-30-2": {
                    "divToUpdate": "center-30-2_feature_div"
                },
                "center-22-1": {
                    "divToUpdate": "center-22-1_feature_div"
                },
                "btf-content-28-m": {
                    "divToUpdate": "btf-content-28-m_feature_div"
                },
                "dpx-btf-bundle": {
                    "divToUpdate": "dpx-btf-bundle_feature_div"
                },
                "center-25-2": {
                    "divToUpdate": "center-25-2_feature_div"
                },
                "btf-content-20": {
                    "divToUpdate": "btf-content-20_feature_div"
                },
                "center-43": {
                    "divToUpdate": "center-43_feature_div"
                },
                "accessory-popover-8": {
                    "divToUpdate": "accessory-popover-8_feature_div"
                },
                "center-27": {
                    "divToUpdate": "center-27_feature_div"
                },
                "btf-content-49": {
                    "divToUpdate": "btf-content-49_feature_div"
                },
                "btf-content-25-m": {
                    "divToUpdate": "btf-content-25-m_feature_div"
                },
                "center-38-0": {
                    "divToUpdate": "center-38-0_feature_div"
                },
                "sylt-center": {
                    "divToUpdate": "sylt-center_feature_div"
                },
                "btf-content-58-m": {
                    "divToUpdate": "btf-content-58-m_feature_div"
                },
                "btf-center-17": {
                    "divToUpdate": "btf-center-17_feature_div"
                },
                "btf-center-21": {
                    "divToUpdate": "btf-center-21_feature_div"
                },
                "btf-content-7-m": {
                    "divToUpdate": "btf-content-7-m_feature_div"
                },
                "center-12-1": {
                    "divToUpdate": "center-12-1_feature_div"
                },
                "btf-content-35-m": {
                    "divToUpdate": "btf-content-35-m_feature_div"
                },
                "btf-content-53": {
                    "divToUpdate": "btf-content-53_feature_div"
                },
                "center-22-0": {
                    "divToUpdate": "center-22-0_feature_div"
                },
                "btf-content-42-m": {
                    "divToUpdate": "btf-content-42-m_feature_div"
                },
                "center-95": {
                    "divToUpdate": "center-95_feature_div"
                },
                "center-43-3": {
                    "divToUpdate": "center-43-3_feature_div"
                },
                "center-26": {
                    "divToUpdate": "center-26_feature_div"
                },
                "center-31-3": {
                    "divToUpdate": "center-31-3_feature_div"
                },
                "center-35-1": {
                    "divToUpdate": "center-35-1_feature_div"
                },
                "btf-content-24": {
                    "divToUpdate": "btf-content-24_feature_div"
                },
                "center-42-1": {
                    "divToUpdate": "center-42-1_feature_div"
                },
                "center-27-3": {
                    "divToUpdate": "center-27-3_feature_div"
                },
                "center-41-1": {
                    "divToUpdate": "center-41-1_feature_div"
                },
                "accessory-popover-10": {
                    "divToUpdate": "accessory-popover-10_feature_div"
                },
                "btf-content-51-m": {
                    "divToUpdate": "btf-content-51-m_feature_div"
                },
                "center-81": {
                    "divToUpdate": "center-81_feature_div"
                },
                "btf-content-24-m": {
                    "divToUpdate": "btf-content-24-m_feature_div"
                },
                "center-39-1": {
                    "divToUpdate": "center-39-1_feature_div"
                },
                "center-19-1": {
                    "divToUpdate": "center-19-1_feature_div"
                },
                "btf-content-63": {
                    "divToUpdate": "btf-content-63_feature_div"
                },
                "center-23-3": {
                    "divToUpdate": "center-23-3_feature_div"
                },
                "center-18": {
                    "divToUpdate": "center-18_feature_div"
                },
                "center-40-1": {
                    "divToUpdate": "center-40-1_feature_div"
                },
                "center-25-3": {
                    "divToUpdate": "center-25-3_feature_div"
                },
                "btf-content-8": {
                    "divToUpdate": "btf-content-8_feature_div"
                },
                "center-32-0": {
                    "divToUpdate": "center-32-0_feature_div"
                },
                "center-16-1": {
                    "divToUpdate": "center-16-1_feature_div"
                },
                "btf-content-26": {
                    "divToUpdate": "btf-content-26_feature_div"
                },
                "btf-content-34-m": {
                    "divToUpdate": "btf-content-34-m_feature_div"
                },
                "btf-content-36": {
                    "divToUpdate": "btf-content-36_feature_div"
                },
                "center-32": {
                    "divToUpdate": "center-32_feature_div"
                },
                "btf-content-56-m": {
                    "divToUpdate": "btf-content-56-m_feature_div"
                },
                "center-35-0": {
                    "divToUpdate": "center-35-0_feature_div"
                },
                "btf-content-30": {
                    "divToUpdate": "btf-content-30_feature_div"
                },
                "btf-content-49-m": {
                    "divToUpdate": "btf-content-49-m_feature_div"
                },
                "center-98": {
                    "divToUpdate": "center-98_feature_div"
                },
                "center-38": {
                    "divToUpdate": "center-38_feature_div"
                },
                "btf-content-28": {
                    "divToUpdate": "btf-content-28_feature_div"
                },
                "btf-center-25": {
                    "divToUpdate": "btf-center-25_feature_div"
                },
                "center-26-0": {
                    "divToUpdate": "center-26-0_feature_div"
                },
                "accessory-popover-6": {
                    "divToUpdate": "accessory-popover-6_feature_div"
                },
                "center-20-3": {
                    "divToUpdate": "center-20-3_feature_div"
                },
                "btf-center-5": {
                    "divToUpdate": "btf-center-5_feature_div"
                },
                "btf-content-55-m": {
                    "divToUpdate": "btf-content-55-m_feature_div"
                },
                "btf-center-2": {
                    "divToUpdate": "btf-center-2_feature_div"
                },
                "btf-center-15": {
                    "divToUpdate": "btf-center-15_feature_div"
                },
                "center-23": {
                    "divToUpdate": "center-23_feature_div"
                },
                "center-15-1": {
                    "divToUpdate": "center-15-1_feature_div"
                },
                "center-18-2": {
                    "divToUpdate": "center-18-2_feature_div"
                },
                "btf-content-12": {
                    "divToUpdate": "btf-content-12_feature_div"
                },
                "center-32-3": {
                    "divToUpdate": "center-32-3_feature_div"
                },
                "btf-content-59": {
                    "divToUpdate": "btf-content-59_feature_div"
                },
                "center-33-3": {
                    "divToUpdate": "center-33-3_feature_div"
                },
                "btf-content-27-m": {
                    "divToUpdate": "btf-content-27-m_feature_div"
                },
                "center-28-1": {
                    "divToUpdate": "center-28-1_feature_div"
                },
                "center-36-3": {
                    "divToUpdate": "center-36-3_feature_div"
                },
                "btf-content-16": {
                    "divToUpdate": "btf-content-16_feature_div"
                },
                "btf-content-29-m": {
                    "divToUpdate": "btf-content-29-m_feature_div"
                },
                "btf-center-24": {
                    "divToUpdate": "btf-center-24_feature_div"
                },
                "center-91": {
                    "divToUpdate": "center-91_feature_div"
                },
                "center-38-3": {
                    "divToUpdate": "center-38-3_feature_div"
                },
                "accessory-popover-4": {
                    "divToUpdate": "accessory-popover-4_feature_div"
                },
                "center-17-1": {
                    "divToUpdate": "center-17-1_feature_div"
                },
                "center-15": {
                    "divToUpdate": "center-15_feature_div"
                },
                "center-29-0": {
                    "divToUpdate": "center-29-0_feature_div"
                },
                "btf-content-19": {
                    "divToUpdate": "btf-content-19_feature_div"
                },
                "center-86": {
                    "divToUpdate": "center-86_feature_div"
                },
                "btf-content-14-m": {
                    "divToUpdate": "btf-content-14-m_feature_div"
                },
                "center-97": {
                    "divToUpdate": "center-97_feature_div"
                },
                "btf-content-17": {
                    "divToUpdate": "btf-content-17_feature_div"
                },
                "btf-content-3": {
                    "divToUpdate": "btf-content-3_feature_div"
                },
                "center-82": {
                    "divToUpdate": "center-82_feature_div"
                },
                "btf-center-10": {
                    "divToUpdate": "btf-center-10_feature_div"
                },
                "center-34-3": {
                    "divToUpdate": "center-34-3_feature_div"
                },
                "center-30-1": {
                    "divToUpdate": "center-30-1_feature_div"
                },
                "btf-content-52-m": {
                    "divToUpdate": "btf-content-52-m_feature_div"
                },
                "btf-content-37": {
                    "divToUpdate": "btf-content-37_feature_div"
                },
                "center-14-1": {
                    "divToUpdate": "center-14-1_feature_div"
                },
                "product-alert-grid": {
                    "divToUpdate": "product-alert-grid_feature_div"
                },
                "btf-content-43-m": {
                    "divToUpdate": "btf-content-43-m_feature_div"
                },
                "center-23-0": {
                    "divToUpdate": "center-23-0_feature_div"
                },
                "center-42": {
                    "divToUpdate": "center-42_feature_div"
                }
            },
            "location": {},
            "rentbuybox": {},
            "quantity": {},
            "newbuybox": {},
            "sndboxbuybox": {},
            "upsell": {}
        }
    }; //selectively not escaping this.
    return dataToReturn;
});

if (typeof performance != "undefined" && typeof performance.getEntries != "undefined") {
    var metaAssetNames = [];
    metaAssetNames.push("DetailPageDesktopImageBlockMetaAsset");
    metaAssetNames.push("AmazonDevicesDetailPageMetaAssets_MAKO_198242");
    metaAssetNames.push("VideojsLegacy");
    if (metaAssetNames.length > 0) {
        for (assetIndex = 0; assetIndex < metaAssetNames.length; assetIndex++) {
            var metaAssetName = metaAssetNames[assetIndex];
            var re = new RegExp("\\.css\\?AUIClients/" + metaAssetName);
            for (i = 0; i < performance.getEntries().length; i++) {
                var dpEntry = performance.getEntries()[i];
                var res = dpEntry.name.match(re);
                if (res && dpEntry.initiatorType && dpEntry.initiatorType == "link") {
                    var dpmaDuration = dpEntry.duration;
                    ue.count(metaAssetName + ".duration", dpmaDuration);
                    if (dpmaDuration < 50) {
                        ue.tag(metaAssetName + "Cached");
                    } else {
                        ue.tag(metaAssetName + "NotCached");
                    }
                    ue.count(metaAssetName + ".startTime", dpEntry.startTime);
                }
            }
        }
    } else {
        ue.count("DPMANoMetaAsset", 1);
    }
    for (i = 0; i < performance.getEntries().length; i++) {
        var name = performance.getEntries()[i].name;
        var res = name.match(/\.css\?AUIClients\/AmazonUI/);
        var initiatorType = performance.getEntries()[i].initiatorType;
        if (res && initiatorType && initiatorType == "link") {
            var duration = performance.getEntries()[i].duration;
            ue.count("aui.duration", duration);
            ue.count("aui.startTime", performance.getEntries()[i].startTime);
            if (duration < 50) {
                csmTag = "auiCached";
            } else {
                csmTag = "auiNotCached";
            }
            if (window.ue && ue.tag) {
                ue.tag(csmTag);
            }
            break;
        }
    }
}

(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function(A) {
    if (A.preload) {
        A.preload('https://images-na.ssl-images-amazon.com/images/I/61-6nKPKyWL._RC|11-BZEJ8lnL.js,61GQ9IdK7HL.js,21Of0-9HPCL.js,012FVc3131L.js,119KAWlHU6L.js,51CF7BmbF2L.js,11AHlQhPRjL.js,016iHgpF74L.js,11aNYFFS5hL.js,116tgw9TSaL.js,211-p4GRUCL.js,01PoLXBDXWL.js,61VSCV4uJuL.js,01ezj5Rkz1L.js,11BOgvnnntL.js,31UWuPgtTtL.js,01rpauTep4L.js,01iyxuSGj4L.js,01OTNfCf5oL.js_.js?AUIClients/AmazonUI#218320-T1.191015-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/51tax7M48-L._RC|516fcOUE-HL.css,01evdoiemkL.css,01K+Ps1DeEL.css,31pdJv9iSzL.css,01VszOUTO6L.css,11UGC+GXOPL.css,21LK7jaicML.css,11L58Qpo0GL.css,21kyTi1FabL.css,01ruG+gDPFL.css,01YhS3Cs-hL.css,21GwE3cR-yL.css,019SHZnt8RL.css,01wAWQRgXzL.css,21bWcRJYNIL.css,11WgRxUdJRL.css,01dU8+SPlFL.css,11ocrgKoE-L.css,01SHjPML6tL.css,111-D2qRjiL.css,01QrWuRrZ-L.css,310Imb6LqFL.css,01piEq-AdwL.css,11Z1a0FxSIL.css,01cbS3UK11L.css,21mOLw+nYYL.css,01L8Y-JFEhL.css_.css?AUIClients/AmazonUI#not-trident.218320-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/31dmHrFOBOL._RC|31Nb5hZQizL.js,316nVZ1c+gL.js,21u1PnPEsML.js,318rs4piGPL.js,11ISJZDdTuL.js,01TQyo0bnIL.js,11SRkYWcpPL.js,01jEqq6I0UL.js,41qnCsmP7-L.js,61vJNtxMsKL.js,01mDj54LSEL.js,01LHJt5PiyL.js,11oGaoYgbdL.js,0193uyIciNL.js,41D4kRuiy9L.js,319QNZZU3GL.js,11p0nLfNCcL.js,01s9HEfbt3L.js,11iHZuQapKL.js,015TRQC5i+L.js,01JzE3-DfLL.js,61cXnq7ya3L.js,01I+ls4AqQL.js_.js?AUIClients/HardlinesDetailPageMetaAssetFixed#desktop.es.234887-T1.195406-C.227948-T1.114779-T1.120067-T1.131900-T1.184660-C.162909-T1.156391-T1.195589-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/617by8Tge2L._RC|11bRdV2t20L.css,514T4Tj3VdL.css,01g2EoxOu-L.css,11UGK4+GCNL.css,21ByukFKG4L.css,01N8OOpUZPL.css,11xRy3bSkOL.css,01QUs5FVXoL.css,01qB+TVkL0L.css,41vOQb1k0LL.css,01FtAuFRr3L.css,01rgQ3jqo7L.css,21ZTURXcQVL.css,31TJtSmBkXL.css,11X8K4AolpL.css,21PjfsP9YvL.css,21W5fiSj06L.css,31cE7qTuwaL.css_.css?AUIClients/HardlinesDetailPageMetaAssetFixed#desktop.es.172402-T1.227640-T1.131900-T1.129737-C.94145-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/61eJOQSDz%2BL.js?AUIClients/DetailPageDesktopImageBlockMetaAsset#230654-T1.191158-T1.224733-T1.210909-T1.169593-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/21PWs2LLIGL._RC|118Say7HIZL.js,21E2aIDj6DL.js,41Vn8AmO-iL.js,01g2etah0NL.js,31c9mPTk6UL.js,41nn939v7TL.js,11lmER5dfgL.js,0185ITV0M6L.js,41I+tXeHewL.js,210NjLk-UoL.js,21dsH35XBEL.js,715TrdP3byL.js,4123BTTtUrL.js,11nOzlnr6+L.js,31bEXnVglKL.js,31nGeerMTdL.js,31UjTApGOPL.js,31zsZSnXGtL.js,21NDIsf0a1L.js,11AVRVWTouL.js,11MQqFPEK+L.js,01jqyAujTwL.js,31+0pACITzL.js,61L2gH9DmIL.js,115eJenyunL.js,01RQtSMdG+L.js,01OtvpwikQL.js,31qUdoxPE8L.js,51jWcEE1lkL.js,21b+wrKJalL.js,21NCM8biKBL.js,21qOGqjcM7L.js,31UaW8zx0bL.js,01lcH4zcTaL.js,013eoEBTVUL.js,21YW9LKF2zL.js,21mymEONFtL.js,61no9IDtPrL.js,21OJDARBhQL.js,41s+OBPxTPL.js,51J6xjXWctL.js,01IWUb29Q4L.js,01P5Y+7JzQL.js,016QFWAAdML.js,41d77h6LxoL.js,41afyt2IqsL.js,418gY+vQ+-L.js,11DbyV7EqEL.js,01IQoRXvpnL.js,011bX2ciJbL.js,21222B+rAzL.js,01gp3oqpb5L.js,31SVhUHz1bL.js,11CIaAZhucL.js,01u8ChFWgdL.js,011kwg0OTQL.js,01jLpHmb92L.js,014kCoIHgIL.js,019W6kk1gjL.js,01zgbxolsfL.js,31ZS5TQVWDL.js,51sCBomoyOL.js,01yx6A7MuUL.js,01acYp41-1L.js,01B78Hlo7lL.js,01dXSEbmdvL.js,01IC-gBKyYL.js,6109rovLkmL.js,21rYUjMk16L.js,01OI0RzpxfL.js_.js?AUIClients/HardlinesDetailPageMetaAssetVariable_TURBO_DESKTOP#desktop.language-es.es.213498-T1.239853-T1.234606-T1.210547-T1.227948-T1.190735-T1.216044-T1.183511-T1.103061-T1.184424-T1.221330-T1.238103-C.187903-T3.200616-T1.184888-T1.131900-T1.162909-T1.144201-T1.126331-C.188213-T1.172346-T1.109378-T1.147957-T1.154031-T3.169593-T1.142088-C.232960-T1.181561-T1.187555-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/210LbiKyCML._RC|31j6BOPjmzL.css,01ekIXTj5kL.css,01KvCqKMBgL.css,11iwHtffX1L.css,01UfR8ATi1L.css,01HK5awd8AL.css,01D-B-OeNDL.css,21CTcSQ19+L.css,41qX2c75VhL.css,01FlII1u-ZL.css,21C76-rppKL.css,212hS9k0-iL.css,31MkQHV3gaL.css,314gb2LkLML.css,31dTK1hHb6L.css,014Z+MbaRaL.css,01RRH0yFa4L.css,01bkkYjxP7L.css,31Wg0ai095L.css,01f31VNCowL.css,01NW8VTUeVL.css,019M+d36JfL.css,011uHgmxBfL.css,31B41h28J-L.css,31Kc2gYPiuL.css,114HJAY+ShL.css,11Z7S+lK47L.css,21Wf53xZ5jL.css,01kwuiPOKIL.css,41fK6fT1tqL.css,01kymrLkG9L.css,01OhA16ND1L.css,11xmZPMxSJL.css,51A25L3oDgL.css,01TZ9fpDSSL.css,11pBWCbQZ6L.css,11ikU6MX1JL.css,01qwEWNuxuL.css,21B8W4YgK5L.css,11XXguyjjZL.css,31GJfdDW3JL.css,01iARmhwZlL.css,31t0uInsh7L.css,01AT3O0C6cL.css,01an-V9Fk9L.css,01goIIPoVxL.css_.css?AUIClients/HardlinesDetailPageMetaAssetVariable_TURBO_DESKTOP#desktop.es.not-trident.113788-C.210547-T1.190735-T1.103061-T1.184424-T1.144201-T1.126331-C.232515-T1.232513-T1.172346-T1.169593-T1.181561-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/11XQDILn5QL._RC|21PWs2LLIGL.js,118Say7HIZL.js,21E2aIDj6DL.js,41Vn8AmO-iL.js,01g2etah0NL.js,31Nb5hZQizL.js,31c9mPTk6UL.js,41nn939v7TL.js,11lmER5dfgL.js,21u1PnPEsML.js,51-2jfuoxoL.js,316nVZ1c+gL.js,01AdYLY9rHL.js,01IOMCsVFCL.js,210NjLk-UoL.js,21dsH35XBEL.js,01TQyo0bnIL.js,11SRkYWcpPL.js,715TrdP3byL.js,0185ITV0M6L.js,41I+tXeHewL.js,31UjTApGOPL.js,01mDj54LSEL.js,01LHJt5PiyL.js,31zsZSnXGtL.js,11oGaoYgbdL.js,01HmcbFsnFL.js,01JzE3-DfLL.js,31sG+M5QN5L.js,11AVRVWTouL.js,11MQqFPEK+L.js,01I+ls4AqQL.js,01jqyAujTwL.js,31+0pACITzL.js,01OrQ5AXqsL.js,11DGcrZsUwL.js,01OtvpwikQL.js,31qUdoxPE8L.js,21qOGqjcM7L.js,01S8y9NkxoL.js,01ZF+ovNflL.js,31JB-Mgab7L.js,6187-gcT2pL.js,01Z-Ip0c4YL.js,013eoEBTVUL.js,21YW9LKF2zL.js,21mymEONFtL.js,61no9IDtPrL.js,21OJDARBhQL.js,41s+OBPxTPL.js,51J6xjXWctL.js,01IWUb29Q4L.js,01P5Y+7JzQL.js,016QFWAAdML.js,01bFPt5JahL.js,418gY+vQ+-L.js,011bX2ciJbL.js,21222B+rAzL.js,01gp3oqpb5L.js,31SVhUHz1bL.js,11CIaAZhucL.js,01u8ChFWgdL.js,01NKGaW0w5L.js,01rEmdLLpxL.js,019W6kk1gjL.js,01zgbxolsfL.js,01lcH4zcTaL.js,01acYp41-1L.js,01yx6A7MuUL.js,31ZS5TQVWDL.js,51sCBomoyOL.js,01IC-gBKyYL.js,31bEXnVglKL.js,6109rovLkmL.js,21rYUjMk16L.js,01OI0RzpxfL.js_.js?AUIClients/SoftlinesDetailPageMetaAsset_TURBO_DESKTOP#desktop.language-es.es.213498-T1.234606-T1.210547-T1.195406-C.227948-T1.216044-T1.105844-C.183511-T1.103061-T1.184424-T1.221330-T1.232002-T1.187903-T3.200616-T1.184888-T1.131900-T1.184660-C.162909-T1.144201-T1.126331-C.156391-T1.188213-T1.202285-C.109378-T1.147957-T1.154031-T3.169593-T1.232960-T1.181561-T1.187555-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/617by8Tge2L._RC|11bRdV2t20L.css,41j52RQ1GmL.css,210LbiKyCML.css,31j6BOPjmzL.css,01ekIXTj5kL.css,11UGK4+GCNL.css,01KvCqKMBgL.css,11iwHtffX1L.css,01UfR8ATi1L.css,01N8OOpUZPL.css,419B8xkIpdL.css,21ByukFKG4L.css,01lYrTXt4xL.css,21CTcSQ19+L.css,01qB+TVkL0L.css,01HK5awd8AL.css,01D-B-OeNDL.css,31MkQHV3gaL.css,314gb2LkLML.css,01FtAuFRr3L.css,01QLwk8mu6L.css,014Z+MbaRaL.css,01RRH0yFa4L.css,01bkkYjxP7L.css,018mGORJ7tL.css,01NW8VTUeVL.css,019M+d36JfL.css,011uHgmxBfL.css,114HJAY+ShL.css,01wL78bNyyL.css,01MLzcotflL.css,31SN3jkqdEL.css,21Wf53xZ5jL.css,01kwuiPOKIL.css,41fK6fT1tqL.css,01kymrLkG9L.css,01OhA16ND1L.css,11pBWCbQZ6L.css,01qwEWNuxuL.css,21B8W4YgK5L.css,11XXguyjjZL.css,31GJfdDW3JL.css,01iARmhwZlL.css,11Z7S+lK47L.css,01AT3O0C6cL.css,31t0uInsh7L.css,21C76-rppKL.css,01goIIPoVxL.css_.css?AUIClients/SoftlinesDetailPageMetaAsset_TURBO_DESKTOP#desktop.es.113788-C.210547-T1.103061-T1.172402-T1.184424-T1.232002-T1.227640-T1.131900-T1.94145-T1.144201-T1.126331-C.202285-C.215632-C.109378-T1.169593-T1.181561-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/21E2aIDj6DL._RC|41Vn8AmO-iL.js,01g2etah0NL.js,31Nb5hZQizL.js,31c9mPTk6UL.js,41nn939v7TL.js,11lmER5dfgL.js,01Ng0K110HL.js,21JtT0mJXEL.js,31vMFUg376L.js,01TQyo0bnIL.js,11SRkYWcpPL.js,715TrdP3byL.js,0185ITV0M6L.js,41I+tXeHewL.js,31UjTApGOPL.js,01mDj54LSEL.js,01LHJt5PiyL.js,31zsZSnXGtL.js,11oGaoYgbdL.js,01JzE3-DfLL.js,11MQqFPEK+L.js,01jqyAujTwL.js,31+0pACITzL.js,01OtvpwikQL.js,31qUdoxPE8L.js,11nOzlnr6+L.js,31bEXnVglKL.js,31nGeerMTdL.js,11p0nLfNCcL.js,11iHZuQapKL.js,21qOGqjcM7L.js,21PWs2LLIGL.js,118Say7HIZL.js,6187-gcT2pL.js,013eoEBTVUL.js,21YW9LKF2zL.js,21mymEONFtL.js,61no9IDtPrL.js,21OJDARBhQL.js,41s+OBPxTPL.js,51J6xjXWctL.js,01IWUb29Q4L.js,016QFWAAdML.js,418gY+vQ+-L.js,019W6kk1gjL.js,01zgbxolsfL.js,01yx6A7MuUL.js,31ZS5TQVWDL.js,51sCBomoyOL.js,01IC-gBKyYL.js,6109rovLkmL.js,21rYUjMk16L.js,01OI0RzpxfL.js_.js?AUIClients/MediaDetailPageMetaAsset_TURBO_DESKTOP#desktop.language-es.es.213498-T1.234606-T1.210547-T1.195406-C.227948-T1.216044-T1.105844-C.183511-T1.103061-T1.187903-T3.200616-T1.184888-T1.131900-T1.184660-C.162909-T1.156391-T1.188213-T1.109378-T1.147957-T1.154031-T3.169593-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/617by8Tge2L._RC|417qBNXt1HL.css,31j6BOPjmzL.css,01ekIXTj5kL.css,11UGK4+GCNL.css,01KvCqKMBgL.css,11iwHtffX1L.css,01UfR8ATi1L.css,21LLdt69ldL.css,21jNhNxHFBL.css,01qB+TVkL0L.css,01HK5awd8AL.css,01D-B-OeNDL.css,31MkQHV3gaL.css,314gb2LkLML.css,01FtAuFRr3L.css,01RRH0yFa4L.css,01bkkYjxP7L.css,01NW8VTUeVL.css,019M+d36JfL.css,011uHgmxBfL.css,01FlII1u-ZL.css,21C76-rppKL.css,212hS9k0-iL.css,31TJtSmBkXL.css,21PjfsP9YvL.css,114HJAY+ShL.css,210LbiKyCML.css,31SN3jkqdEL.css,21Wf53xZ5jL.css,01kwuiPOKIL.css,41fK6fT1tqL.css,01kymrLkG9L.css,11pBWCbQZ6L.css,31t0uInsh7L.css,01goIIPoVxL.css_.css?AUIClients/MediaDetailPageMetaAsset_TURBO_DESKTOP#desktop.es.113788-C.210547-T1.103061-T1.227640-T1.131900-T1.94145-T1.215632-C.109378-T1.169593-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/6187-gcT2pL.js?AUIClients/DetailPageSnSAssets#desktop.105844-C.162909-T1.109378-T1');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/31SN3jkqdEL.css?AUIClients/DetailPageSnSAssets#215632-C.109378-T1');
    }
});

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

P.when("A", "ready").execute(function(A) {
    var $ = A.$;
    var $image = $('img[src="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/better_with_prime-pack._QL20_CB438265837_.jpg"][data-a-hires="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/better_with_prime-pack._CB438265837_.jpg"]');
    A.loadHiResImage($image);
});

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

P.when("A", "ready").execute(function(A) {
    var $ = A.$;
    var $image = $('img[src="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/smart_home-pack._QL20_CB438265836_.jpg"][data-a-hires="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/smart_home-pack._CB438265836_.jpg"]');
    A.loadHiResImage($image);
});

function prefetchTYPAssets() {
    var imageAssets = new Array();
    var jsCssAssets = new Array();
    imageAssets.push("https://images-na.ssl-images-amazon.com/images/G/30/x-locale/common/buy-buttons/review-1-click-order._CB182946301_.gif");
    imageAssets.push("https://images-na.ssl-images-amazon.com/images/G/30/x-locale/common/buttons/continue-shopping._CB165243831_.gif");
    imageAssets.push("https://images-na.ssl-images-amazon.com/images/G/30/x-locale/common/buy-buttons/thank-you-elbow._CB182726200_.gif");
    imageAssets.push("https://images-na.ssl-images-amazon.com/images/G/30/x-locale/communities/social/snwicons_v2._CB402379797_.png");
    imageAssets.push("https://images-na.ssl-images-amazon.com/images/G/30/checkout/assets/carrot._CB182726507_.gif");
    imageAssets.push("https://images-na.ssl-images-amazon.com/images/G/30/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized_layout1._CB468502164_.png");
    imageAssets.push("https://images-na.ssl-images-amazon.com/images/G/30/x-locale/common/transparent-pixel._CB386942486_.gif");
    // pre-fetching image assets
    for (var i = 0; i < imageAssets.length; i++) {
        new Image().src = imageAssets[i];
    }
    // pre-fetching css and js assets based on different browser types
    var isIE = /*@cc_on!@*/ 0;
    var isFireFox = /Firefox/.test(navigator.userAgent);
    if (isIE) {
        for (var i = 0; i < jsCssAssets.length; i++) {
            new Image().src = jsCssAssets[i];
        }
    } else if (isFireFox) {
        for (var i = 0; i < jsCssAssets.length; i++) {
            var o = document.createElement("object");
            o.data = jsCssAssets[i];
            o.width = o.height = 0;
            document.body.appendChild(o);
        }
    }
}
var onload = function() {
    setTimeout(prefetchTYPAssets, 2000);
};
if (window.addEventListener) {
    window.addEventListener("load", onload);
} else if (window.attachEvent) {
    window.attachEvent("onload", onload);
}

var ocInitTimestamp = 1578848341;

if (!window.$SearchJS && window.$Nav) {
    window.$SearchJS = $Nav.make('sx');
}
if (window.$SearchJS) {}
(function() {
    var precacheMaterials = ["https://images-eu.ssl-images-amazon.com/images/G/30/nav2/images/gui/searchSprite._CB272921296_.png"];
    if (window.amznJQ) {
        amznJQ.addPL(precacheMaterials);
    } else if (window.P) {
        P.when('A').execute(function(A) {
            A.preload(precacheMaterials);
        });
    }
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

P.when('A', 'jQuery').execute('triggerVideoAjax', function(A) {
    var obj = jQuery.parseJSON('{"dataInJson":null,"colorImages":{},"videos":[],"lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"refactorEnabled":false,"mainImageSizes":[["355","355"],["450","450"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]]}');
    A.trigger('triggerVideoAjax', obj.videos);
});

window.$Nav && $Nav.when('$').run('MXMarketplaceRedirectOverlay', function($) {
    $.ajax({
        type: 'POST',
        url: '/gp/redirection/mexico.html',
        data: {
            path: '/amazon-fire-tv-stick-con-mando-por-voz-alexa-reproductor-de-contenido-multimedia-en-streaming/dp/B07PVCVBN7',
            queryString: '?ie=UTF8\u0026pd%5Frd%5Fr=d28f2ff7-4884-4619-b019-53a3e72330e6%20--%3E\u0026pf%5Frd%5Fp=4e395f24-6894-4726-bad0-2883ff5dd93f\u0026pf%5Frd%5Fr=J49NGGDG6FNC1Y5PKD4F\u0026pd%5Frd%5Fwg=h9O7A\u0026pd%5Frd%5Fw=x2MuN',
            pageType: 'Detail',
            referer: ''
        },
        success: function(data) {
            if (data) {
                $('body').append(data);
            }
        }
    });
});

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

P.when("A", "ready").execute(function(A) {
    var $ = A.$;
    var $image = $('img[src="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/apps-pack._QL20_CB438265618_.jpg"][data-a-hires="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/apps-pack._CB438265618_.jpg"]');
    A.loadHiResImage($image);
});

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}

(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

P.when("A", "ready").execute(function(A) {
    var $ = A.$;
    var $image = $('img[src="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/tank_l-simple_to_set_up-pack-x2._QL20_CB438265838_.jpg"][data-a-hires="https://m.media-amazon.com/images/G/30/kindle/dp/2019/53663101/tank_l-simple_to_set_up-pack-x2._CB438265838_.jpg"]');
    A.loadHiResImage($image);
});

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

(function() {
    var performance = window.performance;
    var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;
    if (!isApiSupported) {
        return;
    }
    var key = 'content-grid-widget:1.0'
    performance.mark(key + ':be');
    var entry = key + ':clientBodyBeginToEnd';
    performance.measure(entry, key + ':bb', key + ':be');
    var entries = performance.getEntriesByName(entry);
    if (entries.length === 0) {
        return;
    }
    entries = entries.splice(entries.length - 1, 1);
    var duration = entries[0].duration;
    if (window.ue) {
        window.ue.count(entry, duration);
    }
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':bb');
}

if (window.performance && window.performance.mark) {
    window.performance.mark('mars-content-grid-row' + ':be');
}
(function() {
    var performance = window.performance;
    if (!performance || !performance.mark || !performance.measure || !performance.getEntriesByName) {
        return;
    }

    function measureMetricForKey(key, metric) {
        var entry = key + ':' + metric;
        performance.measure(entry, key + ':bb', key + ':be');
        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }
        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    }
    [
        'mars-content-grid-row'
    ].forEach(function(counterKey) {
        measureMetricForKey(counterKey, 'clientBodyBeginToEnd');
    });
})();

P.when("MarsContentGridAccessibilityProcessor").execute(function(ContentGridA11yProcessor) {
    ContentGridA11yProcessor.getInstance().requestProcessMarkup();
});

(function() {
    var performance = window.performance;
    var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;
    if (!isApiSupported) {
        return;
    }
    var key = 'mars-device-upgrader-widget:1.0'
    performance.mark(key + ':be');
    var entry = key + ':clientBodyBeginToEnd';
    performance.measure(entry, key + ':bb', key + ':be');
    var entries = performance.getEntriesByName(entry);
    if (entries.length === 0) {
        return;
    }
    entries = entries.splice(entries.length - 1, 1);
    var duration = entries[0].duration;
    if (window.ue) {
        window.ue.count(entry, duration);
    }
})();

window.$Nav && $Nav.when("data").run(function(data) {
    data({
        "yourAccountContent": {
            "template": {
                "name": "itemList",
                "data": {
                    "items": [{
                        "text": "Mi cuenta",
                        "url": "/gp/css/homepage.html?ie=UTF8&ref_=nav_youraccount_ya"
                    }, {
                        "text": "Mis pedidos",
                        "url": "/gp/css/order-history?ie=UTF8&ref_=nav_youraccount_orders",
                        "id": "nav_prefetch_yourorders"
                    }, {
                        "text": "Mis Dash Buttons",
                        "url": "/ddb/your-dash-buttons?_encoding=UTF8&ref_=nav_youraccount_nav_youraccount_snk_ddb_ydb_d_nav_ya"
                    }, {
                        "text": "Mi Lista de deseos",
                        "url": "/gp/registry/wishlist?ie=UTF8&ref_=nav_youraccount_wl&requiresSignIn=1"
                    }, {
                        "text": "Mis recomendaciones",
                        "url": "/gp/yourstore?ie=UTF8&ref_=nav_youraccount_recs"
                    }, {
                        "text": "Mis mascotas",
                        "url": "/yourpets?_encoding=UTF8&ref_=nav_youraccount_ya_pp"
                    }, {
                        "text": "Pertenencia a programas y suscripciones",
                        "url": "/hz5/yourmembershipsandsubscriptions?_encoding=UTF8&ref_=nav_youraccount_digital_subscriptions"
                    }, {
                        "text": "Mi suscripción a Amazon Prime",
                        "url": "/gp/primecentral?ie=UTF8&ref_=nav_youraccount_prime"
                    }, {
                        "text": "Mis suscripciones a productos",
                        "url": "/gp/subscribe-and-save/manage?ie=UTF8&ref_=nav_youraccount_sns"
                    }, {
                        "text": "Hazte una cuenta Amazon Business",
                        "url": "/b?ie=UTF8&node=14862331031&ref_=nav_youraccount_esb2b_reg"
                    }, {
                        "text": "Gestionar contenido y dispositivos",
                        "url": "/gp/digital/fiona/manage?ie=UTF8&ref_=nav_youraccount_myk",
                        "dividerBefore": "1"
                    }, {
                        "text": "Mi Kindle Unlimited",
                        "url": "/gp/kindle/ku/ku_central?ie=UTF8&ref_=nav_youraccount_ku"
                    }, {
                        "subtext": "Anteriormente Cloud Player",
                        "text": "Mi Biblioteca musical",
                        "url": "/gp/dmusic/mp3/player?ie=UTF8&ref_=nav_youraccount_cldplyr"
                    }, {
                        "text": "Mi Prime Video",
                        "url": "/gp/video/ssoredirect?ie=UTF8&pvp=%2Fref%253Ddvm_crs_gno_es_xs_s_dk_nav_eg_al_yracc_0_u&ref_=nav_youraccount_dvm_crs_gno_es_xs_s_dk_nav_eg_al_yracc_0_u"
                    }, {
                        "subtext": "5 GB de almacenamiento gratis",
                        "text": "Mi Amazon Drive",
                        "url": "/clouddrive?_encoding=UTF8&ref_=nav_youraccount_clddrv"
                    }, {
                        "text": "Mis Apps y dispositivos",
                        "url": "/gp/mas/your-account/myapps?ie=UTF8&ref_=nav_youraccount_aad"
                    }, {
                        "dividerBefore": "1"
                    }, {
                        "text": "Cambiar de cuenta",
                        "url": "/gp/navigation/redirector.html/ref=sign-in-redirect?ie=UTF8&associationHandle=esflex&currentPageURL=https%3A%2F%2Fwww.amazon.es%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct&pageType=&switchAccount=picker&yshURL=https%3A%2F%2Fwww.amazon.es%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct",
                        "id": "nav-item-switch-account"
                    }, {
                        "text": "Cerrar sesión",
                        "url": "/gp/flex/sign-out.html?ie=UTF8&action=sign-out&path=%2Fgp%2Fyourstore%2Fhome&ref_=nav_youraccount_signout&signIn=1&useRedirectOnSuccess=1",
                        "id": "nav-item-signout"
                    }]
                }
            },
            "url": "/gp/css/homepage.html?ie=UTF8&ref_=flyout_ya_header",
            "wlTriggers": "85042"
        },
        "wishlistContent": {
            "template": {
                "name": "itemList",
                "data": {
                    "items": [{
                        "text": "Crear una lista de deseos",
                        "url": "/gp/registry/wishlist?ie=UTF8&ref_=nav_wishlist_gno_createwl&triggerElementID=createList"
                    }, {
                        "subtext": "Añade productos de cualquier<br />página web a tu Lista de deseos",
                        "text": "Lista de deseos universal",
                        "url": "/gp/BIT?ie=UTF8&ref_=nav_wishlist_bit_v2_a0024"
                    }, {
                        "text": "Lista de bodas",
                        "url": "/wedding/home?_encoding=UTF8&ref_=nav_wishlist_gno_listpop_wr"
                    }, {
                        "text": "Lista de Nacimiento",
                        "url": "/baby-reg/homepage?_encoding=UTF8&ref_=nav_wishlist_gno_listpop_br"
                    }, {
                        "subtext": "Una forma segura y divertida para que los niños creen su propia lista de deseos",
                        "text": "Amazon Kids",
                        "url": "/kids/?_encoding=UTF8&ref_=nav_wishlist_gno_listpop_ak"
                    }, {
                        "text": "Descubre tu estilo",
                        "url": "/discover?_encoding=UTF8&ref_=nav_wishlist_sbl"
                    }, {
                        "text": "Explorar Showroom",
                        "url": "/showroom?_encoding=UTF8&ref_=nav_wishlist_srm_your_desk_wl_es"
                    }]
                }
            },
            "url": "/gp/registry/wishlist?ie=UTF8&ref_=flyout_yl_header"
        },
        "cartContent": {
            "html": "<div id='nav-cart-flyout' class='nav-empty nav-flyout-content' data-one='' data-many=''><div class='nav-dynamic-full'><div id='nav-cart-standard' class='nav-cart-content'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'></a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div><div id='nav-cart-pantry' class='nav-cart-content' data-box='' data-boxes='' data-box-filled='' data-boxes-filled=''><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'></a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div><div id='nav-cart-fresh' class='nav-cart-content'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'><img id='nav-cart-fresh-logo' src='https://images-na.ssl-images-amazon.com/images/G/30/gno/ec-logo-fresh-color.jpg'></a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div></div><div class='nav-ajax-message'></div><div class='nav-dynamic-empty'><p class='nav_p nav-bold nav-cart-empty'> Tu cesta está vacía.</p><p class='nav_p '> Haz que tu cesta sea útil: llénala de libros, DVD, productos electrónicos y mucho más.</p></div><div class='nav-ajax-error-msg'><p class='nav_p nav-bold'> Hay un problema para ver una vista previa de tu carro de la compra en este momento.</p><p class='nav_p '> Comprueba la conexión a Internet y <a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&hasWorkingJavascript=1' class='nav_a'>ve a tu carro</a>, o <a href='javascript:void(0);' class='nav_a nav-try-again'>vuelve a intentarlo</a>.</p></div><div id='nav-cart-footer'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' id='nav-cart-menu-button' class='nav-action-button'><span class='nav-action-inner'>Ver cesta<span id='nav-cart-menu-button-count' ><span id='nav-cart-zero'>(<span class='nav-cart-count'>0</span> productos)</span><span id='nav-cart-one' style='display: none;'>(<span class='nav-cart-count'>0</span> producto)</span><span id='nav-cart-many' style='display: none;'>(<span class='nav-cart-count'>0</span> productos)</span></span></span></a></div></div>"
        },
        "signinContent": {
            "html": "<div id='nav-signin-tooltip'><a href='/gp/navigation/redirector.html/ref=sign-in-redirect?ie=UTF8&amp;associationHandle=esflex&amp;currentPageURL=https%3A%2F%2Fwww.amazon.es%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_signin&amp;pageType=&amp;switchAccount=&amp;yshURL=https%3A%2F%2Fwww.amazon.es%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_signin' class='nav-action-button' data-nav-role='signin' data-nav-ref='nav_custrec_signin'><span class='nav-action-inner'>Identificarse</span></a><div class='nav-signin-tooltip-footer'>¿Eres un cliente nuevo? <a href='https://www.amazon.es/ap/register?_encoding=UTF8&amp;openid.assoc_handle=esflex&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.mode=checkid_setup&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&amp;openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.amazon.es%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_newcust' class='nav-a'>Empieza aquí.</a></div></div>"
        },
        "accountListContent": {
            "html": "<div id='nav-al-container'><div id='nav-al-wishlist' class='nav-al-column nav-tpl-itemList'><a href='/gp/registry/wishlist?ie=UTF8&amp;ref_=flyout_yl_header' class='nav-al-flyout-header' id='nav-al-title'><div class='nav-title'>Mis listas</div></a><a href='/gp/registry/wishlist?ie=UTF8&amp;ref_=nav_wishlist_gno_createwl&amp;triggerElementID=createList' class='nav-link nav-item'><span class='nav-text'>Crear una lista de deseos</span></a><a href='/gp/BIT?ie=UTF8&amp;ref_=nav_wishlist_bit_v2_a0024' class='nav-link nav-item'><span class='nav-text'>Lista de deseos universal</span></a><a href='/wedding/home?_encoding=UTF8&amp;ref_=nav_wishlist_gno_listpop_wr' class='nav-link nav-item'><span class='nav-text'>Lista de bodas</span></a><a href='/baby-reg/homepage?_encoding=UTF8&amp;ref_=nav_wishlist_gno_listpop_br' class='nav-link nav-item'><span class='nav-text'>Lista de Nacimiento</span></a><a href='/kids/?_encoding=UTF8&amp;ref_=nav_wishlist_gno_listpop_ak' class='nav-link nav-item'><span class='nav-text'>Amazon Kids</span></a><a href='/discover?_encoding=UTF8&amp;ref_=nav_wishlist_sbl' class='nav-link nav-item'><span class='nav-text'>Descubre tu estilo</span></a><a href='/showroom?_encoding=UTF8&amp;ref_=nav_wishlist_srm_your_desk_wl_es' class='nav-link nav-item'><span class='nav-text'>Explorar Showroom</span></a></div><div id='nav-al-your-account' class='nav-al-column nav-template nav-flyout-content nav-tpl-itemList'><a href='/gp/css/homepage.html?ie=UTF8&amp;ref_=flyout_ya_header' class='nav-al-flyout-header'><div class='nav-title'>Mi cuenta</div></a><a href='/gp/css/homepage.html?ie=UTF8&amp;ref_=nav_youraccount_ya' class='nav-link nav-item'><span class='nav-text'>Mi cuenta</span></a><a href='/gp/css/order-history?ie=UTF8&amp;ref_=nav_youraccount_orders' class='nav-link nav-item' id='nav_prefetch_yourorders'><span class='nav-text'>Mis pedidos</span></a><a href='/ddb/your-dash-buttons?_encoding=UTF8&amp;ref_=nav_youraccount_nav_youraccount_snk_ddb_ydb_d_nav_ya' class='nav-link nav-item'><span class='nav-text'>Mis Dash Buttons</span></a><a href='/gp/registry/wishlist?ie=UTF8&amp;ref_=nav_youraccount_wl&amp;requiresSignIn=1' class='nav-link nav-item'><span class='nav-text'>Mi Lista de deseos</span></a><a href='/gp/yourstore?ie=UTF8&amp;ref_=nav_youraccount_recs' class='nav-link nav-item'><span class='nav-text'>Mis recomendaciones</span></a><a href='/yourpets?_encoding=UTF8&amp;ref_=nav_youraccount_ya_pp' class='nav-link nav-item'><span class='nav-text'>Mis mascotas</span></a><a href='/hz5/yourmembershipsandsubscriptions?_encoding=UTF8&amp;ref_=nav_youraccount_digital_subscriptions' class='nav-link nav-item'><span class='nav-text'>Pertenencia a programas y suscripciones</span></a><a href='/gp/primecentral?ie=UTF8&amp;ref_=nav_youraccount_prime' class='nav-link nav-item'><span class='nav-text'>Mi suscripción a Amazon Prime</span></a><a href='/gp/subscribe-and-save/manage?ie=UTF8&amp;ref_=nav_youraccount_sns' class='nav-link nav-item'><span class='nav-text'>Mis suscripciones a productos</span></a><a href='/b?ie=UTF8&amp;node=14862331031&amp;ref_=nav_youraccount_esb2b_reg' class='nav-link nav-item'><span class='nav-text'>Hazte una cuenta Amazon Business</span></a><div class='nav-divider'></div><a href='/gp/digital/fiona/manage?ie=UTF8&amp;ref_=nav_youraccount_myk' class='nav-link nav-item'><span class='nav-text'>Gestionar contenido y dispositivos</span></a><a href='/gp/kindle/ku/ku_central?ie=UTF8&amp;ref_=nav_youraccount_ku' class='nav-link nav-item'><span class='nav-text'>Mi Kindle Unlimited</span></a><a href='/gp/dmusic/mp3/player?ie=UTF8&amp;ref_=nav_youraccount_cldplyr' class='nav-link nav-item'><span class='nav-text'>Mi Biblioteca musical</span></a><a href='/gp/video/ssoredirect?ie=UTF8&amp;pvp=%2Fref%253Ddvm_crs_gno_es_xs_s_dk_nav_eg_al_yracc_0_u&amp;ref_=nav_youraccount_dvm_crs_gno_es_xs_s_dk_nav_eg_al_yracc_0_u' class='nav-link nav-item'><span class='nav-text'>Mi Prime Video</span></a><a href='/clouddrive?_encoding=UTF8&amp;ref_=nav_youraccount_clddrv' class='nav-link nav-item'><span class='nav-text'>Mi Amazon Drive</span></a><a href='/gp/mas/your-account/myapps?ie=UTF8&amp;ref_=nav_youraccount_aad' class='nav-link nav-item'><span class='nav-text'>Mis Apps y dispositivos</span></a><div class='nav-divider'></div><a class='nav-link nav-item'><span class='nav-text'></span></a><a href='/gp/navigation/redirector.html/ref=sign-in-redirect?ie=UTF8&amp;associationHandle=esflex&amp;currentPageURL=https%3A%2F%2Fwww.amazon.es%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct&amp;pageType=&amp;switchAccount=picker&amp;yshURL=https%3A%2F%2Fwww.amazon.es%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct' class='nav-link nav-item' id='nav-item-switch-account'><span class='nav-text'>Cambiar de cuenta</span></a><a href='/gp/flex/sign-out.html?ie=UTF8&amp;action=sign-out&amp;path=%2Fgp%2Fyourstore%2Fhome&amp;ref_=nav_youraccount_signout&amp;signIn=1&amp;useRedirectOnSuccess=1' class='nav-link nav-item' id='nav-item-signout'><span class='nav-text'>Cerrar sesión</span></a></div></div>"
        },
        "templates": {
            "asin-promo": "<a href='<#=destination #>' class='nav_asin_promo'>  <img src='<#=image #>' class='nav_asin_promo_img'/>  <span class='nav_asin_promo_headline'><#=headline #></span>  <span class='nav_asin_promo_info'>    <span class='nav_asin_promo_title'><#=productTitle #></span>    <span class='nav_asin_promo_title2'><#=productTitle2 #></span>    <span class='nav_asin_promo_price'><#=price #></span>  </span>  <span class='nav_asin_promo_button nav-sprite'><#=button #></span></a>",
            "discoveryPanelList": "<# var renderItems = function(items) { #>    <span class='nav-dp-title nav-item'>    Deliveries at a glance    <div class='nav-divider-container'><div class='nav-divider'></div></div></span>    <# jQuery.each(items, function (i, item) { #>        <span class='nav-item'>            <a href='<#=item.order_link#>' class='nav-dp-link'>                <span class='nav-dp-left-column'>                    <img src='<#=item.image#>' class='nav-dp-image'/>                </span>                <span class='nav-dp-right-column'>                    <span class='nav-dp-text <#=item.status#>'>                        <#=item.status_text#>                        <br/>                    </span>                    <# if(item.secondary_status_text) { #>                        <span class='nav-dp-text-secondary <#=item.status#>'>                            <#=item.secondary_status_text#>                        </span>                    <# } #>                </span>            </a>            <div class='nav-divider-container'><div class='nav-divider'></div></div>        </span>  <# }); #>  <a href='/your-orders/ref=nav_dp_ayo' class='nav-dp-link-emphasis'>      View all orders  </a><# }; #><# renderItems(items); #>",
            "itemList": "<# var hasColumns = (function () {  var checkColumns = function (_items) {    if (!_items) {      return false;    }    for (var i=0; i<_items.length; i++) {      if (_items[i].columnBreak || (_items[i].items && checkColumns(_items[i].items))) {        return true;      }    }    return false;  };  return checkColumns(items);}()); #><# if(hasColumns) { #>  <# if(items[0].image && items[0].image.src) { #>    <div class='nav-column nav-column-first nav-column-image'>  <# } else if (items[0].greeting) { #>    <div class='nav-column nav-column-first nav-column-greeting'>  <# } else { #>    <div class='nav-column nav-column-first'>  <# } #><# } #><# var renderItems = function(items) { #>  <# jQuery.each(items, function (i, item) { #>    <# if(hasColumns && item.columnBreak) { #>      <# if(item.image && item.image.src) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-image'>      <# } else if (item.greeting) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-greeting'>      <# } else { #>        </div><div class='nav-column nav-column-notfirst nav-column-break'>      <# } #>    <# } #>    <# if(item.dividerBefore) { #>      <div class='nav-divider'></div>    <# } #>    <# if(item.text || item.content) { #>      <# if(item.url) { #>        <a href='<#=item.url #>' class='nav-link      <# } else {#>        <span class='      <# } #>      <# if(item.panelKey) { #>        nav-hasPanel      <# } #>      <# if(item.items) { #>        nav-title      <# } #>      <# if(item.decorate == 'carat') { #>        nav-carat      <# } #>      <# if(item.decorate == 'nav-action-button') { #>        nav-action-button      <# } #>      nav-item'      <# if(item.extra) { #>        <#=item.extra #>      <# } #>      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      <# if(item.dataNavRole) { #>        data-nav-role='<#=item.dataNavRole #>'      <# } #>      <# if(item.dataNavRef) { #>        data-nav-ref='<#=item.dataNavRef #>'      <# } #>      <# if(item.panelKey) { #>        data-nav-panelkey='<#=item.panelKey #>'        role='navigation'        aria-label='<#=item.text#>'      <# } #>      <# if(item.subtextKey) { #>        data-nav-subtextkey='<#=item.subtextKey #>'      <# } #>      <# if(item.image && item.image.height > 16) { #>        style='line-height:<#=item.image.height #>px;'      <# } #>      >      <# if(item.decorate == 'carat') { #>        <i class='nav-icon'></i>      <# } #>      <# if(item.image && item.image.src) { #>        <img class='nav-image' src='<#=item.image.src #>' style='height:<#=item.image.height #>px; width:<#=item.image.width #>px;' />      <# } #>      <# if(item.text) { #>        <span class='nav-text<# if(item.classname) { #> <#=item.classname #><# } #>'><#=item.text#><# if(item.badgeText) { #>          <span class='nav-badge'><#=item.badgeText#></span>        <# } #></span>      <# } else if (item.content) { #>        <span class='nav-content'><# jQuery.each(item.content, function (j, cItem) { #><# if(cItem.url && cItem.text) { #><a href='<#=cItem.url #>' class='nav-a'><#=cItem.text #></a><# } else if (cItem.text) { #><#=cItem.text#><# } #><# }); #></span>      <# } #>      <# if(item.subtext) { #>        <span class='nav-subtext'><#=item.subtext #></span>      <# } #>      <# if(item.url) { #>        </a>      <# } else {#>        </span>      <# } #>    <# } #>    <# if(item.image && item.image.src) { #>      <# if(item.url) { #>        <a href='<#=item.url #>'>       <# } #>      <img class='nav-image'      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      src='<#=item.image.src #>' <# if (item.alt) { #> alt='<#= item.alt #>'<# } #>/>      <# if(item.url) { #>        </a>       <# } #>    <# } #>    <# if(item.items) { #>      <div class='nav-panel'> <# renderItems(item.items); #> </div>    <# } #>  <# }); #><# }; #><# renderItems(items); #><# if(hasColumns) { #>  </div><# } #>",
            "notificationsList": "<div class='nav-item nav-title'>  </div><# jQuery.each(items || [], function (i, item) { #>  <div class='nav-item<# if (item.type) { #> nav-noti-list-<#= item.type #><# } #><# if (item.image && item.image.src) { #> nav-noti-list-with-image<# } #>'>    <# if (item.dismissId) { #>      <div class='nav-noti-list-x' data-noti-id='<#= item.dismissId #>'>&times;</div>    <# } #>    <# if (item.image && item.image.src) { #>      <div class='nav-noti-list-image'>        <img class='nav-noti-list-image-tag' src='<#= item.image.src #>' <# if (item.image.alt) { #> alt='<#= item.image.alt #>'<# } #> <# if (item.image.title) { #> title='<#= item.image.title #>'<# } #>/>      </div>    <# } #>    <# if (item.heading) { #>      <div class='nav-noti-list-heading'><#= item.heading #></div>    <# } #>    <# jQuery.each(item.content || [], function (j, itemContent) { #>      <# if (itemContent.url) { #>        <a href='<#= itemContent.url #>' class='nav-noti-list-content'>      <# } else { #>        <div class='nav-noti-list-content'>      <# } #>        <# if (itemContent.text) { #>          <span class='nav-noti-list-text'><#= itemContent.text #></span>        <# } #>        <# if (itemContent.subtext) { #>          <span class='nav-noti-list-subtext'><#= itemContent.subtext #></span>        <# } #>      <# if (itemContent.url) { #>        </a>      <# } else { #>        </div>      <# } #>    <# }); #>  </div><# }); #>",
            "discoveryPanelSummary": "    <span class='nav-dp-title nav-item'>    Deliveries at a glance    <div class='nav-divider-container'><div class='nav-divider'></div></div></span>    <# jQuery.each(items || [], function (i, item) { #>        <span class='nav-item'>            <span class='nav-dp-left-column'>                <img src='<#=item.image.url#>' class='nav-dp-image' height='<#=item.image.height#>'/>            </span>            <span class='nav-dp-right-column'>                <#=item.status_text#>                <div class='nav-dp-secondary-row'>                    <a href='/your-orders/ref=nav_dp_ryo' class='nav-dp-link-emphasis'>                        Sign in to view orders                    </a>                </div>            </span>        </span>    <# }); #>",
            "htmlList": "  <# jQuery.each(items, function (i, item) { #>    <div class='nav-item'>      <#=item #>    </div>  <# }); #>",
            "subnav": "<# if (obj && obj.type === 'vertical') { #>  <# jQuery.each(obj.rows, function (i, row) { #>    <# if (row.flyoutElement === 'button') { #>      <div class='nav_sv_fo_v_button'        <# if (row.elementStyle) { #>          style='<#= row.elementStyle #>'        <# } #>      >        <a href='<#=row.url #>' class='nav-action-button nav-sprite'>          <#=row.text #>        </a>      </div>    <# } else if (row.flyoutElement === 'list' && row.list) { #>      <# jQuery.each(row.list, function (j, list) { #>        <div class='nav_sv_fo_v_column <#=(j === 0) ? 'nav_sv_fo_v_first' : '' #>'>          <ul class='<#=list.elementClass #>'>          <# jQuery.each(list.linkList, function (k, link) { #>            <# if (k === 0) { link.elementClass += ' nav_sv_fo_v_first'; } #>            <li class='<#=link.elementClass #>'>              <# if (link.url) { #>                <a href='<#=link.url #>' class='nav_a'><#=link.text #></a>              <# } else { #>                <span class='nav_sv_fo_v_span'><#=link.text #></span>              <# } #>            </li>          <# }); #>          </ul>        </div>      <# }); #>    <# } else if (row.flyoutElement === 'link') { #>      <# if (row.topSpacer) { #>        <div class='nav_sv_fo_v_clear'></div>      <# } #>      <div class='<#=row.elementClass #>'>        <a href='<#=row.url #>' class='nav_sv_fo_v_lmargin nav_a'>          <#=row.text #>        </a>      </div>    <# } #>  <# }); #><# } else if (obj) { #>  <div class='nav_sv_fo_scheduled'>    <#= obj #>  </div><# } #>",
            "wishlist": "<# jQuery.each(wishlist, function (i, item) { #>  <li class='nav_pop_li'>    <a href='<#=item.url #>' class='nav_a'>      <#=item.name #>    </a>    <div class='nav_tag'>      <!-- TODO this logic should now be in dynamic-wish-list.mi -->      <# if(typeof item.count !='undefined') { #>        <#=          (item.count == 1 ? '{count} producto' : '{count} productos')            .replace('{count}', item.count)        #>      <# } #>    </div>  </li><# }); #>",
            "cart": "<# jQuery.each(items, function (i, item) { #>  <div class='nav-cart-item'>    <a href='<#=item.url #>' class='nav-cart-item-link'>      <img src='<#=item.img #>' class='nav-cart-item-image' />      <span class='nav-cart-item-title'><#=item.name #></span>      <# if (item.weight) { #>        <span class='nav-cart-item-weight' style='display:none;'>          <#= ''.replace('{value}', item.weight.value).replace('{unit}', item.weight.unit) #>        </span>      <# } #>      <# if (item.ourPrice) { #>        <span class='nav-cart-item-buyingPrice'><#=item.ourPrice #></span>      <# } #>      <# if (item.scarcityMessage) { #>        <span class='<#=item.scarcityClass #>'><#=item.scarcityMessage #></span>      <# } #>      <span class='nav-cart-item-quantity'>        <#= 'Cantidad: {count}'.replace('{count}', item.qty) #>      </span>    </a>  </div>  <# if (i%2==1) { #>    <div class='nav-cart-item-break'></div>  <# } #><# }); #><div class='nav-cart-item-break'></div>"
        }
    });
});

window.$Nav && $Nav.declare('config.prefetchUrls', ["https://images-na.ssl-images-amazon.com/images/G/01/authportal/common/images/amznbtn-sprite03._CB395592492_.png", "https://images-na.ssl-images-amazon.com/images/G/30/authportal/common/images/amazon_logo_no-org_mid._CB143113023_.png", "https://images-na.ssl-images-amazon.com/images/G/30/authportal/flex/reduced-nav/ap-flex-reduced-nav-2.0._CB309210521_.js", "https://images-na.ssl-images-amazon.com/images/G/30/authportal/flex/reduced-nav/ap-flex-reduced-nav-2.1._CB343893736_.css", "https://images-na.ssl-images-amazon.com/images/G/30/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized_layout1._CB468502164_.png", "https://images-na.ssl-images-amazon.com/images/G/30/x-locale/common/buttons/sign-in-secure._CB176677795_.gif", "https://images-na.ssl-images-amazon.com/images/G/30/x-locale/common/login/fwcim._CB481730925_.js", "https://images-na.ssl-images-amazon.com/images/G/30/x-locale/common/transparent-pixel._CB386942486_.gif"]);
window.$Nav && $Nav.declare('config.prefetch', function() {
    var pUrls = window.$Nav.getNow('config.prefetchUrls');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function(A) {
        A.preload(pUrls);
    });
});
/*  */
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function(A) {
    if (A.preload) {
        A.preload('https://images-na.ssl-images-amazon.com/images/I/41V-KobG2TL._RC|71x8DbKighL.js,61J7BJn2HyL.js,41W9ohA0e+L.js,11vrNkbdcvL.js,21qaguVEGfL.js,31bnmtkJ6eL.js,51+klsvwgqL.js,313jWehHlpL.js_.js?AUIClients/AmazonNavigationDesktopMetaAsset#desktop');
        A.preload('https://images-na.ssl-images-amazon.com/images/I/21rQMjhzuzL._RC|71qAX-01M6L.css,11-cFHXC3yL.css,31DAr4NkZQL.css,21lRUdwotiL.css,41tc24mJIGL.css,11G4HxMtMSL.css,31OvHRW+XiL.css,01XHMOHpK1L.css_.css?AUIClients/AmazonNavigationDesktopMetaAsset#desktop');
    }
});
window.$Nav && $Nav.declare('config.flyoutURL', null);
window.$Nav && $Nav.declare('btf.lite');
window.$Nav && $Nav.declare('btf.full');
window.$Nav && $Nav.declare('btf.exists');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).register('navCF');


(function(f, h, R, A) {
    function G(a) {
        x && x.tag && x.tag(q(":", "aui", a))
    }

    function v(a, b) {
        x && x.count && x.count("aui:" + a, 0 === b ? 0 : b || (x.count("aui:" + a) || 0) + 1)
    }

    function p(a) {
        try {
            return a.test(navigator.userAgent)
        } catch (b) {
            return !1
        }
    }

    function y(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function q(a, b, c, e) {
        b = b && c ? b + a + c : b || c;
        return e ? q(a, b, e) : b
    }

    function H(a, b, c) {
        try {
            Object.defineProperty(a, b, {
                value: c,
                writable: !1
            })
        } catch (e) {
            a[b] = c
        }
        return c
    }

    function ua(a, b) {
        var c = a.length,
            e = c,
            g = function() {
                e-- || (S.push(b), T || (setTimeout(U, 0), T = !0))
            };
        for (g(); c--;) da[a[c]] ? g() : (B[a[c]] = B[a[c]] || []).push(g)
    }

    function va(a, b, c, e, g) {
        var d = h.createElement(a ? "script" : "link");
        y(d, "error", e);
        g && y(d, "load", g);
        a ? (d.type = "text/javascript", d.async = !0, c && /AUIClients|images[/]I/.test(b) && d.setAttribute("crossorigin", "anonymous"), d.src = b) : (d.rel = "stylesheet", d.href = b);
        h.getElementsByTagName("head")[0].appendChild(d)
    }

    function ea(a, b) {
        function c(c, e) {
            function g() {
                va(b, c, h, function(b) {
                    !I && h ? (h = !1, v("resource_retry"),
                        g()) : (v("resource_error"), a.log("Asset failed to load: " + c, I ? "WARN" : A));
                    b && b.stopPropagation ? b.stopPropagation() : f.event && (f.event.cancelBubble = !0)
                }, e)
            }
            if (fa[c]) return !1;
            fa[c] = !0;
            v("resource_count");
            var h = !0;
            return !g()
        }
        if (b) {
            var e = 0,
                g = 0;
            c.andConfirm = function(a, b) {
                return c(a, function() {
                    e++;
                    b && b.apply(this, arguments)
                })
            };
            c.confirm = function() {
                g++
            };
            c.getCsriCounters = function() {
                return {
                    reqs: e,
                    full: g
                }
            }
        }
        return c
    }

    function wa(a, b, c) {
        for (var e = {
                name: a,
                guard: function(c) {
                    return b.guardFatal(a, c)
                },
                logError: function(c,
                    d, e) {
                    b.logError(c, d, e, a)
                }
            }, g = [], d = 0; d < c.length; d++) J.hasOwnProperty(c[d]) && (g[d] = V.hasOwnProperty(c[d]) ? V[c[d]](J[c[d]], e) : J[c[d]]);
        return g
    }

    function C(a, b, c, e, g) {
        return function(d, h) {
            function n() {
                var a = null;
                e ? a = h : "function" === typeof h && (p.start = D(), a = h.apply(f, wa(d, k, l)), p.end = D());
                if (b) {
                    J[d] = a;
                    a = d;
                    for (da[a] = !0;
                        (B[a] || []).length;) B[a].shift()();
                    delete B[a]
                }
                p.done = !0
            }
            var k = g || this;
            "function" === typeof d && (h = d, d = A);
            b && (d = d ? d.replace(ga, "") : "__NONAME__", W.hasOwnProperty(d) && k.error(q(", reregistered by ",
                q(" by ", d + " already registered", W[d]), k.attribution), d), W[d] = k.attribution);
            for (var l = [], m = 0; m < a.length; m++) l[m] = a[m].replace(ga, "");
            var p = ha[d || "anon" + ++xa] = {
                depend: l,
                registered: D(),
                namespace: k.namespace
            };
            c ? n() : ua(l, k.guardFatal(d, n));
            return {
                decorate: function(a) {
                    V[d] = k.guardFatal(d, a)
                }
            }
        }
    }

    function ia(a) {
        return function() {
            var b = Array.prototype.slice.call(arguments);
            return {
                execute: C(b, !1, a, !1, this),
                register: C(b, !0, a, !1, this)
            }
        }
    }

    function X(a, b) {
        return function(c, e) {
            e || (e = c, c = A);
            var g = this.attribution;
            return function() {
                z.push(b || {
                    attribution: g,
                    name: c,
                    logLevel: a
                });
                var d = e.apply(this, arguments);
                z.pop();
                return d
            }
        }
    }

    function K(a, b) {
        this.load = {
            js: ea(this, !0),
            css: ea(this)
        };
        H(this, "namespace", b);
        H(this, "attribution", a)
    }

    function ja() {
        h.body ? r.trigger("a-bodyBegin") : setTimeout(ja, 20)
    }

    function E(a, b) {
        a.className = Y(a, b) + " " + b
    }

    function Y(a, b) {
        return (" " + a.className + " ").split(" " + b + " ").join(" ").replace(/^ | $/g, "")
    }

    function ka(a) {
        try {
            return a()
        } catch (b) {
            return !1
        }
    }

    function L() {
        if (M) {
            var a = {
                w: f.innerWidth ||
                    n.clientWidth,
                h: f.innerHeight || n.clientHeight
            };
            5 < Math.abs(a.w - Z.w) || 50 < a.h - Z.h ? (Z = a, N = 4, (a = k.mobile || k.tablet ? 450 < a.w && a.w > a.h : 1250 <= a.w) ? E(n, "a-ws") : n.className = Y(n, "a-ws")) : 0 < N && (N--, la = setTimeout(L, 16))
        }
    }

    function ya(a) {
        (M = a === A ? !M : !!a) && L()
    }

    function za() {
        return M
    }

    function u(a, b) {
        return "sw:" + (b || "") + ":" + a + ":"
    }

    function ma() {
        na.forEach(function(a) {
            G(a)
        })
    }

    function t(a) {
        na.push(a)
    }

    function oa(a, b, c, e) {
        if (c) {
            b = p(/Chrome/i) && !p(/Edge/i) && !p(/OPR/i) && !a.capabilities.isAmazonApp && !p(new RegExp(aa + "bwv" +
                aa + "b"));
            var g = u(e, "browser"),
                d = u(e, "prod_mshop"),
                f = u(e, "beta_mshop");
            !a.capabilities.isAmazonApp && c.browser && b && (t(g + "supported"), c.browser.action(g, e));
            !b && c.browser && t(g + "unsupported");
            c.prodMshop && t(d + "unsupported");
            c.betaMshop && t(f + "unsupported")
        }
    }
    "use strict";
    var O = R.now = R.now || function() {
            return +new R
        },
        D = function(a) {
            return a && a.now ? a.now.bind(a) : O
        }(f.performance),
        P = D(),
        l = f.AmazonUIPageJS || f.P;
    if (l && l.when && l.register) {
        for (var P = [], m = h.currentScript; m; m = m.parentElement) m.id && P.push(m.id);
        return l.log("A copy of P has already been loaded on this page.",
            "FATAL", P.join(" "))
    }
    var x = f.ue;
    G();
    G("aui_build_date:3.19.8-2019-12-30");
    var S = [],
        T = !1,
        U;
    U = function() {
        for (var a = setTimeout(U, 0), b = O(); S.length;)
            if (S.shift()(), 50 < O() - b) return;
        clearTimeout(a);
        T = !1
    };
    var da = {},
        B = {},
        fa = {},
        I = !1;
    y(f, "beforeunload", function() {
        I = !0;
        setTimeout(function() {
            I = !1
        }, 1E4)
    });
    var ga = /^prv:/,
        W = {},
        J = {},
        V = {},
        ha = {},
        xa = 0,
        aa = String.fromCharCode(92),
        F, z = [],
        pa = f.onerror;
    f.onerror = function(a, b, c, e, g) {
        g && "object" === typeof g || (g = Error(a, b, c), g.columnNumber = e, g.stack = b || c || e ? q(aa, g.message, "at " +
            q(":", b, c, e)) : A);
        var d = z.pop() || {};
        g.attribution = q(":", g.attribution || d.attribution, d.name);
        g.logLevel = d.logLevel;
        g.attribution && console && console.log && console.log([g.logLevel || "ERROR", a, "thrown by", g.attribution].join(" "));
        z = [];
        pa && (d = [].slice.call(arguments), d[4] = g, pa.apply(f, d))
    };
    K.prototype = {
        logError: function(a, b, c, e) {
            b = {
                message: b,
                logLevel: c || "ERROR",
                attribution: q(":", this.attribution, e)
            };
            if (f.ueLogError) return f.ueLogError(a || b, a ? b : null), !0;
            console && console.error && (console.log(b), console.error(a));
            return !1
        },
        error: function(a, b, c, e) {
            a = Error(q(":", e, a, c));
            a.attribution = q(":", this.attribution, b);
            throw a;
        },
        guardError: X(),
        guardFatal: X("FATAL"),
        guardCurrent: function(a) {
            var b = z[z.length - 1];
            return b ? X(b.logLevel, b).call(this, a) : a
        },
        log: function(a, b, c) {
            return this.logError(null, a, b, c)
        },
        declare: C([], !0, !0, !0),
        register: C([], !0),
        execute: C([]),
        AUI_BUILD_DATE: "3.19.8-2019-12-30",
        when: ia(),
        now: ia(!0),
        trigger: function(a, b, c) {
            var e = O();
            this.declare(a, {
                data: b,
                pageElapsedTime: e - (f.aPageStart || NaN),
                triggerTime: e
            });
            c && c.instrument && F.when("prv:a-logTrigger").execute(function(b) {
                b(a)
            })
        },
        handleTriggers: function() {
            this.log("handleTriggers deprecated")
        },
        attributeErrors: function(a) {
            return new K(a)
        },
        _namespace: function(a, b) {
            return new K(a, b)
        }
    };
    var r = H(f, "AmazonUIPageJS", new K);
    F = r._namespace("PageJS", "AmazonUI");
    F.declare("prv:p-debug", ha);
    r.declare("p-recorder-events", []);
    r.declare("p-recorder-stop", function() {});
    H(f, "P", r);
    ja();
    if (h.addEventListener) {
        var qa;
        h.addEventListener("DOMContentLoaded", qa = function() {
            r.trigger("a-domready");
            h.removeEventListener("DOMContentLoaded", qa, !1)
        }, !1)
    }
    var n = h.documentElement,
        ba = function() {
            var a = ["O", "ms", "Moz", "Webkit"],
                b = h.createElement("div");
            return {
                testGradients: function() {
                    b.style.cssText = "background-image:-webkit-gradient(linear,left top,right bottom,from(#1E4),to(white));background-image:-webkit-linear-gradient(left top,#1E4,white);background-image:linear-gradient(left top,#1E4,white);";
                    return ~b.style.backgroundImage.indexOf("gradient")
                },
                test: function(c) {
                    var e = c.charAt(0).toUpperCase() +
                        c.substr(1);
                    c = (a.join(e + " ") + e + " " + c).split(" ");
                    for (e = c.length; e--;)
                        if ("" === b.style[c[e]]) return !0;
                    return !1
                },
                testTransform3d: function() {
                    var a = !1;
                    f.matchMedia && (a = f.matchMedia("(-webkit-transform-3d)").matches);
                    return a
                }
            }
        }(),
        l = n.className,
        ra = /(^| )a-mobile( |$)/.test(l),
        sa = /(^| )a-tablet( |$)/.test(l),
        k = {
            audio: function() {
                return !!h.createElement("audio").canPlayType
            },
            video: function() {
                return !!h.createElement("video").canPlayType
            },
            canvas: function() {
                return !!h.createElement("canvas").getContext
            },
            svg: function() {
                return !!h.createElementNS &&
                    !!h.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
            },
            offline: function() {
                return navigator.hasOwnProperty && navigator.hasOwnProperty("onLine") && navigator.onLine
            },
            dragDrop: function() {
                return "draggable" in h.createElement("span")
            },
            geolocation: function() {
                return !!navigator.geolocation
            },
            history: function() {
                return !(!f.history || !f.history.pushState)
            },
            webworker: function() {
                return !!f.Worker
            },
            autofocus: function() {
                return "autofocus" in h.createElement("input")
            },
            inputPlaceholder: function() {
                return "placeholder" in
                    h.createElement("input")
            },
            textareaPlaceholder: function() {
                return "placeholder" in h.createElement("textarea")
            },
            localStorage: function() {
                return "localStorage" in f && null !== f.localStorage
            },
            orientation: function() {
                return "orientation" in f
            },
            touch: function() {
                return "ontouchend" in h
            },
            gradients: function() {
                return ba.testGradients()
            },
            hires: function() {
                var a = f.devicePixelRatio && 1.5 <= f.devicePixelRatio || f.matchMedia && f.matchMedia("(min-resolution:144dpi)").matches;
                v("hiRes" + (ra ? "Mobile" : sa ? "Tablet" : "Desktop"), a ? 1 : 0);
                return a
            },
            transform3d: function() {
                return ba.testTransform3d()
            },
            touchScrolling: function() {
                return p(/Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|Chrome|Silk|Firefox|Trident.+?; Touch/i)
            },
            ios: function() {
                return p(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) && !p(/trident|Edge/i)
            },
            android: function() {
                return p(/android.([1-9]|[L-Z])/i) && !p(/trident|Edge/i)
            },
            mobile: function() {
                return ra
            },
            tablet: function() {
                return sa
            },
            rtl: function() {
                return "rtl" === n.dir
            }
        };
    for (m in k) k.hasOwnProperty(m) &&
        (k[m] = ka(k[m]));
    for (var ca = "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "), Q = 0; Q < ca.length; Q++) k[ca[Q]] = ka(function() {
        return ba.test(ca[Q])
    });
    var M = !0,
        la = 0,
        Z = {
            w: 0,
            h: 0
        },
        N = 4;
    L();
    y(f, "resize", function() {
        clearTimeout(la);
        N = 4;
        L()
    });
    var ta = {
        getItem: function(a) {
            try {
                return f.localStorage.getItem(a)
            } catch (b) {}
        },
        setItem: function(a, b) {
            try {
                return f.localStorage.setItem(a, b)
            } catch (c) {}
        }
    };
    n.className = Y(n, "a-no-js");
    E(n, "a-js");
    !p(/OS [1-8](_[0-9]*)+ like Mac OS X/i) ||
        f.navigator.standalone || p(/safari/i) || E(n, "a-ember");
    l = [];
    for (m in k) k.hasOwnProperty(m) && k[m] && l.push("a-" + m.replace(/([A-Z])/g, function(a) {
        return "-" + a.toLowerCase()
    }));
    E(n, l.join(" "));
    n.setAttribute("data-aui-build-date", "3.19.8-2019-12-30");
    r.register("p-detect", function() {
        return {
            capabilities: k,
            localStorage: k.localStorage && ta,
            toggleResponsiveGrid: ya,
            responsiveGridEnabled: za
        }
    });
    p(/UCBrowser/i) || k.localStorage && E(n, ta.getItem("a-font-class"));
    r.declare("a-event-revised-handling", !1);
    var w;
    try {
        w =
            navigator.serviceWorker
    } catch (a) {
        G("sw:nav_err")
    }
    w && (y(w, "message", function(a) {
        a && a.data && v(a.data.k, a.data.v)
    }), w.controller && w.controller.postMessage("MSG-RDY"));
    var na = [],
        l = {
            reg: {},
            unreg: {}
        };
    l.unreg.browser = {
        action: function(a, b) {
            var c = w.getRegistrations();
            c && c.then(function(c) {
                c.forEach(function(c) {
                    c.unregister().then(function() {
                        v(a + "success")
                    }).catch(function(c) {
                        r.logError(c, "[AUI SW] Failed to " + b + " service worker: ");
                        v(a + "failure")
                    })
                })
            })
        }
    };
    (function(a) {
        var b = a.reg,
            c = a.unreg;
        w && w.getRegistrations ?
            (F.when("A", "a-util").execute(function(a, b) {
                oa(a, b, c, "unregister")
            }), y(f, "load", function() {
                F.when("A", "a-util").execute(function(a, c) {
                    oa(a, c, b, "register");
                    ma()
                })
            })) : (b && (b.browser && t(u("register", "browser") + "unsupported"), b.prodMshop && t(u("register", "prod_mshop") + "unsupported"), b.betaMshop && t(u("register", "beta_mshop") + "unsupported")), c && (c.browser && t(u("unregister", "browser") + "unsupported"), c.prodMshop && t(u("unregister", "prod_mshop") + "unsupported"), c.betaMshop && t(u("unregister", "beta_mshop") + "unsupported")),
                ma())
    })(l);
    r.declare("a-fix-event-off", !1);
    v("pagejs:pkgExecTime", D() - P)
})(window, document, Date);
(function(b) {
    function r(a, h, g) {
        function m(a, b) {
            a = a.slice();
            l && a.unshift({});
            for (var c = 0; c < k.length; c++) a.splice(k[c], 0, b[c]);
            b = g.apply(null, a);
            return l ? a[0] : b
        }
        "string" !== typeof a && b.P.error("C001");
        if (!n[a]) {
            n[a] = !0;
            g || (g = h, h = []);
            a = a.split(":", 2);
            var c = a[1] ? a[0] : void 0,
                f = (a[1] || a[0]).replace(/@capability\//, "@c/"),
                e = c ? b.P._namespace(c) : b.P,
                p = !f.lastIndexOf("@c/", 0);
            a = [];
            for (var l = !1, q = [], k = [], c = 0; c < h.length; c++) {
                var d = h[c];
                "module" !== d && "require" !== d || e.error("C002");
                "exports" === d ? (c && e.error("C003"),
                    l = !0) : d.lastIndexOf("@p/", 0) ? d.lastIndexOf("@c/", 0) ? a.push("mix:" + d) : (k.push(c), q.push(d)) : a.push(d.substr(3))
            }
            e.when.apply(e, a).register("mix:" + f, function() {
                var a = [].slice.call(arguments);
                return p || k.length ? {
                    capabilities: q,
                    cardModuleFactory: function(b) {
                        b = m(a, b);
                        b.P = e;
                        return b
                    }
                } : m(a)
            });
            p && e.when("mix:@amzn/mix.client-runtime", "mix:" + f).execute(function(a, b) {
                a.registerCapabilityModule(f, b)
            });
            e.when("mix:" + f).register("xcp:" + f, function(a) {
                return a
            })
        }
    }
    "use strict";
    var n = {};
    b.mix_d || ((b.Promise ? P : P.when("3p-promise")).register("@p/promise-is-ready",
        function(a) {
            b.Promise = b.Promise || a
        }), b.mix_d = function(a, b, g) {
        P.when("@p/promise-is-ready").execute("@p/mix-d-deps", function() {
            r(a, b, g)
        })
    }, b.xcp_d = b.mix_d, P.when("mix:@amzn/mix.client-runtime").execute(function(a) {
        P.declare("xcp:@xcp/runtime", a)
    }))
})(window);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/61-6nKPKyWL.js?AUIClients/AmazonUIjQuery');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/11-BZEJ8lnL._RC|61GQ9IdK7HL.js,21Of0-9HPCL.js,012FVc3131L.js,119KAWlHU6L.js,51CF7BmbF2L.js,11AHlQhPRjL.js,016iHgpF74L.js,11aNYFFS5hL.js,116tgw9TSaL.js,211-p4GRUCL.js,01PoLXBDXWL.js,61VSCV4uJuL.js,01ezj5Rkz1L.js,11BOgvnnntL.js,31UWuPgtTtL.js,01rpauTep4L.js,01iyxuSGj4L.js,01OTNfCf5oL.js_.js?AUIClients/AmazonUI#218320-T1.191015-T1');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/412W1GAcm3L.js?AUIClients/CardJsRuntimeBuzzCopyBuild');
});

(function(d, b, m) {
    function c(a) {
        return "--private-amznjqshim-" + a
    }

    function e(a, l) {
        var b = c(l);
        d.now(b).execute(c(a + "-" + b) + "-" + f++, function(a) {
            void 0 === a && d.declare(b, !0)
        })
    }

    function h(a) {
        e("markRequested", "functionality-requested:" + a)
    }

    function g(a) {
        e("completedStage", "stage-" + a)
    }
    b.goN2Debug || (b.goN2Debug = {
        info: function() {}
    });
    "use strict";
    var f = 0,
        k = b.amznJQ = new function() {
            this.addLogical = this.addStyle = this.addStyles = this.PLNow = this.windowOnLoad = function() {};
            this.declareAvailable = function(a) {
                e("declaring",
                    a)
            };
            this.available = function(a, b) {
                a = c(a);
                h(a);
                d.when(a, c("jQuery")).execute(c("available-" + a) + "-" + f++, b)
            };
            this.onReady = function(a, b) {
                a = c(a);
                h(a);
                d.when(a, "a-domready", c("jQuery")).execute(c("onReady-" + a) + "-" + f++, b)
            };
            this.onCompletion = function(a, b) {
                var e = c("stage-" + a);
                d.when(e, c("jQuery")).execute(b)
            };
            this.completedStage = function(a) {
                g(a)
            };
            this.addPL = function(a) {
                d.when("a-preload").execute(c("Preloader") + "-" + f++, function(b) {
                    b.preload(a)
                })
            };
            this.strings = {};
            this.chars = {}
        };
    d.when("load").execute(c("fail-safe-stages"),
        function() {
            g("amznJQ.theFold");
            g("amznJQ.criticalFeature")
        });
    d.when("jQuery").execute("define amznJQ jQuery", function(a) {
        b.jQuery || (b.jQuery = a);
        k.jQuery || (k.jQuery = a);
        e("declaring", "jQuery")
    })
})(window.P || window.AmazonUIPageJS, window, document);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/41koV6Gxm0L.js?AUIClients/AmazonPopoversAUIShim#es');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/61eJOQSDz%2BL.js?AUIClients/DetailPageDesktopImageBlockMetaAsset#230654-T1.191158-T1.224733-T1.210909-T1.169593-T1');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/41AfbUzccxL._RC|31IE3jRc55L.js,41AYvTFVQHL.js,01wFfxST+ZL.js,018-nGQj6aL.js,31rngc1KlVL.js,31dZveQ-6zL.js,51qKFuMDf6L.js,31c9mPTk6UL.js,41nn939v7TL.js,715TrdP3byL.js,41Vn8AmO-iL.js,21E2aIDj6DL.js,31Nb5hZQizL.js,31zsZSnXGtL.js,21qOGqjcM7L.js,01JzE3-DfLL.js,0185ITV0M6L.js,41I+tXeHewL.js,01TQyo0bnIL.js,11SRkYWcpPL.js,01mCXbe1nUL.js,61L2gH9DmIL.js,01GhKb2usNL.js,11MQqFPEK+L.js,013eoEBTVUL.js,016QFWAAdML.js,31qUdoxPE8L.js,21NCM8biKBL.js,41svsFj64ML.js,41hDaGHlxfL.js,51Wf8zwf5jL.js,014kCoIHgIL.js,21PWs2LLIGL.js,118Say7HIZL.js,31bEXnVglKL.js_.js?AUIClients/AmazonDevicesDetailPageMetaAssets_MAKO_198242#desktop.language-es.es.234606-T1.140997-T1.195406-C.227948-T1.216044-T1.183511-T1.103061-T1.238103-C.200616-T1.229116-T1.199271-T1.239422-T1.231825-T1.131900-T1.184660-C.162909-T1.172346-T1.147957-T1.154031-T3.142088-C');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/711yJcllgGL.js?AUIClients/VideojsLegacy');
});

if (typeof uet === 'function' && typeof ues === 'function') {
    var scope = 'Detail_customer-reviews-top_Glance';
    var placementId = '137fc51e-618b-43a9-aad5-32d234c691eb';
    ues('wb', 'adplacements:' + scope.replace(/\_/g, ':'), {
        wb: 1
    });
    uet('bb', 'adplacements:' + scope.replace(/\_/g, ':'), {
        wb: 1
    });
    if (placementId) {
        ues('wb', 'adplacements:' + placementId, {
            wb: 1
        });
        uet('bb', 'adplacements:' + placementId, {
            wb: 1
        });
    }
}

(function() {
    function a(d, e) {
        if (window.addEventListener) {
            window.addEventListener(d, e, false);
        } else {
            if (window.attachEvent) {
                window.attachEvent("on" + d, e);
            }
        }
    }

    function c(d, e) {
        if (window.removeEventListener) {
            window.removeEventListener(d, e, false);
        } else {
            if (window.detachEvent) {
                window.detachEvent("on" + d, e);
            }
        }
    }
    var b = function() {
        (function() {
            (function(j, m) {
                j.sfLogErrors = j.sfLogErrors || false;
                var o = o || function(s, r) {
                    r = r || new Error(s);
                    if (j.ue && typeof ue.count == "function") {
                        ue.count("adplacements:safeFrameError", 1);
                    }
                    if (!j.sfLogErrors) {
                        return;
                    }
                    if (j.ueLogError) {
                        j.ueLogError(r, {
                            logLevel: "ERROR",
                            attribution: "APE-safeframe",
                            message: s + " "
                        });
                    } else {
                        if (typeof console !== "undefined" && console.error) {
                            console.error(s, r);
                        }
                    }
                };
                j.aanParams = j.aanParams || {};
                j.aanParams["customer-reviews-top"] = "site=amazon.es;pt=Detail;slot=customer-reviews-top;pid=B07PVCVBN7;bn=599370031;arid=7f72b8255acb49a480453c7197a8bd33";
                j["customer-reviews-top"] = {};
                j["customer-reviews-top"].adStartTime = (new Date()).getTime();

                function d() {
                    return j.innerHeight || m.documentElement.clientHeight;
                }

                function g() {
                    return j.innerWidth || m.documentElement.clientWidth;
                }

                function e(t, r, s) {
                    if (t > 0) {
                        return (s > t);
                    } else {
                        return (r > 0);
                    }
                }
                var f = function() {
                    return (Date.now ? Date.now() : new Date().getTime());
                };
                throttle = function(s, u, y) {
                    var r, w, z;
                    var x = null;
                    var v = 0;
                    if (!y) {
                        y = {};
                    }
                    var t = function() {
                        v = y.leading === false ? 0 : f();
                        x = null;
                        z = s.apply(r, w);
                        if (!x) {
                            r = w = null;
                        }
                    };
                    return function() {
                        var B = f();
                        if (!v && y.leading === false) {
                            v = B;
                        }
                        var A = u - (B - v);
                        r = this;
                        w = arguments;
                        if (A <= 0 || A > u) {
                            if (x) {
                                clearTimeout(x);
                                x = null;
                            }
                            v = B;
                            z = s.apply(r, w);
                            if (!x) {
                                r = w = null;
                            }
                        } else {
                            if (!x && y.trailing !== false) {
                                x = setTimeout(t, A);
                            }
                        }
                        return z;
                    };
                };

                function l(u, w, v, r) {
                    try {
                        var t = m.getElementById(u).getBoundingClientRect();
                        if (e(t.top, t.bottom, d()) && e(t.left, t.right, g())) {
                            if (typeof uet == "function") {
                                uet("bb", "adplacements:viewablelatency:" + w, {
                                    wb: 1
                                });
                                if (v) {
                                    uet("bb", "adplacements:viewablelatency:" + v, {
                                        wb: 1
                                    });
                                }
                            }
                            if (typeof uex == "function" && j.ue && typeof ue.count == "function") {
                                if (j.apeViewableLatencyTrackers[r].loaded) {
                                    uex("ld", "adplacements:viewablelatency:" + w, {
                                        wb: 1
                                    });
                                    if (v) {
                                        uex("ld", "adplacements:viewablelatency:" + v, {
                                            wb: 1
                                        });
                                    }
                                    ue.count("adplacements:htmlviewed:loaded:" + w, 1);
                                    if (v) {
                                        ue.count("adplacements:htmlviewed:loaded:" + v, 1);
                                    }
                                }
                                ue.count("adplacements:htmlviewed:" + w, 1);
                                if (v) {
                                    ue.count("adplacements:htmlviewed:" + v, 1);
                                }
                            }
                            j.apeViewableLatencyTrackers[r].viewed = true;
                            if (j.apeViewableLatencyTrackers[r].tracker) {
                                c("scroll", j.apeViewableLatencyTrackers[r].tracker);
                                c("resize", j.apeViewableLatencyTrackers[r].tracker);
                            }
                        }
                    } catch (s) {
                        j.apeViewableLatencyTrackers[r].valid = false;
                    }
                }
                try {
                    j.apeViewableLatencyTrackers = j.apeViewableLatencyTrackers || {};
                    var q = "ape_Detail_customer-reviews-top_Glance_placement";
                    var p = "Detail_customer-reviews-top_Glance".replace(/\_/g, ":");
                    var h = "137fc51e-618b-43a9-aad5-32d234c691eb";
                    var i = "7f72b8255acb49a480453c7197a8bd33";
                    j.apeViewableLatencyTrackers[i] = j.apeViewableLatencyTrackers[i] || {};
                    j.apeViewableLatencyTrackers[i].valid = true;
                    l(q, p, h, i);
                    if (j.apeViewableLatencyTrackers[i].valid && !j.apeViewableLatencyTrackers[i].viewed) {
                        j.apeViewableLatencyTrackers[i].tracker = throttle(function() {
                            l(q, p, h, i);
                        }, 20);
                        a("scroll", j.apeViewableLatencyTrackers[i].tracker);
                        a("resize", j.apeViewableLatencyTrackers[i].tracker);
                    }
                } catch (k) {
                    if (j.apeViewableLatencyTrackers && j.apeViewableLatencyTrackers["7f72b8255acb49a480453c7197a8bd33"]) {
                        j.apeViewableLatencyTrackers["7f72b8255acb49a480453c7197a8bd33"].valid = false;
                    }
                    o("Error initializing viewable latency instrumentation", k);
                }
                try {
                    if (j.DAsf) {
                        j.DAsf.loadAds();
                    } else {
                        var n = m.createElement("script");
                        n.type = "text/javascript";
                        n.async = true;
                        n.charset = "utf-8";
                        n.src = "https://images-eu.ssl-images-amazon.com/images/G/30/ape/sf/desktop/DAsf-1.50.b3059ee._V445534834_.js?csm_attribution=APE-SafeFrame";
                        n.onerror = function() {
                            o("Error loading SafeFrame library");
                        };
                        n.setAttribute("crossorigin", "anonymous");
                        (m.getElementsByTagName("head")[0] || m.getElementsByTagName("body")[0]).appendChild(n);
                        j.collectSafeframeRTD = Math.random() * 100 < 0;
                        if (j.collectSafeframeRTD) {
                            var n = m.createElement("script");
                            n.type = "text/javascript";
                            n.async = true;
                            n.charset = "utf-8";
                            n.src = "https://images-eu.ssl-images-amazon.com/images/G/30/ape/sf/rtd/safeframeRtd-1.50.b3059ee._V445534799_.js";
                            n.onerror = function() {
                                o("Error loading SafeFrame RTD library");
                            };
                            n.setAttribute("crossorigin", "anonymous");
                            (m.getElementsByTagName("head")[0] || m.getElementsByTagName("body")[0]).appendChild(n);
                        }
                    }
                } catch (k) {
                    o("Error appending DAsf library", k);
                }
            }(window, document));
        })();
    };
    b();
})();

P.when('review-image-binder', 'reviewsLightbox-js').execute(function(reviewImageBinder) {
    reviewImageBinder.bindReview("R1TUIM4BPLDH3",
        "R1TUIM4BPLDH3_imageSection_main",
        "R1TUIM4BPLDH3_gallerySection_main");
});

P.when('review-image-binder', 'reviewsLightbox-js').execute(function(reviewImageBinder) {
    reviewImageBinder.bindReview("RVTNFLAYCY9WZ",
        "RVTNFLAYCY9WZ_imageSection_main",
        "RVTNFLAYCY9WZ_gallerySection_main");
});

(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('navCF').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/11VbV%2B%2BKhQL.js?AUIClients/RetailWebsiteOverlayAUIAssets');
});

(function(a, b) {
    a.attachEvent ? a.attachEvent("onload", b) : a.addEventListener && a.addEventListener("load", b, !1)
})(window, function() {
    setTimeout(function() {
        var el = document.getElementById("sis_pixel_r2");
        el && (el.innerHTML = '<iframe id="DAsis" src="//aax-eu.amazon-adsystem.com/s/iu3?d=amazon.es&slot=navFooter&a1=0101244a9238eb4d695f66396e769509cb08a6cae706a153eb1ab7f36466cbd547ad&a2=010170ce23cce35edde8af3bdd98fa1a3e66c04b7a1bcff4a851d611aceced96ffac&old_oo=0&ts=1578848339417&s=AX1U8sG8cJHGMwWCQnEIjbayj-VZ5QBChX9upePGszka&cb=1578848339417" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>')
    }, 300)
});

(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/61m-slBs3VL.js?AUIClients/AmazonDevicesDetailPageLegacyAssets');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/31QLlXfnpNL.js?AUIClients/TwisterCoreAsset');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/31hOEXtaBmL.js?AUIClients/DetailPageTwisterViewAsset#221418-T1.181142-T1');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/71H2GbRXUeL.js?AUIClients/DetailPageTwisterAssets#221418-T1.129737-C');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/31g8qPz5YML.js?AUIClients/PageRefreshAsset');
});

window.isTwisterAUI = 1;
window.DetailPage = {};
window.gIsNewTwister = true;
window.DetailPage.useTwisterJsInitFromDPXPartially = 1;
P.register('twister-js-init-mason-data', function() {
    var dataToReturn = {
        "printConsoleLogs": 0,
        "hoverMS": 0,
        "dimensions": [],
        "prioritizeReqPrefetch": 0,
        "prefetchRelatedAttrs": "{\"landingPrefetchState\":\"TRIGGER_ON_INTERACTION\",\"prefetchOtherReqDimensions\":0,\"performLandingAsinPrefetch\":0,\"performParentPrefetch\":0,\"performPrefetches\":1,\"performPartialPrefetch\":0}",
        "current_asin": "B07PVCVBN7",
        "prefetchCount": 0,
        "newPrefetchWeblab": "",
        "isProductizationEnabled": 1,
        "productGroupID": "amazon_smp_display_on_website",
        "displayConfigStylesData": {
            "vodd": {
                "selected": "voddSelect",
                "invalid": "voddUnavailable",
                "available": "voddAvailable"
            },
            "etdd": {
                "selected": "selected",
                "invalid": "invalid",
                "available": "available"
            },
            "dropdown": {
                "hidden": "dropdownHidden",
                "selected": "dropdownSelect",
                "invalid": "dropdownUnavailable",
                "available": "dropdownAvailable"
            },
            "swatch": {
                "selected": "swatchSelect",
                "invalid": "swatchUnavailable",
                "available": "swatchAvailable"
            },
            "singleton": {
                "selected": "singletonSelect",
                "invalid": "singletonSelect",
                "available": "singletonSelect"
            }
        },
        "isConsolesOrAccessories": 0,
        "view": "glance",
        "twisterAccessibilityCurrentSelection": "Your current selection is : ",
        "isLoggingEnabled": 0,
        "useMS": 0,
        "dimToAsinMapData": {},
        "selected_variation_values": {},
        "unselectedDimCount": null,
        "loadingBarHtml2": "<table border=\"0\" width=\"100%\"> <tr>   <td align=\"center\" style=\"font-family: Tahoma, Arial, Helvetica, sans-serif;font-size:12px;\">Cargando...</td></tr> <tr> <td align=\"center\"><img src=\"https://images-na.ssl-images-amazon.com/images/G/30/x-locale/communities/tags/snake._CB180305720_.gif\" style=\"margin-left:-8px;\" /></td>  </tr></table>",
        "measurement": {
            "cf": {
                "longPollImageTag": null,
                "count": 2,
                "marker": "twister-cf-marker_feature_div",
                "longPollHtmlTag": null
            },
            "atf": {
                "count": 2,
                "marker": "twister-atf-marker_feature_div"
            }
        },
        "selected_variations": {},
        "jqupgrade": 0,
        "num_variation_dimensions": 0,
        "ajaxTimeout": 20000,
        "prefetchFixWeblab": 1,
        "dimensionValuesDisplayData": {},
        "hidePopover": 1,
        "disableJsInteractions": 0,
        "parent_asin": "B07X2YMW9G",
        "isViewProductizationEnabled": 1,
        "rps": 0,
        "variation_values": {},
        "deviceType": "web",
        "keysToPopulateDetailPageStateController": ["current_asin", "parent_asin", "productGroupID", "storeID", "unselectedDimCount", "currentDimCombID", "reactId", "dimensionSelectionData", "num_total_variations", "num_variation_dimensions", "rps", "view", "selected_variations", "variation_values", "selected_variation_values", "asin_variation_values"],
        "num_total_variations": 0,
        "showDimSecondUnavailablePopover": 1,
        "twisterUpdateURLInfo": {
            "immutableURLPrefix": "/gp/twister/ajaxv2?sid=261-8173218-5181763&ptd=DIGITAL_DEVICE_4&sCac=1&twisterView=glance&pgid=amazon_smp_display_on_website&rid=E81T54FVZ2MDMD0N7JR7&isP=1&dStr=style_name&auiAjax=1&json=1&dpxAjaxFlag=1&isUDPFlag=1&ee=2&nodeID=827230031&parentAsin=B07X2YMW9G&enPre=1&dcm=1&storeID=amazon-smp",
            "immutableParams": {
                "sid": "261-8173218-5181763",
                "ptd": "DIGITAL_DEVICE_4",
                "json": "1",
                "dpxAjaxFlag": "1",
                "sCac": "1",
                "isUDPFlag": "1",
                "twisterView": "glance",
                "ee": "2",
                "pgid": "amazon_smp_display_on_website",
                "nodeID": "827230031",
                "rid": "E81T54FVZ2MDMD0N7JR7",
                "parentAsin": "B07X2YMW9G",
                "enPre": "1",
                "isP": "1",
                "dcm": "1",
                "dStr": "style_name",
                "storeID": "amazon-smp",
                "auiAjax": "1"
            },
            "mutableParams": {}
        },
        "variationDisplayLabels": {},
        "productTypeName": "DIGITAL_DEVICE_4",
        "twisterInitPrefetchMode": 0,
        "unavailablePopOverStringValue": "No disponible en el siguiente ",
        "dimensionSelectionData": [],
        "dimensionsDisplayType": [],
        "dimensionsDisplay": [],
        "dimensionValuesData": [],
        "reactId": "",
        "use-early-twister-init": 1,
        "deletedLandingAsinInfo": {},
        "isTablet": 0,
        "asin_variation_values": {},
        "contextMetaData": {
            "parent": {
                "mTypeSpecificURLParams": {},
                "elementList": [{
                    "isPrefetchable": 0,
                    "divToUpdate": "twister-atf-marker_feature_div"
                }, {
                    "isPrefetchable": 0,
                    "divToUpdate": "twister-cf-marker_feature_div"
                }, {
                    "divToUpdate": "andon-cord-pulling_feature_div"
                }, {
                    "divToUpdate": "dvd-rental-badge_feature_div"
                }, {
                    "divToUpdate": "product-alert-grid_feature_div"
                }, {
                    "divToUpdate": "hero-quick-promo-grid_feature_div"
                }, {
                    "divToUpdate": "qpe-title-tag_feature_div"
                }, {
                    "divToUpdate": "btf-center-1_feature_div"
                }, {
                    "divToUpdate": "btf-center-2_feature_div"
                }, {
                    "divToUpdate": "btf-center-3_feature_div"
                }, {
                    "divToUpdate": "btf-center-4_feature_div"
                }, {
                    "divToUpdate": "btf-center-5_feature_div"
                }, {
                    "divToUpdate": "center-12_feature_div"
                }, {
                    "divToUpdate": "center-12-0_feature_div"
                }, {
                    "divToUpdate": "center-12-1_feature_div"
                }, {
                    "divToUpdate": "center-13_feature_div"
                }, {
                    "divToUpdate": "center-13-0_feature_div"
                }, {
                    "divToUpdate": "center-13-1_feature_div"
                }, {
                    "divToUpdate": "center-14_feature_div"
                }, {
                    "divToUpdate": "center-14-0_feature_div"
                }, {
                    "divToUpdate": "center-14-1_feature_div"
                }, {
                    "divToUpdate": "center-15_feature_div"
                }, {
                    "divToUpdate": "center-15-0_feature_div"
                }, {
                    "divToUpdate": "center-15-1_feature_div"
                }, {
                    "divToUpdate": "center-16_feature_div"
                }, {
                    "divToUpdate": "center-16-0_feature_div"
                }, {
                    "divToUpdate": "center-16-1_feature_div"
                }, {
                    "divToUpdate": "dpx-btf-bundle_feature_div"
                }, {
                    "divToUpdate": "dpx-family-stripe_feature_div"
                }, {
                    "divToUpdate": "btf-center-6_feature_div"
                }, {
                    "divToUpdate": "btf-center-7_feature_div"
                }, {
                    "divToUpdate": "btf-center-8_feature_div"
                }, {
                    "divToUpdate": "btf-center-9_feature_div"
                }, {
                    "divToUpdate": "btf-center-10_feature_div"
                }, {
                    "divToUpdate": "btf-content-1_feature_div"
                }, {
                    "divToUpdate": "btf-content-1-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-2_feature_div"
                }, {
                    "divToUpdate": "btf-content-2-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-3_feature_div"
                }, {
                    "divToUpdate": "btf-content-3-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-4_feature_div"
                }, {
                    "divToUpdate": "btf-content-4-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-5_feature_div"
                }, {
                    "divToUpdate": "btf-content-5-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-6_feature_div"
                }, {
                    "divToUpdate": "btf-content-6-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-7_feature_div"
                }, {
                    "divToUpdate": "btf-content-7-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-8_feature_div"
                }, {
                    "divToUpdate": "btf-content-8-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-9_feature_div"
                }, {
                    "divToUpdate": "btf-content-9-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-10_feature_div"
                }, {
                    "divToUpdate": "btf-content-10-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-11_feature_div"
                }, {
                    "divToUpdate": "btf-content-11-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-12_feature_div"
                }, {
                    "divToUpdate": "btf-content-12-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-13_feature_div"
                }, {
                    "divToUpdate": "btf-content-13-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-14_feature_div"
                }, {
                    "divToUpdate": "btf-content-14-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-15_feature_div"
                }, {
                    "divToUpdate": "btf-content-15-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-16_feature_div"
                }, {
                    "divToUpdate": "btf-content-16-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-17_feature_div"
                }, {
                    "divToUpdate": "btf-content-17-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-18_feature_div"
                }, {
                    "divToUpdate": "btf-content-18-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-19_feature_div"
                }, {
                    "divToUpdate": "btf-content-19-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-20_feature_div"
                }, {
                    "divToUpdate": "btf-content-20-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-21_feature_div"
                }, {
                    "divToUpdate": "btf-content-21-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-22_feature_div"
                }, {
                    "divToUpdate": "btf-content-22-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-23_feature_div"
                }, {
                    "divToUpdate": "btf-content-23-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-24_feature_div"
                }, {
                    "divToUpdate": "btf-content-24-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-25_feature_div"
                }, {
                    "divToUpdate": "btf-content-25-m_feature_div"
                }, {
                    "divToUpdate": "btf-center-11_feature_div"
                }, {
                    "divToUpdate": "btf-center-12_feature_div"
                }, {
                    "divToUpdate": "btf-center-13_feature_div"
                }, {
                    "divToUpdate": "btf-center-14_feature_div"
                }, {
                    "divToUpdate": "btf-center-15_feature_div"
                }, {
                    "divToUpdate": "btf-content-26_feature_div"
                }, {
                    "divToUpdate": "btf-content-26-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-27_feature_div"
                }, {
                    "divToUpdate": "btf-content-27-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-28_feature_div"
                }, {
                    "divToUpdate": "btf-content-28-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-29_feature_div"
                }, {
                    "divToUpdate": "btf-content-29-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-30_feature_div"
                }, {
                    "divToUpdate": "btf-content-30-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-31_feature_div"
                }, {
                    "divToUpdate": "btf-content-31-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-32_feature_div"
                }, {
                    "divToUpdate": "btf-content-32-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-33_feature_div"
                }, {
                    "divToUpdate": "btf-content-33-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-34_feature_div"
                }, {
                    "divToUpdate": "btf-content-34-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-35_feature_div"
                }, {
                    "divToUpdate": "btf-content-35-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-36_feature_div"
                }, {
                    "divToUpdate": "btf-content-36-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-37_feature_div"
                }, {
                    "divToUpdate": "btf-content-37-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-38_feature_div"
                }, {
                    "divToUpdate": "btf-content-38-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-39_feature_div"
                }, {
                    "divToUpdate": "btf-content-39-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-40_feature_div"
                }, {
                    "divToUpdate": "btf-content-40-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-41_feature_div"
                }, {
                    "divToUpdate": "btf-content-41-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-42_feature_div"
                }, {
                    "divToUpdate": "btf-content-42-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-43_feature_div"
                }, {
                    "divToUpdate": "btf-content-43-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-44_feature_div"
                }, {
                    "divToUpdate": "btf-content-44-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-45_feature_div"
                }, {
                    "divToUpdate": "btf-content-45-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-46_feature_div"
                }, {
                    "divToUpdate": "btf-content-46-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-47_feature_div"
                }, {
                    "divToUpdate": "btf-content-47-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-48_feature_div"
                }, {
                    "divToUpdate": "btf-content-48-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-49_feature_div"
                }, {
                    "divToUpdate": "btf-content-49-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-50_feature_div"
                }, {
                    "divToUpdate": "btf-content-50-m_feature_div"
                }, {
                    "divToUpdate": "btf-center-16_feature_div"
                }, {
                    "divToUpdate": "btf-center-17_feature_div"
                }, {
                    "divToUpdate": "btf-center-18_feature_div"
                }, {
                    "divToUpdate": "btf-center-19_feature_div"
                }, {
                    "divToUpdate": "btf-center-20_feature_div"
                }, {
                    "divToUpdate": "btf-center-21_feature_div"
                }, {
                    "divToUpdate": "btf-center-22_feature_div"
                }, {
                    "divToUpdate": "btf-center-23_feature_div"
                }, {
                    "divToUpdate": "btf-center-24_feature_div"
                }, {
                    "divToUpdate": "btf-center-25_feature_div"
                }, {
                    "divToUpdate": "btf-content-51_feature_div"
                }, {
                    "divToUpdate": "btf-content-51-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-52_feature_div"
                }, {
                    "divToUpdate": "btf-content-52-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-53_feature_div"
                }, {
                    "divToUpdate": "btf-content-53-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-54_feature_div"
                }, {
                    "divToUpdate": "btf-content-54-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-55_feature_div"
                }, {
                    "divToUpdate": "btf-content-55-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-56_feature_div"
                }, {
                    "divToUpdate": "btf-content-56-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-57_feature_div"
                }, {
                    "divToUpdate": "btf-content-57-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-58_feature_div"
                }, {
                    "divToUpdate": "btf-content-58-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-59_feature_div"
                }, {
                    "divToUpdate": "btf-content-59-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-60_feature_div"
                }, {
                    "divToUpdate": "btf-content-60-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-61_feature_div"
                }, {
                    "divToUpdate": "btf-content-61-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-62_feature_div"
                }, {
                    "divToUpdate": "btf-content-62-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-63_feature_div"
                }, {
                    "divToUpdate": "btf-content-63-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-64_feature_div"
                }, {
                    "divToUpdate": "btf-content-64-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-65_feature_div"
                }, {
                    "divToUpdate": "btf-content-65-m_feature_div"
                }, {
                    "divToUpdate": "center-17_feature_div"
                }, {
                    "divToUpdate": "center-17-0_feature_div"
                }, {
                    "divToUpdate": "center-17-1_feature_div"
                }, {
                    "divToUpdate": "center-17-2_feature_div"
                }, {
                    "divToUpdate": "center-17-3_feature_div"
                }, {
                    "divToUpdate": "center-18_feature_div"
                }, {
                    "divToUpdate": "center-18-0_feature_div"
                }, {
                    "divToUpdate": "center-18-1_feature_div"
                }, {
                    "divToUpdate": "center-18-2_feature_div"
                }, {
                    "divToUpdate": "center-18-3_feature_div"
                }, {
                    "divToUpdate": "center-19_feature_div"
                }, {
                    "divToUpdate": "center-19-0_feature_div"
                }, {
                    "divToUpdate": "center-19-1_feature_div"
                }, {
                    "divToUpdate": "center-19-2_feature_div"
                }, {
                    "divToUpdate": "center-19-3_feature_div"
                }, {
                    "divToUpdate": "center-20_feature_div"
                }, {
                    "divToUpdate": "center-20-0_feature_div"
                }, {
                    "divToUpdate": "center-20-1_feature_div"
                }, {
                    "divToUpdate": "center-20-2_feature_div"
                }, {
                    "divToUpdate": "center-20-3_feature_div"
                }, {
                    "divToUpdate": "center-21_feature_div"
                }, {
                    "divToUpdate": "center-21-0_feature_div"
                }, {
                    "divToUpdate": "center-21-1_feature_div"
                }, {
                    "divToUpdate": "center-21-2_feature_div"
                }, {
                    "divToUpdate": "center-21-3_feature_div"
                }, {
                    "divToUpdate": "center-22_feature_div"
                }, {
                    "divToUpdate": "center-22-0_feature_div"
                }, {
                    "divToUpdate": "center-22-1_feature_div"
                }, {
                    "divToUpdate": "center-22-2_feature_div"
                }, {
                    "divToUpdate": "center-22-3_feature_div"
                }, {
                    "divToUpdate": "center-23_feature_div"
                }, {
                    "divToUpdate": "center-23-0_feature_div"
                }, {
                    "divToUpdate": "center-23-1_feature_div"
                }, {
                    "divToUpdate": "center-23-2_feature_div"
                }, {
                    "divToUpdate": "center-23-3_feature_div"
                }, {
                    "divToUpdate": "center-24_feature_div"
                }, {
                    "divToUpdate": "center-24-0_feature_div"
                }, {
                    "divToUpdate": "center-24-1_feature_div"
                }, {
                    "divToUpdate": "center-24-2_feature_div"
                }, {
                    "divToUpdate": "center-24-3_feature_div"
                }, {
                    "divToUpdate": "center-25_feature_div"
                }, {
                    "divToUpdate": "center-25-0_feature_div"
                }, {
                    "divToUpdate": "center-25-1_feature_div"
                }, {
                    "divToUpdate": "center-25-2_feature_div"
                }, {
                    "divToUpdate": "center-25-3_feature_div"
                }, {
                    "divToUpdate": "center-26_feature_div"
                }, {
                    "divToUpdate": "center-26-0_feature_div"
                }, {
                    "divToUpdate": "center-26-1_feature_div"
                }, {
                    "divToUpdate": "center-26-2_feature_div"
                }, {
                    "divToUpdate": "center-26-3_feature_div"
                }, {
                    "divToUpdate": "center-27-0_feature_div"
                }, {
                    "divToUpdate": "center-27-1_feature_div"
                }, {
                    "divToUpdate": "center-27-2_feature_div"
                }, {
                    "divToUpdate": "center-27-3_feature_div"
                }, {
                    "divToUpdate": "center-28-0_feature_div"
                }, {
                    "divToUpdate": "center-28-1_feature_div"
                }, {
                    "divToUpdate": "center-28-2_feature_div"
                }, {
                    "divToUpdate": "center-28-3_feature_div"
                }, {
                    "divToUpdate": "center-29_feature_div"
                }, {
                    "divToUpdate": "center-29-0_feature_div"
                }, {
                    "divToUpdate": "center-29-1_feature_div"
                }, {
                    "divToUpdate": "center-29-2_feature_div"
                }, {
                    "divToUpdate": "center-29-3_feature_div"
                }, {
                    "divToUpdate": "center-30_feature_div"
                }, {
                    "divToUpdate": "center-30-0_feature_div"
                }, {
                    "divToUpdate": "center-30-1_feature_div"
                }, {
                    "divToUpdate": "center-30-2_feature_div"
                }, {
                    "divToUpdate": "center-30-3_feature_div"
                }, {
                    "divToUpdate": "center-31_feature_div"
                }, {
                    "divToUpdate": "center-31-0_feature_div"
                }, {
                    "divToUpdate": "center-31-1_feature_div"
                }, {
                    "divToUpdate": "center-31-2_feature_div"
                }, {
                    "divToUpdate": "center-31-3_feature_div"
                }, {
                    "divToUpdate": "center-32_feature_div"
                }, {
                    "divToUpdate": "center-32-0_feature_div"
                }, {
                    "divToUpdate": "center-32-1_feature_div"
                }, {
                    "divToUpdate": "center-32-2_feature_div"
                }, {
                    "divToUpdate": "center-32-3_feature_div"
                }, {
                    "divToUpdate": "center-33_feature_div"
                }, {
                    "divToUpdate": "center-33-0_feature_div"
                }, {
                    "divToUpdate": "center-33-1_feature_div"
                }, {
                    "divToUpdate": "center-33-2_feature_div"
                }, {
                    "divToUpdate": "center-33-3_feature_div"
                }, {
                    "divToUpdate": "center-34_feature_div"
                }, {
                    "divToUpdate": "center-34-1_feature_div"
                }, {
                    "divToUpdate": "center-34-2_feature_div"
                }, {
                    "divToUpdate": "center-34-3_feature_div"
                }, {
                    "divToUpdate": "center-35_feature_div"
                }, {
                    "divToUpdate": "center-35-0_feature_div"
                }, {
                    "divToUpdate": "center-35-1_feature_div"
                }, {
                    "divToUpdate": "center-35-2_feature_div"
                }, {
                    "divToUpdate": "center-35-3_feature_div"
                }, {
                    "divToUpdate": "center-36_feature_div"
                }, {
                    "divToUpdate": "center-36-0_feature_div"
                }, {
                    "divToUpdate": "center-36-1_feature_div"
                }, {
                    "divToUpdate": "center-36-2_feature_div"
                }, {
                    "divToUpdate": "center-36-3_feature_div"
                }, {
                    "divToUpdate": "center-37_feature_div"
                }, {
                    "divToUpdate": "center-37-0_feature_div"
                }, {
                    "divToUpdate": "center-37-1_feature_div"
                }, {
                    "divToUpdate": "center-37-2_feature_div"
                }, {
                    "divToUpdate": "center-37-3_feature_div"
                }, {
                    "divToUpdate": "center-38_feature_div"
                }, {
                    "divToUpdate": "center-38-0_feature_div"
                }, {
                    "divToUpdate": "center-38-1_feature_div"
                }, {
                    "divToUpdate": "center-38-2_feature_div"
                }, {
                    "divToUpdate": "center-38-3_feature_div"
                }, {
                    "divToUpdate": "center-39_feature_div"
                }, {
                    "divToUpdate": "center-39-0_feature_div"
                }, {
                    "divToUpdate": "center-39-1_feature_div"
                }, {
                    "divToUpdate": "center-39-2_feature_div"
                }, {
                    "divToUpdate": "center-39-3_feature_div"
                }, {
                    "divToUpdate": "center-40_feature_div"
                }, {
                    "divToUpdate": "center-40-0_feature_div"
                }, {
                    "divToUpdate": "center-40-1_feature_div"
                }, {
                    "divToUpdate": "center-40-2_feature_div"
                }, {
                    "divToUpdate": "center-40-3_feature_div"
                }, {
                    "loadingBar": 1,
                    "divToUpdate": "center-41_feature_div"
                }, {
                    "divToUpdate": "center-41-0_feature_div"
                }, {
                    "divToUpdate": "center-41-1_feature_div"
                }, {
                    "divToUpdate": "center-41-2_feature_div"
                }, {
                    "divToUpdate": "center-41-3_feature_div"
                }, {
                    "divToUpdate": "center-42_feature_div"
                }, {
                    "divToUpdate": "center-42-0_feature_div"
                }, {
                    "divToUpdate": "center-42-1_feature_div"
                }, {
                    "divToUpdate": "center-42-2_feature_div"
                }, {
                    "divToUpdate": "center-42-3_feature_div"
                }, {
                    "divToUpdate": "center-43_feature_div"
                }, {
                    "divToUpdate": "center-43-0_feature_div"
                }, {
                    "divToUpdate": "center-43-1_feature_div"
                }, {
                    "divToUpdate": "center-43-2_feature_div"
                }, {
                    "divToUpdate": "center-43-3_feature_div"
                }, {
                    "loadingBar": 1,
                    "isPrefetchable": 0,
                    "divToUpdate": "ask-btf_feature_div"
                }, {
                    "divToUpdate": "center-80_feature_div"
                }, {
                    "divToUpdate": "center-81_feature_div"
                }, {
                    "divToUpdate": "center-82_feature_div"
                }, {
                    "divToUpdate": "center-83_feature_div"
                }, {
                    "divToUpdate": "center-84_feature_div"
                }, {
                    "divToUpdate": "center-85_feature_div"
                }, {
                    "divToUpdate": "center-86_feature_div"
                }, {
                    "divToUpdate": "center-87_feature_div"
                }, {
                    "loadingBar": 1,
                    "divToUpdate": "dpx-giveaway_feature_div"
                }, {
                    "divToUpdate": "mako-emergency-fix_feature_div"
                }, {
                    "divToUpdate": "center-88_feature_div"
                }, {
                    "divToUpdate": "center-89_feature_div"
                }, {
                    "divToUpdate": "center-90_feature_div"
                }, {
                    "divToUpdate": "center-91_feature_div"
                }, {
                    "divToUpdate": "center-92_feature_div"
                }, {
                    "divToUpdate": "center-93_feature_div"
                }, {
                    "divToUpdate": "center-94_feature_div"
                }, {
                    "divToUpdate": "center-95_feature_div"
                }, {
                    "divToUpdate": "center-96_feature_div"
                }, {
                    "divToUpdate": "center-97_feature_div"
                }, {
                    "divToUpdate": "center-98_feature_div"
                }, {
                    "divToUpdate": "center-99_feature_div"
                }, {
                    "divToUpdate": "center-100_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-1_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-2_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-3_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-4_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-5_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-6_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-7_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-8_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-9_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-10_feature_div"
                }, {
                    "loadingBar": 1,
                    "divToUpdate": "listmania-center_feature_div"
                }, {
                    "loadingBar": 1,
                    "divToUpdate": "sylt-center_feature_div"
                }, {
                    "isPrefetchable": 0,
                    "divToUpdate": "twister-log-metrics_feature_div"
                }, {
                    "isPrefetchable": 0,
                    "divToUpdate": "dp-fast-track-logger_feature_div"
                }]
            },
            "master": {
                "mTypeSpecificURLParams": {}
            },
            "partial": {
                "mTypeSpecificURLParams": {},
                "elementList": [{
                    "divToUpdate": "center-27_feature_div"
                }, {
                    "divToUpdate": "center-28_feature_div"
                }]
            },
            "full": {
                "mTypeSpecificURLParams": {
                    "psc": 1
                },
                "elementList": [{
                    "isPrefetchable": 0,
                    "divToUpdate": "twister-atf-marker_feature_div"
                }, {
                    "isPrefetchable": 0,
                    "divToUpdate": "twister-cf-marker_feature_div"
                }, {
                    "divToUpdate": "andon-cord-pulling_feature_div"
                }, {
                    "divToUpdate": "dvd-rental-badge_feature_div"
                }, {
                    "divToUpdate": "product-alert-grid_feature_div"
                }, {
                    "divToUpdate": "hero-quick-promo-grid_feature_div"
                }, {
                    "divToUpdate": "qpe-title-tag_feature_div"
                }, {
                    "divToUpdate": "btf-center-1_feature_div"
                }, {
                    "divToUpdate": "btf-center-2_feature_div"
                }, {
                    "divToUpdate": "btf-center-3_feature_div"
                }, {
                    "divToUpdate": "btf-center-4_feature_div"
                }, {
                    "divToUpdate": "btf-center-5_feature_div"
                }, {
                    "divToUpdate": "center-12_feature_div"
                }, {
                    "divToUpdate": "center-12-0_feature_div"
                }, {
                    "divToUpdate": "center-12-1_feature_div"
                }, {
                    "divToUpdate": "center-13_feature_div"
                }, {
                    "divToUpdate": "center-13-0_feature_div"
                }, {
                    "divToUpdate": "center-13-1_feature_div"
                }, {
                    "divToUpdate": "center-14_feature_div"
                }, {
                    "divToUpdate": "center-14-0_feature_div"
                }, {
                    "divToUpdate": "center-14-1_feature_div"
                }, {
                    "divToUpdate": "center-15_feature_div"
                }, {
                    "divToUpdate": "center-15-0_feature_div"
                }, {
                    "divToUpdate": "center-15-1_feature_div"
                }, {
                    "divToUpdate": "center-16_feature_div"
                }, {
                    "divToUpdate": "center-16-0_feature_div"
                }, {
                    "divToUpdate": "center-16-1_feature_div"
                }, {
                    "divToUpdate": "dpx-btf-bundle_feature_div"
                }, {
                    "divToUpdate": "dpx-family-stripe_feature_div"
                }, {
                    "divToUpdate": "btf-center-6_feature_div"
                }, {
                    "divToUpdate": "btf-center-7_feature_div"
                }, {
                    "divToUpdate": "btf-center-8_feature_div"
                }, {
                    "divToUpdate": "btf-center-9_feature_div"
                }, {
                    "divToUpdate": "btf-center-10_feature_div"
                }, {
                    "divToUpdate": "btf-content-1_feature_div"
                }, {
                    "divToUpdate": "btf-content-1-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-2_feature_div"
                }, {
                    "divToUpdate": "btf-content-2-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-3_feature_div"
                }, {
                    "divToUpdate": "btf-content-3-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-4_feature_div"
                }, {
                    "divToUpdate": "btf-content-4-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-5_feature_div"
                }, {
                    "divToUpdate": "btf-content-5-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-6_feature_div"
                }, {
                    "divToUpdate": "btf-content-6-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-7_feature_div"
                }, {
                    "divToUpdate": "btf-content-7-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-8_feature_div"
                }, {
                    "divToUpdate": "btf-content-8-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-9_feature_div"
                }, {
                    "divToUpdate": "btf-content-9-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-10_feature_div"
                }, {
                    "divToUpdate": "btf-content-10-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-11_feature_div"
                }, {
                    "divToUpdate": "btf-content-11-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-12_feature_div"
                }, {
                    "divToUpdate": "btf-content-12-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-13_feature_div"
                }, {
                    "divToUpdate": "btf-content-13-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-14_feature_div"
                }, {
                    "divToUpdate": "btf-content-14-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-15_feature_div"
                }, {
                    "divToUpdate": "btf-content-15-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-16_feature_div"
                }, {
                    "divToUpdate": "btf-content-16-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-17_feature_div"
                }, {
                    "divToUpdate": "btf-content-17-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-18_feature_div"
                }, {
                    "divToUpdate": "btf-content-18-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-19_feature_div"
                }, {
                    "divToUpdate": "btf-content-19-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-20_feature_div"
                }, {
                    "divToUpdate": "btf-content-20-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-21_feature_div"
                }, {
                    "divToUpdate": "btf-content-21-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-22_feature_div"
                }, {
                    "divToUpdate": "btf-content-22-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-23_feature_div"
                }, {
                    "divToUpdate": "btf-content-23-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-24_feature_div"
                }, {
                    "divToUpdate": "btf-content-24-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-25_feature_div"
                }, {
                    "divToUpdate": "btf-content-25-m_feature_div"
                }, {
                    "divToUpdate": "btf-center-11_feature_div"
                }, {
                    "divToUpdate": "btf-center-12_feature_div"
                }, {
                    "divToUpdate": "btf-center-13_feature_div"
                }, {
                    "divToUpdate": "btf-center-14_feature_div"
                }, {
                    "divToUpdate": "btf-center-15_feature_div"
                }, {
                    "divToUpdate": "btf-content-26_feature_div"
                }, {
                    "divToUpdate": "btf-content-26-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-27_feature_div"
                }, {
                    "divToUpdate": "btf-content-27-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-28_feature_div"
                }, {
                    "divToUpdate": "btf-content-28-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-29_feature_div"
                }, {
                    "divToUpdate": "btf-content-29-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-30_feature_div"
                }, {
                    "divToUpdate": "btf-content-30-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-31_feature_div"
                }, {
                    "divToUpdate": "btf-content-31-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-32_feature_div"
                }, {
                    "divToUpdate": "btf-content-32-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-33_feature_div"
                }, {
                    "divToUpdate": "btf-content-33-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-34_feature_div"
                }, {
                    "divToUpdate": "btf-content-34-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-35_feature_div"
                }, {
                    "divToUpdate": "btf-content-35-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-36_feature_div"
                }, {
                    "divToUpdate": "btf-content-36-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-37_feature_div"
                }, {
                    "divToUpdate": "btf-content-37-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-38_feature_div"
                }, {
                    "divToUpdate": "btf-content-38-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-39_feature_div"
                }, {
                    "divToUpdate": "btf-content-39-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-40_feature_div"
                }, {
                    "divToUpdate": "btf-content-40-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-41_feature_div"
                }, {
                    "divToUpdate": "btf-content-41-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-42_feature_div"
                }, {
                    "divToUpdate": "btf-content-42-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-43_feature_div"
                }, {
                    "divToUpdate": "btf-content-43-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-44_feature_div"
                }, {
                    "divToUpdate": "btf-content-44-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-45_feature_div"
                }, {
                    "divToUpdate": "btf-content-45-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-46_feature_div"
                }, {
                    "divToUpdate": "btf-content-46-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-47_feature_div"
                }, {
                    "divToUpdate": "btf-content-47-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-48_feature_div"
                }, {
                    "divToUpdate": "btf-content-48-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-49_feature_div"
                }, {
                    "divToUpdate": "btf-content-49-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-50_feature_div"
                }, {
                    "divToUpdate": "btf-content-50-m_feature_div"
                }, {
                    "divToUpdate": "btf-center-16_feature_div"
                }, {
                    "divToUpdate": "btf-center-17_feature_div"
                }, {
                    "divToUpdate": "btf-center-18_feature_div"
                }, {
                    "divToUpdate": "btf-center-19_feature_div"
                }, {
                    "divToUpdate": "btf-center-20_feature_div"
                }, {
                    "divToUpdate": "btf-center-21_feature_div"
                }, {
                    "divToUpdate": "btf-center-22_feature_div"
                }, {
                    "divToUpdate": "btf-center-23_feature_div"
                }, {
                    "divToUpdate": "btf-center-24_feature_div"
                }, {
                    "divToUpdate": "btf-center-25_feature_div"
                }, {
                    "divToUpdate": "btf-content-51_feature_div"
                }, {
                    "divToUpdate": "btf-content-51-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-52_feature_div"
                }, {
                    "divToUpdate": "btf-content-52-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-53_feature_div"
                }, {
                    "divToUpdate": "btf-content-53-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-54_feature_div"
                }, {
                    "divToUpdate": "btf-content-54-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-55_feature_div"
                }, {
                    "divToUpdate": "btf-content-55-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-56_feature_div"
                }, {
                    "divToUpdate": "btf-content-56-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-57_feature_div"
                }, {
                    "divToUpdate": "btf-content-57-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-58_feature_div"
                }, {
                    "divToUpdate": "btf-content-58-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-59_feature_div"
                }, {
                    "divToUpdate": "btf-content-59-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-60_feature_div"
                }, {
                    "divToUpdate": "btf-content-60-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-61_feature_div"
                }, {
                    "divToUpdate": "btf-content-61-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-62_feature_div"
                }, {
                    "divToUpdate": "btf-content-62-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-63_feature_div"
                }, {
                    "divToUpdate": "btf-content-63-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-64_feature_div"
                }, {
                    "divToUpdate": "btf-content-64-m_feature_div"
                }, {
                    "divToUpdate": "btf-content-65_feature_div"
                }, {
                    "divToUpdate": "btf-content-65-m_feature_div"
                }, {
                    "divToUpdate": "center-17_feature_div"
                }, {
                    "divToUpdate": "center-17-0_feature_div"
                }, {
                    "divToUpdate": "center-17-1_feature_div"
                }, {
                    "divToUpdate": "center-17-2_feature_div"
                }, {
                    "divToUpdate": "center-17-3_feature_div"
                }, {
                    "divToUpdate": "center-18_feature_div"
                }, {
                    "divToUpdate": "center-18-0_feature_div"
                }, {
                    "divToUpdate": "center-18-1_feature_div"
                }, {
                    "divToUpdate": "center-18-2_feature_div"
                }, {
                    "divToUpdate": "center-18-3_feature_div"
                }, {
                    "divToUpdate": "center-19_feature_div"
                }, {
                    "divToUpdate": "center-19-0_feature_div"
                }, {
                    "divToUpdate": "center-19-1_feature_div"
                }, {
                    "divToUpdate": "center-19-2_feature_div"
                }, {
                    "divToUpdate": "center-19-3_feature_div"
                }, {
                    "divToUpdate": "center-20_feature_div"
                }, {
                    "divToUpdate": "center-20-0_feature_div"
                }, {
                    "divToUpdate": "center-20-1_feature_div"
                }, {
                    "divToUpdate": "center-20-2_feature_div"
                }, {
                    "divToUpdate": "center-20-3_feature_div"
                }, {
                    "divToUpdate": "center-21_feature_div"
                }, {
                    "divToUpdate": "center-21-0_feature_div"
                }, {
                    "divToUpdate": "center-21-1_feature_div"
                }, {
                    "divToUpdate": "center-21-2_feature_div"
                }, {
                    "divToUpdate": "center-21-3_feature_div"
                }, {
                    "divToUpdate": "center-22_feature_div"
                }, {
                    "divToUpdate": "center-22-0_feature_div"
                }, {
                    "divToUpdate": "center-22-1_feature_div"
                }, {
                    "divToUpdate": "center-22-2_feature_div"
                }, {
                    "divToUpdate": "center-22-3_feature_div"
                }, {
                    "divToUpdate": "center-23_feature_div"
                }, {
                    "divToUpdate": "center-23-0_feature_div"
                }, {
                    "divToUpdate": "center-23-1_feature_div"
                }, {
                    "divToUpdate": "center-23-2_feature_div"
                }, {
                    "divToUpdate": "center-23-3_feature_div"
                }, {
                    "divToUpdate": "center-24_feature_div"
                }, {
                    "divToUpdate": "center-24-0_feature_div"
                }, {
                    "divToUpdate": "center-24-1_feature_div"
                }, {
                    "divToUpdate": "center-24-2_feature_div"
                }, {
                    "divToUpdate": "center-24-3_feature_div"
                }, {
                    "divToUpdate": "center-25_feature_div"
                }, {
                    "divToUpdate": "center-25-0_feature_div"
                }, {
                    "divToUpdate": "center-25-1_feature_div"
                }, {
                    "divToUpdate": "center-25-2_feature_div"
                }, {
                    "divToUpdate": "center-25-3_feature_div"
                }, {
                    "divToUpdate": "center-26_feature_div"
                }, {
                    "divToUpdate": "center-26-0_feature_div"
                }, {
                    "divToUpdate": "center-26-1_feature_div"
                }, {
                    "divToUpdate": "center-26-2_feature_div"
                }, {
                    "divToUpdate": "center-26-3_feature_div"
                }, {
                    "divToUpdate": "center-27_feature_div"
                }, {
                    "divToUpdate": "center-27-0_feature_div"
                }, {
                    "divToUpdate": "center-27-1_feature_div"
                }, {
                    "divToUpdate": "center-27-2_feature_div"
                }, {
                    "divToUpdate": "center-27-3_feature_div"
                }, {
                    "divToUpdate": "center-28_feature_div"
                }, {
                    "divToUpdate": "center-28-0_feature_div"
                }, {
                    "divToUpdate": "center-28-1_feature_div"
                }, {
                    "divToUpdate": "center-28-2_feature_div"
                }, {
                    "divToUpdate": "center-28-3_feature_div"
                }, {
                    "divToUpdate": "center-29_feature_div"
                }, {
                    "divToUpdate": "center-29-0_feature_div"
                }, {
                    "divToUpdate": "center-29-1_feature_div"
                }, {
                    "divToUpdate": "center-29-2_feature_div"
                }, {
                    "divToUpdate": "center-29-3_feature_div"
                }, {
                    "divToUpdate": "center-30_feature_div"
                }, {
                    "divToUpdate": "center-30-0_feature_div"
                }, {
                    "divToUpdate": "center-30-1_feature_div"
                }, {
                    "divToUpdate": "center-30-2_feature_div"
                }, {
                    "divToUpdate": "center-30-3_feature_div"
                }, {
                    "divToUpdate": "center-31_feature_div"
                }, {
                    "divToUpdate": "center-31-0_feature_div"
                }, {
                    "divToUpdate": "center-31-1_feature_div"
                }, {
                    "divToUpdate": "center-31-2_feature_div"
                }, {
                    "divToUpdate": "center-31-3_feature_div"
                }, {
                    "divToUpdate": "center-32_feature_div"
                }, {
                    "divToUpdate": "center-32-0_feature_div"
                }, {
                    "divToUpdate": "center-32-1_feature_div"
                }, {
                    "divToUpdate": "center-32-2_feature_div"
                }, {
                    "divToUpdate": "center-32-3_feature_div"
                }, {
                    "divToUpdate": "center-33_feature_div"
                }, {
                    "divToUpdate": "center-33-0_feature_div"
                }, {
                    "divToUpdate": "center-33-1_feature_div"
                }, {
                    "divToUpdate": "center-33-2_feature_div"
                }, {
                    "divToUpdate": "center-33-3_feature_div"
                }, {
                    "divToUpdate": "center-34_feature_div"
                }, {
                    "divToUpdate": "center-34-1_feature_div"
                }, {
                    "divToUpdate": "center-34-2_feature_div"
                }, {
                    "divToUpdate": "center-34-3_feature_div"
                }, {
                    "divToUpdate": "center-35_feature_div"
                }, {
                    "divToUpdate": "center-35-0_feature_div"
                }, {
                    "divToUpdate": "center-35-1_feature_div"
                }, {
                    "divToUpdate": "center-35-2_feature_div"
                }, {
                    "divToUpdate": "center-35-3_feature_div"
                }, {
                    "divToUpdate": "center-36_feature_div"
                }, {
                    "divToUpdate": "center-36-0_feature_div"
                }, {
                    "divToUpdate": "center-36-1_feature_div"
                }, {
                    "divToUpdate": "center-36-2_feature_div"
                }, {
                    "divToUpdate": "center-36-3_feature_div"
                }, {
                    "divToUpdate": "center-37_feature_div"
                }, {
                    "divToUpdate": "center-37-0_feature_div"
                }, {
                    "divToUpdate": "center-37-1_feature_div"
                }, {
                    "divToUpdate": "center-37-2_feature_div"
                }, {
                    "divToUpdate": "center-37-3_feature_div"
                }, {
                    "divToUpdate": "center-38_feature_div"
                }, {
                    "divToUpdate": "center-38-0_feature_div"
                }, {
                    "divToUpdate": "center-38-1_feature_div"
                }, {
                    "divToUpdate": "center-38-2_feature_div"
                }, {
                    "divToUpdate": "center-38-3_feature_div"
                }, {
                    "divToUpdate": "center-39_feature_div"
                }, {
                    "divToUpdate": "center-39-0_feature_div"
                }, {
                    "divToUpdate": "center-39-1_feature_div"
                }, {
                    "divToUpdate": "center-39-2_feature_div"
                }, {
                    "divToUpdate": "center-39-3_feature_div"
                }, {
                    "divToUpdate": "center-40_feature_div"
                }, {
                    "divToUpdate": "center-40-0_feature_div"
                }, {
                    "divToUpdate": "center-40-1_feature_div"
                }, {
                    "divToUpdate": "center-40-2_feature_div"
                }, {
                    "divToUpdate": "center-40-3_feature_div"
                }, {
                    "loadingBar": 1,
                    "divToUpdate": "center-41_feature_div"
                }, {
                    "divToUpdate": "center-41-0_feature_div"
                }, {
                    "divToUpdate": "center-41-1_feature_div"
                }, {
                    "divToUpdate": "center-41-2_feature_div"
                }, {
                    "divToUpdate": "center-41-3_feature_div"
                }, {
                    "divToUpdate": "center-42_feature_div"
                }, {
                    "divToUpdate": "center-42-0_feature_div"
                }, {
                    "divToUpdate": "center-42-1_feature_div"
                }, {
                    "divToUpdate": "center-42-2_feature_div"
                }, {
                    "divToUpdate": "center-42-3_feature_div"
                }, {
                    "divToUpdate": "center-43_feature_div"
                }, {
                    "divToUpdate": "center-43-0_feature_div"
                }, {
                    "divToUpdate": "center-43-1_feature_div"
                }, {
                    "divToUpdate": "center-43-2_feature_div"
                }, {
                    "divToUpdate": "center-43-3_feature_div"
                }, {
                    "loadingBar": 1,
                    "isPrefetchable": 0,
                    "divToUpdate": "ask-btf_feature_div"
                }, {
                    "divToUpdate": "center-80_feature_div"
                }, {
                    "divToUpdate": "center-81_feature_div"
                }, {
                    "divToUpdate": "center-82_feature_div"
                }, {
                    "divToUpdate": "center-83_feature_div"
                }, {
                    "divToUpdate": "center-84_feature_div"
                }, {
                    "divToUpdate": "center-85_feature_div"
                }, {
                    "divToUpdate": "center-86_feature_div"
                }, {
                    "divToUpdate": "center-87_feature_div"
                }, {
                    "loadingBar": 1,
                    "divToUpdate": "dpx-giveaway_feature_div"
                }, {
                    "divToUpdate": "mako-emergency-fix_feature_div"
                }, {
                    "divToUpdate": "center-88_feature_div"
                }, {
                    "divToUpdate": "center-89_feature_div"
                }, {
                    "divToUpdate": "center-90_feature_div"
                }, {
                    "divToUpdate": "center-91_feature_div"
                }, {
                    "divToUpdate": "center-92_feature_div"
                }, {
                    "divToUpdate": "center-93_feature_div"
                }, {
                    "divToUpdate": "center-94_feature_div"
                }, {
                    "divToUpdate": "center-95_feature_div"
                }, {
                    "divToUpdate": "center-96_feature_div"
                }, {
                    "divToUpdate": "center-97_feature_div"
                }, {
                    "divToUpdate": "center-98_feature_div"
                }, {
                    "divToUpdate": "center-99_feature_div"
                }, {
                    "divToUpdate": "center-100_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-1_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-2_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-3_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-4_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-5_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-6_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-7_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-8_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-9_feature_div"
                }, {
                    "divToUpdate": "accessory-popover-10_feature_div"
                }, {
                    "loadingBar": 1,
                    "divToUpdate": "listmania-center_feature_div"
                }, {
                    "loadingBar": 1,
                    "divToUpdate": "sylt-center_feature_div"
                }, {
                    "isPrefetchable": 0,
                    "divToUpdate": "twister-log-metrics_feature_div"
                }, {
                    "isPrefetchable": 0,
                    "divToUpdate": "dp-fast-track-logger_feature_div"
                }]
            }
        },
        "useBeaconizedEVDD": 1,
        "loadingBarHtml": "<div style=\"display:inline;margin:10px;\"><span style=\"font-family: Tahoma,Arial,Helvetica,sans-serif;color:#000000;font-size: 12px; \">Cargando...<img src=\"https://images-na.ssl-images-amazon.com/images/G/30/x-locale/communities/tags/snake._CB180305720_.gif\" width=\"16\" height=\"16\" align=\"absmiddle\" style=\"display: inline\"></span></div>",
        "currentDimCombID": "",
        "pageRefreshRefactor": 1,
        "useVariationsOverlay": 0,
        "asinToDimIndexMapData": {},
        "twisterMarkImageLoad": 1,
        "storeID": "amazon-smp"
    }; //selectively not escaping this.
    return dataToReturn;
});

P.when("A", "a-modal").execute(function(A, PopoverFactory) {
    var $ = A.$;
    PopoverFactory.create($(".abb-open-interstitial"), {
        name: "abb-interstitial",
        header: "Añadir al pedido",
        width: 800
    });
});

P.when(
    "desktop-accessory-upsell-factory",
    "ODSBuyboxManager",
    "jQuery"
).execute(function(
    AccessoryUpsellFactory,
    ODSBuyboxManager,
    $
) {
    var accessoriesJSON = {
        asinsData: {
            "B01LXP5TXI": {
                "B01LXP5TXI": {
                    "isInterstitial": true,
                    "checkForInteraction": false,
                    "hasBeenInteractedWith": false,
                    "isDigitalSubscription": false,
                    "isSubsMobileInterstitial": false,
                    "isForIntroOrFreePromotion": false,
                    "buyingPriceDecimal": {
                        "amount_": 14.99,
                        "unit_": {
                            "code_": "EUR",
                            "smallestAmount_": 0.01
                        }
                    },
                    "listPriceDecimal": {
                        "amount_": 14.99,
                        "unit_": {
                            "code_": "EUR",
                            "smallestAmount_": 0.01
                        }
                    },
                    "offerListingID": "3g3Pxs1RAlG9KY7vdFG2kHEt8Kg9VZQtvMRoFP13e2WRmh9eNx98oda965R8EC2Z6I8ie5UFJb0QVwhDaw2gH4UIt7jWM9S4TguqGJ7vF8Lz6Rd3iJNzCWzPNN5zVHz2",
                    "merchantName": "Amazon.es",
                    "featureBullets": ["Conecta el Fire TV Stick directamente al router con un cable Ethernet, sin necesidad de conexión wifi.", "Muy fácil de usar: conecta el adaptador Ethernet al Fire TV Stick, inserta el puerto del cable USB en el adaptador de corriente y el puerto del cable Ethernet en el adaptador Ethernet y, por último, acopla el cable Ethernet al router.", "Disfruta de la velocidad y la fiabilidad de la conexión a Internet por cable.", "Compatible con el Fire TV Stick | Basic Edition, el Fire TV Stick (2.ª generación) y el Fire TV Stick 4K."],
                    "hiResImage": {
                        "URL_": "https://images-eu.ssl-images-amazon.com/images/I/31CCr6bDr7L._SL500_.jpg",
                        "tag_": "\u003cimg src\u003d\"https://images-eu.ssl-images-amazon.com/images/I/31CCr6bDr7L._SL500_.jpg\" width\u003d\"500\" height\u003d\"500\" border\u003d\"0\" /\u003e",
                        "height_": 500,
                        "hasHeight_": true,
                        "width_": 500,
                        "hasWidth_": true,
                        "isPlaceholder_": false,
                        "hasIsPlaceholder_": true,
                        "isCustomerImage_": false,
                        "hasIsCustomerImage_": true,
                        "isRichMedia_": false,
                        "hasIsRichMedia_": true,
                        "customerID_": "A1AT7YVPFBWXBL",
                        "variant_": ""
                    },
                    "lowResImage": {
                        "URL_": "https://images-eu.ssl-images-amazon.com/images/I/31CCr6bDr7L._SL160_.jpg",
                        "tag_": "\u003cimg src\u003d\"https://images-eu.ssl-images-amazon.com/images/I/31CCr6bDr7L._SL160_.jpg\" width\u003d\"160\" height\u003d\"160\" border\u003d\"0\" /\u003e",
                        "height_": 160,
                        "hasHeight_": true,
                        "width_": 160,
                        "hasWidth_": true,
                        "isPlaceholder_": false,
                        "hasIsPlaceholder_": true,
                        "isCustomerImage_": false,
                        "hasIsCustomerImage_": true,
                        "isRichMedia_": false,
                        "hasIsRichMedia_": true,
                        "customerID_": "A1AT7YVPFBWXBL",
                        "variant_": ""
                    },
                    "visualDimension": true,
                    "showPriceStrikethrough": false,
                    "buyingPrice": "EUR 14,99",
                    "listPrice": "EUR 14,99",
                    "asin": "B01LXP5TXI",
                    "title": "Amazon - Adaptador Ethernet para Fire TV Stick | Basic Edition",
                    "currentDevice": false,
                    "isRow": false
                }
            },
            "B078KSHVCS": {
                "B078KSHVCS": {
                    "isInterstitial": true,
                    "checkForInteraction": false,
                    "hasBeenInteractedWith": false,
                    "isDigitalSubscription": false,
                    "isSubsMobileInterstitial": false,
                    "isForIntroOrFreePromotion": false,
                    "buyingPriceDecimal": {
                        "amount_": 20.99,
                        "unit_": {
                            "code_": "EUR",
                            "smallestAmount_": 0.01
                        }
                    },
                    "listPriceDecimal": {
                        "amount_": 20.99,
                        "unit_": {
                            "code_": "EUR",
                            "smallestAmount_": 0.01
                        }
                    },
                    "offerListingID": "18s49B%2BAhOPUD1eFfJDhdKvPDAjgIsr9O2S6rlnbS9CrISF3RsoAzdvstBPVCOdgUncQttR2h0hPSaugH1gcbXF365miNDh0zvprNETvQqgYlqKrGrGY%2Fu%2F7rXYSS%2FrA",
                    "merchantName": "Amazon.es",
                    "featureBullets": ["EVITAR ENREDOS: Suministra el Amazon Fire TV directamente a través del puerto USB del televisor con corriente. Ya no necesitarás un enchufe separado", "TECNOLOGÍA AVANZADA: incluye una gestión de energía especial que equilibra las fluctuaciones del suministro de corriente, almacenando la energía sobrante y liberándola cuando sea necesario", "LONGITUD ÓPTIMA: Este cable es óptimo para conectar El Fire TV con El puerto USB del televisor", "UNIVERSAL: compatible con todo tipo de puerto USB", "el integrado acumulador de iones de litio posibilita el uso del Amazon Fire TV con cualquier puerto USB", "DISEÑO PATENTADO: producto innovador ideado especialmente para el suministro de corriente del Amazon Fire TV"],
                    "hiResImage": {
                        "URL_": "https://images-eu.ssl-images-amazon.com/images/I/41O3Hgw3otL._SL500_.jpg",
                        "tag_": "\u003cimg src\u003d\"https://images-eu.ssl-images-amazon.com/images/I/41O3Hgw3otL._SL500_.jpg\" width\u003d\"500\" height\u003d\"500\" border\u003d\"0\" /\u003e",
                        "height_": 500,
                        "hasHeight_": true,
                        "width_": 500,
                        "hasWidth_": true,
                        "isPlaceholder_": false,
                        "hasIsPlaceholder_": true,
                        "isCustomerImage_": false,
                        "hasIsCustomerImage_": true,
                        "isRichMedia_": false,
                        "hasIsRichMedia_": true,
                        "customerID_": "A1AT7YVPFBWXBL",
                        "variant_": ""
                    },
                    "lowResImage": {
                        "URL_": "https://images-eu.ssl-images-amazon.com/images/I/41O3Hgw3otL._SL160_.jpg",
                        "tag_": "\u003cimg src\u003d\"https://images-eu.ssl-images-amazon.com/images/I/41O3Hgw3otL._SL160_.jpg\" width\u003d\"160\" height\u003d\"160\" border\u003d\"0\" /\u003e",
                        "height_": 160,
                        "hasHeight_": true,
                        "width_": 160,
                        "hasWidth_": true,
                        "isPlaceholder_": false,
                        "hasIsPlaceholder_": true,
                        "isCustomerImage_": false,
                        "hasIsCustomerImage_": true,
                        "isRichMedia_": false,
                        "hasIsRichMedia_": true,
                        "customerID_": "A1AT7YVPFBWXBL",
                        "variant_": ""
                    },
                    "visualDimension": true,
                    "showPriceStrikethrough": false,
                    "buyingPrice": "EUR 20,99",
                    "listPrice": "EUR 20,99",
                    "asin": "B078KSHVCS",
                    "title": "Mission Cables MC45 - Cable USB de Corriente para el Amazon Fire TV con 4K Ultra HD, Color Negro",
                    "currentDevice": false,
                    "isRow": false
                }
            }
        },
        primaryAsin: "B07PVCVBN7",
        accessoriesCampaignSource: {
            "accessoryList": "[{\n\"asin\" : \"B01LXP5TXI\",\n\"linkText\" : \"Amazon Ethernet Adaptador - Disfruta de la velocidad y la fiabilidad de la conexión a Internet por cable\",\n\"interstitial\" : true,\n\"hideOnMobile\" : false\n      }, \n{\n\"asin\" : \"B078KSHVCS\",\n\"linkText\" : \"Cable USB de Corriente para el Amazon Fire TV\",\n\"interstitial\" : true,\n\"hideOnMobile\" : false\n      }]",
            "item": "${context.item}"
        }
    };
    //Initialize DABB
    var dabbInstance = AccessoryUpsellFactory.get($("#accessory-upsell"), accessoriesJSON);
});

<
script type = "a-state"
data - a - state = "{&quot;key&quot;:&quot;turbo-checkout-page-state&quot;}" > {
        "turboWeblab": "RCX_CHECKOUT_TURBO_DESKTOP_PRIME_87783",
        "strings": {
            "TURBO_CHECKOUT_HEADER": "Comprar ahora: Amazon Fire TV Stick con mando por voz Alexa | Reproductor de contenido multimedia en streaming",
            "TURBO_LOADING_TEXT": "Cargando <
            script type = "a-state"
            data - a - state = "{&quot;key&quot;:&quot;createInfo&quot;}" > { "isHorizonte": true } < /script> <
            script type = "a-state"
            data - a - state = "{&quot;key&quot;:&quot;wishlistDPState&quot;}" > { "createHeader": "Cree una Lista de deseos", "addHeader": "Añadir a la Lista de deseos", "addWidth": "900", "vendorId": "website.wishlist.detail.add", "createHeight": "auto", "streaming": "1", "isFirstCreate": false, "createWidth": "650", "addUrl": "/gp/registry/huc/add-item-ajax.html?ie=UTF8", "addHeight": "700", "action": "add", "createUrl": "/hz/wishlist/create?ie=UTF8&isPopover=1&isCreateAndAdd=1", "firstcreateHeader": "" } < /script> <
            script type = "a-state"
            data - a - state = "{&quot;key&quot;:&quot;atwl&quot;}" > { "showInlineLink": false, "hzPopover": true, "wishlistButtonId": "add-to-wishlist-button", "dropDownHtml": "", "inlineJsFix": true, "wishlistButtonSubmitId": "add-to-wishlist-button-submit", "maxAjaxFailureCount": "3", "asin": "B07PVCVBN7" } < /script> <
            script type = "a-state"
            data - a - state = "{&quot;key&quot;:&quot;acState&quot;}" > { "acAsin": "B07PVCVBN7" } < /script>

            <
            script type = "a-state"
            data - a - state = "{&quot;key&quot;:&quot;popoverState&quot;}" > { "formId": "addToCart", "showWishListDropDown": true, "babyRegistryId": "add-to-registry-baby-button", "showBabyRegDropdown": false, "wishlistPopoverWidth": 206, "isAddToWishListDropDownAuiEnabled": true, "showPopover": true } < /script>

            P.now().execute('dp-mark-twister', function() {
                var options = {
                    name: 'twister',
                    hasComponents: true,
                    components: []
                };
                options.components.push({
                    "name": "singleton",
                    "isInteractive": false
                });
                if (typeof window.markFeatureRender === 'function') {
                    window.markFeatureRender('twister', options);
                }
            });

            window.uet && uet('be', 'MakoTechSpecs', {
                wb: 1
            });
            window.uex && uex('ld', 'MakoTechSpecs', {
                wb: 1
            });