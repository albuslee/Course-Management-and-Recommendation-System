// import external class
let mongoose = require('mongoose');
let courseModel = require('./models/course.js');
let userModel = require('./models/user.js');

const courseDB = require('./dbConn');
const course_data = require('./data/opt_course_data.json');
const user_data = require('./data/user_data_up.json');



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