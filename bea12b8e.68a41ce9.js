(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),o=(n(0),n(134)),r={id:"github-api",title:"Github API - The easy way!",author:"Abhinav Anshul",author_title:"Frontend Engineer, Consenso Labs",author_url:"https://github.com/abhinav-anshul",author_image_url:"https://avatars1.githubusercontent.com/u/26833319?s=460&v=4",tags:["API","Github","OAuth"]},c={permalink:"/blog/github-api",source:"@site/blog/2020-05-18-github-api.md",description:"Hey there!",date:"2020-05-18T00:00:00.000Z",tags:[{label:"API",permalink:"/blog/tags/api"},{label:"Github",permalink:"/blog/tags/github"},{label:"OAuth",permalink:"/blog/tags/o-auth"}],title:"Github API - The easy way!",readingTime:4.055,truncated:!0,nextItem:{title:"Hello from Aditya",permalink:"/blog/hello-aditya"}},p=[{value:"Building OAuth Applications",id:"building-oauth-applications",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hey there!"),Object(o.b)("p",null,"In this blog post, I will walk you through how we can connect and interact with Github API without the hassle."),Object(o.b)("p",null,"Github API documentation is packed with tons of features and endpoints, which could result in information overload especially if anyone is starting first, at least what happened in my case."),Object(o.b)("p",null,"So the goal of this blog post is how we can set up our application and interact with Github API."),Object(o.b)("p",null,"If we head over to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.github.com/v3/"}),Object(o.b)("strong",{parentName:"a"},"Github Developer")),", we can see details related to GitHub REST API version 3, including various Root endpoints, Authentication, Schema and so on."),Object(o.b)("p",null,"The API access is via HTTPS with the base endpoint hitting at ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.github.com"),". However, we cannot access the private information of any repository of any user without any kind of authentication."),Object(o.b)("p",null,"Therefore, We have various ways to authenticate through GitHub API v3. If we try to fetch information that requires any kind of authentication, it will return either ",Object(o.b)("inlineCode",{parentName:"p"},"404 Not Found")," or ",Object(o.b)("inlineCode",{parentName:"p"},"403 Forbidden")),Object(o.b)("p",null,"The GitHub API provides us two ways for authentication to get access to private details from the repository."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.")," ",Object(o.b)("em",{parentName:"p"},"Basic Authentication : Using username as query parameters")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.")," ",Object(o.b)("em",{parentName:"p"},"OAuth2 Token : Using Auth Token")),Object(o.b)("p",null,"While with the basic authentication, the user access would be very limited to the GitHub, It is advisable to go with the Auth Token based approach.\nTherefore, Let's go step-by-step with our 2nd approach."),Object(o.b)("h3",{id:"building-oauth-applications"},"Building OAuth Applications"),Object(o.b)("p",null,"Building an OAuth application using GitHub consists of basically ",Object(o.b)("strong",{parentName:"p"},"2")," key points, as mentioned below:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.")," ",Object(o.b)("strong",{parentName:"p"},"Creating an OAuth App")," : Go to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/settings/developers"}),Object(o.b)("strong",{parentName:"a"},"Developer Settings"))," , and register a new application.\nwe need to provide the following fields :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Application Name : Name of the application"),Object(o.b)("li",{parentName:"ol"},"Homepage URL : The address of the application, If you're in development mode, you can put ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000")),Object(o.b)("li",{parentName:"ol"},"Application Description : A basic description of what you're building."),Object(o.b)("li",{parentName:"ol"},"Application Callback URL : A callback URL, to which the application would return after GitHub authentication")),Object(o.b)("p",null,"The point of submitting the details is we get a ",Object(o.b)("em",{parentName:"p"},"client_id")," which we will use further below"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/oauth.PNG",alt:"oauth"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2")," ",Object(o.b)("strong",{parentName:"p"},"Authorizing OAuth Apps")," : This is the most crucial step where the authentication happens.you can enable users to authorize your apps using either traditional way such as ",Object(o.b)("em",{parentName:"p"},"Redirect URLs")," , ",Object(o.b)("em",{parentName:"p"},"Non-Web application flow")," or using a more modern approach such as ",Object(o.b)("em",{parentName:"p"},"Web-application")," flow, which we are going to discuss here."),Object(o.b)("p",null,"First, send the request to the Github API using ",Object(o.b)("em",{parentName:"p"},"client ID")," as a query parameter and a redirection URL (it would possibly be your localhost), as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI};\n")),Object(o.b)("p",null,"You might trigger this link on a button click, in your application. The application would jump to a new URL then after getting a ",Object(o.b)("em",{parentName:"p"},"unique code")," it would redirect back your application (in this case the ",Object(o.b)("inlineCode",{parentName:"p"},"localhost"),")."),Object(o.b)("p",null,"Now, according to the GitHub developer documentation, we can exchange this ",Object(o.b)("inlineCode",{parentName:"p"},"code")," for our ",Object(o.b)("inlineCode",{parentName:"p"},"access token"),", now with the access token, we can pretty much send all kind of private requests to the GitHub, for that to be done, we need to send the ",Object(o.b)("inlineCode",{parentName:"p"},"code")," as a query parameters as well, ",Object(o.b)("em",{parentName:"p"},"but where??")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"There are various third party middleware that provides this service, one such very popular project is called")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/prose/gatekeeper"}),"Gatekeeper")," ",Object(o.b)("em",{parentName:"p"},"This would act as middleware and exchange your ",Object(o.b)("inlineCode",{parentName:"em"},"code")," with an ",Object(o.b)("inlineCode",{parentName:"em"},"access token"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"But what is Gatekeeper and how does it solve our problem?"),"\nWell, due to security limitations called cross origin browser compatiblity, GitHub does not allow the implementation of any OAuth Web application from client side. So third party libraries like Gatekeeper tricks the API and joins the missing piece of the puzzle. It enables client side application authentication to the GitHub developer API."),Object(o.b)("p",null,"However, GitHub is in works to solve this issue of including a 3rd party middleware workaround, and could come up with a solution very soon hopefully."),Object(o.b)("p",null,"The Gatekeeper library works very well with ",Object(o.b)("em",{parentName:"p"},"github.js")," (which helps in accessing the GitHub API from the browser)"),Object(o.b)("p",null,"You can send request as follows :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'fetch(`https://yourOwnCreatedDomainUsingGatekeeper.herokuapp.com/authenticate/${code}`)\n        .then(response => response.json())\n        .then(({ token }) => {\n            console.log("Access Token", token)\n        };\n')),Object(o.b)("p",null,"After successfully getting the ",Object(o.b)("em",{parentName:"p"},"access token")," , now we can send ",Object(o.b)("em",{parentName:"p"},"authenticated")," network request with the access token in our header to the GitHub API endpoints mentioned in the documentation."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"An easy to understand diagram covering important points in this post")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/oauth2.png",alt:"oauth"}))),Object(o.b)("p",null,"You can either use ",Object(o.b)("inlineCode",{parentName:"p"},"raw GitHub endpoints")," as it is in the documentation or use a high-level wrapper which makes things incredibly easier according to the programming language of our choice while making endpoint requests."),Object(o.b)("p",null,"One such very popular and official high-level wrapper for handling GitHub endpoint requests is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/octokit"}),"Octokit"),". It makes things easier, and the documentation is well-written."),Object(o.b)("p",null,"I have created a simple page where on click of a button, the user will be authenticated likewise the steps mentioned in this post.\nPlease find it in the ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/abhinav-anshul/Github-Auth"}),"Repository"))))}s.isMDXComponent=!0},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),h=a,d=b["".concat(r,".").concat(h)]||b[h]||u[h]||o;return n?i.a.createElement(d,c({ref:t},l,{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);