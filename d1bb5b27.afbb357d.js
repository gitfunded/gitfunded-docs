(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),c=n(6),a=(n(0),n(134)),o={id:"getting-started",title:"Getting started"},i={id:"getting-started",title:"Getting started",description:"## Quick Start\r",source:"@site/docs\\getting_started.md",permalink:"/docs/getting-started",sidebar:"docs",previous:{title:"Development road map",permalink:"/docs/roadmap"}},l=[{value:"Quick Start",id:"quick-start",children:[{value:"Test, compile and deploy the contract",id:"test-compile-and-deploy-the-contract",children:[]},{value:"Start the client application",id:"start-the-client-application",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"quick-start"},"Quick Start"),Object(a.b)("p",null,"Install contract framework and private blockchain"),Object(a.b)("p",null,"Truffle and Ganache can be installed as a node module."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm install -g truffle\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm install -g ganache-cli\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/gitfunded/contracts\ngit clone https://github.com/gitfunded/web\n")),Object(a.b)("h3",{id:"test-compile-and-deploy-the-contract"},"Test, compile and deploy the contract"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{})," $ cd gitfunded/contracts/truffle-contracts\n $ truffle test --network development\n $ truffle migrate --network development\n")),Object(a.b)("h3",{id:"start-the-client-application"},"Start the client application"),Object(a.b)("p",null,"Install the node dependencies."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"cd gitfunded/web\nnpm install\n")),Object(a.b)("p",null,"Run the app in the development mode."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"cd gitfunded/web\nnpm start\n")),Object(a.b)("p",null,"Open ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," to view it in the browser."),Object(a.b)("p",null,"Finally, the build for the production can also be generated "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm build\n")))}u.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,f=b["".concat(o,".").concat(s)]||b[s]||d[s]||a;return n?c.a.createElement(f,i({ref:t},p,{components:n})):c.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);