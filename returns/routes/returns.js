
const db = require('../data/returns.json');


const returnsRoutes = (app, fs) => {

    app.get('/returns', function (req, res, next) {
      res.send(db.returns);
    });
  
    app.get('/returns/:id', function (req, res, next) {
      const id = parseInt(req.params.id);
      res.send(db.returns.find((returns) => returns.id === id));
    });
  };

module.exports = returnsRoutes;