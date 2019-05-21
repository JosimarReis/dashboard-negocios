import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import { connect } from 'react-redux';
import { userActions } from "../../_store/_actions";


import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Carregando...</div>

  signOut(e) {
    e.preventDefault()
    this.props.onLogout();
    this.props.history.push('/login')
  }

  alterarUsuario = (pass, formUpload = false) => {

    if (this.props.users.pass) this.props.onPass()
    if (this.props.users.userFormShow) this.props.onShowForm()
    if (this.props.users.userFormImage) this.props.onFormUpload()

    if (pass) {
      this.props.onPass()
      this.props.onShowForm()
    }

    if (formUpload)
      this.props.onFormUpload()

    if (!pass && !formUpload) this.props.onShowForm()

    this.props.onPopularUser(this.props.user)
    this.props.history.push('/usuarios')

  }


  render() {

    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} onAlterarUsuario={this.alterarUsuario} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                     /**  (route.name === 'Usuários' && usuario.perfil === "ROLE_USER") ?
                        <Redirect from="/" to="/" />
                        :*/ <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />

                    ) : (null);
                  })}

                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

//export default DefaultLayout;

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onShowForm: () => dispatch(userActions.showForm()),
    onPass: () => dispatch(userActions.pass()),
    onFormUpload: () => dispatch(userActions.formUpload()),
    onPopularUser: user => dispatch(userActions.userGet(user)),
    onImagemUpload: user => dispatch(userActions.imagemUpload(user)),
    onLogout: () => dispatch(userActions.logout())

  }
}
//let connectedHomePage = connect(mapStateToProps)(Dashboard);
//export { connectedHomePage as Dashboard };
export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
