const express = require("express")
const {getAllUsers, actualizarUsuario, deleteUser, getComercial} = require("../controllers/user.controller");

const router = express.Router();

//Crear Solicitud

router.get("/getUsers",getAllUsers);

router.get("/getUsersByRol/:rol", getComercial);

router.put("/updateUser/:id", actualizarUsuario);

router.delete("/deleteUser/:id", deleteUser);

module.exports = router;