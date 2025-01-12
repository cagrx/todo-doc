---
sidebar_label: "Automated Deployment"
sidebar_position: 70
---

# **Automating Deployment with a Deploy Script**

In this section, we’ll explore the benefits of automating your deployment process using a `deploy.sh` script. By automating repetitive tasks, you can simplify and streamline your workflow, reduce errors, and ensure consistent deployments.

---

## **Why Automate Deployment?**

Manually deploying your application can be time-consuming and error-prone. Here are the key benefits of using a deployment script:

1. **Efficiency**: Automates repetitive tasks like syncing files, restarting services, and setting permissions.
2. **Consistency**: Ensures the same deployment steps are executed every time, reducing the likelihood of mistakes.
3. **Simplicity**: Provides a single command to deploy your app, making the process faster and easier.
4. **Reproducibility**: Other team members or systems can use the same script to deploy the app reliably.
5. **Improved Focus**: Lets you focus on developing features and debugging rather than managing deployment.

---

## **Step-by-Step: Creating and Using a Deploy Script**

### **Step 1: Create the `deploy.sh` Script**

1. In your project root directory, create a new directory named `scripts`
2. Inside the `scripts/` directory, create a file named `deploy.sh` and add the following content:

   ```bash
   #!/bin/bash

   # Variables
   LIGHTSAIL_IP="your-lightsail-ip"      # Replace with your Lightsail instance IP
   SSH_USER="bitnami"                   # Replace with your instance username
   SSH_KEY="keys/lightsail-key.pem"     # Path to your SSH private key
   APP_DIR="~/todo-app"                 # Remote app directory
   LOCAL_DIR="./"                       # Local app directory

   # Rsync files to the server
   echo "Syncing files to the server..."
   rsync -avz --exclude-from=".rsyncignore" -e "ssh -i $SSH_KEY" "$LOCAL_DIR" "$SSH_USER@$LIGHTSAIL_IP:$APP_DIR"

   # SSH into the server to install dependencies and restart the app
   echo "Connecting to the server to restart the app..."
   ssh -i "$SSH_KEY" "$SSH_USER@$LIGHTSAIL_IP" <<EOF
   cd $APP_DIR
   npm install
   pm2 restart all || pm2 start server.js --name "todo-app"
   EOF

   echo "Deployment complete!"
   ```

3. From a **local terminal**, make the script executable:
   ```bash
   chmod +x scripts/deploy.sh
   ```
   Note: The command chmod +x is used to make a file executable in Unix-based operating systems like Linux and macOS.

---

### **Step 2: Execute the Deployment Script**

1. From your project root directory, run the script:
   ```bash
   ./scripts/deploy.sh
   ```
2. The script will:
   - Sync your local files to the server using `rsync`.
   - SSH into the server to install dependencies and restart the app.

---

### **Step 3: Verify the Deployment**

1. After the script completes, visit your app in the browser using the Lightsail public IP (e.g., `http://<your-lightsail-ip>`).
2. From a **remote terminal**, check the PM2 process list on the server to ensure your app is running:
   ```bash
   pm2 list
   ```

Notes:

    - After you've verified the deployment script works as intended, be sure to commit it to git. It's as important to your project as your app's source code.
    - Because the deployment script restarts the pm2 processes (which also restarts your Node.js app), any backend changes you made (like adding a new api route) will be incorporated.
    - You can now deploy changes from your **local terminal**, reducing the need to ssh into your remote server.

## **The Role of `npm install` in Your Deployment Script**

When deploying your application, ensuring that the server has all the required dependencies is critical. Running `npm install` as part of your deploy script helps keep the server environment in sync with the application's requirements.

1. **Handles New Dependencies**:
   If you've added new dependencies (or updated existing ones) in the `dependencies` section of your `package.json` since the last deployment, running `npm install` will ensure they are installed on the server.

2. **Keeps the Environment Consistent**:
   Ensures that all dependencies listed in your `package.json` are present, preventing runtime errors due to missing modules.

3. **Automates Dependency Management**:
   Including `npm install` in your deploy script eliminates the need to manually install dependencies on the server, simplifying the process and reducing errors.

---

## **Benefits of Using `deploy.sh`**

By using a `deploy.sh` script, you:

- Eliminate repetitive tasks, saving time during deployment.
- Avoid forgetting critical steps, ensuring consistent results.
- Make deployments easy for other team members.

This script serves as the foundation for more advanced deployment automation. As your project grows, you can expand it with features like environment-specific configurations or integration with CI/CD pipelines.
