DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30),
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role (id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)
)

INSERT INTO department (name)
VALUES
    ("sales")
    ("engineer")
    ("cosmetics")
    ("shoes")
    ("IT")

INSERT INTO role (title, salary, department_id)
VALUES
    ("sales person", 60000, 1)
    ("software engineer",70000,2)
    ("customer service",80000,3)
    ("shoe maker", 90000,4)
    ("IT Tech", 100000,5)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Oscar", "Grouch", 1, NULL)
    ("Kelly", "Clarkson", 2, NULL)
    ("Sally","Hansen",3, NULL)
    ("Kelsey","Norton".4,NUll)
    ("Jack","Sparrow", 5, NUll)