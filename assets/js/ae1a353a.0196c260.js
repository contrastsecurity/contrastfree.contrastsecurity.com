"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[4455],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={title:"Hibernate Injection"},l=void 0,s={unversionedId:"guides/learn-devsec/vulnerabilities/hibernate-injection",id:"guides/learn-devsec/vulnerabilities/hibernate-injection",title:"Hibernate Injection",description:"What Is It?",source:"@site/learn/guides/learn-devsec/vulnerabilities/hibernate-injection.md",sourceDirName:"guides/learn-devsec/vulnerabilities",slug:"/guides/learn-devsec/vulnerabilities/hibernate-injection",permalink:"/learn/guides/learn-devsec/vulnerabilities/hibernate-injection",editUrl:"https://github.com/contrastsecurity/contrastfree.contrastsecurity.com/blob/master/learn/guides/learn-devsec/vulnerabilities/hibernate-injection.md",tags:[],version:"current",frontMatter:{title:"Hibernate Injection"},sidebar:"docsSidebar",previous:{title:"Hardcoded Cryptographic Key",permalink:"/learn/guides/learn-devsec/vulnerabilities/hardcoded-key"},next:{title:"Insecure Encryption Algorithm",permalink:"/learn/guides/learn-devsec/vulnerabilities/insecure-encryption-algorithm"}},u={},p=[{value:"What Is It?",id:"what-is-it",level:2},{value:"When Can It Affect My Application?",id:"when-can-it-affect-my-application",level:2},{value:"How Do I Know If and Where I Have This Vulnerability?",id:"how-do-i-know-if-and-where-i-have-this-vulnerability",level:2},{value:"How Do I Fix It?",id:"how-do-i-fix-it",level:2},{value:"How Do People Attack Using This Flaw?",id:"how-do-people-attack-using-this-flaw",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-it"},"What Is It?"),(0,a.kt)("p",null,"Hibernate Injection is a form of SQL Injection, where user input makes its way to control the Hibernate HQL and then control the database query.\nThe affects match SQL Injection for stealing records, altering data, etc."),(0,a.kt)("h2",{id:"when-can-it-affect-my-application"},"When Can It Affect My Application?"),(0,a.kt)("p",null,"Hibernate Injection can only affect applications using Hibernate, limiting it to Java and .NET.\nThe vulnerability occurs in dynamically created HQL queries that add user input to the query. It does not occur in parameterized HQL queries, such as those provided by most Hibernate and JPA annotations."),(0,a.kt)("h2",{id:"how-do-i-know-if-and-where-i-have-this-vulnerability"},"How Do I Know If and Where I Have This Vulnerability?"),(0,a.kt)("p",null,"Contrast Scan can locate Hibernate Injection vulnerabilities through code scanning."),(0,a.kt)("p",null,"Contrast Assess can locate Hibernate Injection by watching applications as they are tested."),(0,a.kt)("p",null,"Contrast Protect can defend Hibernate Injection in production applications."),(0,a.kt)("h2",{id:"how-do-i-fix-it"},"How Do I Fix It?"),(0,a.kt)("p",null,"HQL queries should be parameterized through the proper syntax. When a query cannot be parameterized, it should be matched against an allow-list."),(0,a.kt)("h2",{id:"how-do-people-attack-using-this-flaw"},"How Do People Attack Using This Flaw?"),(0,a.kt)("p",null,"Hibernate Injection is attackes by appending different HQL statements to user input."))}f.isMDXComponent=!0}}]);