import React, { Component } from 'react';
import './App.scss';

import { Route, Router } from 'react-router-dom';

import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_store/_actions';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './views/Pages/Login/Login';
import { Dashboard } from './views/Dashboard/Dashboard';

//const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

//const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
//const Login = React.lazy(() => import('./views/Pages/Login/Login'));


class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });

  }

  render() {
    const { alert } = this.props;
    return (
        <div className="jumbotron">
          <div className="container">
            <div className="col-sm-8 col-sm-offset-2">
              {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Router history={history}>
                <div>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/login" component={Login} />
                </div>
              </Router>
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
