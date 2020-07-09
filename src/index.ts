import { createServer } from "http";
import jsonformat from "json-format";

import { connectDatabase } from "./database";
import { seedDatabase } from "./seed";
import { saveUser, saveBilling } from "./actions";

// JSON formatter
var CONFIG = {
  type: "space",
  size: 2
};

function pretty(x: any) {
  return jsonformat(x, CONFIG);
}

// Prepare the database
const startup = connectDatabase()
  .then(seedDatabase)
  .catch(err => {
    console.log("Start failure!");
    console.log(err);
  });

// Listen for HTTP connections and run tests
createServer(function(req, res) {
  res.setHeader("Content-Type", "text/plain");

  res.write(">> Preparing database...\n");
  startup
    .then(() => {
      res.write(">> Database ready\n\n");
      res.write(`>> Now saving a new user \n`);
      return saveUser();
    })
    .then(user => {
      res.write(` > User result: \n\n${pretty(user)}\n\n`);
      res.write('>> save billing for user"\n');
      return saveBilling(user);
    })
    .then(billing => {
      res.write(` > Billing result: \n\n${pretty(billing)}\n\n`);
      res.end();
    })
    .catch(error => {
      res.write(` > Encountered error!\n\n${pretty(error)}\n\n`);
      res.end();
    });
}).listen(8080);
