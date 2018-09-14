// import external class
let mongoose = require('mongoose');
let courseModel = require('./models/course.js');
let userModel = require('./models/user.js');
let enrollmentModel = require('./models/enrollment.js');

const courseDB = require('./dbConn');

userModel
	.find({currentTerm: 2})
	.exec( function(err, docs) {
		if (err) return handleError(err);
    console.log(docs);
	})