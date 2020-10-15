(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(287)),l={title:"Plot / Interval / Polar"},i={unversionedId:"examples/plot-interval-polar",id:"examples/plot-interval-polar",isDocsHomePage:!1,title:"Plot / Interval / Polar",description:"Make a rose plot (a bar plot in polar coordinates).",source:"@site/docs/examples/plot-interval-polar.md",slug:"/examples/plot-interval-polar",permalink:"/wave/docs/examples/plot-interval-polar",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-polar.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Stacked / Grouped / Transpose",permalink:"/wave/docs/examples/plot-interval-stacked-grouped-transpose"},next:{title:"Plot / Interval / Polar / Stacked",permalink:"/wave/docs/examples/plot-interval-polar-stacked"}},p=[],c={rightToc:p};function s(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a rose plot (a bar plot in polar coordinates)."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(395).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 24\nf = FakeCategoricalSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Interval, polar',\n    data=data('product price', n),\n    plot=ui.plot([ui.mark(coord='polar', type='interval', x='=product', y='=price', y_min=0)])\n))\nv.data = [(c, x) for c, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")))}s.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},395:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-interval-polar-e54d13fed4e4ea004992a91a9e4644df.png"}}]);