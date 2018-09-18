import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
        //filterText: this.props.filterText
    }
    this.handleChange = this.handleChange.bind(this);
}

  // componentDidUpdate(prevProps, prevState){
  //   if(this.props.filterText !== prevProps.filterText){
  //     this.handleChange();
  //   }
  // }

  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  render() {
    return (
      <div>
        <form className="search_bar">
          <input type="text" name="" className="search"
          placeholder="Search Course Code or Name..." value={this.props.filterText} ref='filterTextInput' onChange={this.handleChange}/>
          {/* <button type="submit" className="search_button"><i className="search_icon fa fa-search"></i></button> */}
        </form> 
        
      </div>
    )
  }
}

export default SearchBar
