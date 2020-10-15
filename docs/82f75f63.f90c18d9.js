(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var o=r(2),n=r(6),c=(r(0),r(287)),a={title:"Form / Choice Group"},i={unversionedId:"examples/choice-group",id:"examples/choice-group",isDocsHomePage:!1,title:"Form / Choice Group",description:"Use choice groups to let users select one option from two or more choices.",source:"@site/docs/examples/choice-group.md",slug:"/examples/choice-group",permalink:"/wave/docs/examples/choice-group",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/choice-group.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Dropdown",permalink:"/wave/docs/examples/dropdown"},next:{title:"Form / Combobox",permalink:"/wave/docs/examples/combobox"}},u=[],s={rightToc:u};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use choice groups to let users select one option from two or more choices."),Object(c.b)("div",{className:"cover",style:{backgroundImage:"url("+r(376).default+")"}}),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import Q, listen, ui\n\nchoices = [\n    ui.choice('A', 'Option A'),\n    ui.choice('B', 'Option B'),\n    ui.choice('C', 'Option C', disabled=True),\n    ui.choice('D', 'Option D'),\n]\n\n\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'selected={q.args.choice_group}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.choice_group(name='choice_group', label='Pick one', value='B', required=True, choices=choices),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n\n\nlisten('/demo', serve)\n")))}p.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,m=l["".concat(a,".").concat(d)]||l[d]||g[d]||c;return r?n.a.createElement(m,i(i({ref:t},s),{},{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},376:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);