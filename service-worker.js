if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const n=e=>s(e,d),o={module:{uri:d},exports:a,require:n};i[d]=Promise.all(c.map((e=>o[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"archives/2022/07/index.html",revision:"0f07bba452370dc259333260572daf6c"},{url:"archives/2022/index.html",revision:"49bd2747a7edbe7574a78db60ba28f92"},{url:"archives/index.html",revision:"fd864612cf6029a723c0ef9742ff017c"},{url:"bangumis/index.html",revision:"56a22197d1e98ed0388a75948b45c3ae"},{url:"css/backgound.css",revision:"6c2b77454fc266e0c7a04f9b1a970251"},{url:"css/index.css",revision:"1b265c5cde1d50f6133079d26779ef9e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/ava.jpg",revision:"b8cd1895c5994a7b639d4d1ec982979a"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/soa.png",revision:"37975a3be8087f62933f7aa3e7e80d12"},{url:"index.html",revision:"46a1b24331fb898eb31b0cdd9aea6043"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"live2dw/assets/moc/nito.2048/texture_00.png",revision:"89816949aed4dc3734d894598844c34d"},{url:"live2dw/assets/moc/nito.2048/texture_01.png",revision:"90517165911a785cc29a71c66c2c5867"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"post/16107.html",revision:"bcee7605b04fe101c85c12f45f0f3526"},{url:"post/16108.html",revision:"e960350460a18eb6841de0d663557490"}],{})}));
//# sourceMappingURL=service-worker.js.map
