(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return x})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(287)),i={title:"Form / Textbox"},x={unversionedId:"examples/textbox",id:"examples/textbox",isDocsHomePage:!1,title:"Form / Textbox",description:"Use a textbox to allow users to provide text inputs.",source:"@site/docs/examples/textbox.md",slug:"/examples/textbox",permalink:"/wave/docs/examples/textbox",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/textbox.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Message Bar",permalink:"/wave/docs/examples/message-bar"},next:{title:"Form / Textbox / Trigger",permalink:"/wave/docs/examples/textbox-trigger"}},l=[],b={rightToc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use a textbox to allow users to provide text inputs."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(371).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, listen, ui\n\n\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'textbox={q.args.textbox}'),\n            ui.text(f'textbox_disabled={q.args.textbox_disabled}'),\n            ui.text(f'textbox_readonly={q.args.textbox_readonly}'),\n            ui.text(f'textbox_required={q.args.textbox_required}'),\n            ui.text(f'textbox_error={q.args.textbox_error}'),\n            ui.text(f'textbox_mask={q.args.textbox_mask}'),\n            ui.text(f'textbox_icon={q.args.textbox_icon}'),\n            ui.text(f'textbox_prefix={q.args.textbox_prefix}'),\n            ui.text(f'textbox_suffix={q.args.textbox_suffix}'),\n            ui.text(f'textbox_placeholder={q.args.textbox_placeholder}'),\n            ui.text(f'textbox_disabled_placeholder={q.args.textbox_disabled_placeholder}'),\n            ui.text(f'textbox_multiline={q.args.textbox_multiline}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.textbox(name='textbox', label='Standard'),\n            ui.textbox(name='textbox_disabled', label='Disabled', value='I am disabled', disabled=True),\n            ui.textbox(name='textbox_readonly', label='Read-only', value='I am read-only', readonly=True),\n            ui.textbox(name='textbox_required', label='Required', required=True),\n            ui.textbox(name='textbox_error', label='With error message', error='I have an error'),\n            ui.textbox(name='textbox_mask', label='With input mask', mask='(999) 999 - 9999'),\n            ui.textbox(name='textbox_icon', label='With icon', icon='Calendar'),\n            ui.textbox(name='textbox_prefix', label='With prefix', prefix='http://'),\n            ui.textbox(name='textbox_suffix', label='With suffix', suffix='@h2o.ai'),\n            ui.textbox(name='textbox_placeholder', label='With placeholder', placeholder='I need some input'),\n            ui.textbox(name='textbox_disabled_placeholder', label='Disabled with placeholder', disabled=True,\n                       placeholder='I am disabled'),\n            ui.textbox(name='textbox_multiline', label='Multiline textarea', multiline=True),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n\n\nlisten('/demo', serve)\n")))}u.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):x(x({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(r),p=n,d=s["".concat(i,".").concat(p)]||s[p]||c[p]||o;return r?a.a.createElement(d,x(x({ref:t},b),{},{components:r})):a.a.createElement(d,x({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var x={};for(var l in t)hasOwnProperty.call(t,l)&&(x[l]=t[l]);x.originalType=e,x.mdxType="string"==typeof e?e:n,i[1]=x;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},371:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/textbox-ad4ead8b116b9f18042ba1302cf471c9.png"}}]);