const mongoose = require('mongoose');

const artSchema = mongoose.Schema({
    name: String,
    items: Array,
    price: String,
    img: String
});

const ArtModel = mongoose.model('artcollection', artSchema);

module.exports = ArtModel;
