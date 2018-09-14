const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";

let courseModel = require('./models/course.js');
let userModel = require('./models/user.js');
let enrollmentModel = require('./models/enrollment.js');


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
        console.log(enroll.course_list)
        let enroll_list = []
        for( let course of enroll.course_list) {
          console.log(course)
          courseModel
            .findOne({'_id':course}, 'code name')
            .lean()
            .exec(function(e, result) {
              if (e) {
                console.log(e);
              }
              console.log(result);
              //enroll_list.push({'code': result.code, 'name': result.name})
              console.log('enrol_list', enroll_list);
            });
        };
        
      }
      
      //mongoose.disconnect();
      //return res.json(enroll_list);
    })