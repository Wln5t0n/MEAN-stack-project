const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");
const lectures = require("./routes/api/Lectures");
const query = require("./routes/api/query");
const cors = require("cors");
mongoose.Promise = global.Promise;
//passport config
require("./config/passport")(passport);
const app = express();

//bodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Passport middleware
app.use(passport.initialize());
app.use(cors());
//Routes
app.use("/api/users", users);
app.use("/api/lectures", lectures);
app.use("/api/query", query);

app.get("/api/lectures/lectures", (req, res) => {
  res.sendFile(__dirname + "/admin.html");
});
app.get("/api/query/query", (req, res) => {
  res.sendFile(__dirname + "/classroom.html");
});
//DB Config
const db = require("./config/keys").mongoLocal;
//Connect to database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(err => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is up & running on port ${PORT}`);
});
