/*! created 2019/04/29 by zhaoyimig */!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(t,e,r){var n=function(i){"use strict";var u,t=Object.prototype,s=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function a(t,e,r,n){var o=e&&e.prototype instanceof c?e:c,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(i,a,c){var u=f;return function(t,e){if(u===p)throw new Error("Generator is already running");if(u===d){if("throw"===t)throw e;return k()}for(c.method=t,c.arg=e;;){var r=c.delegate;if(r){var n=j(r,c);if(n){if(n===v)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===f)throw u=d,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=l(i,a,c);if("normal"===o.type){if(u=c.done?d:h,o.arg===v)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=d,c.method="throw",c.arg=o.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=a;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function c(){}function y(){}function g(){}var m={};m[o]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(S([])));_&&_!==t&&s.call(_,o)&&(m=_);var x=g.prototype=c.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(u){var e;this._invoke=function(r,n){function t(){return new Promise(function(t,e){!function e(t,r,n,o){var i=l(u[t],u,r);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):Promise.resolve(c).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)})}o(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function j(t,e){var r=t.iterator[e.method];if(r===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=u,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:u,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[n]=y.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,n in t||(t[n]="GeneratorFunction")),t.prototype=Object.create(x),t},i.awrap=function(t){return{__await:t}},b(L.prototype),L.prototype[r]=function(){return this},i.AsyncIterator=L,i.async=function(t,e,r,n){var o=new L(a(t,e,r,n));return i.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},b(x),x[n]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},i.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),v}},i}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj){__p+='<div class="ui-container">\n  <style type="text/css">\n    .container {\n      font-size: 30px; \n      background-color: red; \n      color: blue;\n    }\n  </style>\n  \n  <div class="container">\n    <img src="/static/images/logo.jpg" width="400" height="100">\n    <div class="box">\n      <div>名字：'+(null==(__t=name)?"":__t)+"</div>\n      <div>年龄："+(null==(__t=age)?"":__t)+"</div>\n      <div>\n        技能：\n        ";for(var i=0;i<skill.length;i+=1)__p+="\n          "+(null==(__t=skill[i])?"":__t)+"\n        ";__p+="\n      </div>\n    </div>\n  </div>  \n</div>"}return __p}},function(t,e,c){"use strict";c.r(e);c(0);function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){u(n,e,r,o,i,"next",t)}function i(t){u(n,e,r,o,i,"throw",t)}o(void 0)})}}window.init=r(regeneratorRuntime.mark(function t(){var n,o,i,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(e,t){var r=new XMLHttpRequest;r.open("GET","/api/user",!0),r.onload=function(t){e(r.response)},r.onerror=function(t){e(t)},r.send()});case 2:return n=t.sent,console.log(n),t.next=6,new Promise(function(e,t){var r=new XMLHttpRequest;r.open("GET","/app/project",!0),r.onload=function(t){e(r.response)},r.send()});case 6:o=t.sent,console.log(o),i={name:"zym",age:18,skill:["HTML","CSS","JavaScript","Node"]},a=c(1)(i),document.body.appendChild((e=a,r=void 0,(r=document.createElement("div")).innerHTML=e,r.children[0]));case 11:case"end":return t.stop()}var e,r},t)})),init()}]);