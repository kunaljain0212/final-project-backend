const { Client } = require("pg");

console.log(process.env.SECRET_KEY);
const client = new Client(
  `postgres://dhzgceue:5qJmBEnJB5sqzBgcWXACm2sA5__cBbU8@john.db.elephantsql.com:5432/dhzgceue`
);

module.exports = client;
