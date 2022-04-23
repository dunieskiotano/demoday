
const db = require('../data/products.json');


const productsRoutes = (app, fs) => {

    app.get('/products', function (req, res, next) {
      res.send(db.products);
    });
  
    app.get('/products/:id', function (req, res, next) {
      const id = parseInt(req.params.id);
      res.send(db.products.find((product) => product.id === id));
    });
  };

module.exports = productsRoutes;