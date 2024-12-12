const CreatorsModel = require("../../models/Creators");

exports.getAllCreators = async (req, res) => {
  const allCreators = await CreatorsModel.find();

  res.json(allCreators);
}


exports.createCreator = async (req, res) => {
  const { name, recpies, image, followers } = req.body;

  const newCreator = await CreatorsModel.create({ name, recpies, image, followers });

  res.json(newCreator);
}




























// function fetchesAllAccounts(){
//   return accounts;
// }


// exports.getAccounts =  (req, res) => {
//   console.log(req.id)
//     const accounts = fetchesAllAccounts(); 
//     res.json(accounts);
//   }


  
// function createsANewaccount (newAccountData) {
//     console.log("Creating new account", newAccountData)
//     const newId = accounts.length + 1
//     const newAccount = Object.assign({ id: newId }, newAccountData)
//     console.log("My new account is: ", newAccount)
//     return newAccount
// }
//  exports.createANewaccount= (req, res) => {
//     const newaccount = createsANewaccount(req.body);
//     res.status(201).json(newaccount);
//   }
  


   

//   const updatesAnExistingAccount = (currentAccount, newData) => {
//     const myUpdatedAccount = Object.assign(currentAccount, newData)
//     return myUpdatedAccount
// }

// exports.updatesAnAccount =(req, res) => {
//   const { accountId } = req.params;
//   const foundAccount = accounts.find((x) => x.id == accountId); //x is the current record
//   if (foundAccount) {
//     const updatedAccount = updatesAnExistingAccount(foundAccount,req.body);
//     res.status(200).json(updatedAccount); //status is range of number 
//   } else {
//     res.status(404).json({ message: "Account not found" });
//   }
// }



// exports.getAccount =(req, res) => {
//   const username = req.params.username;
//   const img = req.query.img;
//   let result = accounts
//   if (username) {
//       result = accounts.find((account) => account.username==username)
//   }
//   if(img) {
//     result = accounts.find((account) => account.img==img)
//   }
//   console.log(result)
//   res.json(result)
// }




