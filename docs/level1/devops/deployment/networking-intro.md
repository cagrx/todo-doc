---
sidebar_label: "Networking - Intro"
sidebar_position: 30
---

# Understanding IPv4 Firewalls and Ports

Navigate to the `Networking` section of your instance in the Lightsail UI and take a look.

When configuring a server, understanding the **IPv4 Firewall** section is crucial for controlling access to the instance. Each **port** acts like a door that allows specific types of communication to and from the server. For example, when connecting to a server using SSH, **TCP port 22** is used. Without this port being open, you wouldn't be able to connect to the server via SSH.

## Key Points:

1. **IPv4 Firewall** rules determine which ports are open and accessible from the internet. These rules specify:

   - The application (e.g., SSH, HTTP, HTTPS).
   - The protocol (e.g., TCP or UDP).
   - The port number.
   - The IP range allowed to connect.

2. By default, your instance has the following settings:

   - **Port 22 (SSH)** is open, enabling secure access to the server for administrative purposes.
   - **Ports 80 (HTTP)** and **443 (HTTPS)** are open, allowing public web traffic.

3. If a required port isn't open, the corresponding service won't be accessible. For example:
   - Without port 22 open, SSH connections will fail.
   - Without port 80 or 443 open, users won't be able to access a web app.

## Practical Example:

When deploying a web app on the server, we’ll need to ensure the port the app is listening on is open. For most web servers, this will be port 80 (for HTTP) or port 443 (for HTTPS). Opening unnecessary ports can pose a security risk, so only open ports that are essential for your application.

## Next Steps:

Later, after deploying your web app, we’ll revisit this topic to update the firewall rules and ensure users can access the app securely.

---

**Reminder:** Use the Lightsail UI to manage these rules under the "Networking" tab of your instance. Be cautious and only open ports that are required.
