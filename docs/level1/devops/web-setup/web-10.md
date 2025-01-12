---
sidebar_label: "Basic Web Server Setup"
sidebar_position: 100
---

# Step 1: Setting Up Nginx to Forward Requests to a Node.js App

This step focuses on **installing Nginx** and configuring it to forward requests from a server's **IP address** to a **Node.js/Express app** running on port `3004`.

---

## Objectives

By the end of this step, you will:

1. Install and start Nginx on your server.
2. Configure Nginx to forward incoming HTTP requests to your Node.js app on port `3004`.
3. Access your app using the server’s IP address.

---

## Prerequisites

1. A server (e.g., AWS Lightsail instance) with Ubuntu/Debian installed.
2. A running Node.js/Express app listening on `localhost:3004`.
3. SSH access to the server.

---

> **Reminder:** Since we're installing new software onto our server, it's a good idea to take a snapshot of it first.

## Step 1: Disable Current Apache Web Server

If you followed the Lightsail instance setup instructions from the previous sections, the selection of the NodeJS blueprint meant the instance came with NodeJS already installed. However, it also has the Apache Web Server installed and running too.

You can verify this by pointing your browser to `http://<your-server-ip>/`. Since that URL does not include a port, the `http` request is going to port 80 by default, and the Apache Web Server running on your instance received the request instead of our app (which is listening to port 3004). As such, assuming you do have Apache installed and running, you should see welcome web page describing bitmani (the vendors of the blueprint).

Perform the following steps from a **remote terminal**.

### 1. Stop the Apache Web Service

The following command stops the Apache Service temporarily:

```bash
sudo /opt/bitnami/ctlscript.sh stop apache
```

### 2. Disable Apache from Starting on Boot

To ensure Apache doesn’t start automatically when the server reboots, let's rename the Apache control script so it won't be loaded:

```bash
sudo mv /opt/bitnami/scripts/apache /opt/bitnami/scripts/apache.disabled
```

If we ever need Apache again, we can reverse this my renaming the script and removing the .disabled suffix. There's nothing special about the word `.disabled` by the way. The system is looking for a script named `apache`, so by renaming the script `apache.disabled`, we're just changing the name to something else, and the system won't find the script it was looking for.

### 3. Verify That Apache Is Disabled

1. Check If Apache Is Running:

   ```bash
   sudo /opt/bitnami/ctlscript.sh status
   ```

   You should see apache is not running.

2. Reboot the Server:

   ```bash
   sudo reboot
   ```

3. Confirm That Apache Doesn't Start:
   After the server restarts, check again to ensure Apache is not running. Remember to ssh into your remote server again as your original ssh connection was closed during the reboot.

   ```bash
   sudo /opt/bitnami/ctlscript.sh status
   ```

   You should see a message like:

   ```bash
   Cannot find any running daemon to contact. If it is running, make sure you are pointing to the right pid file (/var/run/gonit.pid)
   ```

   You can verify by pointing your browser to `http://<your-server-ip>/`. No web page should return. In fact, no response at all should come back since there's currently nothing on your server listening to port 80.

   Now that the Apache Web Server is off and disabled, let's install the Nginx web server.

## Step 2: Install Nginx

Perform the following steps from a **remote terminal**.

### 1. Update the System

Run the following commands to ensure the system is up-to-date:

```bash
sudo apt update
sudo apt upgrade -y
```

### 2. Install Nginx

Use the package manager to install Nginx:

```bash
sudo apt install nginx -y
```

### 3. Start Nginx

After installation, Nginx should start automatically. Verify it is running:

```bash
sudo systemctl status nginx
```

- If it is not running, start it with:
  ```bash
  sudo systemctl start nginx
  ```

### 4. Test Nginx

Open your server's IP address in a browser (e.g., `http://<your-server-ip>`). You should see the default Nginx welcome page.

Note the absence of a port number in the url. This means the http request is going to port 80, which is being listed to by nginx.

### 5. Reboot to Verify Startup

By default, Nginx is configured to startup automatically when the instance starts. Verify this by rebooting your server and performing Step 4 above again after the server restarts.

```bash
sudo reboot
```

---

## Step 3: Configure Nginx to Forward Requests to Node.js App

Note: In the following steps, you'll be editing a file directly on the remote server using your remote terminal. There is no graphical user interface (GUI) to support editing the file with something like Sublime Text or Notepad, so you'll need to use an editor from within the terminal. Many exist, such as nano, pico, vi, and more. These steps reference nano, but feel free to use any editor you're comfortable with.

For a quick cheat sheet on nano commands, [see](https://www.nano-editor.org/dist/latest/cheatsheet.html)

Copying the configuration file contents from these instructions and pasting them into the nano editor should work, so you shouldn't have to expect to type all these configuration file lines by hand.

### 1. Make a Backup Copy of the Default Nginx Configuration

The default configuration file contains a lot of content, and we're interested in the bare essentials. We still want to keep it around in case we ever need it, so let's rename it instead of deleting it.

- First let's take a quick look to appreciate the contents in the default file.

  ```bash
  cat /etc/nginx/sites-available/default
  ```

  `cat` is a command that displays file contents. It can also be used to concatenate files, but we're not interested in that right now.

- Next let's rename (move) the file to make room for our new one.

  ```bash
  mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.orig
  ```

- Now let's create a new empty file that we'll edit.

  ```bash
  touch /etc/nginx/sites-available/default
  ```

  Using `touch` is optional. When we edit a file that doesn't exist, the editor will create the file the first time we save.

### 2. Edit the Default Nginx Configuration

Open the default Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/default
```

You should see no contents in the file.

### 2. Replace the File Content

Replace the content of the file with the following:

Note: Copy and paste should work here. Paste likely works by using right-mouse-click then selecting Paste from the dropdown menu.

```nginx
server {
    listen 80;
    server_name _; # Matches all requests, including those to the IP address

    location / {
        proxy_pass http://localhost:3004; # Forward requests to Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 3. Test the Configuration

Test the Nginx configuration for syntax errors:

```bash
sudo nginx -t
```

### 4. Reload Nginx

Apply the changes by reloading Nginx:

```bash
sudo systemctl reload nginx
```

---

## Step 4: Verify the Setup

### 1. Start the Node.js App

Ensure your app is running by using the `pm2 list` command.

### 2. Access the App

> Be sure to use `http` in the following steps, as `https` is not supported because we haven't yet configured it in our config file.

Open your server's IP address in a browser (e.g., `http://<your-server-ip>`). You should see the response from your Node.js app.

Note: Recall that our NodeJS app is listening to port `3004`. It still is, and in fact you can access it by visitng `http://<your-server-ip>:3004` in your browser.

So right now, these two URLs are supported:

- `http://<your-server-ip>`

  - Request goes to port `80`, which nginx receives and forwards to port `3004`
  - This is made possible by these lines in your configuration file:
    - `listen 80;` (Tells nginx to listen to port 80 which is the default port for HTTP)
    - `proxy_pass http://localhost:3004;` (Tells nginx to forward all requests to port)

- `http://<your-server-ip>:3004`

  - Request goes to port `3004` directly

Later, we'll remove port `3004` from the instance's firewall, so outside requests for it will be denied. The world will need to use HTTP (port `80`) or HTTPS (port `443` - which we'll later configure in the file). However, our NodeJS app will continue to listen to port `3004`, and internally (on the server) that's the port nginx and our app will use to communicate together. Internally, all ports are available and don't need to be configured via a firewall.

---

## Troubleshooting

### **502 Bad Gateway**

- Ensure your Node.js app is running on port `3004`.
- Check the Node.js app logs for errors.

### **Firewall Issues**

- Ensure port 80 is open on your server. For AWS Lightsail:
  - Go to your Lightsail instance > **Networking** > Add a rule to allow traffic on port 80.

### **Nginx Logs**

- Check Nginx logs for errors:
  ```bash
  sudo tail -f /var/log/nginx/error.log
  ```
