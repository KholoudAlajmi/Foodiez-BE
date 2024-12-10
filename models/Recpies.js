const { model, Schema } = require('mongoose');

const RecipeSchema = new Schema(
    {
        name: { type: String },
        ingredients: { type: Array },
        image: { type: String },
        instructions: { type: String },
        creator: { type: String },
        category: { type: String },
        rate: { type: parseInt(String) }
    }
);


module.exports = model('Recpies', RecipeSchema);