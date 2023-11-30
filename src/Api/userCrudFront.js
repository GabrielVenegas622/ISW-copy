import axios from "./axios"

export const getUsuarios = async () => {
    try {
      const response = await axios.get('/getUsers');
      return response.data;
    } catch (error) {
      throw error; 
    }
};

export const deleteUsuario = async(id) => {
    try {
        const response = await axios.delete(`/deleteUser/${id}`)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar usuario:', error.message);
        throw error; // Lanza el error para que pueda ser manejado en el componente que llama a esta funció
    }
}

export const updateUsuario = async (id, newData) => {
    try {
        const response = await axios.put(`/updateUser/${id}`, newData);
        console.log(response.data);
    } catch (error) {
        console.error('Error al actualizar usuario:', error.message);
        throw error;
    }
}

