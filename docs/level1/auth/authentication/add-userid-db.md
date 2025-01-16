---
sidebar_label: "Add User ID to the Database"
sidebar_position: 20
---

# Add User ID to the Database

Let's add a `user_id` field to our `todos` table in the database.

We'll make it `varchar(255)` to support the user ids provided by Firebase Auth.

We'll also make it `NOT NULL` because we want every `todo` to have a `user_id`.

You may need to delete all the existing `todo`s or update them with non-null `user_id`s in order to make the change to the table.

```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

---

-- Table structure for todos

---

DROP TABLE IF EXISTS `todos`;
CREATE TABLE `todos` (
`id` int NOT NULL AUTO_INCREMENT,
`user_id` varchar(255) NOT NULL,
`name` varchar(255) NOT NULL,
`is_done` bigint DEFAULT '0',
`sort_order` bigint DEFAULT '-1',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13479 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;

```
