const User = require('./../models/user')

async function handleGetAllUsers(req,res){
    const alldbusers = await User.find({});
    return res.json(alldbusers)
}

async function handlegetUserById(req,res){
    const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({msg: 'User Not Found'})
        return res.json(user);
}

async function handleupdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{last_name:"Changed"});
    return res.json({ status: "Success"});
}

async function handledeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success", msg : 'Deleted'});
}

async function handlecreatenewUser(req,res){
    const body = req.body;
   if(!body || ! body.first_name || ! body.email){
        return res.status(400).json({message : 'Missing fields'})
   }     
  const result = await User.create({
    first_name : body.first_name,
    last_name : body.last_name,
    email : body.email,
    gender : body.gender,
    jobTitle : body.job_title,
   });
   return res.status(201).json({msg : 'success', id: result._id})
}

module.exports ={
    handleGetAllUsers,
    handlegetUserById,
    handleupdateUserById,
    handledeleteUserById,
    handlecreatenewUser
}