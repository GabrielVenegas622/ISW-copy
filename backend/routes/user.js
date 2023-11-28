const router = require("express").Router();
const { restart } = require("nodemon");
const{User, validate} = require("../models/user"); 
const bcrypt = require("bcrypt");

router.post("/", async (req,res) =>{
    try {
        const {err} = validate(req.body);
        if(err)
            return res.status(400).send({message: err.details[0].message});
        const user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(409).send({message: "User with given email already exist"});
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password:hashPassword}).save();
        res.status(200).send({message: "User created succesfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Internal server error"});
    }
})

module.exports = router;