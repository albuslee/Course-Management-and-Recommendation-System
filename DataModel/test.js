const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";

let courseModel = require('./models/course.js');
let userModel = require('./models/user.js');
let enrollmentModel = require('./models/enrollment.js');


const enrollmentInfo = new Promise((resolve, reject) => {
  mongoose.connect(url+'coursetest')
  .then(
    () => {
      console.log('Database connect')
    },
    err => { console.log(err) }
  )

  courseModel
  .find({'full_name': /.*di.*/i})
    .exec(function(err, docs){
      if (err) return handleError(err);
      console.log('docs', docs);
      
    })
  }) // promise end