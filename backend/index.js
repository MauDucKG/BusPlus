require("dotenv").config();
const app = require("express")();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./user/user.router");
const taskRouter = require("./task/task.router");
const orderRouter = require("./order/order.router");
const http = require("http").createServer(app);
const cors = require("cors");
const passport = require("passport");
require("./strategies/JwtStrategy");
require("./strategies/LocalStrategy");
require("./utils/authenticate");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const mongoDB_url =
  "mongodb+srv://mauduckg:mauduckg@cluster0.liowy3n.mongodb.net/test";
mongoose
  .connect(mongoDB_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.use(passport.initialize());

//Add the client URL to the CORS policy
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/orders", orderRouter);

http.listen(4000, function () {
  console.log("listening on port 4000");
});