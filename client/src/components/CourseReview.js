import React, { PropTypes, Component } from 'react';
import { Helmet } from "react-helmet";
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
        
        for (let course of data){
            console.log(course['id']);
        }
        //console.log(data);
        return (
            
            <div>
                
                {data.map( item => {
                    return(
                        <form action = "/" method = "POST" className = "course_review">
                            <h2>{item.id}</h2>
                            <table width="100%" class="zebra review_table">
                            <tr>
                                <td width="10%" id="CourseID">{item.code}</td>
                                <td width="70%" id="CourseDitails">{item.name}</td>
                                <td width="20%" id="Star">
                                    <ReviewStar/> 
                                </td>	
                            </tr>
                            </table>
                        </form>
                    )
                })}

            </div> 
        );
    }
  }

  export default CourseReview;