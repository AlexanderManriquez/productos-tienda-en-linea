const express = require('express');
const router = express.Router();

const { readJSON, writeJSON } = require('../utils/fileManager');
const { isValidString, isValidNumber, isValidInteger } = require('../utils/validators');
const FILE = 'products.json';

//RUTA GET /products - Listar todos los productos
router.get('/', async (req, res, next) => {
  try {
    let products = await readJSON(FILE);

    //Asegurar que productos antiguos (agregados antes del nuevo campo stock) tengan esa clave.
    products = products.map( products=> ({
      ...products,
      stock: isValidInteger(products.stock) ? Number(products.stock) : 0
    }));

    res.render('products', { title: 'Lista de Productos', products });
  } catch (error) {
    next(error);
  }
});

//RUTA GET /products/new - Formulario para agregar un nuevo producto
router.get('/newProduct', (req, res) => {
  res.render('newProduct', { title: 'Agregar Producto'});
});

//RUTA POST /products - Agregar un nuevo producto
router.post('/', async (req, res, next) => {
  try {
    const { name, price, description, stock } = req.body;

    //Validaciones del lado del servidor

    if (!isValidString(name, 2, 100)) {
      return res.status(400).render('newProduct', {
        title: 'Agregar Producto',
        error: 'Nombre inválido. Debe tener entre 2 y 100 caracteres.',
        oldData: req.body
      });
    }

    if (!isValidNumber(price)) {
      return res.status(400).render('newProduct', {
        title: 'Agregar Producto',
        error: 'Precio inválido. Debe ser un número positivo.',
        oldData: req.body
      });
    }

    if (!isValidInteger(stock)) {
      return res.status(400).render('newProduct', {
        title: 'Agregar Producto',
        error: 'Stock inválido. Debe ser un número entero positivo.',
        oldData: req.body
      });
    }
    
    const products = await readJSON(FILE);

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
      description: description.trim(),
      stock: Number(stock)
    };

    products.push(newProduct);
    await writeJSON(FILE, products);

    res.redirect('/products');
  } catch (error) {
    next(error);
  }
});

module.exports = router;