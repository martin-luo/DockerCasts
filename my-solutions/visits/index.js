const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

const VISIT_KEY_IN_REDIS = "visits";

client.set(VISIT_KEY_IN_REDIS, 0);

app.get("/", (req, res) => {
  client.get(VISIT_KEY_IN_REDIS, (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set(VISIT_KEY_IN_REDIS, parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
