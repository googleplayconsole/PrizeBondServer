const mongoose = require("mongoose");

const Rs1500Schema = mongoose.Schema({
      bondNumber: {
        type: String,
        required: [true, "Bond Number Required"],
      },
      link: {
        type: String,
        required: [true, "Link Required"],
      }  
});

module.exports = mongoose.model("rs1500datas", Rs1500Schema);
