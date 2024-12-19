const { model, Schema } = require('mongoose');

const RecipeSchema = new Schema(
    {
        name: { type: String },
        ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
        image: { type: String },
        instructions: [{}],
        creator: { type: String },
        category: { type: Schema.Types.ObjectId, ref: "Categories" },
        rate: { type: Number }
    }
);


module.exports = model('Recpies', RecipeSchema);