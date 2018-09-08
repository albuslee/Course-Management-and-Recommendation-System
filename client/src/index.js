import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';

//import routers
import LoginPage from './Pages/loginPage';
import StudentProfilePage from './Pages/studentProfilePage';
import courseenrolmentPage from './Pages/courseenrolmentPage';
import coursereviewPage from './Pages/coursereviewPage';
import pendinglistpage from './Pages/pendinglistpage';
import NotFound from './Pages/NotFound';

//routers controller
const AppRouter = () => 
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {LoginPage} />
            <Route path="/studentprofile" component={StudentProfilePage} />
            <Route path="/pendinglist" component={pendinglistpage} />
            <Route path="/courseenrolment" component={courseenrolmentPage} />
            <Route path="/coursereview" component={coursereviewPage} />
            <Route component= {NotFound} />
        </Switch>
    </BrowserRouter>


ReactDOM.render(
    <AppRouter />, document.getElementById('root')
)

registerServiceWorker();
