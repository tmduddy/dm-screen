const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models")
const indexRouter = require('./routes/index');

const app = express();
const port = 3000

var corsOptions = {
    origin: "http://localhost:3001"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

// suggested that the following may be needed in dev? unclear why, keeping to research
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(port, ()=>{console.log(`app listening on port ${port}`)});