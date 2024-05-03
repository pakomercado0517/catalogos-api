const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require("cors");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(
  cors({
    // origin: '*'
    origin: [
      "https://catalogos-de-sissy.surge.sh",
      "http://localhost:5173",
      "localhost:5173",
      "https://catalogos-de-sissy.vercel.app",
      "https://catalogos-de-sissy-2-0-hnde29zqr-pakomercado0517s-projects.vercel.app/",
    ],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true,
  })
);

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// routes middleware
server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
  next(err);
});

module.exports = server;
