const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../util/mongoose');
class CourseController {
	// [GET] /me/stored/courses
	storedCourses(req, res, next) {
		Course.find({})
			.then((courses) => {
				res.render('me/stored_courses', { courses: mutilpleMongooseToObject(courses) });
			})
			.catch(next);
	}
}
module.exports = new CourseController();
