---
sidebar_label: "Create The MySQL Instance"
sidebar_position: 20
---

# Creating a MySQL Database with Amazon RDS

In this section, we'll create a MySQL database using Amazon RDS (Relational Database Service). This database will store all the data for our todo application.

## Steps to Create Your RDS Database

1. **Log into AWS Console**

   - Go to https://aws.amazon.com/
   - Click on "Sign In to the Console"
   - Enter your AWS account credentials

2. **Navigate to RDS**

   - In the AWS Management Console, find and click on "RDS" under the "Database" section
   - If you can't find it, use the search bar at the top and type "RDS"

3. **Start Database Creation**

   - Click on "Create database" button

4. **Choose Database Creation Method**

   - Select "Easy Create"
   - This option simplifies the process by using recommended best-practice configurations

5. **Configure Database**

   - For "Engine type", select "MySQL"
   - For "DB instance size", choose "Free tier" (if available) or the smallest option
   - For "DB instance identifier", enter `todo-db-1`
   - Set a master username (e.g., `admin`)
   - Enter a master password
     - **IMPORTANT**: Write this password somewhere safe. You'll need it later!
   - Confirm the master password

6. **Review and Create**

   - Review your settings
   - Click "Create database"

7. **Wait for Database Creation**

   - AWS will now create your database. This process may take several minutes
   - You can monitor the progress on the RDS Dashboard

8. **Get Connection Information**

   - Once the database is created, click on its name in the RDS Dashboard
   - Note down the "Endpoint" and "Port" information
   - You'll need these to connect to your database from Navicat MySQL

9. **Set Public Access**
   - Once the database is created, click on its name in the RDS Dashboard
   - Click the Modify button
   - Scroll down to the "Connectivity" section and expand the "Additional configuration" section.
   - Under "Public Access" select "Publicly accessible"
   - Scroll to the bottom of the page and click "Continue"
   - On the next page, select "Apply immediately" in the "Schedule modifications" section.
   - Now click "Modify DB Instance"
   - Wait for your database's status to change from Modifying to Available
   - Note: In a production environment, you'd typically avoid public access for security reasons

## Important Notes

- **Security**: Allowing public access is for educational purposes and to allow you to easily connect to the database using Navicat MySQL from your computer. In a real-world scenario, you'd use more secure connection methods. Additionally, the APIs we will be creating to access data won't require public access.
- **Costs**: Be aware of potential costs associated with running an RDS instance, even on the free tier.
- **Clean Up**: Remember to delete this database when you're done with the project to avoid unnecessary charges.

## Next Steps

With your RDS MySQL database created, you're ready to connect to it using Navicat MySQL and start building the data structure for your todo application.
