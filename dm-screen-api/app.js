const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models")

const indexRouter = require('./routes/index');
const userRouter = require("./routes/user");

const app = express();

var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// DB config
// the following line will DROP the tables, use with care. remove before prod ready
// db.sequelize.sync({ force: true }).then(() => {console.log("Drop and re-sync db.");}
db.sequelize.sync()
.then(() => {
        console.log("Synced db.");
    })
.catch((err) => {
    onsole.log("Failed to sync db: " + err.message);
});

// routing
app.use('/', indexRouter);
app.use('/api/users', userRouter);

// start server
const port = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`app listening on port ${port}`)});