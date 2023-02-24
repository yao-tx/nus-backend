const express = require("express");
const db = require("../database");

let router = express.Router();

router.get("/user/get-all", (request, response) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.log(err);
      response.status(500).send("Internal Server Error");
    } else {
      response.send(results);
    }
  });
});

router.get("/user/get-by-id", (request, response) => {
  const user_id = request.query.user_id;

  db.query(`SELECT * FROM user WHERE user_id = '${user_id}'`, (err, results) => {
    if (err) {
      console.log(err);
      response.status(500).send("Internal Server Error");
    } else {
      response.send(results);
    }
  });
});

router.post("/user/add-new", (request, response) => {
  let user = {
    first_name: request.body.fname,
    last_name: request.body.lname,
    phone: request.body.phone,
    dob: request.body.birthday,
    ic_number: request.body.nric,
  };

  db.query(`INSERT INTO user SET name = '${user.first_name} ${user.last_name}', dob = '${user.dob}', mobile_number = '${user.phone}', ic_number = '${user.ic_number}'`, (err, results) => {
    if (err) {
      console.log(err);
      response.status(500).send("Internal Server Error");
    } else {
      response.send("User added to the DB!");
    }
  });
});

module.exports = { router };