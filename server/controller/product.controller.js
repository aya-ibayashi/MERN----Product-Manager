const { Product } = require('../model/product.model');

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;

    Product.create({
        title,
        price,
        description
    })
        .then(person => res.json(person))
        .catch(err=>res.json(err));
}

module.exports.getAllProducts = (_, res) => {

    Product.find()
        .then(productList => res.json(productList))
        .catch(err=>res.json(err));
}

module.exports.getProduct = (req,res) => {
    Product.findById(req.params.id)
        .then(product=>res.json(product))
        .catch(err => {
            res.json(err);
            console.log(err)});
}