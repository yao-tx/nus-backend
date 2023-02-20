const express = require("express");
const db = require("../mock_data");

let router = express.Router();

router.get("/user/get-all", (request, response) => {
  let users = db.get_all_users();
  response.send(users);
});

router.get("/user/get-by-id", (request, response) => {
  let user = db.get_user_by_user_id(request.query.user_id);
  response.send(user);
});

router.post("/user/add-new", (request, response) => {
  const userCount = db.get_all_users().length;

  let user = {
    first_name: request.body.fname,
    last_name: request.body.lname,
    user_id: userCount + 1,
    email: request.body.email,
    phone: request.body.phone,
    plan_id: request.body.planId,
    signup_date: new Date().toJSON(),
  };

  db.add_user(user);
  response.send("User added to the DB!");
});

module.exports = { router };