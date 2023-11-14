"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_label:"Style Guide",title:"Introduction And Basic Guide"},i=void 0,l={unversionedId:"style_guide/introduction_and_basic_guide",id:"style_guide/introduction_and_basic_guide",title:"Introduction And Basic Guide",description:"Purpose",source:"@site/docs/style_guide/introduction_and_basic_guide.md",sourceDirName:"style_guide",slug:"/style_guide/introduction_and_basic_guide",permalink:"/docs/style_guide/introduction_and_basic_guide",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/style_guide/introduction_and_basic_guide.md",tags:[],version:"current",frontMatter:{sidebar_label:"Style Guide",title:"Introduction And Basic Guide"},sidebar:"tutorialSidebar",previous:{title:"Reporting Test Results",permalink:"/docs/reporting_alternatives"},next:{title:"BDD (Behavior Driven Development)",permalink:"/docs/testcase_styles/bdd"}},s={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Robocon 2022 Presentation",id:"robocon-2022-presentation",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Special Thanks To",id:"special-thanks-to",level:3},{value:"We are always looking for contributors",id:"we-are-always-looking-for-contributors",level:3},{value:"Basic Rules and Guidelines",id:"basic-rules-and-guidelines",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"This style guide is a community driven set of sensible rules to write your Robot Framework code."),(0,o.kt)("p",null,"As a starting point use the existing standards from ",(0,o.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#getting-started"},"Robot Framework")," user guide, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframework-robocop"},"Robocop")," and ",(0,o.kt)("a",{parentName:"p",href:"https://robotidy.readthedocs.io/en/stable/"},"Robotidy"),"."),(0,o.kt)("h2",{id:"robocon-2022-presentation"},"Robocon 2022 Presentation"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Mpt_4MItha0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"contributors"},"Contributors"),(0,o.kt)("p",null,"Guido Demmenie, Mannana Koberidze, Kelby Stine"),(0,o.kt)("h3",{id:"special-thanks-to"},"Special Thanks To"),(0,o.kt)("p",null,"V\xe1clav Fuksa, Many Kasiriha, Bartlomiej Hirsz, Mateusz Nojek, Ren\xe9 Rohner, Miikka Solmela"),(0,o.kt)("h3",{id:"we-are-always-looking-for-contributors"},"We are always looking for contributors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We meet up once every two weeks to talk about style guide topics"),(0,o.kt)("li",{parentName:"ul"},"Reach out to any one of us on the Slack channels")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"basic-rules-and-guidelines"},"Basic Rules and Guidelines"),(0,o.kt)("p",null,"Here are some good basic guidelines for formatting your Robot Framework code. As these are guidelines, use your best judgment in cases not covered by these recommendations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Separate pieces of the data, such as keywords and their arguments, with four (4) spaces.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Robot and Resource file section order:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-robot"},"*** Comments ***\nOptionally the comments section can be placed at the bottom of the file.\n\n*** Settings ***\n\n*** Variables ***\n\n*** Test Cases / Tasks ***\n(not available in resource files)\n\n*** Keywords ***\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Keywords within resource files should be alphabetized or organized by functionality or purpose. The important part is to organize keywords in a thoughtful manner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The recommended minimum maximum line length is 120.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is reasonable to split a variable definition across multiple lines when it exceeds the recommended line length, or for the better readability of the code. See ",(0,o.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-syntax"},"Dividing data to several rows"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Variable Syntax from the user guide ",(0,o.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-priorities-and-scopes"},"variable-priorities-and-scopes")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Global variables use upper-case letters."),(0,o.kt)("li",{parentName:"ul"},"Suite variables use upper-case letters."),(0,o.kt)("li",{parentName:"ul"},"Test variables use upper-case letters."),(0,o.kt)("li",{parentName:"ul"},"Local variables use lower-case letters."),(0,o.kt)("li",{parentName:"ul"},"Keyword arguments use lower-case letters."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Keyword syntax should be capital cased. (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"This Keyword Is Capital Cased"),")"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Version 0.3a"),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);