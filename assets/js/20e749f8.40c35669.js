"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[1318],{2807:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"level1/devops/deployment/manual-deployment","title":"Manual Deployment of Your Application","description":"Now that we have our app working successfully on our local machine, it\u2019s time to deploy it to the server. The goal is to copy our application\u2019s code to the server and run it there so it can handle requests and serve users.","source":"@site/docs/level1/devops/deployment/manual-deployment.md","sourceDirName":"level1/devops/deployment","slug":"/level1/devops/deployment/manual-deployment","permalink":"/todo-doc/docs/level1/devops/deployment/manual-deployment","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":50,"frontMatter":{"sidebar_label":"Manual Deployment","sidebar_position":50},"sidebar":"tutorialSidebar","previous":{"title":"Quick Tip - VSCode Teminal","permalink":"/todo-doc/docs/level1/devops/deployment/quick-tip"},"next":{"title":"Snapshots","permalink":"/todo-doc/docs/level1/devops/deployment/snapshots"}}');var o=s(4848),r=s(8453);const l={sidebar_label:"Manual Deployment",sidebar_position:50},t="Manual Deployment of Your Application",c={},d=[{value:"Using <code>rsync</code> for File Transfer",id:"using-rsync-for-file-transfer",level:2},{value:"Installing <code>rsync</code> on your local machine",id:"installing-rsync-on-your-local-machine",level:2},{value:"Step 1: Check if <code>rsync</code> is Installed",id:"step-1-check-if-rsync-is-installed",level:3},{value:"Step 2: Install <code>rsync</code> (if not already installed)",id:"step-2-install-rsync-if-not-already-installed",level:3},{value:"For macOS:",id:"for-macos",level:4},{value:"For Linux (Debian/Ubuntu):",id:"for-linux-debianubuntu",level:4},{value:"For Windows:",id:"for-windows",level:4},{value:"Step 3: Confirm Installation",id:"step-3-confirm-installation",level:3},{value:"Installing <code>rsync</code> on your remote server",id:"installing-rsync-on-your-remote-server",level:2},{value:"Update the system",id:"update-the-system",level:3},{value:"Install <code>rsync</code>",id:"install-rsync",level:3},{value:"Confirm Installation",id:"confirm-installation",level:3},{value:"The <code>.rsyncignore</code> File",id:"the-rsyncignore-file",level:2},{value:"Why Exclude <code>node_modules/</code>?",id:"why-exclude-node_modules",level:3},{value:"Including <code>.env</code>",id:"including-env",level:3},{value:"Running the <code>rsync</code> command.",id:"running-the-rsync-command",level:2},{value:"Breaking Down the Command",id:"breaking-down-the-command",level:3},{value:"Verifying the <code>rsync</code> command",id:"verifying-the-rsync-command",level:2},{value:"Opening Required Ports",id:"opening-required-ports",level:2},{value:"Starting the Application",id:"starting-the-application",level:2},{value:"Verifying the Application",id:"verifying-the-application",level:2},{value:"Modifying the Application",id:"modifying-the-application",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"manual-deployment-of-your-application",children:"Manual Deployment of Your Application"})}),"\n",(0,o.jsx)(n.p,{children:"Now that we have our app working successfully on our local machine, it\u2019s time to deploy it to the server. The goal is to copy our application\u2019s code to the server and run it there so it can handle requests and serve users."}),"\n",(0,o.jsxs)(n.h2,{id:"using-rsync-for-file-transfer",children:["Using ",(0,o.jsx)(n.code,{children:"rsync"})," for File Transfer"]}),"\n",(0,o.jsxs)(n.p,{children:["We\u2019ll use the ",(0,o.jsx)(n.code,{children:"rsync"})," command to transfer files from our local machine to the server. ",(0,o.jsx)(n.code,{children:"rsync"})," is a powerful file copying tool that efficiently syncs directories and files, transferring only the changes to save time and bandwidth. It works over the same port as SSH (port 22), which means it uses your existing SSH connection for secure file transfer."]}),"\n",(0,o.jsxs)(n.h2,{id:"installing-rsync-on-your-local-machine",children:["Installing ",(0,o.jsx)(n.code,{children:"rsync"})," on your local machine"]}),"\n",(0,o.jsxs)(n.p,{children:["Note: The following steps should be performed from your ",(0,o.jsx)(n.strong,{children:"local terminal"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"step-1-check-if-rsync-is-installed",children:["Step 1: Check if ",(0,o.jsx)(n.code,{children:"rsync"})," is Installed"]}),"\n",(0,o.jsx)(n.p,{children:"Open your terminal and run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rsync --version\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"rsync"})," is installed, you\u2019ll see its version number and details."]}),"\n",(0,o.jsxs)(n.li,{children:["If it\u2019s not installed, you\u2019ll see a message like ",(0,o.jsx)(n.code,{children:"command not found"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"step-2-install-rsync-if-not-already-installed",children:["Step 2: Install ",(0,o.jsx)(n.code,{children:"rsync"})," (if not already installed)"]}),"\n",(0,o.jsx)(n.h4,{id:"for-macos",children:"For macOS:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.a,{href:"https://brew.sh",children:"Homebrew"})," (if not already installed):","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Use Homebrew to install ",(0,o.jsx)(n.code,{children:"rsync"}),":","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"brew install rsync\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"for-linux-debianubuntu",children:"For Linux (Debian/Ubuntu):"}),"\n",(0,o.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt install rsync\n"})}),"\n",(0,o.jsx)(n.h4,{id:"for-windows",children:"For Windows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.a,{href:"https://www.cygwin.com/",children:"Cygwin"})," or ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/",children:"Windows Subsystem for Linux (WSL)"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Ensure ",(0,o.jsx)(n.code,{children:"rsync"})," is included during the installation of Cygwin, or use your Linux distribution's package manager in WSL to install it:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt install rsync\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step-3-confirm-installation",children:"Step 3: Confirm Installation"}),"\n",(0,o.jsx)(n.p,{children:"Run the following command again to verify the installation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rsync --version\n"})}),"\n",(0,o.jsx)(n.p,{children:"You should now see the version details if the installation was successful."}),"\n",(0,o.jsxs)(n.h2,{id:"installing-rsync-on-your-remote-server",children:["Installing ",(0,o.jsx)(n.code,{children:"rsync"})," on your remote server"]}),"\n",(0,o.jsxs)(n.p,{children:["We also need to install ",(0,o.jsx)(n.code,{children:"rsync"})," on the remote server."]}),"\n",(0,o.jsxs)(n.p,{children:["From a ",(0,o.jsx)(n.strong,{children:"remote terminal"}),", ssh to your remote server be following the previous steps outlined in our instance setup:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ssh -i keys/lightsail-key.pem bitnami@<lightsail-instance-ip>\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"<lightsail-instance-ip>"})," with the public IP address of your Lightsail instance, which can be found in the Lightsail dashboard."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Now that you're in the remote server..."}),"\n",(0,o.jsx)(n.h3,{id:"update-the-system",children:"Update the system"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Since we haven't yet done so, let's update check to be sure our server has the latest updates. This has nothing to do with our application right now, but rather it ensures the operating system and other system level components have all the latest updates like security patches. We should do this manually every so often."}),"\n",(0,o.jsxs)(n.li,{children:["Run ",(0,o.jsx)(n.code,{children:"sudo apt update"})]}),"\n",(0,o.jsxs)(n.li,{children:["Note: The ",(0,o.jsx)(n.code,{children:"sudo"})," command is used to run apt update with superuser (administrator) privileges because updating system package information requires access to system files that regular users can\u2019t modify. Without sudo, the command would fail due to insufficient permissions."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"install-rsync",children:["Install ",(0,o.jsx)(n.code,{children:"rsync"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Now let's install ",(0,o.jsx)(n.code,{children:"rsync"})," by running the command:",(0,o.jsx)("br",{})," ",(0,o.jsx)(n.code,{children:"sudo apt install rsync -y"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sudo"}),": Runs the command with superuser (administrator) privileges, which are required for making changes to system software or installing packages."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"apt"}),": The package manager used on Debian-based Linux distributions (e.g., Ubuntu). It handles the retrieval, installation, and management of software packages."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"install"}),": The subcommand that tells apt to install a package."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rsync"}),": The name of the package to be installed. In this case, it\u2019s a utility for efficiently transferring and synchronizing files across systems."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-y"}),": A flag that automatically answers \u201cyes\u201d to any prompts during the installation process. This makes the command non-interactive, useful in scripts or when you want to avoid manual confirmation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"confirm-installation",children:"Confirm Installation"}),"\n",(0,o.jsx)(n.p,{children:"Run the following command again to verify the installation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rsync --version\n"})}),"\n",(0,o.jsx)(n.p,{children:"You should now see the version details if the installation was successful."}),"\n",(0,o.jsxs)(n.p,{children:["Now that we have ",(0,o.jsx)(n.code,{children:"rsync"})," installed on both the local machine and remote server, let's look at a few ",(0,o.jsx)(n.code,{children:"rsync"})," considerations for our project."]}),"\n",(0,o.jsxs)(n.h2,{id:"the-rsyncignore-file",children:["The ",(0,o.jsx)(n.code,{children:".rsyncignore"})," File"]}),"\n",(0,o.jsxs)(n.p,{children:["To ensure we don\u2019t transfer unnecessary files, we\u2019ll use an ",(0,o.jsx)(n.code,{children:".rsyncignore"})," file. This file tells ",(0,o.jsx)(n.code,{children:"rsync"})," which files and folders to skip during the transfer. For example, we\u2019ll exclude the ",(0,o.jsx)(n.code,{children:"node_modules/"})," directory, which contains dependencies installed locally. This is fine because those dependencies will be reinstalled on the server."]}),"\n",(0,o.jsxs)(n.p,{children:["Create an ",(0,o.jsx)(n.code,{children:".rsyncignore"})," file in the root of our project directory and ensure it includes:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"node_modules/\nkeys/\n*.log\n.DS_Store\n.git/\n.gitignore\n.vscode/\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"why-exclude-node_modules",children:["Why Exclude ",(0,o.jsx)(n.code,{children:"node_modules/"}),"?"]}),"\n",(0,o.jsxs)(n.p,{children:["Instead of copying ",(0,o.jsx)(n.code,{children:"node_modules/"})," from our local machine, we\u2019ll replicate its contents on the server by running ",(0,o.jsx)(n.code,{children:"npm install"})," from the server itself. This command reads the ",(0,o.jsx)(n.code,{children:"package.json"})," file in your project and downloads all the dependencies, ensuring they match the specified versions."]}),"\n",(0,o.jsxs)(n.h3,{id:"including-env",children:["Including ",(0,o.jsx)(n.code,{children:".env"})]}),"\n",(0,o.jsxs)(n.p,{children:["For now, we\u2019ll include the ",(0,o.jsx)(n.code,{children:".env"})," file in the transfer. This file contains configuration settings our server needs, such as database credentials, API keys, and other environment variables. Generally you want to be very selective where copies of .env exist because they often contain secrets like passwords. Since this is a small educational project, we can use this method. If this were a more high-stakes application in a business production environment, we'd seek more robust methods of accessing secrets."]}),"\n",(0,o.jsxs)(n.h2,{id:"running-the-rsync-command",children:["Running the ",(0,o.jsx)(n.code,{children:"rsync"})," command."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"[Local command]"})}),"\n",(0,o.jsx)(n.p,{children:"From your local terminal, and from the project's root directory, run the following command (replacing the ip address below with that of your own instance):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rsync -avz --exclude-from='.rsyncignore' -e \"ssh -i keys/lightsail-key.pem\" ./ bitnami@18.188.191.122:~/todo-app\n"})}),"\n",(0,o.jsx)(n.h3,{id:"breaking-down-the-command",children:"Breaking Down the Command"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"rsync"})}),":\nThe command itself, used for synchronizing files between machines."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"-avz"})}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-a"})," (archive mode): Preserves file permissions, symbolic links, and directory structure."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-v"})," (verbose): Outputs details about the synchronization process."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-z"})," (compress): Compresses files during transfer to reduce bandwidth usage."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"--exclude-from='.rsyncignore'"})}),":\nSpecifies a file (",(0,o.jsx)(n.code,{children:".rsyncignore"}),") that contains patterns of files and directories to exclude from the transfer."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:'-e "ssh -i keys/lightsail-key.pem"'})}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-e"}),": Specifies the remote shell to use for the transfer, which is SSH in this case."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"ssh -i keys/lightsail-key.pem"'}),": Uses the SSH private key (",(0,o.jsx)(n.code,{children:"lightsail-key.pem"}),") located in the ",(0,o.jsx)(n.code,{children:"keys"})," directory to authenticate the connection."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"./"})}),":\nIndicates the source directory (current directory in this case) to synchronize."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"bitnami@18.188.191.122"})}),":\nThe SSH credentials for the remote server:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"bitnami"}),": The username."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"18.188.191.122"}),": The IP address of the remote server."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:":~/todo-app"})}),":\nSpecifies the destination path on the remote server where the files will be copied (",(0,o.jsx)(n.code,{children:"todo-app"})," directory in the user's home directory)."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"verifying-the-rsync-command",children:["Verifying the ",(0,o.jsx)(n.code,{children:"rsync"})," command"]}),"\n",(0,o.jsx)(n.p,{children:"Now that the files have been copied to your remote server, let's see if they're actually there."}),"\n",(0,o.jsxs)(n.p,{children:["Switch over to your ",(0,o.jsx)(n.strong,{children:"remote terminal"})," (or sign in so the remote server using the ",(0,o.jsx)(n.code,{children:"ssh"})," commands from above)."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type ",(0,o.jsx)(n.code,{children:"pwd"})," and notice you're at ",(0,o.jsx)(n.code,{children:"/home/bitnami"}),", which is the home directory for the user."]}),"\n",(0,o.jsxs)(n.li,{children:["Type ",(0,o.jsx)(n.code,{children:"ls -l"})," and you should notice the ",(0,o.jsx)(n.code,{children:"todo-app"})," directory."]}),"\n",(0,o.jsxs)(n.li,{children:["Type ",(0,o.jsx)(n.code,{children:"cd todo-app"})," to change into that directory."]}),"\n",(0,o.jsxs)(n.li,{children:["Type ",(0,o.jsx)(n.code,{children:"ls -l"})," and you should see the project's files and directories. If so, then you've successfully used ",(0,o.jsx)(n.code,{children:"rsync"})," to synchronize your local directory contents with your remote machine."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Before we can run our app, we need to open our instance's ports so we can access the web app and so the server can talk to our database."}),"\n",(0,o.jsx)(n.h2,{id:"opening-required-ports",children:"Opening Required Ports"}),"\n",(0,o.jsx)(n.p,{children:"Before running the app on the server, we need to open two ports:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Port 3004"}),": This will allow us to verify that our app is running by connecting to it through a browser or API client."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Port 3306"}),": This allows the server to connect to the remote MySQL database."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Let's open Port 3004:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Navigate to the instance's Networking section and scroll to IPv4 networking."}),"\n",(0,o.jsx)(n.li,{children:"Click + Add rule"}),"\n",(0,o.jsxs)(n.li,{children:["Select or enter the following:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Application: Custom"}),"\n",(0,o.jsx)(n.li,{children:"Protocol: TCP"}),"\n",(0,o.jsx)(n.li,{children:"Port or range: 3004"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.code,{children:"Create"})," button"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'You should notice that a new rule has been added to the Firewall that includes port 3004. The "Restricted to" column should say "Any IPv4 address", which means anyone in the world can now make requests to port 3004 on this instance.'}),"\n",(0,o.jsx)(n.p,{children:"Follow these same steps to open Port 3306."}),"\n",(0,o.jsx)(n.p,{children:"Security note: These ports are open and available to everyone. This is ok for our small educational project. However you'd rarely allow such open access to projects with higher stakes."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The only thing stopping a random person from accessing your database is access to your credentials."}),"\n",(0,o.jsxs)(n.li,{children:["Our db username is ",(0,o.jsx)(n.code,{children:"admin"}),", which is the default setup value, making it easily guessable."]}),"\n",(0,o.jsx)(n.li,{children:"Our password is kept out of the public's view. But if anyone knew it, they could connect and do anything they want with the database."}),"\n",(0,o.jsxs)(n.li,{children:["This makes it especially important that our ",(0,o.jsx)(n.code,{children:".env"})," file is included in ",(0,o.jsx)(n.code,{children:".gitignore"}),", especially for public git repositories. Otherwise, anyone browsing your codeline could easily gain access to your database and other resources."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"starting-the-application",children:"Starting the Application"}),"\n",(0,o.jsx)(n.p,{children:"Now that the code is sync'd with the remote server, and the server's ports are opened, we can start the application."}),"\n",(0,o.jsxs)(n.p,{children:["From a ",(0,o.jsx)(n.strong,{children:"remote terminal"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Navigate to the project's root directory:",(0,o.jsx)("br",{})," ",(0,o.jsx)(n.code,{children:"cd todo-app"})," or ",(0,o.jsx)(n.code,{children:"cd ~/todo-app"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Install dependencies with:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n","Note: You only need to run ",(0,o.jsx)(n.code,{children:"npm install"})," because we haven't yet installed the project's dependencies. Once installed, those dependencies will be installed into ",(0,o.jsx)(n.code,{children:"/node_modules"})," and stored there. You'll only need to run ",(0,o.jsx)(n.code,{children:"npm install"})," again if you later add new dependencies to ",(0,o.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Start the application manually using the ",(0,o.jsx)(n.code,{children:"node"})," command:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"node server.js\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You should see a message like ",(0,o.jsx)(n.code,{children:"Server running on port 3004"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"verifying-the-application",children:"Verifying the Application"}),"\n",(0,o.jsxs)(n.p,{children:["Once the app is running, open a browser and navigate to ",(0,o.jsx)(n.code,{children:"http://<your-server-ip>:3004/"}),". If everything is set up correctly, you should see the contents of the ",(0,o.jsx)(n.code,{children:"index.html"})," file from the ",(0,o.jsx)(n.code,{children:"public"})," directory in your project."]}),"\n",(0,o.jsx)(n.p,{children:"Recall that we had various examples of todo html files. You should access the latest one and try it out."}),"\n",(0,o.jsxs)(n.p,{children:["For example: ",(0,o.jsx)(n.code,{children:"http://<your-server-ip>:3004/todo-op-2.html"})]}),"\n",(0,o.jsx)(n.p,{children:"Your app should work completely, including access to your database. Try adding, marking, and deleting todos from your web page."}),"\n",(0,o.jsxs)(n.p,{children:["Also, just like we did in our local environment, you can use Postman to call the APIs on your remote server. Simply change references to ",(0,o.jsx)(n.code,{children:"localhost"})," to ",(0,o.jsx)(n.code,{children:"<your-server-ip>"})," and they should work."]}),"\n",(0,o.jsx)(n.h2,{id:"modifying-the-application",children:"Modifying the Application"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"rsync"})," will also sync file changes too! For example, change something in your html file locally. Then run your ",(0,o.jsx)(n.code,{children:"rsync"})," command again. Notice that ",(0,o.jsx)(n.code,{children:"rsync"})," efficiently only sends the files that have changed. Refresh your browser and your change should appear. (If it doesn't, try stopping the remote server via CTRL-C and starting it again via ",(0,o.jsx)(n.code,{children:"node server.js"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"This completes the manual deployment process! In future lessons, we\u2019ll explore automating parts of this workflow for easier deployment."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(6540);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);