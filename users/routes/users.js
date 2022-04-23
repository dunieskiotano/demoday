
const db = require('../data/users.json');


const usersRoutes = (app, fs) => {

    app.get('/users', function (req, res, next) {
      res.send(db.users);
    });
  
    app.get('/users/:id', function (req, res, next) {
      const id = parseInt(req.params.id);
      res.send(db.users.find((user) => user.id === id));
    });
  };

module.exports = usersRoutes;