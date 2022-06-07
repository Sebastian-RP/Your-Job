const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { Company, User, conn } = require("./db.js");
const app = express();

//Middlewares

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// // Error catching endware.

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// app.listen(3001, () => {
//   console.log("Server listening on port 3001!");
//   conn.sync({ force: true });
//   Company.belongsToMany(User, { through: "CompanyUser" });
//   User.belongsToMany(Company, { through: "CompanyUser" });
// });

app.use(require("./Routes/index"));

module.exports = app;