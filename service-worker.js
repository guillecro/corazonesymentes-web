!function(e){var n={};function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=0)}([function(e,n,c){"use strict";c.r(n);const t=["/client/0922610edde1e65085602e593cce7768.png","/client/27304813d592a32e5e0bbd8e8dcd461c.png","/client/2bfbe74e5d4aa577af247fa3fb30303e.png","/client/33d63ae0742f5f5f5910b25195db3283.png","/client/5f19ab42ba64a4b6cf8b49a3e7b6eb77.png","/client/83abb1550cce1372bcf411e29a44f5a3.png","/client/8ccb6b7f3e99769ca590a2223bb11a22.png","/client/9cc45f7fcc0d273716d1f3d5cf854409.png","/client/a4f33be19b52d026618acc5902a7aa02.png","/client/c3b7e608d5303b519bb786883eb8b92e.png","/client/cb942ff6fc6198a9189d2de8181522c8.png","/client/da4a6134160b7e044a11139c3f3ee972.png","/client/db60fe9985dc66063d7fc91e75e6c74a.png","/client/ec1fc6cface5bb371ec8/index.0.js","/client/ec1fc6cface5bb371ec8/main.js","/client/ec1fc6cface5bb371ec8/vendors~index.2.js"].concat(["/service-worker-index.html","/.DS_Store","/background-tech.png","/developers.png","/developers2.png","/dialog.png","/excl_globo.png","/favicon.png","/global.css","/icons/.DS_Store","/icons/app.png","/icons/article-icon.png","/icons/download.png","/icons/icon-document.png","/icons/podcast-icon.png","/icons/puzzle.png","/icons/video-icon.png","/ideas.png","/index.css","/logo-circular.png","/logo-horizontal.png","/manifest.json","/tailwind.css"]),a=new Set(t);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1615994226812").then(e=>e.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1615994226812"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url),c=n.protocol.startsWith("http"),t=n.hostname===self.location.hostname&&n.port!==self.location.port,o=n.host===self.location.host&&a.has(n.pathname),i="only-if-cached"===e.request.cache&&!o;!c||t||i||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const n=await caches.open("offline1615994226812");try{const c=await fetch(e);return n.put(e,c.clone()),c}catch(c){const t=await n.match(e);if(t)return t;throw c}}(e.request))())})}]);