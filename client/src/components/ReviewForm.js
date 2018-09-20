import React, { PropTypes, Component } from 'react';
import ReviewStar from './ReviewStar';

 
class ReviewForm  extends  Component{

    constructor(props){
        super(props);
        this.state = {
            CourseCode: this.props.CourseCode,
            CourseStars: this.props.CourseStar,
            CourseName: this.props.CourseName,
            CountStars: 0,                                            // the star given by user.
        }
        //this.aaa = this.semesterTitleDivision_1.bind(this);
    }

    
    render(){
        return(
            <div>

                <tr>
                    <td width="10%" id="CourseID">{this.state.CourseCode}</td>
                    <td width="70%" id="CourseDitails">{this.state.CourseName}</td>
                    <td width="20%" id="Star">
                    <ReviewStar key={this.state.CourseCode} CourseCode={this.state.CourseCode} CourseStar={this.state.CourseStars} />
                    </td>	
                </tr> 
            
            </div>
        );

    }

}


export default ReviewForm;


