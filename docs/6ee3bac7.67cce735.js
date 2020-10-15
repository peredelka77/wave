(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(287)),c={title:"Basic Concepts",slug:"/enterprise/basic-concepts"},o={unversionedId:"enterprise/basic-concepts",id:"enterprise/basic-concepts",isDocsHomePage:!1,title:"Basic Concepts",description:"H2O AI Cloud, a.k.a. q8s, recognizes three actors:",source:"@site/docs/enterprise/basic-concepts.md",slug:"/enterprise/basic-concepts",permalink:"/wave/docs/enterprise/basic-concepts",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/enterprise/basic-concepts.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/wave/docs/enterprise/"},next:{title:"Developer Guide",permalink:"/wave/docs/enterprise/developer-guide"}},s=[{value:"App",id:"app",children:[]},{value:"App Instance",id:"app-instance",children:[]},{value:"Authorization",id:"authorization",children:[{value:"App Access Authorization",id:"app-access-authorization",children:[]},{value:"Instance Access Authorization",id:"instance-access-authorization",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"H2O AI Cloud, a.k.a. q8s, recognizes three actors:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"App Developer"),": creates and publishes apps"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"App User"),": browses and runs apps"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Admin"),": manages the platform")),Object(r.b)("p",null,"over two resource types:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"App"),": runnable Wave app package"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"App instance"),": running instane of an app")),Object(r.b)("h2",{id:"app"},"App"),Object(r.b)("p",null,"App is a runnable Wave app package with metadata, such as (grouped into categories):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Identity",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"a unique name and version identifier"))),Object(r.b)("li",{parentName:"ul"},"Display/search",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"a title and description"),Object(r.b)("li",{parentName:"ul"},"icon and screenshots"),Object(r.b)("li",{parentName:"ul"},"search category and keywords"))),Object(r.b)("li",{parentName:"ul"},"Authorization",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"owner (e.g., the person who imported it into H2O AI Cloud)"),Object(r.b)("li",{parentName:"ul"},"visibility (",Object(r.b)("inlineCode",{parentName:"li"},"PRIVATE"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ALL_USERS"),")"))),Object(r.b)("li",{parentName:"ul"},"Runtime",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"RAM/disk requirements"),Object(r.b)("li",{parentName:"ul"},"other runtime settings (e.g., pointers to dependencies and secrets to be injected at startup time)")))),Object(r.b)("p",null,"Users can start/run multiple instances of each app (subject to authorization, see below)."),Object(r.b)("p",null,"Apps are mostly ",Object(r.b)("strong",{parentName:"p"},"immutable"),', meaning once uploaded, they cannot be changed (except for visibility).\nTo "update" an app, one has to upload a new version.'),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Internally, H2O AI Cloud treats every app name/version combination as a separate entity.\nThe UI then uses the app name to link several versions together; however each can have different\ntitle, description, owner, instances, etc."))),Object(r.b)("h2",{id:"app-instance"},"App Instance"),Object(r.b)("p",null,"App instance is a running instance of an app wit the following metadata:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"pointer to the corresponding app"),Object(r.b)("li",{parentName:"ul"},"owner (the person who started it)"),Object(r.b)("li",{parentName:"ul"},"visibility (",Object(r.b)("inlineCode",{parentName:"li"},"PRIVATE"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ALL_USERS"),", ",Object(r.b)("inlineCode",{parentName:"li"},"PUBLIC"),")")),Object(r.b)("p",null,"H2O AI Cloud fully manages the app instance lifecycle on behalf of its users."),Object(r.b)("p",null,"Instances can be stateless or stateful (depending on the app configuration)\nand can use external dependencies (e.g., AWS S3, Driverless AI)."),Object(r.b)("p",null,"Under the hood, each instance consists of several k8s resources, specifically, each instance is running in its\nown k8s ",Object(r.b)("inlineCode",{parentName:"p"},"pod"),", under its own k8s ",Object(r.b)("inlineCode",{parentName:"p"},"service"),", accessible via a H2O AI Cloud subdomain (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"https://1234.q8s.h2o.ai"),").\nIt can optionally include other resources, such as PVCs, Configmaps, etc."),Object(r.b)("h2",{id:"authorization"},"Authorization"),Object(r.b)("h3",{id:"app-access-authorization"},"App Access Authorization"),Object(r.b)("p",null,"Access to apps is governed by the following rules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PRIVATE")," apps are only visible to/runnable by the owner;\nthese are typically created via ",Object(r.b)("inlineCode",{parentName:"li"},"q8s-cli bundle deploy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ALL_USERS"),' apps are visible to/runnable by all signed-in users; they are also visible on the "Catalog" page;\nthese are typically created via ',Object(r.b)("inlineCode",{parentName:"li"},"q8s-cli bundle import")),Object(r.b)("li",{parentName:"ul"},"App owner can manage (view, update, delete) her apps via ",Object(r.b)("inlineCode",{parentName:"li"},"q8s-cli app ..."),' or via the "My Apps" page.')),Object(r.b)("h3",{id:"instance-access-authorization"},"Instance Access Authorization"),Object(r.b)("p",null,"Access to app instances is governed by the following rules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PRIVATE")," instances are only visible to the owner and the owner of the corresponding app (the app owner has only read access)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ALL_USERS")," instances are visible to all signed-in users"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PUBLIC")," instances are visible to anyone on the Internet"),Object(r.b)("li",{parentName:"ul"},"Instance owner can manage (view, update, terminate) her instances via ",Object(r.b)("inlineCode",{parentName:"li"},"q8s-cli instance"),' or via the "My instances" page.')),Object(r.b)("p",null,"Note that app/instance visibility can be modified by the owner, e.g., using ",Object(r.b)("inlineCode",{parentName:"p"},"q8s-cli (app|instance) update <id> -v <visibility>"),'\nor via the "My Apps"/"My Instances" page.'),Object(r.b)("p",null,"Admin access is exempt from all the authorization rules (i.e., admins have full access to all apps/instances)."))}p.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);