var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name : String,
    description : String,
    img : {
        data : Buffer,
        contentType : String
    }
});

var imageModel = new mongoose.model('Image', imageSchema);

module.exports = imageModel;