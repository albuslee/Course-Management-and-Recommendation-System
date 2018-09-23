import React, { PropTypes, Component } from 'react';

 
class ReviewStarDynamic  extends  Component{

    constructor(props){
        super(props);
        this.state = {

            CourseStars: this.props.CourseStars,
            
        }
    }

    componentDidMount(){
        var scope = document.getElementsByClassName("review");        
        for (var id = 0; id < scope.length; id++){
            
            let aSpan=scope[id].getElementsByClassName("star")[0];
            let aStxt=scope[id].getElementsByClassName("star-txt")[0];
            let aBstar=aSpan.getElementsByTagName("b");
            var arrBtxt=["Bad","Poor","Normal","Good","Perfect"];
            var num=0;
            let onOff=true;
            var CountStars = 0;

            for(var i= 0;i<aBstar.length;i++){
                aBstar[i].index=i;
                aBstar[i].onmouseover=function(){
                    if(onOff) {
                        num = this.index;
                        aStxt.innerHTML = arrBtxt[num];
                        for (var i = 0; i <=this.index; i++) {
                            aBstar[i].style.backgroundPosition = "0 0";
                        }
                    }
                };

                aBstar[i].onmouseout=function(){
                    if(onOff){
                        aStxt.innerHTML="";
                        for(var i=0;i<=this.index;i++){
                            aBstar[i].style.backgroundPosition="-39px 0";
                        }
                    }
                    };

                aBstar[i].onclick=function(){
                    onOff=false;
                    aStxt.innerHTML="";
                    for(var i=0;i<aBstar.length;i++){
                        aBstar[i].style.backgroundPosition="-39px 0";
                    }
                    num = this.index ;
                    CountStars = num + 1;
                    aStxt.innerHTML=arrBtxt[num];
                    for(var i=0;i<=this.index;i++){
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
            <div className="review">
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
