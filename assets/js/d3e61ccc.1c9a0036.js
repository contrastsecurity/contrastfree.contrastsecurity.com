"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[1990],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,w=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(w,s(s({ref:t},u),{},{components:r})):n.createElement(w,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7126:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={title:"How Static Analysis Works"},c=void 0,l={unversionedId:"guides/devsec-with-contrast/how-it-works/how-static-works",id:"guides/devsec-with-contrast/how-it-works/how-static-works",title:"How Static Analysis Works",description:"The Contrast static analyzer works on source code and bytecode. The goal of this analyzer is to produce the primary critical issues that matter and avoid results overload.",source:"@site/learn/guides/devsec-with-contrast/how-it-works/how-static-works.md",sourceDirName:"guides/devsec-with-contrast/how-it-works",slug:"/guides/devsec-with-contrast/how-it-works/how-static-works",permalink:"/learn/guides/devsec-with-contrast/how-it-works/how-static-works",editUrl:"https://github.com/contrastsecurity/contrastfree.contrastsecurity.com/blob/master/learn/guides/devsec-with-contrast/how-it-works/how-static-works.md",tags:[],version:"current",frontMatter:{title:"How Static Analysis Works"},sidebar:"docsSidebar",previous:{title:"How Dependency Scans Work",permalink:"/learn/guides/devsec-with-contrast/how-it-works/how-oss-works"},next:{title:"Continuous Security",permalink:"/learn/guides/devsec-with-contrast/keep-going/"}},u={},p=[],d={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Contrast static analyzer works on source code and bytecode. The goal of this analyzer is to produce the primary critical issues that matter and avoid results overload."),(0,a.kt)("p",null,"The analyzer performs a few basic steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scan code to identify entry points that are exposed."),(0,a.kt)("li",{parentName:"ul"},"Trace and connect code that connects to these entry points."),(0,a.kt)("li",{parentName:"ul"},"Report critical vulnerabilities that occur along these paths.")),(0,a.kt)("p",null,"Rather than connecting all possible code paths, this approach retuns high confidence, high severity results very quickly. This produces both ",(0,a.kt)("strong",{parentName:"p"},"dataflow issues"),", such as injection and deserialization attacks as well as ",(0,a.kt)("strong",{parentName:"p"},"semantic issues"),", such as improper annotations or access checks."),(0,a.kt)("p",null,"Additional details are available in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.contrastsecurity.com/white-paper-modern-application-security-scanning"},"Scan whitepaper"),"."))}h.isMDXComponent=!0}}]);