import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';

//import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

class CourseEnrolmentPage extends Component {
  
  render() {
    return (
      <div>
          <div className="Sbody">
          {/* <!-- Contact --> */}
          <div id="contact" className="section">
            <NavigationBar/>
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                {/* <!-- contact information --> */}
                <div className="section-header">
                  <h1>Course Enrollment</h1>
                </div>

                {/* <!-- Search&Result start --> */}
                <SearchResult/>
                {/* <!-- Search&Result End --> */}

                {/* <!-- contact information --> */}
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          {/* </div>
          <!-- /Contact --> */}
        </div>
      </div>
      </div>
    );
  }
}

export default CourseEnrolmentPage;