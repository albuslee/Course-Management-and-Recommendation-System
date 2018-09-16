import React, { Component } from 'react';
import { Helmet } from 'react-helmet'; 
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

import NavigationBar from '../components/NavigationBar';
import CourseReview from '../components/CourseReview';



class CourseReviewPage extends Component {
  render() {
    return (
      <div>    
        <div className = "Sbody">
        {/* <!-- Contact --> */}
          <div id = "contact" className = "section">
            <NavigationBar/>
            {/* <!-- container --> */}
            <div className = "container">
                {/* <!-- row --> */}
                <div className = "row">
                    {/* <!-- contact information --> */}
                    <div className="section-header">
                        <h1>Course Review</h1>
                    </div>
                    <CourseReview />

                    {/* <!-- contact information --> */}
                    <div className = "button_part">
                        <button type="submit" className = "button">Submit</button>
                        <a href="StudentProfile.html" className = "button">Back</a>
                    </div>
                </div>
                {/* <!-- /row --> */}

            </div>
            {/* <!-- /container --> */}

        </div>
        {/* <!-- /Contact --> */}
    </div>
        
      </div>
    );
  }
}

export default CourseReviewPage;