import AsyncHandler from "express-async-handler";
import User from "../model/userModel.js"


const ajoutUser = AsyncHandler(async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });
    await user.save();
    res.json(user);
  });

const getUsers = AsyncHandler(async (req, res) => {
  const users = await User.find().limit(3);
  res.json(users)
});

const deleteUser=AsyncHandler(async(req,res)=>{
  const query = { _id: (req.params.id) };

  let user=await User.deleteOne (query);
 res.json("success")
});

const modifierUser=AsyncHandler(async(req,res)=>{
  const user= ({
      email:req.body.email,
      password:req.body.password
  })
  await User.findByIdAndUpdate(req.params.id,user);
 res.json(user)
});

const findUserById=AsyncHandler(async(req,res)=>{
    const user=await User.findById(req.params.id);
    res.json(user);
  });
  

const login =AsyncHandler(async(req,res)=>{ 

  const connectedUser = await User.findOne({ email: req.body.email });
  if ((connectedUser != null) && (req.body.password == connectedUser.password) ) {
    return res.json(connectedUser);
  }
  else {
    return res.json({ message: 'error'});
  }
});

export {ajoutUser,getUsers,deleteUser,modifierUser,findUserById,login} 