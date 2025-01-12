---
sidebar_label: "Final Housekeeping"
sidebar_position: 600
---

# Final Housekeeping

## Tighten The Firewall

The world now accesses our app through HTTP/HTTPS, so there's no longer a need to keep port `3004` open in the instance's firewal.

1. Navigate to your Lightsail instance.
2. Click on the **Networking** tab.
3. In the IPv4 Firewall section, locate the row that specifies port `3004` and click the delete icon.
4. Use your browser to verify requests to `http://<yourdomainname>:3004` are rejected or time out.
5. Use your browser to verify requests to `http://<yourdomainname>` are accepted and work as expected.

## Update Your Code And Scripts

At this point, we've changed our IP address to a permanent one. And we have a domain name the world uses to access the server. Go through your source code and scripts and replace any instances of a previous hardcoded IP address with your domain name.

For example, in the `deploy.sh` script we previously created, replace this line:

```bash
# Variables
LIGHTSAIL_IP="2.1.4.32"
```

with this line:

```bash
# Variables
LIGHTSAIL_IP="yourdomain.org"
```

Verify by making a change to your code and running the deploy script. Your changes should successfully make it to your Lighsail instance.
