"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Play With Docker",l={unversionedId:"using_rf_in_ci_systems/playground",id:"using_rf_in_ci_systems/playground",title:"Play With Docker",description:"You can use the Play With Docker service to try out Docker without installing it on your computer.",source:"@site/docs/using_rf_in_ci_systems/playground.md",sourceDirName:"using_rf_in_ci_systems",slug:"/using_rf_in_ci_systems/playground",permalink:"/docs/using_rf_in_ci_systems/playground",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/using_rf_in_ci_systems/playground.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Docker Images",permalink:"/docs/using_rf_in_ci_systems/docker"},next:{title:"CI Systems",permalink:"/docs/using_rf_in_ci_systems/ci/"}},p={},s=[{value:"Run a container and expose a port",id:"run-a-container-and-expose-a-port",level:2},{value:"Create a Test Suite and run it in a container",id:"create-a-test-suite-and-run-it-in-a-container",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"play-with-docker"},"Play With Docker"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://labs.play-with-docker.com/"},"Play With Docker")," service to try out Docker without installing it on your computer.",(0,a.kt)("br",{parentName:"p"}),"\n","You need to create an account on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," to use this service.\nYou can ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/signup"},"Register here"),"."),(0,a.kt)("p",null,"Please make sure that you ",(0,a.kt)("strong",{parentName:"p"},"don't upload or enter any sensitive data")," to this service."),(0,a.kt)("p",null,"Once you login, you can start a new instance by clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add New Instance")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Play With Docker",src:n(5338).Z,width:"1046",height:"747"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can paste commands into the terminal by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+V"),(0,a.kt)("br",{parentName:"p"}),"\n","Just in case you are wondering, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+V")," shortcut doesn't work in this terminal.")),(0,a.kt)("h2",{id:"run-a-container-and-expose-a-port"},"Run a container and expose a port"),(0,a.kt)("p",null,"Type the following command into the terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 80:80 docker/getting-started:pwd\n")),(0,a.kt)("p",null,"After the operation is complete, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPEN PORT")," button (next to the IP) and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," as the port number."),(0,a.kt)("p",null,"You should see the following page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"101 Tutorial",src:n(948).Z,width:"1046",height:"747"})),(0,a.kt)("p",null,"What you just did:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You downloaded the Docker image ",(0,a.kt)("inlineCode",{parentName:"li"},"docker/getting-started:pwd")," from the Docker Hub"),(0,a.kt)("li",{parentName:"ul"},"You started a container based on this image and exposed port 80 to the outside world"),(0,a.kt)("li",{parentName:"ul"},"You opened the port 80 in your browser and saw the result (the 101 tutorial page)")),(0,a.kt)("h2",{id:"create-a-test-suite-and-run-it-in-a-container"},"Create a Test Suite and run it in a container"),(0,a.kt)("p",null,"Next, we will do something more interesting.",(0,a.kt)("br",{parentName:"p"}),"\n","We will  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a Robot Framework test suite"),(0,a.kt)("li",{parentName:"ol"},"Run a container with Robot Framework and execute the test suite"),(0,a.kt)("li",{parentName:"ol"},"View the test results (html report) in another container")),(0,a.kt)("p",null,"Create another new instance and run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir tests\nmkdir reports\ntouch tests/mysuite.robot\n")),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"EDITOR")," button, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," folder and open the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysuite.robot")," file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Editor",src:n(4203).Z,width:"781",height:"524"})),(0,a.kt)("p",null,"Copy the following content into the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Settings ***\nLibrary   Browser\n*** Test Cases ***\nExample Test\n    New Page    https://playwright.dev\n    Get Text    h1    contains    Playwright\n    Take Screenshot\n")),(0,a.kt)("p",null,"Save the file and close the editor."),(0,a.kt)("p",null,"Run the following command to change the permissions of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reports")," folders:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod -R 777 tests reports\n")),(0,a.kt)("p",null,"Now, run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -t -v $(pwd)/tests:/opt/robotframework/tests -v $(pwd)/reports:/opt/robotframework/reports ppodgorsek/robot-framework\n")),(0,a.kt)("p",null,"The Dockerimage ",(0,a.kt)("inlineCode",{parentName:"p"},"ppodgorsek/robot-framework")," contains Robot Framework and the several other libraries.",(0,a.kt)("br",{parentName:"p"}),"\n","It will automatically execute all the test suites in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/robotframework/tests")," folder and generate a report in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/robotframework/reports")," folder."),(0,a.kt)("p",null,"After the test execution is complete, we want to serve the ",(0,a.kt)("inlineCode",{parentName:"p"},"log.html")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"report.html")," files in a web browser."),(0,a.kt)("p",null,"To do that, we will run another container with the ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 80:80 -v $(pwd)/reports:/usr/share/nginx/html:ro nginx\n")),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPEN PORT")," button and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," as the port number."),(0,a.kt)("p",null,"A new tab will open in your browser and you get a ",(0,a.kt)("inlineCode",{parentName:"p"},"403 Forbidden")," error.",(0,a.kt)("br",{parentName:"p"}),"\n","That error happens, because there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"reports")," folder."),(0,a.kt)("p",null,"However, if you add a ",(0,a.kt)("inlineCode",{parentName:"p"},"/log.html")," at the end of the URL, you will see the ",(0,a.kt)("inlineCode",{parentName:"p"},"log.html")," file.",(0,a.kt)("br",{parentName:"p"}),"\n","If you add a ",(0,a.kt)("inlineCode",{parentName:"p"},"/report.html")," at the end of the URL, you will see the ",(0,a.kt)("inlineCode",{parentName:"p"},"report.html")," file.  "),(0,a.kt)("p",null,"The url should look like this:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"http://ip<some-ip>-<some-identifier>-80.direct.labs.play-with-docker.com/log.html")))}c.isMDXComponent=!0},948:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/playground-101-tutorial-3987e4eaab2da8491a979e78281d488a.png"},4203:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/playground-editor-34f302a4f7f269fe8114bd74fda38b3a.png"},5338:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/playground-new-instance-a4420a5134bdf9c449891f7573a95d3c.png"}}]);