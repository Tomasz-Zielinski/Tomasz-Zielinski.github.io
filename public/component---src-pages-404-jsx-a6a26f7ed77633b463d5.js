(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{248:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(256);t.default=function(e){var t=e.location;return o.a.createElement(r.a,{location:t},o.a.createElement("h1",null,"404"),o.a.createElement("h2",null,"not found"),o.a.createElement("p",null,"Sorry. This page does not exist."))}},253:function(e,t,n){var a;e.exports=(a=n(255))&&a.default||a},254:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(84),c=n.n(r);n.d(t,"a",function(){return c.a});n(253),n(14).default.enqueue,o.a.createContext({})},255:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),o=n.n(a),r=n(111);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null}},256:function(e,t,n){"use strict";n(36);var a=n(0),o=n.n(a),r=n(257),c=n.n(r),l=(n(17),n(15),n(11),n(24),n(254)),i=n(258),s=(n(110),n(59),n(243)),u=n.n(s);var m=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)},d=function(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;var t=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return"#"+m(t[1])+m(t[2])+m(t[3])},p=function(e){var t,n;function a(t){var n;(n=e.call(this,t)||this).switchTheme=n.switchTheme.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));return"undefined"!=typeof window&&(document.body.className=document.body.className||"dark"),n.color="#fff"===n.color?"#000":"#fff",n.state={theme:"dark"},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.switchTheme=function(e){e.target.style.backgroundColor=d(window.getComputedStyle(document.body).getPropertyValue("background-color"));var t="white"===this.state.theme?"dark":"white";this.setState({theme:t}),document.body.className=t;var n=d(window.getComputedStyle(document.body).getPropertyValue("background-color")),a=d(window.getComputedStyle(document.body).getPropertyValue("color"));window.CANVAS_BACKGROUND.setColors(a,n)},r.render=function(){return o.a.createElement("div",{className:u.a.theme},o.a.createElement("div",{style:{backgroundColor:this.color},onClick:this.switchTheme}))},a}(o.a.Component);var f=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={expanded:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.toggle=function(){this.setState(function(e){return{expanded:!e.expanded}})},r.render=function(){var e,t,n=this,a=this.props.location,r=this.state.expanded,c={Home:"/",Work:"/works",Contact:"/contact"},s=o.a.createElement("ul",null,Object.keys(c).map(function(e){var t=c[e];return o.a.createElement("li",{key:e},t===a.pathname?o.a.createElement("span",null,e):o.a.createElement(l.a,{to:t},e))}));return r?(e=o.a.createElement(i.b,{className:"menu-toggle",onClick:function(){return n.toggle()}}),t=o.a.createElement("div",{className:"menu-container expanded"},s)):(e=o.a.createElement(i.a,{className:"menu-toggle",onClick:function(){return n.toggle()}}),t=o.a.createElement("div",{className:"menu-container"},s)),o.a.createElement("nav",{className:"navbar"},o.a.createElement(p,null),e,t)},a}(o.a.Component),h=n(244),v=n.n(h);function g(){return o.a.createElement("div",{className:v.a.footer},o.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Tomasz Zielinski"))}var y=n(245),w=n.n(y);t.a=function(e){var t=e.children,n=e.location,a=e.title,r=e.width,l=r?{maxWidth:r+"px"}:{};return o.a.createElement("div",{className:w.a.layout,style:l},o.a.createElement(c.a,{title:n.pathname.split("/").pop()},o.a.createElement("meta",{name:"description",title:a,content:"Tomasz Zielinski Portfolio Website"})),o.a.createElement(f,{location:n}),o.a.createElement("div",{className:"content"},t),o.a.createElement(g,null))}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-a6a26f7ed77633b463d5.js.map