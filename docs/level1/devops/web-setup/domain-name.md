---
sidebar_label: "Create Domain Name"
sidebar_position: 300
---

# Create Your Domain Name And Attach It To Your Lightsail Instance

## Create your domain name:

1. In Amazon Lightsail, navigate to **Domains & DNS**.
2. Click **Register domain**
3. Verify your desired comain name is available.
4. Once you have an available domain name, complete the remainder of the form information. You can leave all the default values untouched such as Automatic Renewal and Privacy Protection. Click the **Register domain** button.
5. Follow the instructions as provided by Lightsail to complete registration. You'll likely need to click on a verification link from an email sent to the email address you provided. Be sure to check your spam folder - it very likely went there.

## Attach your domain name to your Lightsail instance:

Once the registration process is complete...

1. In Amazon Lightsail, navigate to **Domains & DNS**.
2. Notice your domain name appear in both the **DNS zones** and **Registered domains** sections.
3. Click on your domain name from the link within the **DNS zones** section.
4. Select the **Assignments** tab.
5. Click **+ Add assignment**.
6. Select your domain name (e.g. example.com).
7. In the **Select a resource** dropdown, select the Lightsail instance that holds your todo app.
8. In the **Select the address** section, choose **Static IP address**.
9. You should see a subsequent message like:
   ```bash
   Result example.com will resolve to StaticIp-1, which is attached to this instance.
   ```
10. Click the **Assign** button.

In the **Assignments** tab, you should now see a listing for this assignment.

## Verify the assignment

- You should now be able to visit your website from a browser by navigating to `http://<yourdomainname>`
- You should now be able to ssh to your remote server using your domain name (e.g. `ssh -i keys/lightsail-key.pem bitnami@<yourdomainname>`)

---

## Configuring CNAME Record in Amazon Lightsail to Support www Subdomain

At this point, your domain name (e.g. example.com) points to your IP address, but no subdomains (e.g. www.example.com) have been added. So any requests to `www.<yourdomainname>` will fail.

Follow these steps to configure a CNAME record in Amazon Lightsail to support requests to `www.<yourdomainname>`:

---

### Step 1: Log in to Lightsail

1. Navigate to the [Amazon Lightsail console](https://lightsail.aws.amazon.com/).
2. Go to the **Networking** tab.

---

### Step 2: Access Your DNS Zone

1. Select your domain (e.g., `example.com`) from the list of DNS zones.

---

### Step 3: Add a CNAME Record

1. Under the **DNS records** section, click **Add record**.
2. Configure the record as follows:

   - **Record type**: `CNAME record`
   - **Record name**: Enter `www` (this represents `www.example.com`).
   - **Route traffic to**: Enter your root domain (e.g., `example.com`).

3. Click **Save**.

---

### Step 4: Verify DNS Propagation

1. Open your browser and test by visiting `www.example.com`.
2. It should now point to the same instance as `example.com`.

---

## Next Steps

The world can now access your server using a domain name instead of an IP address.

However, we currently only support HTTP, which means all requests and responses are traveling over the internet unsecurely in cleartext. To properly secure our app, we need to suppor HTTPS, which requires SSL, which we'll set up in the next section.

## Optional: A Note About IPv6

You may have noticed that assigning our instance an IPv6 IP address was an option. Here are some considerations that influenced our choice of using an IPv4 IP address.

Note: There is no need at this time to create a dual-stack setup described below.

### Serving a Web App on Lightsail with IPv4 and IPv6

#### Downsides of Using Only an IPv6 Address

1. **Limited IPv6 Adoption**:

   - While IPv6 adoption is increasing, it is not yet universally supported. As of 2025, there are still regions and networks where IPv6 is either not deployed or not fully functional.
   - Some users on older networks, devices, or ISPs that do not support IPv6 won't be able to access your website.

2. **Compatibility Issues**:

   - Older operating systems or browsers might not support IPv6.
   - Some corporate firewalls or networks are configured to block or not support IPv6 traffic.

3. **SEO and Web Crawlers**:

   - Some search engine crawlers, especially those relying on legacy systems, might prioritize or rely on IPv4. This could potentially impact search engine indexing and rankings if your site is not accessible via IPv4.

4. **Network Debugging Complexity**:
   - Debugging network issues may be more complex if you're exclusively using IPv6, as not all diagnostic tools or skills are IPv6-ready.

#### Recommendations

1. **Use a Static IPv4 Address**:

   - Create a static IPv4 address in Lightsail and attach it to your instance. This ensures universal accessibility since IPv4 is supported by virtually all networks and devices.

2. **Enable Dual-Stack (IPv4 and IPv6)**:

   - To future-proof your setup, configure your domain and instance to support both IPv4 and IPv6. Lightsail can handle both, and this ensures that users with only IPv6 can still access your site while maintaining compatibility for those reliant on IPv4.

3. **DNS Configuration**:

   - Use an `A` record for the IPv4 address and an `AAAA` record for the IPv6 address in your domain’s DNS settings. This dual-stack setup provides redundancy and maximizes accessibility.

4. **Test Accessibility**:
   - Before committing to production, test your website's accessibility using various tools to ensure both IPv4 and IPv6 users can reach it.

#### Conclusion

By opting for a dual-stack setup, you achieve the best of both worlds: ensuring broad accessibility today while preparing for the increasing adoption of IPv6 in the future.
