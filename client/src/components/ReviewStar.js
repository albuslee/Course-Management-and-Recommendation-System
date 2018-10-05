import React, { Component } from 'react';

 
class ReviewStar  extends  Component{

    constructor(props){
        super(props);
        this.state = {
            review: this.props.index,
        }
    }

    componentDidMount(){
        let scope = document.getElementsByClassName(this.state.review);       
        for (let id = 0; id < scope.length; id++){
            
            let aSpan=scope[id].getElementsByClassName("star")[0];
            let aStxt=scope[id].getElementsByClassName("star-txt")[0];
            let aBstar=aSpan.getElementsByTagName("b");
            let arrBtxt=["Bad","Poor","Normal","Good","Perfect"];
            const CourseStars = this.props['CourseStar'];     
            aStxt.innerHTML=arrBtxt[CourseStars];
                for(let i=0;i<CourseStars;i++){
                    aBstar[i].style.backgroundPosition="0 0";
                }                   
        }
    }

    render(){

        return(
            <div className={this.state.review}>
                <span className="star">
                    <b className="ct-star  ic-star-off"></b>
                    <b className="ct-star  ic-star-off"></b> 
                    <b className="ct-star  ic-star-off"></b>
                    <b className="ct-star  ic-star-off"></b>
                    <b className="ct-star  ic-star-off"></b>
                </span>
                <span className="star-txt"></span>
            </div>
        );

    }

}


export default ReviewStar;