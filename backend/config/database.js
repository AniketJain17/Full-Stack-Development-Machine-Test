const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDatabase = () => {
  mongoose.connect(process.env.DATABASE_URL).then((data) => {
    console.log(`Database server connected at port: ${data.connection.port}`);
    console.log(`Database server connected at host: ${data.connection.host}`);
  });
};

module.exports = connectDatabase;
