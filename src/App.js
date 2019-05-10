import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_store/_actions';
import { PrivateRoute } from './components/PrivateRoute';
//import { Login } from './views/Pages/Login/Login';
//import { Dashboard } from './views/Dashboard/Dashboard';
import routes from './routes';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login/Login'));
//const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));


class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });

  }
  // <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />

  render() {
    // const { alert } = this.props;
    //const currentUser = localStorage.getItem('user');
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch history={history}>

          <Route exact path="/login" name="Login" render={props => <Login {...props} />} />

          <PrivateRoute path="/" component={props => <DefaultLayout {...props} />} />


            {routes.map((route, idx) => {
               return <PrivateRoute
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={props => (
                    <route.component {...props} />
                  )} />

              })}

          </Switch>
        </React.Suspense>
      </BrowserRouter>
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
