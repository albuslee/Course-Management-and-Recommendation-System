import React, { PropTypes, Component } from 'react';

 
class reviewStar  extends  Component{

    constructor(props){
        super(props);
        this.state = {
            CountStars: 0,                                            // the star given by user.
        }
    }

    componentDidMount(){
        var scope = document.getElementsByClassName("review");
        //console.log(scope[id]);
        for (var id = 0; id < scope.length; id++){
            let aSpan=scope[id].getElementsByClassName("star")[0];
            let aStxt=scope[id].getElementsByClassName("star-txt")[0];
            let aBstar=aSpan.getElementsByTagName("b");
            var arrBtxt=["Bad","Poor","Normal","Good","Perfect"];
            var num=0;
            let onOff=true;
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
                    this.CountStars = num + 1;
                    console.log(this.CountStars);
                    aStxt.innerHTML=arrBtxt[num];
                    for(var i=0;i<=this.index;i++){
                        aBstar[i].style.backgroundPosition="0 0";
                    }
                };
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


export default reviewStar;