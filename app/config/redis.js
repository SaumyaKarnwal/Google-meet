// using redis for real time data storage in form of key value pair

let redis = require("redis");
var options = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  auth_pass: process.env.REDIS_PASSWORD,
};

// create client
let client = redis.createClient(options);

// if error occurs
client.on("error", (error) => {
  console.log(error);
});

module.exports = client;
