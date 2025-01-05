"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[1155],{8706:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"overview/rationale","title":"Understanding Multi-Tier Architecture","description":"The Essence of Three-Tier Architecture","source":"@site/docs/overview/rationale.md","sourceDirName":"overview","slug":"/overview/rationale","permalink":"/todo-doc/docs/overview/rationale","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/todo-doc/docs/category/getting-started"},"next":{"title":"Development Tools and Environment Setup","permalink":"/todo-doc/docs/overview/dev-tools"}}');var s=i(4848),t=i(8453);const l={sidebar_position:10},a="Understanding Multi-Tier Architecture",o={},c=[{value:"The Essence of Three-Tier Architecture",id:"the-essence-of-three-tier-architecture",level:2},{value:"1. Frontend (Presentation Tier)",id:"1-frontend-presentation-tier",level:3},{value:"2. Backend (Application Tier)",id:"2-backend-application-tier",level:3},{value:"3. Database (Data Tier)",id:"3-database-data-tier",level:3},{value:"Why Separate These Tiers?",id:"why-separate-these-tiers",level:2},{value:"In Our Project Context",id:"in-our-project-context",level:2},{value:"Real-World Analogy",id:"real-world-analogy",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"understanding-multi-tier-architecture",children:"Understanding Multi-Tier Architecture"})}),"\n",(0,s.jsx)(n.h2,{id:"the-essence-of-three-tier-architecture",children:"The Essence of Three-Tier Architecture"}),"\n",(0,s.jsx)(n.p,{children:'A multi-tier architecture separates an application into distinct functional layers or "tiers." The most common is a three-tier architecture, which aligns with our project structure:'}),"\n",(0,s.jsx)(n.h3,{id:"1-frontend-presentation-tier",children:"1. Frontend (Presentation Tier)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Directory:"})," ",(0,s.jsx)(n.code,{children:"frontend/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose:"})," What the user sees and interacts with."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Components:"})," HTML, CSS, JavaScript, and frameworks like React or Vue.js."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Responsibility:"})," Presenting data to users and capturing user inputs."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-backend-application-tier",children:"2. Backend (Application Tier)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Directory:"})," ",(0,s.jsx)(n.code,{children:"backend/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose:"}),' The "brain" of the application, processing data and business logic.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Components:"})," Server-side languages (e.g., Node.js, Python, Java), APIs, and business logic."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Responsibility:"})," Processing requests from the frontend, applying business rules, and interacting with the database."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-database-data-tier",children:"3. Database (Data Tier)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Directory:"})," ",(0,s.jsx)(n.code,{children:"db/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose:"})," Where data is stored and managed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Components:"})," Database systems like MySQL, PostgreSQL, MongoDB, etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Responsibility:"})," Storing, retrieving, and managing data persistently."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"why-separate-these-tiers",children:"Why Separate These Tiers?"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Separation of Concerns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each tier has a specific job, making the code more organized and easier to understand."}),"\n",(0,s.jsx)(n.li,{children:"Changes in one tier don't necessarily affect the others."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Scalability:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Different tiers can be scaled independently."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Security:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The database isn't directly accessible from the frontend, reducing security risks."}),"\n",(0,s.jsx)(n.li,{children:"Sensitive operations can be confined to the backend."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Maintainability:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Easier to update or replace one tier without affecting others."}),"\n",(0,s.jsx)(n.li,{children:"Different teams can work on different tiers simultaneously."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Flexibility:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can use different technologies for each tier that best suit its needs."}),"\n",(0,s.jsx)(n.li,{children:"Easier to add new features or modify existing ones."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Reusability:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The backend can serve multiple frontends (web, mobile app, etc.)."}),"\n",(0,s.jsx)(n.li,{children:"The database can be used by multiple applications if needed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"in-our-project-context",children:"In Our Project Context"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"frontend/"}),": Contains all user interface code. You'll learn about creating interactive web pages and how to send requests to the backend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"backend/"}),": Houses the server code. You'll learn about processing requests, implementing business logic, and communicating with the database."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db/"}),": Includes database schemas, queries, and possibly migration scripts. You'll understand data modeling and persistence."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"real-world-analogy",children:"Real-World Analogy"}),"\n",(0,s.jsx)(n.p,{children:"Think of it like a restaurant:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Frontend is the dining area where customers interact."}),"\n",(0,s.jsx)(n.li,{children:"Backend is the kitchen where food is prepared based on orders."}),"\n",(0,s.jsx)(n.li,{children:"Database is the pantry and refrigerator where ingredients are stored."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By structuring our project this way, you'll gain valuable insights into modern application architecture, preparing you for real-world software development practices."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(6540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);