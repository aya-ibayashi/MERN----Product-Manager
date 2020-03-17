const ProductController = require('../controller/product.controller');

module.exports = app => {
    app.get("/api/products/:id", ProductController.getProduct);
    app.post("/api/products/create", ProductController.createProduct);
    app.get("/api/products", ProductController.getAllProducts);
}