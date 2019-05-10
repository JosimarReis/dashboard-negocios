import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));

// -----------------------------
const Usuarios = React.lazy(() => import('./views/Users/Usuarios'));
const Produtos = React.lazy(() => import('./views/Produtos/Produtos'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/usuarios', name: 'Usuários', component: Usuarios },
  { path: '/produtos/', name: 'Produtos', component: Produtos }


];

export default routes;
