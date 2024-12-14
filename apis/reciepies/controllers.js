const Ingredients = require("../../models/Ingredients");
const Recipes = require("../../models/Recipes");

//done
exports.getRecipes =  async (req, res, next) => {
  try {
    const recipes = await Recipes.find(req.body, '-createdAt -updatedAt').populate(
      'creatorsId',
      'name'
    );
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

 



 exports.createANewrecipe= async (req,res) => {
  try{
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.creatorId = req.creators.id; 
    const newRecipe = await Recipes.create(req.body);
    await Creators.findByIdAndUpdate(req.creators.id, {
      $push: { reciepes: newRecipe._id }});
    res.json(newRecipe)
  }catch(e){
    console.log(e.message);
  }
}



exports.updatesAnRecipe = async (req, res) => {
  if (req.file) {
    req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
  }
  const { RecipeId } = req.params;
  const foundRecipe = await Recipes.findById(RecipeId); //x is the current record
  if (foundRecipe) {
   await foundRecipe.updateOne(req.body);
    res.status(204).json(); //status is range of number 
  } else {
    res.status(404).json({ message: "Recipe not found" });
  }
}

 
//done
exports.deleteRecipeController = async (req, res) => {
  const { RecipeId } = req.params
  const foundRecipe = await Recipes.findById(RecipeId)
  try{
   await foundRecipe.deleteOne()
       res.status(201).json("Recipe was deleted");
      } catch (e) {
        res.json(e)
        console.log(e.message);
      }
    };





exports.getRecipe = async (req, res) => {
  const name = req.params.name;
  console.log("name", name)
  let result = [];
  try{
    result = await Recipes.find({name: name})
    console.log(result)
    res.json(result)
  }catch (e) {
    console.log(e.message);
  }
 
}



//done

exports.reciepeEnroll = async (req, res, next) => {
  try {
     const { ingredientId } = req.params;
     await Recipes.findByIdAndUpdate(req.reciepe.id, {
     $push: { ingredients: ingredientId },
    });
      await Ingredients.findByIdAndUpdate(ingredientId, {
      $push: { reciepes: req.reciepe.id },
    });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

//done

exports.reciepesGet = async (req, res, next) => {
  try {
    const reciepes = await Recipes.find(req.body, '-createdAt -updatedAt')
      .populate('ingredients', 'name');
    res.json(reciepes);
  } catch (error) {
    next(error);
  }
};

