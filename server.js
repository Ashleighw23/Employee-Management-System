const connection = require("./db/connection");
require("console.table");
const inquirer = require("inquirer");

const start = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userChoice",
        message: "What do you want to do?",
        choices: [
          "viewEmployee",
          "viewDepartments",
          "viewRoles",
          "addEmployee",
          "addDepartments",
          "addRoles",
          "updateEmployeeByRole",
        ],
      },
    ])
    .then(({ userChoice }) => {
      switch (userChoice) {
        case "viewEmployee":
          viewEmployee();
          break;
        case "viewDepartments":
          viewDepartment();
          break;
        case "viewRoles":
          viewRoles();
          break;
        case "addEmployee":
          addEmployee();
          break;
        case "addDepartments":
          addDepartments();
          break;
        case "addRoles":
          addRoles();
          break;
        case "updateEmployeeByRole":
            updateEmployeeByRole();
          break;
        default:
          break;
      }
    });
};

const viewEmployee = () => {
  connection.query("SELECT * FROM employee", (err, data) => {
    if (err) throw err;
    console.log("\n");
    console.table(data);
  });
  start();
};

const viewDepartment = () => {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;
    console.log("\n");
    console.table(data);
  });
  start();
};

const viewRoles = () => {
  connection.query("SELECT * FROM role", (err, data) => {
    if (err) throw err;
    console.log("\n");
    console.table(data);
  });
  start();
};

const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is employee first_name?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is employee last_name?",
          },
          {
            type: "input",
            name: "role_id",
            message: "What is employee role_id?",
          }
          ,{
            type: "input",
            name: "manager_id",
            message: "What is employee manager_id?",
          }
      ])
      .then((answers) => {
        const data = {
          first_name: answers.first_name,
          last_name: answers.last_name,
          role_id: answers.role_id,
          manager_id: answers.manager_id,
        };
  
        connection.query("INSERT INTO employee SET ?", data, (err, data) => {
          if (err) throw err;
          console.log("\n");
        });
        start();
      });
  };

const addDepartments = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is dep name?",
        }
      ])
      .then((answers) => {
        const data = {
          name: answers.name
        };
  
        connection.query("INSERT INTO department SET ?", data, (err, data) => {
          if (err) throw err;
          console.log("\n");
        });
        start();
      });
  };

const addRoles = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is role title?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is role salary?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is role dep_id?",
      },
    ])
    .then((answers) => {
      const data = {
        title: answers.title,
        salary: answers.salary,
        department_id: answers.department_id,
      };

      connection.query("INSERT INTO role SET ?", data, (err, data) => {
        if (err) throw err;
        console.log("\n");
      });
      start();
    });
};

const updateEmployeeByRole = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "role_id",
          message: "What is role id?",
        },
        {
          type: "input",
          name: "employee_id",
          message: "What is employee id?",
        }
      ])
      .then((answers) => {
        connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [answers.role_id,answers.employee_id], (err, data) => {
          if (err) throw err;
          console.log("\n");
        });
        start();
      });
  };

start();
