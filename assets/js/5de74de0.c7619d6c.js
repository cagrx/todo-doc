"use strict";(self.webpackChunktodo_doc=self.webpackChunktodo_doc||[]).push([[3475],{8634:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"level1/db/db-create","title":"Setting Up Your Todo Database","description":"Introduction","source":"@site/docs/level1/db/db-create.md","sourceDirName":"level1/db","slug":"/level1/db/db-create","permalink":"/todo-doc/docs/level1/db/db-create","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_label":"Create The ToDo Database","sidebar_position":40},"sidebar":"tutorialSidebar","previous":{"title":"Connect To The MySQL Instance","permalink":"/todo-doc/docs/level1/db/db-connect"},"next":{"title":"Recap","permalink":"/todo-doc/docs/level1/db/db-recap"}}');var i=s(4848),t=s(8453);const d={sidebar_label:"Create The ToDo Database",sidebar_position:40},o="Setting Up Your Todo Database",r={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating the Database and Table",id:"creating-the-database-and-table",level:2},{value:"CRUD Operations: Your SQL Todo App",id:"crud-operations-your-sql-todo-app",level:2},{value:"Create: Adding Tasks",id:"create-adding-tasks",level:3},{value:"Read: Viewing Tasks",id:"read-viewing-tasks",level:3},{value:"Update: Modifying Tasks",id:"update-modifying-tasks",level:3},{value:"Delete: Removing Tasks",id:"delete-removing-tasks",level:3},{value:"Reflections",id:"reflections",level:2},{value:"Saving Your Schema and Seed Data",id:"saving-your-schema-and-seed-data",level:2},{value:"Adding to Version Control",id:"adding-to-version-control",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"setting-up-your-todo-database",children:"Setting Up Your Todo Database"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In this section, we'll create our todo application database and table using Navicat MySQL. We'll use SQL commands to perform CRUD (Create, Read, Update, Delete) operations, giving you a practical understanding of database manipulation. By the end, you'll have a functioning \"SQL todo app\" and a foundation for our full-stack application."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Navicat MySQL installed and connected to your RDS instance"}),"\n",(0,i.jsx)(n.li,{children:"Basic understanding of SQL commands"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-the-database-and-table",children:"Creating the Database and Table"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create the Database"}),"\nIn Navicat MySQL, open a new query window and run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE todo_app;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Use the New Database"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:" USE todo_app;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create the todos Table"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:" CREATE TABLE todos (\n id INT PRIMARY KEY AUTO_INCREMENT,\n name VARCHAR(255) NOT NULL,\n is_done INT DEFAULT 0,\n sort_order INT DEFAULT -1\n );\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"id is set to auto-increment, ensuring each new task gets a unique identifier."}),"\n",(0,i.jsx)(n.li,{children:"is_done uses 0 for incomplete and 1 for complete tasks."}),"\n",(0,i.jsx)(n.li,{children:"sort_order defaults to -1, placing new tasks at the top of the list."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"crud-operations-your-sql-todo-app",children:"CRUD Operations: Your SQL Todo App"}),"\n",(0,i.jsx)(n.p,{children:"Let's perform basic todo app operations using SQL!"}),"\n",(0,i.jsx)(n.h3,{id:"create-adding-tasks",children:"Create: Adding Tasks"}),"\n",(0,i.jsx)(n.p,{children:"Add a few tasks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:" INSERT INTO todos (name) VALUES ('Buy groceries');\n INSERT INTO todos (name) VALUES ('Finish homework');\n INSERT INTO todos (name) VALUES ('Call mom');\n"})}),"\n",(0,i.jsx)(n.p,{children:"Try inserting with a duplicate ID (this will fail, demonstrating PK constraint):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:" INSERT INTO todos (id, name) VALUES (1, 'This will fail');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"read-viewing-tasks",children:"Read: Viewing Tasks"}),"\n",(0,i.jsx)(n.p,{children:"View all tasks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM todos;\n"})}),"\n",(0,i.jsx)(n.p,{children:"View only incomplete tasks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM todos WHERE is_done = 0;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-modifying-tasks",children:"Update: Modifying Tasks"}),"\n",(0,i.jsx)(n.p,{children:"Mark a task as complete:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE todos SET is_done = 1 WHERE id = 1;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Change task priority:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE todos SET sort_order = 1 WHERE id = 2;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-removing-tasks",children:"Delete: Removing Tasks"}),"\n",(0,i.jsx)(n.p,{children:"Delete a completed task:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM todos WHERE id = 1;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"reflections",children:"Reflections"}),"\n",(0,i.jsx)(n.p,{children:"You've just created a basic todo app using SQL! Consider:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"How the database enforces data integrity (like preventing duplicate IDs)"}),"\n",(0,i.jsx)(n.li,{children:"The ease of querying and updating data"}),"\n",(0,i.jsx)(n.li,{children:"How you might expand this schema for more features (like due dates or categories)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"saving-your-schema-and-seed-data",children:"Saving Your Schema and Seed Data"}),"\n",(0,i.jsx)(n.p,{children:"Now that we have our database structure and some initial data, let's save this as a SQL file for future use and version control."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In Navicat MySQL, right-click on your ",(0,i.jsx)(n.code,{children:"todo_app"})," database."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Select "Export SQL File" or a similar option (the exact wording may vary depending on your Navicat version).'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the export options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Ensure "Structure" and "Data" are both selected.'}),"\n",(0,i.jsxs)(n.li,{children:["Choose a location in your project directory. Create a new folder called ",(0,i.jsx)(n.code,{children:"db"})," if it doesn't exist."]}),"\n",(0,i.jsx)(n.li,{children:"Name the file init.sql."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Click "Start" or "Export" to generate the SQL file.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Your ",(0,i.jsx)(n.code,{children:"init.sql"})," file should now contain the CREATE TABLE statement for the ",(0,i.jsx)(n.code,{children:"todos"})," table and INSERT statements for your seed data."]}),"\n",(0,i.jsx)(n.h2,{id:"adding-to-version-control",children:"Adding to Version Control"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your terminal or command prompt."}),"\n",(0,i.jsx)(n.li,{children:"Navigate to your project directory."}),"\n",(0,i.jsx)(n.li,{children:"Add the new file to git:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git add db/init.sql\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Commit your changes:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git commit -m "Add initial database schema and seed data"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"With our database schema in place, seed data prepared, and an understanding of basic SQL operations, we're ready to start building the backend of our application. In the next section, we'll create business objects that will interact with this database, forming the foundation of our app's logic."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var a=s(6540);const i={},t=a.createContext(i);function d(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);