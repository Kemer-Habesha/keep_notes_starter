/**
 * - This file is used to export Environmental variables,
 */

// Dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

// Export the environmental variables
module.exports = {
  env: process.env.NODE_ENV,
  db: {
    remote: process.env.DB_REMOTE,
    local: "",
  },
};
