const { model, Schema } = require('mongoose');
const mongooseSlugPlugin = require('mongoose-slug-plugin');


const CreatorsSchema = new Schema({
  slug: String,
  name: String,
  image: String,
  reciepes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reciepe', 
    },
  ],
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient', 
      },
    ],
      categories: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Category', 
        },
  ],
});
CreatorsSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=creator%>' });
module.exports = model('Creators', CreatorsSchema);