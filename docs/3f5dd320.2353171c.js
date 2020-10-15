(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(287)),l={title:"Plot / Line / Labels / Occlusion"},i={unversionedId:"examples/plot-line-labels-no-overlap",id:"examples/plot-line-labels-no-overlap",isDocsHomePage:!1,title:"Plot / Line / Labels / Occlusion",description:"Make a line plot with non-overlapping labels.",source:"@site/docs/examples/plot-line-labels-no-overlap.md",slug:"/examples/plot-line-labels-no-overlap",permalink:"/wave/docs/examples/plot-line-labels-no-overlap",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-line-labels-no-overlap.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Line / Labels/ Stroked",permalink:"/wave/docs/examples/plot-line-labels-stroked"},next:{title:"Plot / Line / Annotation",permalink:"/wave/docs/examples/plot-line-annotation"}},p=[],c={rightToc:p};function s(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,l,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a line plot with non-overlapping labels."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+t(339).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeTimeSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 50\nf = FakeTimeSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Remove overlapping labels',\n    data=data('date price', n),\n    plot=ui.plot([ui.mark(type='line', x_scale='time', x='=date', y='=price', y_min=0,\n                          label='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n                          label_overlap='hide')])\n))\nv.data = [(t, x) for t, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")))}s.isMDXComponent=!0},287:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||o;return t?a.a.createElement(d,i(i({ref:n},c),{},{components:t})):a.a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},339:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/plot-line-labels-no-overlap-6597ed5a76ab4f19c1f7e189cbc21624.png"}}]);