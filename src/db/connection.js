const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[env];

console.log("Loaded Knex Config on Render:", config); // Debug log for Render

const knex = require('knex')(config);
module.exports = knex;
