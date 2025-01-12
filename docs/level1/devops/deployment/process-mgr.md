---
sidebar_label: "Process Manager"
sidebar_position: 60
---

# **Using PM2 to Manage Your Node.js Application**

In this lesson, we’ll introduce **PM2**, a powerful process manager for Node.js applications, and explain why it’s a critical tool for deploying and managing apps in production. You’ll also get hands-on experience with setting up PM2, running your app, and managing its lifecycle.

---

## **What Is PM2 and Why Use It?**

PM2 is a production-grade process manager for Node.js applications. It provides an easy way to manage, monitor, and keep your applications running 24/7.

### **Why PM2?**

- **Persistent Applications**: You may have noticed in the previous example, when you started your app using `node server.js` and then closed your SSH session, the app stopped running. PM2 solves this problem by keeping your app running in the background.
- **Automatic Restarts**: PM2 automatically restarts your app if it crashes, ensuring high availability.
- **Startup on Boot**: PM2 can configure your app to start automatically when the server reboots.
- **Monitoring Tools**: PM2 provides tools to monitor your app's CPU and memory usage in real time.

---

## **Setting Up PM2**

Follow these steps to install and configure PM2 on your Lightsail instance.

### **Step 1: Install PM2**

1. SSH into your Lightsail instance:
   ```bash
   ssh -i keys/lightsail-key.pem bitnami@<lightsail-instance-ip>
   ```
2. Install PM2 globally using npm:
   ```bash
   sudo npm install -g pm2
   ```
3. Verify the installation:
   ```bash
   pm2 --version
   ```
   You should see the PM2 version number if it was installed successfully.

---

### **Step 2: Run Your Application with PM2**

1. Navigate to your app directory (e.g., `~/todo-app`):
   ```bash
   cd ~/todo-app
   ```
2. Start your app using PM2:

   ```bash
   pm2 start server.js --name "todo-app"
   ```

   - Replace `server.js` with the entry point of your app.
   - The `--name` flag assigns a name to your process for easier management.

3. Check the running processes:

   ```bash
   pm2 list
   ```

   - You should see your app (`todo-app`) listed with a status of `online`.

4. View real-time logs for your app:

   ```bash
   pm2 logs todo-app
   ```

   - Use `Ctrl+C` to exit the logs.

5. Verify your app is running by opening a browser and navigating to it.

---

### **Step 3: Manage the Application Lifecycle**

PM2 provides commands to manage your app at every stage of its lifecycle. Here are some key commands:

- **Restart the App**:

  ```bash
  pm2 restart todo-app
  ```

- **Stop the App**:

  ```bash
  pm2 stop todo-app
  ```

- **Delete the App**:

  ```bash
  pm2 delete todo-app
  ```

- **View Detailed App Information**:
  ```bash
  pm2 describe todo-app
  ```

---

### **Step 4: Set Up PM2 for Startup on Boot**

> **Reminder:** If you experimented with the commands in the previous step and deleted your app from PM2, make sure to add it back before continuing. Use the following command to start your app:
>
> ```bash
> pm2 start server.js --name "todo-app"
> ```

1. Configure PM2 to start your app automatically when the server reboots:

   ```bash
   pm2 startup
   ```

   - PM2 will output a command specific to your server’s environment. Run the command it provides (e.g., `sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u bitnami --hp /home/bitnami`).

     **Important:** Be sure to copy and paste the command your server provides, not the one shown in the example above, as they may differ.

2. Save the current PM2 process list so it restarts on boot:

   ```bash
   pm2 save
   ```

3. Test the setup by rebooting the server:

   ```bash
   sudo reboot
   ```

4. After the server restarts, reconnect via SSH and check if the app is running:
   ```bash
   pm2 list
   ```

---

## **Handling Backend Changes and Restarting Your Node.js App**

When working on your backend, you might need to update the application code, such as adding a new route to `server.js`. After using `rsync` to upload the updated files to the server, you’ll need to take an additional step to apply these changes. Here's how to handle this scenario.

---

### **Why Node.js Requires a Restart**

Node.js loads your code into memory when the application starts. Once the app is running, it doesn’t automatically detect changes to your source files. This means that if you update a file, such as `server.js`, the running Node.js process won’t incorporate the new changes unless it is restarted.

#### **What Happens if You Don't Restart?**

Even after deploying changes using `rsync`, the running application will continue using the old version of your code. This behavior ensures stability in production but requires manual intervention to apply updates.

---

### **Restarting the App with PM2**

If you’re using PM2 to manage your Node.js app (as described in the previous section), restarting is straightforward. After uploading your changes with `rsync`, restart your app as follows:

1. SSH into your Lightsail instance:
   ```bash
   ssh -i keys/lightsail-key.pem bitnami@<lightsail-instance-ip>
   ```
2. Restart the app using PM2:
   ```bash
   pm2 restart todo-app
   ```
   - Replace `todo-app` with the name of your app as configured in PM2.

This command stops the currently running process and starts it again, reloading the updated `server.js`.

3. Verify the app is running and using the updated code:
   ```bash
   pm2 list
   ```

---

### **Optional: Automating Restarts During Development**

During local development, you can use tools like **nodemon** to automatically restart your app whenever you make changes. Nodemon watches for file changes and reloads the server without manual intervention.

#### **Example: Installing and Using Nodemon**

1. Install nodemon locally:
   ```bash
   npm install -g nodemon
   ```
2. Run your app with nodemon:
   ```bash
   nodemon server.js
   ```

> **Important:** Nodemon is only recommended for development. In production, use PM2 or other production-grade tools to manage your app.

---

### **Best Practices for Updating Backend Code**

1. **Test Locally First**: Before deploying updates, test them thoroughly in your local environment.
2. **Sync Files Using Rsync**: Use `rsync` to upload only the changed files to the server.
3. **Restart the App**: Always restart the Node.js process after deploying changes to ensure the updates take effect.
4. **Verify After Deployment**: Check the app logs and functionality to confirm the changes were applied successfully.

---

### **In Summary**

- Node.js does not automatically incorporate changes after a file update.
- Use `pm2 restart` to reload your application after deploying new code.
- For development, tools like nodemon can simplify the process of reloading changes automatically.

By following these steps, you’ll ensure that your updates are applied correctly without disrupting the stability of your application.

Let me know if you’d like further assistance! 🚀

---

## **Next Steps**

With PM2 configured and running your app, your application is now resilient to server crashes and reboots. In the next section, we’ll focus on optimizing your deployment process and managing updates to your app in production.

Let’s keep going! 🚀
