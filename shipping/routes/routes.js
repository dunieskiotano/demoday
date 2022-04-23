// load up our shiny new route for users
const shippingRoutes = require('./shipping');


const appRouter = (app, fs) => {  
  shippingRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;