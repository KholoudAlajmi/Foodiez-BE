const Reciepiess = require("../../Reciepiess");



function fetchesAllReciepies(){
  return reciepies;
}


exports.getReciepies =  (req, res) => {
  console.log(req.id)
    const reciepies = fetchesAllReciepies(); 
    res.json(reciepies);
  }


  
function createsANewReciepies (newReciepiesData) {
    console.log("Creating new Reciepies", newReciepiesData)
    // const newId = Reciepiess.length + 1
    const newReciepies = Object.assign({ id: newId }, newReciepiesData)
    console.log("My new Reciepies is: ", newReciepies)
    return newReciepies
}
 exports.createANewReciepies= (req, res) => {
    const newReciepies = createsANewReciepies(req.body);
    res.status(201).json(newReciepies);
  }
  




  const deleteReciepies1 = (ReciepiesIdToBeDeleted) => {
    const newReciepiess = Reciepiess.filter((Reciepies) => Reciepies.id != ReciepiesIdToBeDeleted)
    console.log("My new Reciepiess are: ", newReciepiess)
}


exports.deleteReciepies=(req, res) => {
  const { ReciepiesId } = req.params;
  const foundReciepies = Reciepiess.find((x) => x.id == ReciepiesId);
  if (foundReciepies) {
    deleteReciepies1(ReciepiesId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Reciepies not found" });
  }
}




   

  const updatesAnExistingReciepies = (currentReciepies, newData) => {
    const myUpdatedReciepies = Object.assign(currentReciepies, newData)
    return myUpdatedReciepies
}

exports.updatesAnReciepies =(req, res) => {
  const { ReciepiesId } = req.params;
  const foundReciepies = Reciepiess.find((x) => x.id == ReciepiesId); //x is the current record
  if (foundReciepies) {
    const updatedReciepies = updatesAnExistingReciepies(foundReciepies,req.body);
    res.status(200).json(updatedReciepies); //status is range of number 
  } else {
    res.status(404).json({ message: "Reciepies not found" });
  }
}

 


exports.getReciepies =(req, res) => {
  const username = req.params.username;
  const funds = req.query.currency;
  console.log("username", username)
  console.log("currency", funds)
  let result = Reciepiess
  if (username) {
      result = Reciepiess.find((Reciepies) => Reciepies.username==username)
  }
  if(funds) {
    result = Reciepiess.find((Reciepies) => Reciepies.funds==funds)
  }
  console.log(result)
  res.json(result)
}




