(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var r,o=n("q1tI");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,a(t).call(this,e))).prevProps={},n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.Component),n=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return l.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&s(n.prototype,r),i&&s(n,i),t}();t.default=f},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],l=!1,f=-1;function p(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=u(p);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||l||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),i=n("eVuF"),s=n.n(i);function u(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(l){return void n(l)}a.done?t(c):s.a.resolve(c).then(r,o)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=n("hfKm"),l=n.n(c);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),l()(e,r.key,r)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var h=n("XVgq"),d=n.n(h),m=n("Z7t5"),v=n.n(m);function y(e){return(y="function"===typeof v.a&&"symbol"===typeof d.a?function(e){return typeof e}:function(e){return e&&"function"===typeof v.a&&e.constructor===v.a&&e!==v.a.prototype?"symbol":typeof e})(e)}function g(e){return(g="function"===typeof v.a&&"symbol"===y(d.a)?function(e){return y(e)}:function(e){return e&&"function"===typeof v.a&&e.constructor===v.a&&e!==v.a.prototype?"symbol":y(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?_(e):t}var b=n("Bhuq"),S=n.n(b),k=n("TRZx"),x=n.n(k);function R(e){return(R=x.a?S.a:function(e){return e.__proto__||S()(e)})(e)}var C=n("SqZg"),j=n.n(C);function T(e,t){return(T=x.a||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=j()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}var O=n("MX0m"),P=n.n(O),z=n("q1tI"),B=n.n(z),E=(n("YFqc"),n("m/Pd")),A=n.n(E);var I=B.a.createElement,N=function(e){function t(){var e,n,r,o,i;a(this,t);for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=w(this,(e=R(t)).call.apply(e,[this].concat(u))),r=_(n),o="state",i={title:n.props.title,content:n.props.content},o in r?l()(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,n}return F(t,z["Component"]),p(t,[{key:"render",value:function(){var e=this;return I("div",{className:"post",style:q.post},this.props.images?this.props.images.map(function(e){return I("img",{key:e.url,style:q.image,src:e.url})}):null,I("div",{style:q.content},I("ul",{className:"tags",style:q.tags},this.props.tags.map(function(t){return I("li",{style:q.tag,key:t+e.props.id},t)})),I("h2",{style:{textAlign:"center",marginBottom:"-5px",fontSize:"2em"}},this.state.title),I("p",{style:{textAlign:"center",color:"#8c8c8c"}},this.props.date),I("p",{style:{textAlign:"center"}},this.state.content)))}}]),t}(),q={tags:{display:"flex",listStyle:"none",marginLeft:"-40px",fontSize:"12px",justifyContent:"center",marginBottom:"-5px"},tag:{padding:"5px 20px",margin:"0 10px",borderRadius:"2px",backgroundColor:"#F8054D",color:"white"},post:{backgroundColor:"#ececec",overflow:"hidden",borderRadius:"5px",width:"100%",marginBottom:"2em"},image:{width:"100%",marginBottom:"-1em"},content:{padding:"3em"}},L=B.a.createElement,M=function(e){function t(){return a(this,t),w(this,R(t).apply(this,arguments))}return F(t,z["Component"]),p(t,[{key:"render",value:function(){return L("div",{style:U.headerBack},L("div",{style:U.header},L("img",{style:U.picture,src:"https://i.imgur.com/wbYWZA0.jpg",alt:"Omar"}),L("h1",{style:U.blogTitle},"Blog")))}}]),t}(),U={headerBack:{background:"url(https://i.imgur.com/k5x66M5.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"5px"},header:{width:"100%",height:"25em",marginBottom:"3em",textAlign:"center",background:"rgba(0,0,0,0.8)",borderRadius:"5px"},picture:{width:"10em",height:"10em",marginTop:"4.5em",borderRadius:"50%",padding:"10px",border:"5px solid #F8054D"},blogTitle:{color:"white",fontWeight:"bold",marginTop:"1em"}},X=n("zgjP"),Z=n.n(X);n.d(t,"default",function(){return D});var W=B.a.createElement,D=(new Date,function(e){function t(){return a(this,t),w(this,R(t).apply(this,arguments))}return F(t,B.a.Component),p(t,[{key:"render",value:function(){return W("div",{className:"jsx-481072388"},W(A.a,null,W("title",{className:"jsx-481072388"},"Omaredu | Blog")),W(M,null),W("div",{className:"jsx-481072388 postsContainer"},this.props.entries.map(function(e){return W(N,{id:e.id,key:e.id,title:e.title,content:e.content,images:e.images,tags:e.tags.split(" "),date:e.date})})),W(P.a,{id:"481072388"},["@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');","*.jsx-481072388{font-family:'Poppins',sans-serif;margin:0;padding:0;}",".postsContainer.jsx-481072388{width:50vw;margin:auto;}","@media (max-width:950px){.post.jsx-481072388 img.jsx-481072388{width:90vw;}.post.jsx-481072388{width:90vw;}.postsContainer.jsx-481072388{width:90vw;}}"]))}}],[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z()("https://omaredu.github.io/blogs/entries.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{entries:n});case 7:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new s.a(function(r,o){var i=e.apply(t,n);function s(e){u(i,r,o,s,a,"next",e)}function a(e){u(i,r,o,s,a,"throw",e)}s(void 0)})});return function(){return t.apply(this,arguments)}}()}]),t}())},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,i;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var o=String(n),i=t+o;return e[i]||(e[i]="jsx-".concat((0,r.default)("".concat(t,"-").concat(o)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,n),i&&s(t,i),e}();t.default=u},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,u=t.optimizeForSpeed,a=void 0===u?r:u,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#".concat(i,"-deleted-rule____{}"),s("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,u;return t=e,(i=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(u){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `".concat(e,"` not found")),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),u&&n(t,u),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),s=n("/+P4"),u=n("N9n2"),a=n("5Uuq"),c=n("KI45");t.__esModule=!0,t.default=void 0;var l,f=c(n("LX0d")),p=n("CxY0"),h=a(n("q1tI")),d=(c(n("17x9")),c(n("nOHt"))),m=(n("KA3u"),n("Bu4q"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new f.default,g=window.IntersectionObserver;function _(){return l||(g?l=new g(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var w=function(e){function t(e){var n;return r(this,t),(n=i(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}(function(e,t){return{href:v(e),as:t?v(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,u=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var a=window.location.pathname;s=(0,p.resolve)(a,s),u=u?(0,p.resolve)(a,u):s,e.preventDefault();var c=n.props.scroll;null==c&&(c=u.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](s,u,{shallow:n.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return u(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),y.set(e,t),function(){n.unobserve(e),y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,p.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),t}(h.Component);w.propTypes=void 0;var b=w;t.default=b},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest,i=[],s=[],u={},a=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:a,headers:{keys:function(){return i},entries:function(){return s},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var c in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){i.push(t=t.toLowerCase()),s.push([t,n]),u[t]=u[t]?u[t]+","+n:n}),n(a())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(c,t.headers[c]);o.send(t.body||null)})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["vlRD",1,0]]]);