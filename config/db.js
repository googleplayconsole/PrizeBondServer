const mongoos = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoos.connect(process.env.MONGO_URL);
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
};

module.exports = connectDB;
