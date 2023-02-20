const express = require('express');
const example = require ("./apis/example");
const user = require("./apis/user");

let server = express();

server.use(express.json());
server.use(example.router);
server.use(user.router);

server.listen(3000, (errors) => {
  if (errors) {
    console.log("Could not start the server. Error: " + errors);
  } else {
    console.log("Server started on port 3000...");
  }
});