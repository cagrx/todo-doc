"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[8682],{2300:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"level1/devops/web-setup/intro","title":"Enhancing the Web App: Benefits of Nginx, Domain Name, and SSL","description":"Our web app is successfully deployed in a Lightsail server, and the world can access it (if they know the right port number).","source":"@site/docs/level1/devops/web-setup/intro.md","sourceDirName":"level1/devops/web-setup","slug":"/level1/devops/web-setup/intro","permalink":"/todo-doc/docs/level1/devops/web-setup/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_label":"Intro","sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Web Server Setup","permalink":"/todo-doc/docs/category/web-server-setup"},"next":{"title":"Basic Web Server Setup","permalink":"/todo-doc/docs/level1/devops/web-setup/web-10"}}');var r=i(4848),t=i(8453);const o={sidebar_label:"Intro",sidebar_position:10},a="Enhancing the Web App: Benefits of Nginx, Domain Name, and SSL",l={},d=[{value:"Benefits of Using a Lightweight Nginx Server",id:"benefits-of-using-a-lightweight-nginx-server",level:2},{value:"Creating a Domain Name for Human-Friendly Access",id:"creating-a-domain-name-for-human-friendly-access",level:2},{value:"Using SSL for Secure Content Delivery",id:"using-ssl-for-secure-content-delivery",level:2},{value:"Stack Component Overview",id:"stack-component-overview",level:2}];function c(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"enhancing-the-web-app-benefits-of-nginx-domain-name-and-ssl",children:"Enhancing the Web App: Benefits of Nginx, Domain Name, and SSL"})}),"\n",(0,r.jsx)(n.p,{children:"Our web app is successfully deployed in a Lightsail server, and the world can access it (if they know the right port number)."}),"\n",(0,r.jsx)(n.p,{children:"But we can make our app friendlier and more secure by making a few changes to our stack."}),"\n",(0,r.jsx)(n.h2,{id:"benefits-of-using-a-lightweight-nginx-server",children:"Benefits of Using a Lightweight Nginx Server"}),"\n",(0,r.jsx)(n.p,{children:"Nginx is a high-performance web server and reverse proxy server designed to handle HTTP and HTTPS traffic efficiently, providing features like load balancing, caching, and support for hosting multiple applications on the same server."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reverse Proxy"}),": Nginx can act as a reverse proxy to forward traffic from port 80 or 443 (standard HTTP/HTTPS ports) to port 3004, eliminating the need for users to specify a port number."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hosting Multiple Applications"}),": Nginx can route requests to multiple applications on the same instance. For example, our current app on port 3004 and a future app on port 3005 can coexist, with Nginx directing traffic based on URL paths or subdomains."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Load Balancing"}),": If the app scales horizontally, Nginx can distribute incoming traffic across multiple app instances."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Caching"}),": Nginx can cache static files, improving site performance and reducing the load on the backend server. (Note: In our use case, our app will still continue to serve our static files.)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Security"}),": Nginx adds an extra layer of security by hiding the backend server's details from the end user."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-domain-name-for-human-friendly-access",children:"Creating a Domain Name for Human-Friendly Access"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ease of Use"}),": A domain name replaces the need to remember an IP address or append a port number."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Brand Identity"}),": A custom domain name builds credibility and professionalism."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DNS Features"}),": It allows the use of subdomains and email addresses tied to the domain."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-ssl-for-secure-content-delivery",children:"Using SSL for Secure Content Delivery"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Encryption"}),": SSL ensures that data transferred between the server and client is encrypted, protecting sensitive information like login credentials."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Trust"}),": A site with HTTPS and a padlock icon in the browser builds user trust."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SEO Benefits"}),": Search engines like Google prioritize secure websites, improving their ranking."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"stack-component-overview",children:"Stack Component Overview"}),"\n",(0,r.jsx)(n.p,{children:"By the time we've completed this section, our app's technology stack will look like this:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Component"}),(0,r.jsx)(n.th,{children:"Role"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Lightsail"})}),(0,r.jsx)(n.td,{children:"Provides scalable cloud hosting for the application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Nginx"})}),(0,r.jsx)(n.td,{children:"Acts as a reverse proxy, handles HTTP/HTTPS traffic, improves performance and security, and routes requests for multiple applications."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Node.js"})}),(0,r.jsx)(n.td,{children:"Provides the runtime for executing JavaScript on the server."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Express"})}),(0,r.jsx)(n.td,{children:"A lightweight framework for building web applications in Node.js."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Certbot"})}),(0,r.jsx)(n.td,{children:"Automates the process of obtaining and renewing SSL/TLS certificates."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);