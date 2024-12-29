const { model, Schema } = require('mongoose');

const CategorySchema = new Schema(
    {
        name: { type: String },
        recpies: [{ type: Schema.Types.ObjectId, ref: "Recpies" }],
        image: { type: String },
    }
);


module.exports = model('Categories', CategorySchema);