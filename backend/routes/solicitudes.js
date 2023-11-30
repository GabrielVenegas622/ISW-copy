const express = require("express")
const {addSolicitud, getAllSolicitudes, actualizarSolicitud, deleteSolicitud, actualizarComentario} = require("../controllers/solicitud.controller");

const router = express.Router();

//Crear Solicitud

router.post("/addSolicitud", addSolicitud);

router.get("/getSolicitud", getAllSolicitudes);

router.put("/updateEstado/:id", actualizarSolicitud);

router.put("/updateComment/:id", actualizarComentario);

router.delete("/deleteSolicitud/:id", deleteSolicitud);

module.exports = router;