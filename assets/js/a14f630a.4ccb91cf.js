"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[8747],{6669:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"level1/devops/web-setup/domain-name","title":"Create Your Domain Name And Attach It To Your Lightsail Instance","description":"Create your domain name:","source":"@site/docs/level1/devops/web-setup/domain-name.md","sourceDirName":"level1/devops/web-setup","slug":"/level1/devops/web-setup/domain-name","permalink":"/todo-doc/docs/level1/devops/web-setup/domain-name","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":300,"frontMatter":{"sidebar_label":"Create Domain Name","sidebar_position":300},"sidebar":"tutorialSidebar","previous":{"title":"Create Static IP Address","permalink":"/todo-doc/docs/level1/devops/web-setup/static-ip"},"next":{"title":"SSL Web Server Setup","permalink":"/todo-doc/docs/level1/devops/web-setup/web-20"}}');var o=s(4848),t=s(8453);const r={sidebar_label:"Create Domain Name",sidebar_position:300},l="Create Your Domain Name And Attach It To Your Lightsail Instance",a={},d=[{value:"Create your domain name:",id:"create-your-domain-name",level:2},{value:"Attach your domain name to your Lightsail instance:",id:"attach-your-domain-name-to-your-lightsail-instance",level:2},{value:"Verify the assignment",id:"verify-the-assignment",level:2},{value:"Configuring CNAME Record in Amazon Lightsail to Support www Subdomain",id:"configuring-cname-record-in-amazon-lightsail-to-support-www-subdomain",level:2},{value:"Step 1: Log in to Lightsail",id:"step-1-log-in-to-lightsail",level:3},{value:"Step 2: Access Your DNS Zone",id:"step-2-access-your-dns-zone",level:3},{value:"Step 3: Add a CNAME Record",id:"step-3-add-a-cname-record",level:3},{value:"Step 4: Verify DNS Propagation",id:"step-4-verify-dns-propagation",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Optional: A Note About IPv6",id:"optional-a-note-about-ipv6",level:2},{value:"Serving a Web App on Lightsail with IPv4 and IPv6",id:"serving-a-web-app-on-lightsail-with-ipv4-and-ipv6",level:3},{value:"Downsides of Using Only an IPv6 Address",id:"downsides-of-using-only-an-ipv6-address",level:4},{value:"Recommendations",id:"recommendations",level:4},{value:"Conclusion",id:"conclusion",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"create-your-domain-name-and-attach-it-to-your-lightsail-instance",children:"Create Your Domain Name And Attach It To Your Lightsail Instance"})}),"\n",(0,o.jsx)(n.h2,{id:"create-your-domain-name",children:"Create your domain name:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In Amazon Lightsail, navigate to ",(0,o.jsx)(n.strong,{children:"Domains & DNS"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Register domain"})]}),"\n",(0,o.jsx)(n.li,{children:"Verify your desired comain name is available."}),"\n",(0,o.jsxs)(n.li,{children:["Once you have an available domain name, complete the remainder of the form information. You can leave all the default values untouched such as Automatic Renewal and Privacy Protection. Click the ",(0,o.jsx)(n.strong,{children:"Register domain"})," button."]}),"\n",(0,o.jsx)(n.li,{children:"Follow the instructions as provided by Lightsail to complete registration. You'll likely need to click on a verification link from an email sent to the email address you provided. Be sure to check your spam folder - it very likely went there."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"attach-your-domain-name-to-your-lightsail-instance",children:"Attach your domain name to your Lightsail instance:"}),"\n",(0,o.jsx)(n.p,{children:"Once the registration process is complete..."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["In Amazon Lightsail, navigate to ",(0,o.jsx)(n.strong,{children:"Domains & DNS"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Notice your domain name appear in both the ",(0,o.jsx)(n.strong,{children:"DNS zones"})," and ",(0,o.jsx)(n.strong,{children:"Registered domains"})," sections."]}),"\n",(0,o.jsxs)(n.li,{children:["Click on your domain name from the link within the ",(0,o.jsx)(n.strong,{children:"DNS zones"})," section."]}),"\n",(0,o.jsxs)(n.li,{children:["Select the ",(0,o.jsx)(n.strong,{children:"Assignments"})," tab."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"+ Add assignment"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Select your domain name (e.g. example.com)."}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Select a resource"})," dropdown, select the Lightsail instance that holds your todo app."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Select the address"})," section, choose ",(0,o.jsx)(n.strong,{children:"Static IP address"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["You should see a subsequent message like:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Result example.com will resolve to StaticIp-1, which is attached to this instance.\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Assign"})," button."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Assignments"})," tab, you should now see a listing for this assignment."]}),"\n",(0,o.jsx)(n.h2,{id:"verify-the-assignment",children:"Verify the assignment"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You should now be able to visit your website from a browser by navigating to ",(0,o.jsx)(n.code,{children:"http://<yourdomainname>"})]}),"\n",(0,o.jsxs)(n.li,{children:["You should now be able to ssh to your remote server using your domain name (e.g. ",(0,o.jsx)(n.code,{children:"ssh -i keys/lightsail-key.pem bitnami@<yourdomainname>"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"configuring-cname-record-in-amazon-lightsail-to-support-www-subdomain",children:"Configuring CNAME Record in Amazon Lightsail to Support www Subdomain"}),"\n",(0,o.jsxs)(n.p,{children:["At this point, your domain name (e.g. example.com) points to your IP address, but no subdomains (e.g. ",(0,o.jsx)(n.a,{href:"http://www.example.com",children:"www.example.com"}),") have been added. So any requests to ",(0,o.jsx)(n.code,{children:"www.<yourdomainname>"})," will fail."]}),"\n",(0,o.jsxs)(n.p,{children:["Follow these steps to configure a CNAME record in Amazon Lightsail to support requests to ",(0,o.jsx)(n.code,{children:"www.<yourdomainname>"}),":"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"step-1-log-in-to-lightsail",children:"Step 1: Log in to Lightsail"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Navigate to the ",(0,o.jsx)(n.a,{href:"https://lightsail.aws.amazon.com/",children:"Amazon Lightsail console"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Go to the ",(0,o.jsx)(n.strong,{children:"Networking"})," tab."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"step-2-access-your-dns-zone",children:"Step 2: Access Your DNS Zone"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Select your domain (e.g., ",(0,o.jsx)(n.code,{children:"example.com"}),") from the list of DNS zones."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"step-3-add-a-cname-record",children:"Step 3: Add a CNAME Record"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Under the ",(0,o.jsx)(n.strong,{children:"DNS records"})," section, click ",(0,o.jsx)(n.strong,{children:"Add record"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the record as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Record type"}),": ",(0,o.jsx)(n.code,{children:"CNAME record"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Record name"}),": Enter ",(0,o.jsx)(n.code,{children:"www"})," (this represents ",(0,o.jsx)(n.code,{children:"www.example.com"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Route traffic to"}),": Enter your root domain (e.g., ",(0,o.jsx)(n.code,{children:"example.com"}),")."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"step-4-verify-dns-propagation",children:"Step 4: Verify DNS Propagation"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open your browser and test by visiting ",(0,o.jsx)(n.code,{children:"www.example.com"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["It should now point to the same instance as ",(0,o.jsx)(n.code,{children:"example.com"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsx)(n.p,{children:"The world can now access your server using a domain name instead of an IP address."}),"\n",(0,o.jsx)(n.p,{children:"However, we currently only support HTTP, which means all requests and responses are traveling over the internet unsecurely in cleartext. To properly secure our app, we need to suppor HTTPS, which requires SSL, which we'll set up in the next section."}),"\n",(0,o.jsx)(n.h2,{id:"optional-a-note-about-ipv6",children:"Optional: A Note About IPv6"}),"\n",(0,o.jsx)(n.p,{children:"You may have noticed that assigning our instance an IPv6 IP address was an option. Here are some considerations that influenced our choice of using an IPv4 IP address."}),"\n",(0,o.jsx)(n.p,{children:"Note: There is no need at this time to create a dual-stack setup described below."}),"\n",(0,o.jsx)(n.h3,{id:"serving-a-web-app-on-lightsail-with-ipv4-and-ipv6",children:"Serving a Web App on Lightsail with IPv4 and IPv6"}),"\n",(0,o.jsx)(n.h4,{id:"downsides-of-using-only-an-ipv6-address",children:"Downsides of Using Only an IPv6 Address"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Limited IPv6 Adoption"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"While IPv6 adoption is increasing, it is not yet universally supported. As of 2025, there are still regions and networks where IPv6 is either not deployed or not fully functional."}),"\n",(0,o.jsx)(n.li,{children:"Some users on older networks, devices, or ISPs that do not support IPv6 won't be able to access your website."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Compatibility Issues"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Older operating systems or browsers might not support IPv6."}),"\n",(0,o.jsx)(n.li,{children:"Some corporate firewalls or networks are configured to block or not support IPv6 traffic."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SEO and Web Crawlers"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Some search engine crawlers, especially those relying on legacy systems, might prioritize or rely on IPv4. This could potentially impact search engine indexing and rankings if your site is not accessible via IPv4."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Network Debugging Complexity"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Debugging network issues may be more complex if you're exclusively using IPv6, as not all diagnostic tools or skills are IPv6-ready."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"recommendations",children:"Recommendations"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Use a Static IPv4 Address"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Create a static IPv4 address in Lightsail and attach it to your instance. This ensures universal accessibility since IPv4 is supported by virtually all networks and devices."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Enable Dual-Stack (IPv4 and IPv6)"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"To future-proof your setup, configure your domain and instance to support both IPv4 and IPv6. Lightsail can handle both, and this ensures that users with only IPv6 can still access your site while maintaining compatibility for those reliant on IPv4."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DNS Configuration"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use an ",(0,o.jsx)(n.code,{children:"A"})," record for the IPv4 address and an ",(0,o.jsx)(n.code,{children:"AAAA"})," record for the IPv6 address in your domain\u2019s DNS settings. This dual-stack setup provides redundancy and maximizes accessibility."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Test Accessibility"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Before committing to production, test your website's accessibility using various tools to ensure both IPv4 and IPv6 users can reach it."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"By opting for a dual-stack setup, you achieve the best of both worlds: ensuring broad accessibility today while preparing for the increasing adoption of IPv6 in the future."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);