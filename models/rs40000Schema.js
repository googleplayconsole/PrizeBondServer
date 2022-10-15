const mongoose = require("mongoose");

const Rs40000Schema = mongoose.Schema({
  drawerNo: {
    type: String,
    required: [true, "drawerNo Required"],
  },
  date: {
    type: String,
    required: [true, "date Required"],
  },
  heldAt: {
    type: String,
    required: [true, "heldAt Required"],
  },
  drawerOf: {
    type: String,
    required: [true, "drawerOf Required"],
  },
  drawerNo1: {
    type: String,
    required: [true, "drawerNo1 Required"],
  },
  drawerNo2: {
    type: String,
    required: [true, "drawerNo2 Required"],
  },
  drawerNo3: {
    type: String,
    required: [true, "drawerNo3 Required"],
  },
  drawerList1: [{
    type: String,
    required: [true, "drawerList1 Required"],
  }],
  drawerList2: [{
    type: String,
    required: [true, "drawerList2 Required"],
  }],
  drawerList3: [{
    type: String,
    required: [true, "drawerList3 Required"],
  }],});

module.exports = mongoose.model("rs40000s", Rs40000Schema);
