var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

let listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// response with real IP address
app.enable("trust proxy");

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.get("Accept-Language"),
    software: req.get("User-Agent"),
  });
});
