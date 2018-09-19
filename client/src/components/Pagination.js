import React, { Component } from 'react'

class Pagination extends Component {
	constructor(props){
		super(props)
		this.state = {
			nb_of_pages: this.props.nb_of_pages,
			current_page: this.props.current_page,
			pre_button: false,
			next_button: false,
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentWillMount(){
		let pre_button = (this.state.current_page === 1)? true : false;
		let next_button = (this.state.current_page === this.state.nb_of_pages)? true: false;
		this.setState({
			pre_button: pre_button,
			next_button: next_button,
		})
		console.log(pre_button, next_button)
	}

	handleClick(type){
		this.setState( prevState => {
			return {current_page: type==='next'? prevState.current_page + 1 : prevState.current_page - 1}
		})
		this.props.onUserClick(this.state.current_page);
	}

  render() {
		
    return (
      <div>

        <div className="pages">
					<button type="button" className="previous_page" disabled={this.state.pre_button} onClick={this.handleClick.bind(this, 'previous')}>&lt;</button>
					<button type="submit" className="page1" disabled="true">{this.state.current_page}</button>
					{/* <button type="submit" className="page2">2</button>
					<button type="submit" className="page3">3</button> */}
					<button type="button" className="next_page" disabled={this.state.next_button} onClick={this.handleClick.bind(this, 'next')}>&gt;</button>
				</div>

      </div>
    )
  }
}

export default Pagination
