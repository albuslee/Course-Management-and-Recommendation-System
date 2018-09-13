//import React, { Component } from 'react';
//class PendingListPage extends Component {

//Done

import React, {Component} from 'react';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import { Helmet } from "react-helmet";
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import PendingListPage from '../components/PendingListPage'





const Pending_list= (props) => 

    
		<div class="Sbody">
    			<div id="contact" class="section">
          <iframe src="navigationbar.html" width="100%" height="110px" frameborder="0" scrolling="no" name="navigationbar"></iframe>
             <div class="container">
                <div class="row">
                  <h1>Pending Course List</h1>
                  <form action="/" method="POST" class="pending_list">
                    <table width="100%" class="zebra pending_table">

                    <tr>

									    <td width="5%"><input type="checkbox" name="" value=""/></td>
									    <td width="20%" id="CourseID">this.state.Id</td>
									    <td width="75%" id="CourseDitails">CourseDitails</td>
										
								    </tr>
                    <tr>
									<td width="5%"><input type="checkbox" name="" value=""/></td>
									<td width="20%" id="CourseID">CourseID</td>
									<td width="75%" id="CourseDitails">CourseDitails</td>
									
								</tr>
								<tr>
									<td width="5%"><input type="checkbox" name="" value=""/></td>
									<td width="20%" id="CourseID">CourseID</td>
									<td width="75%" id="CourseDitails">CourseDitails</td>
										
								</tr>
								<tr>
									<td width="5%"><input type="checkbox" name="" value=""/></td>
									<td width="20%" id="CourseID">CourseID</td>
									<td width="75%" id="CourseDitails">CourseDitails</td>
										
								</tr>                    
                    </table>
                <div class="button_part">
								    <button type="submit" class="button">Proceed to Enroll</button>
								    <a href="CourseEnrollment.html" class="button">Back</a>
							</div>                    

                  </form>

                </div>

             </div>
          </div>
    </div>



class PendingListPage extends React.Component {
  constructor(){
    super();
    this.state= {
      ID:"",
      CourseName:""
		}
  }


componentWillMount(props){
  fetch('/api/courses')
  .then(response => response.json())
  .then(json=> {
      this.setState({Id: `${json.ID}`, course_name: `${json.CourseName}`});
      console.log(this.state);          
  })
  .catch((err) => {
    console.log(`Opz, something wrong, the error message is ${err}`);
  });
}



render() {
    return (
      <div>
        <Pending_list/> 
       <PendingListPage/>       
      </div>
  );
  }
}
export default PendingListPage;


