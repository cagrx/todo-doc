---
sidebar_label: "Manual Deployment"
sidebar_position: 50
---

# Manual Deployment of Your Application

Now that we have our app working successfully on our local machine, it’s time to deploy it to the server. The goal is to copy our application’s code to the server and run it there so it can handle requests and serve users.

## Using `rsync` for File Transfer

We’ll use the `rsync` command to transfer files from our local machine to the server. `rsync` is a powerful file copying tool that efficiently syncs directories and files, transferring only the changes to save time and bandwidth. It works over the same port as SSH (port 22), which means it uses your existing SSH connection for secure file transfer.

## Installing `rsync` on your local machine

Note: The following steps should be performed from your **local terminal**.

### Step 1: Check if `rsync` is Installed

Open your terminal and run the following command:

```bash
rsync --version
```

- If `rsync` is installed, you’ll see its version number and details.
- If it’s not installed, you’ll see a message like `command not found`.

### Step 2: Install `rsync` (if not already installed)

#### For macOS:

1. Install [Homebrew](https://brew.sh) (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Use Homebrew to install `rsync`:
   ```bash
   brew install rsync
   ```

#### For Linux (Debian/Ubuntu):

Run the following command:

```bash
sudo apt update && sudo apt install rsync
```

#### For Windows:

1. Install [Cygwin](https://www.cygwin.com/) or [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/).
2. Ensure `rsync` is included during the installation of Cygwin, or use your Linux distribution's package manager in WSL to install it:
   ```bash
   sudo apt install rsync
   ```

### Step 3: Confirm Installation

Run the following command again to verify the installation:

```bash
rsync --version
```

You should now see the version details if the installation was successful.

## Installing `rsync` on your remote server

We also need to install `rsync` on the remote server.

From a **remote terminal**, ssh to your remote server be following the previous steps outlined in our instance setup:

```bash
ssh -i keys/lightsail-key.pem bitnami@<lightsail-instance-ip>
```

- Replace `<lightsail-instance-ip>` with the public IP address of your Lightsail instance, which can be found in the Lightsail dashboard.

Now that you're in the remote server...

### Update the system

- Since we haven't yet done so, let's update check to be sure our server has the latest updates. This has nothing to do with our application right now, but rather it ensures the operating system and other system level components have all the latest updates like security patches. We should do this manually every so often.
- Run `sudo apt update`
- Note: The `sudo` command is used to run apt update with superuser (administrator) privileges because updating system package information requires access to system files that regular users can’t modify. Without sudo, the command would fail due to insufficient permissions.

### Install `rsync`

- Now let's install `rsync` by running the command:<br/> `sudo apt install rsync -y`
  1. `sudo`: Runs the command with superuser (administrator) privileges, which are required for making changes to system software or installing packages.
  2. `apt`: The package manager used on Debian-based Linux distributions (e.g., Ubuntu). It handles the retrieval, installation, and management of software packages.
  3. `install`: The subcommand that tells apt to install a package.
  4. `rsync`: The name of the package to be installed. In this case, it’s a utility for efficiently transferring and synchronizing files across systems.
  5. `-y`: A flag that automatically answers “yes” to any prompts during the installation process. This makes the command non-interactive, useful in scripts or when you want to avoid manual confirmation.

### Confirm Installation

Run the following command again to verify the installation:

```bash
rsync --version
```

You should now see the version details if the installation was successful.

Now that we have `rsync` installed on both the local machine and remote server, let's look at a few `rsync` considerations for our project.

## The `.rsyncignore` File

To ensure we don’t transfer unnecessary files, we’ll use an `.rsyncignore` file. This file tells `rsync` which files and folders to skip during the transfer. For example, we’ll exclude the `node_modules/` directory, which contains dependencies installed locally. This is fine because those dependencies will be reinstalled on the server.

Create an `.rsyncignore` file in the root of our project directory and ensure it includes:

```
node_modules/
keys/
*.log
.DS_Store
.git/
.gitignore
.vscode/
```

### Why Exclude `node_modules/`?

Instead of copying `node_modules/` from our local machine, we’ll replicate its contents on the server by running `npm install` from the server itself. This command reads the `package.json` file in your project and downloads all the dependencies, ensuring they match the specified versions.

### Including `.env`

For now, we’ll include the `.env` file in the transfer. This file contains configuration settings our server needs, such as database credentials, API keys, and other environment variables. Generally you want to be very selective where copies of .env exist because they often contain secrets like passwords. Since this is a small educational project, we can use this method. If this were a more high-stakes application in a business production environment, we'd seek more robust methods of accessing secrets.

## Running the `rsync` command.

**[Local command]**

From your local terminal, and from the project's root directory, run the following command (replacing the ip address below with that of your own instance):

```bash
rsync -avz --exclude-from='.rsyncignore' -e "ssh -i keys/lightsail-key.pem" ./ bitnami@18.188.191.122:~/todo-app
```

### Breaking Down the Command

1. **`rsync`**:
   The command itself, used for synchronizing files between machines.

2. **`-avz`**:

   - `-a` (archive mode): Preserves file permissions, symbolic links, and directory structure.
   - `-v` (verbose): Outputs details about the synchronization process.
   - `-z` (compress): Compresses files during transfer to reduce bandwidth usage.

3. **`--exclude-from='.rsyncignore'`**:
   Specifies a file (`.rsyncignore`) that contains patterns of files and directories to exclude from the transfer.

4. **`-e "ssh -i keys/lightsail-key.pem"`**:

   - `-e`: Specifies the remote shell to use for the transfer, which is SSH in this case.
   - `"ssh -i keys/lightsail-key.pem"`: Uses the SSH private key (`lightsail-key.pem`) located in the `keys` directory to authenticate the connection.

5. **`./`**:
   Indicates the source directory (current directory in this case) to synchronize.

6. **`bitnami@18.188.191.122`**:
   The SSH credentials for the remote server:

   - `bitnami`: The username.
   - `18.188.191.122`: The IP address of the remote server.

7. **`:~/todo-app`**:
   Specifies the destination path on the remote server where the files will be copied (`todo-app` directory in the user's home directory).

## Verifying the `rsync` command

Now that the files have been copied to your remote server, let's see if they're actually there.

Switch over to your **remote terminal** (or sign in so the remote server using the `ssh` commands from above).

- Type `pwd` and notice you're at `/home/bitnami`, which is the home directory for the user.
- Type `ls -l` and you should notice the `todo-app` directory.
- Type `cd todo-app` to change into that directory.
- Type `ls -l` and you should see the project's files and directories. If so, then you've successfully used `rsync` to synchronize your local directory contents with your remote machine.

Before we can run our app, we need to open our instance's ports so we can access the web app and so the server can talk to our database.

## Opening Required Ports

Before running the app on the server, we need to open two ports:

1. **Port 3004**: This will allow us to verify that our app is running by connecting to it through a browser or API client.
2. **Port 3306**: This allows the server to connect to the remote MySQL database.

Let's open Port 3004:

1. Navigate to the instance's Networking section and scroll to IPv4 networking.
2. Click + Add rule
3. Select or enter the following:
   - Application: Custom
   - Protocol: TCP
   - Port or range: 3004
4. Click the `Create` button

You should notice that a new rule has been added to the Firewall that includes port 3004. The "Restricted to" column should say "Any IPv4 address", which means anyone in the world can now make requests to port 3004 on this instance.

Follow these same steps to open Port 3306.

Security note: These ports are open and available to everyone. This is ok for our small educational project. However you'd rarely allow such open access to projects with higher stakes.

    - The only thing stopping a random person from accessing your database is access to your credentials.
    - Our db username is `admin`, which is the default setup value, making it easily guessable.
    - Our password is kept out of the public's view. But if anyone knew it, they could connect and do anything they want with the database.
    - This makes it especially important that our `.env` file is included in `.gitignore`, especially for public git repositories. Otherwise, anyone browsing your codeline could easily gain access to your database and other resources.

## Starting the Application

Now that the code is sync'd with the remote server, and the server's ports are opened, we can start the application.

From a **remote terminal**:

1. Navigate to the project's root directory:<br/> `cd todo-app` or `cd ~/todo-app`.
2. Install dependencies with:
   ```bash
   npm install
   ```
   Note: You only need to run `npm install` because we haven't yet installed the project's dependencies. Once installed, those dependencies will be installed into `/node_modules` and stored there. You'll only need to run `npm install` again if you later add new dependencies to `package.json`.
3. Start the application manually using the `node` command:
   ```bash
   node server.js
   ```

You should see a message like `Server running on port 3004`.

## Verifying the Application

Once the app is running, open a browser and navigate to `http://<your-server-ip>:3004/`. If everything is set up correctly, you should see the contents of the `index.html` file from the `public` directory in your project.

Recall that we had various examples of todo html files. You should access the latest one and try it out.

For example: `http://<your-server-ip>:3004/todo-op-2.html`

Your app should work completely, including access to your database. Try adding, marking, and deleting todos from your web page.

Also, just like we did in our local environment, you can use Postman to call the APIs on your remote server. Simply change references to `localhost` to `<your-server-ip>` and they should work.

## Modifying the Application

`rsync` will also sync file changes too! For example, change something in your html file locally. Then run your `rsync` command again. Notice that `rsync` efficiently only sends the files that have changed. Refresh your browser and your change should appear. (If it doesn't, try stopping the remote server via CTRL-C and starting it again via `node server.js`)

This completes the manual deployment process! In future lessons, we’ll explore automating parts of this workflow for easier deployment.
