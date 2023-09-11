const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../../model/user');

const config = require('config');

router.post('/signup', async (req,res)=>{
    // res.send("This is signUp page");

    console.log(req.body);
    const {name,email,password,role} = req.body;

    if( !name || !email || !password || !role){
        return res.status(422).send({error : "Please fill all the field"});
    }

    let useralready = await User.findOne({ email : req.body.email });
    if(useralready) return res.status(400).send("User with this email Already Exist");

    let user = new User();
    user.name = req.body.name;       // ?? try name1;
    user.email = req.body.email;   // ?? problem with spelling
    // user.role = req.body.role.default;   // ?? problem with spelling
    user.password = req.body.password;   // ?? problem with spelling

    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.role = req.body.role;   // ?? problem with spelling

    await user.save();

    let token = jwt.sign(
        { name :user.name,role:user.role},   // what you want to public
        config.get("jwtPrivateKey")             // privateKey
    );

    return res.send({token});
    


    // res.send("Logged in Successfully");



})



module.exports = router;