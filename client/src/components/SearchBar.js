import React, { Component } from 'react'

export class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
        
    }
}
  handleChange() {
    
  }

  render() {
    return (
      <div>
        <form action="/" method="POST" className="search_bar">
          <input type="text" name="search" className="search" id="search"
          placeholder="Search Course Code or Name..." onChange={this.handleChange}/>
          {/* <button type="submit" className="search_button"><i className="search_icon fa fa-search"></i></button> */}
        </form>
        
      </div>
    )
  }
}

export default SearchBar
