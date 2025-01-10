---
sidebar_label: "Create Instance"
sidebar_position: 20
---

# **Setting Up the Lightsail Instance**

In this section, we’ll cover how to create your AWS Lightsail instance, connect to it using AWS’s built-in browser-based terminal, download the SSH key, and integrate it into your project. Finally, we’ll connect to the Lightsail instance directly from the VSCode terminal.

---

## **1. Create an AWS Lightsail Instance**

1. Log in to your [AWS Lightsail Console](https://lightsail.aws.amazon.com/).
2. Click the **Create Instance** button.
3. Configure your instance:
   - **Platform**: Select **Linux/Unix**.
   - **Blueprint**: Select **Node.js**.
   - **Instance Plan**: Choose a plan that fits your needs (the smallest option is sufficient for this project).
4. Name your instance (e.g., `todo-app`) and click **Create Instance**.
5. Wait for the instance to start. You’ll see its status change to **Running** in the Lightsail dashboard.

---

## **2. Connect Using the Built-In Browser Terminal**

1. In the Lightsail dashboard, click on your newly created instance.
2. Scroll down to the **Connect to your instance** section.
3. Click the **Connect using SSH** button (it’s orange) to open the built-in browser-based terminal.

### **What You Are Looking At**

The browser terminal connects you directly to the virtual machine (VM) of your Lightsail instance. This is a Linux shell where you can interact with your server, run commands, and configure your environment. You now have full control of your instance.

### **Introductory Commands to Explore Your Instance**

Here are some basic linux commands you can use to familiarize yourself with your instance:

- `pwd`: Prints the current working directory (where you are in the file system).

  ```bash
  pwd
  ```

  Example output: `/home/bitnami`

- `ls -l`: Lists the contents of the current directory in a detailed format, including permissions, sizes, and modification dates.

  ```bash
  ls -l
  ```

  Example output:

  ```plaintext
  drwxr-xr-x 2 bitnami bitnami 4096 Jan 10 12:00 public
  -rw-r--r-- 1 bitnami bitnami   64 Jan 10 12:00 server.js
  ```

- `whoami`: Shows the current user you are logged in as.

  ```bash
  whoami
  ```

  Example output: `bitnami`

- `uname -a`: Displays information about the system (e.g., OS, kernel version).
  ```bash
  uname -a
  ```
  Example output: `Linux ip-172-26-9-154 6.1.0-28-cloud-amd64 ...`

Feel free to run these commands to get a sense of how the terminal works and what environment your instance is running.

When you're done, simply close the browser terminal to close your connection. (This will not close or stop the instance.)

In the next section we'll discuss how you can connect to your instance directly from your local machine.

---

## **3. What Is SSH and Why Do We Need an SSH Key?**

### **What Is SSH?**

SSH (Secure Shell) is a network protocol that allows you to securely log into and execute commands on a remote server. It provides encrypted communication, ensuring that data sent between your computer and the server is secure. SSH is widely used for server management, file transfers, and automated deployments.

### **What Is an SSH Key?**

An SSH key is a pair of cryptographic keys (a private key and a public key) used for secure authentication. The **private key** stays on your local machine and is kept secret, while the **public key** is stored on the remote server. Together, they allow secure, passwordless access to the server.

### **Why Do We Need an SSH Key?**

AWS Lightsail uses SSH keys to securely authenticate and connect to your instance. Instead of using a password, which can be insecure and cumbersome, the SSH key provides a more secure and convenient way to access your server.

---

## **4. Download the SSH Key**

1.  In the Lightsail dashboard, scroll to the **Connect to your instance** section.
2.  Look at the **Use your own SSH client** subsection in the lower right.
3.  Download the SSH key by clicking the link labeled **Download default key**.
4.  Save the key file to your project under a new folder called `keys/`:
    ```
    todo-app/
    ├── keys/
    │   └── lightsail-key.pem
    ```
5.  Immediately add `lightsail-key.pem` to your `.gitignore` file so it doesn't get added to your repository. This key gives anyone access to your server, so you want to protect it.

    To ensure the SSH key is not accidentally committed to version control:

        1. Open your `.gitignore` file.
        2. Add the following line:
        ```plaintext
        keys/
        ```

6.  Secure the SSH key by updating its permissions:
    ```bash
    chmod 600 keys/lightsail-key.pem
    ```
    This step ensures your SSH private key is secure by restricting its permissions to the file owner only. Without this, other users on your system could access the key, compromising the security of your Lightsail instance. Additionally, SSH requires the private key to have secure permissions (read/write for the owner only) to function properly.

### **Understanding the Fields in the Instance Details UI**

Here’s a brief explanation of the fields displayed in the Lightsail instance details screen:

- **Public IPv4 Address**: This is the IP address that external clients can use to access your instance. For example, `3.21.248.77` in this case.
- **Private IPv4 Address**: This is the internal IP address within AWS’s network. It is used for communication between AWS resources.
- **Public IPv6 Address**: If IPv6 is enabled, this is the public IPv6 address that external clients can use to access your instance.
- **Username**: The default username for connecting to the instance, which is usually `bitnami` for Lightsail Node.js instances.
- **SSH Key**: This section includes a link to download the default private key required to connect to the instance via SSH.

---

## **5. Connect via VSCode Terminal**

1. Open VSCode and navigate to the terminal.
2. Use the following SSH command to connect to your Lightsail instance:

   ```bash
   ssh -i keys/lightsail-key.pem bitnami@<lightsail-instance-ip>
   ```

   - Replace `<lightsail-instance-ip>` with the public IP address of your Lightsail instance, which can be found in the Lightsail dashboard.

   Note: When connecting to a remote server via SSH for the first time, you’ll see a warning like this:

   ```bash
   The authenticity of host '3.21.248.77 (3.21.248.77)' can't be established.
   ED25519 key fingerprint is SHA256:ayqy//nIyCC5eWb5kRYW2SsyebuN8XYOoTfJfJrIXoc.
   This key is not known by any other names.
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   This is because your computer hasn’t encountered this server before. The message informs you of the server’s fingerprint (a unique identifier) to confirm its authenticity. This is a security measure to prevent connecting to an imposter server.

   If you’re confident that the server address (e.g., 3.21.248.77) is correct and you’re connecting securely (e.g., using the correct key and username), type “yes” and press Enter to proceed. This will save the server’s fingerprint in your local ~/.ssh/known_hosts file for future verification. The next time you connect, this warning will not appear unless the server’s fingerprint changes (which could indicate a security risk). Always verify the server details before proceeding.

3. Once connected, you’ll have full shell access to your instance, enabling you to manage and configure your app directly from the VSCode terminal. This is the same as when you connected to your instance from the browser terminal earlier in this section.

Perform some of the same commands like `pwd` and `whoami` to demonstrate that the experience is the same.

When you're done and want to disconnect from the server, issue the command `exit`. This ends your `ssh` session, and is the same as closing the browser terminal above.

---

## **Next Steps**

Now that your Lightsail instance is set up and accessible, we’re ready to move on to deploying your backend and frontend applications. Let’s proceed!
