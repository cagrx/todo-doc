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

### 6. Verify Setup

To ensure everything is set up correctly, run the file:

```bash
node db.js
```

You should see "Successfully connected to the database." printed in the console.

### Understanding Node.js in Modern Development

As we build our todo application, we're using Node.js as our runtime environment. But what exactly is Node.js, and why is it so popular in modern web development?

#### What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

#### Key Features of Node.js:

1. **JavaScript Everywhere**: Node.js allows you to use JavaScript for both front-end and back-end development, enabling full-stack development in a single language.

2. **Asynchronous and Event-Driven**: Node.js uses non-blocking, event-driven architecture, making it efficient and suitable for real-time applications.

3. **NPM (Node Package Manager)**: Node.js comes with npm, the largest ecosystem of open source libraries in the world, making it easy to add functionality to your projects.

4. **High Performance**: Built on Chrome's V8 JavaScript engine, Node.js is designed for building scalable network applications.

#### How Node.js is Used in Modern Development:

1. **Web Servers**: Node.js is commonly used to build web servers and web applications.

2. **API Development**: Its efficiency in handling multiple simultaneous connections makes it ideal for building RESTful APIs.

3. **Real-Time Applications**: Node.js is excellent for applications that require real-time updates, like chat applications or gaming servers.

4. **Microservices**: Its lightweight nature makes Node.js a popular choice for microservices architecture.

5. **Command Line Tools**: Many development tools and task runners are built with Node.js.

6. **Server-Side Rendering**: Node.js can render web pages on the server, improving performance and SEO for web applications.

7. **IoT (Internet of Things)**: Node.js is used in IoT solutions due to its efficiency with real-time data.

In our todo application, we're leveraging Node.js to create a server-side application that interacts with our database and will eventually serve our API. This demonstrates a common use case of Node.js in modern web development—building efficient, scalable backend services.

By using Node.js, we're not just learning a specific technology; we're engaging with a fundamental part of the modern web development ecosystem. The skills you're developing here are directly applicable to a wide range of professional development scenarios.
