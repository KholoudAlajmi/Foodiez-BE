const { model, Schema } = require('mongoose');

const CategorySchema = new Schema(
    {
        name: { type: String },
        recpies: { type: Array },
        image: { type: String },
        creator: { type: String },
        num: { type: String }
    }
);


module.exports = model('Categories', CategorySchema);