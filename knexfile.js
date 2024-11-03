const path = require("path");
require("dotenv").config();

console.log("DEVELOPMENT_DATABASE_URL:", process.env.DEVELOPMENT_DATABASE_URL); // Debugging: check if URL is loaded

module.exports = {
  development: {
    client: 'pg',  // Use 'pg' for PostgreSQL
    connection: process.env.DEVELOPMENT_DATABASE_URL + "?ssl=true", // Add ssl parameter directly to the URL
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
