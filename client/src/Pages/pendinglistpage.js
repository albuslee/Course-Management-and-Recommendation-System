
import React, {Component} from 'react';
import { Helmet } from "react-helmet";
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import NavigationBar from '../components/NavigationBar';


const PendingListBackground= (props) => 
    
    
		<div className="Sbody">
    			<div id="contact" className="section">
             <div className="container">
                <div className="row">
                  <h2>Pending Course List</h2>
                  <form action="/" method="POST" className="pending_list">
                    <table width="100%" className="zebra pending_table">
                      <tbody>
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
                      </tbody>                  
                    </table>
                <div className="button_part">
								    <button type="submit" className="button">Proceed to Enroll</button>
								    <a href="CourseEnrollment.html" className="button">Back</a>
							</div>                    

                  </form>

                </div>

             </div>
          </div>
    </div>



class PendingListPage extends Component {
  constructor(){
    super();
    this.state= {
      id:"",
      courseName:""
		}
  }


// componentWillMount(props){
//   fetch('/api/courses')
//   .then(response => response.json())
//   .then(json => this.setState( { id: json.id , courseName: json.CourseName})
//   .catch((err) => {
//     console.log(`Opz, something wrong, the error message is ${err}`);
//   });
// }



render() {
    return (
      <div>
      <Helmet>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/* <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> */}

        <title>Pending List</title>

        {/* <!-- Google font --> */}
        <link href="https://fonts.googleapis.com/css?family=Lato:700%7CMontserrat:400,600" rel="stylesheet"/>

        {/* <!-- Bootstrap --> */}
        <link type="css" rel="stylesheet" href="css/bootstrap.min.css"/>

        {/* <!-- Font Awesome Icon --> */}
        <link rel="font" href="css/font-awesome.min.css"/>

        {/* <!-- Custom stlylesheet --> */}
        <link type="css" rel="stylesheet" href="css/style.css"/>

      </Helmet>

      <NavigationBar/>
      <PendingListBackground/>     
      </div>
  );
  }
}
export default PendingListPage;


