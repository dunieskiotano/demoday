
const db = require('../data/shipping.json');


const shippingRoutes = (app, fs) => {

    app.get('/shipping', function (req, res, next) {
      res.send(db.shipping);
    });
  
    app.get('/shipping/:id', function (req, res, next) {
      const id = parseInt(req.params.id);
      res.send(db.shipping.find((shipping) => shipping.id === id));
    });
  };

module.exports = shippingRoutes;