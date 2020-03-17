const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/product",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("established a connection with the database"))
    .catch(err => console.log("something went wrong when connecting to the database", err));