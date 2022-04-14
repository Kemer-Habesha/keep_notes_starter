/**
 * - This file is used to ignite the server and connect to DB.
 */

// Http
const http = require("http");

// Express
const express = require("express");

// App
const app = express();

// Configs
const configs = require("./configs");

// Mongoose
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect(configs.db.remote)
  .then((conn) => {
    console.log(`Successfully connected`);
  })
  .catch((err) => {
    console.log(`------ ERROR ------`);
    console.log(err);
  });

// db connection
const db_conn = mongoose.connection;

// Handler DB error
// Disconnect
db_conn.on("disconnected", () => {
  console.log("DB Disconnected");
});

// Error
db_conn.on("error", (err) => {
  console.log("------ ERROR - Second ------");
  console.log(err);
});

// PORT
const port = process.env.PORT || 3000;

// Create server
const server = http.createServer(app);

// Listen on the server
server.listen(port, () => {
  console.log(`Listening on ${port}...`);
});

// Majestic close
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server is closing");
    db_conn.close(() => {
      console.log("DB is closing");
    });
  });
});
