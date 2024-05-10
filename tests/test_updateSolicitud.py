import unittest
import requests
import json


class TestUpdateSolicitud(unittest.TestCase):
    estados_validos = None
    estados_invalidos = None
    id_solicitud = None
    id_solicitud_inexistente = None

    @classmethod
    def setUpClass(cls):
        cls.base_url = "http://localhost:8000/api"
        cls.id_solicitud = "6625a41c78bcca02e74553aa"
        cls.id_solicitud_inexistente = "123456789"
        cls.estados_validos = [0, 1, 2]
        cls.estado_invalido = 3

    @classmethod
    def tearDownClass(cls):
        del cls.estados_invalidos
        del cls.estados_validos
        del cls.id_solicitud
        del cls.id_solicitud_inexistente

    def test_actualizar_estado_valido(self):
        for estado in self.estados_validos:
            url = f"{self.base_url}/updateEstado/{self.id_solicitud}"
            response = requests.put(url, json={"Estado": estado})
            self.assertEqual(response.status_code, 200)

    def test_actualizar_estado_invalido(self):
        url = f"{self.base_url}/updateEstado/{self.id_solicitud}"
        response = requests.put(url, json={"Estado": self.estado_invalido})
        self.assertNotEqual(response.status_code, 200)

    def test_actualizar_estado_solicitud_inexistente(self):
        for estado in self.estados_validos:
            url = f"{self.base_url}/updateEstado/{self.id_solicitud_inexistente}"
            response = requests.put(url, json={"Estado": estado})
            self.assertEqual(response.status_code, 404)


if __name__ == "__main__":
    unittest.main()
