const newsRouter = require('./news'); // import news route
const siteRouter = require('./site'); // import site route
const coursesRouter = require('./courses'); // import courses route

function route(app) {
	app.use('/news', newsRouter);
	app.use('/courses', coursesRouter);

	app.use('/', siteRouter);
}
module.exports = route;
