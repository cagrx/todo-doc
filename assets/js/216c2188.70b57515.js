"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[318],{6939:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"level1/auth/authentication/middleware","title":"Securing API Routes with Middleware","description":"In this section, we refactor the token-handling logic into a reusable middleware function named verifyToken. This modular approach simplifies route logic, adheres to the middleware pattern, and ensures consistency in how token validation is handled across routes.","source":"@site/docs/level1/auth/authentication/middleware.md","sourceDirName":"level1/auth/authentication","slug":"/level1/auth/authentication/middleware","permalink":"/todo-doc/docs/level1/auth/authentication/middleware","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_label":"Securing API Routes","sidebar_position":15},"sidebar":"tutorialSidebar","previous":{"title":"Get User ID within API","permalink":"/todo-doc/docs/level1/auth/authentication/firebase-get-userid"},"next":{"title":"Add User ID to the Database","permalink":"/todo-doc/docs/level1/auth/authentication/add-userid-db"}}');var t=i(4848),r=i(8453);const o={sidebar_label:"Securing API Routes",sidebar_position:15},d="Securing API Routes with Middleware",a={},l=[{value:"What is the Middleware Pattern?",id:"what-is-the-middleware-pattern",level:2},{value:"Example Flow Using Middleware",id:"example-flow-using-middleware",level:3},{value:"Refactoring Token Handling into Middleware",id:"refactoring-token-handling-into-middleware",level:2},{value:"Create <code>verifyToken</code> Middleware",id:"create-verifytoken-middleware",level:3},{value:"Update the <code>ping</code> Route",id:"update-the-ping-route",level:3},{value:"Execution Flow",id:"execution-flow",level:3},{value:"Test the Refactored Code",id:"test-the-refactored-code",level:2},{value:"Using the Web Page",id:"using-the-web-page",level:3},{value:"Using Postman",id:"using-postman",level:3},{value:"Show the token in the browser console",id:"show-the-token-in-the-browser-console",level:4},{value:"Add the token to the authorization header in Postman",id:"add-the-token-to-the-authorization-header-in-postman",level:4},{value:"Advantages of This Approach",id:"advantages-of-this-approach",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"securing-api-routes-with-middleware",children:"Securing API Routes with Middleware"})}),"\n",(0,t.jsxs)(n.p,{children:["In this section, we refactor the token-handling logic into a reusable middleware function named ",(0,t.jsx)(n.code,{children:"verifyToken"}),". This modular approach simplifies route logic, adheres to the ",(0,t.jsx)(n.strong,{children:"middleware pattern"}),", and ensures consistency in how token validation is handled across routes."]}),"\n",(0,t.jsxs)(n.p,{children:["We also introduce the ",(0,t.jsx)(n.strong,{children:"middleware pattern"})," and explain how execution flows in Express."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"what-is-the-middleware-pattern",children:"What is the Middleware Pattern?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Middleware"})," refers to a pattern of functions used in web frameworks, like Express.js, to intercept and process requests and responses as they flow through the application. Middleware can:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Modify the ",(0,t.jsx)(n.code,{children:"req"})," and ",(0,t.jsx)(n.code,{children:"res"})," objects."]}),"\n",(0,t.jsx)(n.li,{children:"End the request-response cycle."}),"\n",(0,t.jsxs)(n.li,{children:["Call the ",(0,t.jsx)(n.code,{children:"next()"})," function to pass control to the next middleware or route handler."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Middleware functions are executed sequentially, in the order they are defined."}),"\n",(0,t.jsx)(n.h3,{id:"example-flow-using-middleware",children:"Example Flow Using Middleware"}),"\n",(0,t.jsxs)(n.p,{children:["Consider two pieces of middleware: ",(0,t.jsx)(n.code,{children:"verifyToken"})," and ",(0,t.jsx)(n.code,{children:"ping"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Request Received"}),": The client sends a request to ",(0,t.jsx)(n.code,{children:"/api/ping"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"verifyToken"})," Middleware"]}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Extracts and validates the token."}),"\n",(0,t.jsxs)(n.li,{children:["Attaches the user ID (",(0,t.jsx)(n.code,{children:"req.user.uid"}),") to the request object."]}),"\n",(0,t.jsxs)(n.li,{children:["Passes control to the next middleware or route handler by calling ",(0,t.jsx)(n.code,{children:"next()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"ping"})," Route Handler"]}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Accesses ",(0,t.jsx)(n.code,{children:"req.user.uid"})," to retrieve the authenticated user\u2019s ID."]}),"\n",(0,t.jsx)(n.li,{children:"Returns a response indicating the server is up."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This pattern keeps concerns separated and ensures reusability of common logic like token verification."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"refactoring-token-handling-into-middleware",children:"Refactoring Token Handling into Middleware"}),"\n",(0,t.jsxs)(n.p,{children:["We\u2019ll create a ",(0,t.jsx)(n.code,{children:"verifyToken"})," middleware function that validates tokens and attaches the user ID to the request object."]}),"\n",(0,t.jsxs)(n.p,{children:["We're effectively moving the Firebase token manipulation code out of the ",(0,t.jsx)(n.code,{children:"ping"})," endpoint and into a ",(0,t.jsx)(n.code,{children:"verifyToken"})," function that can be reused by any endpoint."]}),"\n",(0,t.jsxs)(n.h3,{id:"create-verifytoken-middleware",children:["Create ",(0,t.jsx)(n.code,{children:"verifyToken"})," Middleware"]}),"\n",(0,t.jsxs)(n.p,{children:["Add the following middleware function to ",(0,t.jsx)(n.code,{children:"server.js"}),", near the top of the file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Middleware to verify Firebase ID tokens\nconst verifyToken = async (req, res, next) => {\n  const authHeader = req.headers.authorization;\n  if (!authHeader || !authHeader.startsWith("Bearer ")) {\n    return res\n      .status(401)\n      .json({ message: "Unauthorized: Missing or invalid token" });\n  }\n\n  const idToken = authHeader.split("Bearer ")[1];\n  try {\n    // Verify the ID token and attach the decoded user information to req.user\n    req.user = await admin.auth().verifyIdToken(idToken);\n    // Proceed to the route handler\n    next();\n  } catch (error) {\n    return res\n      .status(401)\n      .json({ message: "Unauthorized: Invalid token", error: error.message });\n  }\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Key differences in ",(0,t.jsx)(n.code,{children:"verifyToken"})," vs the previous code within ",(0,t.jsx)(n.code,{children:"ping"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Respond 401 Unauthorized vs throw error"}),": If a missing or invalid token is encountered, instead of throwing an error, the middleware function will respond with a ",(0,t.jsx)(n.code,{children:"401 Unauthorized"})," response and terminate the request-response cycle, preventing execution from proceeding to the /api/ping route handler."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["User and request object vs just ",(0,t.jsx)(n.code,{children:"user_id"})]}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We replaced this code:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const decodedToken = await admin.auth().verifyIdToken(idToken);\nconst user_id = decodedToken.uid;\n"})}),"\n",(0,t.jsx)(n.p,{children:"with this code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"req.user = await admin.auth().verifyIdToken(idToken);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This explicitly creates and assigns a .user property on the req (request) object, populating it with the decoded token information from Firebase Auth. This makes user information (like ",(0,t.jsx)(n.code,{children:"uid"})," and ",(0,t.jsx)(n.code,{children:"name"}),") accessible in downstream middleware or route handlers."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"next()"})}),": After successfully populating req.user, we've accomplished everything we want in this function. The ",(0,t.jsx)(n.code,{children:"next()"})," function in Express passes control to the next middleware or route handler in the request-response cycle. It allows middleware to perform its task (e.g., authentication) and then delegate responsibility to the subsequent logic."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"If next() is not called, the request will hang and not proceed further."})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In summary, a middleware function in Express should either:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Issue a Response"}),": Send an HTTP response (e.g., res.status(401).json(...)) to terminate the request-response cycle."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Call next()"}),": Pass control to the next middleware or route handler in the stack."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These are the two valid and expected ways for a middleware function to exit. Failing to do either will cause the request to hang indefinitely."}),"\n",(0,t.jsxs)(n.h3,{id:"update-the-ping-route",children:["Update the ",(0,t.jsx)(n.code,{children:"ping"})," Route"]}),"\n",(0,t.jsxs)(n.p,{children:["Replace the token-handling logic in ",(0,t.jsx)(n.code,{children:"ping"})," with the ",(0,t.jsx)(n.code,{children:"verifyToken"})," middleware."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Ping route\napp.get("/api/ping", verifyToken, (req, res) => {\n  // verifyToken will be executed before we reach here\n  console.log(req.user.uid);\n  res.status(200).json({\n    status: "UP",\n    timestamp: new Date().toISOString(),\n  });\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"execution-flow",children:"Execution Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Request to ",(0,t.jsx)(n.code,{children:"/api/ping"})]}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The client includes the Authorization header with the token."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"verifyToken"})," Middleware"]}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Extracts and validates the token."}),"\n",(0,t.jsxs)(n.li,{children:["Adds ",(0,t.jsx)(n.code,{children:"req.user"})," for downstream use."]}),"\n",(0,t.jsxs)(n.li,{children:["Calls ",(0,t.jsx)(n.code,{children:"next()"})," to pass control to the route handler."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"ping"})," Route Handler"]}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Accesses ",(0,t.jsx)(n.code,{children:"req.user.uid"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Returns a response indicating the server is operational and includes the user ID."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"test-the-refactored-code",children:"Test the Refactored Code"}),"\n",(0,t.jsx)(n.h3,{id:"using-the-web-page",children:"Using the Web Page"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Start your server: ",(0,t.jsx)(n.code,{children:"node server.js"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Open the web page with the "Ping" button.'}),"\n",(0,t.jsx)(n.li,{children:"Open the browser\u2019s JavaScript console."}),"\n",(0,t.jsx)(n.li,{children:'Click "Ping" and view the server\u2019s terminal and browser console.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Expected server log:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"User ID: Sl8n6LJ86vQGSkwlsvGdqcLijxX2\n"})}),"\n",(0,t.jsx)(n.p,{children:"Expected response in the browser:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "status": "UP",\n  "timestamp": "2025-01-15T12:34:56.789Z"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-postman",children:"Using Postman"}),"\n",(0,t.jsx)(n.p,{children:"Now that we're dealing with authentication and authorization, we're also going to be spending a lot of time evaluating our API's response codes."}),"\n",(0,t.jsx)(n.p,{children:"To test to make sure our app is behaving correctly, we can use our browser. But viewing responses, and especially testing conditions like missing or invalid authentication headers is way easier if we use something like Postman or Bruno to test our APIs."}),"\n",(0,t.jsxs)(n.p,{children:["If you open Postman now, and try a new ",(0,t.jsx)(n.code,{children:"GET"})," call for ",(0,t.jsx)(n.code,{children:"http://localhost:3004/api/ping"}),", you should see a ",(0,t.jsx)(n.code,{children:"401 Unauthorized"})," response code with the response data like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "message": "Unauthorized: Missing or invalid token"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"That's because your Postman request needs to now send an Authorization Header with your Firebase authentication token."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Recall your ",(0,t.jsx)(n.code,{children:"ping"})," endpoint calls ",(0,t.jsx)(n.code,{children:"verifyToken"}),", which noticed there was not token at all, and responded with code 401. The rest of ",(0,t.jsx)(n.code,{children:"ping"})," did not execute. The ",(0,t.jsx)(n.code,{children:"ping"})," endpoint is now said to be ",(0,t.jsx)(n.strong,{children:"protected"})," since it requires an authenticated user. In real life you may have some endpoints that require protection and some that don't."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An easy way to get the token would be to output it to the javascript console from the browser. Then we can copy and paste it into a new header in Postman."}),"\n",(0,t.jsx)(n.h4,{id:"show-the-token-in-the-browser-console",children:"Show the token in the browser console"}),"\n",(0,t.jsxs)(n.p,{children:["In your html page, find the ",(0,t.jsx)(n.code,{children:"auth.onAuthStateChanged"})," function and add the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// Set up the auth state listener\nauth.onAuthStateChanged(async (user) => {\n  if (user) {\n    console.log("Signed in as:", user.uid);\n\n    const token = await getIdToken();\n    console.log("Auth header: Bearer", token);\n  } else {\n    console.log("No user signed in");\n    // Optionally, handle signed-out state\n  }\n});\n'})}),"\n",(0,t.jsx)(n.p,{children:'Now, in addition to logging the user id to the console, the token will be logged, including the expected "Bearer" word.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," that we had to mark the function as ",(0,t.jsx)(n.code,{children:"async"})," now since we're calling ",(0,t.jsx)(n.code,{children:"await getIdToken();"})]}),"\n",(0,t.jsx)(n.p,{children:"Refresh your browser and you should see the token."}),"\n",(0,t.jsx)(n.h4,{id:"add-the-token-to-the-authorization-header-in-postman",children:"Add the token to the authorization header in Postman"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Return to your ",(0,t.jsx)(n.code,{children:"GET"})," call for ",(0,t.jsx)(n.code,{children:"ping"})," in Postman."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'In "Headers" create a new Header with the following:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name: Authorization"}),"\n",(0,t.jsx)(n.li,{children:"Value: [paste the entire token in here, including the 'Bearer' portion]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Now try your API call again via Postman."}),"\n",(0,t.jsx)(n.p,{children:"Expected response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "status": "UP",\n  "timestamp": "2025-01-15T12:34:56.789Z"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"advantages-of-this-approach",children:"Advantages of This Approach"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Modularity"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"verifyToken"})," can be reused across multiple routes, reducing code duplication."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Separation of Concerns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Authentication logic is handled in the middleware, keeping routes clean and focused."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Improved Scalability"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding new routes that require authentication is simpler; just include ",(0,t.jsx)(n.code,{children:"verifyToken"})," in the middleware chain."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Consistency"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Token validation is standardized across the API."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"By implementing the middleware pattern, you\u2019ve taken a step toward building a secure, modular, and scalable API. This foundation can be expanded to include additional middlewares for logging, rate limiting, and role-based access control."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);