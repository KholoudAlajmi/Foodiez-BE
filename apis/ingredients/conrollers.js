const ingredient = require(".././ingredient");



function fetchesAllIngredients() {
  return ingredient;
}


exports.getIngredients = (req, res) => {
  console.log(req.id)
  const ingredients = fetchesAllIngredients();
  res.json(ingredients);
}



function createsANewIngredients(newIngredientData) {
  console.log("Creating new ingredient", newIngredientData)
  // const newId = categories.length + 1
  const newIngredients = Object.assign({ id: newId }, newCatogriesData)
  console.log("My new account is: ", newIngredients)
  return newIngredients
}
exports.createANewIngredient = (req, res) => {
  const newIngredients = createsANewIngredients(req.body);
  res.status(201).json(newIngredients);
}



const deleteIngredient1 = (ingredientIdToBeDeleted) => {
  const newIngredient = ingredient.filter((ingrediens) => ingrediens.id != ingredientIdToBeDeleted)
  console.log("My new Reciepiess are: ", newIngredient)
}


exports.deleteReciepies = (req, res) => {
  const { ingrediensId } = req.params;
  const foundIngredient = ingredient.find((x) => x.id == ingrediensId);
  if (foundIngredient) {
    deleteIngredient1(ingrediensId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Reciepies not found" });
  }
}





