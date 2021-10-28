DROP DATABASE IF EXISTS idkyet_db;
CREATE DATABASE idkyet_db;

USE idkyet_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(30),
);

DROP TABLE IF EXISTS roll;
CREATE TABLE roll (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
)