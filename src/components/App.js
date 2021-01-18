import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './nav/Navigation';
// import { withFirebase} from '../components/Firebase';
import  * as ROUTES  from '../constants/Paths';
import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import PasswordResetPage from '../pages/PasswordResetPage';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import AdminPage from '../pages/AdminPage';
import { withAuthentication } from '../session';


const App = () =>  {

        return(
    <div className='App'> 
        <h2> App</h2>
        <Router>
            <div>
                <Navigation />
                <hr/>
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordResetPage}/>
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route exact path={ROUTES.ADMIN} component={AdminPage} />

            </div>
        </Router>
</div>
    );
}
 
export default withAuthentication(App);