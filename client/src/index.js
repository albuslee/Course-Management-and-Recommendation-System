import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';

//import routers
import LoginPage from './Pages/LoginPage';
import StudentProfilePage from './Pages/StudentProfilePage';
import courseenrolmentPage from './Pages/courseenrolmentPage';
import coursereviewPage from './Pages/coursereviewPage';
import PendingListPage from './Pages/PendingListPage';
import NotFound from './Pages/NotFound';    //TODO : 404 bug need to fix


//routers controller
const AppRouter = () => 
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {LoginPage} />
            <Route exact path="/studentprofile" component={StudentProfilePage} />
            <Route exact path="/pendinglist" component={PendingListPage} />
            <Route exact path="/courseenrolment" component={courseenrolmentPage} />
            <Route exact path="/coursereview" component={coursereviewPage} />
            {/* <Route component= {NotFound} /> */}
        </Switch>
    </BrowserRouter>


ReactDOM.render(
    <AppRouter />, document.getElementById('root')
)

registerServiceWorker();
