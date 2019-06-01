import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));

// -----------------------------
const Usuarios = React.lazy(() => import('./views/Users/Usuarios'));
const Produtos = React.lazy(() => import('./views/Produtos/Produtos'));
const Ramos = React.lazy(() => import('./views/Pages/Ramos/Ramos'));
const Estabelecimentos = React.lazy(() => import('./views/Pages/Estabelecimentos/Estabelecimentos'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/usuarios', name: 'Usuários', component: Usuarios },
  { path: '/produtos', name: 'Produtos', component: Produtos },
  { path: '/ramos', name: 'Ramos', component: Ramos },
  { path: '/estabelecimentos', name: 'Estabelecimenttos', component: Estabelecimentos }


];

export default routes;
