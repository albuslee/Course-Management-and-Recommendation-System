import React, { Component } from 'react';

 
class ReviewStarDynamic  extends  Component{

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
            let arrBtxt=["No Mark","Bad","Poor","Normal","Good","Perfect"];
            let num=0;
            let onOff=true;
            const CourseStars = this.props.CourseStars;
            
            aStxt.innerHTML=arrBtxt[CourseStars];
                for(let i=0;i<CourseStars;i++){
                    aBstar[i].style.backgroundPosition="0 0";
                }

            for(let i= 0;i<aBstar.length;i++){
                aBstar[i].index=i;
                aBstar[i].onmouseover=function(){
                    if(onOff) {
                        num = this.index;
                        aStxt.innerHTML = arrBtxt[num+1];
                        for (let i = 0; i <=this.index; i++) {
                            aBstar[i].style.backgroundPosition = "0 0";
                        }
                    }
                };

                aBstar[i].onmouseout=function(){
                    if(onOff){
                        aStxt.innerHTML="";
                        for(let i=0;i<=4;i++){
                            aBstar[i].style.backgroundPosition="-39px 0";
                        }
                    }
                    };

                aBstar[i].onclick=function(){
                    onOff=false;
                    aStxt.innerHTML="";
                    for(let i=0;i<aBstar.length;i++){
                        aBstar[i].style.backgroundPosition="-39px 0";
                    }
                    num = this.index ;
                    //CountStars = num + 1;
                    aStxt.innerHTML=arrBtxt[num+1];
                    for(let i=0;i<=this.index;i++){
                        aBstar[i].style.backgroundPosition="0 0";
                    }
                };
            }
         
        }
        
    }

    onClick(type) {
        let countStars = 0;
        if (type === '1'){
            countStars = parseInt(type);
        }else if (type === '2'){
            countStars = parseInt(type);
        }else if (type === '3'){
            countStars = parseInt(type);
        }else if (type === '4'){
            countStars = parseInt(type);
        }else if (type === '5'){
            countStars = parseInt(type);
        }
        this.props.onStar(countStars);
        
    }

    

    render(){
        return(
            <div className={this.state.review} id="review_star_style">
                <span className="star">
                    <b className="ct-star  ic-star-off" onClick={this.onClick.bind(this, '1')}></b>
                    <b className="ct-star  ic-star-off" onClick={this.onClick.bind(this, '2')}></b> 
                    <b className="ct-star  ic-star-off" onClick={this.onClick.bind(this, '3')}></b>
                    <b className="ct-star  ic-star-off" onClick={this.onClick.bind(this, '4')}></b>
                    <b className="ct-star  ic-star-off" onClick={this.onClick.bind(this, '5')}></b>
                </span>
                <span className="star-txt"></span>
            </div>
        );

    }

}


export default ReviewStarDynamic;
