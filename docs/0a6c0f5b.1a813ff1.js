(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{287:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||l;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},471:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},488:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(287)),i={title:"Tutorial: System Monitor"},o={unversionedId:"tutorial-monitor",id:"tutorial-monitor",isDocsHomePage:!1,title:"Tutorial: System Monitor",description:"In this tutorial, we'll put our learnings from the first and second tutorials to some real-world use: a simple system monitoring tool that displays CPU, memory and network stats on a web page.",source:"@site/docs/tutorial-monitor.md",slug:"/tutorial-monitor",permalink:"/wave/docs/tutorial-monitor",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/tutorial-monitor.md",version:"current",sidebar:"someSidebar",previous:{title:"Tutorial: Beer Wall",permalink:"/wave/docs/tutorial-beer"},next:{title:"Tutorial: Bean Counter",permalink:"/wave/docs/tutorial-counter"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1: Install dependencies",id:"step-1-install-dependencies",children:[]},{value:"Step 2: Monitor CPU usage",id:"step-2-monitor-cpu-usage",children:[]},{value:"Step 3: Run your program",id:"step-3-run-your-program",children:[]},{value:"Step 4: Understand your program",id:"step-4-understand-your-program",children:[{value:"Using a stats card",id:"using-a-stats-card",children:[]},{value:"Declaring a data buffer",id:"declaring-a-data-buffer",children:[]},{value:"Inserting into the data buffer",id:"inserting-into-the-data-buffer",children:[]}]},{value:"Step 5: Monitor memory usage",id:"step-5-monitor-memory-usage",children:[]},{value:"Step 6: Run your program again",id:"step-6-run-your-program-again",children:[]},{value:"Exercise",id:"exercise",children:[]},{value:"Summary",id:"summary",children:[]}],s={rightToc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this tutorial, we'll put our learnings from the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/tutorial-hello"}),"first")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/tutorial-beer"}),"second")," tutorials to some real-world use: a simple system monitoring tool that displays CPU, memory and network stats on a web page. "),Object(l.b)("p",null,Object(l.b)("img",{alt:"CPU",src:a(471).default})),Object(l.b)("p",null,"For example, if you have a spare 256-node Raspberry Pi cluster lying somewhere, you can run this program to each node and monitor your entire cluster's system utilization from one place. How cool is that?"),Object(l.b)("p",null,"We'll also introduce a new concept, called ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/buffers"}),"data buffers"),", which allows you to use the Wave server to store ",Object(l.b)("em",{parentName:"p"},"rows")," (also called ",Object(l.b)("em",{parentName:"p"},"tuples")," or ",Object(l.b)("em",{parentName:"p"},"records"),") of information - much like how you would use tables in a database, or dataframes in Python or R - to deal with structured data."),Object(l.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.b)("p",null,"This tutorial assumes your Wave server is up and running, and you have a working directory for authoring programs. If not, head over to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/tutorial-hello"}),"Hello World tutorial")," and complete steps 1 and 2."),Object(l.b)("h2",{id:"step-1-install-dependencies"},"Step 1: Install dependencies"),Object(l.b)("p",null,"We'll be using the excellent ",Object(l.b)("inlineCode",{parentName:"p"},"psutil")," package to read system stats. Let's go ahead and install that in our virtual environment:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cd $HOME/wave-apps\n./venv/bin/pip install psutil\n")),Object(l.b)("h2",{id:"step-2-monitor-cpu-usage"},"Step 2: Monitor CPU usage"),Object(l.b)("p",null,"Here's what our program looks like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py",metastring:'{7,12,25} title="$HOME/wave-apps/system_monitor.py"',"{7,12,25}":!0,title:'"$HOME/wave-apps/system_monitor.py"'}),"import time\nimport psutil\nfrom h2o_wave import site, ui, data\n\npage = site['/monitor']\n\ncpu_card = page.add('cpu_stats', ui.small_series_stat_card(\n    box='1 1 1 1',\n    title='CPU',\n    value='={{usage}}%',\n    data=dict(usage=0.0),\n    plot_data=data('tick usage', -15),\n    plot_category='tick',\n    plot_value='usage',\n    plot_zero_value=0,\n    plot_color='$red',\n))\n\ntick = 0\nwhile True:\n    tick += 1\n\n    cpu_usage = psutil.cpu_percent(interval=1)\n    cpu_card.data.usage = cpu_usage\n    cpu_card.plot_data[-1] = [tick, cpu_usage]\n\n    page.save()\n    time.sleep(1)\n")),Object(l.b)("h2",{id:"step-3-run-your-program"},"Step 3: Run your program"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cd $HOME/wave-apps\n./venv/bin/python system_stats.py\n")),Object(l.b)("p",null,"Point your browser to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:55555/monitor"}),"http://localhost:55555/monitor"),"."),Object(l.b)("p",null,Object(l.b)("img",{alt:"CPU",src:a(488).default})),Object(l.b)("h2",{id:"step-4-understand-your-program"},"Step 4: Understand your program"),Object(l.b)("p",null,"You'll notice that the above program is quite similar to the program we wrote during the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/tutorial-beer"}),"Beer Wall")," tutorial, with three important differences (see highlighted lines above):"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"We use a ",Object(l.b)("inlineCode",{parentName:"li"},"ui.small_series_stat_card()")," instead of a ",Object(l.b)("inlineCode",{parentName:"li"},"ui.markdown_card()"),"."),Object(l.b)("li",{parentName:"ol"},"The card is capable of dealing with multiple rows of data."),Object(l.b)("li",{parentName:"ol"},"To display information on the card, you only need to send it new values (and not all the data rows all over again). ")),Object(l.b)("p",null,"Let's explore these topics one by one."),Object(l.b)("h3",{id:"using-a-stats-card"},"Using a stats card"),Object(l.b)("p",null,"The Wave SDK ships with a variety of ",Object(l.b)("em",{parentName:"p"},"stats cards"),", which are cards that display values or graphics, or a combination of both (see ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"examples"}),"Gallery")," for more). "),Object(l.b)("p",null,"In this case, we use ",Object(l.b)("inlineCode",{parentName:"p"},"small_series_stats_card()"),", which displays a value and a time series visualization."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"cpu_card = page.add('cpu_stats', ui.small_series_stat_card(...)\n")),Object(l.b)("h3",{id:"declaring-a-data-buffer"},"Declaring a data buffer"),Object(l.b)("p",null,"The stats card is capable of rendering its visualization using a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/buffers"}),"data buffer"),". A data buffer is similar to a database table in that it has a predefined structure (columns and rows), but is write-only (you cannot query information; only insert, update or delete them)."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/buffers"}),"data buffer")," topic covers different types of buffers in more detail."))),Object(l.b)("p",null,"In this case, we declare a ",Object(l.b)("em",{parentName:"p"},"cyclic buffer"),", a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)"}),"FIFO")," data structure that holds a fixed number of rows, and can only be appended to. Our buffer holds at most 15 rows, and has exactly two columns: ",Object(l.b)("inlineCode",{parentName:"p"},"tick")," (a one-up integer) and ",Object(l.b)("inlineCode",{parentName:"p"},"usage")," (the CPU usage)."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"    plot_data=data('tick usage', -15),\n")),Object(l.b)("p",null,"Internally, the card's data buffer might look like this in memory when first created:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"#"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"tick"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"usage"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"..."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"..."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"...")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"13"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"14"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("h3",{id:"inserting-into-the-data-buffer"},"Inserting into the data buffer"),Object(l.b)("p",null,"Lastly, we measure CPU usage every second and append a new row to the end of card's data buffer, like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"    cpu_card.plot_data[-1] = [tick, cpu_usage]\n")),Object(l.b)("p",null,"Internally, the card's data buffer might look like in memory while in use:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"#"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"tick"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"usage"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1015"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1016"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"..."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"..."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"...")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"13"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1028"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"14"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1039"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7.5")))),Object(l.b)("h2",{id:"step-5-monitor-memory-usage"},"Step 5: Monitor memory usage"),Object(l.b)("p",null,"As a final step, we can duplicate parts of our program to create another card that displays memory stats. The two cards behave identically, except that one displays CPU usage and the other, memory."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py",metastring:'{18-28,38-40} title="$HOME/wave-apps/system_monitor.py"',"{18-28,38-40}":!0,title:'"$HOME/wave-apps/system_monitor.py"'}),"import time\nimport psutil\nfrom h2o_wave import site, ui, data\n\npage = site['/monitor']\n\ncpu_card = page.add('cpu_stats', ui.small_series_stat_card(\n    box='1 1 1 1',\n    title='CPU',\n    value='={{usage}}%',\n    data=dict(usage=0.0),\n    plot_data=data('tick usage', -15),\n    plot_category='tick',\n    plot_value='usage',\n    plot_zero_value=0,\n    plot_color='$red',\n))\nmem_card = page.add('mem_stats', ui.small_series_stat_card(\n    box='1 2 1 1',\n    title='Memory',\n    value='={{usage}}%',\n    data=dict(usage=0.0),\n    plot_data=data('tick usage', -15),\n    plot_category='tick',\n    plot_value='usage',\n    plot_zero_value=0,\n    plot_color='$blue',\n))\n\ntick = 0\nwhile True:\n    tick += 1\n\n    cpu_usage = psutil.cpu_percent(interval=1)\n    cpu_card.data.usage = cpu_usage\n    cpu_card.plot_data[-1] = [tick, cpu_usage]\n\n    mem_usage = psutil.virtual_memory().percent\n    mem_card.data.usage = mem_usage\n    mem_card.plot_data[-1] = [tick, mem_usage]\n\n    page.save()\n    time.sleep(1)\n")),Object(l.b)("h2",{id:"step-6-run-your-program-again"},"Step 6: Run your program again"),Object(l.b)("p",null,"Terminate your program (",Object(l.b)("inlineCode",{parentName:"p"},"^C"),") and restart it:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cd $HOME/wave-apps\n./venv/bin/python system_stats.py\n")),Object(l.b)("p",null,"Point your browser to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:55555/monitor"}),"http://localhost:55555/monitor"),". You should now see both CPU and memory stats live:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"CPU",src:a(471).default})),Object(l.b)("h2",{id:"exercise"},"Exercise"),Object(l.b)("p",null,"Explore other kinds of cards in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"examples"}),"Gallery")," and display additional stats gleaned from ",Object(l.b)("inlineCode",{parentName:"p"},"psutil")," (network, disk, processes, etc.)."),Object(l.b)("h2",{id:"summary"},"Summary"),Object(l.b)("p",null,"In this tutorial, we learned how to use stats cards to display live information. The knowledge you've gained from these first few tutorials should be enough to design and deploy live dashboards using Wave. You will also have noticed that you don't need to keep your Python program running all the time to continue displaying your pages. You can terminate your Python program any time, and the Wave server will happily display the last known state of all your pages."),Object(l.b)("p",null,"The programs you've been authoring till now are one kind of programs, called ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/scripts"}),"Wave scripts"),". Wave scripts are not interactive. They can modify pages on the Wave server, but cannot respond to user actions, like handling button clicks, menu commands, dropdown changes, and so on. To handle user interactions, you need to author ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/wave/docs/apps"}),"Wave Apps"),", which are long-running programs (",Object(l.b)("em",{parentName:"p"},"servers")," or ",Object(l.b)("em",{parentName:"p"},"services"),") that are capable of modifying pages in response to user actions. Let's see how to do that in the next tutorial. "))}p.isMDXComponent=!0}}]);