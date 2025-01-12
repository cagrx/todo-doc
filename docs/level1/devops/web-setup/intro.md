---
sidebar_label: "Intro"
sidebar_position: 10
---

# Enhancing the Web App: Benefits of Nginx, Domain Name, and SSL

Our web app is successfully deployed in a Lightsail server, and the world can access it (if they know the right port number).

But we can make our app friendlier and more secure by making a few changes to our stack.

## Benefits of Using a Lightweight Nginx Server

Nginx is a high-performance web server and reverse proxy server designed to handle HTTP and HTTPS traffic efficiently, providing features like load balancing, caching, and support for hosting multiple applications on the same server.

1. **Reverse Proxy**: Nginx can act as a reverse proxy to forward traffic from port 80 or 443 (standard HTTP/HTTPS ports) to port 3004, eliminating the need for users to specify a port number.
2. **Hosting Multiple Applications**: Nginx can route requests to multiple applications on the same instance. For example, our current app on port 3004 and a future app on port 3005 can coexist, with Nginx directing traffic based on URL paths or subdomains.
3. **Load Balancing**: If the app scales horizontally, Nginx can distribute incoming traffic across multiple app instances.
4. **Caching**: Nginx can cache static files, improving site performance and reducing the load on the backend server. (Note: In our use case, our app will still continue to serve our static files.)
5. **Security**: Nginx adds an extra layer of security by hiding the backend server's details from the end user.

## Creating a Domain Name for Human-Friendly Access

- **Ease of Use**: A domain name replaces the need to remember an IP address or append a port number.
- **Brand Identity**: A custom domain name builds credibility and professionalism.
- **DNS Features**: It allows the use of subdomains and email addresses tied to the domain.

## Using SSL for Secure Content Delivery

1. **Encryption**: SSL ensures that data transferred between the server and client is encrypted, protecting sensitive information like login credentials.
2. **Trust**: A site with HTTPS and a padlock icon in the browser builds user trust.
3. **SEO Benefits**: Search engines like Google prioritize secure websites, improving their ranking.

## Stack Component Overview

By the time we've completed this section, our app's technology stack will look like this:

| Component     | Role                                                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Lightsail** | Provides scalable cloud hosting for the application.                                                                                   |
| **Nginx**     | Acts as a reverse proxy, handles HTTP/HTTPS traffic, improves performance and security, and routes requests for multiple applications. |
| **Node.js**   | Provides the runtime for executing JavaScript on the server.                                                                           |
| **Express**   | A lightweight framework for building web applications in Node.js.                                                                      |
| **Certbot**   | Automates the process of obtaining and renewing SSL/TLS certificates.                                                                  |
