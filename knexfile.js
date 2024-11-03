const path = require("path");
require("dotenv").config();
const { DEVELOPMENT_DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      connectionString: DEVELOPMENT_DATABASE_URL,
      ssl: { rejectUnauthorized: false } // required for Render
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
