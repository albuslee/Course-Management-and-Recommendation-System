import React, { PropTypes, Component } from 'react';

 
class ReviewStar  extends  Component{

    constructor(props){
        super(props);
        this.state = {
            CourseCode: this.props.CourseCode,
            CourseStars: this.props.CourseStar,                                           // the star given by user.
        }
    }

    componentDidMount(){
        var scope = document.getElementsByClassName("review");      
        for (var id = 0; id < scope.length; id++){
            let aSpan=scope[id].getElementsByClassName("star")[0];
            let aStxt=scope[id].getElementsByClassName("star-txt")[0];
            let aBstar=aSpan.getElementsByTagName("b");
            var arrBtxt=["Bad","Poor","Normal","Good","Perfect"];
            //console.log(this.state.CourseStars);
            //this.CountStars = num + 1;
            aStxt.innerHTML=arrBtxt[this.state.CourseStars];
                for(var i=0;i<=this.state.CourseStars;i++){
                    aBstar[i].style.backgroundPosition="0 0";
                }                
            
        }
    }

    render(){
        return(
            <div className="review">
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