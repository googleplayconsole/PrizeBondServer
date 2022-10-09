const mongoose = require("mongoose");

const LinkTypeScema = mongoose.Schema({
  bondType: {
    type: String,
    required: [true, "Bond Type Required"],
  },
  LinkList: [{
    bondNumber: {
      type: String,
      required: [true, "Bond Number Required"],
    },
    Link: {
      type: String,
      required: [true, "Link Required"],
    }
  }]
});

module.exports = mongoose.model("Link", LinkTypeScema);
