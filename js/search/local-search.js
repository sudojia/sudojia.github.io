"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function asyncGeneratorStep(e,t,r,n,a,o,c){try{var i=e[o](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,a)}function _asyncToGenerator(i){return function(){var e=this,c=arguments;return new Promise(function(t,r){var n=i.apply(e,c);function a(e){asyncGeneratorStep(n,t,r,a,o,"next",e)}function o(e){asyncGeneratorStep(n,t,r,a,o,"throw",e)}a(void 0)})}}window.addEventListener("load",function(){function e(){var e=document.body.style;e.width="100%",e.overflow="hidden",btf.animateIn(document.getElementById("search-mask"),"to_show 0.5s"),btf.animateIn(document.querySelector("#local-search .search-dialog"),"titleScale 0.5s"),setTimeout(function(){document.querySelector("#local-search-input input").focus()},100),r||(function(){a.apply(this,arguments)}(GLOBAL_CONFIG.localSearch.path),r=!0),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(n(),document.removeEventListener("keydown",e))})}function t(){document.querySelector("#search-button > .search").addEventListener("click",e),document.getElementById("search-mask").addEventListener("click",n),document.querySelector("#local-search .search-close-button").addEventListener("click",n)}var r=!1,n=function(){var e=document.body.style;e.width="",e.overflow="",btf.animateOut(document.querySelector("#local-search .search-dialog"),"search_close .5s"),btf.animateOut(document.getElementById("search-mask"),"to_hide 0.5s")};function a(){return(a=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,a,o,c,i,s,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],n=t.split(".")[1],e.next=4,fetch(GLOBAL_CONFIG.root+t);case 4:if(a=e.sent,"json"===n)return e.next=8,a.json();e.next=11;break;case 8:r=e.sent,e.next=22;break;case 11:if("xml"===n)return e.next=14,a.text();e.next=22;break;case 14:return o=e.sent,e.next=17,(new window.DOMParser).parseFromString(o,"text/xml");case 17:return c=e.sent,e.next=20,c;case 20:c=e.sent,r=_toConsumableArray(c.querySelectorAll("entry")).map(function(e){return{title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}});case 22:a.ok&&((i=document.getElementById("loading-database")).nextElementSibling.style.display="block",i.remove()),i=document.querySelector("#local-search-input input"),s=document.getElementById("local-search-results"),l=document.getElementById("loading-status"),i.addEventListener("input",function(){var d=this.value.trim().toLowerCase().split(/[\s]+/);""!==d[0]&&(l.innerHTML='<i class="fas fa-spinner fa-pulse"></i>'),s.innerHTML="";var y,m='<div class="search-result-list">';this.value.trim().length<=0||(y=0,r.forEach(function(e){var r=!0;e.title&&""!==e.title.trim()||(e.title="");var n,t,a,o,c=e.title.trim().toLowerCase(),i=e.content?e.content.trim().replace(/<[^>]+>/g,"").toLowerCase():"",s=e.url.startsWith("/")?e.url:GLOBAL_CONFIG.root+e.url,l=-1,u=-1;""!==c||""!==i?d.forEach(function(e,t){n=c.indexOf(e),l=i.indexOf(e),n<0&&l<0?r=!1:(l<0&&(l=0),0===t&&(u=l))}):r=!1,r&&(t=e.content.trim().replace(/<[^>]+>/g,""),0<=u&&(a=u+100,(e=u-30)<0&&(e=0),0===e&&(a=100),a>t.length&&(a=t.length),o=t.substring(e,a),d.forEach(function(e){var t=new RegExp(e,"gi");o=o.replace(t,'<span class="search-keyword">'+e+"</span>"),c=c.replace(t,'<span class="search-keyword">'+e+"</span>")}),m+='<div class="local-search__hit-item"><a href="'+s+'" class="search-result-title">'+c+"</a>",y+=1,""!==i&&(m+='<p class="search-result">'+o+"...</p>")),m+="</div>")}),0===y&&(m+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),m+="</div>",s.innerHTML=m,""!==d[0]&&(l.innerHTML=""),window.pjax&&window.pjax.refresh(s))});case 27:case"end":return e.stop()}},e)}))).apply(this,arguments)}t(),window.addEventListener("pjax:complete",function(){"block"===getComputedStyle(document.querySelector("#local-search .search-dialog")).display&&n(),t()})});