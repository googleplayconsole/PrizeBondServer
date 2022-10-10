const mongoose = require("mongoose");

const Rs200Schema = mongoose.Schema({
      bondNumber: {
        type: String,
        required: [true, "Bond Number Required"],
      },
      link: {
        type: String,
        required: [true, "Link Required"],
      }  
});

module.exports = mongoose.model("rs200datas", Rs200Schema);
