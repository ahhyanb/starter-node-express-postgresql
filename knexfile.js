const path = require("path");
require("dotenv").config();

console.log("DEVELOPMENT_DATABASE_URL:", process.env.DEVELOPMENT_DATABASE_URL);

module.exports = {
  development: {
    client: 'pg', 
    connection: process.env.DEVELOPMENT_DATABASE_URL,
    ssl: { rejectUnauthorized: false }, 
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
