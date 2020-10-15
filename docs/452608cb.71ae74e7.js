(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(287)),u={title:"Form / Buttons"},i={unversionedId:"examples/buttons",id:"examples/buttons",isDocsHomePage:!1,title:"Form / Buttons",description:"Use the ui.buttons() function to group related buttons.",source:"@site/docs/examples/buttons.md",slug:"/examples/buttons",permalink:"/wave/docs/examples/buttons",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/buttons.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Button",permalink:"/wave/docs/examples/button"},next:{title:"Form / Checkbox",permalink:"/wave/docs/examples/checkbox"}},s=[],c={rightToc:s};function l(e){var t=e.components,u=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,u,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"ui.buttons()")," function to group related buttons."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(343).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, listen, ui\n\n\nasync def serve(q: Q):\n    if 'standard_button' in q.args:\n        q.page['example'].items = [\n            ui.text(f'primary_button={q.args.primary_button}'),\n            ui.text(f'standard_button={q.args.standard_button}'),\n            ui.text(f'standard_disabled_button={q.args.standard_disabled_button}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.buttons([\n                ui.button(name='primary_button', label='Primary', primary=True),\n                ui.button(name='standard_button', label='Standard'),\n                ui.button(name='standard_disabled_button', label='Standard', disabled=True),\n            ]),\n        ])\n    await q.page.save()\n\n\nlisten('/demo', serve)\n")))}l.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},343:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);