(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{266:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return o})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return u}));var t=n(2),a=n(6),i=(n(0),n(287)),l={title:"Form / Range Slider"},o={unversionedId:"examples/range-slider",id:"examples/range-slider",isDocsHomePage:!1,title:"Form / Range Slider",description:"Use a range slider to allow users to select a value range (from, to).",source:"@site/docs/examples/range-slider.md",slug:"/examples/range-slider",permalink:"/wave/docs/examples/range-slider",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/range-slider.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Slider",permalink:"/wave/docs/examples/slider"},next:{title:"Form / Date Picker",permalink:"/wave/docs/examples/date-picker"}},s=[],c={rightToc:s};function u(e){var r=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,l,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use a range slider to allow users to select a value range (from, to)."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+n(427).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, listen, ui\n\n\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'range_slider={q.args.range_slider}'),\n            ui.text(f'range_slider_step={q.args.range_slider_step}'),\n            ui.text(f'range_slider_disabled={q.args.range_slider_disabled}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.range_slider(name='range_slider', label='Default slider'),\n            ui.range_slider(name='range_slider_step', label='Step slider', min=0, max=1000, step=100, min_value=0, max_value=100),\n            ui.range_slider(name='range_slider_disabled', label='Disabled slider', min=0, max=100, step=10, min_value=0, \n              max_value=70, disabled=True),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n\n\nlisten('/demo', serve)\n")))}u.isMDXComponent=!0},287:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var r=a.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=t,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(f,o(o({ref:r},c),{},{components:n})):a.a.createElement(f,o({ref:r},c))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},427:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/range-slider-7394a0b0ebb5aace4e83bb302adc6fc3.png"}}]);