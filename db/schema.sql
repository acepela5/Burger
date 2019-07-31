CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER AUTO-INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured TINYINT NOT NULL,
PRIMARY KEY (id)
);

