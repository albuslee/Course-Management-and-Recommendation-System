import React, { Component } from 'react'

import SearchBar from './SearchBar';
import CourseCard from './CourseCard';

class SearchResult extends Component {
	constructor(props){
		super(props)
		this.state = {
			filterText: '',
			course_list: [{_id: '2COMP9024',full_name: 'COMP9024', description: 'fuckkkkkk'}]
		}
	}

	// componentWillMount(props){
	// 	let username = JSON.parse(localStorage.getItem('session-username'))
	// 		fetch('/api/enrollment/' + username)
	// 		.then(res => res.json())
	// 		.then(json => {
	// 				for ( let course of json){
	// 				this.setState({
	// 						enrollment: [...this.state.enrollment, {'code': course.code, 'name': course.name}],
	// 				})
	// 				}
	// 		})
	// 		.catch((err) => {
	// 			console.log(`Opz, something wrong, the error message is ${err}`);
	// 		});
	// }

	// componentDidUpdate(prevProps, prevState){
	// 	if(this.state.filterText !== prevState.filterText){
  //     this.getCourseResult();
  //   }
  // }

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
			})
		} else {
			this.setState({course_list: []})
		}
	}

	handleUserInput(filterText) {
		this.setState({
			filterText: filterText
		});
		this.getCourseResult(filterText)
	}

	renderCourseCard() {
		return this.state.course_list.map((course) => 
			<CourseCard key={course._id} full_name={course.full_name} description={course.description}/>
		)
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
					<form action="/" method="post" className="enroll">
						{this.renderCourseCard()}
						<div className="pages">
							<button type="submit" className="previous_page">&lt;</button>
							<button type="submit" className="page1">1</button>
							<button type="submit" className="page2">2</button>
							<button type="submit" className="page3">3</button>
							<button type="submit" className="next_page">&gt;</button>
						</div>
					</form>
				</div>

      </div>
    )
  }
}

export default SearchResult
