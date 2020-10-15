(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(287)),i={title:"Form / Text"},c={unversionedId:"examples/text",id:"examples/text",isDocsHomePage:!1,title:"Form / Text",description:"Use markdown in a text component to display formatted content within a form.",source:"@site/docs/examples/text.md",slug:"/examples/text",permalink:"/wave/docs/examples/text",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/text.md",version:"current",sidebar:"someSidebar",previous:{title:"Form",permalink:"/wave/docs/examples/form"},next:{title:"Form / Text / Sizes",permalink:"/wave/docs/examples/text-sizes"}},p=[],u={rightToc:p};function l(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use markdown in a text component to display formatted content within a form."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+n(352).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import site, ui\n\npage = site['/demo']\n\nsample_markdown = '''\nThe **quick** _brown_ fox jumped over the lazy dog.\n\nBlock quote:\n\n> The quick brown fox jumped over the lazy dog.\n\nUnordered list:\n\n- The quick brown fox jumped over the lazy dog.\n- The quick brown fox jumped over the lazy dog.\n- The quick brown fox jumped over the lazy dog.\n\nOrdered list:\n\n1. The quick brown fox jumped over the lazy dog.\n1. The quick brown fox jumped over the lazy dog.\n1. The quick brown fox jumped over the lazy dog.\n\nImage:\n\n![Monty Python](https://upload.wikimedia.org/wikipedia/en/c/cb/Flyingcircus_2.jpg)\n\nLinks:\n\nHere's a [link to an image](https://upload.wikimedia.org/wikipedia/en/c/cb/Flyingcircus_2.jpg).\n\nTable:\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Item 1   | Item 2   | Item 3   |\n| Item 1   | Item 2   | Item 3   |\n| Item 1   | Item 2   | Item 3   |\n'''\n\npage['example'] = ui.form_card(\n    box='1 1 4 -1',\n    items=[ui.text(sample_markdown)]\n)\npage.save()\n")))}l.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},352:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/text-3c5275bb7d17545e6fd8952074ab9d13.png"}}]);