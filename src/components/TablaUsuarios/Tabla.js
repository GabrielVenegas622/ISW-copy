import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Button } from 'react-bootstrap';
import { getUsuarios , deleteUsuario, updateUsuario} from '../../Api/userCrudFront';

function ResponsiveExample() {
  const [usuarios, setUsuarios] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  const [editUserData, setEditUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });


  const handleCancelarEdicion = () => {
    setEditUserId(null); // Sale del modo de edición
  };

  const handleEditarUsuario = (id) => {
    const usuarioSeleccionado = usuarios.find((usuario) => usuario._id === id);
    setEditUserData({
      firstName: usuarioSeleccionado.firstName,
      lastName: usuarioSeleccionado.lastName,
      email: usuarioSeleccionado.email,
      role: usuarioSeleccionado.role,
    });
    setEditUserId(id);
  };

  const handleGuardarEdicion = async (id) => {
    try {
        await updateUsuario(id, editUserData)
        console.log(`Guardar edición del usuario con ID: ${id}`);

        const newUsuarios = usuarios.map((usuario) =>
        usuario._id === id ? { ...usuario, ...editUserData } : usuario
        );

        setUsuarios(newUsuarios);
        setEditUserId(null); 
    } catch (error) {
        console.error('Error al guardar edición:', error.message);
       
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsuarios();
        setUsuarios(data.users);
        console.log("Usuarios:", data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleEliminarUsuario = async (id) => {
    try {
      await deleteUsuario(id);
      console.log(`Eliminar usuario con ID: ${id}`);

      const newUsuarios = usuarios.filter((usuario) => usuario._id !== id);
      setUsuarios(newUsuarios);
    } catch (error) {
      console.error('Error al eliminar usuario:', error.message);
    }
  };

  return (
    <Container className='styledContainer2'>
      <Table striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: '20%' }}>Nombre</th>
            <th style={{ width: '20%' }}>Apellido</th>
            <th style={{ width: '20%' }}>email</th>
            <th style={{ width: '20%' }}>Cargo</th>
            <th style={{ width: '20%' }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario,index) => (
            <tr key={usuario._id}>
              <td>{index+1}</td>
              <td>{editUserId === usuario._id ? (
                <input
                 type="text"
                 value={editUserData.firstName}
                 onChange={(e) => setEditUserData({...editUserData, firstName: e.target.value})}
                />
              ): (
                usuario.firstName
              )}
              </td>
              <td>{editUserId === usuario._id ? (
                <input
                 type="text"
                 value={editUserData.lastName}
                 onChange={(e) => setEditUserData({...editUserData, lastName: e.target.value})}
                />
              ): (
                usuario.lastName
              )}
              </td>
              <td>{editUserId === usuario._id ? (
                <input
                 type="text"
                 value={editUserData.email}
                 onChange={(e) => setEditUserData({...editUserData, email: e.target.value})}
                />
              ): (
                usuario.email
              )}
              </td>
              <td>
                {editUserId === usuario._id ? (
                    <select
                    value={editUserData.role}
                    onChange={(e) => setEditUserData({ ...editUserData, role: e.target.value })}
                    >
                    <option value="supervisor">supervisor</option>
                    <option value="ventas">ventas</option>
                    <option value="comercial">comercial</option>
                    </select>
                ) : (
                    usuario.role
                )}
                </td>
              <td>
                {editUserId === usuario._id ? (
                    <>
                    <Button variant="success" onClick={() => handleGuardarEdicion(usuario._id)}>
                        Guardar
                    </Button>{' '}
                    <Button variant="secondary" onClick={handleCancelarEdicion}>
                        Cancelar
                    </Button>
                    </>
                    ) : (
                    <>
                    <Button variant="info" onClick={() => handleEditarUsuario(usuario._id)}>
                        Editar
                    </Button>{' '}
                    <Button variant="danger" onClick={() => handleEliminarUsuario(usuario._id)}>
                        Eliminar
                    </Button>
                    </>
                )}
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ResponsiveExample;
