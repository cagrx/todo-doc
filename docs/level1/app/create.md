---
sidebar_label: "Create"
sidebar_position: 30
---

## Implementing the Create Operation

In this section, we'll implement our first CRUD operation: Create. We'll start by building a basic `createTodo` function and then write a simple test to ensure it works correctly.

### Step 1: Creating the createTodo Function

Open `todoOperations.js` and add the following code:

```javascript
const db = require("./db");

async function createTodo(todoData) {
  console.log("todoData:", todoData);

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

module.exports = {
  createTodo,
};
```

This function does the following:

1. It takes a `todoData` object as an argument, which should contain the todo's name, status, and sort order.
2. It uses the database connection pool to execute an INSERT query.
3. If successful, it returns an object representing the newly created todo, including its assigned ID.
4. If an error occurs, it throws an error with a descriptive message.

### Step 2: Writing a Test for createTodo

Now, let's create a simple test to verify our `createTodo` function. Open `testOperations.js` and add the following code:

```javascript
const { createTodo } = require("./todoOperations");

async function runTests() {
  try {
    // Test create
    console.log("Creating a new todo...");
    const newTodoData = {
      name: "Test todo",
      is_done: 0,
      sort_order: 1,
    };
    const newTodo = await createTodo(newTodoData);
    console.log("New todo created:", newTodo);
  } catch (error) {
    console.error("Test failed:", error.message);
  } finally {
    process.exit();
  }
}

runTests();
```

This test function:

1. Imports the createTodo function from `todoOperations.js`.
2. Defines a `runTests` function that:
3. Creates a test todo item
4. Calls `createTodo` with this test data
5. Logs the result
6. Catches and logs any errors that occur during the test.
7. Exits the process after the test completes.

### Step 3: Running the Test

To run the test:

1. Ensure your database is set up and running.
2. Verify that your `.env` file is correctly configured with your database details.
3. Open a terminal in your project directory.
4. Run the command: `node testOperations.js`

You should see output similar to this if the test is successful:

```bash
Creating a new todo...
New todo created: { id: 1, name: 'Test todo', is_done: 0, sort_order: 1 }
```

### Understanding the Code

- **Async/Await**: Both `createTodo` and `runTests` are async functions, allowing us to use `await` for asynchronous operations like database queries.
- **Error Handling**: We use try-catch blocks to handle potential errors, both in the `createTodo` function and in our test.
- **Database Interaction**: We're using the `query` method of our database pool to execute SQL statements.
- **Object Destructuring**: In `createTodo`, we use `const [result] = await db.pool.query(...)` to extract the first element of the array returned by the query method.

### Understanding the Code

- **Async/Await**: Both `createTodo` and `runTests` are async functions, allowing us to use `await` for asynchronous operations like database queries.
- **Error Handling**: We use try-catch blocks to handle potential errors, both in the `createTodo` function and in our test.
- **Database Interaction**: We're using the `query` method of our database pool to execute SQL statements.
- **Object Destructuring**: In `createTodo`, we use `const [result] = await db.pool.query(...)` to extract the first element of the array returned by the query method.

### Verifying the Database Record

After running the test successfully, it's crucial to verify that the record has indeed been inserted into the database. Let's use Navicat MySQL to check our database:

1. Open Navicat MySQL and connect to your database.
2. In the navigation pane, expand your database and find the `todos` table.
3. Right-click on the `todos` table and select "Open Table".
4. In the query editor, enter the following SQL command:

   ```sql
   SELECT * FROM todos ORDER BY id DESC LIMIT 1;
   ```

5. Execute the query by clicking the "Run" button or pressing F6.

You should see a result similar to this:

| id  | name      | is_done | sort_order |
| --- | --------- | ------- | ---------- |
| 1   | Test todo | 0       | 1          |

This confirms that our `createTodo` function successfully inserted the new todo item into the database.

If you don't see the record or if the data doesn't match what you expected, double-check your database connection settings and review the `createTodo` function for any potential issues.

### Next Steps

While this implementation works, it lacks input validation and error checking. In the next section, we'll add these features to make our `createTodo` function more robust and secure.
