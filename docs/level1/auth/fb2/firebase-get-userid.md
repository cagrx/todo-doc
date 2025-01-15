---
sidebar_label: "Get User ID within API"
sidebar_position: 10
---

# Get User ID within API

In order to use the User ID throughout our backend, we need to first get it from the frontend.

## Add a Ping Endpoint

Before we do that, let's add a new `ping` endpoint to our API that serves two purposes:

1. It provides a lightweight endpoint that can be called to verify our service is up and running.
2. We can use it for learning how the authorization headers work.

### Add ping to the API

In `server.js` add the following code:

```javascript
app.get("/api/ping", async (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});
```

Let's break down what this code does:

1. `app.get("/api/ping", ...)`:
   - This sets up a route that responds to GET requests at the `/api/ping`URL path.
2. `async (req, res) => { ... }`:
   - This is an async handler function for the route. It takes two parameters:
     - `req`: the incoming request object
     - `res`: the response object used to send back the response
3. `res.status(200)`:
   - Sets the HTTP status code of the response to 200 (OK), indicating a successful request.
4. `.json({ ... })`:
   - Sends a JSON response to the client. The `json()` method automatically sets the appropriate Content-Type header.
5. Inside the JSON object:
   - `status: "UP"`: Indicates that the service is running and available.
   - `timestamp: new Date().toISOString()`: Includes the current date and time in ISO 8601 format.

When a client makes a GET request to `/api/ping`, they will receive a 200 OK response with a JSON body like:

```json
{
  "status": "UP",
  "timestamp": "2023-06-07T12:34:56.789Z"
}
```

This endpoint allows clients to quickly check if the server is responsive and get a timestamp of when the request was processed. It's a lightweight way to monitor the availability of your API service.

> You can test out this endpoint right away if you have Postman, Bruno, or other API testing tool.

### Add a ping button to the web page

Next let's add a button to our web page so we can call `ping`. For brevity, the button will be simple and unstyled, but we'll comment it out before we deploy it live.

Add the following HTML line immediately after the `<body>` tag in your web page.

```html
<div><button type="button" id="btn-ping">Ping</button></div>
```

Add the following javascript toward the top of `document.addEventListener('DOMContentLoaded', () => {` preferably immediately after this line `const completedTodoList = ...`

```javascript
// Ping
const pingBtn = document.getElementById("btn-ping");

pingBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/ping");
    console.log(response);

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error pinging:", error);
  }
});
```

### Call the Ping API and View Results

Next:

1. Start your server: `node server.js`
2. Open your browser
3. Open a javascript console window
4. Visit your web page and click the "Ping" button.

You should see two outputs to the console:

    The results of `response` look like this:
    ```json
    Response {type: "basic", url: "http://localhost:3004/api/ping", redirected: false, status: 200, ok: true, …}
    ```

    Whereas the results of `responseData` look like this:
    ```json
    {status: "UP", timestamp: "2025-01-15T01:34:29.638Z"}
    ```

Here's the difference between the two:

1. `response`:

   - This is the raw Response object returned by the `fetch()`function.
   - It contains information about the HTTP response, such as status code, headers, and the response body.
   - At this stage, the response body hasn't been parsed yet.
   - When you log `response`, you'll see the Response object with its properties and methods.
   - Here are some of the properties of `response`:
     1. Status Code: `response.status` (e.g., 200, 404, 500)
     2. Status Text: `response.statusText` (e.g., "OK", "Not Found")
     3. Headers: `response.headers` (a Headers object containing response headers)
     4. URL: `response.url` (the final URL of the response)
     5. Type: `response.type` (e.g., "basic", "cors")
     6. OK status: `response.ok` (boolean indicating if the status is in the 200-299 range)
   - In the future we'll be evaluating `response.ok` to see if we need to alert the user to issues.

2. `responseData` from `response.json()`:
   - `response.json()` is a method called on the Response object to parse the response body as JSON.
   - It returns a Promise that resolves to the parsed JSON data.
   - When you log `responseData` (which is the result of `await response.json()`), you'll see the actual data contained in the response body, parsed as a JavaScript object or array.
   - In our example, the json data we returned in `ping`'s response:
   1. `responseData.status` ("UP")
   2. `responseData.timestamp` (2025-01-15T01:34:29.638Z)

### Now Let's Include the Token in the API Call

Update your client-side javascript to send the token in the header:

```javascript
// Ping
const pingBtn = document.getElementById("btn-ping");

pingBtn.addEventListener("click", async () => {
  try {
    // Get the user token
    const token = await getIdToken();
    const response = await fetch("/api/ping", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response);

    responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error pinging:", error);
  }
});
```

Here's a brief explanation of the code we just added:

1. headers:
   - In HTTP requests, headers are additional pieces of information sent with the request.
   - They provide context and metadata about the request, such as the type of content being sent, authentication information, etc.
2. Authorization:
   - This is a standard HTTP header used for sending authentication credentials to the server.
   - It tells the server how to authenticate the client making the request.
3. Bearer:
   - This is an authentication scheme used with the Authorization header.
   - "Bearer" indicates that the client should get access to the resource because they possess a certain token (usually a JWT - JSON Web Token).
   - The format is typically: "Bearer "
4. token:
   - This is the actual authentication token obtained from a previous login or authentication process (Firebase Auth via anonymous signing in our example).
   - In this code, it's retrieved by calling `getIdToken()`.
   - Tokens are used to authenticate the user without sending username and password with every request.

Putting it all together:

```javascript
headers: {
  Authorization: "Bearer " + token,
}
```

This code is adding an Authorization header to the fetch request. It's telling the server, "Here's a token that proves who I am and that I have the right to access this resource." You will later write server code that will then validate this token to ensure the request is coming from an authenticated and authorized user.

This pattern is common in modern web applications, especially those using JWT for authentication. It allows the server to maintain stateless authentication, improving scalability and security.

### Call the Ping API and View Results

Next:

1. Start your server: `node server.js`
2. Open your browser
3. Open a javascript console window
4. Visit your web page and click the "Ping" button.
5. View your server's terminal for any output

**There is no output**

Why? Because we haven't asked our endpoint to log any.

Add the following `console.log` line of code to `ping`:

```javascript
app.get("/api/ping", async (req, res) => {
  console.log(req.headers);

  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});
```

### Call the Ping API and View Results

Next:

1. (Re)start your server: `node server.js`
2. Open your browser
3. Open a javascript console window
4. Visit your web page and click the "Ping" button.
5. View your server's terminal for any output

You should see something like this:

```json
{
  "host": "localhost:3004",
  "accept": "*/*",
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "cors",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Safari/605.1.15",
  "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwZDg4ZGQ1NWQxYjAwZDg0ZWU4MWQwYjk2M2RlNGNkOGM0ZmFjM2UiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90b2RvLWFwcC1kZmY1MSIsImF1ZCI6InRvZG8tYXBwLWRmZjUxIiwiYXV0aF90aW1lIjoxNzM2OTA0NDA2LCJ1c2VyX2lkIjoiUXBUbHVnekRGUGZxMTUybkdHYWVxRk9Vd1RKMyIsInN1YiI6IlFwVGx1Z3pERlBmcTE1Mm5HR2FlcUZPVXdUSjMiLCJpYXQiOjE3MzY5MDQ0MDYsImV4cCI6MTczNjkwODAwNiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.n_awVqnil8aO9MQHji90nIqB-DGTScJR5vCfeGANZCbi5mwFs2jsFIEfPcFz9EOcGyupmn-lRrGqp02-hEouMNY75GJHQ5ZV_3qKPp4Vu5xl8vXd5ny_qkbX80IE57nj-2WKx8PqOQyHC10DWQZrIetK6vaRBe4DV2f2iiQ-uJULGfgm2Y9GhnD7TuARWtJMLStGE9oiAjinFAMlnJwYer-3S7UlhdMdM_56SFNpwP47TqbcIFncYBg-Nw0SHK2lbiOOzrsbmKopTS25m8I9axkro8HqOlVKatbHFqPqxfQws0rb57aIWNGsCOZa2LYh0dBMNvmNWzHlX1kyw_ygSg",
  "sec-fetch-dest": "empty",
  "referer": "http://localhost:3004/todo-op-auth.html",
  "accept-language": "en-US,en;q=0.9",
  "priority": "u=3, i",
  "accept-encoding": "gzip, deflate",
  "connection": "keep-alive"
}
```

In the prior example, we were looking a **response** values in the browser's javascript console.

In this example, we are looking at **request** values in the server's console output.

The key item we're looking at here is the `authorization` header. That contains our token which we can use to get the User ID.

Modify our `ping` endpoint to extract the User ID from the token:

```javascript
app.get("/api/ping", async (req, res) => {
  try {
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    if (!idToken) {
      throw new Error("No token provided");
    }
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log(decodedToken.uid);
  } catch (error) {
    throw new Error("Invalid token");
  }

  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});
```

Note: This code is not robust, but is for temporary demonstration purposes only.

Next:

1. (Re)start your server: `node server.js`
2. Open your browser
3. Open a javascript console window
4. Visit your web page and click the "Ping" button.
5. View your server's terminal for any output

You should see something like this: `Sl8n6LJ86vQGSkwlsvGdqcLijxX2`
This is the User ID included in the token, and should match the User ID that is output to the web browser console (from Firebase Auth Par 1).

These new lines of code:

1. Extract the token from the request headers.
2. Verify that a token was provided.
3. Use Firebase Admin SDK to verify and decode the token.
4. Log the user's UID (demonstrating successful verification).

This process ensures that only requests with valid Firebase Auth tokens can access this endpoint, providing a secure way to authenticate API calls using Firebase Authentication.

Specifically:

1. `const idToken = req.headers.authorization?.split("Bearer ")[1];`
   - This line extracts the token from the Authorization header.
   - It assumes the header is in the format "Bearer ".
   - The `?.` is optional chaining, protecting against undefined values.
   - `split("Bearer ")[1]` separates the "Bearer " prefix from the actual token.
2. `if (!idToken) { throw new Error("No token provided"); }`
   - This checks if a token was successfully extracted.
   - If not, it throws an error, indicating no token was provided in the request.
3. `const decodedToken = await admin.auth().verifyIdToken(idToken);`
   - This is a Firebase Admin SDK method.
   - It verifies the integrity and validity of the ID token.
   - If the token is valid, it decodes it and returns the payload.
   - This step ensures the token was issued by your Firebase project and hasn't been tampered with or expired.
4. `console.log(decodedToken.uid);`
   - After successful verification, this logs the user's UID (User ID).
   - The UID is a unique identifier for the user in Firebase Auth.

### Formalizing The Code

We're going to be extracting the User ID from the token a lot moving forward. So let's move the code into its own function within `server.js`.

Add this function near the top of the file:

```javascript
// Get the user id from Firebase
// If we can't get a valid id, then throw an error
async function getFirebaseUserId(authorizationHeader) {
  const idToken = authorizationHeader?.split("Bearer ")[1];
  if (!idToken) {
    throw new Error("No token provided");
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return decodedToken.uid;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
```

Then let's change `ping` to use it:

```javascript
app.get("/api/ping", async (req, res) => {
  try {
    console.log(req.headers.authorization);
    const user_id = await getFirebaseUserId(req.headers.authorization);
    console.log(user_id);
    res.status(200).json({
      status: "UP",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

We've changed `ping` to catch an error and return HTTP response 500 "Internal Server Error" is something goes wrong.

Next:

1. (Re)start your server: `node server.js`
2. Open your browser
3. Open a javascript console window
4. Visit your web page and click the "Ping" button.
5. View your server's terminal for any output

You should see the User ID as a value like this: `Sl8n6LJ86vQGSkwlsvGdqcLijxX2`

### Using Postman

You can also call the API via Postman.

You'll need the authorization header (which `ping` logs to the console).
It should look like this:

```
Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwZDg4ZGQ1NWQxYjAwZDg0ZWU4MWQwYjk2M2RlNGNkOGM0ZmFjM2UiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90b2RvLWFwcC1kZmY1MSIsImF1ZCI6InRvZG8tYXBwLWRmZjUxIiwiYXV0aF90aW1lIjoxNzM2OTA0NDA2LCJ1c2VyX2lkIjoiUXBUbHVnekRGUGZxMTUybkdHYWVxRk9Vd1RKMyIsInN1YiI6IlFwVGx1Z3pERlBmcTE1Mm5HR2FlcUZPVXdUSjMiLCJpYXQiOjE3MzY5MDg4NTAsImV4cCI6MTczNjkxMjQ1MCwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.iJ67Vm4if6OjaZS14iEtDMPegVQcaFDncNYBVpuyt5YqmZpHGmZR-In7uoWn9ET6buFmg6HcUMTo7wwt_4a5vCOedmTNQgOnebIdmLGqkj82wc27X-JqeBQ2PplxQxtkkvr_Yr0v1nhy1z_h5gZqoofsdzW13-cAAqI8sC8Dbw1bzd0xDctQK4w7JGw44-cMfYnBrY6SIJ9eRmvfu0wS5d4CW0ZlvOPfmj3uCWItpDxl_Cm32IrOV9QuJ208Sx5XpAm35ZUVofDKwIhBYtSbOX1nlaUZZ5C-ic5PjC0S6idaLP8jTKj8GBobl4q2Z0q96ox1DlUNQPXc2w0q_22Xgg
```

In Postman, configure a `GET` call for `http://localhost:3004/api/ping`

If you attempt the call without setting the authorization header, you should see a response code 500 (Internal Server Error) with the response data:

```json
{
  "error": "UnauthorizedError is not defined"
}
```

Go to Headers, and add a new Header:

- `Name`: Authorization
- `Value`: Paste the entire authorization header, including `Bearer `

Now try to call `ping` and you should see response code 200 (OK) and a response data like:

```json
{
  "status": "UP",
  "timestamp": "2025-01-15T02:52:35.384Z"
}
```
