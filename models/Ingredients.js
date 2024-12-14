
const { model, Schema } = require('mongoose');
const mongooseSlugPlugin = require('mongoose-slug-plugin');
const IngredientSchema = new Schema({
  slug: String,
  name: String,
  image: String,
  reciepes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reciepe',
    },],
    creatorId:
      {
        type: Schema.Types.ObjectId,
        ref: 'Creator',
      },

});
IngredientSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=ingredient%>' });
module.exports = model('Ingredient', IngredientSchema);