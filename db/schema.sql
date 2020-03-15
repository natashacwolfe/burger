-- create database
DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

-- Create table for burgers 
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(id),
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN
);