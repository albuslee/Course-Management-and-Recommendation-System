import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CourseCard extends Component {
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
							<div class="course_detail">
								<span class="course_id">{this.props.full_name}</span>
								<span class="course_description">{this.props.description}</span>
								<div class="rank">
									<span class="course_rank">{this.props.star}</span>
									<img src={require("../img/stars.png")} class="rank_star"></img>
								</div>
								<button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
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
