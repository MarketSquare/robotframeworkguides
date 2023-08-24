"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_label:"Re-Execute failed tests",title:"Re-Execute failed tests"},i=void 0,s={unversionedId:"flaky_tests",id:"flaky_tests",title:"Re-Execute failed tests",description:"HOW TO! Rerun failed testcases in Robot Framework",source:"@site/docs/flaky_tests.md",sourceDirName:".",slug:"/flaky_tests",permalink:"/docs/flaky_tests",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/flaky_tests.md",tags:[],version:"current",frontMatter:{sidebar_label:"Re-Execute failed tests",title:"Re-Execute failed tests"},sidebar:"tutorialSidebar",previous:{title:"Robot Framework API",permalink:"/docs/extending_robot_framework/listeners_prerun_api/rf-api"},next:{title:"Running tests in parallel",permalink:"/docs/parallel"}},o={},u=[{value:"Re-Execute Failed Tests and merge results",id:"re-execute-failed-tests-and-merge-results",level:2},{value:"RetryFailed Listener",id:"retryfailed-listener",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Attaching Listener",id:"attaching-listener",level:4},{value:"Tagging Tests",id:"tagging-tests",level:4},{value:"Wait Until Keyword Succeeds",id:"wait-until-keyword-succeeds",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/537Os9GVXLk?si=nskKyTmLr0OEfXjJ"},"HOW TO! Rerun failed testcases in Robot Framework"),"  "),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/537Os9GVXLk?si=nskKyTmLr0OEfXjJ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"re-execute-failed-tests-and-merge-results"},"Re-Execute Failed Tests and merge results"),(0,a.kt)("p",null,"It is possible to run the same test suite(s) multiple times - but only re-run the failed tests. Afterwards the results can be merged into a single results file using ",(0,a.kt)("inlineCode",{parentName:"p"},"rebot"),".\nYou can find the required steps in the ",(0,a.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#merging-outputs"},"Robot Framework User Guide")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"robot --output original.xml tests                          # first execute all tests\nrobot --rerunfailed original.xml --output rerun.xml tests  # then re-execute failing\nrebot --merge original.xml rerun.xml                       # finally merge results\n")),(0,a.kt)("h2",{id:"retryfailed-listener"},"RetryFailed Listener"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframework-retryfailed"},"RetryFailed Listener")," can automatically retry tests or tasks based on tags."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install with pip:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install robotframework-retryfailed\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Add the listener to your robot execution, via command line arguments.\nWhen your tests do fail and you have tagged them with ",(0,a.kt)("inlineCode",{parentName:"p"},"test:retry(2)"),", it will retry the test 2 times.\nRetry can be also set globally as a parameter to the listener."),(0,a.kt)("h4",{id:"attaching-listener"},"Attaching Listener"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"robot --listener RetryFailed <your robot suite>\n\nrobot --listener RetryFailed:1 <robot suite>\n")),(0,a.kt)("p",null,"Second one will by default retry once every failing test."),(0,a.kt)("h4",{id:"tagging-tests"},"Tagging Tests"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Test Cases ***\nTest Case\n    [Tags]    test:retry(2)\n    Log    This test will be retried 2 times if it fails\n")),(0,a.kt)("p",null,"Tagging tasks by ",(0,a.kt)("inlineCode",{parentName:"p"},"task:retry(3)")," should also work."),(0,a.kt)("h2",{id:"wait-until-keyword-succeeds"},"Wait Until Keyword Succeeds"),(0,a.kt)("p",null,"Runs the specified keyword and retries if it fails."),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Wait%20Until%20Keyword%20Succeeds"},"Wait Until Keyword Succeeds")," keyword in the Robot Framework BuiltIn library."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Test Cases ***\nTest Case\n    Wait Until Keyword Succeeds    2 min    5 sec    My keyword    argument\n    ${result}    Wait Until Keyword Succeeds    3x    200ms    My keyword\n    ${result}    Wait Until Keyword Succeeds    3x    strict: 200ms    My keyword\n")))}d.isMDXComponent=!0}}]);