const Creators = require("../../models/Creators");


exports.getCreators =  async (req, res, next) => {
  try {
    const creators = await Creators.find(req.body, '-createdAt -updatedAt').populate(
      'reciepes',
      'categories',
      'ingredients'
    );
    res.json(creators);
  } catch (error) {
    next(error);
  }
};



 exports.createANewCreator= async (req,res) => {
  try{
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }    
    const newCreator = await Creators.create(req.body)
    res.json(newCreator)
  }catch(e){
    console.log(e.message);
  }
}





exports.updateCreatorController = async (req, res) => {
  const { creatorId } = req.params
  const foundCreator = await Creators.findById(creatorId)
 try{ 
      foundCreator = await foundCreator.updateOne(req.body)
      res.json(foundCreator);
  } catch (e) {
    console.log(e.message);
  }
};



exports.getCreatorById = async (req, res, next) => {
  try {
    const creator = await Creators.findById(req.params.id).select("-password");
    if (!creator) {
      return res.status(404).json({ message: "creator not found" });
    }
    res.status(200).json(creator);
  } catch (err) {
    next(err);
  }
};