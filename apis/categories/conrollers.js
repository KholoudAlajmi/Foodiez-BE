const Categories = require("../../models/Categories");


//done
exports.getCategoriess =  async (req, res, next) => {
  try {
    const categoriess = await Categories.find(req.body, '-createdAt -updatedAt').populate(
      'creatorsId',
      'name'
    );
    res.json(categoriess);
  } catch (error) {
    next(error);
  }
};



 exports.createANewcategories= async (req,res) => {
  try{
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    } 
    req.body.creatorId = req.creators.id;   
    const newCategories = await Categories.create(req.body);
    await Creators.findByIdAndUpdate(req.creators.id, {
      $push: { categoriess: newCategories._id }});
    res.json(newCategories)
  }catch(e){
    console.log(e.message);
  }
}


   


exports.updatesAnCategories = async (req, res) => {
  const { categoriesId } = req.params;
  const foundCategories = await Categories.findById(categoriesId); //x is the current record
  if (foundCategories) {
   await foundCategories.updateOne(req.body);
    res.status(204).json(); //status is range of number 
  } else {
    res.status(404).json({ message: "Categories not found" });
  }
}

 





// exports.updateCategoriesController = async (req, res) => {
//   const { categoriesId } = req.params
//   const foundCategories = await Categories.findById(categoriesId)
//  try{ 
//       foundCategories = await foundCategories.updateOne(req.body)
//       res.json(foundCategories);
//   } catch (e) {
//     console.log(e.message);
//   }
// };




exports.getCategories = async (req, res) => {
  const name = req.params.name;
  let result = [];
  try{
    result = await Categories.find({name: name})
    res.json(result)
  }catch (e) {
    console.log(e.message);
  }
 
}
