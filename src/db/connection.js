const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[env];
console.log("Loaded Knex Config:", config); // Confirm config loading

const knex = require('knex')(config);

module.exports = knex;