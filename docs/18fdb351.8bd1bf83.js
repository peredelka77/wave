(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{287:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return u}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g=i.a.createContext({}),d=function(e){var n=i.a.useContext(g),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=d(e.components);return i.a.createElement(g.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},_=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),l=d(r),_=t,u=l["".concat(o,".").concat(_)]||l[_]||p[_]||a;return r?i.a.createElement(u,c(c({ref:n},g),{},{components:r})):i.a.createElement(u,c({ref:n},g))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=_;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var g=2;g<a;g++)o[g]=r[g];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}_.displayName="MDXCreateElement"},311:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/glider-gun-8acc444425a295f814222e258d6ca3e3.png"},76:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return d}));var t=r(2),i=r(6),a=(r(0),r(287)),o={title:"Graphics / Glider Gun"},c={unversionedId:"examples/glider-gun",id:"examples/glider-gun",isDocsHomePage:!1,title:"Graphics / Glider Gun",description:"Use the graphics API to play Conway's Game of Life - Gosper's Glider Gun",source:"@site/docs/examples/glider-gun.md",slug:"/examples/glider-gun",permalink:"/wave/docs/examples/glider-gun",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/glider-gun.md",version:"current",sidebar:"someSidebar",previous:{title:"Graphics / Hilbert",permalink:"/wave/docs/examples/graphics-hilbert"},next:{title:"Package h2o_wave",permalink:"/wave/docs/api/index"}},s=[],g={rightToc:s};function d(e){var n=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},g,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use the graphics API to play Conway's Game of Life - Gosper's Glider Gun\n",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"}),"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life")),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(311).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"import time\nfrom copy import deepcopy\nfrom h2o_wave import site, ui, graphics as g\n\n\ndef get_neighbors(row, col):\n    neighbors = [\n        (r, c) for r in range(row - 1, row + 2) for c in range(col - 1, col + 2)\n    ]\n    neighbors.remove((row, col))\n    return neighbors\n\n\ndef get_num_living(grid_state, neighbors):\n    return sum([grid_state.get(x, 0) for x in neighbors])\n\n\ndef evaluate_grid(grid_state):\n    new_grid_state = deepcopy(grid_state)\n    for cell, state in grid_state.items():\n        neighbors = get_neighbors(*cell)\n        n_living = get_num_living(grid_state, neighbors)\n        if state == 0 and n_living == 3:\n            new_grid_state[cell] = 1\n        elif state == 1:\n            if not 1 < n_living < 4:\n                new_grid_state[cell] = 0\n    return new_grid_state\n\n\ndef get_empty_state(n_rows, n_cols):\n    return {(r, c): 0 for r in range(n_rows) for c in range(n_cols)}\n\n\ndef apply_start_state(grid_state, pattern):\n    for x in pattern:\n        grid_state[x] = 1\n    return grid_state\n\n\ndef update_grid(page, grid_state, n_rows, n_cols, background):\n    scene = page['game'].scene\n    for row in range(n_rows):\n        for col in range(n_cols):\n            if grid_state[(row, col)] == 1:\n                g.draw(scene[f'cell_{row}_{col}'], fill='black')\n            else:\n                g.draw(scene[f'cell_{row}_{col}'], fill=background)\n    page.save()\n\n\ndef create_grid(n_rows, n_cols, fill, width, height, stroke, stroke_width):\n    grid = {}\n    for row in range(n_rows):\n        for col in range(n_cols):\n            grid[f'cell_{row}_{col}'] = g.rect(\n                x=col * width,\n                y=row * height,\n                width=width,\n                height=height,\n                fill=fill,\n                stroke=stroke,\n                stroke_width=stroke_width,\n            )\n    return grid\n\n\ndef render(pattern):\n    page = site['/demo']\n\n    page_cols = 4\n    page_rows = 5\n\n    box_width = 134\n    box_height = 76\n    gap = 15\n\n    max_width = box_width * page_cols + (page_cols - 1) * gap\n    max_height = box_height * page_rows + (page_rows - 1) * gap\n\n    width = 10\n    height = 10\n\n    grid_cols = max_width // width\n    grid_rows = max_height // height\n\n    background = 'whitesmoke'\n    stroke = 'gainsboro'\n    stroke_width = 1\n\n    grid = create_grid(\n        grid_rows, grid_cols, background, width, height, stroke, stroke_width\n    )\n    page['game'] = ui.graphics_card(\n        box=f'1 1 {page_cols} {page_rows}',\n        view_box=f'0 0 {max_width} {max_height}',\n        width='100%',\n        height='100%',\n        scene=g.scene(**grid),\n    )\n\n    grid_state = get_empty_state(grid_rows, grid_cols)\n    update_grid(page, grid_state, grid_rows, grid_cols, background)\n\n    grid_state = apply_start_state(grid_state, pattern)\n\n    update_grid(page, grid_state, grid_rows, grid_cols, background)\n\n    while True:\n        time.sleep(0.1)\n        new_grid_state = evaluate_grid(grid_state)\n        update_grid(page, new_grid_state, grid_rows, grid_cols, background)\n        grid_state = new_grid_state\n\n\ndef make_glider_gun(r, c):\n    return [\n        (r, c + 24),\n        (r + 1, c + 22),\n        (r + 1, c + 24),\n        (r + 2, c + 12),\n        (r + 2, c + 13),\n        (r + 2, c + 20),\n        (r + 2, c + 21),\n        (r + 2, c + 34),\n        (r + 2, c + 35),\n        (r + 3, c + 11),\n        (r + 3, c + 15),\n        (r + 3, c + 20),\n        (r + 3, c + 21),\n        (r + 3, c + 34),\n        (r + 3, c + 35),\n        (r + 4, c + 0),\n        (r + 4, c + 1),\n        (r + 4, c + 10),\n        (r + 4, c + 16),\n        (r + 4, c + 20),\n        (r + 4, c + 21),\n        (r + 5, c + 0),\n        (r + 5, c + 1),\n        (r + 5, c + 10),\n        (r + 5, c + 14),\n        (r + 5, c + 16),\n        (r + 5, c + 17),\n        (r + 5, c + 22),\n        (r + 5, c + 24),\n        (r + 6, c + 10),\n        (r + 6, c + 16),\n        (r + 6, c + 24),\n        (r + 7, c + 11),\n        (r + 7, c + 15),\n        (r + 8, c + 12),\n        (r + 8, c + 13),\n    ]\n\n\nrender(make_glider_gun(2, 2))\n")))}d.isMDXComponent=!0}}]);