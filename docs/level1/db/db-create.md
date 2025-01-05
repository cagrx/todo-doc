---
sidebar_label: "Create The ToDo Database"
sidebar_position: 40
---

# Setting Up Your Todo Database

## Introduction

In this section, we'll create our todo application database and table using Navicat MySQL. We'll use SQL commands to perform CRUD (Create, Read, Update, Delete) operations, giving you a practical understanding of database manipulation. By the end, you'll have a functioning "SQL todo app" and a foundation for our full-stack application.

## Prerequisites

- Navicat MySQL installed and connected to your RDS instance
- Basic understanding of SQL commands

## Creating the Database and Table

1. **Create the Database**
   In Navicat MySQL, open a new query window and run:
   ```sql
   CREATE DATABASE todo_app;
   ```
2. **Use the New Database**
   ```sql
    USE todo_app;
   ```
3. **Create the todos Table**

   ```sql
    CREATE TABLE todos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    is_done INT DEFAULT 0,
    sort_order INT DEFAULT -1
    );
   ```

   Note:

   - id is set to auto-increment, ensuring each new task gets a unique identifier.
   - is_done uses 0 for incomplete and 1 for complete tasks.
   - sort_order defaults to -1, placing new tasks at the top of the list.

## CRUD Operations: Your SQL Todo App

Let's perform basic todo app operations using SQL!

### Create: Adding Tasks

Add a few tasks:

```sql
 INSERT INTO todos (name) VALUES ('Buy groceries');
 INSERT INTO todos (name) VALUES ('Finish homework');
 INSERT INTO todos (name) VALUES ('Call mom');
```

Try inserting with a duplicate ID (this will fail, demonstrating PK constraint):

```sql
 INSERT INTO todos (id, name) VALUES (1, 'This will fail');
```

### Read: Viewing Tasks

View all tasks:

```sql
SELECT * FROM todos;
```

View only incomplete tasks:

```sql
SELECT * FROM todos WHERE is_done = 0;
```

### Update: Modifying Tasks

Mark a task as complete:

```sql
UPDATE todos SET is_done = 1 WHERE id = 1;
```

Change task priority:

```sql
UPDATE todos SET sort_order = 1 WHERE id = 2;
```

### Delete: Removing Tasks

Delete a completed task:

```sql
DELETE FROM todos WHERE id = 1;
```

## Reflections

You've just created a basic todo app using SQL! Consider:

- How the database enforces data integrity (like preventing duplicate IDs)
- The ease of querying and updating data
- How you might expand this schema for more features (like due dates or categories)

## Saving Your Schema and Seed Data

Now that we have our database structure and some initial data, let's save this as a SQL file for future use and version control.

1. In Navicat MySQL, right-click on your `todo_app` database.
2. Select "Export SQL File" or a similar option (the exact wording may vary depending on your Navicat version).
3. In the export options:

   - Ensure "Structure" and "Data" are both selected.
   - Choose a location in your project directory. Create a new folder called `db` if it doesn't exist.
   - Name the file init.sql.

4. Click "Start" or "Export" to generate the SQL file.

Your `init.sql` file should now contain the CREATE TABLE statement for the `todos` table and INSERT statements for your seed data.

## Adding to Version Control

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Add the new file to git:

```bash
git add db/init.sql
```

4. Commit your changes:

```bash
git commit -m "Add initial database schema and seed data"
```

## Next Steps

With our database schema in place, seed data prepared, and an understanding of basic SQL operations, we're ready to start building the backend of our application. In the next section, we'll create business objects that will interact with this database, forming the foundation of our app's logic.
