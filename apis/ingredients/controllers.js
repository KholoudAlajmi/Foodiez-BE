const Ingredients = require("../../models/Ingredients");


// exports.getIngredients =  async (req, res, next) => {
//   try {
//     const ingredients = await Ingredients.find(req.body, '-createdAt -updatedAt').populate(
//       'creatorsId',
//       'name'
//     );
//     res.json(ingredients);
//   } catch (error) {
//     next(error);
//   }
// };

 

 exports.createANewIngredient= async (req,res) => {
  try{
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.creatorId = req.creators.id; 
    const newIngredient = await Ingredients.create(req.body);
    await Creators.findByIdAndUpdate(req.creators.id, {
      $push: { ingredients: newIngredient._id }});
    res.json(newIngredient)
  }catch(e){
    console.log(e.message);
  }
}



exports.getIngredient = async (req, res) => {
  const name = req.params.name;
  console.log("username", username)
  let result = [];
  try{
    result = await Ingredients.find({name: name})
    console.log(result)
    res.json(result)
  }catch (e) {
    console.log(e.message);
  }
 
}



//done

exports.ingredientsGet = async (req, res, next) => {
    try {
      const ingredients = await Ingredients.find(req.body, '-createdAt -updatedAt').populate(
        'reciepes',
        'name'
      );
      res.json(ingredients);
    } catch (error) {
      next(error);
    }
  };

