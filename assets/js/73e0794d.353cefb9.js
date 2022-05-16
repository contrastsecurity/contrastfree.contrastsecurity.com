"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[1875],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9615:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"Kotlin Agent",title:"Securing Server-Side Kotlin",authors:["maheswari"],tags:["java","kotlin"]},s=void 0,c={permalink:"/blog/Kotlin Agent",editUrl:"https://github.com/contrastsecurity/contrastfree.contrastsecurity.com/blob/master/blog/blog/2022-02-01.md",source:"@site/blog/2022-02-01.md",title:"Securing Server-Side Kotlin",description:"I\u2019m excited to expand Contrast Assess language coverage to include Kotlin as a General Availability language. This new language gives us an even larger footprint on the Java ecosystem that already includes Java, Scala, Spring, Java/Jakarta EE, and many other frameworks. The new Kotlin agent can be used by all Contrast customers at no additional cost or license.",date:"2022-02-01T00:00:00.000Z",formattedDate:"February 1, 2022",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"kotlin",permalink:"/blog/tags/kotlin"}],readingTime:1.61,truncated:!1,authors:[{name:"Utsav Maheswari",title:"Product Manager",key:"maheswari"}],frontMatter:{slug:"Kotlin Agent",title:"Securing Server-Side Kotlin",authors:["maheswari"],tags:["java","kotlin"]},nextItem:{title:"SafeLog4j",permalink:"/blog/SafeLog4j"}},u={authorsImageUrls:[void 0]},p=[{value:"How Kotlin and Contrast work Together",id:"how-kotlin-and-contrast-work-together",level:2},{value:"Want an Engineering Partnership?",id:"want-an-engineering-partnership",level:2}],g={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I\u2019m excited to expand Contrast Assess language coverage to include Kotlin as a General Availability language. This new language gives us an even larger footprint on the Java ecosystem that already includes Java, Scala, Spring, Java/Jakarta EE, and many other frameworks. The new Kotlin agent can be used by all Contrast customers at no additional cost or license."),(0,o.kt)("p",null,"We\u2019ve seen many customers adopting JVM languages like Kotlin and Scala for the benefits that they offer: less code to read and write, easier ability to read code, and the ultimate ability to ship faster."),(0,o.kt)("h2",{id:"how-kotlin-and-contrast-work-together"},"How Kotlin and Contrast work Together"),(0,o.kt)("p",null,"Kotlin is a popular language that runs on Java, giving developers the ability to write their own libraries or leverage the large Java ecosystem. With Contrast, we leverage this connection by using the same ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/api/java.instrument/java/lang/instrument/package-summary.html"},"Java instrumentation APIs")," that are available in all Java, Scala, and Kotlin runtimes. This core part of the Kotlin runtime provided the foundation as we worked on the Kotlin APIs, semantics, and other ways that Kotlin applications differ from Java applications."),(0,o.kt)("p",null,"When using the Kotlin agent, developers get the benefit of locations vulnerable dependencies (software composition analysis and SBOM) as well as the ability to locate custom code vulnerabilities in their own applications. The Kotlin agent can be downloaded from the Contrast Server or Maven Central. One single agent handles Kotlin, Java, and Scala together - the agent will detect and engage the appropriate language without any need for configuration or changes."),(0,o.kt)("h2",{id:"want-an-engineering-partnership"},"Want an Engineering Partnership?"),(0,o.kt)("p",null,"We are still looking for feedback from Kotlin and Scala developers who are moving quickly with their applications. Development partnerships can be in any industry. If you are using Spring or Http4k or other Java frameworks, you can still participate."),(0,o.kt)("p",null,"If you are not yet a Contrast customer, please contact us to discuss participation. If you are an existing Contrast customer, please ask your support or customer success representative for access."))}d.isMDXComponent=!0}}]);