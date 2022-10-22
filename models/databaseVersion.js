const mongoose = require("mongoose");

const DatabaseVersion = mongoose.Schema({
  rs100: {
    type: Number,
    required: [true],
  },
  rs200: {
    type: Number,
    required: [true],
  },
  rs750: {
    type: Number,
    required: [true],
  },
  rs1500: {
    type: Number,
    required: [true],
  },
  rs7500: {
    type: Number,
    required: [true],
  },
  rs25000: {
    type: Number,
    required: [true],
  },
  rs25000p: {
    type: Number,
    required: [true],
  },
  rs40000: {
    type: Number,
    required: [true],
  },
  rs40000p: {
    type: Number,
    required: [true],
  }});

module.exports = mongoose.model("Version", DatabaseVersion);
