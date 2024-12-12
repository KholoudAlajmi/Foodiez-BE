const CategoriesModel = require("../../models/Categories");


exports.getAllCategories = async (req, res) => {
  const allCategories = await CategoriesModel.find();

  res.json(allCategories);
}

exports.createCategory = async (req, res) => {
  const { name, recpies, image, creator, num } = req.body;
  const newCategory = await CategoriesModel.create({ name, recpies, image, creator, num });

  res.json(newCategory);
}

exports.deleteCategory = async (req, res) => {

  const { Id } = req.params;
  await CategoriesModel.findByIdAndDelete(Id);
  res.json(this.deleteCategory);
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





