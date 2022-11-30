"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[734],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2670:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],s={sidebar_label:"Dealing with flaky tests",title:"Dealing with flaky tests"},o=void 0,u={unversionedId:"flaky_tests",id:"flaky_tests",title:"Dealing with flaky tests",description:"Re-Run Failed Tests and merge results",source:"@site/docs/flaky_tests.md",sourceDirName:".",slug:"/flaky_tests",permalink:"/flaky_tests",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/flaky_tests.md",tags:[],version:"current",frontMatter:{sidebar_label:"Dealing with flaky tests",title:"Dealing with flaky tests"},sidebar:"tutorialSidebar",previous:{title:"How to contribute",permalink:"/contribute"},next:{title:"Parsing Test Results",permalink:"/parsing_results"}},c={},d=[{value:"Re-Run Failed Tests and merge results",id:"re-run-failed-tests-and-merge-results",level:2},{value:"RetryFailed Listener",id:"retryfailed-listener",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Attaching Listener",id:"attaching-listener",level:4},{value:"Tagging Tests",id:"tagging-tests",level:4},{value:"Wait Until Keyword Succeeds",id:"wait-until-keyword-succeeds",level:2}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"re-run-failed-tests-and-merge-results"},"Re-Run Failed Tests and merge results"),(0,l.kt)("p",null,"It is possible to run the same test suite(s) multiple times - but only re-run the failed tests. Afterwards the results can be merged into a single results file using ",(0,l.kt)("inlineCode",{parentName:"p"},"rebot"),".\nYou can find the required steps in the ",(0,l.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#merging-outputs"},"Robot Framework User Guide")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"robot --output original.xml tests                          # first execute all tests\nrobot --rerunfailed original.xml --output rerun.xml tests  # then re-execute failing\nrebot --merge original.xml rerun.xml                       # finally merge results\n")),(0,l.kt)("h2",{id:"retryfailed-listener"},"RetryFailed Listener"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframework-retryfailed"},"RetryFailed Listener")," can automatically retry tests or tasks based on tags."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install with pip:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install robotframework-retryfailed\n")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Add the listener to your robot execution, via command line arguments.\nWhen your tests do fail and you have tagged them with ",(0,l.kt)("inlineCode",{parentName:"p"},"test:retry(2)"),", it will retry the test 2 times.\nRetry can be also set globally as a parameter to the listener."),(0,l.kt)("h4",{id:"attaching-listener"},"Attaching Listener"),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"robot --listener RetryFailed <your robot suite>\n\nrobot --listener RetryFailed:1 <robot suite>\n")),(0,l.kt)("p",null,"Second one will by default retry once every failing test."),(0,l.kt)("h4",{id:"tagging-tests"},"Tagging Tests"),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Test Cases ***\nTest Case\n    [Tags]    test:retry(2)\n    Log    This test will be retried 2 times if it fails\n")),(0,l.kt)("p",null,"Tagging tasks by ",(0,l.kt)("inlineCode",{parentName:"p"},"task:retry(3)")," should also work."),(0,l.kt)("h2",{id:"wait-until-keyword-succeeds"},"Wait Until Keyword Succeeds"),(0,l.kt)("p",null,"Runs the specified keyword and retries if it fails."),(0,l.kt)("p",null,"Check out the ",(0,l.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Wait%20Until%20Keyword%20Succeeds"},"Wait Until Keyword Succeeds")," keyword in the Robot Framework BuiltIn library."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Test Cases ***\nTest Case\n    Wait Until Keyword Succeeds    2 min    5 sec    My keyword    argument\n    ${result}    Wait Until Keyword Succeeds    3x    200ms    My keyword\n    ${result}    Wait Until Keyword Succeeds    3x    strict: 200ms    My keyword\n")))}f.isMDXComponent=!0}}]);