import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
// import reviewStar from '../components/ReviewStar';

class courseReview extends Component {

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
								enrollment: [...this.state.enrollment, {'code': course.code, 'name': course.name}],
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
                
                {data.map( item => {
                    return(
                        <tr>
                            <td width="10%" id="CourseID">{item.code}</td>
                            <td width="70%" id="CourseDitails">{item.name}</td>
                            <td width="20%" id="Star">
                                <reviewStar/> 
                            </td>	
                        </tr>
                    )
                })}

            </div> 
        );
    }
  }

  export default courseReview;