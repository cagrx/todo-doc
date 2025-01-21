---
sidebar_label: "Support Read"
sidebar_position: 40
---

# Support Read

We'll do the following to support the read operation:

1. **Front End**: Modify the front end `fetchTodos` function to send the Firebase authentication token.
2. **API**: Modify the **read undone todos and done todos endpoints** to make them protected (require authenticated access) and extract the user id from the request.
3. **Business Object**: Modify the **get undone and done todos functions** to validate the user id and include it in the sql select statement.
4. **Verify with Postman**: Verify the operation works using Postman.
5. **Verify with Web Page**: Verify the operation works using the web page.

## Front End - Move initial `fetchTodos` call

Before we modify `fetchTodos` to send the authentication token, we need to observe and correct an issue.

If you look at your html code, you'll notice `fetchTodos` is called as soon as the document content is loaded. This has served us well thus far, and has ensured that we have `todos` to display whenever the page is loaded.

However, we're about to modify `fetchTodos` to also send the authentication token, which requires a call to `getIdToken`, which itself requires `auth` to be fully initialized.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const newTodoInput = document.getElementById('new-todo');

    // Many lines of code...

    //highlight-start
    // Fetch all todos when the page loads
    fetchTodos();
    //highlight-end

    // Many lines of code...

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Set up the auth state listener
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            console.log("Signed in as:", user.uid);
            const token = await getIdToken();
            console.log("Auth header: Bearer", token);
        } else {
            console.log("No user signed in");
        }
    });

    // Sign in anonymously
    auth.signInAnonymously()
        .catch(error => {
            console.error("Error signing in:", error);
        });

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

    // Many lines of code...
}
```

That `auth` initialization process makes network calls to Firebase, which takes time. But `fetchTodos` runs immediately, before the initialization process can finish. This results in the following error:

> Error fetching todos: ReferenceError: can't access lexical declaration 'auth' before initialization

To remedy this, we need to make sure `fetchTodos` is called after `auth` is initialized. Therefore, let's move the initial `fetchTodos` call into `auth`'s `onAuthStateChanged` event, which would then look like this:

```javascript
// Set up the auth state listener
auth.onAuthStateChanged(async (user) => {
  if (user) {
    console.log("Signed in as:", user.uid);
    const token = await getIdToken();
    console.log("Auth header: Bearer", token);
    fetchTodos();
  } else {
    console.log("No user signed in");
  }
});
```

Be sure you've either removed or commented out the standalone `fetchTodos` call.

> After you've made this change, verify it works by refreshing your html page. You should see `todos`, and there should be no errors in the javascript console (except perhaps the common `favicon.ico` missing error.)

## Front End - Modify `fetchTodos`

In your html page, the `fetchTodos` javascript likely looks something like this:

```javascript
async function fetchTodos() {
  try {
    // Get the undone todos
    const undoneResponse = await fetch("/api/todos/undone");
    const undoneTodos = await undoneResponse.json();

    // Get the done todos
    const doneResponse = await fetch("/api/todos/done");
    const doneTodos = await doneResponse.json();

    // Display the todos
    renderTodos(undoneTodos, doneTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}
```

Like the previous create operation, we're going to change our function to add the authentication token to the authorization header so we can validate it on the backend and extract the id there.

Update your function to look like this:

```javascript
async function fetchTodos() {
  try {
    //highlight-start
    // Get the user token
    const token = await getIdToken();
    //highlight-end

    // Get the undone todos
    //highlight-start
    const undoneResponse = await fetch("/api/todos/undone", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    //highlight-end
    const undoneTodos = await undoneResponse.json();

    // Get the done todos
    //highlight-start
    const doneResponse = await fetch("/api/todos/done", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    //highlight-end
    const doneTodos = await doneResponse.json();

    // Display the todos
    renderTodos(undoneTodos, doneTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}
```

Note: You should put quotes around "Authorization" above. Docusaurus (this documentation tool) is artificially stripping them out.

## API

Let's update the API endpoints to use our `verifyToken` middleware function.

### Undone todos

Your current endpoint likely looks something like this:

```javascript
// Read all active (undone) todos
app.get("/api/todos/undone", async (req, res) => {
  try {
    const todos = await getAllUndoneTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Update your function to look like this:

```javascript
// Read all active (undone) todos
// highlight-next-line
app.get("/api/todos/undone", verifyToken, async (req, res) => {
  try {
    // highlight-start
    const user_id = req.user.uid;
    const todos = await getAllUndoneTodos(user_id);
    // highlight-end
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Done todos

Your current endpoint likely looks something like this:

```javascript
// Read all done todos
app.get("/api/todos/done", async (req, res) => {
  try {
    const todos = await getAllDoneTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Update your function to look like this:

```javascript
// Read all done todos
// highlight-next-line
app.get("/api/todos/done", verifyToken, async (req, res) => {
  try {
    // highlight-start
    const user_id = req.user.uid;
    const todos = await getAllDoneTodos(user_id);
    // highlight-end
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Business Object

Let's update the business object to include validating the user id and using it in the select statement.

### Undone todos

Your current function likely looks like this:

```javascript
async function getAllUndoneTodos() {
  try {
    const [rows] = await db.pool.query(
      "SELECT * FROM todos WHERE is_done = 0 ORDER BY sort_order DESC"
    );
    return rows;
  } catch (error) {
    throw new Error(`Failed to fetch undone todos: ${error.message}`);
  }
}
```

Update your function to look like this:

```javascript
// highlight-next-line
async function getAllUndoneTodos(request_user_id) {
  //highlight-start
  // Validate request_user_id
  if (request_user_id === undefined) {
    throw new Error("Missing request_user_id");
  }
  //highlight-end

  try {
    //highlight-start
    const [rows] = await db.pool.query(
      "SELECT * FROM todos WHERE user_id = ? AND is_done = 0 ORDER BY sort_order DESC",
      [request_user_id]
    );
    //highlight-end
    return rows;
  } catch (error) {
    throw new Error(`Failed to fetch undone todos: ${error.message}`);
  }
}
```

### Done todos

Your current function likely looks like this:

```javascript
async function getAllDoneTodos() {
  try {
    const [rows] = await db.pool.query(
      "SELECT * FROM todos WHERE is_done !=0 ORDER BY is_done DESC"
    );
    return rows;
  } catch (error) {
    throw new Error(`Failed to fetch undone todos: ${error.message}`);
  }
}
```

Update your function to look like this:

```javascript
//highlight-next-line
async function getAllDoneTodos(request_user_id) {
  //highlight-start
  // Validate request_user_id
  if (request_user_id === undefined) {
    throw new Error("Missing request_user_id");
  }
  //highlight-end

  try {
    //highlight-start
    const [rows] = await db.pool.query(
      "SELECT * FROM todos WHERE user_id = ? AND is_done !=0 ORDER BY is_done DESC",
      [request_user_id]
    );
    //highlight-end
    return rows;
  } catch (error) {
    throw new Error(`Failed to fetch done todos: ${error.message}`);
  }
}
```

> Before verifying, be sure to restart your server if needed for changes to take place.

> Be sure you have a fresh token. Refresh your web page and view the javascript console for your current auth header.

> Firefox or Chrome may be better than Safari in displaying the entire contents of the auth header.

> If your browser has been idle for a long time, or you’re accessing your web page from a new browser or tab, your auth header may have a different user id than a previous user id because we’re using anonymous sign-in.

## Verify with Postman

### Undone todos

Create a new request in Postman

- Type: `GET`
- URL: `http://localhost:3004/api/todos/undone`
- Headers:
  - Name: Authorization
  - Value: Bearer `<token>`

Expected Response:

Status code: `200 OK`

```json
[
  {
    "id": 13480,
    "user_id": "Sl8n6LJ86vQGSkwlsvGdqcLijxX2",
    "name": "Do Laundry",
    "is_done": 0,
    "sort_order": 1737066299120
  }
]
```

Note: Your exact response may vary depending on what your database contains.

### Done todos

Create a new request in Postman

- Type: `GET`
- URL: `http://localhost:3004/api/todos/done`
- Headers:
  - Name: Authorization
  - Value: Bearer `<token>`

Expected Response:

Status code: `200 OK`

```json
[
  {
    "id": 13481,
    "user_id": "Sl8n6LJ86vQGSkwlsvGdqcLijxX2",
    "name": "Wash car",
    "is_done": 1736956998698,
    "sort_order": 1737066299120
  }
]
```

Note: Your exact response may vary depending on what your database contains. You may need to manually update some todos in your database to set them 'done' to see results.

## Verify with Web Page

Open your web page. You should see `todos` in both the undone and done sections. If not, create some new `todos` and manually update some todos in your database to set them 'done' to see results.
