const express = require("express")
const {getAllUsers, actualizarUsuario, deleteUser} = require("../controllers/user.controller");

const router = express.Router();

//Crear Solicitud


router.get("/getUsers",getAllUsers);

router.put("/updateUser/:id", actualizarUsuario);

router.delete("/deleteUser/:id", deleteUser);

module.exports = router;