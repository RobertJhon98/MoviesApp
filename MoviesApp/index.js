const confrc = require("rc")("info", {});
const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');
const { authenticateUser } = require("./Auth/authUser");

mongoose.connect(confrc.mongoUrl, { useNewUrlParser: true }, function (err) {
    if (err) {
      console.error(confrc.mongoUrl);
      console.error("Not connected to the database: " + err);
    } else {
      console.info("Successfully connected to remote MongoDB");
    }
  });

  const port = confrc.port || 3000
  const app = express();
  app.use(bodyParser.json());
  app.use('/',authenticateUser)
  require("./Routes/routes.js")(app);

  app.listen(port, () => console.log(`listening on port ${port}`))