!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.setDOM=e()}}(function(){return function e(t,n,r){function i(d,a){if(!n[d]){if(!t[d]){var u="function"==typeof require&&require;if(!a&&u)return u(d,!0);if(o)return o(d,!0);var f=new Error("Cannot find module '"+d+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[d]={exports:{}};t[d][0].call(l.exports,function(e){var n=t[d][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[d].exports}for(var o="function"==typeof require&&require,d=0;d<r.length;d++)i(r[d]);return i}({1:[function(e,t){"use strict";function n(e,t){l(e&&e.nodeType,"You must provide a valid node to update."),e.nodeType===h&&(e=e.documentElement),"string"==typeof t&&(t=m(t,e.nodeName)),r(e,t),e[s]||(e[s]=!0,f(e,p))}function r(e,t){if(e.nodeType===t.nodeType)if(e.nodeType===N){if(a(e)===a(t))return;if(u(e)&&u(t))return;if(o(e,t),e.nodeName===t.nodeName)i(e.attributes,t.attributes);else{for(var n=t.cloneNode();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}}else e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue);else f(e,v),e.parentNode.replaceChild(t,e),f(t,p)}function i(e,t){var n,r,i,o,d;for(n=e.length;n--;)r=e[n],o=r.namespaceURI,d=r.localName,(i=t.getNamedItemNS(o,d))||e.removeNamedItemNS(o,d);for(n=t.length;n--;)r=t[n],o=r.namespaceURI,d=r.localName,i=e.getNamedItemNS(o,d),i?i.value!==r.value&&(i.value=r.value):(t.removeNamedItemNS(o,d),e.setNamedItemNS(r))}function o(e,t){for(var n,i,o,a,u,l,m=e.firstChild,c=t.firstChild,s=0;m;)s++,n=m,i=d(n),m=m.nextSibling,i&&(l||(l={}),l[i]=n);for(m=e.firstChild;c;)s--,o=c,c=c.nextSibling,l&&(a=d(o))&&(u=l[a])?(e.insertBefore(u,m),r(u,o)):m&&!d(m)?(n=m,m=m.nextSibling,r(n,o)):(e.insertBefore(o,m),f(o,p));for(;--s>=0;)e.removeChild(f(e.lastChild,v))}function d(e){if(e.nodeType===N){var t=e.getAttribute(n.KEY)||e.id;return t?c+t:void 0}}function a(e){return e.getAttribute(n.CHECKSUM)||NaN}function u(e){return null!=e.getAttribute(n.IGNORE)}function f(e,t){if(d(e)){var n=document.createEvent("Event"),r={value:e};n.initEvent(t,!1,!1),Object.defineProperty(n,"target",r),Object.defineProperty(n,"srcElement",r),e.dispatchEvent(n)}for(var i=e.firstChild;i;)i=f(i,t).nextSibling;return e}function l(e,t){if(!e)throw new Error("set-dom: "+t)}n.KEY="data-key",n.IGNORE="data-ignore",n.CHECKSUM="data-checksum";var m=e(2),c="_set-dom-",s=c+"mounted",p="mount",v="dismount",N=window.Node.ELEMENT_NODE,h=window.Node.DOCUMENT_NODE;t.exports=n},{2:2}],2:[function(e,t){"use strict";var n=window.DOMParser&&new window.DOMParser,r=!1,i=!1;try{n.parseFromString("<i></i>","text/html")&&(r=!0)}catch(e){}try{!r&&n.parseFromString("<i></i>","application/xhtml+xml")&&(i=!0)}catch(e){}t.exports=r?function(e,t){var r=n.parseFromString(e,"text/html");return"HTML"===t?r.documentElement:r.body.firstChild}:function(e,t){var r="HTML"===t;if(i&&r)return n.parseFromString(e,"application/xhtml+xml").documentElement;var o=document.implementation.createHTMLDocument("");return r?(o.documentElement.innerHTML=e,o.documentElement):(o.body.innerHTML=e,o.body.firstChild)}},{}]},{},[1])(1)});