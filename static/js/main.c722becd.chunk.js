(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),r=n(5),s=n(6),i=n(1),l=(n(12),n(0)),a=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=Object(i.useState)(a),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)(!1),u=Object(s.a)(o,2),b=u[0],j=u[1],h=function(t){var e=Object(r.a)(n);return e.sort((function(e,n){switch(t){case"alph":return e.localeCompare(n);case"len":return e.length-n.length;default:return 0}})),c(e)};return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{children:"List of Goods"}),b?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",onClick:function(){c(Object(r.a)(n).reverse())},children:"Reverse"}),Object(l.jsx)("button",{type:"button",onClick:function(){return h("alph")},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",onClick:function(){return h("len")},children:"Sort by Length"}),Object(l.jsx)("button",{type:"button",onClick:function(){c(a)},children:"Reset"}),Object(l.jsx)("ul",{children:n.map((function(t){return Object(l.jsx)("li",{className:"list",children:t},t)}))})]}):Object(l.jsx)("button",{type:"button",onClick:function(){j(!b)},children:"Start"})]})};o.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c722becd.chunk.js.map