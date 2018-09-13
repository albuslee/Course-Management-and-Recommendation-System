//server.js is the main app.js for backend
//writing your api services in this page

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const app = express();


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
      dbo.collection("users").findOne({zid: parseInt(req.params.id)}, function(err, result){
        if (err) reject (err);
        db.close();
        resolve(result);
      });
    });
  });
  userInfo.then((result) => {
    //console.log(res);
    return res.json({username : result})    //// TEMP: need use "then" to load user's trasction, until both info loaded,then return to front-end.
  })
  .catch((err) => {
    console.log(`Opz, something wrong, the error message is ${err}`);
  });
});

// dummy data
app.get('/api/courses', (req, res) => {
  const courses = [
    {CourseId:'COMP9041', CourseName: 'Software Construct'},
    {CourseId: 'COMP9323', CourseName: 'Software as a Service Project '},
    {CourseId: 'COMP9900', CourseName: 'Information Technology Project'},
  ];

  res.json(courses);
});



const port = 5000;

app.listen(port, () => `Server running on port ${port}`);