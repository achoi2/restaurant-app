const dotenv = require('dotenv');
dotenv.config();
const pg = require("pg-promise")();
const DBConfig = `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@burgerx.fun:5432/restaurant`;
const DB = pg(DBConfig);
const JwtPassword = "password";

module.exports =  {DB ,JwtPassword};
