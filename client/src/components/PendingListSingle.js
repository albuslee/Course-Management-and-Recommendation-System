import React, { Component } from 'react';
import { fail } from 'assert';


class PendingListSingle extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index,
            CourseId: this.props.CourseId,
            CourseName: this.props.CourseName,
            CourseDescription: this.props.CourseDescription,
            isChecked : true,
            prerequisiteChecked: this.props.prerequisiteChecked,
            prerequisiteDesc: this.props.prerequisiteDesc
        }
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        if(this.state.prerequisiteChecked === false){
            document.getElementById(this.props.index).disabled = true;
        }
        // fetch('api/')

        // fetch('api/user/' + username)
        // .then(res => res.json())
        // .then(json => this.setState({
        //     name : `${json.username.first_name + ' ' + json.username.last_name}`,
        //     email: `${json.username.email}`,
        //     current_sem: `2018 S${json.username.currentTerm}`
        // }))
        // .catch((err) => {
        //     console.log(`Opz, something wrong, the error message is ${err}`);
        // });
    }

    handleClick = () => {
        // console.log(this.state.isChecked);
        this.setState({
            isChecked: !this.state.isChecked,
        });
        // console.log(this.state.isChecked);
        this.props.handleChangeClick(this.state.isChecked);
    }

    render() {
        const failPrerequisite = <h4 style={{color:'#ff4d4d'}}>Can not enroll! You probably need to check if you satisfy the prerequisite: {this.props.prerequisiteDesc.slice(14)}</h4>
        return (
            <tr>
                <td width="5%"><input type="checkbox" id={this.props.index} name=""  onClick={this.handleClick}/></td>
                <td width="10%" id="CourseID">{this.props.CourseId}</td>
                <td width="12%" id="CourseName">{this.props.CourseName}</td>
                <td width="65%" id="CourseDescription">{this.props.prerequisiteChecked ? this.props.CourseDescription : failPrerequisite}</td>
            </tr>
        )
    }
}

export default PendingListSingle;