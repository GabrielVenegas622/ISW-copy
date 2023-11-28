const solicitudSchema = require("../models/solicitud")
const Joi = require("joi");

const addSolicitud = async (req,res) =>{
    const {error} = validateSol(req.body);
    if(error)
        return res.status(400).send({message: error.details[0].message});
    const solicitud = solicitudSchema(req.body);
    await solicitud.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
}

const getAllSolicitudes =  async (req,res) =>{
    await solicitudSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
}

const validateSol = (data) =>{
    const schema = Joi.object({
        nombre: Joi.string().required().label("Nombre"),
        apellido: Joi.string().required().label("Apellido"),
        RUT: Joi.string().required().label("RUT"),
        Ciudad: Joi.string().required().label("Ciudad"),
        Comuna: Joi.string().required().label("Comuna"),
        NumeroTel: Joi.string().required().label("Numero"),
        Calle: Joi.string().required().label("Calle"),
        NumeroCasa: Joi.string().required("Numero de casa"),
        Monto: Joi.number().required().label("Monto"),
        Tasa: Joi.number().required().label("Tasa Mensual"),
        Plazo: Joi.number().required().label("Plazo"),
        Categoria: Joi.string().required().label("Categoría"),
        Comentario: Joi.string().required().label("Comentario"),
    });

    return schema.validate(data);
}

module.exports = {addSolicitud, getAllSolicitudes}