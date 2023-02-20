const express = require("express");
const data = require("./mock_data");
const app = express();
require("dotenv").config();

const { auth, requiresAuth } = require("express-openid-connect");

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

app.get('/', (request, response) => {
  response.send(request.oidc.isAuthenticated() ? "Logged In" : "Logged Out");
});

app.get('/profile', requiresAuth(), (request, response) => {
  response.send(JSON.stringify(request.oidc.user));
});

app.get('/user/by-uid', requiresAuth(), (request, response) => {
  let user = data.get_user_by_user_id(request.query.user_id);
  response.status(200).send(user);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});