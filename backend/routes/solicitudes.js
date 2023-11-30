const express = require("express")
const {addSolicitud, getAllSolicitudes, actualizarSolicitud, deleteSolicitud} = require("../controllers/solicitud.controller");

const router = express.Router();

//Crear Solicitud

router.post("/addSolicitud", addSolicitud);

router.get("/getSolicitud", getAllSolicitudes);

router.put("/updateEstado/:id", actualizarSolicitud);

router.delete("/deleteSolicitud/:id", deleteSolicitud);

module.exports = router;