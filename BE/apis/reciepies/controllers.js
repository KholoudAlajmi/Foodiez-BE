const RecpiesModel = require("../../models/Recpies");
const CategoriesModel = require("../../models/Categories")
const IngrediantsModel = require('../../models/Ingredient');

exports.getAllRecpies = async (req, res) => {
  const allRecpies = await RecpiesModel.find().populate('category').populate('ingredients');

  res.status(200).json(allRecpies);
}

exports.createRecpie = async (req, res) => {
  const recpie  = new RecpiesModel(req.body) ;
  const newRecpie = await recpie.save();

  const category = await CategoriesModel.findById(category);
  category.recpies.push(newRecpie._id);
  await category.save();

  res.status(201).json(newRecpie);
}

exports.updateRecpie = async (req, res) => {
  const {Id} = req.params;
  const recipe = await RecpiesModel.findById(Id);
  const updatedReciepie = await recipe.updateOne(req.body)
  res.status(200).json(updatedReciepie);
}

exports.deleteRecpie = async (req, res) => {

  const { Id } = req.params;
  await RecpiesModel.findByIdAndDelete(Id);

  const category = await CategoriesModel.findById(category);
  category.recpies.pull(Id);
  await category.save();

  res.json(this.deleteRecpie);
}


exports.addIngrediantToRecipe = async (req, res) => {
  const { recId , ingId} = req.params;
  const recipe = await RecpiesModel.findById(recId);
  const updatedReciepie = await recipe.updateOne({$push: {ingredients: ingId}});

  res.status(200).json(updatedReciepie);
}




















// function fetchesAllReciepies(){
//   return reciepies;
// }


// exports.getReciepies =  (req, res) => {
//   console.log(req.id)
//     const reciepies = fetchesAllReciepies(); 
//     res.json(reciepies);
//   }


  
// function createsANewReciepies (newReciepiesData) {
//     console.log("Creating new Reciepies", newReciepiesData)
//     // const newId = Reciepiess.length + 1
//     const newReciepies = Object.assign({ id: newId }, newReciepiesData)
//     console.log("My new Reciepies is: ", newReciepies)
//     return newReciepies
// }
//  exports.createANewReciepies= (req, res) => {
//     const newReciepies = createsANewReciepies(req.body);
//     res.status(201).json(newReciepies);
//   }
  




//   const deleteReciepies1 = (ReciepiesIdToBeDeleted) => {
//     const newReciepiess = Reciepiess.filter((Reciepies) => Reciepies.id != ReciepiesIdToBeDeleted)
//     console.log("My new Reciepiess are: ", newReciepiess)
// }


// exports.deleteReciepies=(req, res) => {
//   const { ReciepiesId } = req.params;
//   const foundReciepies = Reciepiess.find((x) => x.id == ReciepiesId);
//   if (foundReciepies) {
//     deleteReciepies1(ReciepiesId);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Reciepies not found" });
//   }
// }




   

//   const updatesAnExistingReciepies = (currentReciepies, newData) => {
//     const myUpdatedReciepies = Object.assign(currentReciepies, newData)
//     return myUpdatedReciepies
// }

// exports.updatesAnReciepies =(req, res) => {
//   const { ReciepiesId } = req.params;
//   const foundReciepies = Reciepiess.find((x) => x.id == ReciepiesId); //x is the current record
//   if (foundReciepies) {
//     const updatedReciepies = updatesAnExistingReciepies(foundReciepies,req.body);
//     res.status(200).json(updatedReciepies); //status is range of number 
//   } else {
//     res.status(404).json({ message: "Reciepies not found" });
//   }
// }

 


// exports.getReciepies =(req, res) => {
//   const username = req.params.username;
//   const funds = req.query.currency;
//   console.log("username", username)
//   console.log("currency", funds)
//   let result = Reciepiess
//   if (username) {
//       result = Reciepiess.find((Reciepies) => Reciepies.username==username)
//   }
//   if(funds) {
//     result = Reciepiess.find((Reciepies) => Reciepies.funds==funds)
//   }
//   console.log(result)
//   res.json(result)
// }




