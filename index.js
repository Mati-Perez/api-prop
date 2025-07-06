const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

let propiedades = [
  {
    "id": 1,
    "titulo": "Departamento - 2 ambientes",
    "precio": 68000,
    "moneda": 'USD',
    "tipo_operacion": "Venta",
    "ciudad": "Distrito Centro",
    "provincia": "Rosario",
    "direccion": "Zeballos 503",
    "metros_cuadrados": 65,
    "dormitorios": 1,
    "imagen": "img/departamento1.jpg"
  },
  {
    "id": 2,
    "titulo": "Departamento - 4 ambientes",
    "precio": 157000,
    "moneda": 'USD',
    "tipo_operacion": "Venta",
    "ciudad": "La Matanza",
    "provincia": "Buenos Aires",
    "direccion": "Oro 857. Ramos Mejia",
    "metros_cuadrados": 95,
    "dormitorios": 2,
    "imagen": "img/departamento2.jpg"
  },
  {
    "id": 3,
    "titulo": "Departamento - monoambiente",
    "precio": 79500,
    "moneda": 'USD',
    "tipo_operacion": "Venta",
    "ciudad": "Balvanera",
    "provincia": "CABA",
    "direccion": "Av. Rivadavia 3269",
    "metros_cuadrados": 65,
    "dormitorios": 1,
    "imagen": "img/departamento3.jpg"
  },
  {
    "id": 4,
    "titulo": "Departamento - 3 ambientes",
    "precio": 680000,
    "moneda": 'ARS',
    "tipo_operacion": "Alquiler",
    "ciudad": "Godoy Cruz. Mendoza",
    "provincia": "Mendoza",
    "direccion": "Pascual Segura 1224. Godoy Cruz",
    "metros_cuadrados": 85,
    "dormitorios": 2,
    "imagen": "img/casa1.jpg"
  },
  {
    "id": 5,
    "titulo": "Departamento - 2 ambientes",
    "precio": 500000,
    "moneda": 'ARS',
    "tipo_operacion": "Alquiler",
    "ciudad": "Ciudad de Mendoza",
    "provincia": "Mendoza",
    "direccion": "9 de Julio al 900",
    "metros_cuadrados": 45,
    "dormitorios": 1,
    "imagen": "img/casa2.jpg"
  },
  {
    "id": 6,
    "titulo": "Casa - 4 ambientes",
    "precio": 980000,
    "moneda": 'USD',
    "tipo_operacion": "Venta",
    "ciudad": "Distrito Centro",
    "provincia": "Rosario",
    "direccion": "Pedro Diaz 2458",
    "metros_cuadrados": 76,
    "dormitorios": 2,
    "imagen": "img/casa3.jpg"
  },
  {
    "id": 7,
    "titulo": "Casa - 5 ambientes",
    "precio": 780000,
    "moneda": 'USD',
    "tipo_operacion": "Venta",
    "ciudad": "Tigre",
    "provincia": "Buenos Aires",
    "direccion": "Zapata 1500",
    "metros_cuadrados": 105,
    "dormitorios": 3,
    "imagen": "img/casa4.jpg"
  },
  {
    "id": 8,
    "titulo": "Casa - 4 ambientes",
    "precio": 850000,
    "moneda": 'ARS',
    "tipo_operacion": "Alquiler",
    "ciudad": "Ciudad de Cordoba",
    "provincia": "Cordoba",
    "direccion": "Ceballos 4251",
    "metros_cuadrados": 65,
    "dormitorios": 2,
    "imagen": "img/casa5.jpg"
  },
  {
    "id": 9,
    "titulo": "Casa - 5 ambientes",
    "precio": 975000,
    "moneda": 'USD',
    "tipo_operacion": "Venta",
    "ciudad": "Cafayate. Salta",
    "provincia": "Salta",
    "direccion": "Arribeños 1242",
    "metros_cuadrados": 103,
    "dormitorios": 3,
    "imagen": "img/casa6.jpg"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/propiedades', (request, response) => {
  response.json(propiedades)
})

app.get('/api/propiedades/:id', (request, response) => {
  const id = Number(request.params.id)
  const propiedad = propiedades.find(propiedad => propiedad.id === id)

  if(propiedad){
    response.json(propiedad)
  }else{
    response.status(404).end()
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
