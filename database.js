const mysql = require("mysql");
require("dotenv").config();

parameters = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWD,
  database: process.env.DBNAME,
  port: process.env.DBPORT,
  multipleStatements: true,
};

mysqlConnection = mysql.createConnection(parameters);
mysqlConnection.connect((err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection to MySQL established!");
  }
});

function getAllUsers() {
  mysqlConnection.query(`SELECT * FROM user`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      return results;
    }
  });
}

// mysqlConnection.query(`SELECT * FROM purchases`, (err, results) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);
//   }
// });

// let name = 'Jane Doe';
// let dob = '2000-01-01';
// let phone = '98765432';
// let nric = 'T0128482G';

// mysqlConnection.query(
//   `INSERT INTO user SET name = '${name}', dob = '${dob}', mobile_number = '${phone}', ic_number = '${nric}'`,
//   (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (results["affectedRows"] != 0) {
//         console.log("Added");
//       }
//     }
//   }
// );

// mysqlConnection.query(
//   `CREATE TABLE \`order\` (
//     order_id int(11) NOT NULL AUTO_INCREMENT,
//     date_added DATETIME NOT NULL,
//     PRIMARY KEY (order_id)
//   )`,
//   (err, results) => {
//     if (err){
//       console.log(err);
//     } else {
//       if (results["affectedRows"] != 0) {
//         console.log("Added");
//       }
//     }
//   }
// );

module.exports = mysqlConnection;