const path = require("path");
require("dotenv").config();

console.log("DEVELOPMENT_DATABASE_URL:", process.env.DEVELOPMENT_DATABASE_URL); // Debugging: Confirm URL

module.exports = {
  development: {
    client: 'pg',  // Ensure this is 'pg' for PostgreSQL
    connection: process.env.DEVELOPMENT_DATABASE_URL, // Pass URL directly
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
