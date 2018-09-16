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

  enrollmentModel
    .find({'user': parseInt('5190239')})
    .exec(function(err, docs){
      if (err) return handleError(err);
      console.log('docs', docs);
      for( let enroll of docs){
        //console.log(enroll.course_list)
        var enroll_list = [];
        var nb_of_course = enroll.course_list.length;
        for( let course of enroll.course_list) {
          console.log('coursename',course)
          courseModel
            .findOne({'_id': course._id})
            .lean()
            .exec(function(e, result) {
              if (e) {
                console.log(e);
              }
              enroll_list.push(result)
              console.log('enroll_list', enroll_list);
              mongoose.disconnect();
              if (enroll_list.length === nb_of_course){
                resolve(enroll_list);
              }
            });
        }
      }
    })
  }) // promise end