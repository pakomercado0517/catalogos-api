const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require("cors");

require("./db.js");

const server = express();

server.name = "API";
server.set("trust proxy", 1);

const REQUEST_BODY_LIMIT = process.env.REQUEST_BODY_LIMIT || "1mb";

server.use(bodyParser.urlencoded({ extended: true, limit: REQUEST_BODY_LIMIT }));
server.use(bodyParser.json({ limit: REQUEST_BODY_LIMIT }));
server.use(cookieParser());

const isProduction = process.env.NODE_ENV === "production";
server.use(
  morgan(isProduction ? ":method :url :status :response-time ms" : "dev")
);
server.use(
  cors({
    // origin: '*'
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://catalogos-de-sissy.vercel.app",
      "catalogos-de-sissy.vercel.app",
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

//?Este comentario es para probar el deploy

module.exports = server;
