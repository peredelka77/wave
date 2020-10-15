(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{287:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,p(p({ref:t},c),{},{components:n})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-d3-27f0867826e9547bb4bb23e79517892b.png"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(287)),i={title:"Plot / D3.js"},p={unversionedId:"examples/plot-d3",id:"examples/plot-d3",isDocsHomePage:!1,title:"Plot / D3.js",description:"Create custom plots using D3.js.",source:"@site/docs/examples/plot-d3.md",slug:"/examples/plot-d3",permalink:"/wave/docs/examples/plot-d3",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-d3.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Plotly",permalink:"/wave/docs/examples/plot-plotly"},next:{title:"Pixel Art",permalink:"/wave/docs/examples/pixel-art"}},s=[],c={rightToc:s};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create custom plots using D3.js."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(307).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import json\nimport os.path\nfrom h2o_wave import site, ui\n\n# The example D3 Javascript file is located in the same directory as this example; get its path\nd3_js_script_filename = os.path.join(os.path.dirname(__file__), 'plot_d3.js')\n\n# Upload the script to the server. Typically, you'd do this only once, when your app is installed.\nd3_js_script_path, = site.upload([d3_js_script_filename])\n\nhtml_template = '''\n<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://d3js.org/d3.v5.min.js\"><\/script>\n</head>\n<body style=\"margin:0; padding:0\">\n  <script src=\"{script_path}\"><\/script>\n  <script>render({data})<\/script>\n</body>\n</html>\n'''\n\n# This data is hard-coded here for simplicity.\n# During production use, this data would be the output of some compute routine.\ndata = [\n    [11975, 5871, 8916, 2868],\n    [1951, 10048, 2060, 6171],\n    [8010, 16145, 8090, 8045],\n    [1013, 990, 940, 6907],\n]\n\n# Plug JSON-serialized data into our html template\nhtml = html_template.format(script_path=d3_js_script_path, data=json.dumps(data))\n\npage = site['/demo']\npage['example'] = ui.frame_card(\n    box='1 1 5 8',\n    title='D3 Chord Diagram',\n    content=html,\n)\npage.save()\n")))}l.isMDXComponent=!0}}]);