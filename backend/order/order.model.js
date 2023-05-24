//////=========================================================================
// LOAD MONGOOSE
const mongoose = require("mongoose");

//////=========================================================================
// DEFINE MODEL/SCHEMA
const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Need be paid", "Paid successfully"],
  },
  rate: {
    type: Number,
    min: 1,
    max: 5,
    default: 0
  },
  price: {
    type: Number,
  }
});

//////=========================================================================
// EXPORT MODULE
module.exports = mongoose.model("orders", orderSchema);
