'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


//Executar GET
exports.get = (req, res, next) => {
    Product
    .find({
        active: true
    }, 'title price slug')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e)
    });
}

//Executar POST
/*
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};
*/

exports.post = (req, res) => {
    var product = new Product(req.body);
    product
    .save()
    .then(x => {
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao cadastrar produto',
            data: e
        });
    });
};

//Executar UPDATE
/*
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body,
    });
};
*/

exports.put = (req, res) => {
    Product.
    findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug
        }
    }).then(x => {
        res.status(200).send({         
            message: 'Produto atualizado com sucesso!'
    });
    }).catch(e => {
        res.status(400).send({
        message: 'Falha ao atualizar produto',
        data: e

        })
    })
};    

//Executar DELETE
/*
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
*/

exports.delete = (req, res) => {   
    Product.
    findOneAndRemove(req.body.id)
    .then(x => {
    res.status(200).send({         
        message: 'Produto removido com sucesso!'
});
}).catch(e => {
    res.status(400).send({
    message: 'Falha ao remover o produto',
    data: e

    })
})
};    
