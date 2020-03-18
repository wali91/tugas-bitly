const mysql = require("mysql2");
const db = require("./database");

const connection = mysql.createConnection(db.connection);

connection.query("CREATE DATABASE" + db.database);

connection.query(
  "CREATE TABLE `" +
    db.database +
    "`.`" +
    db.users_table +
    " ` ( `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `username` VARCHAR(20) NOT NULL, \
    `email` VARCHAR(255) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
    `reset_password_token` CHAR(60) NULL, \
    `reset_password_expires`date NULL, \
    PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `email_UNIQUE` (`email` ASC), \
    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
    )"
);

console.log("Success: Database Created!");

connection.end();
