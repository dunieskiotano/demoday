const db = require('../data/orders.json');

const ordersRoutes = (app, fs) => {

  app.get('/orders', function (req, res, next) {
    res.send(db.orders);
  });

  app.get('/orders/:id', function (req, res, next) {
    const id = parseInt(req.params.id);
    console.log(id)
    res.send(db.orders.find((order) => order.id === id));
  });

  app.get('/orders/user/:id', function (req, res, next) {
    const id = parseInt(req.params.id);
    res.send(db.orders.find((order) => order.user_id === id));
  });
};

module.exports = ordersRoutes;


