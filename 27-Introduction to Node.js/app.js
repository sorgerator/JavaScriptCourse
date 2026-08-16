const express = require("express");
const bodyParser = require("body-parser");
const locationRoutes = require("./routes/location");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Methods", "Content-Type");
  next();
});

app.use(locationRoutes);

/* app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
}); */

app.use((req, res, next) => {
  const userName = req.body.username || "Unknown User";
  res.render("index", {
    user: userName,
  });

  /* res.send(
    `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`,
  ); */
});

app.listen(3000);
