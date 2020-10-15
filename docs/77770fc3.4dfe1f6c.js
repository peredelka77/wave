(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{163:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(2),a=t(6),o=(t(0),t(287)),c={title:"Form / Frame / Path"},i={unversionedId:"examples/form-frame-path",id:"examples/form-frame-path",isDocsHomePage:!1,title:"Form / Frame / Path",description:"Use a frame component in a form card to display external web pages.",source:"@site/docs/examples/form-frame-path.md",slug:"/examples/form-frame-path",permalink:"/wave/docs/examples/form-frame-path",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/form-frame-path.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Frame",permalink:"/wave/docs/examples/form-frame"},next:{title:"Form / Menu",permalink:"/wave/docs/examples/form-menu"}},p=[],m={rightToc:p};function s(e){var r=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,c,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use a frame component in a form card to display external web pages."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+t(369).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\n\npage['example'] = ui.form_card(\n    box='1 1 6 5',\n    items=[\n        ui.frame(path='https://example.com', height='400px')\n    ]\n)\n\npage.save()\n")))}s.isMDXComponent=!0},287:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=a.a.createContext({}),s=function(e){var r=a.a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return a.a.createElement(m.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(t),f=n,d=l["".concat(c,".").concat(f)]||l[f]||u[f]||o;return t?a.a.createElement(d,i(i({ref:r},m),{},{components:t})):a.a.createElement(d,i({ref:r},m))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var m=2;m<o;m++)c[m]=t[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},369:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/form-frame-path-e829e3ff6a85bcc0e461e8c2cb505c32.png"}}]);