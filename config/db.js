
const colors = require('colors');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://saurabh:6789@atlascluster.rdetx06.mongodb.net/ecommerce',{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log(
      `Connected To MongoDB Database`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
