const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  email: { type: String, default: "" },
  message: { type: String, required: true },
  when: { type: Date },     // schedule time
  delivered: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", MessageSchema);
