const mongoose = require("mongoose");

const Rs7500Schema = mongoose.Schema({
      bondNumber: {
        type: String,
        required: [true, "Bond Number Required"],
      },
      link: {
        type: String,
        required: [true, "Link Required"],
      }  
});

module.exports = mongoose.model("rs7500datas", Rs7500Schema);
