const express = require('express');

const productsRouter = require('./products.router');
const bodegasRouter = require('./bodega.router');
const inventariosRouter = require('./inventarios.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/bodegas', bodegasRouter);
  router.use('/inventarios', inventariosRouter);

}

module.exports = routerApi;
