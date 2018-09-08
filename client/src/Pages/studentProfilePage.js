import React, { Component } from 'react';
import { Helmet } from 'react-helmet'; 

class StudentProfile extends Component {

  render() {
    return (
      <div>
          <Helmet>
            <title>Course Enrollment System</title>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" type="css" href="../css/StudentProfile.css" />
          </Helmet>
        This is StudentProfile Page!
      </div>
    );
  }
}

export default StudentProfile;
