!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}({0:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},13:function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return o.android()||o.blackberry()||o.ios()||o.opera()||o.windows()}},u=o;var a={init:function(){var t=d3.select(".intro__typing"),e="What text prediction teaches us about language";setTimeout(function(){var n=0,r=d3.interval(function(){if(t.text().length==e.length)return r.stop(),void d3.select(".blink").transition().delay(5e3).style("animation","none").style("border-right","none");!function(n){var r=Math.max(0,Math.min(e.length+1,Math.floor(n*e.length)));t.text(e.substring(0,r))}(n+=.01)},50)},1e3),window.addEventListener("scroll",function(){d3.select(".more-icon").style("display","none")})},resize:function(){}},c=d3.select("body"),f=0;function s(){var t=c.node().offsetWidth;f!==t&&(f=t,a.resize())}c.classed("is-mobile",u.any()),window.addEventListener("resize",i()(s,150)),function(){if(c.select("header").classed("is-sticky")){var t=c.select(".header__menu"),e=c.select(".header__toggle");e.on("click",function(){var n=t.classed("is-visible");t.classed("is-visible",!n),e.classed("is-visible",!n)})}}(),a.init()},2:function(t,e,n){(function(e){var n="Expected a function",r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),v=Object.prototype.toString,p=Math.max,b=Math.min,y=function(){return d.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&v.call(t)==i}(t))return r;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=a.test(t);return n||c.test(t)?f(t.slice(2),n?2:8):u.test(t)?r:+t}t.exports=function(t,e,r){var i,o,u,a,c,f,s=0,l=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(n);function m(e){var n=i,r=o;return i=o=void 0,s=e,a=t.apply(r,n)}function j(t){var n=t-f;return void 0===f||n>=e||n<0||d&&t-s>=u}function w(){var t=y();if(j(t))return x(t);c=setTimeout(w,function(t){var n=e-(t-f);return d?b(n,u-(t-s)):n}(t))}function x(t){return c=void 0,v&&i?m(t):(i=o=void 0,a)}function O(){var t=y(),n=j(t);if(i=arguments,o=this,f=t,n){if(void 0===c)return function(t){return s=t,c=setTimeout(w,e),l?m(t):a}(f);if(d)return c=setTimeout(w,e),m(f)}return void 0===c&&(c=setTimeout(w,e)),a}return e=h(e)||0,g(r)&&(l=!!r.leading,u=(d="maxWait"in r)?p(h(r.maxWait)||0,e):u,v="trailing"in r?!!r.trailing:v),O.cancel=function(){void 0!==c&&clearTimeout(c),s=0,i=f=o=c=void 0},O.flush=function(){return void 0===c?a:x(y())},O}}).call(this,n(0))}});