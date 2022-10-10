const mongoose = require("mongoose");

const Rs40000Schema = mongoose.Schema({
      bondNumber: {
        type: String,
        required: [true, "Bond Number Required"],
      },
      link: {
        type: String,
        required: [true, "Link Required"],
      }  
});

module.exports = mongoose.model("rs40000datas", Rs40000Schema);
