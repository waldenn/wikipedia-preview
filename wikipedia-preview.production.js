!function(M,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wikipediaPreview",[],t):"object"==typeof exports?exports.wikipediaPreview=t():M.wikipediaPreview=t()}(window,(function(){return function(M){var t={};function e(i){if(t[i])return t[i].exports;var j=t[i]={i:i,l:!1,exports:{}};return M[i].call(j.exports,j,j.exports,e),j.l=!0,j.exports}return e.m=M,e.c=t,e.d=function(M,t,i){e.o(M,t)||Object.defineProperty(M,t,{enumerable:!0,get:i})},e.r=function(M){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},e.t=function(M,t){if(1&t&&(M=e(M)),8&t)return M;if(4&t&&"object"==typeof M&&M&&M.__esModule)return M;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:M}),2&t&&"string"!=typeof M)for(var j in M)e.d(i,j,function(t){return M[t]}.bind(null,j));return i},e.n=function(M){var t=M&&M.__esModule?function(){return M.default}:function(){return M};return e.d(t,"a",t),t},e.o=function(M,t){return Object.prototype.hasOwnProperty.call(M,t)},e.p="",e(e.s=8)}([function(M,t,e){var i=e(1),j=e(3);"string"==typeof(j=j.__esModule?j.default:j)&&(j=[[M.i,j,""]]);var L={insert:"head",singleton:!1},u=(i(j,L),j.locals?j.locals:{});M.exports=u},function(M,t,e){"use strict";var i,j=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},L=function(){var M={};return function(t){if(void 0===M[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(M){e=null}M[t]=e}return M[t]}}(),u=[];function n(M){for(var t=-1,e=0;e<u.length;e++)if(u[e].identifier===M){t=e;break}return t}function N(M,t){for(var e={},i=[],j=0;j<M.length;j++){var L=M[j],N=t.base?L[0]+t.base:L[0],o=e[N]||0,r="".concat(N," ").concat(o);e[N]=o+1;var g=n(r),c={css:L[1],media:L[2],sourceMap:L[3]};-1!==g?(u[g].references++,u[g].updater(c)):u.push({identifier:r,updater:D(c,t),references:1}),i.push(r)}return i}function o(M){var t=document.createElement("style"),i=M.attributes||{};if(void 0===i.nonce){var j=e.nc;j&&(i.nonce=j)}if(Object.keys(i).forEach((function(M){t.setAttribute(M,i[M])})),"function"==typeof M.insert)M.insert(t);else{var u=L(M.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(t)}return t}var r,g=(r=[],function(M,t){return r[M]=t,r.filter(Boolean).join("\n")});function c(M,t,e,i){var j=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(M.styleSheet)M.styleSheet.cssText=g(t,j);else{var L=document.createTextNode(j),u=M.childNodes;u[t]&&M.removeChild(u[t]),u.length?M.insertBefore(L,u[t]):M.appendChild(L)}}function a(M,t,e){var i=e.css,j=e.media,L=e.sourceMap;if(j?M.setAttribute("media",j):M.removeAttribute("media"),L&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(L))))," */")),M.styleSheet)M.styleSheet.cssText=i;else{for(;M.firstChild;)M.removeChild(M.firstChild);M.appendChild(document.createTextNode(i))}}var y=null,I=0;function D(M,t){var e,i,j;if(t.singleton){var L=I++;e=y||(y=o(t)),i=c.bind(null,e,L,!1),j=c.bind(null,e,L,!0)}else e=o(t),i=a.bind(null,e,t),j=function(){!function(M){if(null===M.parentNode)return!1;M.parentNode.removeChild(M)}(e)};return i(M),function(t){if(t){if(t.css===M.css&&t.media===M.media&&t.sourceMap===M.sourceMap)return;i(M=t)}else j()}}M.exports=function(M,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=j());var e=N(M=M||[],t);return function(M){if(M=M||[],"[object Array]"===Object.prototype.toString.call(M)){for(var i=0;i<e.length;i++){var j=n(e[i]);u[j].references--}for(var L=N(M,t),o=0;o<e.length;o++){var r=n(e[o]);0===u[r].references&&(u[r].updater(),u.splice(r,1))}e=L}}}},function(M,t,e){"use strict";M.exports=function(M){var t=[];return t.toString=function(){return this.map((function(t){var e=function(M,t){var e=M[1]||"",i=M[3];if(!i)return e;if(t&&"function"==typeof btoa){var j=(u=i,n=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),N="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(N," */")),L=i.sources.map((function(M){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(M," */")}));return[e].concat(L).concat([j]).join("\n")}var u,n,N;return[e].join("\n")}(t,M);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(M,e,i){"string"==typeof M&&(M=[[null,M,""]]);var j={};if(i)for(var L=0;L<this.length;L++){var u=this[L][0];null!=u&&(j[u]=!0)}for(var n=0;n<M.length;n++){var N=[].concat(M[n]);i&&j[N[0]]||(e&&(N[2]?N[2]="".concat(e," and ").concat(N[2]):N[2]=e),t.push(N))}},t}},function(M,t,e){(t=e(2)(!1)).push([M.i,".wp-popup {\n  box-sizing: border-box;\n  padding: 0;\n  border-radius: 8px 8px 0 0;\n  background-color: #fff;\n  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(0, 0, 0, 0.05);\n  z-index: 110;\n  overflow: hidden;\n  position: absolute;\n}\n.wp-touch-popup {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  padding: 0;\n  border-radius: 8px 8px 0 0;\n  background-color: #fff;\n  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(0, 0, 0, 0.05);\n  z-index: 110;\n  overflow: hidden;\n}\n.wp-dark-screen {\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 100;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n",""]),M.exports=t},function(M,t,e){var i=e(1),j=e(5);"string"==typeof(j=j.__esModule?j.default:j)&&(j=[[M.i,j,""]]);var L={insert:"head",singleton:!1},u=(i(j,L),j.locals?j.locals:{});M.exports=u},function(M,t,e){(t=e(2)(!1)).push([M.i,".wikipediapreviews {\n  display: flex;\n  flex-direction: column;\n  width: 350px;\n}\n.wikipediapreviews * {\n  padding: 0;\n  box-sizing: border-box;\n}\n.wikipediapreviews-header {\n  display: flex;\n  height: 62px;\n  line-height: 62px;\n}\n.wikipediapreviews-header-image {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSIzOSIgdmlld0JveD0iMCAwIDYwIDM5Ij4KICAgIDxwYXRoIGZpbGw9IiMyMDIxMjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTU5LjggMS4yNjZjLS4xMzQuMTc5LS4yOC4yNjgtLjQ0LjI2OC0xLjMxOC4xMjUtMi4zOTUuNTUtMy4yMzIgMS4yNzItLjgzNy43MjMtMS43IDIuMTAyLTIuNTkgNC4xMzhMMzkuOTIgMzcuNzE0Yy0uMDkuMjg2LS4zMzguNDMtLjc0OC40My0uMzIgMC0uNTctLjE0NC0uNzQ3LS40M0wzMC43ODggMjEuN2wtOC43ODUgMTYuMDE1Yy0uMTc4LjI4NS0uNDI4LjQyOC0uNzQ4LjQyOC0uMzkyIDAtLjY1LS4xNDMtLjc3NC0uNDI4TDcuMTAzIDYuOTQ0Yy0uODM3LTEuOTEtMS43MTgtMy4yNDUtMi42NDQtNC4wMDQtLjkyNS0uNzU5LTIuMjE2LTEuMjI3LTMuODcyLTEuNDA2LS4xNDIgMC0uMjc1LS4wNzYtLjQtLjIyOEMuMDYyIDEuMTU1IDAgLjk4MSAwIC43ODRjMC0uNS4xNDItLjc1LjQyNy0uNzUgMS4xOTMgMCAyLjQzOS4wNTQgMy43MzkuMTYxIDEuMjEuMTA3IDIuMzUuMTYgMy40MTcuMTYgMS4wODYgMCAyLjM2OC0uMDUzIDMuODQ2LS4xNiAxLjU0OC0uMTA3IDIuOTE5LS4xNiA0LjExMi0uMTYuMjg1IDAgLjQyNy4yNS40MjcuNzVzLS4wODkuNzUtLjI2Ny43NWMtMS4xOTMuMDg4LTIuMTMyLjM5Mi0yLjgxNy45MS0uNjg2LjUxNy0xLjAyOCAxLjE5Ni0xLjAyOCAyLjAzNSAwIC40MjguMTQyLjk2NC40MjcgMS42MDdsMTEuMDU1IDI1LjA0IDYuMjc1LTExLjg5LTUuODQ4LTEyLjI5M2MtMS4wNS0yLjE5Ni0xLjkxNC0zLjYxMS0yLjU5LTQuMjQ1LS42NzctLjYzNC0xLjctMS4wMjItMy4wNy0xLjE2NS0uMTI1IDAtLjI0Ni0uMDc2LS4zNjEtLjIyOC0uMTE2LS4xNTEtLjE3NC0uMzI1LS4xNzQtLjUyMiAwLS41LjEyNS0uNzUuMzc0LS43NSAxLjE5MyAwIDIuMjg3LjA1NCAzLjI4NC4xNjEuOTYyLjEwNyAxLjk4NS4xNiAzLjA3MS4xNiAxLjA2OCAwIDIuMTk5LS4wNTMgMy4zOTEtLjE2IDEuMjI5LS4xMDcgMi40NC0uMTYgMy42MzItLjE2LjI4NSAwIC40MjcuMjUuNDI3Ljc1cy0uMDg5Ljc1LS4yNjcuNzVjLTIuMzg1LjE2LTMuNTc4LjgzOC0zLjU3OCAyLjAzNCAwIC41MzYuMjc2IDEuMzY2LjgyOCAyLjQ5MWwzLjg3MSA3Ljg3NEwzNi40NSA2LjczYy41MzQtMS4wMTguOC0xLjg3NS44LTIuNTcxIDAtMS42NDMtMS4xOTItMi41MTgtMy41NzctMi42MjUtLjIxNCAwLS4zMi0uMjUtLjMyLS43NSAwLS4xNzguMDUzLS4zNDguMTYtLjUwOS4xMDYtLjE2LjIxMy0uMjQuMzItLjI0Ljg1NCAwIDEuOTA1LjA1MyAzLjE1LjE2IDEuMTkzLjEwNyAyLjE3Mi4xNiAyLjkzOC4xNi41NTIgMCAxLjM2Mi0uMDQ0IDIuNDMtLjEzM0M0My43MDMuMDk3IDQ0LjgzMy4wMzQgNDUuNzQuMDM0Yy4yMTQgMCAuMzIuMjE1LjMyLjY0MyAwIC41NzEtLjE5NS44NTctLjU4Ny44NTctMS4zODkuMTQzLTIuNTA2LjUyNy0zLjM1MSAxLjE1Mi0uODQ2LjYyNS0xLjkgMi4wNDQtMy4xNjQgNC4yNThsLTUuMTI3IDkuNTA3IDYuOTQyIDE0LjE5NEw1MS4wMjggNi43M2MuMzU2LS44NzUuNTM0LTEuNjc5LjUzNC0yLjQxIDAtMS43NS0xLjE5My0yLjY3OS0zLjU3OC0yLjc4Ni0uMjE0IDAtLjMyLS4yNS0uMzItLjc1cy4xNi0uNzUuNDgtLjc1Yy44NzIgMCAxLjkwNS4wNTQgMy4wOTguMTYxIDEuMTAzLjEwNyAyLjAyOS4xNiAyLjc3Ny4xNi43ODMgMCAxLjY5LS4wNTMgMi43MjMtLjE2IDEuMDY4LS4xMDcgMi4wMy0uMTYgMi44ODQtLjE2LjI1IDAgLjM3NC4yMTQuMzc0LjY0MiAwIC4yMTQtLjA2Ny40MS0uMi41OXoiLz4KPC9zdmc+Cg==\");\n  background-size: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 65px;\n}\n.wikipediapreviews-header-wordmark {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzgiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxMzggMjEiPgogICAgPGcgZmlsbD0iIzcyNzc3RCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjQ3NSA0LjU0MnMtLjQyNi0uODctLjU3MS0xLjE2Yy0uOTY3LTEuOTI3LS45NDYtMi4wMy0xLjkyNC0yLjE2LS4yNzQtLjAzNy0uNDE1LS4wNzItLjQxNS0uMjA4di0uNjFsLjA4Mi0uMDZjMS43NjYtLjAwMiA1LjY5Ny0uMDAyIDUuNjk3LS4wMDJsLjE1LjA1VjFjMCAuMTM5LS4wOTguMjEtLjI5OS4yMWwtLjQxMy4wNmMtMS4wNDMuMDgxLS44NzMuNTEtLjE4IDEuOWw2LjU4NCAxMy41NS4yMjUuMDYzIDUuODQ1LTEzLjk1NWMuMjAzLS41NjIuMTcxLS45NjEtLjA5LTEuMTk2LS4yNjItLjIyNy0uNDQ2LS4zNjQtMS4xMjMtLjM5MmwtLjU0OS0uMDI3Yy0uMDY3IDAtLjEzMS0uMDI0LS4xOTItLjA3LS4wNi0uMDQ0LS4wOTItLjEwMS0uMDkyLS4xN1YuMzkybC4wODMtLjA2aDYuNjA0bC4wNjcuMDZ2LjU4MWMwIC4xNTgtLjA5LjIzNy0uMjY2LjIzNy0uODY1LjAzOC0xLjUwNi4yMjctMS45MjEuNTY1LS40MTcuMzM5LS43NDEuODA2LS45NzQgMS40MTUgMCAwLTUuMzc1IDEyLjM3Ni03LjIxNSAxNi40OS0uNzA0IDEuMzUtMS4zOTYgMS4yMjYtMi4wMDUtLjAzOC0xLjI4Ni0yLjY2NS00LjkwNy0xMC43NDgtNC45MDctMTAuNzQ4bC0yLjIwMS00LjM1MnoiLz4KICAgICAgICA8cGF0aCBkPSJNMjMuMDIzLjMzNXMtMy43MTUtLjAxMi01LjM2OCAwbC0uMDgzLjA2di41NzhjMCAuMDcxLjAzLjEyNy4wOS4xNy4wNjIuMDQ2LjEyNS4wNy4xOTIuMDdsLjI2Ni4wMjhjLjY3Ni4wMjcuOTg3LjIwNyAxLjA4LjMxOC4xNi4xOTguMjQuNDEzLS4xNSAxLjI3bC02LjkzNSAxMy45MTYtLjE4Mi0uMDQ4UzYuOTY2IDYuMTYxIDUuNTI4IDIuNjM2Yy0uMTUtLjM2NS0uMjE3LS42MzYtLjIxNy0uODAzIDAtLjM1OC4zMjEtLjU1Mi45NjQtLjU3OWwuNzUtLjAzMWMuMTk3IDAgLjI5OC0uMDc3LjI5OC0uMjM3Vi40MDdsLS4wNjctLjA2UzEuMzA2LjM0Mi4wNzguMzQ4TC4wMS40MDh2LjYwOGMwIC4xMS4xMzguMTc3LjQxNi4yMDguNzU1LjA0IDEuMjUuMTYyIDEuNDkuMzY0LjIzNy4yMDQuNDkuNzIuODIzIDEuNTIzIDEuODA2IDQuMzY0IDUuNjQyIDEyLjE1IDcuNTEgMTYuNTg1LjUzOCAxLjIxIDEuMjE0IDEuMzk4IDIuMDM1LS4wMzggMS40MjItMi42NTIgNS4yNzctMTAuNzU0IDUuMjc3LTEwLjc1NGwzLjAzNi01LjcxMmMuMzUzLS42MDQuNjk0LTEuMTQyLjg2Ny0xLjM5Mi4zMTctLjQ1OC40OTQtLjU0NSAxLjM2LS41ODYuMTc2IDAgLjI2NS0uMDc5LjI2NS0uMjM5Vi4zOTVsLS4wNjYtLjA2ek0zNC4zMTcgMTguMzk4YzAgLjY2OC4zMDEgMS4wNjIgMS4yNjYgMS4xNTNsLjYzMy4wNjJjLjA5IDAgLjE4MS4wNi4xODEuMTh2LjYzOGwtLjAzLjA2MXMtMi4yOTEtLjA2MS0zLjIyNi0uMDYxYy0uODQ0IDAtMy4xOTYuMDYxLTMuMTk2LjA2MWwtLjA2LS4wNjF2LS42MzdjMC0uMTIyLjA5LS4xODEuMjEtLjE4MWwuNjA0LS4wNjJjLjk5NS0uMDkxIDEuMjk2LS41NzYgMS4yOTYtMS4xNTN2LTEwLjFjMC0uNjY2LS4zNjMtLjg1MS0xLjI5Ni0uOTRsLS42MDMtLjA2M2MtLjEyMSAwLS4yMTEtLjAyOC0uMjExLS4xMjF2LS42OTlsLjAzLS4wNnMyLjM4Mi4wNiAzLjMxNi4wNmMuODE0IDAgMy4xMzYtLjA2IDMuMTM2LS4wNmwuMDMuMDZ2LjY2N2MwIC4wOTEtLjA2LjE1Mi0uMTguMTUybC0uNjM0LjA2MmMtLjkzNS4wOS0xLjI2Ni4zMzMtMS4yNjYuOTQxdjEwLjEwMXpNNDMuMjE1IDE4LjM5OGMwIC42NjguMzkyIDEuMDAxIDEuMjY2IDEuMTUzbC4zMzIuMDYyYy4wOS4wMjkuMTguMDYuMTguMTh2LjYzOGwtLjAzLjA2MXMtMS44OTktLjA2MS0yLjgwMy0uMDYxYy0uODQ1IDAtMy4zMTcuMDYxLTMuMzE3LjA2MWwtLjA2LS4wNjF2LS42MzdjMC0uMTIyLjA5LS4xODEuMjEtLjE4MWwuNjA0LS4wNjJjLjkwNC0uMDkxIDEuMjk2LS41NzYgMS4yOTYtMS4xNTN2LTEwLjFjMC0uNjY2LS4zMzEtLjg1MS0xLjI5Ni0uOTRsLS42MDMtLjA2M2MtLjEyIDAtLjIxMS0uMDI4LS4yMTEtLjEyMXYtLjY5OWwuMDMtLjA2czIuNDcyLjA2IDMuNDA3LjA2Yy44NDUgMCAyLjc0NC0uMDYgMi43NDQtLjA2bC4wMy4wNnYuNjY3YzAgLjA5MS0uMDYuMTIyLS4xODEuMTUybC0uMzMyLjA2MmMtLjkzNC4xOC0xLjI2Ni4zMzMtMS4yNjYuOTQxdjQuNTgyYy45OTUgMCAxLjU2OC0uNTEzIDIuODk0LTEuOTQxQzQ3LjMxNSA5LjYgNDguMjUgOC40ODIgNDguMjUgNy45MDJjMC0uMjQ0LS4yNzEtLjUxNC0uODc0LS42MDgtLjEyLS4wMjgtLjE4MS0uMDYtLjE4MS0uMTUxdi0uN2wuMDMtLjAyOXMyLjQ0Mi4wNjEgMy4zMTcuMDYxYy43ODQgMCAyLjExLS4wNiAyLjExLS4wNmwuMDkuMDI3di43YzAgLjA5MS0uMDkuMTUyLS4yNC4xNTItMS4xNzYuMDkxLTEuOTkuMTUyLTMuMDc2IDEuMzk2bC0yLjU5MyAzYy0uNTEzLjU0OC0uNjkzLjg4LS42OTMgMS4xMjQgMCAuMTgyLjEyLjMzMi4yNy41MTRsNC41NTQgNS41MmMuMzYyLjQyNCAxLjA4NS42MDcgMS42ODguNzI4bC4xNTEuMDI5Yy4wOS4wMjkuMjExLjA5LjIxMS4xOHYuNjM4bC0uMDkuMDNzLTEuNTk4LS4wMy0yLjQ0My0uMDNjLS43NTMgMC0xLjgzOS4wMy0xLjgzOS4wM2wtLjAzLS4wM3YtLjM2NGMwLS4zOTYtLjAzLS43MjctLjQ1Mi0xLjIxMmwtMy4zNDctNC4xODhjLS40NTItLjYwNy0uOTM1LS43NTctMS41OTgtLjc1N3Y0LjQ5NXpNNTkuNDcgMTguMzk4YzAgLjY2OC4zMDEgMS4wNjIgMS4yNjYgMS4xNTNsLjYzMy4wNjJjLjA5IDAgLjE4MS4wNi4xODEuMTh2LjYzOGwtLjAzLjA2MXMtMi4yOTEtLjA2MS0zLjIyNi0uMDYxYy0uODQ0IDAtMy4xOTYuMDYxLTMuMTk2LjA2MWwtLjA2LS4wNjF2LS42MzdjMC0uMTIyLjA5LS4xODEuMjEtLjE4MWwuNjA0LS4wNjJjLjk5NS0uMDkxIDEuMjk2LS41NzYgMS4yOTYtMS4xNTN2LTEwLjFjMC0uNjY2LS4zNjItLjg1MS0xLjI5Ni0uOTRsLS42MDMtLjA2M2MtLjEyIDAtLjIxMS0uMDI4LS4yMTEtLjEyMXYtLjY5OWwuMDMtLjA2czIuMzgyLjA2IDMuMzE2LjA2Yy44MTUgMCAzLjEzNi0uMDYgMy4xMzYtLjA2bC4wMy4wNnYuNjY3YzAgLjA5MS0uMDYuMTUyLS4xOC4xNTJsLS42MzQuMDYyYy0uOTM0LjA5LTEuMjY2LjMzMy0xLjI2Ni45NDF2MTAuMTAxek02NS45ODUgOC4zNTdjMC0uOTQtLjM5Mi0uOTctMS44MS0xLjA2Mi0uMTggMC0uMjEtLjA5LS4yMS0uMTUxdi0uNjk4bC4wNi0uMDNjLjQ1MiAwIDIuMjMxLjA2IDMuMTA2LjA2Ljg0NCAwIDIuMDUtLjA2IDMuMTY2LS4wNiA0LjI3OSAwIDUuMDYzIDIuMTIyIDUuMDYzIDMuNzAxIDAgMS44MjEtLjg3NSA0LjY3Mi01LjE1NCA0LjY3Mi0uNzU0IDAtMS4zNTctLjA2Mi0xLjktLjMwNHY0LjA2M2MwIC42NjYuMzYxLjgyIDEuMzI3Ljk3bC42MDQuMDkxYy4xMjEuMDMuMjEzLjA2Mi4yMTMuMTgxdi42MzdsLS4wMjguMDYycy0yLjQxNC0uMDYyLTMuMzQ4LS4wNjJjLS44NDQgMC0zLjEwNi4wNjItMy4xMDYuMDYybC0uMDMtLjA2MnYtLjYzN2MwLS4xMjEuMDYtLjE1MS4xODEtLjE4bC42MzMtLjA5MmMuOTM1LS4xMjEgMS4yMzYtLjM5NCAxLjIzNi0uOTdsLS4wMDMtMTAuMTkxem0yLjMyMiA1LjI3OWMuNjAzLjI0NCAxLjM1Ni4yNzMgMS45Ni4yNzMgMS44MSAwIDIuNjgtMS4wOTQgMi42OC0zLjQyOCAwLTIuNjA4LTEuMTc1LTMuMTg1LTIuODMxLTMuMTg1LTEuNDQ5IDAtMS44MS4yNzMtMS44MSAxLjA2MnY1LjI3OHpNODAuNTUzIDIwLjQzYy0uOTA1IDAtMi45ODQuMDYzLTIuOTg0LjA2M2wtLjAzMi0uMDYydi0uNjY4YzAtLjA2LjAzMi0uMTUuMTgxLS4xNWwuNjk2LS4wNjJjLjkzNi0uMDkxIDEuMjA3LS42OTggMS4yMDctMS4zMDNWOC4yMzhjMC0uNy0uMzYxLS44Mi0xLjIwNy0uODhsLS42OTYtLjA2M2MtLjE4LS4wMjgtLjE4LS4wOS0uMTgtLjEyMXYtLjY5OWwuMDMtLjA2czIuMzUxLjA2IDMuMjU2LjA2aDQuNDMyYy45MDUgMCAzLjA0Ny0uMDYgMy4wNDctLjA2bC4wNjIuMDZjLjAyOCAxLjMwNC4yNCAyLjQ5LjQ1MiAzLjY0MWwtLjc1MS4xMjJjLS4zMy0xLjEyNC0uOTAzLTIuNzMtMi44MzMtMi43M2gtMi40MTJjLS41NzMgMC0uODc1LjIxMi0uODc1LjcyNnY0LjRoMi4yNmMuODQ2IDAgMS4wNTYtLjM2NCAxLjE3OC0uOTdsLjE4LS42MzhjMC0uMDkuMDYtLjE1My4xOC0uMTUzaC41MWMuMDYzIDAgLjA2My4wMzIuMDYzLjA5MS0uMDYyLjY2Ni0uMTggMS41MTgtLjE4IDIuMjQ2IDAgLjc1Ny4xMiAxLjM5NS4xOCAyLjA5M2wtLjA2Mi4wNjJoLS41MWMtLjE1IDAtLjIxNC0uMDYyLS4yMTQtLjE1M2wtLjE1LS42NjZjLS4xMjEtLjYwOC0uMzkzLS45NDEtMS4xOC0uOTQxaC0yLjI2djQuNjQyYzAgLjU3NC4zMjkgMS4xNS44NzUgMS4xNWgyLjg2NWMxLjUzNyAwIDIuMzg0LS45NyAyLjc0My0yLjU1bC43NTIuMDktLjYwNCAzLjQ4OC0uMDYuMDZzLTEuNzgtLjA2LTIuNjg0LS4wNmwtNS4yNzUuMDA2ek05MS44OTIgMTkuNjEzbC42OTMtLjA2MmMuOTA2LS4wOTEgMS4yMDctLjM2NCAxLjIwNy0xLjMwM1Y4LjIzOGMwLS43OTEtLjIxMy0uNzkxLTEuMjA3LS44OGwtLjY2LS4wNjNjLS4xMjEgMC0uMjE0LS4wNi0uMjE0LS4xNTF2LS42NjhsLjAyOS0uMDZzMi42NTQuMDYgMy4xOTguMDZjLjU3IDAgMy4xOTYtLjA2IDMuOTgtLjA2IDUuMDM1IDAgNy41MDkgMy4xNTQgNy41MDkgNy4xODggMCA1LjMxLTMuNzQgNi44ODUtNy4wODQgNi44ODUtMi40MTIgMC0zLjQ2Ny0uMDYyLTQuNDAxLS4wNjItLjkwNiAwLTMuMTk5LjA2Mi0zLjE5OS4wNjJsLS4wMjktLjA2MnYtLjYzN2MtLjAwMy0uMDg2LjA1OC0uMTc3LjE3OC0uMTc3em02LjcyNSAwYzMuMzE1IDAgNS4xODctMS4yNDEgNS4xODctNS40OTIgMC0zLjE1My0uNjk1LTYuODI2LTUuNzYtNi44MjYtMS4xNzYgMC0xLjkzLjE4Mi0xLjkzLjk0M3YxMC4wMWMwIC44NDcuMjEgMS4zNjUgMi41MDMgMS4zNjV6TTExMy41NDUgMTguMzk4YzAgLjY2OC4zMDIgMS4wNjIgMS4yNjYgMS4xNTNsLjYzNC4wNjJjLjA5IDAgLjE4LjA2LjE4LjE4di42MzhsLS4wMy4wNjFzLTIuMjkxLS4wNjEtMy4yMjUtLjA2MWMtLjg0NSAwLTMuMTk2LjA2MS0zLjE5Ni4wNjFsLS4wNjEtLjA2MXYtLjYzN2MwLS4xMjIuMDktLjE4MS4yMS0uMTgxbC42MDUtLjA2MmMuOTk0LS4wOTEgMS4yOTctLjU3NiAxLjI5Ny0xLjE1M3YtMTAuMWMwLS42NjYtLjM2My0uODUxLTEuMjk3LS45NGwtLjYwNC0uMDYzYy0uMTIgMC0uMjExLS4wMjgtLjIxMS0uMTIxdi0uNjk5bC4wMy0uMDZzMi4zODIuMDYgMy4zMTQuMDZjLjgxMyAwIDMuMTM3LS4wNiAzLjEzNy0uMDZsLjAyOC4wNnYuNjY3YzAgLjA5MS0uMDYzLjE1Mi0uMTguMTUybC0uNjM0LjA2MmMtLjkzNi4wOS0xLjI2Ni4zMzMtMS4yNjYuOTQxbC4wMDMgMTAuMTAxek0xMjIuODM0IDE5LjU1MWwuODc0LjA2MmMuMTIgMCAuMjQyLjA5LjI0Mi4yNDF2LjU3N2wtLjA2LjA2MXMtMy4yODctLjA2MS00LjAxLS4wNjFjLS43ODYgMC0yLjcxNi4wNjEtMi43MTYuMDYxbC0uMDYxLS4wNjF2LS41NzdjMC0uMTUuMDktLjI0MS4yNDItLjI0MSAxLjMyOC0uMDkxIDIuMDgtLjMzNSAyLjkyNC0yLjI3Nmw2LjY5Mi0xNS43NzVjLjMzLS43ODkuNTczLTEuMDkzIDEuMDI4LTEuMDkzLjQyIDAgLjU3MS4zMDQuODExLjkxMWw2LjE4MSAxNi40NGMuNDI0IDEuMTg1IDEuMDI4IDEuNjM5IDIuMjM0IDEuNzZsLjMzLjAzYy4xNTIgMCAuMzAzLjA5LjMwMy4yNDN2LjU3NGwtLjA5LjA2MnMtMi4zMjItLjA2Mi0zLjUtLjA2MmMtMS4wNTQgMC00LjAxLjA2Mi00LjAxLjA2MmwtLjAyOC0uMDYydi0uNTc0YzAtLjE1NC4wNi0uMjQ0LjIxNC0uMjQ0bC44NDUtLjA2MmMxLjE0NC0uMDkgMS41NjktLjQ1NiAxLjI2Ni0xLjMwM2wtMS44NC01LjEyOGgtNi4yNzNjLS43MjQgMC0uOTA1LjEyMS0xLjA1NC41MTNsLTEuNzUgNC40Yy0uMzAyLjc2Mi4wOSAxLjQzMSAxLjIwNiAxLjUyMnptNy4zODctNy43MDdsLTIuOTI1LTguMDk4aC0uMDZsLTMuMDE1IDcuNzA1Yy0uMTIuMzA2LjA5LjM5NC43NTIuMzk0aDUuMjQ4di0uMDAxeiIvPgogICAgPC9nPgo8L3N2Zz4K\");\n  background-repeat: no-repeat;\n  background-color: #eaf3ff;\n  background-position: left;\n  background-position-x: 11px;\n  height: 100%;\n  flex-grow: 1;\n  font-size: 24px;\n  padding-left: 13px;\n  color: #72777d;\n  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;\n}\n.wikipediapreviews-header-closebtn {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzU0NTk1RCIgZD0iTTEuMzYzIDBMMTUgMTMuNjM3IDEzLjYzNyAxNSAwIDEuMzYzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA1KSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Mjc3N0QiIGQ9Ik0xNSAxLjM2M0wxLjM2MyAxNSAwIDEzLjYzNyAxMy42MzcgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUgNSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==\");\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  background-color: #eaf3ff;\n  height: 100%;\n  text-align: center;\n  width: 50px;\n  color: #72777d;\n  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;\n}\n.wikipediapreviews-body {\n  background-color: #fff;\n  max-height: 248px;\n  overflow: hidden;\n  padding: 10px 20px;\n}\n.wikipediapreviews-body :after {\n  content: ' ';\n  position: absolute;\n  width: 100%;\n  bottom: 35px;\n  left: 0;\n  right: 200px;\n  top: 280px;\n  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #fff 100%);\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #fff 100%);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #fff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffff', GradientType=0);\n}\n.wikipediapreviews-body p {\n  font-family: 'Lato', sans-serif;\n  margin: 0;\n  padding: 0;\n  color: #202122;\n  line-height: 1.6;\n  font-size: 18px;\n}\n.wikipediapreviews-footer-cta {\n  width: 100%;\n  height: 50px;\n  text-decoration: none;\n  text-align: center;\n  padding: 16px;\n  font-size: 18px;\n  color: #36c;\n}\n.wikipediapreviews-footer-cta-readmore {\n  cursor: pointer;\n  display: block;\n}\n.wikipediapreviews-footer-cta-readonwiki {\n  display: none;\n}\n.wikipediapreviews-footer-cc {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19hIiBkPSJNMCAwTDExLjg1MSAwIDExLjg1MSAxMi4yNjcgMCAxMi4yNjd6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMSkiPgogICAgICAgIDxtYXNrIGlkPSJwcmVmaXhfX2IiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwcmVmaXhfX2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBhdGggZmlsbD0iIzcyNzc3RCIgZD0iTTUuOTI2IDExLjA0Yy0yLjYxOCAwLTQuNzQtMi4xOTYtNC43NC00LjkwNiAwLTIuNzEgMi4xMjItNC45MDcgNC43NC00LjkwNyAyLjYxOCAwIDQuNzQgMi4xOTcgNC43NCA0LjkwN3MtMi4xMjIgNC45MDctNC43NCA0LjkwN3ptMC0xMS4wNGMtMS41NzUtLjAxLTMuMDg4LjYzMy00LjIgMS43ODZDLjYxMSAyLjkzOC0uMDEgNC41MDQgMCA2LjEzNGMtLjAxIDEuNjMuNjEyIDMuMTk1IDEuNzI1IDQuMzQ4IDEuMTEzIDEuMTUyIDIuNjI2IDEuNzk1IDQuMiAxLjc4NSAxLjU3NS4wMSAzLjA4OC0uNjMzIDQuMjAxLTEuNzg1IDEuMTEzLTEuMTUzIDEuNzM1LTIuNzE5IDEuNzI1LTQuMzQ4LjAxLTEuNjMtLjYxMi0zLjE5Ni0xLjcyNS00LjM0OEM5LjAxMy42MzMgNy41LS4wMSA1LjkyNiAweiIgbWFzaz0idXJsKCNwcmVmaXhfX2IpIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzcyNzc3RCIgZD0iTTguMDA3IDcuMTk2Yy0uNjA2IDAtLjg2Ny0uMzc4LS44NjctMS4xMzQgMC0uNzU2LjI2LTEuMTM0Ljg2Ny0xLjEzNC4zNDYgMCAuNTIyLjE5Mi42OTIuNTdsLjc4Mi0uNDdjLS4zMzMtLjY0LS45OC0xLjAwNC0xLjY1LS45My0uNDg1LS4wMTMtLjk1NS4xOTQtMS4yOTcuNTcxLS4zNi4zNjQtLjU1Ljg4NS0uNTIyIDEuNDItLjAzMS41NjQuMTU4IDEuMTE2LjUyMiAxLjUxOC4zNDIuMzc4LjgxMi41ODQgMS4yOTcuNTcuNjc1LS4wMTUgMS4yOTYtLjQwOCAxLjY0NC0xLjA0bC0uNzc2LS4zODVjLS4xNDcuMjctLjQwNS40NDYtLjY5Mi40N3YtLjAyNnptLTMuNjM4IDBjLS42MDcgMC0uODY3LS4zNzgtLjg2Ny0xLjEzNCAwLS43NTYuMjYtMS4xMzQuODY3LTEuMTM0LjM0NSAwIC41MjEuMTkyLjY5MS41N2wuNzgyLS40N2MtLjMzMy0uNjQtLjk4LTEuMDA0LTEuNjUtLjkzLS40ODUtLjAxMy0uOTU1LjE5NC0xLjI5Ny41NzEtLjM1OS4zNjQtLjU1Ljg4NS0uNTIxIDEuNDItLjAzMi41NjQuMTU4IDEuMTE2LjUyMSAxLjUxOC4zNDIuMzc4LjgxMi41ODQgMS4yOTguNTcuNjc1LS4wMTUgMS4yOTUtLjQwOCAxLjY0My0xLjA0bC0uNzc2LS4zODVjLS4xNDcuMjctLjQwNS40NDYtLjY5MS40N3YtLjAyNnoiIG1hc2s9InVybCgjcHJlZml4X19iKSIvPgogICAgPC9nPgo8L3N2Zz4K\");\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: 0;\n  right: 30px;\n  padding-bottom: 10px;\n  width: 15px;\n  height: 30px;\n}\n.wikipediapreviews-footer-author {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMSkiPgogICAgICAgIDxlbGxpcHNlIGN4PSI1LjkyNiIgY3k9IjYuMTM0IiByeD0iNS4xMzYiIHJ5PSI1LjMxNiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Mjc3N0QiIGQ9Ik01LjkxNSAwYzEuNjY0IDAgMy4wNjguNTkxIDQuMjExIDEuNzc0IDEuMTUgMS4xOSAxLjcyNSAyLjY0NCAxLjcyNSA0LjM2IDAgMS43MjMtLjU2NCAzLjE1OC0xLjY5MyA0LjMwNC0xLjIgMS4yMi0yLjYxNCAxLjgzLTQuMjQzIDEuODMtMS42MDIgMC0yLjk5MS0uNjAzLTQuMTY5LTEuODA4Qy41ODIgOS4yNTUgMCA3LjgxMyAwIDYuMTM0IDAgNC40NTQuNTgyIDMgMS43NDYgMS43NzQgMi44ODkuNTkyIDQuMjc4IDAgNS45MTUgMHptLjAyMSAxLjEwNmMtMS4zNDcgMC0yLjQ4Ni40OS0zLjQxOCAxLjQ2OC0uOTY2IDEuMDIyLTEuNDUgMi4yMS0xLjQ1IDMuNTYgMCAxLjM1OC40OCAyLjUzNCAxLjQ0IDMuNTI2Ljk1OS45OTQgMi4xMDIgMS40OSAzLjQyOCAxLjQ5IDEuMzE5IDAgMi40NjktLjUgMy40NS0xLjUuOTMtLjkyOCAxLjM5Ni0yLjEgMS4zOTYtMy41MTYgMC0xLjM5NS0uNDczLTIuNTgxLTEuNDE4LTMuNTYtLjk0NS0uOTc4LTIuMDg4LTEuNDY4LTMuNDI4LTEuNDY4em0xLjU4NyAzLjUwNVY3LjEyaC0uNjc3djIuOThoLTEuODR2LTIuOThoLS42NzhWNC42MTJjMC0uMTEuMDM3LS4yMDIuMTExLS4yOC4wNzQtLjA3Ni4xNjQtLjExNC4yNy0uMTE0aDIuNDM0Yy4wOTggMCAuMTg3LjAzOC4yNjQuMTE1LjA3Ny4wNzcuMTE2LjE3LjExNi4yOHpNNS4xIDMuMDM0YzAtLjU3Ni4yNzUtLjg2NS44MjYtLjg2NS41NSAwIC44MjUuMjg4LjgyNS44NjUgMCAuNTctLjI3NS44NTQtLjgyNS44NTQtLjU1IDAtLjgyNi0uMjg0LS44MjYtLjg1NHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==\");\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: 0;\n  right: 14px;\n  padding-bottom: 10px;\n  width: 15px;\n  height: 30px;\n}\n.wikipediapreviews.expanded .wikipediapreviews-body {\n  max-height: 496px;\n  overflow: hidden;\n}\n.wikipediapreviews.expanded .wikipediapreviews-body :after {\n  content: unset;\n}\n.wikipediapreviews.expanded .wikipediapreviews-footer-cta-readmore {\n  display: none;\n}\n.wikipediapreviews.expanded .wikipediapreviews-footer-cta-readonwiki {\n  display: block;\n}\n.wikipediapreviews.mobile {\n  width: 100%;\n}\n.wikipediapreviews.mobile.expanded .wikipediapreviews-body {\n  max-height: calc(70vh);\n  overflow: scroll;\n}\n",""]),M.exports=t},,,function(M,t,e){"use strict";e.r(t);var i,j,L,u=function(M,t){var e=new XMLHttpRequest;e.open("GET",M),e.send(),e.addEventListener("load",(function(){t(JSON.parse(e.responseText))})),e.addEventListener("error",(function(){t(null,e.status)}))},n={},N=function(M,t,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u;void 0===n[M]?i(M,(function(i){i&&e(n[M]=t(i))})):e(n[M])},o="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,r=(e(0),function(M,t,e,i,j,L){var u,n="",N="";return u=M.x>j/2?e+M.right-t:e+M.left,M.y>L/2?N=L-M.top-i:n=i+M.bottom,{left:u,right:"",top:n,bottom:N}}),g=function(M){return M?M+"px":M},c=function(M){var t=M.createElement("div");t.classList.add("wp-dark-screen"),M.body.appendChild(t),L=M.body.style.overflow,M.body.style.overflow="hidden"},a=function(M){var t=M.getElementsByClassName("wp-dark-screen");M.body.removeChild(t[0]),M.body.style.overflow=L};e(4);function y(M){var t=M.root,e=void 0===t?document:t,L=M.selector,u=void 0===L?"[data-wikipedia-preview]":L,n=M.lang,y=void 0===n?"en":n,I=M.detectLinks,D=void 0!==I&&I,d=M.popupContainer,A=void 0===d?document.body:d,S=y,x=o?function(M){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;j||((j=t.document.createElement("div")).setAttribute("dir","ltr"),j.classList.add("wp-touch-popup"),j.style.visibility="hidden",M.appendChild(j));var e={},i=function(M){j.innerHTML=M,j.style.visibility="visible",c(t.document),e.onShow&&e.onShow(j)},L=function(){e.onHide&&e.onHide(j),j.style.visibility="hidden",a(t.document)},u=function(){var M=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};M.onShow&&(e.onShow=M.onShow),M.onHide&&(e.onHide=M.onHide)};return{show:i,hide:L,subscribe:u,element:j}}(A):function(M){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;i||((i=t.document.createElement("div")).setAttribute("dir","ltr"),i.classList.add("wp-popup"),i.style.visibility="hidden",M.appendChild(i));var e={},j=function(){e.onHide&&e.onHide(i),i.style.visibility="hidden",i.currentTargetElement=null},L=function(M,j){i.innerHTML=M;var L=void 0!==t.pageXOffset?t.pageXOffset:(t.document.documentElement||t.document.body.parentNode||t.document.body).scrollLeft,u=void 0!==t.pageYOffset?t.pageYOffset:(t.document.documentElement||t.document.body.parentNode||t.document.body).scrollTop,n=r(j.getBoundingClientRect(),i.offsetWidth,L,u,t.innerWidth,t.innerHeight);i.style.left=g(n.left),i.style.right=g(n.right),i.style.top=g(n.top),i.style.bottom=g(n.bottom),i.currentTargetElement=j,i.style.visibility="visible",e.onShow&&e.onShow(i)},u=function(){var M=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};M.onShow&&(e.onShow=M.onShow),M.onHide&&(e.onHide=M.onHide)};return{show:L,hide:j,subscribe:u,element:i}}(A),w=function(M){var t=function(t){var e=t.toElement||t.relatedTarget||t.target;e===M.element.currentTargetElement||M.element.contains(e)||M.hide()},e=function(){M.element.component.wikipediapreviews.classList.add("expanded")},i=function(t){var e=t.target;M.element.contains(e)||M.hide()};return{onHide:function(j){j.component.closeBtn.removeEventListener("click",M.hide),j.component.readMore.removeEventListener("click",e),o?document.removeEventListener("touchstart",i,!0):(j.removeEventListener("mouseleave",t),j.currentTargetElement.removeEventListener("mouseleave",t))},onShow:function(j){j.component={wikipediapreviews:j.querySelector(".wikipediapreviews"),closeBtn:j.querySelector(".wikipediapreviews-header-closebtn"),readMore:j.querySelector(".wikipediapreviews-footer-cta-readmore"),content:j.querySelector(".wikipediapreviews-body > p")},j.component.content.getBoundingClientRect().height<248&&e(),j.component.closeBtn.addEventListener("click",M.hide),j.component.readMore.addEventListener("click",e),o?document.addEventListener("touchstart",i,!0):(j.addEventListener("mouseleave",t),j.currentTargetElement.addEventListener("mouseleave",t))},onExpand:e}}(x),T=function(M){var t=M.target,e=t.getAttribute("data-wp-title")||t.textContent,i=t.getAttribute("data-wp-lang")||S;!function(M,t,e,i){var j=arguments.length>4&&void 0!==arguments[4]?arguments[4]:N,L="https://".concat(M,".wikipedia.org/api/rest_v1/page/summary/").concat(encodeURIComponent(t));j(L,(function(M){return"standard"===M.type&&"ltr"===M.dir&&{title:M.displaytitle,extractHtml:M.extract_html,pageUrl:e?M.content_urls.mobile.page:M.content_urls.desktop.page,imgUrl:M.thumbnail?M.thumbnail.source:null}}),i)}(i,e,o,(function(M){M&&x.show(function(M,t,e){var i=t.imgUrl;return'\n\t\t<div class="wikipediapreviews '.concat(e?"mobile":"",'">\n\t\t\t<div class="wikipediapreviews-header">\n\t\t\t\t<div class="wikipediapreviews-header-image" style="').concat(i&&"background-image:url('".concat(i,"');background-size:cover;"),'"></div>\n\t\t\t\t<div class="wikipediapreviews-header-wordmark"></div>\n\t\t\t\t<div class="wikipediapreviews-header-closebtn"></div>\n\t\t\t</div>\n\t\t\t<div class="wikipediapreviews-body">\n\t\t\t\t').concat(t.extractHtml,'\n\t\t\t</div>\n\t\t\t<div class="wikipediapreviews-footer">\n\t\t\t\t<span class="wikipediapreviews-footer-cta wikipediapreviews-footer-cta-readmore">Continue Reading</span>\n\t\t\t\t<a href="').concat(t.pageUrl,'" class="wikipediapreviews-footer-cta wikipediapreviews-footer-cta-readonwiki" target="_blank">Read more on Wikipedia</a>\n\t\t\t\t<div class="wikipediapreviews-footer-cc"></div>\n\t\t\t\t<div class="wikipediapreviews-footer-author"></div>\n\t\t\t</div>\n\t\t</div>\n\t').trim()}(0,M,o),t)}))};x.subscribe(w),Array.prototype.forEach.call(e.querySelectorAll(u),(function(M){o?M.addEventListener("touchend",T):M.addEventListener("mouseenter",T)})),D&&Array.prototype.forEach.call(e.querySelectorAll("a"),(function(M){var t=function(M){for(var t=[/^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/wiki\/(\w+)/,/^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/w\/index.php\?title=(\w+)/],e=0;e<t.length;e++){var i=t[e].exec(M);if(i)return{lang:i[1],mobile:!!i[2],title:i[3]}}return null}(M.getAttribute("href"));t&&(M.setAttribute("data-wp-title",t.title),M.setAttribute("data-wp-lang",t.lang),o?(M.setAttribute("href","javascript:;"),M.addEventListener("touchend",T)):M.addEventListener("mouseenter",T))}))}e.d(t,"init",(function(){return y}))}])}));