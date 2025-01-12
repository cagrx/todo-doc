---
sidebar_label: "SSL Web Server Setup"
sidebar_position: 500
---

# Setting Up SSL Certificates and Redirecting HTTP to HTTPS for Your Node.js App on Lightsail

This guide will walk you through the process of setting up SSL certificates using Certbot and configuring Nginx to redirect HTTP traffic to HTTPS for your Node.js application deployed on a Lightsail instance.

---

## Prerequisites

1. A Node.js app listening on port 3004 and configured with Nginx on Lightsail.
2. A domain name linked to your instance's static IP address.
3. Nginx installed and running on your Lightsail instance.

---

> Reminder: Since we're installing new software onto our server, it's a good idea to take a snapshot of it first.

Perform the following steps from a **remote terminal**.

## Steps

### 1. Add Domain Names to the Nginx Config File

Open the Nginx configuration file for your domain:

```bash
sudo nano /etc/nginx/sites-available/default
```

The current version should look like this:

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

Instead of matching all requests, we want the `server_name` to specify our domains, so modify the file to look like this (replacing yourdomain.com with your domain name):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

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

### 1. Install Certbot and the Nginx Plugin

Run the following commands to install Certbot and the Nginx plugin:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Obtain an SSL Certificate

Run Certbot to automatically configure SSL for your domain:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

- Replace `yourdomain.com` and `www.yourdomain.com` with your actual domain names.
- Certbot will:
  - Verify your domain ownership.
  - Automatically update your Nginx configuration to include SSL settings.

When prompted, select the option to redirect HTTP traffic to HTTPS.

### 3. Verify the Certificate

After Certbot completes, test the certificate by visiting your site at:

- These should load with a secure HTTPS connection.
  - `https://yourdomain.com`
  - `https://www.yourdomain.com`
- These should redirect to a secure HTTPS connection.
  - `http://your domain.com`
  - `http://www.yourdomain.com`

### 4. Inspect the Nginx configuration file

Open the Nginx configuration file for your domain and see the changes nginx made. **Do not change any values.**

```bash
sudo nano /etc/nginx/sites-available/default
```

### 5. Set Up Auto-Renewal

Certbot automatically renews certificates, but you should verify the renewal process:

```bash
sudo certbot renew --dry-run
```

If no errors occur, your SSL certificates will renew automatically.

---

## Troubleshooting

- **Domain Verification Issues**: Ensure your domain’s DNS records are correctly pointing to your Lightsail instance’s static IP.
- **Firewall Issues**: Open ports 80 and 443 on your Lightsail instance. Use the Lightsail console to manage instance firewall settings.

---

Congratulations! Your Node.js app is now accessible over HTTPS, and all HTTP traffic is redirected to HTTPS.
