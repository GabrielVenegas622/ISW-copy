const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type:String, required:true},
    password: {type:String, required: true},
    role : {type: String},
});

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d"})
        return token
    
}
const User = mongoose.model("userFinanciera", userSchema);

const validate = (data) =>{
    const schema = Joi.object({
        firstName: Joi.string().required().label("Fist name"),
        lastName: Joi.string().required().label("Last name"),
        email: Joi.string().email().required().label("email"),
        password: passwordComplexity().required().label("Password"),
        role: Joi.string().optional().label("Rol del usuario") // Puede ser supervisor(S), agente de ventas(V), agente comercial(C).
    });
    return schema.validate(data);
};

module.exports = {User, validate};