const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '../data/products.json');

async function readProducts() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeProducts(products) {
  const data = JSON.stringify(products, null, 2);
  await fs.writeFile(DATA_FILE, data);
}

//RUTA GET /products - Listar todos los productos
router.get('/', async (req, res, next) => {
  try {
    const products = await readProducts();
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
    const { name, price, description } = req.body;

    if(!name || !price || !description) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    const products = await readProducts();
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price: Number(price)
    };

    products.push(newProduct);
    await writeProducts(products);

    res.redirect('/products');
  } catch (error) {
    next(error);
  }
});

module.exports = router;