(()=>{"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=Statamic.$bard.tiptap.commands.toggleBlockType,e=function(){function e(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,a,o;return r=e,(a=[{key:"name",value:function(){return"paragraph"}},{key:"schema",value:function(){return{attrs:{class:{default:null}},content:"inline*",group:"block",draggable:!1,parseDOM:[{tag:"p",getAttrs:function(t){return{class:t.getAttribute("class")}}}],toDOM:function(t){return["p",t.attrs,0]}}}},{key:"commands",value:function(t){var e=t.type,r=t.schema;return function(t){return n(e,r.nodes.paragraph,t)}}},{key:"pasteRules",value:function(){return[]}},{key:"plugins",value:function(){return[]}}])&&t(r.prototype,a),o&&t(r,o),e}();function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}Statamic.booting((function(){var t=Statamic.$config.get("bard-paragraph-style.styles")||[];Statamic.$bard.extend((function(t){return(0,t.node)(new e)})),Statamic.$bard.buttons((function(n){var e=_.findLastIndex(n,{command:"heading"});n.splice.apply(n,[e+1,0].concat(r(t.map((function(t){return{text:t.buttonText,command:"paragraph",args:{class:t.class},html:'<span><span style="font-size: 21px; font-family: Times, serif;">P</span><sup>'.concat(t.buttonIdent,"</sup></span>")}})))))}));var n=t.map((function(t){return".bard-fieldtype .ProseMirror p.".concat(t.class," { ").concat(t.css," }")})).join(" "),a=document.createElement("style");a.appendChild(document.createTextNode(n)),document.head.appendChild(a)}))})();