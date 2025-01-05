---
sidebar_label: "Create w/Validation"
sidebar_position: 40
---

## Enhancing createTodo with Input Validation and Error Checking

Now that we have a basic `createTodo` function working, let's improve it by adding robust input validation and error checking. This will make our function more reliable and secure.

### Step 1: Updating the createTodo Function

Open `todoOperations.js` and replace the existing `createTodo` function with the following enhanced version:

```javascript
async function createTodo(todoData) {
  console.log("todoData:", todoData);

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
    todoData.sort_order = -1; // Set default value
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

### Understanding the Enhancements

1. **Name Validation**:
   - We check if `name` is provided and not just whitespace.
   - If invalid, we throw an error with a descriptive message.
2. **is_done Validation**:
   - If `is_done` is not provided, we set a default value of 0 (not done).
   - If provided, we ensure it's either 0 or 1.
   - Any other value results in an error.
3. **sort_order Validation**:
   - If `sort_order` is not provided, we set a default value of -1.
   - If provided, we ensure it's an integer using `Number.isInteger()`.
   - Non-integer values result in an error.
4. **Error Handling**:
   - We've kept the try-catch block to handle database errors.
   - The function now throws more specific errors for invalid inputs.
5. **Logging**:
   - We've added a console.log at the beginning to help with debugging.

### Step 2: Updating the Test Function

Now that we've enhanced our `createTodo` function, let's update our test function in `testOperations.js` to cover more scenarios:

```javascript
const { createTodo } = require("./todoOperations");

async function runTests() {
  try {
    // Test create with valid data
    console.log("Creating a new todo...");
    const newTodoData = {
      name: "Test todo",
      is_done: 0,
      sort_order: 1,
    };
    const newTodo = await createTodo(newTodoData);
    console.log("New todo created:", newTodo);

    // Test create with minimal data (only name)
    console.log("\nCreating a todo with only a name...");
    const minimalTodo = await createTodo({ name: "Minimal Todo" });
    console.log("Minimal todo created:", minimalTodo);

    // Test create with invalid is_done
    console.log("\nAttempting to create a todo with invalid is_done...");
    try {
      await createTodo({ name: "Invalid is_done", is_done: 2 });
    } catch (error) {
      console.log("Error caught as expected:", error.message);
    }

    // Test create with invalid sort_order
    console.log("\nAttempting to create a todo with invalid sort_order...");
    try {
      await createTodo({
        name: "Invalid sort_order",
        sort_order: "not a number",
      });
    } catch (error) {
      console.log("Error caught as expected:", error.message);
    }

    // Test create with empty name
    console.log("\nAttempting to create a todo with an empty name...");
    try {
      await createTodo({ name: "" });
    } catch (error) {
      console.log("Error caught as expected:", error.message);
    }
  } catch (error) {
    console.error("Test failed:", error.message);
  } finally {
    process.exit();
  }
}

runTests();
```

### Running the Enhanced Tests

Run the updated tests using:

```
node testOperations.js
```

You should see output demonstrating successful creation of valid todos and appropriate error messages for invalid inputs.

### Verifying in the Database

After running the tests, use Navicat MySQL to verify the newly created todos in your database:

```
SELECT * FROM todos ORDER BY id DESC LIMIT 5;
```

This will show you the most recently added todos, including those created with default values.

### Key Takeaways

1. **Input Validation**: Always validate user inputs to ensure data integrity and prevent errors.
2. **Default Values**: Provide sensible defaults for optional fields to improve user experience.
3. **Error Handling**: Use specific error messages to make debugging easier and improve the API's usability.
4. **Comprehensive Testing**: Test both valid and invalid scenarios to ensure your function behaves correctly in all cases.

### The Importance of Guard Tests

You may have noticed that we placed our input validation checks at the very beginning of the `createTodo` function. This practice is known as using "guard clauses" or "early returns," and it's considered a best practice in software development. Here's why:

1. **Fail Fast**: By checking for invalid inputs immediately, we can fail fast and avoid unnecessary processing. This improves the function's efficiency and can prevent more complex errors later in the execution.

2. **Improved Readability**: Placing guard clauses at the beginning of a function makes it clear what the expected inputs are. It separates input validation from the main logic of the function, making the code easier to read and understand.

3. **Reduced Nesting**: By handling invalid cases early, we reduce the need for nested if-else statements. This leads to a flatter, more maintainable code structure.

4. **Clear Contract**: Guard clauses act as a clear contract for the function, explicitly stating what inputs are acceptable. This makes the function's requirements obvious to anyone using or maintaining the code.

5. **Easier Debugging**: When an error occurs, these guard clauses provide specific, actionable error messages. This makes it easier to identify and fix issues, especially when the function is part of a larger system.

6. **Improved Security**: By thoroughly validating inputs, we reduce the risk of security vulnerabilities that could arise from unexpected or malicious input data.

By adopting this practice of using guard clauses, we're not just writing code that works; we're writing code that's robust, maintainable, and adheres to professional software development standards. As you continue to develop your skills, keep this practice in mind for all the functions you write.

### Next Steps

With a robust `createTodo` function in place, we're ready to move on to implementing the remaining CRUD operations: Read, Update, and Delete. In the next section, we'll focus on retrieving todo items from our database.
