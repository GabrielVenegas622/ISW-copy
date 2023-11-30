import axios from "./axios"

export const agregarSolicitud = solicitud => axios.post('/addSolicitud', solicitud);

export const Solicitudes = () => axios.get('/getSolicitud');

export const actualizarSolicitud = (id, state) => axios.put(`/updateEstado/${id}`, {Estado: state})

export const actualizarComment = (id, comment) => axios.put(`/updateComment/${id}`, {Comentario: comment})

export const fetchUFValue = async () => {
    try {
      const response = await fetch('https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=0e425b4c9e18ca3a1bfa76cd0d02a5cf21cdf8cf&formato=json');
      const data = await response.json();
      return parseFloat(data.UFs[0].Valor) * 1000;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
};
  