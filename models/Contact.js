const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  type: {
    type: String,
    default: "personal",
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
