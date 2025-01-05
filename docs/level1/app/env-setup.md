---
sidebar_label: "Environment Setup "
sidebar_position: 20
---

## Setting Up the Environment

Before we dive into coding our application tier, we need to ensure our development environment is properly set up. We'll be using Visual Studio Code (VS Code) as our Integrated Development Environment (IDE) and Node.js as our runtime environment.

### 1. Visual Studio Code

If you haven't already installed VS Code:

- Download and install Visual Studio Code from [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Once installed, open VS Code

Recommended VS Code extensions for this project:

- ESLint: For JavaScript linting
- Prettier: For code formatting
- MySQL: For MySQL syntax highlighting and IntelliSense

To install these extensions:

1. Click on the Extensions view icon on the Sidebar (or press Ctrl+Shift+X)
2. Search for each extension by name
3. Click 'Install' for each extension

### 2. Node.js and npm

Ensure you have Node.js and npm (Node Package Manager) installed:

1. Open a terminal in VS Code (Terminal > New Terminal)
2. Check your Node.js version: `node --version`
3. Check your npm version: `npm --version`

If Node.js is not installed:

- Download and install it from [https://nodejs.org/](https://nodejs.org/)
- Choose the LTS (Long Term Support) version for stability

### 3. Project Setup

Now, let's set up our project:

1. Go to or create the project folder:
   ```bash
   mkdir todo-app
   cd todo-app
   ```
2. Initialize a new Node.js project:

   ```bash
   npm init -y
   ```

This creates a `package.json` file with default values.

3. Install necessary dependencies:

   ```bash
   npm install mysql2
   ```

This installs the MySQL driver for Node.js.

### 4. Environment Variables

To keep our database credentials secure:

1. Install the dotenv package:

   ```bash
   npm install dotenv
   ```

2. Create a `.env` file in the root of your project:

3. Add your database credentials to the `.env` file:

   ```bash
   DB_HOST=your_host
   DB_USER=your_username
   DB_PASS=your_password
   DB_NAME=your_database_name
   ```

Replace the placeholders with your actual database credentials.

4. Create a `.gitignore` file to prevent sensitive information from being committed.
   Add `node_modules/` and `.env` to the file.

### 5. Create the DB Connection File

1. Open `db.js` in VS Code
2. Add the following code:

```javascript
require("dotenv").config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

async function testConnection() {
  let connection;
  try {
    connection = await pool.getConnection();
    console.log("Successfully connected to the database.");
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// Export both the pool and the test function
module.exports = {
  pool,
  testConnection,
};

// If this file is run directly (not imported), test the connection
if (require.main === module) {
  testConnection();
}
```

### 5. Verify Setup

To ensure everything is set up correctly, run the file:

```bash
node db.js
```

You should see "Successfully connected to the database." printed in the console.
