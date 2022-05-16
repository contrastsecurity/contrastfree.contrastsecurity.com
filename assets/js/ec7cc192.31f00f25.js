"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[4798],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"XML eXternal Entity Injection / XXE"},s=void 0,c={unversionedId:"guides/learn-devsec/vulnerabilities/xxe",id:"guides/learn-devsec/vulnerabilities/xxe",title:"XML eXternal Entity Injection / XXE",description:"What Is It?",source:"@site/learn/guides/learn-devsec/vulnerabilities/xxe.md",sourceDirName:"guides/learn-devsec/vulnerabilities",slug:"/guides/learn-devsec/vulnerabilities/xxe",permalink:"/learn/guides/learn-devsec/vulnerabilities/xxe",editUrl:"https://github.com/contrastsecurity/contrastfree.contrastsecurity.com/blob/master/learn/guides/learn-devsec/vulnerabilities/xxe.md",tags:[],version:"current",frontMatter:{title:"XML eXternal Entity Injection / XXE"},sidebar:"docsSidebar",previous:{title:"Cross Site Scripting (XSS)",permalink:"/learn/guides/learn-devsec/vulnerabilities/xss"},next:{title:"CVE",permalink:"/learn/guides/learn-devsec/CVE"}},u={},p=[{value:"What Is It?",id:"what-is-it",level:2},{value:"When Can It Affect My Application?",id:"when-can-it-affect-my-application",level:2},{value:"How Do I Know If and Where I Have This Vulnerability?",id:"how-do-i-know-if-and-where-i-have-this-vulnerability",level:2},{value:"How Do I Fix It?",id:"how-do-i-fix-it",level:2},{value:"How Do People Attack Using This Flaw?",id:"how-do-people-attack-using-this-flaw",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-it"},"What Is It?"),(0,a.kt)("p",null,"XXE is a flaw in XML parsers where attackers can cause the parser to read its own external files as part of the document.\nAttackers often abuse this functionality to access other sensitive system information."),(0,a.kt)("h2",{id:"when-can-it-affect-my-application"},"When Can It Affect My Application?"),(0,a.kt)("p",null,"XXE can affect your application when you process XML documents from remote users. XXE has the most impact if your application retuns the XML document or its contents to the remote user."),(0,a.kt)("h2",{id:"how-do-i-know-if-and-where-i-have-this-vulnerability"},"How Do I Know If and Where I Have This Vulnerability?"),(0,a.kt)("p",null,"Contrast Assess can detect XXE misconfigurations as the application is tested."),(0,a.kt)("h2",{id:"how-do-i-fix-it"},"How Do I Fix It?"),(0,a.kt)("p",null,"XXE is a flaw in the XML parser. The application parsing XML needs to either turn off extenral entity resolution or use a system where it is disabled by default.\nRunning an application in chroot may limit the exposure of some XXE attacks by making other files unavailable."),(0,a.kt)("h2",{id:"how-do-people-attack-using-this-flaw"},"How Do People Attack Using This Flaw?"),(0,a.kt)("p",null,"When attackers detect that your application parses XML, many will attempt to add external entities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>\n')))}d.isMDXComponent=!0}}]);