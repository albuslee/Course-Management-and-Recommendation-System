import React, { Component } from 'react';
import ReviewStarDynamic from './ReviewStarDynamic';


 
class ReviewFormDynamic  extends  Component{

    constructor(props){
        super(props);
        this.state = {
            CourseCode: this.props.CourseCode,
            CourseStars: this.props.CourseStar,
            CourseName: this.props.CourseName,
            CourseTerm: this.props.CourseTerm,
            CountStars: 0,                                          
        }
    }

    getStars(star) {
        this.props.onStar(this.state.CourseCode,star,this.state.CourseTerm);
    }

    
    render(){
        return(
            <div className="review_dynamic">

                <tr>
                    <td width="10%" id="CourseID">{this.state.CourseCode}</td>
                    <td width="70%" id="CourseDitails">{this.state.CourseName}</td>
                    <td width="20%" id="Star">
                    <ReviewStarDynamic key={this.state.CourseCode} index ={this.state.CourseCode}  CourseStars={this.state.CourseStars} onStar={this.getStars.bind(this)}/>
                    
                    </td>	
                </tr> 
            
            </div>
        );

    }

}


export default ReviewFormDynamic;