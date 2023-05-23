const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const Session = new Schema({
  refreshToken: {
    type: String,
    default: "",
  },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    authStrategy: {
      type: String,
      default: "local",
    },
    refreshToken: {
      type: [Session],
    },
  },
  {
    collection: "users",
  }
);

//Remove refreshToken from the response
userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken;
    return ret;
  },
});

userSchema.plugin(passportLocalMongoose);

const user = mongoose.model("users", userSchema);

module.exports = user;
