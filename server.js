// server.js
// where your node app starts

// Require third part dependencies
const express = require("express");
// start express app
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");

// Middlewares
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

// Get ip address, preferred language and system information of a device
app.get("dandelion-roar/api/whoami", async (req, res) => {
  const { headers } = req;
  const { ipaddress, language } = req.body;

  res.json({
    ipaddress,
    language,
    software: headers["user-agent"]
  });
  // polka send
  // send(res, 200, {
  //     ipaddress, language,
  //     software: headers["user-agent"]
  // });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
