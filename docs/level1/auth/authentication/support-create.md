---
sidebar_label: "Support Create"
sidebar_position: 30
---

# Support Create

We'll do the following to support the create operation:

1. **Front End**: Modify the front end `createTodo` function to send the Firebase authentication token.
2. **API**: Modify the **create todo endpoint** to make it protected (require authenticated access) and extract the user id from the request.
3. **Business Object**: Modify the **create todo function** to validate the user id and include it in the sql insert statement.
4. **Verify with Postman**: Verify the operation works using Postman.
5. **Verify with Web Page**: Verify the operation works using the web page.
6. **Verify with Database**: Verify the operation works by querying the database and seeing the user ids.

## Front End

In your html page, the `createTodo` javascript likely looks something like this:

```javascript
// Create a new todo
async function createTodo(name) {
  try {
    await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, is_done: 0 }),
    });
  } catch (error) {
    console.error("Error creating todo:", error);
  }
}
```

We're **not** going to change our function to send user id directly. Instead, we're going to add the authentication token to the authorization header so we can validate it on the backend and extract the id there, like we did for our `ping` example earlier.

Update your function to look like this:

```javascript
// Create a new todo
async function createTodo(name) {
  try {
    //highlight-start
    // Get the user token
    const token = await getIdToken();
    //highlight-end

    await fetch("/api/todos", {
      method: "POST",
      headers: {
        //highlight-next-line
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, is_done: 0 }),
    });
  } catch (error) {
    console.error("Error creating todo:", error);
  }
}
```

Note: You should put quotes around "Authorization" above. Docusaurus (this documentation tool) is artificially stripping them out.

Reminder: We call `getIdToken()` to ensure we have a fresh valid token.

## API

Let's update the API endpoint to use our `verifyToken` middleware function.

Your current endpoint likely looks something like this:

```javascript
// Create a todo
app.post("/api/todos", async (req, res) => {
  try {
    const newTodo = await createTodo(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Update your function to look like this:

```javascript
// Create a todo
// highlight-next-line
app.post("/api/todos", verifyToken, async (req, res) => {
  try {
    // highlight-start
    const user_id = req.user.uid;
    const todoData = {
      ...req.body,
      user_id: user_id,
    };
    // highlight-end
    const newTodo = await createTodo(todoData);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

To accomodate passing the user id to the business object, instead of simply passing `req.body` (which contains the todo contents) to `createTodo()`, we're creating a new `todoData` object which contains `req.body` like before, but also the new `user_id` property.

## Business Object

Let's update the business object to include validating and inserting the user id.

Your current function likely looks like this:

```javascript
async function createTodo(todoData) {
  // Validate name
  if (!todoData.name || todoData.name.trim() === "") {
    throw new Error("Todo name is required");
  }

  // Validate and set default for is_done
  if (todoData.is_done === undefined) {
    todoData.is_done = 0; // Set default value
  } else if (todoData.is_done !== 0 && todoData.is_done !== 1) {
    throw new Error("is_done must be 0 or 1");
  }

  // Validate and set default for sort_order
  if (todoData.sort_order === undefined) {
    todoData.sort_order = Date.now(); // Default value is current timestamp in milliseconds
  } else if (!Number.isInteger(todoData.sort_order)) {
    throw new Error("sort_order must be an integer");
  }

  try {
    const [result] = await db.pool.query(
      "INSERT INTO todos (name, is_done, sort_order) VALUES (?, ?, ?)",
      [todoData.name, todoData.is_done, todoData.sort_order]
    );
    return {
      id: result.insertId,
      name: todoData.name,
      is_done: todoData.is_done,
      sort_order: todoData.sort_order,
    };
  } catch (error) {
    throw new Error(`Failed to create todo: ${error.message}`);
  }
}
```

Update your function to validate a user id exists, and to insert it into the database:

```javascript
async function createTodo(todoData) {
  // Validate name
  if (!todoData.name || todoData.name.trim() === "") {
    throw new Error("Todo name is required");
  }

  // highlight-start
  // Validate user_id
  if (!todoData.user_id || todoData.user_id.trim() === "") {
    throw new Error("Todo user_id is required");
  }
  // highlight-end

  // Validate and set default for is_done
  if (todoData.is_done === undefined) {
    todoData.is_done = 0; // Set default value
  } else if (todoData.is_done !== 0 && todoData.is_done !== 1) {
    throw new Error("is_done must be 0 or 1");
  }

  // Validate and set default for sort_order
  if (todoData.sort_order === undefined) {
    todoData.sort_order = Date.now(); // Default value is current timestamp in milliseconds
  } else if (!Number.isInteger(todoData.sort_order)) {
    throw new Error("sort_order must be an integer");
  }

  try {
    const [result] = await db.pool.query(
      // highlight-start
      "INSERT INTO todos (user_id, name, is_done, sort_order) VALUES (?, ?, ?, ?)",
      [todoData.user_id, todoData.name, todoData.is_done, todoData.sort_order]
      // highlight-end
    );
    return {
      id: result.insertId,
      //highlight-next-line
      user_id: todoData.user_id,
      name: todoData.name,
      is_done: todoData.is_done,
      sort_order: todoData.sort_order,
    };
  } catch (error) {
    throw new Error(`Failed to create todo: ${error.message}`);
  }
}
```

> Before verifying, be sure to restart your server if needed for changes to take place.

> Be sure you have a fresh token. Refresh your web page and view the javascript console for your current auth header.

> Firefox or Chrome may be better than Safari in displaying the entire contents of the auth header.

> If your browser has been idle for a long time, or you’re accessing your web page from a new browser or tab, your auth header may have a different user id than a previous user id because we’re using anonymous sign-in.

## Verify with Postman

Create a new request in Postman

- Type: `POST`
- URL: `http://localhost:3004/api/todos`
- Body:
  ```json
  {
    "name": "Do Laundry",
    "is_done": 0
  }
  ```
- Headers:
  - Name: Authorization
  - Value: Bearer `<token>`

Expected Response:

Status code: `201 Created`

```json
{
  "id": 13480,
  "user_id": "Sl8n6LJ86vQGSkwlsvGdqcLijxX2",
  "name": "Do Laundry",
  "is_done": 0,
  "sort_order": 1737066299120
}
```

## Verify with Web Page

Open your web page and create a todo. It should succeed.
Note: You'll still **see** all the todos, not just yours, because we haven't yet applied the user id to the `GET`s.

## Verify with DB

```sql
SELECT * FROM todos
```

You should see that your new todos have user_id values.
