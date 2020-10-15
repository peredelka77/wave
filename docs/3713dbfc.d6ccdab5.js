(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(287)),i={title:"Browser Testing"},s={unversionedId:"browser-testing",id:"browser-testing",isDocsHomePage:!1,title:"Browser Testing",description:"Wave supports authoring functional tests in Python for the Cypress test framework. This feature lets you automate browser-based point-and-click tests for your app.",source:"@site/docs/browser-testing.md",slug:"/browser-testing",permalink:"/wave/docs/browser-testing",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/browser-testing.md",version:"current",sidebar:"someSidebar",previous:{title:"Development",permalink:"/wave/docs/development"},next:{title:"Configuration",permalink:"/wave/docs/configuration"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Writing a test",id:"writing-a-test",children:[]},{value:"Running your test",id:"running-your-test",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Wave supports authoring functional tests in Python for the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cypress.io/"}),"Cypress")," test framework. This feature lets you automate browser-based point-and-click tests for your app."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h4",{id:"step-1-install-nodejs"},"Step 1: Install Node.js"),Object(o.b)("p",null,"Install a recent version of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js"),"."),Object(o.b)("h4",{id:"step-2-set-up-cypress"},"Step 2: Set up Cypress"),Object(o.b)("p",null,"Using your terminal, go to your Wave installation's ",Object(o.b)("inlineCode",{parentName:"p"},"test")," directory and install Cypress"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ cd path/to/wave\n$ cd test\n$ npm install\n")),Object(o.b)("h2",{id:"writing-a-test"},"Writing a test"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#wizard"}),"Wizard")," example to understand how to author tests for your interactive app. Specifically, note how the ",Object(o.b)("inlineCode",{parentName:"p"},"@cypress")," attribute is used. Refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.cypress.io/api/api/table-of-contents.html"}),"Cypress API")," to learn how to author assertions."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import cypress\n\n@cypress('Walk through the wizard')\ndef test_wizard(cy):\n    cy.visit('/demo')\n    cy.locate('step1').click()\n    cy.locate('text').should('contain.text', 'What is your name?')\n    cy.locate('nickname').clear().type('Fred')\n    cy.locate('step2').click()\n    cy.locate('text').should('contain.text', 'Hi Fred! How do you feel right now?')\n    cy.locate('feeling').clear().type('quirky')\n    cy.locate('step3').click()\n    cy.locate('text').should('contain.text', 'What a coincidence, Fred! I feel quirky too!')\n\n")),Object(o.b)("h2",{id:"running-your-test"},"Running your test"),Object(o.b)("h4",{id:"step-1-start-the-cypress-test-runner"},"Step 1: Start the Cypress test runner"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ cd path/to/wave\n$ cd test\n$ ./node_modules/.bin/cypress open\n")),Object(o.b)("h4",{id:"step-2-start-the-wave-server-as-usual"},"Step 2: Start the Wave server as usual"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ./wave\n")),Object(o.b)("h4",{id:"step-3-translate-your-python-tests-to-javascript"},"Step 3: Translate your Python tests to Javascript"),Object(o.b)("p",null,"To translate your Python tests to Javascript, execute the Python module or file containing your tests like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ CYPRESS_INTEGRATION_TEST_DIR=path/to/wave/test/cypress/integration ./venv/bin/python examples/wizard.py\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"CYPRESS_INTEGRATION_TEST_DIR")," environment variable indicates where the Wave SDK should write translated files to. This must be set to the ",Object(o.b)("inlineCode",{parentName:"p"},"cypress/integration")," directory."),Object(o.b)("p",null,"Alternatively, you can set the ",Object(o.b)("inlineCode",{parentName:"p"},"CYPRESS_INTEGRATION_TEST_DIR")," environment variable in your shell (or IDE) to simplify running your test file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ export CYPRESS_INTEGRATION_TEST_DIR=path/to/wave/test/cypress/integration\n$ ./venv/bin/python examples/wizard.py\n")),Object(o.b)("h4",{id:"step-4-run-your-tests"},"Step 4: Run your tests"),Object(o.b)("p",null,"At this point, you should find all your tests displayed in the Cypress UI. Simply click on a test to run it. Happy testing!"))}l.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,y=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(y,s(s({ref:t},p),{},{components:n})):a.a.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);