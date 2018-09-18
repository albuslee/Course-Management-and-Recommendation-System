import React, { Component } from 'react';

class CourseCard extends Component {
	constructor(props){
		super(props)
		this.state = {
				index: this.props.index,
				full_name: this.props.full_name,
				description: this.props.description,
				star: this.props.star,
		}
	}

  render() {
    return (
      <div>
        
        <ul>
						<li>
							<div className="course_detail">
								<span className="course_id">{this.props.full_name}</span>
								<span className="course_description">{this.props.description}</span>
								<div className="rank">
									<span className="course_rank">{this.props.star}</span>
									<img src={require("../img/stars.png")} alt='star' className="rank_star"></img>
								</div>
								<button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
							</div>
							
						</li>
					</ul>

      </div>
    )
  }
}

CourseCard.defaultProps = {
	star: 0,
}

export default CourseCard
