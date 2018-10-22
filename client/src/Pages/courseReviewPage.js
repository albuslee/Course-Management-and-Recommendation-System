import React, { Component } from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

import NavigationBar from '../components/NavigationBar';
import CourseReview from '../components/CourseReview';

// basic page structure  
const CourseReviewBackground = () => 
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
                    
                </div>
                {/* <!-- /row --> */}

            </div>
            {/* <!-- /container --> */}

        </div>
        {/* <!-- /Contact --> */}
    </div>

class CourseReviewPage extends Component {
  render() {
    return (
      <div>    
        <CourseReviewBackground/>
      </div>
    );
  }
}

export default CourseReviewPage;






