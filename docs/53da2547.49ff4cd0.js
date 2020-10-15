(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(287)),i={title:"Plot / Area / Groups"},p={unversionedId:"examples/plot-area-groups",id:"examples/plot-area-groups",isDocsHomePage:!1,title:"Plot / Area / Groups",description:"Make an area plot showing multiple categories.",source:"@site/docs/examples/plot-area-groups.md",slug:"/examples/plot-area-groups",permalink:"/wave/docs/examples/plot-area-groups",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-area-groups.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Area",permalink:"/wave/docs/examples/plot-area"},next:{title:"Plot / Area / Negative",permalink:"/wave/docs/examples/plot-area-negative"}},c=[],l={rightToc:c};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make an area plot showing multiple categories."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(354).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeMultiTimeSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 50\nf = FakeMultiTimeSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Area, groups',\n    data=data('product date price', n * 5),\n    plot=ui.plot([ui.mark(type='area', x_scale='time', x='=date', y='=price', color='=product', y_min=0)])\n))\n\nv.data = [(g, t, x) for x in [f.next() for _ in range(n)] for g, t, x, dx in x]\n\npage.save()\n")))}u.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?a.a.createElement(f,p(p({ref:t},l),{},{components:r})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},354:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-area-groups-26a91066657837eeb3ddd3d83dafdc0a.png"}}]);