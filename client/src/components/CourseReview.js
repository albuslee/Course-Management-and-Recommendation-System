import React, { Component } from 'react';
import ReviewStar from '../components/ReviewStar';


class CourseReview extends Component {

    constructor(props){
        super(props);
        this.state = {
            enrollment: [],
        }
    }

    componentWillMount(props){
      let username = JSON.parse(localStorage.getItem('session-username'))
        fetch('/api/enrollment/' + username)
        .then(res => res.json())
        .then(json => {
                for ( let course of json){
                this.setState({
                    enrollment: [...this.state.enrollment, {'code': course.code, 'name': course.name, 'id': course._id[0]}],
                    
                    
                })
                }
        })
        .catch((err) => {
            console.log(`Opz, something wrong, the error message is ${err}`);
        });

    }

    
    render() {
        const data = this.state.enrollment;
        return (
            <div>   
                <form action = "/" method = "POST" className = "course_review">
                    <div className="section-header">
                        <h2>Semester 1</h2>
                    </div>
                    <table width="100%" className="zebra review_table">
                    <tbody>
                    {data.map((item, index) => {
                        return(
                            <tr>
                                <td width="10%" id="CourseID">{item.code}</td>
                                <td width="70%" id="CourseDitails">{item.name}</td>
                                <td width="20%" id="Star">
                                    <ReviewStar/> 
                                </td>	
                            </tr> 
                    )})}
                    </tbody>
                    </table>
                </form>  
            </div> 
        );
    }
  }

  export default CourseReview;