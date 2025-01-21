---
sidebar_label: "Support Delete"
sidebar_position: 60
---

# Support Delete

As in **update**, **delete** isn't going to use the user id in any of its processing yet.

However, we still want to ensure **delete** is protected - we only want valid users to be able to perform the function. So we will continue modify its endpoint to call `verifyToken`.

We'll do the following to protect the delete operation:

1. **Front End**: Modify the front end `deleteTodo` function to send the Firebase authentication token.
2. **API**: Modify the **delete endpoint** to make it protected (require authenticated access).
3. **Business Object**: At this point, the API handles rejecting unauthenticated requests, so there's nothing to do here.
4. **Verify with Postman**: Verify the operation works using Postman.
5. **Verify with Web Page**: Verify the operation works using the web page.

## Front End

In your html page, the `deleteTodo` javascript likely looks something like this:

```javascript
// Delete a todo
async function deleteTodo(id) {
  try {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}
```

Update your function to send the authentication header like this:

```javascript
// Delete a todo
async function deleteTodo(id) {
  try {
    //highlight-start
    // Get the user token
    const token = await getIdToken();
    //highlight-end

    // Call the api
    //highlight-start
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
      //highlight-end
    });
    fetchTodos();
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}
```

## API

Let's update the API endpoint to use our `verifyToken` middleware function.

Your current endpoint likely looks something like this:

```javascript
// Delete a todo
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTodo(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

We're only going to protect the endpoint for now, so update your function to look like this:

```javascript
// Delete a todo
// highlight-next-line
app.delete("/api/todos/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTodo(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Note: We're not using the user id at this point, so no need to extract it from the request object.

## Business Object

As mentioned above, at this point we're not using the user id in the delete operation, so there's nothing to change.

> Before verifying, be sure to restart your server if needed for changes to take place.

> Be sure you have a fresh token. Refresh your web page and view the javascript console for your current auth header.

> Firefox or Chrome may be better than Safari in displaying the entire contents of the auth header.

> If your browser has been idle for a long time, or you’re accessing your web page from a new browser or tab, your auth header may have a different user id than a previous user id because we’re using anonymous sign-in.

## Verify with Postman

Create a new request in Postman

- Type: `DELETE`
- URL: `http://localhost:3004/api/todos/{id}`
  - Example: http://localhost:3004/api/todos/13478
- Headers:
  - Name: Authorization
  - Value: Bearer `<token>`

Expected Response:

Status code: `200 OK`

```json
{
  "message": "Todo deleted successfully"
}
```

## Verify with Web Page

Open your web page. You should see `todos` in both the undone and done sections. If not, create some new `todos`. Click the **Delete** button to verify the operation works.
