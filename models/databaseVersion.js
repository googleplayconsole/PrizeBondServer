const mongoose = require("mongoose");

const DatabaseVersion = mongoose.Schema({
      versionNumber: {
        type: Number,
        required: [true, "Version Number Required"],
      }  
});

module.exports = mongoose.model("Version", DatabaseVersion);
