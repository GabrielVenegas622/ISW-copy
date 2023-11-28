const express = require("express")
const solicitudSchema = require('../models/solicitud')
const {addSolicitud, getAllSolicitudes} = require("../controllers/solicitud.controller");

const router = express.Router();

//Crear Solicitud

router.post("/addSolicitud", addSolicitud);
router.get("/getSolicitud", getAllSolicitudes);
router.put("/putSolicitud/:id");
router.delete("/deleteSolicitud/:id");

module.exports = router;






