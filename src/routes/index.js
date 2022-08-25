const newsRouter = require('./news'); // import news route
const siteRouter = require('./site'); // import site route

function route(app) {
  app.use('/news', newsRouter);

  app.use('/', siteRouter);
}
module.exports = route;
