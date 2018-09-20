import React, { Component } from 'react'

import SearchBar from './SearchBar';
import CourseCard from './CourseCard';
import Pagination from './Pagination';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

class SearchResult extends Component {
	constructor(props){
		super(props)
		this.state = {
			filterText: '',
			course_list: [{_id: '2COMP9024',full_name: 'COMP9024', description: 'fuckkkkkk'}],
			nb_of_pages: null,
			start_index: 0,
			end_index: 8
		}
	}

	// use fetch method to get courses' result from database according to filtertext
	getCourseResult(filterText) {
		if(filterText.length !== 0){
			console.log(filterText)
			fetch('/api/search/' + filterText)
			.then(res => {
				let result = res.json()
				console.log(result)
				return result
			})
			.then(json => {
				this.setState({course_list: json})
				console.log(this.state.course_list)
				this.makePagination();
			})
		} else {
			this.setState({course_list: []})
		}
	}

	// get filterText from child component <SearchBar/>
	handleUserInput(filterText) {
		this.setState({
			filterText: filterText
		});
		this.getCourseResult(filterText)
	}

	// get specific course card from child component from <CourseCard/> based on current_page
	renderCourseCard(start_index, end_index) {
		if ( start_index === undefined && end_index === undefined){
			start_index = 0;
			end_index = 8;
		}
		console.log('start', start_index, 'end', end_index);
		return this.state.course_list.slice(start_index, end_index).map((course) => 
			<CourseCard key={course._id} full_name={course.full_name} description={course.description}/>
		)
	}

	// calulate number of pages
	makePagination() {
		const course_list = this.state.course_list;
		if ( course_list.length <= 8 ){
			this.setState({nb_of_pages: 1})
		} else {
			let nb_of_pages = Math.ceil(course_list.length / 8)
			console.log('nb_of_pages',nb_of_pages);
			this.setState({nb_of_pages: nb_of_pages});
		}
		//this.renderCourseCard(0, 8)
	}

	// get current_page from child component <Pagination/>
	handlePage(current_page) {
		this.setState({
			current_page: current_page
		})
		let start_index = (current_page - 1) * 8;
		let end_index = ( (start_index + 8) > this.state.course_list.length) ? this.state.course_list.length : (start_index + 8);
		this.setState({
			start_index: start_index,
			end_index: end_index
		})
	}

  render() {
    return (
      <div>

				<SearchBar 
					filterText={this.state.filterText} 
					onUserInput={this.handleUserInput.bind(this)} 
				/>
        <div className="section-header">
					<h2 className="notice">Here is some course recommand to you:</h2>
				</div>
        <div className="search_result">
					<form className="enroll">
						{this.renderCourseCard(this.state.start_index, this.state.end_index)}
						{/* Pagination Sector Start */}
						<Pagination 
						nb_of_pages={this.state.nb_of_pages}
						//current_page={this.state.current_page}
						onUserClick={this.handlePage.bind(this)}
						/>
						{/* Pagination Sector End */}
					</form>
				</div>

      </div>
    )
  }
}

export default SearchResult
