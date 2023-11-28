const mongoose = require("mongoose");

module.exports = () =>{
    try{
        mongoose.connect(process.env.DB);
        console.log("Connect to dabase");
    }catch(error){
        console.log(error);
        console.log("Hubo un error al conectar a la base de datos");
    }
}