(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(287)),l={title:"Plot / Line / Labels/ Stroked"},i={unversionedId:"examples/plot-line-labels-stroked",id:"examples/plot-line-labels-stroked",isDocsHomePage:!1,title:"Plot / Line / Labels/ Stroked",description:"Customize label rendering: add a subtle outline to labels to improve readability.",source:"@site/docs/examples/plot-line-labels-stroked.md",slug:"/examples/plot-line-labels-stroked",permalink:"/wave/docs/examples/plot-line-labels-stroked",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-line-labels-stroked.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Line / Labels",permalink:"/wave/docs/examples/plot-line-labels"},next:{title:"Plot / Line / Labels / Occlusion",permalink:"/wave/docs/examples/plot-line-labels-no-overlap"}},s=[],c={rightToc:s};function p(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Customize label rendering: add a subtle outline to labels to improve readability."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(356).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeTimeSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 50\nf = FakeTimeSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Labels, less messy',\n    data=data('date price', n),\n    plot=ui.plot([ui.mark(type='line', x_scale='time', x='=date', y='=price', y_min=0,\n                          label='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n                          label_fill_color='rgba(0,0,0,0.65)', label_stroke_color='#fff', label_stroke_size=2)])\n))\nv.data = [(t, x) for t, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")))}p.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},356:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-line-labels-stroked-8f085e306871e3c87d798b4c4206fc11.png"}}]);