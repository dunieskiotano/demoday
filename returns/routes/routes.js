// load up our shiny new route for users
const returnsRoutes = require('./returns');


const appRouter = (app, fs) => {  
  returnsRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;