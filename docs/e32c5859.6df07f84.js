(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),i=(r(0),r(287)),o={title:"Form / Text / Sizes"},s={unversionedId:"examples/text-sizes",id:"examples/text-sizes",isDocsHomePage:!1,title:"Form / Text / Sizes",description:"Use text size variants to display formatted text using predefined font sizes.",source:"@site/docs/examples/text-sizes.md",slug:"/examples/text-sizes",permalink:"/wave/docs/examples/text-sizes",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/text-sizes.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Text",permalink:"/wave/docs/examples/text"},next:{title:"Form / Label",permalink:"/wave/docs/examples/label"}},c=[],u={rightToc:c};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use text size variants to display formatted text using predefined font sizes."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+r(421).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\n\npage['example'] = ui.form_card(\n    box='1 1 4 -1',\n    items=[\n        ui.separator('Separator'),\n        ui.text_xl('Extra large text'),\n        ui.text_l('Large text'),\n        ui.text('Normal text'),\n        ui.text_m('Medium text'),\n        ui.text_s('Small text'),\n        ui.text_xs('Extra small text'),\n\n        # Using `ui.text()` with a `size` argument produces similar results:\n        ui.separator('Separator'),\n        ui.text('Extra large text', size='xl'),\n        ui.text('Large text', size='l'),\n        ui.text('Normal text'),\n        ui.text('Medium text', size='m'),\n        ui.text('Small text', size='s'),\n        ui.text('Extra small text', size='xs'),\n    ],\n)\npage.save()\n")))}l.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},x=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),x=n,f=p["".concat(o,".").concat(x)]||p[x]||m[x]||i;return r?a.a.createElement(f,s(s({ref:t},u),{},{components:r})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=x;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}x.displayName="MDXCreateElement"},421:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/text-sizes-5d78df884df4f57688aef7d5b7b68349.png"}}]);