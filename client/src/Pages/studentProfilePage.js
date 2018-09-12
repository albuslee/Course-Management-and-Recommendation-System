import React, { Component } from 'react';
import { Helmet } from 'react-helmet'; 
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

import NavigationBar from '../components/NavigationBar';


const StudentProfileBackground = () => {
  <div>
    <Helmet>
      <title>Student Profile</title>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=
      edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <title>Student Profile</title>

      <link type="text/css" rel="stylesheet" href="css/style.css"/>

      <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css"/>

      <link rel="stylesheet" href="css/font-awesome.min.css"/>
    </Helmet>
    {/* Write your background code here. */}
  </div>
}


class StudentProfile extends Component {

  render() {
    return (
      

      <div>
        {/* <StudentProfileBackground/> */}
        <NavigationBar/>
      </div>
      
    );
  }
}

export default StudentProfile;
