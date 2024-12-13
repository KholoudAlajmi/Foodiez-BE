const { model, Schema } = require('mongoose');

const RecipeSchema = new Schema(
    {
        name: { type: String },
        recpies: [{ type: Schema.Types.ObjectId, ref: "Recpies" }],

    }
);


module.exports = model('Recpies', RecipeSchema);