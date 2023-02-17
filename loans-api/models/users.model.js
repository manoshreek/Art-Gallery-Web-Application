var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    userName : String,
    emailID : String,
    password : String
});

var usersModel = mongoose.model("Users", usersSchema);

module.exports = usersModel;