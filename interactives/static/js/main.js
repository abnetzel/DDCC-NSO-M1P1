/*! For license information please see main.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],[,,,,,,,function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return a})),n.d(e,"c",(function(){return u}));var r="InitActivities",o="ActivityResources",i="data-activity",c="scoreData",a="tooltipContainer",u=[".focusable","a[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex^="-"])']},,,function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},,,,,function(t,e,n){var r=n(99),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},,,,,,function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){t.exports=n(176)},,,,,,,,,function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(72),o=n(190),i=n(191),c="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:c:u&&u in Object(t)?o(t):i(t)}},,,,,,,,function(t,e,n){var r=n(179),o=n(180),i=n(181),c=n(182),a=n(183);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,e,n){var r=n(44);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e){t.exports=function(t,e){return t===e||t!==t&&e!==e}},function(t,e,n){var r=n(50)(Object,"create");t.exports=r},function(t,e,n){var r=n(204);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=!1,o=!1},function(t,e,n){"use strict";n(31),n(32);var r=n(109);n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var o=new r.EventEmitter,i=(new WeakMap,function(t){var e=function(t){var e;switch(t.type){case"touchmove":e=t.touches[0];break;case"touchend":case"touchstart":e=t.changedTouches[0];break;default:e=t}return e}(t);return{x:e.pageX,y:e.pageY}})},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(66).a;var r={};"ontouchstart"in document.documentElement?(r.DOWN="touchstart",r.MOVE="touchmove",r.UP="touchend"):(r.DOWN="mousedown",r.MOVE="mousemove",r.UP="mouseup");var o={SAVE_ACTIVITY:"activity:save",CANCEL_ACTIVITY:"activity:cancel",CLOSE_ACTIVITY:"activity:close",BACK_ACTIVITY:"activity:back",CANCEL_CARD:"cancel:card",SCROLLING_ACTIVITY:"activity:scrolling",SHOW_PREVIEW:"preview:show",LOAD_CKEDTITOR:"ckeditor:load",INIT_CKEDTITOR:"ckeditor:init",SELECT_FILES:"files:select",INIT_SCORE:"score:init",CHANGE_SCORE:"score:change",LOAD_STORAGE:"load:storage"}},function(t,e,n){var r=n(189),o=n(194);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(63),o=n(103);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){"use strict";function r(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)}))}}n.d(e,"a",(function(){return o}))},,,,,,,,,,,function(t,e,n){var r=n(34),o=n(10),i="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==c||e==a||e==i||e==u}},function(t,e,n){var r=n(101);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"h",(function(){return l}));var r=function(){return window.matchMedia("only screen and (max-width: 668px)").matches},o=!!document.documentMode,i=/Edge/.test(navigator.userAgent),c=o||i,a=/Firefox/i.test(navigator.userAgent),u=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS"),s=(/android/i.test(navigator.userAgent),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),f=function(){return s&&r()},p=function(){return f()&&window.matchMedia("(orientation: portrait)").matches},l=function(){return s&&!r()}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));var r=n(48),o=n(7),i=n(49),c=function(){window[o.e]={},r.a.on(i.a.INIT_SCORE,(function(t){window[o.e][t.id].currentScore=t.currentScore})),r.a.on(i.a.CHANGE_SCORE,(function(t){window[o.e][t.id]={currentScore:t.currentScore,totalScore:t.totalScore}}))},a=function(t){"function"===typeof window.setActivityResults&&window.setActivityResults(t)}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(113),o=n(220),i=n(51);t.exports=function(t){return i(t)?r(t,!0):o(t)}},function(t,e,n){var r=n(50)(n(15),"Map");t.exports=r},function(t,e,n){var r=n(15).Symbol;t.exports=r},function(t,e,n){var r=n(112)(Object.getPrototypeOf,Object);t.exports=r},function(t,e,n){(function(t){var r=n(15),o=n(215),i=e&&!e.nodeType&&e,c=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=c&&c.exports===i?r.Buffer:void 0,u=(a?a.isBuffer:void 0)||o;t.exports=u}).call(this,n(65)(t))},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(33))},function(t,e,n){var r=n(64),o=n(44);t.exports=function(t,e,n){(void 0===n||o(t[e],n))&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(50),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=o},function(t,e,n){var r=n(213),o=n(21),i=Object.prototype,c=i.hasOwnProperty,a=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&c.call(t,"callee")&&!a.call(t,"callee")};t.exports=u},function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},function(t,e,n){var r=n(217),o=n(115),i=n(116),c=i&&i.isTypedArray,a=c?o(c):r;t.exports=a},function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}},function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?n:e)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(178),o=n(222)((function(t,e,n){r(t,e,n)}));t.exports=o},function(t,e,n){"use strict";var r,o="object"===typeof Reflect?Reflect:null,i=o&&"function"===typeof o.apply?o.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};r=o&&"function"===typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var c=Number.isNaN||function(t){return t!==t};function a(){a.init.call(this)}t.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function s(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function f(t,e,n,r){var o,i,c,a;if("function"!==typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),i=t._events),c=i[e]),void 0===c)c=i[e]=n,++t._eventsCount;else if("function"===typeof c?c=i[e]=r?[n,c]:[c,n]:r?c.unshift(n):c.push(n),(o=s(t))>0&&c.length>o&&!c.warned){c.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=c.length,a=u,console&&console.warn&&console.warn(a)}return t}function p(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,t))}function l(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},o=p.bind(r);return o.listener=n,r.wrapFn=o,o}function v(t,e,n){var r=t._events;if(void 0===r)return[];var o=r[e];return void 0===o?[]:"function"===typeof o?n?[o.listener||o]:[o]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(o):d(o,o.length)}function h(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function d(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(t){if("number"!==typeof t||t<0||c(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");u=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!==typeof t||t<0||c(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return s(this)},a.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var c;if(e.length>0&&(c=e[0]),c instanceof Error)throw c;var a=new Error("Unhandled error."+(c?" ("+c.message+")":""));throw a.context=c,a}var u=o[t];if(void 0===u)return!1;if("function"===typeof u)i(u,this,e);else{var s=u.length,f=d(u,s);for(n=0;n<s;++n)i(f[n],this,e)}return!0},a.prototype.addListener=function(t,e){return f(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return f(this,t,e,!0)},a.prototype.once=function(t,e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,l(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,l(this,t,e)),this},a.prototype.removeListener=function(t,e){var n,r,o,i,c;if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0===--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!==typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===e||n[i].listener===e){c=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,o),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,c||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},a.prototype.listeners=function(t){return v(this,t,!0)},a.prototype.rawListeners=function(t){return v(this,t,!1)},a.listenerCount=function(t,e){return"function"===typeof t.listenerCount?t.listenerCount(e):h.call(t,e)},a.prototype.listenerCount=h,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(t,e,n){var r=n(123),o=n(64);t.exports=function(t,e,n,i){var c=!n;n||(n={});for(var a=-1,u=e.length;++a<u;){var s=e[a],f=i?i(n[s],t[s],s,n,t):void 0;void 0===f&&(f=t[s]),c?o(n,s,f):r(n,s,f)}return n}},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(219),o=n(102),i=n(67),c=n(74),a=n(106),u=n(104),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),f=!n&&o(t),p=!n&&!f&&c(t),l=!n&&!f&&!p&&u(t),v=n||f||p||l,h=v?r(t.length,String):[],d=h.length;for(var y in t)!e&&!s.call(t,y)||v&&("length"==y||p&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||a(y,d))||h.push(y);return h}},function(t,e,n){var r=n(211);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(99),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===o&&r.process,a=function(){try{var t=i&&i.require&&i.require("util").types;return t||c&&c.binding&&c.binding("util")}catch(e){}}();t.exports=a}).call(this,n(65)(t))},,function(t,e,n){var r=n(42),o=n(184),i=n(185),c=n(186),a=n(187),u=n(188);function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=c,s.prototype.has=a,s.prototype.set=u,t.exports=s},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},function(t,e,n){(function(t){var r=n(15),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===o?r.Buffer:void 0,a=c?c.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=a?a(n):new t.constructor(n);return t.copy(r),r}}).call(this,n(65)(t))},function(t,e,n){var r=n(114);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},function(t,e,n){var r=n(212),o=n(73),i=n(69);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}},function(t,e,n){var r=n(64),o=n(44),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var c=t[e];i.call(t,e)&&o(c,n)&&(void 0!==n||e in t)||r(t,e,n)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new A(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===l)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=j(c,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?v:p,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",l="executing",v="completed",h={};function d(){}function y(){}function g(){}var b={};b[i]=function(){return this};var m=Object.getPrototypeOf,x=m&&m(m(C([])));x&&x!==n&&r.call(x,i)&&(b=x);var w=g.prototype=d.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,c){var a=s(t[n],t,o);if("throw"!==a.type){var u=a.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):Promise.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,c)}))}c(a.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:k}}function k(){return{value:e,done:!0}}return y.prototype=w.constructor=g,g.constructor=y,g[a]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(O.prototype),O.prototype[c]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o){var i=new O(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),w[a]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){t.exports={cardContentWidth:"800px",primaryColor:"#000",secondaryColor:"#c0c0c0"}},function(t,e,n){var r=n(118),o=n(100),i=n(208),c=n(210),a=n(10),u=n(70),s=n(105);t.exports=function t(e,n,f,p,l){e!==n&&i(n,(function(i,u){if(l||(l=new r),a(i))c(e,n,u,f,t,p,l);else{var v=p?p(s(e,u),i,u+"",e,n,l):void 0;void 0===v&&(v=i),o(e,u,v)}}),u)}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(43),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},function(t,e,n){var r=n(43);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(43);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(43);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(42);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(42),o=n(71),i=n(195),c=200;t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!o||a.length<c-1)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(a)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(63),o=n(192),i=n(10),c=n(119),a=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,f=u.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?l:a).test(c(t))}},function(t,e,n){var r=n(72),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(u){}var o=c.call(t);return r&&(e?t[a]=n:delete t[a]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(193),o=function(){var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},function(t,e,n){var r=n(15)["__core-js_shared__"];t.exports=r},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(196),o=n(203),i=n(205),c=n(206),a=n(207);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,e,n){var r=n(197),o=n(42),i=n(71);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(198),o=n(199),i=n(200),c=n(201),a=n(202);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,e,n){var r=n(45);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(45),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===o?void 0:n}return i.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(45),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(45),o="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?o:e,this}},function(t,e,n){var r=n(46);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(46);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(46);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(46);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){var r=n(209)();t.exports=r},function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,i=Object(e),c=r(e),a=c.length;a--;){var u=c[t?a:++o];if(!1===n(i[u],u,i))break}return e}}},function(t,e,n){var r=n(100),o=n(120),i=n(121),c=n(111),a=n(122),u=n(102),s=n(67),f=n(214),p=n(74),l=n(63),v=n(10),h=n(216),d=n(104),y=n(105),g=n(218);t.exports=function(t,e,n,b,m,x,w){var _=y(t,n),O=y(e,n),j=w.get(O);if(j)r(t,n,j);else{var L=x?x(_,O,n+"",t,e,w):void 0,E=void 0===L;if(E){var A=s(O),C=!A&&p(O),k=!A&&!C&&d(O);L=O,A||C||k?s(_)?L=_:f(_)?L=c(_):C?(E=!1,L=o(O,!0)):k?(E=!1,L=i(O,!0)):L=[]:h(O)||u(O)?(L=_,u(_)?L=g(_):v(_)&&!l(_)||(L=a(O))):E=!1}E&&(w.set(O,L),m(L,O,b,x,w),w.delete(O)),r(t,n,L)}}},function(t,e,n){var r=n(15).Uint8Array;t.exports=r},function(t,e,n){var r=n(10),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e,n){var r=n(34),o=n(21),i="[object Arguments]";t.exports=function(t){return o(t)&&r(t)==i}},function(t,e,n){var r=n(51),o=n(21);t.exports=function(t){return o(t)&&r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(34),o=n(73),i=n(21),c="[object Object]",a=Function.prototype,u=Object.prototype,s=a.toString,f=u.hasOwnProperty,p=s.call(Object);t.exports=function(t){if(!i(t)||r(t)!=c)return!1;var e=o(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==p}},function(t,e,n){var r=n(34),o=n(103),i=n(21),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!c[r(t)]}},function(t,e,n){var r=n(110),o=n(70);t.exports=function(t){return r(t,o(t))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(10),o=n(69),i=n(221),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=o(t),n=[];for(var a in t)("constructor"!=a||!e&&c.call(t,a))&&n.push(a);return n}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){var r=n(223),o=n(230);t.exports=function(t){return r((function(e,n){var r=-1,i=n.length,c=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(c=t.length>3&&"function"==typeof c?(i--,c):void 0,a&&o(n[0],n[1],a)&&(c=i<3?void 0:c,i=1),e=Object(e);++r<i;){var u=n[r];u&&t(e,u,r,c)}return e}))}},function(t,e,n){var r=n(107),o=n(224),i=n(226);t.exports=function(t,e){return i(o(t,e,r),t+"")}},function(t,e,n){var r=n(225),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,c=-1,a=o(i.length-e,0),u=Array(a);++c<a;)u[c]=i[e+c];c=-1;for(var s=Array(e+1);++c<e;)s[c]=i[c];return s[e]=n(u),r(t,this,s)}}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(227),o=n(229)(r);t.exports=o},function(t,e,n){var r=n(228),o=n(101),i=n(107),c=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=c},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var n=800,r=16,o=Date.now;t.exports=function(t){var e=0,i=0;return function(){var c=o(),a=r-(c-i);if(i=c,a>0){if(++e>=n)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(44),o=n(51),i=n(106),c=n(10);t.exports=function(t,e,n){if(!c(n))return!1;var a=typeof e;return!!("number"==a?o(n)&&i(e,n.length):"string"==a&&e in n)&&r(n[e],t)}},function(t,e,n){var r={"./en":[124,4],"./en.json":[124,4],"./ru":[125,5],"./ru.json":[125,5]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(r)},o.id=231,t.exports=o},function(t,e,n){var r={"./_dragndrop/index":[249,0,7,1,9,11],"./connections/index":[246,0,2,1,3,12],"./crossword/components/WordList/index":[235,13],"./crossword/index":[243,0,2,1,14],"./flashcards/index":[237,0,10,1,15],"./hotspot/index":[244,0,2,1,8,16],"./imagemap/index":[250,0,1,8,17],"./labeling/index":[240,0,2,7,1,9,18],"./matching/index":[241,0,2,1,20],"./memory/index":[248,0,2,1,3,21],"./ordering/index":[247,0,2,1,3,22],"./pairs/index":[245,0,2,1,3,23],"./slideshow/index":[236,0,2,10,1,25],"./sorting/index":[242,0,2,1,3,26],"./timeline/index":[238,0,1,27],"./wordsearch/index":[239,0,2,1,28]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=232,t.exports=o},function(t,e,n){"use strict";n.r(e);var r=n(22),o=n.n(r),i=n(52),c=n(31),a=n(32),u=(n(177),n(108)),s=n.n(u),f=n(47),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(t){if(!f.b&&"serviceWorker"in navigator){if(new URL("./interactives",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("./interactives","/service-worker.js");p?(!function(t,e){fetch(t).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):v(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):v(e,t)}))}}function v(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var h=n(68),d=function(){var t=document.getElementById("sidebar"),e=document.getElementById("sidebar-toggle-btn");if(t&&e){var n,r,o,i=function(){return parseFloat(getComputedStyle(t).marginLeft)};e.addEventListener("click",(function(){r=0,n=Math.random(),o=i(),function e(c,a){if(c===n){window.dispatchEvent(new CustomEvent("resize"));var u=i();r=o===u?r+1:0,o=u,(a?Math.abs(Math.floor(u))!==t.offsetWidth:0!==u)&&r<5&&requestAnimationFrame((function(){return e(c,a)}))}}(n,0===o)}))}},y=n(7),g=function(){function t(){Object(c.a)(this,t)}return Object(a.a)(t,[{key:"loadLocale",value:function(t){return n(231)("./".concat(t||document.documentElement.getAttribute("lang")||navigator.language||navigator.userLanguage))}},{key:"attachServiceWorker",value:function(){f.b?"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})):l()}},{key:"appendGlobalContainers",value:function(){var t=document.createElement("div");t.id=y.f,t.style.cssText="position: absolute; z-index: 9999",document.body.appendChild(t)}},{key:"bootstrapActivies",value:function(){var t=Object(i.a)(o.a.mark((function t(e){var r,i,c,a,u,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Array.from(document.querySelectorAll("*["+y.b+"]")),i=0,c=r;case 2:if(!(i<c.length)){t.next=14;break}if(a=c[i],u=a.getAttribute(y.b),!(f=window[y.a][u])){t.next=11;break}return t.next=9,n(232)("./".concat(f.type,"/index"));case 9:t.sent.bootstrap(a,f,new Proxy(e,{get:function(t,e){return t.common&&t[e]?s()({},t.common,t[e]):t[e]}}));case 11:i++,t.next=2;break;case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}],[{key:"bootstrap",value:function(){var e=Object(i.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new t).attachServiceWorker(),n.appendGlobalContainers(),d(),Object(h.a)(),e.next=7,n.loadLocale().catch((function(){return n.loadLocale("en")}));case 7:return r=e.sent,e.next=10,n.bootstrapActivies(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),t}();window.manualControl?window[y.d]=g.bootstrap:document.addEventListener("DOMContentLoaded",g.bootstrap)}],[[233,6]]]);
//# sourceMappingURL=main.js.map