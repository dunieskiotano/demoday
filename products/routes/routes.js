// load up our shiny new route for users
const productsRoutes = require('./products');


const appRouter = (app, fs) => {
  
  productsRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;