require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.use(cors());

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

Routes;
const userRoute = require("./routes/User");
const billsRoute = require("./routes/Bills");

app.use("/user", userRoute);
app.use("/bills", billsRoute);

//Server
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
