const mongoose = require("mongoose");

const Rs250000pSchema = mongoose.Schema({
      bondNumber: {
        type: String,
        required: [true, "Bond Number Required"],
      },
      link: {
        type: String,
        required: [true, "Link Required"],
      }  
});

module.exports = mongoose.model("rs250000pdatas", Rs250000pSchema);
