!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(){const e=document.createElement("div"),t=document.createElement("p");t.textContent="Find us using the map below",e.appendChild(t);const n=document.createElement("img");return n.src="https://i.ya-webdesign.com/images/maps-vector-treasure-hunt-1.png",e.appendChild(n),e}n.r(t);const r=document.querySelector("#content"),o=document.createElement("h1");o.textContent="PizzArminia",o.className="title",r.appendChild(o);const c=document.createElement("img");c.src="https://clipartart.com/images/clipart-images-of-pizza-3.png",c.className="logo",r.appendChild(c);const i=document.createElement("h2");i.textContent="Have a taste of the world's most delicious pizzas",i.className="subtitle",r.appendChild(i);const l=document.createElement("div");function s(e,t,n){const a=document.createElement("input");a.type="radio",a.id=e,a.name="tab";const r=document.createElement("label");r.className="tabButton",r.for=e,r.textContent=t,r.id=e;const o=n();r.appendChild=o,l.appendChild(a),l.appendChild(r)}l.className="tabsy",r.appendChild(l),s("tab1","About",(function(){const e=document.createElement("div"),t=document.createElement("p");return t.textContent="Opened in 1569 by Father Armin, a Benedictian Monk, our restaurant serves hungry visitors only the most delicious pizzas with beer and Coca Cola.",e.appendChild(t),e})),s("tab2","Menu",(function(){const e=document.createElement("div");let t=[{"Fresh P":"4 Point Kneeling Lumbar",Params:[{param:"Sets",childParam:"1"},{param:"Reps",childParam:"1"}]},{exerciseName:"Side Flexion",Params:[{param:"Sets",childParam:"1"},{param:"Reps",childParam:"1"}]}],n="";for(var a=0,r=t.length;a<r;a++){n+="<li>"+t[a].exerciseName;for(var o=0,c=t[a].Params.length;o<c;o++)n+=", "+t[a].Params[o].param+": "+t[a].Params[o].childParam;n+="</li>"}return e.innerHTML=n,e})),s("tab3","Contact Us",a);document.querySelector("#tab1").checked=!0;const u=a();r.append(u)}]);