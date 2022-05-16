"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[1065],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:e},l),{},{components:n})):r.createElement(h,a({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7002:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"How It Works",sidebar_position:10},s=void 0,u={unversionedId:"guides/devsec-with-contrast/tutorial-node/how-it-works",id:"guides/devsec-with-contrast/tutorial-node/how-it-works",title:"How It Works",description:"The build phase components leverage static scanning of build artifacts. Details of each can be located in the product documentation.",source:"@site/learn/guides/devsec-with-contrast/tutorial-node/how-it-works.md",sourceDirName:"guides/devsec-with-contrast/tutorial-node",slug:"/guides/devsec-with-contrast/tutorial-node/how-it-works",permalink:"/learn/guides/devsec-with-contrast/tutorial-node/how-it-works",editUrl:"https://github.com/contrastsecurity/contrastfree.contrastsecurity.com/blob/master/learn/guides/devsec-with-contrast/tutorial-node/how-it-works.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"How It Works",sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Getting Started: Test Security",permalink:"/learn/guides/devsec-with-contrast/tutorial-node/iast-security"},next:{title:"Securing Python Applications",permalink:"/learn/guides/devsec-with-contrast/tutorial-python/"}},l={},p=[],d={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The build phase components leverage static scanning of build artifacts. Details of each can be located in the product documentation."),(0,i.kt)("p",null,"At test and production, Contrast works by having a custom application start command."),(0,i.kt)("p",null,"When the application starts in Contrast mode, the runtime agent monitors Node classes that are loaded and wraps specific functions with calls around them. This performs an additional security check before and/or after the function while still delegating actual calls to the method itself."),(0,i.kt)("p",null,"When the application is run without the Contrast runner, there is no performance impact as the agent is not even present."))}f.isMDXComponent=!0}}]);