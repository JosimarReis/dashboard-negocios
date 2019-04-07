import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { userActions } from "../../_store/_actions";




class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }


  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.firstName}!</h1>
        <p>You're logged in with React & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.data &&
          <ul>
            {users.data.map((user, index) =>
              <li key={user.id}>
                {user.nome +' ' + user.perfil}
              </li>
            )}
          </ul>
        }
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>

    );
  }
}

//export default Dashboard;

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

let connectedHomePage = connect(mapStateToProps)(Dashboard);
export { connectedHomePage as Dashboard };