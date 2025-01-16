---
sidebar_label: "Securing API Routes"
sidebar_position: 15
---

# Securing API Routes with Middleware

In this section, we refactor the token-handling logic into a reusable middleware function named `verifyToken`. This modular approach simplifies route logic, adheres to the **middleware pattern**, and ensures consistency in how token validation is handled across routes.

We also introduce the **middleware pattern** and explain how execution flows in Express.

---

## What is the Middleware Pattern?

**Middleware** refers to a pattern of functions used in web frameworks, like Express.js, to intercept and process requests and responses as they flow through the application. Middleware can:

- Modify the `req` and `res` objects.
- End the request-response cycle.
- Call the `next()` function to pass control to the next middleware or route handler.

Middleware functions are executed sequentially, in the order they are defined.

### Example Flow Using Middleware

Consider two pieces of middleware: `verifyToken` and `ping`.

1. **Request Received**: The client sends a request to `/api/ping`.
2. **`verifyToken` Middleware**:
   - Extracts and validates the token.
   - Attaches the user ID (`req.user.uid`) to the request object.
   - Passes control to the next middleware or route handler by calling `next()`.
3. **`ping` Route Handler**:
   - Accesses `req.user.uid` to retrieve the authenticated user’s ID.
   - Returns a response indicating the server is up.

This pattern keeps concerns separated and ensures reusability of common logic like token verification.

---

## Refactoring Token Handling into Middleware

We’ll create a `verifyToken` middleware function that validates tokens and attaches the user ID to the request object.

We're effectively moving the Firebase token manipulation code out of the `ping` endpoint and into a `verifyToken` function that can be reused by any endpoint.

### Create `verifyToken` Middleware

Add the following middleware function to `server.js`, near the top of the file:

```javascript
// Middleware to verify Firebase ID tokens
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Missing or invalid token" });
  }

  const idToken = authHeader.split("Bearer ")[1];
  try {
    // Verify the ID token and attach the decoded user information to req.user
    req.user = await admin.auth().verifyIdToken(idToken);
    // Proceed to the route handler
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token", error: error.message });
  }
};
```

Key differences in `verifyToken` vs the previous code within `ping`:

1. **Respond 401 Unauthorized vs throw error**: If a missing or invalid token is encountered, instead of throwing an error, the middleware function will respond with a `401 Unauthorized` response and terminate the request-response cycle, preventing execution from proceeding to the /api/ping route handler.
2. **User and request object vs just `user_id`**:
   - We replaced this code:
   ```javascript
   const decodedToken = await admin.auth().verifyIdToken(idToken);
   const user_id = decodedToken.uid;
   ```
   with this code:
   ```javascript
   req.user = await admin.auth().verifyIdToken(idToken);
   ```
   - This explicitly creates and assigns a .user property on the req (request) object, populating it with the decoded token information from Firebase Auth. This makes user information (like `uid` and `name`) accessible in downstream middleware or route handlers.
3. **`next()`**: After successfully populating req.user, we've accomplished everything we want in this function. The `next()` function in Express passes control to the next middleware or route handler in the request-response cycle. It allows middleware to perform its task (e.g., authentication) and then delegate responsibility to the subsequent logic.

   **If next() is not called, the request will hang and not proceed further.**

In summary, a middleware function in Express should either:

1. **Issue a Response**: Send an HTTP response (e.g., res.status(401).json(...)) to terminate the request-response cycle.
2. **Call next()**: Pass control to the next middleware or route handler in the stack.

These are the two valid and expected ways for a middleware function to exit. Failing to do either will cause the request to hang indefinitely.

### Update the `ping` Route

Replace the token-handling logic in `ping` with the `verifyToken` middleware.

```javascript
// Ping route
app.get("/api/ping", verifyToken, (req, res) => {
  // verifyToken will be executed before we reach here
  console.log(req.user.uid);
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});
```

### Execution Flow

1. **Request to `/api/ping`**:
   - The client includes the Authorization header with the token.
2. **`verifyToken` Middleware**:
   - Extracts and validates the token.
   - Adds `req.user` for downstream use.
   - Calls `next()` to pass control to the route handler.
3. **`ping` Route Handler**:
   - Accesses `req.user.uid`.
   - Returns a response indicating the server is operational and includes the user ID.

---

## Test the Refactored Code

### Using the Web Page

1. Start your server: `node server.js`.
2. Open the web page with the "Ping" button.
3. Open the browser’s JavaScript console.
4. Click "Ping" and view the server’s terminal and browser console.

Expected server log:

```bash
User ID: Sl8n6LJ86vQGSkwlsvGdqcLijxX2
```

Expected response in the browser:

```json
{
  "status": "UP",
  "timestamp": "2025-01-15T12:34:56.789Z"
}
```

<!--
### Using Postman

1. Start your server: `node server.js`.
2. Open Postman and create a `GET` request to `http://localhost:3004/api/ping`.
3. Add the `Authorization` header:
   - `Key`: `Authorization`
   - `Value`: `Bearer <your-token>`
4. Send the request.

Expected response:

```json
{
  "status": "UP",
  "timestamp": "2025-01-15T12:34:56.789Z",
  "userId": "Sl8n6LJ86vQGSkwlsvGdqcLijxX2"
}
```
-->

---

## Advantages of This Approach

1. **Modularity**:

   - `verifyToken` can be reused across multiple routes, reducing code duplication.

2. **Separation of Concerns**:

   - Authentication logic is handled in the middleware, keeping routes clean and focused.

3. **Improved Scalability**:

   - Adding new routes that require authentication is simpler; just include `verifyToken` in the middleware chain.

4. **Consistency**:
   - Token validation is standardized across the API.

---

By implementing the middleware pattern, you’ve taken a step toward building a secure, modular, and scalable API. This foundation can be expanded to include additional middlewares for logging, rate limiting, and role-based access control.
