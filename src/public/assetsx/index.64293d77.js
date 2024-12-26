var Ce = Object.defineProperty,
    be = Object.defineProperties;
var Ne = Object.getOwnPropertyDescriptors;
var re = Object.getOwnPropertySymbols;
var Se = Object.prototype.hasOwnProperty,
    ye = Object.prototype.propertyIsEnumerable;
var oe = (e, r, o) => r in e ? Ce(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : e[r] = o,
    T = (e, r) => {
        for (var o in r || (r = {})) Se.call(r, o) && oe(e, o, r[o]);
        if (re)
            for (var o of re(r)) ye.call(r, o) && oe(e, o, r[o]);
        return e
    },
    R = (e, r) => be(e, Ne(r));
import {
    B as Te,
    R as g,
    n as ae,
    r as we,
    c as S,
    j as u,
    a as Oe,
    p as v,
    u as Q,
    b as V,
    d as f,
    T as fe,
    s as w,
    e as E,
    S as Ie,
    _ as J,
    f as A,
    h as Y,
    i as Le,
    k as Re,
    l as Z,
    m as $e,
    o as K,
    q as N,
    t as Pe,
    v as ie,
    w as ke,
    x as De,
    y as Fe,
    z as le,
    A as je,
    C as Be,
    F as $
} from "./main.ec38a22d.js";
import {
    s as X,
    M as Me,
    H as ce
} from "./index.71afb28e.js";
const U = {
        PREFIX: `${Te}-layout`
    },
    Ae = {
        BREAKPOINT: ["xs", "sm", "md", "lg", "xl", "xxl"]
    };
const ze = g.createContext({
        siderHook: {
            addSider: ae,
            removeSider: ae
        }
    }),
    me = ze;
var He = globalThis && globalThis.__rest || function(e, r) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (o[t[n]] = e[t[n]]);
    return o
};
const ue = {
        xs: "(max-width: 575px)",
        sm: "(min-width: 576px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 992px)",
        xl: "(min-width: 1200px)",
        xxl: "(min-width: 1600px)"
    },
    Ve = (() => {
        let e = 0;
        return () => (e += 1, `${U.PREFIX}-sider-${e}`)
    })(),
    Ue = Ae.BREAKPOINT;
class B extends g.PureComponent {
    constructor(r) {
        super(r), this.unRegisters = [], this.uniqueId = "", this.uniqueId = Ve()
    }
    componentDidMount() {
        const {
            breakpoint: r
        } = this.props, t = Object.keys(ue).filter(n => r && r.indexOf(n) !== -1).map(n => we(ue[n], {
            match: () => {
                this.responsiveHandler(n, !0)
            },
            unmatch: () => {
                this.responsiveHandler(n, !1)
            }
        }));
        this.unRegisters = t, this.context.siderHook && this.context.siderHook.addSider(this.uniqueId)
    }
    componentWillUnmount() {
        this.unRegisters.forEach(r => r()), this.context.siderHook && this.context.siderHook.removeSider(this.uniqueId)
    }
    responsiveHandler(r, o) {
        const {
            onBreakpoint: t
        } = this.props;
        t && t(r, o)
    }
    render() {
        const r = this.props,
            {
                prefixCls: o,
                className: t,
                children: n,
                style: s
            } = r,
            a = He(r, ["prefixCls", "className", "children", "style"]),
            i = S(t, {
                [`${o}-sider`]: !0
            });
        return u("aside", R(T({}, Object.assign({
            className: i,
            "aria-label": this.props["aria-label"],
            style: s
        }, Oe(a))), {
            children: u("div", {
                className: `${o}-sider-children`,
                children: n
            })
        }))
    }
}
B.propTypes = {
    prefixCls: v.exports.string,
    style: v.exports.object,
    className: v.exports.string,
    breakpoint: v.exports.arrayOf(v.exports.oneOf(Ue)),
    onBreakpoint: v.exports.func,
    "aria-label": v.exports.string,
    role: v.exports.string
};
B.defaultProps = {
    prefixCls: U.PREFIX
};
B.contextType = me;
B.elementType = "Layout.Sider";
const Ge = B;
var ge = globalThis && globalThis.__rest || function(e, r) {
    var o = {};
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (o[t[n]] = e[t[n]]);
    return o
};
const Xe = {
    Header: "header",
    Footer: "footer",
    Content: "main",
    Layout: "section"
};

function ee(e) {
    const r = Xe[e],
        o = e.toLowerCase();
    return t => class extends g.PureComponent {
        render() {
            return u(t, T({}, Object.assign({
                role: this.props.role,
                "aria-label": this.props["aria-label"],
                type: o,
                tagName: r
            }, this.props)))
        }
    }
}
class M extends g.PureComponent {
    render() {
        const r = this.props,
            {
                prefixCls: o,
                type: t,
                className: n,
                children: s,
                tagName: a
            } = r,
            i = ge(r, ["prefixCls", "type", "className", "children", "tagName"]),
            l = S(n, `${o}-${t}`);
        return g.createElement(a, Object.assign({
            className: l
        }, i), s)
    }
}
M.propTypes = {
    prefixCls: v.exports.string,
    style: v.exports.object,
    className: v.exports.string
};
M.defaultProps = {
    prefixCls: U.PREFIX
};
const We = ee("Header")(M),
    qe = ee("Footer")(M),
    Qe = ee("Content")(M);
class y extends g.Component {
    constructor(r) {
        super(r), this.state = {
            siders: []
        }
    }
    getSiderHook() {
        return {
            addSider: r => {
                this.setState(o => ({
                    siders: [...o.siders, r]
                }))
            },
            removeSider: r => {
                this.setState(o => ({
                    siders: o.siders.filter(t => t !== r)
                }))
            }
        }
    }
    render() {
        const r = this.props,
            {
                prefixCls: o,
                className: t,
                children: n,
                hasSider: s,
                tagName: a
            } = r,
            i = ge(r, ["prefixCls", "className", "children", "hasSider", "tagName"]),
            {
                siders: l
            } = this.state,
            c = S(t, o, {
                [`${o}-has-sider`]: typeof s == "boolean" && s || l.length > 0 || g.Children.toArray(n).some(p => g.isValidElement(p) && p.type && p.type.elementType === "Layout.Sider")
            }),
            d = a;
        return u(me.Provider, {
            value: {
                siderHook: this.getSiderHook()
            },
            children: u(d, R(T({}, Object.assign({
                className: c
            }, i)), {
                children: n
            }))
        })
    }
}
y.propTypes = {
    prefixCls: v.exports.string,
    style: v.exports.object,
    className: v.exports.string
};
y.defaultProps = {
    prefixCls: U.PREFIX,
    tagName: "section"
};
y.Header = We;
y.Footer = qe;
y.Content = Qe;
y.Sider = Ge;
const Je = () => {
    const e = Q(),
        r = V(),
        [o, t] = f.exports.useState(fe);
    f.exports.useEffect(() => {}, [e]);
    const n = s => {
        r(s.url)
    };
    return u("div", {
        className: w.Tabbar,
        children: o.map(s => E("div", {
            className: S(w.Tabbar_Item, {
                [w.check_Item]: e.pathname === s.url
            }),
            onClick: () => n(s),
            children: [u("div", {
                className: w.Svg,
                children: u(Ie, {
                    className: S(w.SvgIcon, {
                        [w.check_SvgIcon]: e.pathname === s.url
                    }),
                    name: s.svg,
                    size: "2rem"
                })
            }), u("div", {
                className: w.label,
                children: s.label
            })]
        }, s.label))
    })
};

function Ye(e, r) {
    return e.classList ? !!r && e.classList.contains(r) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + r + " ") !== -1
}

function Ze(e, r) {
    e.classList ? e.classList.add(r) : Ye(e, r) || (typeof e.className == "string" ? e.className = e.className + " " + r : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + r))
}

function de(e, r) {
    return e.replace(new RegExp("(^|\\s)" + r + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function Ke(e, r) {
    e.classList ? e.classList.remove(r) : typeof e.className == "string" ? e.className = de(e.className, r) : e.setAttribute("class", de(e.className && e.className.baseVal || "", r))
}
const pe = {
        disabled: !1
    },
    H = g.createContext(null);
var xe = function(r) {
        return r.scrollTop
    },
    j = "unmounted",
    O = "exited",
    I = "entering",
    k = "entered",
    q = "exiting",
    b = function(e) {
        J(r, e);

        function r(t, n) {
            var s;
            s = e.call(this, t, n) || this;
            var a = n,
                i = a && !a.isMounting ? t.enter : t.appear,
                l;
            return s.appearStatus = null, t.in ? i ? (l = O, s.appearStatus = I) : l = k : t.unmountOnExit || t.mountOnEnter ? l = j : l = O, s.state = {
                status: l
            }, s.nextCallback = null, s
        }
        r.getDerivedStateFromProps = function(n, s) {
            var a = n.in;
            return a && s.status === j ? {
                status: O
            } : null
        };
        var o = r.prototype;
        return o.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, o.componentDidUpdate = function(n) {
            var s = null;
            if (n !== this.props) {
                var a = this.state.status;
                this.props.in ? a !== I && a !== k && (s = I) : (a === I || a === k) && (s = q)
            }
            this.updateStatus(!1, s)
        }, o.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, o.getTimeouts = function() {
            var n = this.props.timeout,
                s, a, i;
            return s = a = i = n, n != null && typeof n != "number" && (s = n.exit, a = n.enter, i = n.appear !== void 0 ? n.appear : a), {
                exit: s,
                enter: a,
                appear: i
            }
        }, o.updateStatus = function(n, s) {
            if (n === void 0 && (n = !1), s !== null)
                if (this.cancelNextCallback(), s === I) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var a = this.props.nodeRef ? this.props.nodeRef.current : A.findDOMNode(this);
                        a && xe(a)
                    }
                    this.performEnter(n)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === O && this.setState({
                status: j
            })
        }, o.performEnter = function(n) {
            var s = this,
                a = this.props.enter,
                i = this.context ? this.context.isMounting : n,
                l = this.props.nodeRef ? [i] : [A.findDOMNode(this), i],
                c = l[0],
                d = l[1],
                p = this.getTimeouts(),
                h = i ? p.appear : p.enter;
            if (!n && !a || pe.disabled) {
                this.safeSetState({
                    status: k
                }, function() {
                    s.props.onEntered(c)
                });
                return
            }
            this.props.onEnter(c, d), this.safeSetState({
                status: I
            }, function() {
                s.props.onEntering(c, d), s.onTransitionEnd(h, function() {
                    s.safeSetState({
                        status: k
                    }, function() {
                        s.props.onEntered(c, d)
                    })
                })
            })
        }, o.performExit = function() {
            var n = this,
                s = this.props.exit,
                a = this.getTimeouts(),
                i = this.props.nodeRef ? void 0 : A.findDOMNode(this);
            if (!s || pe.disabled) {
                this.safeSetState({
                    status: O
                }, function() {
                    n.props.onExited(i)
                });
                return
            }
            this.props.onExit(i), this.safeSetState({
                status: q
            }, function() {
                n.props.onExiting(i), n.onTransitionEnd(a.exit, function() {
                    n.safeSetState({
                        status: O
                    }, function() {
                        n.props.onExited(i)
                    })
                })
            })
        }, o.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, o.safeSetState = function(n, s) {
            s = this.setNextCallback(s), this.setState(n, s)
        }, o.setNextCallback = function(n) {
            var s = this,
                a = !0;
            return this.nextCallback = function(i) {
                a && (a = !1, s.nextCallback = null, n(i))
            }, this.nextCallback.cancel = function() {
                a = !1
            }, this.nextCallback
        }, o.onTransitionEnd = function(n, s) {
            this.setNextCallback(s);
            var a = this.props.nodeRef ? this.props.nodeRef.current : A.findDOMNode(this),
                i = n == null && !this.props.addEndListener;
            if (!a || i) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback],
                    c = l[0],
                    d = l[1];
                this.props.addEndListener(c, d)
            }
            n != null && setTimeout(this.nextCallback, n)
        }, o.render = function() {
            var n = this.state.status;
            if (n === j) return null;
            var s = this.props,
                a = s.children;
            s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
            var i = Y(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return u(H.Provider, {
                value: null,
                children: typeof a == "function" ? a(n, i) : g.cloneElement(g.Children.only(a), i)
            })
        }, r
    }(g.Component);
b.contextType = H;
b.propTypes = {};

function P() {}
b.defaultProps = { in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: P,
    onEntering: P,
    onEntered: P,
    onExit: P,
    onExiting: P,
    onExited: P
};
b.UNMOUNTED = j;
b.EXITED = O;
b.ENTERING = I;
b.ENTERED = k;
b.EXITING = q;
const et = b;
var tt = function(r, o) {
        return r && o && o.split(" ").forEach(function(t) {
            return Ze(r, t)
        })
    },
    W = function(r, o) {
        return r && o && o.split(" ").forEach(function(t) {
            return Ke(r, t)
        })
    },
    te = function(e) {
        J(r, e);

        function r() {
            for (var t, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
            return t = e.call.apply(e, [this].concat(s)) || this, t.appliedClasses = {
                appear: {},
                enter: {},
                exit: {}
            }, t.onEnter = function(i, l) {
                var c = t.resolveArguments(i, l),
                    d = c[0],
                    p = c[1];
                t.removeClasses(d, "exit"), t.addClass(d, p ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(i, l)
            }, t.onEntering = function(i, l) {
                var c = t.resolveArguments(i, l),
                    d = c[0],
                    p = c[1],
                    h = p ? "appear" : "enter";
                t.addClass(d, h, "active"), t.props.onEntering && t.props.onEntering(i, l)
            }, t.onEntered = function(i, l) {
                var c = t.resolveArguments(i, l),
                    d = c[0],
                    p = c[1],
                    h = p ? "appear" : "enter";
                t.removeClasses(d, h), t.addClass(d, h, "done"), t.props.onEntered && t.props.onEntered(i, l)
            }, t.onExit = function(i) {
                var l = t.resolveArguments(i),
                    c = l[0];
                t.removeClasses(c, "appear"), t.removeClasses(c, "enter"), t.addClass(c, "exit", "base"), t.props.onExit && t.props.onExit(i)
            }, t.onExiting = function(i) {
                var l = t.resolveArguments(i),
                    c = l[0];
                t.addClass(c, "exit", "active"), t.props.onExiting && t.props.onExiting(i)
            }, t.onExited = function(i) {
                var l = t.resolveArguments(i),
                    c = l[0];
                t.removeClasses(c, "exit"), t.addClass(c, "exit", "done"), t.props.onExited && t.props.onExited(i)
            }, t.resolveArguments = function(i, l) {
                return t.props.nodeRef ? [t.props.nodeRef.current, i] : [i, l]
            }, t.getClassNames = function(i) {
                var l = t.props.classNames,
                    c = typeof l == "string",
                    d = c && l ? l + "-" : "",
                    p = c ? "" + d + i : l[i],
                    h = c ? p + "-active" : l[i + "Active"],
                    m = c ? p + "-done" : l[i + "Done"];
                return {
                    baseClassName: p,
                    activeClassName: h,
                    doneClassName: m
                }
            }, t
        }
        var o = r.prototype;
        return o.addClass = function(n, s, a) {
            var i = this.getClassNames(s)[a + "ClassName"],
                l = this.getClassNames("enter"),
                c = l.doneClassName;
            s === "appear" && a === "done" && c && (i += " " + c), a === "active" && n && xe(n), i && (this.appliedClasses[s][a] = i, tt(n, i))
        }, o.removeClasses = function(n, s) {
            var a = this.appliedClasses[s],
                i = a.base,
                l = a.active,
                c = a.done;
            this.appliedClasses[s] = {}, i && W(n, i), l && W(n, l), c && W(n, c)
        }, o.render = function() {
            var n = this.props;
            n.classNames;
            var s = Y(n, ["classNames"]);
            return u(et, R(T({}, s), {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited
            }))
        }, r
    }(g.Component);
te.defaultProps = {
    classNames: ""
};
te.propTypes = {};
const nt = te;

function ne(e, r) {
    var o = function(s) {
            return r && f.exports.isValidElement(s) ? r(s) : s
        },
        t = Object.create(null);
    return e && f.exports.Children.map(e, function(n) {
        return n
    }).forEach(function(n) {
        t[n.key] = o(n)
    }), t
}

function st(e, r) {
    e = e || {}, r = r || {};

    function o(d) {
        return d in r ? r[d] : e[d]
    }
    var t = Object.create(null),
        n = [];
    for (var s in e) s in r ? n.length && (t[s] = n, n = []) : n.push(s);
    var a, i = {};
    for (var l in r) {
        if (t[l])
            for (a = 0; a < t[l].length; a++) {
                var c = t[l][a];
                i[t[l][a]] = o(c)
            }
        i[l] = o(l)
    }
    for (a = 0; a < n.length; a++) i[n[a]] = o(n[a]);
    return i
}

function L(e, r, o) {
    return o[r] != null ? o[r] : e.props[r]
}

function rt(e, r) {
    return ne(e.children, function(o) {
        return f.exports.cloneElement(o, {
            onExited: r.bind(null, o),
            in: !0,
            appear: L(o, "appear", e),
            enter: L(o, "enter", e),
            exit: L(o, "exit", e)
        })
    })
}

function ot(e, r, o) {
    var t = ne(e.children),
        n = st(r, t);
    return Object.keys(n).forEach(function(s) {
        var a = n[s];
        if (!!f.exports.isValidElement(a)) {
            var i = s in r,
                l = s in t,
                c = r[s],
                d = f.exports.isValidElement(c) && !c.props.in;
            l && (!i || d) ? n[s] = f.exports.cloneElement(a, {
                onExited: o.bind(null, a),
                in: !0,
                exit: L(a, "exit", e),
                enter: L(a, "enter", e)
            }) : !l && i && !d ? n[s] = f.exports.cloneElement(a, { in: !1
            }) : l && i && f.exports.isValidElement(c) && (n[s] = f.exports.cloneElement(a, {
                onExited: o.bind(null, a),
                in: c.props.in,
                exit: L(a, "exit", e),
                enter: L(a, "enter", e)
            }))
        }
    }), n
}
var at = Object.values || function(e) {
        return Object.keys(e).map(function(r) {
            return e[r]
        })
    },
    it = {
        component: "div",
        childFactory: function(r) {
            return r
        }
    },
    se = function(e) {
        J(r, e);

        function r(t, n) {
            var s;
            s = e.call(this, t, n) || this;
            var a = s.handleExited.bind(Le(s));
            return s.state = {
                contextValue: {
                    isMounting: !0
                },
                handleExited: a,
                firstRender: !0
            }, s
        }
        var o = r.prototype;
        return o.componentDidMount = function() {
            this.mounted = !0, this.setState({
                contextValue: {
                    isMounting: !1
                }
            })
        }, o.componentWillUnmount = function() {
            this.mounted = !1
        }, r.getDerivedStateFromProps = function(n, s) {
            var a = s.children,
                i = s.handleExited,
                l = s.firstRender;
            return {
                children: l ? rt(n, i) : ot(n, a, i),
                firstRender: !1
            }
        }, o.handleExited = function(n, s) {
            var a = ne(this.props.children);
            n.key in a || (n.props.onExited && n.props.onExited(s), this.mounted && this.setState(function(i) {
                var l = Re({}, i.children);
                return delete l[n.key], {
                    children: l
                }
            }))
        }, o.render = function() {
            var n = this.props,
                s = n.component,
                a = n.childFactory,
                i = Y(n, ["component", "childFactory"]),
                l = this.state.contextValue,
                c = at(this.state.children).map(a);
            return delete i.appear, delete i.enter, delete i.exit, s === null ? u(H.Provider, {
                value: l,
                children: c
            }) : u(H.Provider, {
                value: l,
                children: u(s, R(T({}, i), {
                    children: c
                }))
            })
        }, r
    }(g.Component);
se.propTypes = {};
se.defaultProps = it;
const lt = se,
    ct = "_Header_ilxsj_1",
    ut = "_layout_ilxsj_6",
    dt = "_mobile_layout_ilxsj_11",
    pt = "_oinLayout_ilxsj_17",
    ht = "_Sider_ilxsj_27",
    ft = "_showDarwer_ilxsj_34",
    mt = "_hideDarwer_ilxsj_38",
    gt = "_tabbarStyle_ilxsj_43",
    xt = "_Content_ilxsj_49",
    vt = "_PadHeader_ilxsj_67",
    _t = "_Outlet_ilxsj_72",
    C = {
        Header: ct,
        layout: ut,
        mobile_layout: dt,
        oinLayout: pt,
        Sider: ht,
        showDarwer: ft,
        hideDarwer: mt,
        tabbarStyle: gt,
        Content: xt,
        PadHeader: vt,
        Outlet: _t
    },
    Et = e => (V(), f.exports.useEffect(() => {}, []), u("div", {
        className: S(X.Sider, e == null ? void 0 : e.className, {
            [X.Sider_show]: e.showDarwer,
            [X.Sider_hide]: !e.showDarwer
        }),
        children: u(Me, {})
    })),
    Ct = Z(e => e.app)(Et),
    bt = "_Footer_Container_7nwlz_1",
    Nt = "_Top_Info_7nwlz_9",
    St = "_Left_7nwlz_13",
    yt = "_Info_Content_7nwlz_17",
    Tt = "_Info_Title_7nwlz_21",
    wt = "_Info_Box_7nwlz_24",
    Ot = "_Box_Title_7nwlz_29",
    It = "_Right_7nwlz_37",
    Lt = "_Logo_Box_7nwlz_42",
    Rt = "_Logo_7nwlz_42",
    $t = "_Logo_Text_7nwlz_56",
    Pt = "_Bottom_Logo_7nwlz_87",
    kt = "_Float_Logo_Content_7nwlz_91",
    Dt = "_Notranslate_7nwlz_103",
    _ = {
        Footer_Container: bt,
        Top_Info: Nt,
        Left: St,
        Info_Content: yt,
        Info_Title: Tt,
        Info_Box: wt,
        Box_Title: Ot,
        Right: It,
        Logo_Box: Lt,
        Logo: Rt,
        Logo_Text: $t,
        Bottom_Logo: Pt,
        Float_Logo_Content: kt,
        Notranslate: Dt
    },
    Ft = e => {
        var l, c, d, p, h;
        const {
            t: r
        } = $e(), o = V(), t = K.getState().app, [n, s] = f.exports.useState([{
            title: "Casino",
            children: [{
                title: "Agent",
                url: "/home/user/promote"
            }, {
                title: "Event",
                url: "/home/event"
            }, {
                title: "VIP",
                url: "/home/user/vip"
            }]
        }, {
            title: "Games",
            children: [...(l = t == null ? void 0 : t.gameMenu) == null ? void 0 : l.map(m => R(T({}, m), {
                title: m.name,
                url: `/home`
            }))]
        }, {
            title: "Support",
            children: [{
                title: "Contact Customer Service",
                url: "/home/user/notice?noticeType=4"
            }, {
                title: "About",
                url: "/home/user/about"
            }]
        }]), [a, i] = f.exports.useState([{
            url: N("Logo/img_wa.png"),
            herf: "https://api.whatsapp.com/"
        }, {
            url: N("Logo/img_tg.png"),
            herf: "https://t.me/"
        }, {
            url: N("Logo/img_facebook.png"),
            herf: "https://www.facebook.com/"
        }, {
            url: N("Logo/img_line.png"),
            herf: "https://line.me/R/ti/p/"
        }, {
            url: N("Logo/sp.png"),
            herf: "https://www.youtube.com/"
        }, {
            url: N("Logo/zx.png"),
            herf: "https://www.instagram.com/"
        }, {
            url: N("Logo/x.png"),
            herf: "https://twitter.com/"
        }, {
            url: N("Logo/dy.png"),
            herf: "https://www.tiktok.com/explore"
        }]);
        return f.exports.useState([{
            url: "https://07t3z1-900-ppp.oss-accelerate.aliyuncs.com/siteadmin/upload/img/1716779596243038209.png"
        }, {
            url: "https://07t3z1-900-ppp.oss-accelerate.aliyuncs.com/siteadmin/upload/img/1716779596243038209.png"
        }, {
            url: "https://07t3z1-900-ppp.oss-accelerate.aliyuncs.com/siteadmin/upload/img/1716779596243038209.png"
        }, {
            url: "https://07t3z1-900-ppp.oss-accelerate.aliyuncs.com/siteadmin/upload/img/1716779596243038209.png"
        }, {
            url: "https://07t3z1-900-ppp.oss-accelerate.aliyuncs.com/siteadmin/upload/img/1716779596243038209.png"
        }, {
            url: "https://07t3z1-900-ppp.oss-accelerate.aliyuncs.com/siteadmin/upload/img/1716779596243038209.png"
        }]), E("div", {
            className: _.Footer_Container,
            children: [E("div", {
                className: _.Top_Info,
                children: [u("div", {
                    className: _.Left,
                    children: n.map((m, x) => {
                        var D;
                        return E("div", {
                            className: _.Info_Content,
                            children: [u("div", {
                                className: _.Info_Title,
                                children: m.title
                            }), u("div", {
                                className: _.Info_Box,
                                children: (D = m == null ? void 0 : m.children) == null ? void 0 : D.map((F, G) => u("div", {
                                    className: _.Box_Title,
                                    onClick: () => {
                                        o(F.url)
                                    },
                                    children: F.title
                                }, G))
                            })]
                        }, x)
                    })
                }), E("div", {
                    className: _.Right,
                    children: [u("div", {
                        className: _.Logo_Box,
                        children: a.map((m, x) => u("img", {
                            className: _.Logo,
                            src: m.url,
                            onClick: () => {
                                window.open(m.herf, "_blank")
                            }
                        }, x))
                    }), E("div", {
                        className: _.Logo_Text,
                        children: [E("p", {
                            children: [(d = (c = e == null ? void 0 : e.user) == null ? void 0 : c.config) == null ? void 0 : d.webname, "\xA0"]
                        }), r("Footer.text"), E("p", {
                            children: [" ", r("Footer.text1"), "\xA0"]
                        }), " ", r("Footer.text2")]
                    })]
                })]
            }), u("div", {
                className: _.Bottom_Logo,
                children: E("div", {
                    className: _.Notranslate,
                    children: [r("Footer.text3"), " ", (h = (p = e == null ? void 0 : e.user) == null ? void 0 : p.config) == null ? void 0 : h.webname, r("Footer.text4")]
                })
            })]
        })
    },
    he = Z(e => e)(Ft);
const ve = ["/home/user/promote", "/home/user/notice", "/mobile/my"],
    z = ["/home/event", "/home/game", "/mobile/my"],
    _e = ["/home/event", "/home/game"],
    Ee = ({
        path: e = "/home/",
        render: r
    }) => {
        var c, d, p;
        const o = Q(),
            [t, n] = f.exports.useState("forwar");
        console.log("pup", t);
        const s = Pe(),
            [a, i] = f.exports.useState(!1);
        f.exports.useEffect(() => {
            setTimeout(() => {
                var m, x, D, F;
                let h = [...new Set((F = (D = (x = (m = K) == null ? void 0 : m.getState()) == null ? void 0 : x.app) == null ? void 0 : D.location) == null ? void 0 : F.map(G => G.pathname))];
                h[h.length - 1] === (o == null ? void 0 : o.pathname) ? n("forward") : n("back")
            }, 0)
        }, [o]), console.log("navgationType", s);
        const {
            nodeRef: l
        } = (p = [...(c = ie[0]) == null ? void 0 : c.children, ...(d = ie[1]) == null ? void 0 : d.children].find(h => `${e}${h==null?void 0:h.path}` === (o == null ? void 0 : o.pathname))) != null ? p : {};
        return u(lt, {
            className: "router-wrapper",
            childFactory: h => g.cloneElement(h, {
                classNames: t
            }),
            children: u(nt, { in: a,
                nodeRef: l,
                timeout: 500,
                unmountOnExit: !0,
                onExited: () => {
                    i(!0)
                },
                children: h => u("div", {
                    className: "wrapper",
                    ref: l,
                    children: r
                })
            }, o.pathname)
        })
    },
    jt = e => {
        var c, d, p, h;
        const r = ke(),
            o = Q();
        let t = V();
        const n = De();
        Fe();
        const s = f.exports.useRef(null),
            [a, i] = f.exports.useState([]);
        f.exports.useEffect(() => {
            var m;
            return console.log("\u8FDB\u6765\u4E86"), i((m = fe) == null ? void 0 : m.map(x => x == null ? void 0 : x.url)), le.on("log_out_Effect", x => {
                t("/")
            }), window.addEventListener("scroll", l), () => {
                window.removeEventListener("scroll", l)
            }
        }, []), f.exports.useEffect(() => {
            var x;
            if (K.dispatch(je([o])), !((x = e == null ? void 0 : e.user) != null && x.token) || !r) return;
            const m = {
                route: (o == null ? void 0 : o.pathname) + (o == null ? void 0 : o.search),
                date: Date.now() / 1e3
            };
            r.emit("set_route", m)
        }, [o]);
        const l = Be.debounce(() => {
            console.log("123123", s.current), s.current && le.emit("layoutScorll", s.current)
        }, 500);
        return E($, {
            children: [E(y, {
                style: {
                    height: "100%"
                },
                className: S(C.layout, {
                    [C.mobile_layout]: z.includes(o == null ? void 0 : o.pathname)
                }),
                children: [(c = e == null ? void 0 : e.app) != null && c.isMobile ? u($, {
                    children: a.includes(o.pathname) && !ve.includes(o == null ? void 0 : o.pathname) ? u(ce, {}) : u($, {})
                }) : u($, {
                    children: u(ce, {})
                }), E(y, {
                    className: C.oinLayout,
                    children: [u(Ct, {
                        className: C.Sider
                    }), u(Ee, {
                        path: "/home/",
                        render: u($, {
                            children: E("div", {
                                ref: s,
                                className: S(C.Content, {
                                    [C.showDarwer]: (d = e == null ? void 0 : e.app) == null ? void 0 : d.showDarwer,
                                    [C.hideDarwer]: !((p = e == null ? void 0 : e.app) != null && p.showDarwer),
                                    [C.PadHeader]: _e.includes(o == null ? void 0 : o.pathname),
                                    [C.tabbarStyle]: z.includes(o.pathname)
                                }),
                                children: [n, (h = e == null ? void 0 : e.app) != null && h.isMobile ? u($, {
                                    children: o.pathname === "/home/game" && u(he, {})
                                }) : u("div", {
                                    children: u(he, {})
                                })]
                            })
                        })
                    })]
                })]
            }), z.includes(o == null ? void 0 : o.pathname) && u(Je, {})]
        })
    },
    Bt = Z(e => e)(jt),
    Vt = Object.freeze(Object.defineProperty({
        __proto__: null,
        hideTabBar: ve,
        showTabBar: z,
        padHearder: _e,
        TransitionPage: Ee,
        default: Bt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Ee as T, Je as a, Vt as i, z as s
};