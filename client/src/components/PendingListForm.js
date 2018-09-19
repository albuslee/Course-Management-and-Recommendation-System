import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom';

import PendingListSingle from "../components/PendingListSingle";

class PendingListForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            // pendingCourseObj: [{"id":1,"CourseId":"COMP6324","CourseName":"IoT Services Engineering","CourseDescription":"This course aims to introduce the students to core concepts and practical skills for designing and engineering IoT services and applications. Specifically, the course aims to expose students to IoT business strategy, requirements, IoT technologies, solution design and implementation"},{"id":2,"CourseId":"COMP6714","CourseName":"Info Retrieval and Web Search","CourseDescription":"Information Retrieval: (a) Document modeling (b) Inverted index construction and compression (c)Vector space model and ranking methods (d) Probabilistic and language models (e) Evaluation methods (f) Relevance feedback and query expansion.Web Search: (a) Web search engine architecture (b) Web crawli"},{"id":3,"CourseId":"COMP9101","CourseName":"Design &Analysis of Algorithms","CourseDescription":"Techniques for design and performance analysis of algorithms for a variety of computational problems. Asymptotic notations, bounding summations, recurrences, best-case, worst-case and average-case analysis. Design techniques: divide-and-conquer, dynamic programming and memorisation, greedy strategy,"}]
            pendingCourseObj: [],
            toggledCourses: {},
        };
    }

    componentWillMount(){
        fetch('/api/courses')
        .then(res => res.json())
        .then(json => {
            this.setState({
                pendingCourseObj : json
            })
        })
        //.then(console.log(this.state));
    }

    renderCourses() {
        return this.state.pendingCourseObj.map((Course) => (
            <PendingListSingle key={Course.id} index={Course.id} CourseId={Course.CourseId} CourseName={Course.CourseName} CourseDescription={Course.CourseDescription} handleChangeClick={this.handleChangeClick.bind(this, Course.id)}/>
        ));
    }

    handleChangeClick(CourseId, isChecked) {
        console.log(CourseId, isChecked);
    }

    proceedToEnroll(e) {
        e.preventDefault();
        // console.log(this.state);
    }

    render() {
        return (
            <form action="/" method="POST" className="pending_list">
                 <table width="100%" className="zebra pending_table">
                    <tbody>
                        {this.renderCourses()}
                    </tbody>                  
                </table>
                        
                <div className="button_part">
					<button type="submit" className="button">Proceed to Enroll</button>
						<a href="/" className="button">Back</a>
				</div>                    

            </form>
        )
    }


}

export default PendingListForm;
