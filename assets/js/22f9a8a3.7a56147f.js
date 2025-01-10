"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[3899],{2395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"level1/app/create-validate","title":"create-validate","description":"Enhancing createTodo with Input Validation and Error Checking","source":"@site/docs/level1/app/create-validate.md","sourceDirName":"level1/app","slug":"/level1/app/create-validate","permalink":"/todo-doc/docs/level1/app/create-validate","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_label":"Create w/Validation","sidebar_position":40},"sidebar":"tutorialSidebar","previous":{"title":"Create","permalink":"/todo-doc/docs/level1/app/create"},"next":{"title":"Presentation Tier","permalink":"/todo-doc/docs/category/presentation-tier"}}');var o=t(4848),r=t(8453);const a={sidebar_label:"Create w/Validation",sidebar_position:40},s=void 0,d={},c=[{value:"Enhancing createTodo with Input Validation and Error Checking",id:"enhancing-createtodo-with-input-validation-and-error-checking",level:2},{value:"Step 1: Updating the createTodo Function",id:"step-1-updating-the-createtodo-function",level:3},{value:"Understanding the Enhancements",id:"understanding-the-enhancements",level:3},{value:"Step 2: Updating the Test Function",id:"step-2-updating-the-test-function",level:3},{value:"Running the Enhanced Tests",id:"running-the-enhanced-tests",level:3},{value:"Verifying in the Database",id:"verifying-in-the-database",level:3},{value:"Key Takeaways",id:"key-takeaways",level:3},{value:"The Importance of Guard Tests",id:"the-importance-of-guard-tests",level:3},{value:"Next Steps",id:"next-steps",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"enhancing-createtodo-with-input-validation-and-error-checking",children:"Enhancing createTodo with Input Validation and Error Checking"}),"\n",(0,o.jsxs)(n.p,{children:["Now that we have a basic ",(0,o.jsx)(n.code,{children:"createTodo"})," function working, let's improve it by adding robust input validation and error checking. This will make our function more reliable and secure."]}),"\n",(0,o.jsx)(n.h3,{id:"step-1-updating-the-createtodo-function",children:"Step 1: Updating the createTodo Function"}),"\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.code,{children:"todoOperations.js"})," and replace the existing ",(0,o.jsx)(n.code,{children:"createTodo"})," function with the following enhanced version:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'async function createTodo(todoData) {\n  console.log("todoData:", todoData);\n\n  // Validate name\n  if (!todoData.name || todoData.name.trim() === "") {\n    throw new Error("Todo name is required");\n  }\n\n  // Validate and set default for is_done\n  if (todoData.is_done === undefined) {\n    todoData.is_done = 0; // Set default value\n  } else if (todoData.is_done !== 0 && todoData.is_done !== 1) {\n    throw new Error("is_done must be 0 or 1");\n  }\n\n  // Validate and set default for sort_order\n  if (todoData.sort_order === undefined) {\n    todoData.sort_order = -1; // Set default value\n  } else if (!Number.isInteger(todoData.sort_order)) {\n    throw new Error("sort_order must be an integer");\n  }\n\n  try {\n    const [result] = await db.pool.query(\n      "INSERT INTO todos (name, is_done, sort_order) VALUES (?, ?, ?)",\n      [todoData.name, todoData.is_done, todoData.sort_order]\n    );\n    return {\n      id: result.insertId,\n      name: todoData.name,\n      is_done: todoData.is_done,\n      sort_order: todoData.sort_order,\n    };\n  } catch (error) {\n    throw new Error(`Failed to create todo: ${error.message}`);\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"understanding-the-enhancements",children:"Understanding the Enhancements"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Name Validation"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["We check if ",(0,o.jsx)(n.code,{children:"name"})," is provided and not just whitespace."]}),"\n",(0,o.jsx)(n.li,{children:"If invalid, we throw an error with a descriptive message."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"is_done Validation"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"is_done"})," is not provided, we set a default value of 0 (not done)."]}),"\n",(0,o.jsx)(n.li,{children:"If provided, we ensure it's either 0 or 1."}),"\n",(0,o.jsx)(n.li,{children:"Any other value results in an error."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"sort_order Validation"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"sort_order"})," is not provided, we set a default value of -1."]}),"\n",(0,o.jsxs)(n.li,{children:["If provided, we ensure it's an integer using ",(0,o.jsx)(n.code,{children:"Number.isInteger()"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Non-integer values result in an error."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Error Handling"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"We've kept the try-catch block to handle database errors."}),"\n",(0,o.jsx)(n.li,{children:"The function now throws more specific errors for invalid inputs."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Logging"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"We've added a console.log at the beginning to help with debugging."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step-2-updating-the-test-function",children:"Step 2: Updating the Test Function"}),"\n",(0,o.jsxs)(n.p,{children:["Now that we've enhanced our ",(0,o.jsx)(n.code,{children:"createTodo"})," function, let's update our test function in ",(0,o.jsx)(n.code,{children:"testOperations.js"})," to cover more scenarios:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'const { createTodo } = require("./todoOperations");\n\nasync function runTests() {\n  try {\n    // Test create with valid data\n    console.log("Creating a new todo...");\n    const newTodoData = {\n      name: "Test todo",\n      is_done: 0,\n      sort_order: 1,\n    };\n    const newTodo = await createTodo(newTodoData);\n    console.log("New todo created:", newTodo);\n\n    // Test create with minimal data (only name)\n    console.log("\\nCreating a todo with only a name...");\n    const minimalTodo = await createTodo({ name: "Minimal Todo" });\n    console.log("Minimal todo created:", minimalTodo);\n\n    // Test create with invalid is_done\n    console.log("\\nAttempting to create a todo with invalid is_done...");\n    try {\n      await createTodo({ name: "Invalid is_done", is_done: 2 });\n    } catch (error) {\n      console.log("Error caught as expected:", error.message);\n    }\n\n    // Test create with invalid sort_order\n    console.log("\\nAttempting to create a todo with invalid sort_order...");\n    try {\n      await createTodo({\n        name: "Invalid sort_order",\n        sort_order: "not a number",\n      });\n    } catch (error) {\n      console.log("Error caught as expected:", error.message);\n    }\n\n    // Test create with empty name\n    console.log("\\nAttempting to create a todo with an empty name...");\n    try {\n      await createTodo({ name: "" });\n    } catch (error) {\n      console.log("Error caught as expected:", error.message);\n    }\n  } catch (error) {\n    console.error("Test failed:", error.message);\n  } finally {\n    process.exit();\n  }\n}\n\nrunTests();\n'})}),"\n",(0,o.jsx)(n.h3,{id:"running-the-enhanced-tests",children:"Running the Enhanced Tests"}),"\n",(0,o.jsx)(n.p,{children:"Run the updated tests using:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"node testOperations.js\n"})}),"\n",(0,o.jsx)(n.p,{children:"You should see output demonstrating successful creation of valid todos and appropriate error messages for invalid inputs."}),"\n",(0,o.jsx)(n.h3,{id:"verifying-in-the-database",children:"Verifying in the Database"}),"\n",(0,o.jsx)(n.p,{children:"After running the tests, use Navicat MySQL to verify the newly created todos in your database:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"SELECT * FROM todos ORDER BY id DESC LIMIT 5;\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will show you the most recently added todos, including those created with default values."}),"\n",(0,o.jsx)(n.h3,{id:"key-takeaways",children:"Key Takeaways"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Input Validation"}),": Always validate user inputs to ensure data integrity and prevent errors."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default Values"}),": Provide sensible defaults for optional fields to improve user experience."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Error Handling"}),": Use specific error messages to make debugging easier and improve the API's usability."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Comprehensive Testing"}),": Test both valid and invalid scenarios to ensure your function behaves correctly in all cases."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"the-importance-of-guard-tests",children:"The Importance of Guard Tests"}),"\n",(0,o.jsxs)(n.p,{children:["You may have noticed that we placed our input validation checks at the very beginning of the ",(0,o.jsx)(n.code,{children:"createTodo"}),' function. This practice is known as using "guard clauses" or "early returns," and it\'s considered a best practice in software development. Here\'s why:']}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Fail Fast"}),": By checking for invalid inputs immediately, we can fail fast and avoid unnecessary processing. This improves the function's efficiency and can prevent more complex errors later in the execution."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Improved Readability"}),": Placing guard clauses at the beginning of a function makes it clear what the expected inputs are. It separates input validation from the main logic of the function, making the code easier to read and understand."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Reduced Nesting"}),": By handling invalid cases early, we reduce the need for nested if-else statements. This leads to a flatter, more maintainable code structure."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Clear Contract"}),": Guard clauses act as a clear contract for the function, explicitly stating what inputs are acceptable. This makes the function's requirements obvious to anyone using or maintaining the code."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Easier Debugging"}),": When an error occurs, these guard clauses provide specific, actionable error messages. This makes it easier to identify and fix issues, especially when the function is part of a larger system."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Improved Security"}),": By thoroughly validating inputs, we reduce the risk of security vulnerabilities that could arise from unexpected or malicious input data."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"By adopting this practice of using guard clauses, we're not just writing code that works; we're writing code that's robust, maintainable, and adheres to professional software development standards. As you continue to develop your skills, keep this practice in mind for all the functions you write."}),"\n",(0,o.jsx)(n.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsxs)(n.p,{children:["With a robust ",(0,o.jsx)(n.code,{children:"createTodo"})," function in place, we're ready to move on to implementing the remaining CRUD operations: Read, Update, and Delete. In the next section, we'll focus on retrieving todo items from our database."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);