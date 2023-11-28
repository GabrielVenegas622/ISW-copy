import axios from "./axios"

export const agregarSolicitud = solicitud => axios.post('/addSolicitud', solicitud);

export const Solicitudes = () => axios.get('/getSolicitud');