const { model, Schema } = require('mongoose');
const mongooseSlugPlugin = require('mongoose-slug-plugin');
const ReciepeSchema = new Schema({
  slug: String,
  name: String,
  image: String,
   ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient',
    },
  ],
  creatorId:
    {
      type: Schema.Types.ObjectId,
      ref: 'Creator',
    },

  categoryId:
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
});

ReciepeSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=recipes%>' });

module.exports = model('Reciepe', ReciepeSchema);
