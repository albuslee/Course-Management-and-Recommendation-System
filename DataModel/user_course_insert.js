// import external class
let mongoose = require('mongoose');
let courseModel = require('./models/course.js');
let userModel = require('./models/user.js');
let enrollmentModel = require('./models/enrollment.js');

const course_data = require('./data/opt_course_data2.json');
const user_data = require('./data/user_data_up.json');
const enrollment_data = require('./data/enrollment.json');


function insert_user_course_enrollment(){
    // insert json into mongoDB
  courseModel.insertMany(course_data, function(err,result) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      // handle success
      console.log("All courses are inserted successfully")
    }
  });

  userModel.insertMany(user_data, function(err,result) {
  if (err) {
    // handle error
    console.log(err);
  } else {
    // handle success
    console.log("All users are inserted successfully")
  }
  });

  enrollmentModel.insertMany(enrollment_data, function(err, result){
  if (err) {
    // handle error
    console.log(err);
  } else {
    // handle success
    console.log("All enrollment are inserted successfully")
  }
  })
}

module.exports.insert_json = insert_user_course_enrollment;
