const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  tail: { type: Boolean, required: true },
  speed: { type: Number, required: true },
});

module.exports = mongoose.model("Dog", schema);