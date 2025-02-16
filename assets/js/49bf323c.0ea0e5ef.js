"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8759],{444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(4848),s=r(8453);r(1470),r(9365);const n={sidebar_position:5,sidebar_label:"Robot Framework Dashboard",title:"Robot Framework Dashboard"},o=void 0,i={id:"reporting_test_results/robot_framework_dashboard",title:"Robot Framework Dashboard",description:"Robot Framework Dashboard is a powerful tool for analyzing and visualizing test results across multiple Robot Framework runs. It processes output XML files, stores test execution data in a SQLite database, and generates an interactive HTML dashboard. The dashboard utilizes Chart.js, Datatables, and Bootstrap for clear and structured visual representation.",source:"@site/docs/reporting_test_results/robot_framework_dashboard.md",sourceDirName:"reporting_test_results",slug:"/reporting_test_results/robot_framework_dashboard",permalink:"/docs/reporting_test_results/robot_framework_dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/reporting_test_results/robot_framework_dashboard.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Robot Framework Dashboard",title:"Robot Framework Dashboard"},sidebar:"tutorialSidebar",previous:{title:"Robot Framework Metrics",permalink:"/docs/reporting_test_results/robot_framework_metrics"},next:{title:"BDD (Behavior Driven Development)",permalink:"/docs/testcase_styles/bdd"}},l={},u=[];function c(e){const t={a:"a",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/timdegroot1996/robotframework-dashboard",children:"Robot Framework Dashboard"})," is a powerful tool for analyzing and visualizing test results across multiple Robot Framework runs. It processes output XML files, stores test execution data in a SQLite database, and generates an interactive HTML dashboard. The dashboard utilizes Chart.js, Datatables, and Bootstrap for clear and structured visual representation."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Dashboard",src:r(935).A+"",width:"1920",height:"1080"})}),"\n",(0,a.jsx)(t.p,{children:"Key Features:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Command-Line Interface: Provides options to upload runs, list runs, remove runs, and generate dashboards."}),"\n",(0,a.jsx)(t.li,{children:"Customization: Supports specifying custom database locations, dashboard filenames, and output tagging."}),"\n",(0,a.jsx)(t.li,{children:"Test Result Analysis: Parses Robot Framework output XML files and extracts key metrics."}),"\n",(0,a.jsx)(t.li,{children:"HTML Dashboard Generation: Creates an interactive dashboard with graphs and tables for detailed insights."}),"\n",(0,a.jsx)(t.li,{children:"Filtering and Sorting: Allows filtering by run, suite, test, keyword, and tags for precise analysis."}),"\n",(0,a.jsx)(t.li,{children:"Statistics & Trends: Displays pass/fail rates, durations, most failed tests, and failure messages."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The tool supports Robot Framework 6.x and 7.x, ensuring compatibility with various output formats."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var a=r(8215);const s={tabItem:"tabItem_Ymn6"};var n=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>_});var a=r(6540),s=r(8215),n=r(3104),o=r(6347),i=r(205),l=r(7485),u=r(1682),c=r(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:s}}=e;return{value:t,label:r,attributes:a,default:s}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=b(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[u,d]=h({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,c.Dv)(r);return[s,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),g=(()=>{const e=u??m;return p({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,n]),tabValues:n}}var f=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function w(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),s=i[r].value;s!==a&&(u(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...n,className:(0,s.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:s}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function _(e){const t=(0,f.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},935:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/robotdashboard-7c45f64810060b11b03472e7fc6e4cdc.png"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var a=r(6540);const s={},n=a.createContext(s);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);