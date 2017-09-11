const express = require('express')

module.exports = function(server) {
  // API Routes
  const router = express.Router()
  server.use('/api', router)
  
  // Product Routes
  const productService = require('../api/product/productService')
  productService.register(router, '/products')
}