"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[7983],{5798:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"level1/devops/web-setup/static-ip","title":"Create And Attach A Static IP Address To Your Lightsail Instance","description":"By default, your Lightsail instance comes with a public IPv4 address, which is what we use to connect to it from the outside world. However, that address changes when you stop and start your instance.","source":"@site/docs/level1/devops/web-setup/static-ip.md","sourceDirName":"level1/devops/web-setup","slug":"/level1/devops/web-setup/static-ip","permalink":"/todo-doc/docs/level1/devops/web-setup/static-ip","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":200,"frontMatter":{"sidebar_label":"Create Static IP Address","sidebar_position":200},"sidebar":"tutorialSidebar","previous":{"title":"Basic Web Server Setup","permalink":"/todo-doc/docs/level1/devops/web-setup/web-10"},"next":{"title":"Create Domain Name","permalink":"/todo-doc/docs/level1/devops/web-setup/domain-name"}}');var n=s(4848),a=s(8453);const r={sidebar_label:"Create Static IP Address",sidebar_position:200},i="Create And Attach A Static IP Address To Your Lightsail Instance",c={},d=[];function l(e){const t={blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"create-and-attach-a-static-ip-address-to-your-lightsail-instance",children:"Create And Attach A Static IP Address To Your Lightsail Instance"})}),"\n",(0,n.jsx)(t.p,{children:"By default, your Lightsail instance comes with a public IPv4 address, which is what we use to connect to it from the outside world. However, that address changes when you stop and start your instance."}),"\n",(0,n.jsxs)(t.p,{children:["This means your IP address might currently be ",(0,n.jsx)(t.code,{children:"2.4.3.12"}),", but if you stop and restart your instance, it might become something different like ",(0,n.jsx)(t.code,{children:"8.23.1.4"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We want people to access our app from a human-readable domain name (like ",(0,n.jsx)(t.code,{children:"www.todolio.com"}),") instead of needing to memorize our IP address. When people access that domain name, we want that to resolve to our IP address. That means we're going to want that IP address to be static (not changing)."]}),"\n",(0,n.jsx)(t.p,{children:"When we go to our Lightsail intance and select the Networking tab, we see see our current public IPv4 address. We also see the option to Attach a static IP address. Click on that link."}),"\n",(0,n.jsx)(t.p,{children:"You can accept the default name for this resource, or change it to something more meaningful for you."}),"\n",(0,n.jsxs)(t.p,{children:["When you're ready, click the ",(0,n.jsx)(t.strong,{children:"Create and attach"})," button."]}),"\n",(0,n.jsx)(t.p,{children:"When you return to your instance's Networking tab, you'll notice your temporary IP address has been replaced with a permanent IP address. This ip address will remain constant throughout the instance's start, stop, reboot lifecycle."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Reminder: Now, when we use ssh to access our server, we need to use"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now that we have a permanent ip address, we can create a domain name and attach it to our instance."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var o=s(6540);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);