---
sidebar_label: "Firebase Auth Part 1"
sidebar_position: 20
---

# Firebase Auth Part 1

## Authentication Provider Landscape

When it comes to implementing authentication in web applications, developers have several options. Some popular choices include Auth0, Okta, Amazon Cognito, and Firebase Authentication. Each of these providers offers robust security features and supports various authentication methods. Auth0 is known for its flexibility and extensive integration options. Okta is favored for its enterprise-grade security and compliance features. Amazon Cognito is well-integrated with other AWS services and offers scalable user management. Firebase Authentication, our chosen solution, is part of Google's Firebase platform and is known for its ease of use and tight integration with other Firebase services.

Here's a comparison of these providers based on our selection criteria:

| Feature                            | Firebase Auth | Auth0 | Okta | Amazon Cognito |
| ---------------------------------- | ------------- | ----- | ---- | -------------- |
| Guest/Anonymous Auth               | ✅            | ❌    | ❌   | ✅             |
| Easy Guest to Full User Transition | ✅            | ❌    | ❌   | ❌             |
| Hosted Solution                    | ✅            | ✅    | ✅   | ✅             |
| Low Maintenance                    | ✅            | ✅    | ✅   | ✅             |
| Secure & Best Practices            | ✅            | ✅    | ✅   | ✅             |
| Free Tier Available                | ✅            | ✅    | ✅   | ✅             |
| Easy Integration                   | ✅            | ✅    | ✅   | ✅             |

As we can see, while all these providers offer secure, hosted solutions with low maintenance requirements, Firebase Authentication stands out for our needs due to its support for guest authentication and easy transition from guest to full user accounts.

## Setting Up Firebase Authentication

Follow these steps to create a Firebase project and activate Firebase Authentication for your application.

### Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on "Add project" or "Create a project".
3. Enter a name for your project, e.g., "Todo-App". Click **Continue**.
4. **Do Note** enable Google Analytics for your project right now. Click **Continue**.
5. Firebase will spend some time creating your project. When it's done, click **Continue**.

### Step 2: Register Your Web Application

1. You'll likely see a landing page displaying your app name (e.g. Todo-App). If not, got to the Firebase Console and select your newly created project.
2. Click on the web icon `(</>)` to add a web app to your project. This may appear as "Add an app to get started".
3. Give your app a nickname, e.g., "Todo-App-Web".
4. Do **not** select 'Also set up Firebase Hosting for this app'.
5. Click "Register app".
6. Firebase will provide you with configuration details. Save these for later use in your application. The contents defined in `const firebaseConfig` are especially important to save somewhere.
7. Click **Continue to console**.

### Step 3: Enable Authentication

1. In the left sidebar of the Firebase Console, expand the "Build" section and click on "Authentication".
2. Click the "Get started" button if you haven't set up authentication before.
3. In the "Sign-in method" tab, you'll see a list of sign-in providers.

### Step 4: Enable Anonymous Authentication

1. Find "Anonymous" in the list of sign-in providers.
2. Click on it to expand the options.
3. Toggle the switch to enable Anonymous authentication.
4. Click "Save" to confirm the changes.

### Step 5: Add Firebase SDK to Your Project

1. In your VSCode project directory, and from a **local terminal** install the Firebase SDK:

```bash
npm install firebase firebase-admin
```

We need `firebase` for client-side operations (browser). This is used for operations like signing in users, listening to auth state changes, etc.

We need `firebase-admin` for server-side operations (NodeJS backend). This is used for operations like verifying ID tokens, managing users server-side, accessing Firestore with admin privileges, etc

2. Generate a new private key for your service account:

- Go to the Firebase Console.
- Navigate to Project settings (gear icon near the top left).
- Go to the "Service Accounts" tab.
- Click "Generate new private key".
- Save the JSON file securely - you'll need this to initialize the admin SDK.
- Also save a copy in your VSCode project in the `keys` directory. Rename the file `gcp-todo-app.json`.
- Double check your project's `.gitignore` and `.rsyncignore` files and ensure each has an entry for `keys/`. This will ensure the sensitive keys stored in this directory aren't leaked unintentionally.

3. Add the following code to the top of your `server.js` file to enable your server to use firebase admin

```javascript
// Set up Firebase user auth
const admin = require("firebase-admin");
const serviceAccount = require("./keys/gcp-todo-app.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
```

4. Add the firebase javascript files to your `index.html` page (or whatever page is your current working version of the todo list).

The files are the three `firebase` files found below.

```javascript
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/11.1.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore-compat.js"></script>
</head>
```

5. Add the following to the end of your existing javascript code in the `document.addEventListener('DOMContentLoaded', () => {` section of your `.html` file. It likely begins right after the definition of the existing `createNoItemsMessage` function.

**Firebase configuration**

```javascript
// Existing code - do not change.
function createNoItemsMessage() {
  const li = document.createElement("li");
  li.className = "list-group-item text-muted";
  li.textContent = "Congratulations! You have no todos! 🎉";
  return li;
}

// Add your new code here

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArNAONDg_f6yU0x3rLgYhOwuXOwOJU-NA",
  authDomain: "todo-app-dff51.firebaseapp.com",
  projectId: "todo-app-dff51",
  storageBucket: "todo-app-dff51.firebasestorage.app",
  messagingSenderId: "559330429731",
  appId: "1:559330429731:web:8628c816da2307e1a75a96",
};
```

This object contains the configuration details for your Firebase project. These values are unique to your project and are used to connect your web app to the correct Firebase backend. You obtain these from the Firebase Console when setting up your project.

**Initializing Firebase**

```javascript
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
```

This code initializes Firebase with your configuration and creates an auth object that you'll use to interact with Firebase Authentication.

**Auth State Listener**

```javascript
// Set up the auth state listener
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Signed in as:", user.uid);
    ////init();
  } else {
    console.log("No user signed in");
    // Optionally, handle signed-out state
  }
});
```

This sets up a listener for changes in authentication state. When a user signs in or out, this function will be called. Right now we're just logging information to the console, but we'll expand on this later. But for now, when they do log in, you'll see the user's user.uid in the console. This is the unique user id provided by Firebase Authentication.

**Get ID Token Function**

```javascript
// Function to get the current user's ID token
// getIdToken will also manage to token's freshness
async function getIdToken() {
  const user = auth.currentUser;
  if (user) {
    return user.getIdToken();
  } else {
    throw new Error("No user is signed in");
  }
}
```

This function retrieves the current user's ID token, which you can use to authenticate requests to your backend. It's an async function, so you'll need to use `await` or `.then()` when calling it. If no user is signed in, it throws an error.

The `getIdToken()` method automatically refreshes the token if it's expired, ensuring you always have a valid token for authentication.

**Anonymous Sign-In**

```javascript
// Sign in anonymously
auth.signInAnonymously().catch((error) => {
  console.error("Error signing in:", error);
});
```

This code attempts to sign in the user anonymously. If successful, it will trigger the `onAuthStateChanged` listener above. If there's an error, it will log the error to the console. As it stands, this sign-in code executes automatically when the page loads or refreshes. So the user will automatically sign in anonymously (and get a user id) without explicitly performing any action.

In the future we may want to trigger this on a specific user action instead.

But our immediate goal is to simply get a user id we can use to associate with todos.

Step 6: Verify With Your Browser

1. Start your server `node server.js`
2. Navigate to your web page (e.g. `http://localhost:3004/index.html`)
3. Open a browser developer console (e.g. web developer tools)
4. You should see something in the console output like
   ```
   Signed in as: Sl8n6LJ86vQGSkwlsvGdqcLijxX2 index.html:287:29
   ```
5. That value is your anonymous user id provided by Firebase Auth.
6. Refresh your page. The user id should remain the same.
7. Try from a different window, a different browser, a different device. You should see different user ids.
8. Return to your Firebase Auth Project Console. Under Authentication > Users, you should see a number of (anonymous) users.

## Understanding User IDs and Tokens in Firebase Authentication

### User ID vs. Token

#### User ID

- A unique identifier for each user in your Firebase project.
- Remains constant for the lifetime of the user's account.
- For anonymous users, this ID persists as long as the account exists.
- Used to associate user data in your database.
- An example of a Firebase user id looks like this:
  ```
  W01DwpBsjreVi9GDwTUF32LD8su2
  ```

#### Token

- A JSON Web Token (JWT) that proves the user's identity.
- Contains encoded information, including the user ID.
- Has an expiration time (typically 1 hour) and is refreshed automatically.
- Used for authenticating requests to your backend or Firebase services.

The key difference is that while the token changes frequently for security reasons, the user ID inside it remains constant, allowing for consistent user identification.

An example of a token looks like this:

`eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwZDg4ZGQ1NWQxYjAwZDg0ZWU4MWQwYjk2M2RlNGNkOGM0ZmFjM2UiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90b2RvLWFwcC1kZmY1MSIsImF1ZCI6InRvZG8tYXBwLWRmZjUxIiwiYXV0aF90aW1lIjoxNzM2Nzg2NDMwLCJ1c2VyX2lkIjoiU2w4bjZMSjg2dlFHU2t3bHN2R2RxY0xpanhYMiIsInN1YiI6IlNsOG42TEo4NnZRR1Nrd2xzdkdkcWNMaWp4WDIiLCJpYXQiOjE3MzY4ODIzODcsImV4cCI6MTczNjg4NTk4NywiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.MZaK805jbTjcjMO9vMtn_rG3NgNlwifdnF2rUypyaAXHYk6Q2H0XFz9dwognRSiTzoMDTEpX_0B8Ivh7pnCQpbQxWJn8GxyvSmrHebMZAT-HeBHjm8Aow0CwxaTdy2z6-0CJMv0m7RQRHILqo-b5zZtSWOUM7R4S7SpN6SOZo5s6JUA68_jtDh46xv3rt6xE09URhRifGJFxEvsjFTfTNxSsB-3KknYSlKFXOXNxhWN7HicBSB87S0q23d42Bn_Y2v_CncSXe0iiFGbJCMaXcHV_nsxq5NDA3oMy6gQZTiwLk-FmW7hit5yS68lGk---hI69n_jugVa9Sk2HwgbFHg`

This token is composed of three parts:

1. Header (encoded)
2. Payload (encoded)
3. Signature

**Decoded Payload**

The middle part (payload) when decoded might look something like this:

```json
{
  "name": "John Doe",
  "iss": "https://securetoken.google.com/your-project-id",
  "aud": "your-project-id",
  "auth_time": 1626123456,
  "user_id": "A123B456C78",
  "sub": "A123B456C78",
  "iat": 1626123456,
  "exp": 1626127056,
  "email": "johndoe@example.com",
  "email_verified": false,
  "firebase": {
    "identities": {
      "email": ["johndoe@example.com"]
    },
    "sign_in_provider": "password"
  }
}
```

**Key Fields**

- `user_id`: The unique identifier for the user (matches sub)
- `iss`: Issuer of the token (Firebase)
- `aud`: Audience (your Firebase project ID)
- `exp`: Expiration time
- `iat`: Time the token was issued
- `auth_time`: Time the user authenticated

Note that the actual content may vary based on the authentication method and user properties. For anonymous users, some fields like name and email would be absent.

Remember, never decode JWTs client-side to make security decisions. Always verify tokens on your server using Firebase Admin SDK.

### Lifecycle and Scope of Anonymous User IDs

Anonymous authentication in Firebase creates a temporary user account with a unique ID. Here are important points to understand:

1. **Persistence**:

   - The anonymous user ID persists across multiple sessions within the same browser.
   - It's stored in the browser's local storage or IndexedDB.

2. **Limitations**:

   - If the user clears their browser data, the anonymous account is lost.
   - Different browsers or devices will have different anonymous user IDs.

3. **Duration**:

   - Anonymous accounts don't expire on their own.
   - They remain valid until explicitly deleted or converted to permanent accounts.

4. **Cross-Device Limitations**:

   - An anonymous user can't access their data from a different device or browser.
   - Each new browser/device creates a new anonymous account.

5. **Conversion**:
   - Firebase allows converting anonymous accounts to permanent accounts (e.g., email/password).
   - This preserves the user's data under the same User ID.

### Best Practices

- Use anonymous authentication for immediate access with low friction.
- Encourage users to convert to permanent accounts for long-term data persistence.
- Be clear about data persistence limitations for anonymous users.
- Implement server-side checks to validate tokens and user IDs for each request.

Understanding these concepts is crucial for managing user sessions, securing data, and providing a smooth user experience in your application.
