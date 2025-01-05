---
sidebar_label: "Connect To The Database"
sidebar_position: 30
---

# Connecting to Your RDS MySQL Database with Navicat MySQL

Now that you've set up your RDS MySQL database, it's time to connect to it using Navicat MySQL. This powerful tool will allow you to interact with your database, create tables, and manage your data.

## Prerequisites

- Navicat MySQL installed on your computer
- RDS database endpoint, port, username, and password (from the previous steps)

## Steps to Connect

1. **Launch Navicat MySQL**

   - Open the Navicat MySQL application on your computer

2. **Create a New Connection**

   - Click on the "Connection" button in the top-left corner
   - Select "MySQL" from the dropdown menu

3. **Configure Connection Settings**

   - In the "General" tab:
     - Connection Name: Enter a name for this connection (e.g., "Todo App RDS")
     - Host: Paste your RDS endpoint (e.g., `todo-db-1.cxyz123abc.us-east-1.rds.amazonaws.com`)
     - Port: Enter the port number (typically 3306 for MySQL)
     - User Name: Enter the master username you set (e.g., `admin`)
     - Password: Enter the master password you created

4. **Test the Connection**

   - Click the "Test Connection" button
   - If successful, you'll see a "Connection successful" message
   - If not, double-check your settings and ensure your RDS security group allows your IP address

5. **Save and Connect**

   - Click "OK" to save the connection
   - Your new connection should appear in the left sidebar
   - Double-click on it to connect to your database

6. **Explore Your Database**
   - Once connected, you'll see your database listed in the left sidebar
   - Expand it to view tables (currently empty) and other database objects

## Troubleshooting Connection Issues

If you're having trouble connecting:

- Verify that you've entered the correct endpoint, port, username, and password
- Check if your RDS instance is publicly accessible
- Ensure that the security group associated with your RDS instance allows inbound traffic on port 3306 from your IP address
- If using a VPN, try disconnecting as it might interfere with the connection

## Next Steps

Now that you're connected to your database, you're ready to start creating tables for your todo application. In the next section, we'll design and implement the database schema for storing tasks and user information.

## Security Reminder

Remember, exposing your database to public access is not recommended for production environments. We're doing this for educational purposes. In a real-world scenario, you'd use more secure methods to connect to your database, such as VPCs, bastion hosts, or AWS Direct Connect.
