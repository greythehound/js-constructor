!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=s(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:v(f,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,g=0;function v(e,t){var n,r,o;if(t.singleton){var a=g++;n=h||(h=c(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);i[o].references--}for(var a=l(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"#app {\r\n    position: relative;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n}\r\n\r\n.content {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 200px;\r\n}\r\n\r\n.sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 200px;\r\n    z-index: 100;\r\n    padding: 10px;\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n    overflow-y: auto;\r\n}",""]),t.default=o},function(e,t,n){"use strict";n.r(t);function r(e,t=""){return`<div class="row" style="${"margin:0; "+t}">${e}</div>`}function o(e){return`<div class="col-sm">${e}</div>`}class a{constructor(e,t){this.value=e,this.options=t}toHTML(){throw new Error("Method toHTML must be implemented!")}}class i extends a{constructor(e,t){super(e,t)}toHTML(){const{tag:e="h2",styles:t}=this.options;return r(o(`\n            <${e}>${this.value}</${e}>\n        `),t)}}class s extends a{constructor(e,t){super(e,t)}toHTML(){return r(o(`\n        <p style="margin-bottom:0;">${this.value}</p>\n        `),this.options.styles)}}function l(e){return`\n        <form name="${e}">\n            <h5>${e}</h5>\n            <div class="form-group">\n                <input class="form-control form-control-sm" name="value" placeholder="value">\n            </div>\n            <div class="form-group">\n                <input class="form-control form-control-sm" name="styles" placeholder="styles">\n            </div>\n            <button type="submit" class="btn-primary btn btn-sm">Create</button>\n        </form>\n        <hr />\n    `}var c=n.p+"43a5b99fcf2be4e442c5257ccff97acd.png";const u=[new class extends a{constructor(e,t){super(e,t)}toHTML(){const{alt:e,styles:t,imageStyles:n}=this.options;return r(`<img src="${this.value}" alt="${e}" style="${n}" />`,t)}}(c,{styles:"display: flex; justify-content: center;",alt:"My Image",imageStyles:"width: 100%; height: auto;"}),new i("Model Y",{tag:"h2",styles:function(e={}){return Object.keys(e).map(t=>`${t}: ${e[t]}`).join(";")}({background:"linear-gradient(to bottom right, #07203a, #0d437e)",color:"#fff","text-align":"center"})}),new s("Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 17,000 Superchargers worldwide, with six new locations opening every week",{styles:"background: #001939; color: white; padding-top: 10px;padding-left: 5%; padding-right: 5%;"}),new class extends a{constructor(e,t){super(e,t)}toHTML(){return r(this.value.map(e=>o(e)).join(""),this.options.styles)}}(["Like every Tesla, Model Y is designed to be the safest vehicle in its class. The low center of gravity, rigid body structure and large crumple zones provide unparalleled protection.","Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.","Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.","All new Tesla cars come standard with emergency braking, collision warning, blind-spot monitoring and more. Model Y will have Full Self-Driving capability, enabling automatic driving on city streets and highways pending regulatory approval, as well as the ability to come find you anywhere in a parking lot."],{styles:"background: linear-gradient(#001939, black); color: white; padding: 1rem;"})];n(1);const d=new class{constructor(e){this.$el=document.querySelector(e)}render(e){this.$el.innerHTML="",e.forEach(e=>{this.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}("#site");new class{constructor(e,t){this.$el=document.querySelector(e),this.update=t,this.init()}init(){this.$el.addEventListener("submit",this.addBlock.bind(this)),this.$el.innerHTML=this.template}get template(){return[l("text"),l("title")].join("")}addBlock(e){e.preventDefault();const t=e.target.name,n=e.target.value.value,r=e.target.styles.value,o=new("text"===t?s:i)(n,{styles:r});this.update(o),e.target.value.value="",e.target.styles.value=""}}("#panel",e=>{u.push(e),d.render(u)});d.render(u)}]);