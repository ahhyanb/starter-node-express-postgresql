const path = require("path");
require("dotenv").config();
const { DEVELOPMENT_DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: 'pg',  // Use 'pg' as shorthand for PostgreSQL
    connection: {
      connectionString: DEVELOPMENT_DATABASE_URL,
      ssl: { rejectUnauthorized: false }  // For Render's SSL requirement
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
