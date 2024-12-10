const { model, Schema } = require('mongoose');
const Categories = require('../Categories');

const CreatorsSchema = new Schema(
    {
        name: { type: String },
        recpies: { type: Array },
        image: { type: String },
        followers: { type: String }
    }
);


module.exports = model('Creators', CreatorsSchema);