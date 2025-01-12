---
sidebar_label: "Quick Tip - VSCode Teminal"
sidebar_position: 40
---

# Setting Up Local and Remote Terminals in VSCode

When working on both your local machine and a remote server, it can be helpful to have dedicated terminals in VSCode for each environment. This allows you to easily switch between running commands on your local machine and on the remote server without confusion.

## Why Use Two Terminals?

1. **Clarity**: Clearly separate local and remote commands to avoid mistakes, such as running a command in the wrong environment.
2. **Efficiency**: Quickly switch between terminals without needing to re-establish SSH connections or navigate directories.
3. **Organization**: Keep your workflow clean and structured by assigning one terminal for local work and another for remote tasks.

## How to Set Up Two Terminals in VSCode:

1. Open VSCode and navigate to the **Terminal** tab.
2. Create a new terminal for your **local machine** by clicking the **plus (+)** button or selecting **Terminal > New Terminal** from the menu.
   - Confirm this terminal is running locally by checking the working directory with the `pwd` command.
3. Create another terminal for your **remote server** by opening a new terminal and using SSH to connect:
   ```bash
   ssh -i keys/your-key.pem user@remote-ip
   ```
   - Replace `your-key.pem` with the path to your SSH key, and `user@remote-ip` with your server details.
4. Label each terminal in VSCode:
   - Right-click the terminal tab and choose **Rename**.
   - Name one terminal "Local" and the other "Remote" to keep track.
5. Confirm which terminal you’re in before running commands by checking the prompt or running basic commands like `pwd`.

## Example:

In the "Local" terminal, you might run commands like `git status` or edit local files. In the "Remote" terminal, you can execute server-specific commands like installing dependencies or managing your web app.

This setup will make your workflow smoother and help avoid mistakes when switching between environments.
