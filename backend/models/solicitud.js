const { number } = require("joi");
const mongosee = require("mongoose");

const solicitudSchema = new mongosee.Schema({
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type: String,
        required: true
    },
    RUT: {
        type:String,
        required: true
    },
    Ciudad: {
        type:String,
        required: true
    },
    Comuna: {
        type:String,
        required: true
    },
    NumeroTel: {
        type:String,
        required: true
    },
    Calle: {
        type:String,
        required: true
    },
    NumeroCasa: {
        type:String,
        required: true
    },
    Monto: {
        type:Number,
        required: true
    },
    Tasa: {
        type:Number,
        required: true
    },
    Plazo: {
        type:Number,
        required: true
    },
    Categoria: {
        type:String,
        required: true
    },
    Comentario: {
        type:String,
        required: true
    },
    Estado: {
        type:String,
        default: 0,
    },
    ValorCreditoUF: {
        type: Number,
    },
    ValorCreditoCLP:{
        type: Number
    }
},{
    timestamps:true
});

module.exports = mongosee.model("solicitudes", solicitudSchema);