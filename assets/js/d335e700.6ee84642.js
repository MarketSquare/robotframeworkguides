"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||s;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={},i="DataDriven Tests",o={unversionedId:"testcase_styles/datadriven",id:"testcase_styles/datadriven",title:"DataDriven Tests",description:"Using DataDriven Syntax in Robot Framework",source:"@site/docs/testcase_styles/datadriven.mdx",sourceDirName:"testcase_styles",slug:"/testcase_styles/datadriven",permalink:"/docs/testcase_styles/datadriven",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/testcase_styles/datadriven.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BDD (Behavior Driven Development)",permalink:"/docs/testcase_styles/bdd"},next:{title:"Variables",permalink:"/docs/variables"}},l={},d=[{value:"Using DataDriven Syntax in Robot Framework",id:"using-datadriven-syntax-in-robot-framework",level:2},{value:"DataDriven Syntax",id:"datadriven-syntax",level:3},{value:"Using DataDriver Library",id:"using-datadriver-library",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datadriven-tests"},"DataDriven Tests"),(0,n.kt)("h2",{id:"using-datadriven-syntax-in-robot-framework"},"Using DataDriven Syntax in Robot Framework"),(0,n.kt)("h3",{id:"datadriven-syntax"},"DataDriven Syntax"),(0,n.kt)("p",null,"Test Cases can be written in a data-driven style where test cases use only one higher-level keyword, that hides the actual test workflow. These tests are very useful when there is a need to test the ",(0,n.kt)("strong",{parentName:"p"},"same scenario")," with ",(0,n.kt)("strong",{parentName:"p"},"different input and/or output data"),".",(0,n.kt)("br",{parentName:"p"}),"\n","The ",(0,n.kt)("inlineCode",{parentName:"p"},"Test Template")," setting defines the ",(0,n.kt)("inlineCode",{parentName:"p"},"Keyword")," which is executed for every test case.",(0,n.kt)("br",{parentName:"p"}),"\n","The ",(0,n.kt)("inlineCode",{parentName:"p"},"Test Cases")," section just contains  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the Test Case Name"),(0,n.kt)("li",{parentName:"ul"},"the arguments for the ",(0,n.kt)("inlineCode",{parentName:"li"},"Keyword")," defined in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Test Template")," setting ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nTest Template    Login with invalid credentials should fail\n\n*** Test Cases ***                USERNAME         PASSWORD\nInvalid User Name                 invalid          ${VALID PASSWORD}\nInvalid Password                  ${VALID USER}    invalid\nInvalid User Name and Password    invalid          invalid\nEmpty User Name                   ${EMPTY}         ${VALID PASSWORD}\nEmpty Password                    ${VALID USER}    ${EMPTY}\nEmpty User Name and Password      ${EMPTY}         ${EMPTY}\n\n*** Keywords ***\nLogin with invalid credentials should fail\n    [Arguments]    ${username}    ${password}\n    Log Many    ${username}    ${password}\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Let me run it"),(0,n.kt)("iframe",{src:"https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/core/datadriven-syntax",width:"100%",height:"600"})),(0,n.kt)("h3",{id:"using-datadriver-library"},"Using DataDriver Library"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Snooz82/robotframework-datadriver"},"DataDriver library")," is an extension for Robot Framework\xae.",(0,n.kt)("br",{parentName:"p"}),"\n","DataDriver creates new test cases based on a Data-File that contains the data for Data-Driven Testing. These data file may be ",(0,n.kt)("inlineCode",{parentName:"p"},".csv")," , ",(0,n.kt)("inlineCode",{parentName:"p"},".xls")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".xlsx")," files.",(0,n.kt)("br",{parentName:"p"}),"\n","The DataDriver library is not included in the Robot Framework distribution, but it can be installed using pip.  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install robotframework-datadriver\n")),(0,n.kt)("p",null,"A simple Test Suite which logs the username and password from the CSV file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary           DataDriver\nTest Template     Login With User And Password\n\n*** Test Cases ***\nLogin with user ${username} and password ${password}    Default    UserData\n\n*** Keywords ***\nLogin With User And Password\n    [Arguments]    ${username}    ${password}\n    Log Many    ${username}    ${password}\n")),(0,n.kt)("p",null,"The CSV file contains the test data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"*** Test Cases ***;${username};${password};[Tags];[Documentation]\nRight user empty pass;demo;${EMPTY};1;This is a test case documentation of the first one.\nRight user wrong pass;demo;FooBar;2,3,foo;This test case has the Tags 2,3 and foo\n;${EMPTY};mode;1,2,3,4;This test case has a generated name based on template name.\n;${EMPTY};${EMPTY};;\n;${EMPTY};FooBar;;\n;FooBar;mode;foo,1;\n;FooBar;${EMPTY};foo;\n;FooBar;FooBar;foo,2;\n")),(0,n.kt)("p",null,"Check the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Snooz82/robotframework-datadriver"},"DataDriver Library")," repository for more information."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Let me run it"),(0,n.kt)("iframe",{src:"https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/datadriver",width:"100%",height:"600"})))}m.isMDXComponent=!0}}]);