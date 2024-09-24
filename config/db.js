const mongoose = require("mongoose");
const config = require("./config");

let newConfig = config;

console.log("newConfig: ", newConfig);

if (newConfig) {
  mongoose.connect(newConfig, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });
}

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = newConfig;
