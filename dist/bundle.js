(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),c=t(645),a=t.n(c)()(o());a.push([e.id,'body,\nhtml {\n  padding: 0%;\n  margin: 0;\n}\n\nh1 {\n  font-size: 40px;\n  text-align: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.calculator {\n    background-color: rgb(66, 65, 65);\n    border-radius: 1rem;\n    padding: 3rem;\n    min-width: 320px;\n}\n\n.calculatorContainer {\n  display: flex;\n  justify-content: center;\n\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 20px;\n}\n\n.buttonContainer {\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-auto-rows: 1fr;\n    gap:1rem;\n}\n\nbutton {\n  border: 1px solid black;\n  border-radius: 5px;\n\n  font-weight: bold;\n  padding: .5rem;\n}\n\n.equalsButton {\n  background-color: rgb(25, 42, 48);\n  grid-column: 3/5;\n}\n\n.screen {\n  background-color: #aecca6;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n\n  font-family: "Courier New", monospace;\n  font-weight: bold;\n  text-align: right;\n}\n\n.stored {\n  font-size: 12px;\n  height: 12px;\n  text-align: right;\n  padding: 5px;\n}\n\n.current {\n  font-size: 28px;\n  font-weight: bold;\n  word-wrap: break-word;\n  text-align: right;\n  padding: 7px 0 3px 0;\n}\n',""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],s=0;s<e.length;s++){var i=e[s],u=r.base?i[0]+r.base:i[0],d=c[u]||0,l="".concat(u," ").concat(d);c[u]=d+1;var p=t(l),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var s=t(c[a]);n[s].references--}for(var i=r(e,o),u=0;u<c.length;u++){var d=t(c[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}c=i}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e){return Math.round(100*e)/100}const n=function(n,t,r){switch(n){case"+":return e(+r+ +t);case"-":return e(+r-+t);case"x":return e(function(e,n){return+e*+n}(r,t));case"÷":return e(function(e,n){return"0"===n?(alert("Can't divide by zero"),null):+e/+n}(r,t));case"%":return e(function(e,n){return+e%+n}(r,t))}};var r=t(379),o=t.n(r),c=t(795),a=t.n(c),s=t(569),i=t.n(s),u=t(565),d=t.n(u),l=t(216),p=t.n(l),f=t(589),m=t.n(f),h=t(426),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;let g=null,x=!1;(function(){const e=document.createElement("div");e.classList.add("container");const n=document.createElement("h1");n.textContent="Calculator",e.appendChild(n);const t=document.createElement("div");t.classList.add("calculator"),t.appendChild(function(){const e=document.createElement("div");e.classList.add("screen");const n=document.createElement("div");n.classList.add("stored"),e.appendChild(n);const t=document.createElement("div");return t.classList.add("current"),t.textContent="0",e.appendChild(t),e}()),t.appendChild(function(){const e=document.createElement("div");return e.classList.add("buttonContainer"),[["AC","C","%","÷"],[7,8,9,"x"],[4,5,6,"-"],[1,2,3,"+"],[0,".","="]].forEach((n=>{n.forEach((n=>{const t=document.createElement("button");t.textContent=n,"="===n&&t.classList.add("equalsButton"),e.appendChild(t)}))})),e}()),e.appendChild(t),document.body.appendChild(e)})(),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(()=>{!function(e){switch(e){case"AC":y.clearAll();break;case"C":y.clearInput();break;case".":y.checkClear(),"0"===y.current?y.current="0.":y.current.includes(".")||(y.current+="."),y.showInput(`${y.current}`);break;case"=":g&&y.stored&&(y.showStored(`${y.stored} ${g} ${y.current} =`),y.stored=n(g,y.current,y.stored).toString(),y.showInput(`${y.stored}`),y.current=y.stored,g=null);break;case"+":case"-":case"x":case"÷":case"%":g&&x?(y.showStored(`${y.stored} ${e}`),g=e,console.log("should only change symbol")):g?(y.stored=n(g,y.current,y.stored).toString(),y.showStored(`${y.stored} ${e}`),y.showInput(`${y.stored}`),g=e,x=!0):(y.stored=y.current,g=e,y.showStored(`${y.stored} ${g}`),x=!0);break;default:y.checkClear(),"0"===y.current?(y.current=e,y.showInput(`${e}`)):(y.current+=e,y.showInput(y.current))}}(e.textContent)}))}));const y={current:"0",stored:"",showInput(e){document.querySelector(".current").textContent=e},showStored(e){document.querySelector(".stored").textContent=e},checkClear(){x&&(y.clearInput(),x=!1)},clearInput(){document.querySelector(".current").textContent="0",this.current="0"},clearAll(){document.querySelector(".current").textContent="0",document.querySelector(".stored").textContent="",this.current="0",this.stored="0",g=null}}})()})();