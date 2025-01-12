---
sidebar_label: "Create Static IP Address"
sidebar_position: 200
---

# Create And Attach A Static IP Address To Your Lightsail Instance

By default, your Lightsail instance comes with a public IPv4 address, which is what we use to connect to it from the outside world. However, that address changes when you stop and start your instance.

This means your IP address might currently be `2.4.3.12`, but if you stop and restart your instance, it might become something different like `8.23.1.4`.

We want people to access our app from a human-readable domain name (like `www.todolio.com`) instead of needing to memorize our IP address. When people access that domain name, we want that to resolve to our IP address. That means we're going to want that IP address to be static (not changing).

When we go to our Lightsail intance and select the Networking tab, we see see our current public IPv4 address. We also see the option to Attach a static IP address. Click on that link.

You can accept the default name for this resource, or change it to something more meaningful for you.

When you're ready, click the **Create and attach** button.

When you return to your instance's Networking tab, you'll notice your temporary IP address has been replaced with a permanent IP address. This ip address will remain constant throughout the instance's start, stop, reboot lifecycle.

> Reminder: Now, when we use ssh to access our server, we need to use

Now that we have a permanent ip address, we can create a domain name and attach it to our instance.
