const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
  res.render('home', { title: '¡Bienvenido a la tienda en línea!'})
});
app.use('/products', productsRouter);
// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).render('404', { 
    title: 'Página no encontrada',
    message: 'Lo sentimos, la página que buscas no existe.'
  });
});
// Middleware para manejar errores generales del servidor (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: 'Error del Servidor',
    message: 'Ocurrió un error en el servidor. Por favor, intenta nuevamente más tarde.'
  });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});