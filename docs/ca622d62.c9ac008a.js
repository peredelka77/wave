(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{241:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),i=(t(0),t(287)),o={title:"Form / Slider"},s={unversionedId:"examples/slider",id:"examples/slider",isDocsHomePage:!1,title:"Form / Slider",description:"Use a slider to allow users to set a value within a specific range.",source:"@site/docs/examples/slider.md",slug:"/examples/slider",permalink:"/wave/docs/examples/slider",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/slider.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Spinbox",permalink:"/wave/docs/examples/spinbox"},next:{title:"Form / Range Slider",permalink:"/wave/docs/examples/range-slider"}},l=[],c={rightToc:l};function u(e){var r=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use a slider to allow users to set a value within a specific range."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+t(426).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, listen, ui\n\n\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'slider={q.args.slider}'),\n            ui.text(f'slider_zero={q.args.slider_zero}'),\n            ui.text(f'slider_disabled={q.args.slider_disabled}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.slider(name='slider', label='Standard slider', min=0, max=100, step=10, value=30),\n            ui.slider(name='slider_zero', label='Origin from zero', min=-10, max=10, step=1, value=-3),\n            ui.slider(name='slider_disabled', label='Disabled slider', min=0, max=100, step=10, value=30,\n                      disabled=True),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n\n\nlisten('/demo', serve)\n")))}u.isMDXComponent=!0},287:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?a.a.createElement(f,s(s({ref:r},c),{},{components:t})):a.a.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},426:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/slider-06551b8ad6f45a0aa69c946c5d8332d1.png"}}]);