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
        this.handleChangeClick = this.handleChangeClick.bind(this);
    }


    // app.get('/api/pendinglist/:uid', (req, res) => {
    //     const courses = [
    //       {id: 1, CourseId: 'COMP9024', CourseName: 'IoT Services Data Structures & Algorithms', CourseDescription: 'Data types and data structures: abstractions and representations; lists, stacks, queues, heaps, graphs; dictionaries and hash tables; search trees; searching and sorting algorithms'},
    //       {id: 2, CourseId: 'COMP9417', CourseName: 'Machine Learning & Data Mining', CourseDescription: 'Machine learning is the algorithmic approach to learning from data. This course covers the key techniques in data mining technology, gives their theoretical background and shows their application. Topics include: decision tree algorithms (such as C4.5), regression and model tree algorithms, neural network'},
    //       {id: 3, CourseId: 'COMP9101', CourseName: 'Design &Analysis of Algorithms', CourseDescription: 'Techniques for design and performance analysis of algorithms for a variety of computational problems. Asymptotic notations, bounding summations, recurrences, best-case, worst-case and average-case analysis. Design techniques: divide-and-conquer, dynamic programming and memorisation, greedy strategy'}
    //     ];
      
    //     res.json(courses);
    //   });


    componentWillMount(){
        fetch(`/api/pendinglist/${localStorage.getItem('session-username').slice(1,-1)}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let defauleToggledCourses = {};
            for (const course of json) {
                defauleToggledCourses[course.id] = false;
            }
            this.setState({
                pendingCourseObj : json,
                toggledCourses : defauleToggledCourses
            })
            console.log(this.state); //done
        })
    }

    renderCourses() {
        return this.state.pendingCourseObj.map((Course) => (
            <PendingListSingle key={Course.id} index={Course.id} CourseId={Course.CourseId} CourseName={Course.CourseName} CourseDescription={Course.CourseDescription} prerequisiteChecked={Course.Prerequisities.isPre} prerequisiteDesc={Course.Prerequisities_Desc} handleChangeClick={this.handleChangeClick.bind(this, Course.id)}/>
        ));
    }

    handleChangeClick(CourseId, isChecked) {
        //below is the code of updating the state for the toggled course in this.state.toggledcourses.
        console.log(CourseId, isChecked);
        let newState = Object.assign({}, this.state)
        newState.toggledCourses[CourseId] = isChecked;
        this.setState(newState);
        console.log(this.state.toggledCourses);
    }

    proceedToEnroll(e) {
        e.preventDefault();
        // console.log(this.state);
    }

    render() {
        console.log(this.state.pendingCourseObj);
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
