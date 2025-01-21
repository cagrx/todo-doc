---
sidebar_label: "Support Update"
sidebar_position: 50
---

# Support Update

So far we've modified **create** and **read** operations to handle our authentication token, from which we also extracted the user id. **Create** used that user id in order to set the underlying user_id value in the database. **Read** used that user id in order to select only that user's `todos`.

In each of those cases, the endpoints called `verifyToken` which validated that the user was authenticated. If the user was not, then `veifyToken` failed and immediately returned an error status code, and prevented further execution of the route.

This **protected** the endpoint by confirming that the user is signed in and their identity is valid.

In our current application, the **update** and **delete** operations aren't going to use the user id in any of its processing yet.

However, we still want to ensure those operations are protected - we only want valid users to be able to perform them. So we will continue modify those endpoints to call `verifyToken`.

We'll do the following to protect the update operation:

1. **Front End**: Modify the front end `setTodoDone` and `setTodoUndone` functions to send the Firebase authentication token.
2. **API**: Modify the **update set-done and set-undone endpoints** to make them protected (require authenticated access).
3. **Business Object**: At this point, the API handles rejecting unauthenticated requests, so there's nothing to do here.
4. **Verify with Postman**: Verify the operation works using Postman.
5. **Verify with Web Page**: Verify the operation works using the web page.

## Front End

### Modify `setTodoDone`

In your html page, the `setTodoDone` javascript likely looks something like this:

```javascript
// Set a todo as done
async function setTodoDone(id) {
  try {
    await fetch(`/api/todos/${id}/set-done`, {
      method: "PUT",
    });
    fetchTodos();
  } catch (error) {
    console.error("Error setting todo to done:", error);
  }
}
```

Update your function to send the authentication header like this:

```javascript
// Set a todo as done
async function setTodoDone(id) {
  try {
    //highlight-start
    // Get the user token
    const token = await getIdToken();
    //highlight-end

    // Call the api
    //highlight-start
    const response = await fetch(`/api/todos/${id}/set-done`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
      },
      //highlight-end
    });
    fetchTodos();
  } catch (error) {
    alert(`An unexpected error occured: ${error.message}`);
  }
}
```

Note: You should put quotes around "Authorization" above. Docusaurus (this documentation tool) is artificially stripping them out.

### Modify `setTodoUndone`

In your html page, the `setTodoUndone` javascript likely looks something like this:

```javascript
// Set a todo as undone
async function setTodoUndone(id) {
  try {
    await fetch(`/api/todos/${id}/set-undone`, {
      method: "PUT",
    });
    fetchTodos();
  } catch (error) {
    console.error("Error setting todo to undone:", error);
  }
}
```

Update your function to send the authentication header like this:

```javascript
// Set a todo as undone
async function setTodoUndone(id) {
  try {
    //highlight-start
    // Get the user token
    const token = await getIdToken();
    //highlight-end

    // Call the api
    //highlight-start
    const response = await fetch(`/api/todos/${id}/set-undone`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
      },
      //highlight-end
    });
    fetchTodos();
  } catch (error) {
    alert(`An unexpected error occured: ${error.message}`);
  }
}
```

Note: You should put quotes around "Authorization" above. Docusaurus (this documentation tool) is artificially stripping them out.

## API

Let's update the API endpoints to use our `verifyToken` middleware function.

### Set done

Your current endpoint likely looks something like this:

```javascript
// Set todo as done
app.put("/api/todos/:id/set-done", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await setTodoDone(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

We're only going to protect the endpoint for now, so update your function to look like this:

```javascript
// Set todo as done
// highlight-next-line
app.put("/api/todos/:id/set-done", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await setTodoDone(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Note: We're not using the user id at this point, so no need to extract it from the request object.

### Set undone

Your current endpoint likely looks something like this:

```javascript
// Set todo as undone
app.put("/api/todos/:id/set-undone", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await setTodoUndone(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Likewise, update your function to look like this:

```javascript
// Set todo as undone
// highlight-next-line
app.put("/api/todos/:id/set-undone", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await setTodoUndone(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Business Object

As mentioned above, at this point we're not using the user id in the set done and set undone operations, so there's nothing to change.

> Before verifying, be sure to restart your server if needed for changes to take place.

> Be sure you have a fresh token. Refresh your web page and view the javascript console for your current auth header.

> Firefox or Chrome may be better than Safari in displaying the entire contents of the auth header.

> If your browser has been idle for a long time, or you’re accessing your web page from a new browser or tab, your auth header may have a different user id than a previous user id because we’re using anonymous sign-in.

## Verify with Postman

### Set done

Create a new request in Postman

- Type: `PUT`
- URL: `http://localhost:3004/api/todos/{id}/set-done`
  - Example: http://localhost:3004/api/todos/13478/set-done
- Headers:
  - Name: Authorization
  - Value: Bearer `<token>`

Expected Response:

Status code: `200 OK`

```json
{
  "message": "Todo set to done successfully"
}
```

### Set undone

Create a new request in Postman

- Type: `PUT`
- URL: `http://localhost:3004/api/todos/{id}/set-undone`
  - Example: http://localhost:3004/api/todos/13478/set-undone
- Headers:
  - Name: Authorization
  - Value: Bearer `<token>`

Expected Response:

Status code: `200 OK`

```json
{
  "message": "Todo set as undone successfully"
}
```

## Verify with Web Page

Open your web page. You should see `todos` in both the undone and done sections. If not, create some new `todos`. Click the **Mark Complete** and **Mark Incomplete** buttons to verify the operation works.
