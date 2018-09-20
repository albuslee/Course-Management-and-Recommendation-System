import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
// import { Link } from 'react-router-dom';

import PendingListSingle from "../components/PendingListSingle";

class PendingListForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            pendingCourseObj: [],
            toggledCourses: {},
        };
        this.handleChangeClick = this.handleChangeClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        fetch(`/api/pendinglist/${localStorage.getItem('session-username').slice(1,-1)}`)
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            let defauleToggledCourses = {};
            for (const course of json) {
                defauleToggledCourses[course.id] = false;
            }
            this.setState({
                pendingCourseObj : json,
                toggledCourses : defauleToggledCourses
            })
            // console.log(this.state); //done
        })
        //.then(console.log(this.state));
    }

    renderCourses() {
        return this.state.pendingCourseObj.map((Course) => (
            <PendingListSingle key={Course.id} index={Course.id} CourseId={Course.CourseId} CourseName={Course.CourseName} 
            CourseDescription={Course.CourseDescription} prerequisiteChecked={Course.isPre} prerequisiteDesc={Course.Prerequisities_Desc} 
            handleChangeClick={this.handleChangeClick.bind(this, Course.id)}/>
        ));
    }

    handleChangeClick(CourseId, isChecked) {
        //below is the code of updating the state for the toggled course in this.state.toggledcourses.
        // console.log(CourseId, isChecked);
        let newState = Object.assign({}, this.state)
        newState.toggledCourses[CourseId] = isChecked;
        this.setState(newState);
        console.log(this.state.toggledCourses);
    }

    handleSubmit(e) {
        e.preventDefault();
        var enroll_course_list = [];
        for(var key in this.state.toggledCourses){
            console.log(this.state.toggledCourses[key], this.state.pendingCourseObj[key-1].CourseId)
            if(this.state.toggledCourses[key] === true){
                enroll_course_list.push({'_id' : '2' + this.state.pendingCourseObj[key-1].CourseId})
            }
        }
        var url = `http://127.0.0.1:5000/api/pendinginsert/5198786`;
        var data = {pendinglist: enroll_course_list};

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
        console.log(enroll_course_list);
    }

    render() {
        console.log(this.state)
        return (
            <form className="pending_list">
                 <table width="100%" className="zebra pending_table">
                    <tbody>
                        {this.renderCourses()}
                    </tbody>                  
                </table>
                        
                <div className="button_part">
					<button onClick={this.handleSubmit} className="button">Proceed to Enroll</button>
						<a href="/studentprofile" className="button">Back</a>
				</div>                    

            </form>
        )
    }


}

export default PendingListForm;
