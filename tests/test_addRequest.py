import unittest
import requests
import json

class addRequestTest(unittest.TestCase):
    valid_source_request_data = None
    invalid_source_request_data = None

    @classmethod
    def setUpClass(cls):
        cls.base_url = 'http://localhost:8000/api/addSolicitud'

        # Testing if there is an empty field
        cls.valid_source_request_data = {
            'nombre': 'Christian',
            'apellido': 'Barrios',
            'RUT': '21151221-0',
            'Ciudad': 'Santiago',
            'Comuna': 'Providencia',
            'NumeroTel': '987654321',
            'Calle': 'Calle Falsa',
            'NumeroCasa': '123',
            'Monto': 10000,
            'Tasa': 5,
            'Plazo': 12,
            'Categoria': 'A'
        }
        # Incomplete data request
        cls.invalid_source_request_data = {
            'nombre': '',
            'apellido': 'Barrios',
            'RUT': '21151221-0',
            'Ciudad': 'Santiago',
            'Comuna': 'Providencia',
            'NumeroTel': '987654321',
            'Calle': 'Calle Falsa',
            'NumeroCasa': '123',
            'Monto': 10000,
            'Tasa': 5,
            'Plazo': 12,
            'Categoria': 'A'
        }

    @classmethod
    def tearDownClass(cls):
        del cls.valid_source_request_data
        del cls.invalid_source_request_data

    def test_valid_request(self):
        response = requests.post(self.base_url, json=self.valid_source_request_data)
        self.assertEqual(response.status_code, 200)


    def test_invalid_request(self):
        response = requests.post(self.base_url, json=self.invalid_source_request_data)
        self.assertEqual(response.status_code, 400)     


if __name__ == '__main__':
    unittest.main()