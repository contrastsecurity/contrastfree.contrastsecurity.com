"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[4964],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Cross Site Request Forgery"},l=void 0,c={unversionedId:"guides/learn-devsec/vulnerabilities/csrf",id:"guides/learn-devsec/vulnerabilities/csrf",title:"Cross Site Request Forgery",description:"What Is It?",source:"@site/learn/guides/learn-devsec/vulnerabilities/csrf.md",sourceDirName:"guides/learn-devsec/vulnerabilities",slug:"/guides/learn-devsec/vulnerabilities/csrf",permalink:"/learn/guides/learn-devsec/vulnerabilities/csrf",editUrl:"https://github.com/contrastsecurity/contrastfree.contrastsecurity.com/blob/master/learn/guides/learn-devsec/vulnerabilities/csrf.md",tags:[],version:"current",frontMatter:{title:"Cross Site Request Forgery"},sidebar:"docsSidebar",previous:{title:"Command Injection",permalink:"/learn/guides/learn-devsec/vulnerabilities/command-injection"},next:{title:"Untrusted Deserialization",permalink:"/learn/guides/learn-devsec/vulnerabilities/deserialization"}},u={},p=[{value:"What Is It?",id:"what-is-it",level:2},{value:"When Can It Affect My Application?",id:"when-can-it-affect-my-application",level:2},{value:"How Do I Know If and Where I Have This Vulnerability?",id:"how-do-i-know-if-and-where-i-have-this-vulnerability",level:2},{value:"How Do I Fix It?",id:"how-do-i-fix-it",level:2},{value:"How Do People Attack Using This Flaw?",id:"how-do-people-attack-using-this-flaw",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-it"},"What Is It?"),(0,a.kt)("p",null,"Cross Site Request Forgery occurs when attackers can trick a user's browser to submit requests to your application that are processed as normal usage. This causes them to take action unknowingly that affects their account."),(0,a.kt)("p",null,"Most often this will reference an 1x1 image in your application with parameters to take any GET action, or a hidden form to take a POST action."),(0,a.kt)("h2",{id:"when-can-it-affect-my-application"},"When Can It Affect My Application?"),(0,a.kt)("p",null,"CSRF occurs in an application that just processes user requests without any checks. Because browsers send cookies in any request, these cross-site requests will often appear authenticated. When a logged in user at your side can submit actions by navigating on other sites (that reference your site), your application is vulnerable."),(0,a.kt)("h2",{id:"how-do-i-know-if-and-where-i-have-this-vulnerability"},"How Do I Know If and Where I Have This Vulnerability?"),(0,a.kt)("p",null,"Contrast Assess can monitor requests of your application and determine if the application checks origins or items that will block CSRF vulnerabilities."),(0,a.kt)("h2",{id:"how-do-i-fix-it"},"How Do I Fix It?"),(0,a.kt)("p",null,"You can block CSRF vulnerabilities by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Checking the origin of web requests against allowed domains for form POSTs, similar to CORS."),(0,a.kt)("li",{parentName:"ul"},"Not taking actions based on GET requests."),(0,a.kt)("li",{parentName:"ul"},"Using HTTP Headers that are not permitted across domains, such as header application/json instead of form POSTs.")),(0,a.kt)("h2",{id:"how-do-people-attack-using-this-flaw"},"How Do People Attack Using This Flaw?"),(0,a.kt)("p",null,"Attackers will place request instructions on their own web pages that reference your application. These requests will fail for non-logged in users but may succeed for those who are logged in."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<img src="https://you.example.com/app/action?knownParameter=attack" style="display:none">\n')))}f.isMDXComponent=!0}}]);