(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{134:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(140),m=t(145),c=t(138);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(c.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e;return r.a.createElement(l.a,{title:"Blog",description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map(({content:e,metadata:a})=>r.a.createElement(m.a,{key:a.permalink,frontMatter:e.frontMatter,metadata:a,truncated:!0},r.a.createElement(e,null))),r.a.createElement(o,{metadata:a})))))}},145:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(137),m=t.n(l),c=t(136),o=t(138),s=t(146),i=t(92),g=t.n(i);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:l,isBlogPostPage:i=!1}=e,{date:E,permalink:v,tags:d}=n,{author:p,title:_}=t,N=t.author_url||t.authorURL,h=t.author_title||t.authorTitle,b=t.author_image_url||t.authorImageURL;return r.a.createElement("article",{className:i?void 0:"margin-bottom--xl"},(()=>{const e=i?"h1":"h2",a=E.substring(0,10).split("-"),t=a[0],n=u[parseInt(a[1],10)-1],l=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:m()("margin-bottom--sm",g.a.blogPostTitle)},i?_:r.a.createElement(o.a,{to:v},_)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:E,className:g.a.blogPostDate},n," ",l,", ",t)),r.a.createElement("div",{className:"avatar margin-bottom--md"},b&&r.a.createElement("a",{className:"avatar__photo-link",href:N,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:b,alt:p})),r.a.createElement("div",{className:"avatar__intro"},p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},p)),r.a.createElement("small",{className:"avatar__subtitle"},h)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:s.a},a)),(d.length>0||l)&&r.a.createElement("footer",{className:"row margin-vert--lg"},d.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),d.map(({label:e,permalink:a})=>r.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:n.permalink,"aria-label":`Read more about ${_}`},r.a.createElement("strong",null,"Read More")))))}}}]);