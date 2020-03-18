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

module.exports.editProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})    
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deleteConfirmation=>res.json(deleteConfirmation))
        .catch(err=>res.json(err))
}