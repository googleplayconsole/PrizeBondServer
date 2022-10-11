const mongoose = require("mongoose");

const DatabaseVersion = mongoose.Schema({
      versionNumber: {
        type: String,
        required: [true, "Version Number Required"],
      }  
});

module.exports = mongoose.model("Version", DatabaseVersion);
