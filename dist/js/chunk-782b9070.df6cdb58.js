(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-782b9070"],{"0fd9":function(t,e,n){"use strict";n("a4d3"),n("99af"),n("4de4"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("2fa7"),a=(n("4b85"),n("2b0e")),i=n("d9f7"),o=n("80d2");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=["sm","md","lg","xl"],l=["start","end","center"];function f(t,e){return s.reduce((function(n,r){return n[t+Object(o["p"])(r)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},p=f("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},b=f("justify",(function(){return{type:String,default:null,validator:v}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},y=f("alignContent",(function(){return{type:String,default:null,validator:g}})),h={align:Object.keys(p),justify:Object.keys(b),alignContent:Object.keys(y)},j={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){var r=j[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var O=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:u({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},p,{justify:{type:String,default:null,validator:v}},b,{alignContent:{type:String,default:null,validator:g}},y),render:function(t,e){var n=e.props,a=e.data,o=e.children,c="";for(var u in n)c+=String(n[u]);var s=O.get(c);return s||function(){var t,e;for(e in s=[],h)h[e].forEach((function(t){var r=n[t],a=m(e,t,r);a&&s.push(a)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),O.set(c,s)}(),t(n.tag,Object(i["a"])(a,{staticClass:"row",class:s}),o)}})},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a,!0)},"62ad":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var r=n("2fa7"),a=(n("4b85"),n("2b0e")),i=n("d9f7"),o=n("80d2");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=["sm","md","lg","xl"],l=function(){return s.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),f=function(){return s.reduce((function(t,e){return t["offset"+Object(o["p"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return s.reduce((function(t,e){return t["order"+Object(o["p"])(e)]={type:[String,Number],default:null},t}),{})}(),p={col:Object.keys(l),offset:Object.keys(f),order:Object.keys(d)};function v(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var b=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:u({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},f,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},justifySelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,o=e.children,c=(e.parent,"");for(var u in n)c+=String(n[u]);var s=b.get(c);return s||function(){var t,e;for(e in s=[],p)p[e].forEach((function(t){var r=n[t],a=v(e,t,r);a&&s.push(a)}));var a=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!a||!n.cols},Object(r["a"])(t,"col-".concat(n.cols),n.cols),Object(r["a"])(t,"offset-".concat(n.offset),n.offset),Object(r["a"])(t,"order-".concat(n.order),n.order),Object(r["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),Object(r["a"])(t,"justify-self-".concat(n.justifySelf),n.justifySelf),t)),b.set(c,s)}(),t(n.tag,Object(i["a"])(a,{class:s}),o)}})},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),o=n("f8c2"),c=n("19aa"),u=n("2266"),s=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,p=n("69f3"),v=p.set,b=p.getterFor;t.exports={getConstructor:function(t,e,n,s){var l=t((function(t,r){c(t,l,e),v(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&u(r,t[s],t,n)})),p=b(e),g=function(t,e,n){var r,a,i=p(t),o=y(t,e);return o?o.value=n:(i.last=o={index:a=d(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=o),r&&(r.next=o),f?i.size++:t.size++,"F"!==a&&(i.index[a]=o)),t},y=function(t,e){var n,r=p(t),a=d(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(l.prototype,{clear:function(){var t=this,e=p(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),r=y(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=p(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),i(l.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&r(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",a=b(e),i=b(r);s(t,e,(function(t,e){v(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),o=n("6eeb"),c=n("f183"),u=n("2266"),s=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),p=n("d44e"),v=n("7156");t.exports=function(t,e,n,b,g){var y=a[t],h=y&&y.prototype,j=y,m=b?"set":"add",O={},w=function(t){var e=h[t];o(h,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof y||!(g||h.forEach&&!f((function(){(new y).entries().next()})))))j=n.getConstructor(e,t,b,m),c.REQUIRED=!0;else if(i(t,!0)){var x=new j,S=x[m](g?{}:-0,1)!=x,k=f((function(){x.has(1)})),C=d((function(t){new y(t)})),P=!g&&f((function(){var t=new y,e=5;while(e--)t[m](e,e);return!t.has(-0)}));C||(j=e((function(e,n){s(e,j,t);var r=v(new y,e,j);return void 0!=n&&u(n,r[m],r,b),r})),j.prototype=h,h.constructor=j),(k||P)&&(w("delete"),w("has"),b&&w("get")),(P||S)&&w(m),g&&h.clear&&delete h.clear}return O[t]=j,r({global:!0,forced:j!=y},O),p(j,t),g||n.setStrong(j,t,b),j}},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("h1",[t._v("This is an about page")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quasi labore deserunt doloremque odio maxime recusandae dolores possimus repudiandae ratione ea cum dolorem illum officiis reiciendis rem eligendi, assumenda atque ad, vitae! Impedit, sint, repellat. Laboriosam a perferendis magnam optio explicabo ullam tenetur recusandae, impedit fuga quia nemo itaque consectetur.")])]),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/id/11/500/300","lazy-src":"https://picsum.photos/id/11/10/6","aspect-ratio":"1","max-width":"100%","max-height":"300"}})],1)],1)],1)],1)},a=[],i=n("2877"),o=n("6544"),c=n.n(o),u=n("62ad"),s=n("a523"),l=n("adda"),f=n("0fd9"),d={},p=Object(i["a"])(d,r,a,!1,null,null,null);e["default"]=p.exports;c()(p,{VCol:u["a"],VContainer:s["a"],VImg:l["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-782b9070.df6cdb58.js.map