const {User} = require("../models/user")
const Joi = require("joi");

const getAllUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.json({ users: data });
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message);
        res.status(500).json({ error: "Hubo un problema al obtener los usuarios." });
    }
};

const actualizarUsuario = async (req,res) =>{
    const tutor = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!tutor) return res.status(404).json({message: "No se encontró al tutor"});
    res.json(tutor);
};

const deleteUser= async (req, res) =>{
   const user = await User.findByIdAndDelete(req.params.id);
   if(!User) return res.status(404).res({message: "No se Usuario"})
   res.json({message: "Usuario eliminado"});
};

// const validateSol = (data) =>{
//     const schema = Joi.object({
//         nombre: Joi.string().required().label("Nombre"),
//         apellido: Joi.string().required().label("Apellido"),
//         RUT: Joi.string().required().label("RUT"),
//         Ciudad: Joi.string().required().label("Ciudad"),
//         Comuna: Joi.string().required().label("Comuna"),
//         NumeroTel: Joi.string().required().label("Numero"),
//         Calle: Joi.string().required().label("Calle"),
//         NumeroCasa: Joi.string().required("Numero de casa"),
//         Monto: Joi.number().required().label("Monto"),
//         Tasa: Joi.number().required().label("Tasa Mensual"),
//         Plazo: Joi.number().required().label("Plazo"),
//         Categoria: Joi.string().required().label("Categoría"),
//         Comentario: Joi.string().required().label("Comentario"),
//         ValorCreditoUF: Joi.number().optional().label("Valor Credito UF"),
//         ValorCreditoCLP: Joi.number().optional().label("Valor Credito CLP"),
//         Estado: Joi.number().optional().label("Estado"),
//     });

//     return schema.validate(data);
// }

module.exports = {getAllUsers, actualizarUsuario, deleteUser}