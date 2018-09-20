//server.js is the main app.js for backend
//writing your api services in this page

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";
const app = express();
const bodyParser = require('body-parser');

// import database external library
let courseModel = require('./DataModel/models/course.js');
let userModel = require('./DataModel/models/user.js');
let enrollmentModel = require('./DataModel/models/enrollment.js');
let pendingListModel = require('./DataModel/models/pendingList.js');

// CSRF pre-fighting
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

app.get('/endpoint', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
// for bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));


// ----------------------------------------------------get the user infomation for display in studentprofile ---------------------

app.get('/api/user/:id', (req, res) => {
  const userInfo = new Promise((resolve, reject) => {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, db){
      if (err) reject(err);
      let dbo =db.db('coursetest');
      dbo.collection("User").findOne({_id: parseInt(req.params.id)}, function(err, result){
        if (err) reject (err);
        db.close();
        resolve(result);
      });
    });
  });
  userInfo.then((result) => {
    //console.log(res);
    res.json({username : result})    //// TEMP: need use "then" to load user's trasction, until both info loaded,then return to front-end.
  })
  .catch((err) => {
    console.log(`Opz, something wrong, the error message is ${err}`);
  });
});




// ----------------------------------------------------get the enrollment info ---------------------
app.get('/api/enrollment/:id', (req, res) => {
  const enrollmentInfo = new Promise((resolve, reject) => {
    mongoose.connect(url+'coursetest')
    .then(
      () => {
        console.log('Database connect')
      },
      err => { console.log(err) }
    )

  enrollmentModel
    .find({'user': parseInt(req.params.id)})
    .exec(function(err, docs){
      if (err) return handleError(err);
      //console.log('docs', docs);
      for( let enroll of docs){
        //console.log(enroll.course_list)
        var enroll_list = [];
        var nb_of_course = enroll.course_list.length;
        for( let course of enroll.course_list) {
          //console.log('coursename',course)
          courseModel
            .findOne({'_id': course._id})
            .lean()
            .exec(function(e, result) {
              if (e) {
                console.log(e);
              }
              enroll_list.push(result)
              //console.log('enroll_list', enroll_list);
              mongoose.disconnect();
              if (enroll_list.length === nb_of_course){
                //console.log(enroll_list);
                resolve(enroll_list);
              }
            });
        }
      }
    })
  }) // promise end
  //console.log(enroll_list);
  enrollmentInfo.then( enroll_list => {
      return res.json(enroll_list);
  })
});



// ----------------------------------------------------get the course review info ---------------------
app.get('/api/review/:id',(req,res) => {
  // connect database
  //by data schema provided by mongoose
  const courseReview = new Promise((resolve,reject) => {
    mongoose.connect(url + 'coursetest')
    .then(
      () => {
        console.log('Database connect');
      },
      err => {
        console.log(err);
      }
    )

  //get user-course-star information from enrollment table
    enrollmentModel
    .find({
      'user': parseInt(req.params.id)
    })
    .populate('course_list._id')
    .exec(function(err, docs){
      if (err) return handleError(err);
      var reviewList = [];
      docs[0].course_list.forEach(course => {
        reviewList.push({'code' : course._id.code, 'name': course._id.name, 'star':course.star,'term': course._id.term});    
      });
      resolve(reviewList); 
      mongoose.disconnect();
    
    })
  })
  courseReview
    .then( reviewList => {
      return res.json(reviewList
      );
    })
});

// ----------------------------------------------------get the pendinglist and prerequisitiescheck info ---------------------

app.get('/api/pendinglist/:uid', (req, res) => {
  //fetch data from database using original 

  const pendinglistInfo = new Promise((resolve, reject) => {
    mongoose.connect(url+'coursetest')
    .then(
      () => {
        resolve(console.log('Database connect'))
      },
      reject(err => { console.log(err) })
    )
  
  //fetching enrollment data from enrollment API using enrollment Model
  var enrollment_list = []
  enrollmentModel
    .find({'user': parseInt(req.params.uid)})
    .populate('course_list._id')
    .exec(function(err, docs){
      if (err) return handleError(err);
    
      const enr_courses = docs[0].course_list
      for (const course of enr_courses){
        enrollment_list.push(course._id.code);
      }
      //console.log(enrollment_list);
      pendingListModel
        .find({'user': parseInt(5198786)})
        .populate('course_list._id')
        .exec(function(err,docs){
          if(err) return handleError(err);
          const pen_courses = docs[0].course_list
          courses_dto = [];
          var index = 1
          for (const course of pen_courses){
            let prerequisitiesCheck = prerequisitiesValidator(course._id.pre_courses, enrollment_list);
            //pen_courses[index].Prerequisities['isPre'] = prerequisitiesCheck;
            let course_single_dto = {id: index, CourseId: course._id.code, CourseName: course._id.name, 
                      CourseDescription:course._id.description, Prerequisities: course._id.pre_courses, 
                      isPre: prerequisitiesCheck, Prerequisities_Desc: course._id.prerequisites}
            courses_dto.push(course_single_dto);
            index ++;
          }
          res.json(courses_dto);
        })
    })
  });
})
  
// ----------------------------------------------------search course code and name---------------------
app.get('/api/search/:query', (req, res) => {
  const searchInfo = new Promise((resolve, reject) => {
    mongoose.connect(url+'coursetest')
    .then(
      () => {
        console.log('Database connect')
      },
      err => { console.log(err) }
    )

    courseModel
    .find({'full_name': new RegExp(req.params.query, 'i'), 'term': 2}, 'full_name description')
    .exec(function(err, docs){
      if (err) {
        console.log(err);
      }
      //console.log('docs', docs);
      mongoose.disconnect();
      resolve(docs)
    })
    }) // promise end
  searchInfo.then(result => {
    return res.json(result);
  })
})

// ----------------------------------------------------Insert the pending courses into the database ---------------------

app.post('/api/pendinginsert/:uid', function(req, res){
  //console.log(req.body.pendinglist[0])
  let courseList = req.body.pendinglist
  // console.log(`req.body is`,courseList)
  // res.send(req.body);

  courseList.forEach(course => {
    console.log(course)
    enrollmentModel
    .findOneAndUpdate({'user': parseInt(req.params.uid)}, 
      {'$push': {'course_list': course }},
      { "new": true, "upsert": true })
      .exec(function(err, raw){
        if (err){
          console.log(err)
          res.sendStatus(500)
        }
        console.log(raw)
        //delete the enrolled course from pending list:
        pendingListModel
        .findOneAndUpdate({'user': parseInt(req.params.uid)},
        {'$pull': {'course_list': course}},
        {'new': true, "upsert": true })
        .exec(function(err,raw){
          if(err){
            console.log(err)
            res.sendStatus(500)
          }
          console.log(raw)
        })
      })
  });
  return res.status(200).json({status:"ok"})
});


// ----------------------------------------------------checking prerequisities for pendinglist---------------------
function prerequisitiesValidator (Prerequisities, Enrollment){
  // arg Prerequisities should be in this format:
  // Prerequisities = {"code":{"1": ["COMP9021", "COMP9024"],"2": ["COMP9020", "COMP9024"]},"UOC": 0}
  let canBeEnrolled = false;
  //console.log(Prerequisities.code, Enrollment);
  if (Prerequisities.code[1].length === 0 && Prerequisities.code[2].length === 0){
    //console.log('1');
    canBeEnrolled = true;
  }else if(Prerequisities.code[1].length >= 1 && Prerequisities.code[2].length === 0){
    //console.log('2');
    for(let course of Prerequisities.code[1]){
      if(Enrollment.includes(course)){
        canBeEnrolled = true;
        break;
      }
    }
  }else if(Prerequisities.code[1].length === 0  && Prerequisities.code[2] >= 1){
    //console.log('3');
    for(let course of Prerequisities.code[2]){
      if(Enrollment.includes(course)){
        canBeEnrolled = true;
        break;
      }
    }
  }else if(Prerequisities.code[1].length >= 1 && Prerequisities.code[2].length >=1 ){
    //console.log('4');
    let validatorCodeList1 = false;
    let validatorCodeList2 = false;
    for(let course of Prerequisities.code[1]){
      if(Enrollment.includes(course)){
        canBeEnrolled = true;
        break;
      }
    }
    for(let course of Prerequisities.code[2]){
      if(Enrollment.includes(course)){
        canBeEnrolled = true;
        break;
      }
    }
    if(validatorCodeList1 === true && validatorCodeList2 === true){
      canBeEnrolled = true;
    }
  }
  return canBeEnrolled;
}




const port = 5000;

app.listen(port, () => `Server running on port ${port}`);