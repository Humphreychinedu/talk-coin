import React from 'react';
import { withAuthorization } from '../session/index';


const HomePage = () => {

    return(<div>HomePage
        <p>The Home Page is accessible by every signed in user</p>
    </div>);
}

const condition = authUser => !!authUser;



export default  withAuthorization(condition)(HomePage);