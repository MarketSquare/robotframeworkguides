"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),b=r,d=c["".concat(i,".").concat(b)]||c[b]||m[b]||s;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={},o="Running tests in parallel",l={unversionedId:"parallel",id:"parallel",title:"Running tests in parallel",description:"Pabot",source:"@site/docs/parallel.mdx",sourceDirName:".",slug:"/parallel",permalink:"/docs/parallel",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/parallel.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Re-Execute failed tests",permalink:"/docs/flaky_tests"},next:{title:"Parsing Test Results",permalink:"/docs/parsing_results"}},i={},p=[{value:"Pabot",id:"pabot",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-tests-in-parallel"},"Running tests in parallel"),(0,r.kt)("h2",{id:"pabot"},"Pabot"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mkorpela/pabot"},"Pabot")," is a ",(0,r.kt)("strong",{parentName:"p"},"parallel test runner")," for Robot Framework.",(0,r.kt)("br",{parentName:"p"}),"\n","It can be used to run tests in parallel on a single machine with multiple processes."),(0,r.kt)("p",null,"Check out the video from RoboCon 2018"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/i0RV6SJSIn8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pip install -U robotframework-pabot\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"By default, Pabot will split execution on suite level. That means that each process will run a single suite.",(0,r.kt)("br",{parentName:"p"}),"\n","Test Cases from the suite will be executed sequentially.",(0,r.kt)("br",{parentName:"p"}),"\n","If you want to split execution on test level, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"--testlevelsplit")," option. This will split execution on test level, so that each process will run a single test case.  "),(0,r.kt)("p",null,"Split execution to suite files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," pabot [path to tests]\n")),(0,r.kt)("p",null,"Split execution on test level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," pabot --testlevelsplit [path to tests]\n")),(0,r.kt)("p",null,"Run with 8 parallel processes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," pabot --processes 8 [path to tests]\n")),(0,r.kt)("p",null,"The default number of processes depends on the number of CPU cores. (2 processes per core)",(0,r.kt)("br",{parentName:"p"}),"\n","If no number pro processes is given, the default number of processes is used."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Command Line Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pabot [--verbose|--testlevelsplit|--command .. --end-command|\n       --processes num|--pabotlib|--pabotlibhost host|--pabotlibport port|\n       --shard i/n|\n       --artifacts extensions|--artifactsinsubfolders|\n       --resourcefile file|--argumentfile[num] file|--suitesfrom file] \n      [robot options] [path ...]\n")),(0,r.kt)("p",null,"Supports all ",(0,r.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#all-command-line-options"},"Robot Framework command line options")," and also following options (these must be before RF options):"),(0,r.kt)("p",null,"--verbose",(0,r.kt)("br",{parentName:"p"}),"\n","more output from the parallel execution"),(0,r.kt)("p",null,"--testlevelsplit",(0,r.kt)("br",{parentName:"p"}),"\n","Split execution on test level instead of default suite level.\nIf .pabotsuitenames contains both tests and suites then this\nwill only affect new suites and split only them.\nLeaving this flag out when both suites and tests in\n.pabotsuitenames file will also only affect new suites and\nadd them as suite files."),(0,r.kt)("p",null,"--command ","[ACTUAL COMMANDS TO START ROBOT EXECUTOR]"," --end-command",(0,r.kt)("br",{parentName:"p"}),"\n","RF script for situations where robot is not used directly"),(0,r.kt)("p",null,"--processes   ","[NUMBER OF PROCESSES]",(0,r.kt)("br",{parentName:"p"}),"\n","How many parallel executors to use (default max of 2 and cpu count)"),(0,r.kt)("p",null,"--pabotlib",(0,r.kt)("br",{parentName:"p"}),"\n","Start PabotLib remote server. This enables locking and resource distribution between parallel test executions."),(0,r.kt)("p",null,"--pabotlibhost   ","[HOSTNAME]",(0,r.kt)("br",{parentName:"p"}),"\n","Host name of the PabotLib remote server (default is 127.0.0.1)\nIf used with --pabotlib option, will change the host listen address of the created remote server (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/robotframework/PythonRemoteServer"},"https://github.com/robotframework/PythonRemoteServer"),")\nIf used without the --pabotlib option, will connect to already running instance of the PabotLib remote server in the given host. The remote server can be also started and executed separately from pabot instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  python -m pabot.pabotlib <path_to_resourcefile> <host> <port>\n  python -m pabot.pabotlib resource.txt 192.168.1.123 8271\n")),(0,r.kt)("p",null,"  This enables sharing a resource with multiple Robot Framework instances."),(0,r.kt)("p",null,"--pabotlibport   ","[PORT]",(0,r.kt)("br",{parentName:"p"}),"\n","Port number of the PabotLib remote server (default is 8270)\nSee --pabotlibhost for more information"),(0,r.kt)("p",null,"--resourcefile   ","[FILEPATH]",(0,r.kt)("br",{parentName:"p"}),"\n","Indicator for a file that can contain shared variables for distributing resources. This needs to be used together with pabotlib option. Resource file syntax is same as Windows ini files. Where a section is a shared set of variables."),(0,r.kt)("p",null,"--artifacts ","[FILE EXTENSIONS]",(0,r.kt)("br",{parentName:"p"}),"\n","List of file extensions (comma separated).",(0,r.kt)("br",{parentName:"p"}),"\n","Defines which files (screenshots, videos etc.) from separate reporting directories would be copied and included in a final report.",(0,r.kt)("br",{parentName:"p"}),"\n","Possible links to copied files in RF log would be updated (only relative paths supported).",(0,r.kt)("br",{parentName:"p"}),"\n","The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"png"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," --artifacts png,mp4,txt\n")),(0,r.kt)("p",null,"--artifactsinsubfolders",(0,r.kt)("br",{parentName:"p"}),"\n","Copy artifacts located not only directly in the RF output dir, but also in it's sub-folders."),(0,r.kt)("p",null,"--argumentfile","[INTEGER][FILEPATH]",(0,r.kt)("br",{parentName:"p"}),"\n","Run same suites with multiple ",(0,r.kt)("a",{parentName:"p",href:"http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#argument-files"},"argumentfile")," options.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," --argumentfile1 arg1.txt --argumentfile2 arg2.txt\n")),(0,r.kt)("p",null,"--suitesfrom   ","[FILEPATH TO OUTPUTXML]",(0,r.kt)("br",{parentName:"p"}),"\n","Optionally read suites from output.xml file. Failed suites will run\nfirst and longer running ones will be executed before shorter ones."),(0,r.kt)("p",null,"--shard ","[INDEX]","/","[TOTAL]","\nOptionally split execution into smaller pieces. This can\nbe used for distributing testing to multiple machines."),(0,r.kt)("p",null,"--chunk\nOptionally chunk tests to PROCESSES number of robot runs. This can save time because all the suites will share the same setups and teardowns."),(0,r.kt)("p",null,"Example usages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," pabot test_directory\n pabot --exclude FOO directory_to_tests\n pabot --command java -jar robotframework.jar --end-command --include SMOKE tests\n pabot --processes 10 tests     \n pabot --pabotlibhost 192.168.1.123 --pabotlibport 8271 --processes 10 tests\n pabot --pabotlib --pabotlibhost 192.168.1.111 --pabotlibport 8272 --processes 10 tests\n pabot --artifacts png,mp4,txt --artifactsinsubfolders directory_to_tests\n"))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Multiple Test Suites in a ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/")," directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-robotframework",metastring:'title="tests/SuiteA.robot"',title:'"tests/SuiteA.robot"'},"*** Test Cases ***\nTest Case 1\n    Log    Test Case 1\n    Sleep   10s\n  \nTest Case 2\n    Log    Test Case 2\n    Sleep   10s\n\nTest Case 3\n    Log    Test Case 3\n    Sleep   10s\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-robotframework",metastring:'title="tests/SuiteB.robot"',title:'"tests/SuiteB.robot"'},"*** Test Cases ***\nTest Case A\n    Log    Test Case A\n    Sleep   10s\n  \nTest Case B\n    Log    Test Case B\n    Sleep   10s\n\nTest Case C\n    Log    Test Case D\n    Sleep   10s\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pabot tests\n")),(0,r.kt)("p",null,"Will run both suites in parallel, but will execute test cases sequentially."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pabot --testlevelsplit tests\n")),(0,r.kt)("p",null,"Will run both suites in parallel and will execute test cases in parallel."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Suite Setups")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Suite Teardowns")," are used, they will be executed for each instance of the suite."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-robotframework",metastring:'title="tests/SuiteA.robot"',title:'"tests/SuiteA.robot"'},"*** Settings ***\nTest Suite Setup    Log    Suite A Setup\nTest Suite Teardown    Log    Suite A Teardown\nTest Setup    Log    Test Setup\nTest Teardown    Log    Test Teardown\n\n*** Test Cases ***\nTest Case 1\n    Log    Test Case 1\n    Sleep   10s\n\nTest Case 2\n    Log    Test Case 2\n    Sleep   10s\n\nTest Case 3\n    Log    Test Case 3\n    Sleep   10s\n")),(0,r.kt)("p",null,"When executed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--testlevelsplit")," option, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Suite Setup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Suite Teardown")," will also be executed once for each parallel instance of the suite.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Setup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Teardown")," will be executed for each test case."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pabot --testlevelsplit tests\n")))}c.isMDXComponent=!0}}]);