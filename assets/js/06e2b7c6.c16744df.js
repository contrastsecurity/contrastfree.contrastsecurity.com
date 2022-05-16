"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[3138],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5363:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Regular Expression Denial of Service (ReDoS)"},s=void 0,c={unversionedId:"guides/learn-devsec/vulnerabilities/redos",id:"guides/learn-devsec/vulnerabilities/redos",title:"Regular Expression Denial of Service (ReDoS)",description:"What Is It?",source:"@site/learn/guides/learn-devsec/vulnerabilities/redos.md",sourceDirName:"guides/learn-devsec/vulnerabilities",slug:"/guides/learn-devsec/vulnerabilities/redos",permalink:"/learn/guides/learn-devsec/vulnerabilities/redos",editUrl:"https://github.com/contrastsecurity/contrastfree.contrastsecurity.com/blob/master/learn/guides/learn-devsec/vulnerabilities/redos.md",tags:[],version:"current",frontMatter:{title:"Regular Expression Denial of Service (ReDoS)"},sidebar:"docsSidebar",previous:{title:"Path Traversal",permalink:"/learn/guides/learn-devsec/vulnerabilities/path-traversal"},next:{title:"Remote Code Execution (RCE)",permalink:"/learn/guides/learn-devsec/vulnerabilities/remote-code-execution"}},u={},p=[{value:"What Is It?",id:"what-is-it",level:2},{value:"When Can It Affect My Application?",id:"when-can-it-affect-my-application",level:2},{value:"How Do I Know If and Where I Have This Vulnerability?",id:"how-do-i-know-if-and-where-i-have-this-vulnerability",level:2},{value:"How Do I Fix It?",id:"how-do-i-fix-it",level:2},{value:"How Do People Attack Using This Flaw?",id:"how-do-people-attack-using-this-flaw",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-it"},"What Is It?"),(0,i.kt)("p",null,"Regular Expression Denial of Service occurs when attackers can control either the regular expression or data in a way that intentionally generates performance bad enough to harm system availability."),(0,i.kt)("h2",{id:"when-can-it-affect-my-application"},"When Can It Affect My Application?"),(0,i.kt)("p",null,"ReDoS impacts applications that parse data with regular expressions and is most common in regular expressions with back references."),(0,i.kt)("h2",{id:"how-do-i-know-if-and-where-i-have-this-vulnerability"},"How Do I Know If and Where I Have This Vulnerability?"),(0,i.kt)("p",null,"Contrast Assess can detect ReDoS vulnerabilities at test time."),(0,i.kt)("h2",{id:"how-do-i-fix-it"},"How Do I Fix It?"),(0,i.kt)("p",null,"Developers should not permit remote users to control the regular expression itself. The developer should provide the regular expression, which can be improved as needed."),(0,i.kt)("h2",{id:"how-do-people-attack-using-this-flaw"},"How Do People Attack Using This Flaw?"),(0,i.kt)("p",null,"When attackers can control a regular expression, they can submit a regex and data that will consume 100% CPU and block all other operations.\nThe following code ",(0,i.kt)("a",{parentName:"p",href:"https://blog.superhuman.com/how-to-eliminate-regular-expression-denial-of-service/"},"attempts to validate an email address")," but also locks a system up completely."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-regex"},'/("[^"]*"|[^@])*@[^@]*/\n')))}f.isMDXComponent=!0}}]);