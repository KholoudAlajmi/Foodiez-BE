const { model, Schema } = require('mongoose');
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const CategorySchema = new Schema({
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
CategorySchema.plugin(mongooseSlugPlugin, { tmpl: '<%=category%>' });
module.exports = model('Categery', CategorySchema);