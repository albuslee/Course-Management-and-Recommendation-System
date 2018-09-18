import React, { Component } from 'react'

import SearchBar from './SearchBar';
import CourseCard from './CourseCard';

export class SearchResult extends Component {
	constructor(props){
		super(props)
		this.state = {
				index: null,
				CourseId: null,
				CourseName: null,
				CourseDescription: null,
				star: null,
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
    return (
      <div>

				<SearchBar/>
        <div className="section-header">
					<h2 className="notice">Here is some course recommand to you:</h2>
				</div>
        <div className="search_result">
					<form action="/" method="post" className="enroll">
						<CourseCard/>
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
