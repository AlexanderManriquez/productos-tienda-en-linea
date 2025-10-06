# Productos Tienda en Línea

Documentación para instalar, configurar y ejecutar la aplicación Node.js/Express con Handlebars.

## Requisitos

- Node.js 18 o superior (recomendado LTS)
- npm (se instala junto con Node.js)

Verifica tu instalación:

```powershell
node -v
npm -v
```

Si no tienes Node.js, descárgalo desde: <a href="https://nodejs.org">Node.js</a>

## Tecnologías y dependencias

- Runtime: Node.js (CommonJS)
- Framework web: Express 5 (`express` ^5.1.0)
- Motor de vistas: Express Handlebars (`express-handlebars` ^8.0.2)
- Desarrollo: Nodemon (`nodemon` ^3.1.10)

Consulta `package.json` para ver versiones exactas.

## Estructura del proyecto

```
app.js
package.json
/data
  products.json
/public
  /css
    styles.css
/routes
  products.js
/views
  404.handlebars
  error.handlebars
  home.handlebars
  newProduct.handlebars
  products.handlebars
  /layouts
    main.handlebars
  /partials
    footer.handlebars
    header.handlebars
```

- `app.js`: punto de entrada del servidor Express, configuración de vistas, estáticos y middlewares.
- `routes/products.js`: rutas CRUD básicas para productos (persistencia en `data/products.json`).
- `views/`: vistas Handlebars.
- `public/`: archivos estáticos (CSS, imágenes, etc.).
- `data/products.json`: almacenamiento simple en archivo JSON.

## Instalación

1) Ubícate en la carpeta del proyecto.
2) Instala dependencias:

```bash
npm install
```

## Variables de entorno (opcional)

- `PORT`: puerto del servidor (por defecto 3000).

## Ejecución

- Modo desarrollo (recarga automática con nodemon):

```bash
npm run dev
```

- Modo producción (Node.js estándar):

```bash
npm start
```

Una vez iniciado, abre el navegador en:

- http://localhost:3000 (o el puerto configurado en `PORT`).

## Scripts disponibles

- `npm run dev`: inicia el servidor con Nodemon (observa cambios en tiempo real).
- `npm start`: inicia el servidor con Node.

## Rutas principales

- `GET /` → Página de inicio.
- `GET /products` → Lista de productos (vista `products.handlebars`).
- `GET /products/newProduct` → Formulario para crear producto.
- `POST /products` → Crea un nuevo producto.
  - Campos requeridos: `name` (string), `price` (number), `description` (string).
  - Si faltan campos, responde 400.

## Vistas y estáticos

- Motor de vistas: Handlebars (`.handlebars`).
- Layout principal: `views/layouts/main.handlebars`.
- Estáticos servidos desde `public/` (por ejemplo CSS en `public/css/styles.css`).

## Persistencia de datos

- Los productos se leen y escriben en `data/products.json`.
- El archivo se crea/actualiza automáticamente al agregar productos.

## Solución de problemas

- Puerto en uso: cambia `PORT` o cierra el proceso que ocupa el puerto.
- Permisos en OneDrive: si ves errores al escribir `data/products.json`, prueba ejecutar fuera de una carpeta sincronizada o verifica permisos de escritura.
- Nodemon no reinicia: reinstala localmente (`npm i -D nodemon`) y usa `npm run dev`.

## Licencia

Este proyecto usa la licencia ISC (ver `package.json`).
