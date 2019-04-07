import React from 'react';
import { connect } from 'react-redux';
import { userActions } from "../../_store/_actions";




class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  logout = () => {
    this.props.dispatch(userActions.logout());
    this.props.history.push("/login");
  }


  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.nome}!</h1>
        <p>You're logged in with React & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.data &&
          <ul>
            {users.data.map((user, index) =>
              <li key={user.id}>
                {user.nome + ' ' + user.perfil}
              </li>
            )}
          </ul>
        }
        <p>
          <button onClick={() => this.logout()}>Logout</button>
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

//let connectedHomePage = connect(mapStateToProps)(Dashboard);
//export { connectedHomePage as Dashboard };
export default connect(mapStateToProps)(Dashboard);
