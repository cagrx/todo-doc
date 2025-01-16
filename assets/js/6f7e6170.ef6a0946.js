"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[841],{8543:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"level1/auth/authentication/firebase1","title":"Firebase Auth Part 1","description":"Authentication Provider Landscape","source":"@site/docs/level1/auth/authentication/firebase1.md","sourceDirName":"level1/auth/authentication","slug":"/level1/auth/authentication/firebase1","permalink":"/todo-doc/docs/level1/auth/authentication/firebase1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_label":"Firebase Authentication","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Authentication","permalink":"/todo-doc/docs/category/authentication"},"next":{"title":"Token Flow & Private Key","permalink":"/todo-doc/docs/level1/auth/authentication/token-flow"}}');var t=i(4848),r=i(8453);const o={sidebar_label:"Firebase Authentication",sidebar_position:5},a="Firebase Auth Part 1",l={},c=[{value:"Authentication Provider Landscape",id:"authentication-provider-landscape",level:2},{value:"Setting Up Firebase Authentication",id:"setting-up-firebase-authentication",level:2},{value:"Step 1: Create a Firebase Project",id:"step-1-create-a-firebase-project",level:3},{value:"Step 2: Register Your Web Application",id:"step-2-register-your-web-application",level:3},{value:"Step 3: Enable Authentication",id:"step-3-enable-authentication",level:3},{value:"Step 4: Enable Anonymous Authentication",id:"step-4-enable-anonymous-authentication",level:3},{value:"Step 5: Add Firebase SDK to Your Project",id:"step-5-add-firebase-sdk-to-your-project",level:3},{value:"Understanding User IDs and Tokens in Firebase Authentication",id:"understanding-user-ids-and-tokens-in-firebase-authentication",level:2},{value:"User ID vs. Token",id:"user-id-vs-token",level:3},{value:"User ID",id:"user-id",level:4},{value:"Token",id:"token",level:4},{value:"Lifecycle and Scope of Anonymous User IDs",id:"lifecycle-and-scope-of-anonymous-user-ids",level:3},{value:"Best Practices",id:"best-practices",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"firebase-auth-part-1",children:"Firebase Auth Part 1"})}),"\n",(0,t.jsx)(n.h2,{id:"authentication-provider-landscape",children:"Authentication Provider Landscape"}),"\n",(0,t.jsx)(n.p,{children:"When it comes to implementing authentication in web applications, developers have several options. Some popular choices include Auth0, Okta, Amazon Cognito, and Firebase Authentication. Each of these providers offers robust security features and supports various authentication methods. Auth0 is known for its flexibility and extensive integration options. Okta is favored for its enterprise-grade security and compliance features. Amazon Cognito is well-integrated with other AWS services and offers scalable user management. Firebase Authentication, our chosen solution, is part of Google's Firebase platform and is known for its ease of use and tight integration with other Firebase services."}),"\n",(0,t.jsx)(n.p,{children:"Here's a comparison of these providers based on our selection criteria:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature"}),(0,t.jsx)(n.th,{children:"Firebase Auth"}),(0,t.jsx)(n.th,{children:"Auth0"}),(0,t.jsx)(n.th,{children:"Okta"}),(0,t.jsx)(n.th,{children:"Amazon Cognito"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Guest/Anonymous Auth"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u274c"}),(0,t.jsx)(n.td,{children:"\u274c"}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Easy Guest to Full User Transition"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u274c"}),(0,t.jsx)(n.td,{children:"\u274c"}),(0,t.jsx)(n.td,{children:"\u274c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hosted Solution"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Low Maintenance"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Secure & Best Practices"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Free Tier Available"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Easy Integration"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"As we can see, while all these providers offer secure, hosted solutions with low maintenance requirements, Firebase Authentication stands out for our needs due to its support for guest authentication and easy transition from guest to full user accounts."}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-firebase-authentication",children:"Setting Up Firebase Authentication"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to create a Firebase project and activate Firebase Authentication for your application."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-create-a-firebase-project",children:"Step 1: Create a Firebase Project"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://console.firebase.google.com/",children:"Firebase Console"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Click on "Add project" or "Create a project".'}),"\n",(0,t.jsxs)(n.li,{children:['Enter a name for your project, e.g., "Todo-App". Click ',(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Do Note"})," enable Google Analytics for your project right now. Click ",(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Firebase will spend some time creating your project. When it's done, click ",(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-register-your-web-application",children:"Step 2: Register Your Web Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"You'll likely see a landing page displaying your app name (e.g. Todo-App). If not, got to the Firebase Console and select your newly created project."}),"\n",(0,t.jsxs)(n.li,{children:["Click on the web icon ",(0,t.jsx)(n.code,{children:"(</>)"}),' to add a web app to your project. This may appear as "Add an app to get started".']}),"\n",(0,t.jsx)(n.li,{children:'Give your app a nickname, e.g., "Todo-App-Web".'}),"\n",(0,t.jsxs)(n.li,{children:["Do ",(0,t.jsx)(n.strong,{children:"not"})," select 'Also set up Firebase Hosting for this app'."]}),"\n",(0,t.jsx)(n.li,{children:'Click "Register app".'}),"\n",(0,t.jsxs)(n.li,{children:["Firebase will provide you with configuration details. Save these for later use in your application. The contents defined in ",(0,t.jsx)(n.code,{children:"const firebaseConfig"})," are especially important to save somewhere."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Continue to console"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-3-enable-authentication",children:"Step 3: Enable Authentication"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'In the left sidebar of the Firebase Console, expand the "Build" section and click on "Authentication".'}),"\n",(0,t.jsx)(n.li,{children:'Click the "Get started" button if you haven\'t set up authentication before.'}),"\n",(0,t.jsx)(n.li,{children:'In the "Sign-in method" tab, you\'ll see a list of sign-in providers.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-4-enable-anonymous-authentication",children:"Step 4: Enable Anonymous Authentication"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Find "Anonymous" in the list of sign-in providers.'}),"\n",(0,t.jsx)(n.li,{children:"Click on it to expand the options."}),"\n",(0,t.jsx)(n.li,{children:"Toggle the switch to enable Anonymous authentication."}),"\n",(0,t.jsx)(n.li,{children:'Click "Save" to confirm the changes.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-5-add-firebase-sdk-to-your-project",children:"Step 5: Add Firebase SDK to Your Project"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In your VSCode project directory, and from a ",(0,t.jsx)(n.strong,{children:"local terminal"})," install the Firebase SDK:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install firebase firebase-admin\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We need ",(0,t.jsx)(n.code,{children:"firebase"})," for client-side operations (browser). This is used for operations like signing in users, listening to auth state changes, etc."]}),"\n",(0,t.jsxs)(n.p,{children:["We need ",(0,t.jsx)(n.code,{children:"firebase-admin"})," for server-side operations (NodeJS backend). This is used for operations like verifying ID tokens, managing users server-side, accessing Firestore with admin privileges, etc"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Generate a new private key for your service account:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go to the Firebase Console."}),"\n",(0,t.jsx)(n.li,{children:"Navigate to Project settings (gear icon near the top left)."}),"\n",(0,t.jsx)(n.li,{children:'Go to the "Service Accounts" tab.'}),"\n",(0,t.jsx)(n.li,{children:'Click "Generate new private key".'}),"\n",(0,t.jsx)(n.li,{children:"Save the JSON file securely - you'll need this to initialize the admin SDK."}),"\n",(0,t.jsxs)(n.li,{children:["Also save a copy in your VSCode project in the ",(0,t.jsx)(n.code,{children:"keys"})," directory. Rename the file ",(0,t.jsx)(n.code,{children:"gcp-todo-app.json"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Double check your project's ",(0,t.jsx)(n.code,{children:".gitignore"})," and ",(0,t.jsx)(n.code,{children:".rsyncignore"})," files and ensure each has an entry for ",(0,t.jsx)(n.code,{children:"keys/"}),". This will ensure the sensitive keys stored in this directory aren't leaked unintentionally."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Add the following code to the top of your ",(0,t.jsx)(n.code,{children:"server.js"})," file to enable your server to use firebase admin"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Set up Firebase user auth\nconst admin = require("firebase-admin");\nconst serviceAccount = require("./keys/gcp-todo-app.json");\nadmin.initializeApp({\n  credential: admin.credential.cert(serviceAccount),\n});\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Add the firebase javascript files to your ",(0,t.jsx)(n.code,{children:"index.html"})," page (or whatever page is your current working version of the todo list)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The files are the three ",(0,t.jsx)(n.code,{children:"firebase"})," files found below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Todo List</title>\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n    <script src="https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js"><\/script>\n    <script src="https://www.gstatic.com/firebasejs/11.1.0/firebase-auth-compat.js"><\/script>\n    <script src="https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore-compat.js"><\/script>\n</head>\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Add the following to the end of your existing javascript code in the ",(0,t.jsx)(n.code,{children:"document.addEventListener('DOMContentLoaded', () => {"})," section of your ",(0,t.jsx)(n.code,{children:".html"})," file. It likely begins right after the definition of the existing ",(0,t.jsx)(n.code,{children:"createNoItemsMessage"})," function."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Firebase configuration"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Existing code - do not change.\nfunction createNoItemsMessage() {\n  const li = document.createElement("li");\n  li.className = "list-group-item text-muted";\n  li.textContent = "Congratulations! You have no todos! \ud83c\udf89";\n  return li;\n}\n\n// Add your new code here\n\n// Firebase configuration\nconst firebaseConfig = {\n  apiKey: "AIzaSyArNAONDg_f6yU0x3rLgYhOwuXOwOJU-NA",\n  authDomain: "todo-app-dff51.firebaseapp.com",\n  projectId: "todo-app-dff51",\n  storageBucket: "todo-app-dff51.firebasestorage.app",\n  messagingSenderId: "559330429731",\n  appId: "1:559330429731:web:8628c816da2307e1a75a96",\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"This object contains the configuration details for your Firebase project. These values are unique to your project and are used to connect your web app to the correct Firebase backend. You obtain these from the Firebase Console when setting up your project."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Initializing Firebase"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Initialize Firebase\nfirebase.initializeApp(firebaseConfig);\nconst auth = firebase.auth();\n"})}),"\n",(0,t.jsx)(n.p,{children:"This code initializes Firebase with your configuration and creates an auth object that you'll use to interact with Firebase Authentication."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Auth State Listener"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Set up the auth state listener\nauth.onAuthStateChanged((user) => {\n  if (user) {\n    console.log("Signed in as:", user.uid);\n  } else {\n    console.log("No user signed in");\n    // Optionally, handle signed-out state\n  }\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:"This sets up a listener for changes in authentication state. When a user signs in or out, this function will be called. Right now we're just logging information to the console, but we'll expand on this later. But for now, when they do log in, you'll see the user's user.uid in the console. This is the unique user id provided by Firebase Authentication."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Get ID Token Function"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Function to get the current user's ID token\n// getIdToken will also manage to token's freshness\nasync function getIdToken() {\n  const user = auth.currentUser;\n  if (user) {\n    return user.getIdToken();\n  } else {\n    throw new Error(\"No user is signed in\");\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This function retrieves the current user's ID token, which you can use to authenticate requests to your backend. It's an async function, so you'll need to use ",(0,t.jsx)(n.code,{children:"await"})," or ",(0,t.jsx)(n.code,{children:".then()"})," when calling it. If no user is signed in, it throws an error."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"getIdToken()"})," method automatically refreshes the token if it's expired, ensuring you always have a valid token for authentication."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Anonymous Sign-In"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Sign in anonymously\nauth.signInAnonymously().catch((error) => {\n  console.error("Error signing in:", error);\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This code attempts to sign in the user anonymously. If successful, it will trigger the ",(0,t.jsx)(n.code,{children:"onAuthStateChanged"})," listener above. If there's an error, it will log the error to the console. As it stands, this sign-in code executes automatically when the page loads or refreshes. So the user will automatically sign in anonymously (and get a user id) without explicitly performing any action."]}),"\n",(0,t.jsx)(n.p,{children:"In the future we may want to trigger this on a specific user action instead."}),"\n",(0,t.jsx)(n.p,{children:"But our immediate goal is to simply get a user id we can use to associate with todos."}),"\n",(0,t.jsx)(n.p,{children:"Step 6: Verify With Your Browser"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Start your server ",(0,t.jsx)(n.code,{children:"node server.js"})]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to your web page (e.g. ",(0,t.jsx)(n.code,{children:"http://localhost:3004/index.html"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Open a browser developer console (e.g. web developer tools)"}),"\n",(0,t.jsxs)(n.li,{children:["You should see something in the console output like","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Signed in as: Sl8n6LJ86vQGSkwlsvGdqcLijxX2 index.html:287:29\n"})}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"That value is your anonymous user id provided by Firebase Auth."}),"\n",(0,t.jsx)(n.li,{children:"Refresh your page. The user id should remain the same."}),"\n",(0,t.jsx)(n.li,{children:"Try from a different window, a different browser, a different device. You should see different user ids."}),"\n",(0,t.jsx)(n.li,{children:"Return to your Firebase Auth Project Console. Under Authentication > Users, you should see a number of (anonymous) users."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"understanding-user-ids-and-tokens-in-firebase-authentication",children:"Understanding User IDs and Tokens in Firebase Authentication"}),"\n",(0,t.jsx)(n.h3,{id:"user-id-vs-token",children:"User ID vs. Token"}),"\n",(0,t.jsx)(n.h4,{id:"user-id",children:"User ID"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A unique identifier for each user in your Firebase project."}),"\n",(0,t.jsx)(n.li,{children:"Remains constant for the lifetime of the user's account."}),"\n",(0,t.jsx)(n.li,{children:"For anonymous users, this ID persists as long as the account exists."}),"\n",(0,t.jsx)(n.li,{children:"Used to associate user data in your database."}),"\n",(0,t.jsxs)(n.li,{children:["An example of a Firebase user id looks like this:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"W01DwpBsjreVi9GDwTUF32LD8su2\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"token",children:"Token"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A JSON Web Token (JWT) that proves the user's identity."}),"\n",(0,t.jsx)(n.li,{children:"Contains encoded information, including the user ID."}),"\n",(0,t.jsx)(n.li,{children:"Has an expiration time (typically 1 hour) and is refreshed automatically."}),"\n",(0,t.jsx)(n.li,{children:"Used for authenticating requests to your backend or Firebase services."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The key difference is that while the token changes frequently for security reasons, the user ID inside it remains constant, allowing for consistent user identification."}),"\n",(0,t.jsx)(n.p,{children:"An example of a token looks like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwZDg4ZGQ1NWQxYjAwZDg0ZWU4MWQwYjk2M2RlNGNkOGM0ZmFjM2UiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90b2RvLWFwcC1kZmY1MSIsImF1ZCI6InRvZG8tYXBwLWRmZjUxIiwiYXV0aF90aW1lIjoxNzM2Nzg2NDMwLCJ1c2VyX2lkIjoiU2w4bjZMSjg2dlFHU2t3bHN2R2RxY0xpanhYMiIsInN1YiI6IlNsOG42TEo4NnZRR1Nrd2xzdkdkcWNMaWp4WDIiLCJpYXQiOjE3MzY4ODIzODcsImV4cCI6MTczNjg4NTk4NywiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.MZaK805jbTjcjMO9vMtn_rG3NgNlwifdnF2rUypyaAXHYk6Q2H0XFz9dwognRSiTzoMDTEpX_0B8Ivh7pnCQpbQxWJn8GxyvSmrHebMZAT-HeBHjm8Aow0CwxaTdy2z6-0CJMv0m7RQRHILqo-b5zZtSWOUM7R4S7SpN6SOZo5s6JUA68_jtDh46xv3rt6xE09URhRifGJFxEvsjFTfTNxSsB-3KknYSlKFXOXNxhWN7HicBSB87S0q23d42Bn_Y2v_CncSXe0iiFGbJCMaXcHV_nsxq5NDA3oMy6gQZTiwLk-FmW7hit5yS68lGk---hI69n_jugVa9Sk2HwgbFHg"})}),"\n",(0,t.jsx)(n.p,{children:"This token is composed of three parts:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Header (encoded)"}),"\n",(0,t.jsx)(n.li,{children:"Payload (encoded)"}),"\n",(0,t.jsx)(n.li,{children:"Signature"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Decoded Payload"})}),"\n",(0,t.jsx)(n.p,{children:"The middle part (payload) when decoded might look something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "John Doe",\n  "iss": "https://securetoken.google.com/your-project-id",\n  "aud": "your-project-id",\n  "auth_time": 1626123456,\n  "user_id": "A123B456C78",\n  "sub": "A123B456C78",\n  "iat": 1626123456,\n  "exp": 1626127056,\n  "email": "johndoe@example.com",\n  "email_verified": false,\n  "firebase": {\n    "identities": {\n      "email": ["johndoe@example.com"]\n    },\n    "sign_in_provider": "password"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Key Fields"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"user_id"}),": The unique identifier for the user (matches sub)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"iss"}),": Issuer of the token (Firebase)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"aud"}),": Audience (your Firebase project ID)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"exp"}),": Expiration time"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"iat"}),": Time the token was issued"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"auth_time"}),": Time the user authenticated"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note that the actual content may vary based on the authentication method and user properties. For anonymous users, some fields like name and email would be absent."}),"\n",(0,t.jsx)(n.p,{children:"Remember, never decode JWTs client-side to make security decisions. Always verify tokens on your server using Firebase Admin SDK."}),"\n",(0,t.jsx)(n.h3,{id:"lifecycle-and-scope-of-anonymous-user-ids",children:"Lifecycle and Scope of Anonymous User IDs"}),"\n",(0,t.jsx)(n.p,{children:"Anonymous authentication in Firebase creates a temporary user account with a unique ID. Here are important points to understand:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Persistence"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The anonymous user ID persists across multiple sessions within the same browser."}),"\n",(0,t.jsx)(n.li,{children:"It's stored in the browser's local storage or IndexedDB."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Limitations"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the user clears their browser data, the anonymous account is lost."}),"\n",(0,t.jsx)(n.li,{children:"Different browsers or devices will have different anonymous user IDs."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Duration"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Anonymous accounts don't expire on their own."}),"\n",(0,t.jsx)(n.li,{children:"They remain valid until explicitly deleted or converted to permanent accounts."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cross-Device Limitations"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An anonymous user can't access their data from a different device or browser."}),"\n",(0,t.jsx)(n.li,{children:"Each new browser/device creates a new anonymous account."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Conversion"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Firebase allows converting anonymous accounts to permanent accounts (e.g., email/password)."}),"\n",(0,t.jsx)(n.li,{children:"This preserves the user's data under the same User ID."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use anonymous authentication for immediate access with low friction."}),"\n",(0,t.jsx)(n.li,{children:"Encourage users to convert to permanent accounts for long-term data persistence."}),"\n",(0,t.jsx)(n.li,{children:"Be clear about data persistence limitations for anonymous users."}),"\n",(0,t.jsx)(n.li,{children:"Implement server-side checks to validate tokens and user IDs for each request."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Understanding these concepts is crucial for managing user sessions, securing data, and providing a smooth user experience in your application."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);