(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(4),i=a.n(r),o=(a(11),a(3)),d=a(5),l="69d2cd6693fe4c31f2f752536fd95b52",h="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),u=i[0],j=i[1];return Object(c.jsxs)("div",{className:"undefined"!=typeof u.main?u.main.temp>16?"warm":"cold":"app",children:[Object(c.jsxs)("div",{className:"heading",children:["Weather-App ",Object(c.jsx)(d.a,{})]}),Object(c.jsx)("div",{className:"search-box",children:Object(c.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search Location..",onChange:function(e){return s(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(h,"weather?q=").concat(a,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){j(e),s(""),console.log(e)}))}})}),"undefined"!=typeof u.main?Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"location-box",children:[Object(c.jsxs)("div",{className:"location",children:[u.name,", ",u.sys.country]}),Object(c.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(c," ").concat(n)}(new Date)})]}),Object(c.jsxs)("div",{className:"weather-box",children:[Object(c.jsxs)("div",{className:"temp",children:[Math.round(u.main.temp),"\xb0c"]}),Object(c.jsx)("div",{className:"weather",children:u.weather[0].main})]})]}):Object(c.jsx)("div",{className:"error",children:Object(c.jsx)("h3",{className:"error-message",children:"Please Enter A Location:"})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),j()}},[[12,1,2]]]);
//# sourceMappingURL=main.5838d806.chunk.js.map