"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[1636],{5180:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"level1/devops/web-setup/web-10","title":"Step 1: Setting Up Nginx to Forward Requests to a Node.js App","description":"This step focuses on installing Nginx and configuring it to forward requests from a server\'s IP address to a Node.js/Express app running on port 3004.","source":"@site/docs/level1/devops/web-setup/web-10.md","sourceDirName":"level1/devops/web-setup","slug":"/level1/devops/web-setup/web-10","permalink":"/todo-doc/docs/level1/devops/web-setup/web-10","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":100,"frontMatter":{"sidebar_label":"Basic Web Server Setup","sidebar_position":100},"sidebar":"tutorialSidebar","previous":{"title":"Intro","permalink":"/todo-doc/docs/level1/devops/web-setup/intro"},"next":{"title":"Create Static IP Address","permalink":"/todo-doc/docs/level1/devops/web-setup/static-ip"}}');var i=s(4848),r=s(8453);const o={sidebar_label:"Basic Web Server Setup",sidebar_position:100},l="Step 1: Setting Up Nginx to Forward Requests to a Node.js App",a={},d=[{value:"Objectives",id:"objectives",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Disable Current Apache Web Server",id:"step-1-disable-current-apache-web-server",level:2},{value:"1. Stop the Apache Web Service",id:"1-stop-the-apache-web-service",level:3},{value:"2. Disable Apache from Starting on Boot",id:"2-disable-apache-from-starting-on-boot",level:3},{value:"3. Verify That Apache Is Disabled",id:"3-verify-that-apache-is-disabled",level:3},{value:"Step 2: Install Nginx",id:"step-2-install-nginx",level:2},{value:"1. Update the System",id:"1-update-the-system",level:3},{value:"2. Install Nginx",id:"2-install-nginx",level:3},{value:"3. Start Nginx",id:"3-start-nginx",level:3},{value:"4. Test Nginx",id:"4-test-nginx",level:3},{value:"5. Reboot to Verify Startup",id:"5-reboot-to-verify-startup",level:3},{value:"Step 3: Configure Nginx to Forward Requests to Node.js App",id:"step-3-configure-nginx-to-forward-requests-to-nodejs-app",level:2},{value:"1. Make a Backup Copy of the Default Nginx Configuration",id:"1-make-a-backup-copy-of-the-default-nginx-configuration",level:3},{value:"2. Edit the Default Nginx Configuration",id:"2-edit-the-default-nginx-configuration",level:3},{value:"2. Replace the File Content",id:"2-replace-the-file-content",level:3},{value:"3. Test the Configuration",id:"3-test-the-configuration",level:3},{value:"4. Reload Nginx",id:"4-reload-nginx",level:3},{value:"Step 4: Verify the Setup",id:"step-4-verify-the-setup",level:2},{value:"1. Start the Node.js App",id:"1-start-the-nodejs-app",level:3},{value:"2. Access the App",id:"2-access-the-app",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"<strong>502 Bad Gateway</strong>",id:"502-bad-gateway",level:3},{value:"<strong>Firewall Issues</strong>",id:"firewall-issues",level:3},{value:"<strong>Nginx Logs</strong>",id:"nginx-logs",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"step-1-setting-up-nginx-to-forward-requests-to-a-nodejs-app",children:"Step 1: Setting Up Nginx to Forward Requests to a Node.js App"})}),"\n",(0,i.jsxs)(n.p,{children:["This step focuses on ",(0,i.jsx)(n.strong,{children:"installing Nginx"})," and configuring it to forward requests from a server's ",(0,i.jsx)(n.strong,{children:"IP address"})," to a ",(0,i.jsx)(n.strong,{children:"Node.js/Express app"})," running on port ",(0,i.jsx)(n.code,{children:"3004"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,i.jsx)(n.p,{children:"By the end of this step, you will:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install and start Nginx on your server."}),"\n",(0,i.jsxs)(n.li,{children:["Configure Nginx to forward incoming HTTP requests to your Node.js app on port ",(0,i.jsx)(n.code,{children:"3004"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Access your app using the server\u2019s IP address."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A server (e.g., AWS Lightsail instance) with Ubuntu/Debian installed."}),"\n",(0,i.jsxs)(n.li,{children:["A running Node.js/Express app listening on ",(0,i.jsx)(n.code,{children:"localhost:3004"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"SSH access to the server."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reminder:"})," Since we're installing new software onto our server, it's a good idea to take a snapshot of it first."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-disable-current-apache-web-server",children:"Step 1: Disable Current Apache Web Server"}),"\n",(0,i.jsx)(n.p,{children:"If you followed the Lightsail instance setup instructions from the previous sections, the selection of the NodeJS blueprint meant the instance came with NodeJS already installed. However, it also has the Apache Web Server installed and running too."}),"\n",(0,i.jsxs)(n.p,{children:["You can verify this by pointing your browser to ",(0,i.jsx)(n.code,{children:"http://<your-server-ip>/"}),". Since that URL does not include a port, the ",(0,i.jsx)(n.code,{children:"http"})," request is going to port 80 by default, and the Apache Web Server running on your instance received the request instead of our app (which is listening to port 3004). As such, assuming you do have Apache installed and running, you should see welcome web page describing bitmani (the vendors of the blueprint)."]}),"\n",(0,i.jsxs)(n.p,{children:["Perform the following steps from a ",(0,i.jsx)(n.strong,{children:"remote terminal"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"1-stop-the-apache-web-service",children:"1. Stop the Apache Web Service"}),"\n",(0,i.jsx)(n.p,{children:"The following command stops the Apache Service temporarily:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo /opt/bitnami/ctlscript.sh stop apache\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-disable-apache-from-starting-on-boot",children:"2. Disable Apache from Starting on Boot"}),"\n",(0,i.jsx)(n.p,{children:"To ensure Apache doesn\u2019t start automatically when the server reboots, let's rename the Apache control script so it won't be loaded:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo mv /opt/bitnami/scripts/apache /opt/bitnami/scripts/apache.disabled\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If we ever need Apache again, we can reverse this my renaming the script and removing the .disabled suffix. There's nothing special about the word ",(0,i.jsx)(n.code,{children:".disabled"})," by the way. The system is looking for a script named ",(0,i.jsx)(n.code,{children:"apache"}),", so by renaming the script ",(0,i.jsx)(n.code,{children:"apache.disabled"}),", we're just changing the name to something else, and the system won't find the script it was looking for."]}),"\n",(0,i.jsx)(n.h3,{id:"3-verify-that-apache-is-disabled",children:"3. Verify That Apache Is Disabled"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check If Apache Is Running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo /opt/bitnami/ctlscript.sh status\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see apache is not running."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reboot the Server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Confirm That Apache Doesn't Start:\nAfter the server restarts, check again to ensure Apache is not running. Remember to ssh into your remote server again as your original ssh connection was closed during the reboot."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo /opt/bitnami/ctlscript.sh status\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see a message like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Cannot find any running daemon to contact. If it is running, make sure you are pointing to the right pid file (/var/run/gonit.pid)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can verify by pointing your browser to ",(0,i.jsx)(n.code,{children:"http://<your-server-ip>/"}),". No web page should return. In fact, no response at all should come back since there's currently nothing on your server listening to port 80."]}),"\n",(0,i.jsx)(n.p,{children:"Now that the Apache Web Server is off and disabled, let's install the Nginx web server."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-install-nginx",children:"Step 2: Install Nginx"}),"\n",(0,i.jsxs)(n.p,{children:["Perform the following steps from a ",(0,i.jsx)(n.strong,{children:"remote terminal"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"1-update-the-system",children:"1. Update the System"}),"\n",(0,i.jsx)(n.p,{children:"Run the following commands to ensure the system is up-to-date:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt upgrade -y\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-install-nginx",children:"2. Install Nginx"}),"\n",(0,i.jsx)(n.p,{children:"Use the package manager to install Nginx:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install nginx -y\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-start-nginx",children:"3. Start Nginx"}),"\n",(0,i.jsx)(n.p,{children:"After installation, Nginx should start automatically. Verify it is running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status nginx\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If it is not running, start it with:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start nginx\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-test-nginx",children:"4. Test Nginx"}),"\n",(0,i.jsxs)(n.p,{children:["Open your server's IP address in a browser (e.g., ",(0,i.jsx)(n.code,{children:"http://<your-server-ip>"}),"). You should see the default Nginx welcome page."]}),"\n",(0,i.jsx)(n.p,{children:"Note the absence of a port number in the url. This means the http request is going to port 80, which is being listed to by nginx."}),"\n",(0,i.jsx)(n.h3,{id:"5-reboot-to-verify-startup",children:"5. Reboot to Verify Startup"}),"\n",(0,i.jsx)(n.p,{children:"By default, Nginx is configured to startup automatically when the instance starts. Verify this by rebooting your server and performing Step 4 above again after the server restarts."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"step-3-configure-nginx-to-forward-requests-to-nodejs-app",children:"Step 3: Configure Nginx to Forward Requests to Node.js App"}),"\n",(0,i.jsx)(n.p,{children:"Note: In the following steps, you'll be editing a file directly on the remote server using your remote terminal. There is no graphical user interface (GUI) to support editing the file with something like Sublime Text or Notepad, so you'll need to use an editor from within the terminal. Many exist, such as nano, pico, vi, and more. These steps reference nano, but feel free to use any editor you're comfortable with."}),"\n",(0,i.jsxs)(n.p,{children:["For a quick cheat sheet on nano commands, ",(0,i.jsx)(n.a,{href:"https://www.nano-editor.org/dist/latest/cheatsheet.html",children:"see"})]}),"\n",(0,i.jsx)(n.p,{children:"Copying the configuration file contents from these instructions and pasting them into the nano editor should work, so you shouldn't have to expect to type all these configuration file lines by hand."}),"\n",(0,i.jsx)(n.h3,{id:"1-make-a-backup-copy-of-the-default-nginx-configuration",children:"1. Make a Backup Copy of the Default Nginx Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The default configuration file contains a lot of content, and we're interested in the bare essentials. We still want to keep it around in case we ever need it, so let's rename it instead of deleting it."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"First let's take a quick look to appreciate the contents in the default file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /etc/nginx/sites-available/default\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cat"})," is a command that displays file contents. It can also be used to concatenate files, but we're not interested in that right now."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Next let's rename (move) the file to make room for our new one."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.orig\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now let's create a new empty file that we'll edit."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"touch /etc/nginx/sites-available/default\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"touch"})," is optional. When we edit a file that doesn't exist, the editor will create the file the first time we save."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-edit-the-default-nginx-configuration",children:"2. Edit the Default Nginx Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Open the default Nginx configuration file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/nginx/sites-available/default\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see no contents in the file."}),"\n",(0,i.jsx)(n.h3,{id:"2-replace-the-file-content",children:"2. Replace the File Content"}),"\n",(0,i.jsx)(n.p,{children:"Replace the content of the file with the following:"}),"\n",(0,i.jsx)(n.p,{children:"Note: Copy and paste should work here. Paste likely works by using right-mouse-click then selecting Paste from the dropdown menu."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"server {\n    listen 80;\n    server_name _; # Matches all requests, including those to the IP address\n\n    location / {\n        proxy_pass http://localhost:3004; # Forward requests to Node.js app\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-test-the-configuration",children:"3. Test the Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Test the Nginx configuration for syntax errors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nginx -t\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-reload-nginx",children:"4. Reload Nginx"}),"\n",(0,i.jsx)(n.p,{children:"Apply the changes by reloading Nginx:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl reload nginx\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"step-4-verify-the-setup",children:"Step 4: Verify the Setup"}),"\n",(0,i.jsx)(n.h3,{id:"1-start-the-nodejs-app",children:"1. Start the Node.js App"}),"\n",(0,i.jsxs)(n.p,{children:["Ensure your app is running by using the ",(0,i.jsx)(n.code,{children:"pm2 list"})," command."]}),"\n",(0,i.jsx)(n.h3,{id:"2-access-the-app",children:"2. Access the App"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Be sure to use ",(0,i.jsx)(n.code,{children:"http"})," in the following steps, as ",(0,i.jsx)(n.code,{children:"https"})," is not supported because we haven't yet configured it in our config file."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Open your server's IP address in a browser (e.g., ",(0,i.jsx)(n.code,{children:"http://<your-server-ip>"}),"). You should see the response from your Node.js app."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: Recall that our NodeJS app is listening to port ",(0,i.jsx)(n.code,{children:"3004"}),". It still is, and in fact you can access it by visitng ",(0,i.jsx)(n.code,{children:"http://<your-server-ip>:3004"})," in your browser."]}),"\n",(0,i.jsx)(n.p,{children:"So right now, these two URLs are supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"http://<your-server-ip>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Request goes to port ",(0,i.jsx)(n.code,{children:"80"}),", which nginx receives and forwards to port ",(0,i.jsx)(n.code,{children:"3004"})]}),"\n",(0,i.jsxs)(n.li,{children:["This is made possible by these lines in your configuration file:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"listen 80;"})," (Tells nginx to listen to port 80 which is the default port for HTTP)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"proxy_pass http://localhost:3004;"})," (Tells nginx to forward all requests to port)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"http://<your-server-ip>:3004"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Request goes to port ",(0,i.jsx)(n.code,{children:"3004"})," directly"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Later, we'll remove port ",(0,i.jsx)(n.code,{children:"3004"})," from the instance's firewall, so outside requests for it will be denied. The world will need to use HTTP (port ",(0,i.jsx)(n.code,{children:"80"}),") or HTTPS (port ",(0,i.jsx)(n.code,{children:"443"})," - which we'll later configure in the file). However, our NodeJS app will continue to listen to port ",(0,i.jsx)(n.code,{children:"3004"}),", and internally (on the server) that's the port nginx and our app will use to communicate together. Internally, all ports are available and don't need to be configured via a firewall."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.h3,{id:"502-bad-gateway",children:(0,i.jsx)(n.strong,{children:"502 Bad Gateway"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure your Node.js app is running on port ",(0,i.jsx)(n.code,{children:"3004"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Check the Node.js app logs for errors."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"firewall-issues",children:(0,i.jsx)(n.strong,{children:"Firewall Issues"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure port 80 is open on your server. For AWS Lightsail:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to your Lightsail instance > ",(0,i.jsx)(n.strong,{children:"Networking"})," > Add a rule to allow traffic on port 80."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nginx-logs",children:(0,i.jsx)(n.strong,{children:"Nginx Logs"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check Nginx logs for errors:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo tail -f /var/log/nginx/error.log\n"})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);