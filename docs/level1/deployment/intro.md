---
sidebar_label: "Intro"
sidebar_position: 10
---

# **Deploying Your Three-Tier Architecture Project**

In this section, we will guide you through the process of deploying your three-tier architecture project—consisting of a **MySQL database**, **Node.js/Express REST API**, and a **Bootstrap-decorated static frontend**—to the cloud using **AWS Lightsail**. This deployment will make your application accessible to users worldwide, transforming it from a local experiment into a publicly available project.

## **Why AWS Lightsail?**

AWS Lightsail is a simplified cloud platform designed to make hosting web applications, websites, and services easy, especially for small-scale projects and developers learning the basics of cloud deployment. Lightsail abstracts away much of the complexity of traditional cloud computing services like AWS EC2 while still offering a powerful and flexible environment for deployment.

Here are some key features of Lightsail:

- **Ease of Use**: Preconfigured instances make it easy to get started with common stacks (e.g., Node.js, MySQL, and more).
- **Cost-Effective**: Fixed monthly pricing makes it easy to budget for your deployment.
- **Managed Tools**: Includes a simple interface for managing static IPs, firewalls, and domain names.

## **AWS Lightsail vs. EC2**

AWS Lightsail and EC2 are both cloud compute services offered by AWS, but they are designed for different use cases. Here's a quick comparison:

| **Feature**          | **Lightsail**                                                       | **EC2**                                                             |
| -------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Ease of Use**      | Beginner-friendly, with preconfigured instances and a simple UI.    | Highly configurable but complex, suitable for advanced users.       |
| **Pricing**          | Fixed monthly pricing.                                              | Pay-as-you-go pricing with granular control.                        |
| **Customization**    | Limited to predefined blueprints and simpler configurations.        | Full control over instance configurations, networking, and scaling. |
| **Target Audience**  | Developers building small projects or learning cloud basics.        | Developers and businesses with complex, large-scale workloads.      |
| **Managed Services** | Built-in support for simple tasks like IP management and firewalls. | Requires manual setup and integration with other AWS services.      |

## **How This Section Fits into the Lesson Plan**

In this section, you'll learn:

1. How to set up and configure a Lightsail instance for hosting your backend and frontend.
2. How to connect your Lightsail instance to your MySQL database, also hosted on Lightsail.
3. How to use a deployment script to automate the process of uploading your project and keeping it in sync with your development environment.
4. Best practices for managing environment variables, ensuring your project is secure, and making your application robust enough for public access.

By the end of this section, your "ToDo App" will be live and accessible online, giving students hands-on experience with deploying and managing a multi-tier architecture project on the cloud.

Let’s get started!
