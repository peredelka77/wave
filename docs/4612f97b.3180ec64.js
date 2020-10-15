(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{122:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(6),a=(t(0),t(287)),c={title:"Form / Color Picker"},i={unversionedId:"examples/color-picker",id:"examples/color-picker",isDocsHomePage:!1,title:"Form / Color Picker",description:"Use a color picker to allow a user to select a color.",source:"@site/docs/examples/color-picker.md",slug:"/examples/color-picker",permalink:"/wave/docs/examples/color-picker",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/color-picker.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Date Picker",permalink:"/wave/docs/examples/date-picker"},next:{title:"Form / Swatch Picker",permalink:"/wave/docs/examples/swatch-picker"}},l=[],p={rightToc:l};function s(e){var r=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,c,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use a color picker to allow a user to select a color."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+t(344).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, listen, ui\n\n\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'color={q.args.color}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.color_picker(name='color', label='Pick a color', value='#F25F5C'),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n\n\nlisten('/demo', serve)\n")))}s.isMDXComponent=!0},287:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return t?o.a.createElement(d,i(i({ref:r},p),{},{components:t})):o.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},344:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/color-picker-d5462fd8a2dcc2b3d980e2402a61d930.png"}}]);