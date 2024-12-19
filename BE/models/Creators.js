const { model, Schema } = require('mongoose');


const CreatorsSchema = new Schema(
    {
        name: { type: String },
        recpies: { type: Array },
        image: { type: String },
        followers: { type: Number }
    }
);


module.exports = model('Creators', CreatorsSchema);