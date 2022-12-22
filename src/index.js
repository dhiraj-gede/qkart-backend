const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

mongoose.connect(config.mongoose.url, config.mongoose.options, (error) => {
    if (error)
      console.error.bind(console, 'MongoDB Connecion Error')
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
});
