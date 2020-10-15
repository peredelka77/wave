(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{212:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return y})),r.d(n,"default",(function(){return c}));var t=r(2),s=r(6),i=(r(0),r(287)),a={title:"Graphics / Spline"},l={unversionedId:"examples/graphics-spline",id:"examples/graphics-spline",isDocsHomePage:!1,title:"Graphics / Spline",description:"Use the graphics module to render splines.",source:"@site/docs/examples/graphics-spline.md",slug:"/examples/graphics-spline",permalink:"/wave/docs/examples/graphics-spline",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/graphics-spline.md",version:"current",sidebar:"someSidebar",previous:{title:"Graphics / Primitives",permalink:"/wave/docs/examples/graphics-primitives"},next:{title:"Graphics / Clock",permalink:"/wave/docs/examples/graphics-clock"}},y=[],o={rightToc:y};function c(e){var n=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},o,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use the graphics module to render splines."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+r(405).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"import random\nfrom h2o_wave import site, ui, graphics as g\n\nx = [i * 20 for i in range(50)]\ny = [\n    88, 100, 116, 128, 126, 128, 118, 108, 121, 120, 99, 113, 117, 103, 98, 90, 104, 98, 82, 102, 104, 89, 87, 69,\n    88, 97, 91, 105, 98, 86, 90, 107, 97, 107, 108, 128, 144, 148, 126, 106, 89, 99, 78, 70, 69, 64, 45, 29, 27, 38\n]\ny0 = [v - random.randint(5, min(y)) for v in y]\n\nline_style = dict(fill='none', stroke='crimson', stroke_width=4)\narea_style = dict(fill='crimson')\n\nsplines = [\n    # Lines\n    g.spline(x=x, y=y, **line_style),  # same as curve='linear'\n    g.spline(x=x, y=y, curve='basis', **line_style),\n    g.spline(x=x, y=y, curve='basis-closed', **line_style),\n    g.spline(x=x, y=y, curve='basis-open', **line_style),\n    g.spline(x=x, y=y, curve='cardinal', **line_style),\n    g.spline(x=x, y=y, curve='cardinal-closed', **line_style),\n    g.spline(x=x, y=y, curve='cardinal-open', **line_style),\n    g.spline(x=x, y=y, curve='smooth', **line_style),\n    g.spline(x=x, y=y, curve='smooth-closed', **line_style),\n    g.spline(x=x, y=y, curve='smooth-open', **line_style),\n    g.spline(x=x, y=y, curve='linear', **line_style),\n    g.spline(x=x, y=y, curve='linear-closed', **line_style),\n    g.spline(x=x, y=y, curve='monotone-x', **line_style),\n    g.spline(x=x, y=y, curve='monotone-y', **line_style),\n    g.spline(x=x, y=y, curve='natural', **line_style),\n    g.spline(x=x, y=y, curve='step', **line_style),\n    g.spline(x=x, y=y, curve='step-after', **line_style),\n    g.spline(x=x, y=y, curve='step-before', **line_style),\n    # Areas\n    g.spline(x=x, y=y, y0=y0, **area_style),  # same as curve='linear'\n    g.spline(x=x, y=y, y0=y0, curve='basis', **area_style),\n    g.spline(x=x, y=y, y0=[], curve='basis', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='basis-open', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='cardinal', **area_style),\n    g.spline(x=x, y=y, y0=[], curve='cardinal', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='cardinal-open', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='smooth', **area_style),\n    g.spline(x=x, y=y, y0=[], curve='smooth', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='smooth-open', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='linear', **area_style),\n    g.spline(x=x, y=y, y0=[], curve='linear', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='monotone-x', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='monotone-y', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='natural', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='step', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='step-after', **area_style),\n    g.spline(x=x, y=y, y0=y0, curve='step-before', **area_style),\n]\n\npage = site['/demo']\nrow, col = 1, 1\nfor spline in splines:\n    page[f'spline_{col}_{row}'] = ui.graphics_card(\n        box=f'{col} {row} 3 1', view_box='0 0 1000 150', width='100%', height='100%',\n        stage=g.stage(\n            text=g.text(text=spline.curve or '', y=40, font_size=40),\n            spline=spline,\n        ),\n    )\n    col += 3\n    if col > 11:\n        row, col = row + 1, 1\n\npage.save()\n")))}c.isMDXComponent=!0},287:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return g}));var t=r(0),s=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function y(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=s.a.createContext({}),c=function(e){var n=s.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=c(e.components);return s.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},x=s.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,o=y(e,["components","mdxType","originalType","parentName"]),p=c(r),x=t,g=p["".concat(a,".").concat(x)]||p[x]||u[x]||i;return r?s.a.createElement(g,l(l({ref:n},o),{},{components:r})):s.a.createElement(g,l({ref:n},o))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=x;var l={};for(var y in n)hasOwnProperty.call(n,y)&&(l[y]=n[y]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var o=2;o<i;o++)a[o]=r[o];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,r)}x.displayName="MDXCreateElement"},405:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/graphics-spline-76e8a919798c7e38711618ef9b414f78.png"}}]);