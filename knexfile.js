const path = require("path");
require("dotenv").config();  // Ensure environment variables are loaded

console.log("DEVELOPMENT_DATABASE_URL:", process.env.DEVELOPMENT_DATABASE_URL); // Debugging line to confirm URL

module.exports = {
  development: {
    client: 'pg',  // PostgreSQL uses 'pg' as the client name
    connection: process.env.DEVELOPMENT_DATABASE_URL,  // Directly pass the URL
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
