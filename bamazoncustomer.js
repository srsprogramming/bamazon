// setting up npm packages and global variables
var mysql = require("mysql");
var inquirer = require("inquirer");

// setting up the mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

// connecting to mysql and calling the showProducts function
connection.connect(function(err){
    if (err) {
      throw err;
    }
    else {
      console.log("WELCOME TO BAMAZON")
    showProducts();
  }
});

// creating showProducts function
var showProducts = function() {
  connection.query("SELECT * from products", function(err, res) {
    if (err) {
      throw err;
    }
  else if (res) {
    console.log(res);
  }
  });
};
