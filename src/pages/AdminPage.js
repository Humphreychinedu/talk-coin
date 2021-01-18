import React, { Component } from 'react';
import { withFirebase } from '../components/firebasemodule'
import UserList from '../components/usermanagement/UserList';

class AdminPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            users: []
        }
    }

    componentDidMount() {
        this.setState({loading:true});
        // this.props.firebase.users2().on('value', snapshot => {
        //     console.log(snapshot.val());
        // })
        this.props.firebase.users().on('value', snapshot => {
            console.log(snapshot.val());
          const usersObject = snapshot.val();
          const userList = Object.keys(usersObject).map(key => ({
              ...usersObject[key],
              uid:key,
          }))
            this.setState({
                users:userList,       
                loading: false});
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
    return(<div>
        <h1>Admin</h1>
        <UserList users={this.state.users}/>
        </div>);
}
}

export default withFirebase(AdminPage);