const express = require("express");

router = express.Router();

router.get("/", (request,response) => {
  response.send("Hello, World!");
});

router.get("/math", (request, response) => {
  const type = request.query.type;
  const n1 = Number(request.query.first);
  const n2 = Number(request.query.second);
  let result = 0;

  if (type === "add") {
    result = n1 + n2;;
  } else if (type === "subtract") {
    result = n1 - n2;
  } else if (type === "multiply") {
    result = n1 * n2;
  } else if (type === "divide") {
    result = n1 / n2;
  } else {
    result = "invalid operation";
  }

  response.send(
    {result: result}
  );
});

router.post("/add-new-user", (request, response) => {
  let firstName = request.body.fname;
  let lastName = request.body.lname;
  let age = request.body.age;
  let phone = request.body.phone;

  response.send(`Hello, ${firstName} ${lastName}`);
});

module.exports = { router };