const { model, Schema } = require('mongoose');

const IngrediantsSchema = new Schema(
    {
        name: { type: String },
        recpies: [{ type: Schema.Types.ObjectId, ref: "Recpies" }],

    }
);


module.exports = model('Ingredient', IngrediantsSchema);