//server.js is the main app.js for backend
//writing your api services in this page

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";
const app = express();

// import database external library
let courseModel = require('./DataModel/models/course.js');
let userModel = require('./DataModel/models/user.js');
let enrollmentModel = require('./DataModel/models/enrollment.js');


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


// the example given by author, no mongodb
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

// the backend and mongodb test
// can be used to do authentication and get studentprofile

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
  .then((haha) => {
    console.log(haha)
  })
  .catch((err) => {
    console.log(`Opz, something wrong, the error message is ${err}`);
  });
});




// get enrollment
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



// get courseReview
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
        reviewList.push({'code' : course._id.code, 'name': course._id.name, 'star':course.star});    
      });
      console.log(reviewList);
      resolve(reviewList);
      console.log('asfdsafsf');
      mongoose.disconnect();
    
    })
  })
  courseReview
    .then( reviewList => {
      return res.json(reviewList
      );
    })
});




//dummydata for test pending list

app.get('/api/courses', (req, res) => {
  const courses = [
    {id: 1, CourseId: 'COMP6324', CourseName: 'IoT Services Engineering', CourseDescription: 'This course aims to introduce the students to core concepts and practical skills for designing and engineering IoT services and applications. Specifically, the course aims to expose students to IoT business strategy, requirements, IoT technologies, solution design and implementation'},
    {id: 2, CourseId: 'COMP6714', CourseName: 'Info Retrieval and Web Search', CourseDescription: 'Information Retrieval: (a) Document modeling (b) Inverted index construction and compression (c)Vector space model and ranking methods (d) Probabilistic and language models (e) Evaluation methods (f) Relevance feedback and query expansion.Web Search: (a) Web search engine architecture (b) Web crawli'},
    {id: 3, CourseId: 'COMP9101', CourseName: 'Design &Analysis of Algorithms', CourseDescription: 'Techniques for design and performance analysis of algorithms for a variety of computational problems. Asymptotic notations, bounding summations, recurrences, best-case, worst-case and average-case analysis. Design techniques: divide-and-conquer, dynamic programming and memorisation, greedy strategy'}
  ];

  res.json(courses);
});

//search course code and name
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
    .find({'full_name': new RegExp(req.params.query, 'i')})
      .exec(function(err, docs){
        if (err) reject(err);
        console.log('docs', docs);
        mongoose.disconnect();
        resolve(docs)
      })
    }) // promise end
  searchInfo.then(result => {
    return res.json(result);
  })
})



const port = 5000;

app.listen(port, () => `Server running on port ${port}`);