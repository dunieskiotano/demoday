// load up our shiny new route for users
const userRoutes = require('./users');


const appRouter = (app, fs) => {
    // run our user route module here to complete the wire up
  userRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;