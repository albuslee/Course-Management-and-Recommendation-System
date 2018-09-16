import React, { Component } from 'react';


class PendingListSingle extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index,
            CourseId: this.props.CourseId,
            CourseName: this.props.CourseName,
            CourseDescription: this.props.CourseDescription,
            isChecked : true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log(this.state.isChecked);
        this.setState({
            isChecked: !this.state.isChecked,
        });
        console.log(this.state.isChecked);
        this.props.handleChangeClick(this.state.isChecked);
    }

    render() {
        return (
            <tr>
                <td width="5%"><input type="checkbox" name=""  onClick={this.handleClick}/></td>
                <td width="10%" id="CourseID">{this.props.CourseId}</td>
                <td width="12%" id="CourseName">{this.props.CourseName}</td>
                <td width="65%" id="CourseDescription">{this.props.CourseDescription}</td>
            </tr>
        )
    }
}

export default PendingListSingle;