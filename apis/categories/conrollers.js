const categories = require("../../categories");

exports.categoriesList = (req, res) => {
  res.json(categories);
};



function fetchesAllCategories(){
  return categories;
}


exports.getCategories =  (req, res) => {
  console.log(req.id)
    const categories = fetchesAllCategories(); 
    res.json(categories);
  }


  
function createsANewCatogries (newCatogriesData) {
    console.log("Creating new catogries", newCatogriesData)
    // const newId = categories.length + 1
    const newCatogries = Object.assign({ id: newId }, newCatogriesData)
    console.log("My new account is: ", newCatogries)
    return newCatogries
}
 exports.createANewCatogry= (req, res) => {
    const newCatogries = createsANewCatogries(req.body);
    res.status(201).json(newCatogries);
  }
  




