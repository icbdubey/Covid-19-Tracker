(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(4),r=c.n(s),i=(c(11),c(3)),a=c.n(i),j=c(5),d=c(6),h=(c(13),c(0)),l=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(j.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),s(c.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid mt 5",children:[Object(h.jsxs)("div",{className:"main-heading",children:[Object(h.jsxs)("h1",{className:"mb-5 text-center",children:[Object(h.jsx)("span",{className:"font-weight-bold",children:"INDIA"}),Object(h.jsx)("marquee",{width:"60%",direction:"left",height:"100px",children:Object(h.jsx)("mark",{children:" COVID-19 DASHBOARD"})})]}),Object(h.jsx)("h2",{children:"\ud83d\udd34 Live"})]}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"State"}),Object(h.jsx)("th",{children:"Confirmed"}),Object(h.jsx)("th",{children:"Recovered"}),Object(h.jsx)("th",{children:"Deaths"}),Object(h.jsx)("th",{children:"Active"}),Object(h.jsx)("th",{children:"Updated"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:e.state}),Object(h.jsx)("td",{children:e.confirmed}),Object(h.jsx)("td",{children:e.recovered}),Object(h.jsx)("td",{children:e.deaths}),Object(h.jsx)("td",{children:e.active}),Object(h.jsx)("td",{children:e.lastupdatedtime})]},t)}))})]})})]})})};var b=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(l,{})})};r.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.74a4b7c1.chunk.js.map