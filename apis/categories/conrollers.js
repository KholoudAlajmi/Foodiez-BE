const CategoriesModel = require("../../models/Categories");


exports.getAllCategories = async (req, res) => {
  const allCategories = await CategoriesModel.find().populate('recpies');

  res.status(200).json(allCategories);
}

exports.createCategory = async (req, res) => {
  const category = new CategoriesModel(req.body);
  const savedCategory = category.save();

  res.status(201).json(savedCategory);
}

exports.deleteCategory = async (req, res) => {

  const { Id } = req.params;
  await CategoriesModel.findByIdAndDelete(Id);
  res.json(this.deleteCategory);
}


exports.addRecipeToCategory = async (req, res) => {
  const { categoryId, recId } = req.params;
  const category = await CategoriesModel.findById(categoryId).populate('recpies');
  const updatedCategory = await category.updateOne({ $push: { recpies: recId } })
}











// function fetchesAllCategories() {
//   return categories;
// }


// exports.getCategories = async (req, res) => {
//   const { name, recpies, image, creator, num } = req.body
//   const categories = await fetchesAllCategories();
//   res.json(categories);
// }



// function createsANewCatogries(newCatogriesData) {
//   console.log("Creating new catogries", newCatogriesData)
//   // const newId = categories.length + 1
//   const newCatogries = Object.assign({ id: newId }, newCatogriesData)
//   console.log("My new account is: ", newCatogries)
//   return newCatogries
// }
// exports.createANewCatogry = (req, res) => {
//   const newCatogries = createsANewCatogries(req.body);
//   res.status(201).json(newCatogries);
// }





