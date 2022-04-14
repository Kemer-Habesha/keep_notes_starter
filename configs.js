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

// module.exports.env = process.env.NODE_ENV;
// module.exports.db = {
//   remote: process.env.DB_REMOTE,
//   local: "",
// };

// const negasi = {name: "negasi"}
// negasi.age = 26;
// #123HFI

// const newNegasi = {name:"negasi",age:26}
// negasi = newNegasi 
// #12FGYU