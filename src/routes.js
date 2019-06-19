import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));

// -----------------------------
const Usuarios = React.lazy(() => import('./views/Users/Usuarios'));
const Produtos = React.lazy(() => import('./views/Produtos/Produtos'));
const Ramos = React.lazy(() => import('./views/Pages/Ramos/Ramos'));
const Estabelecimentos = React.lazy(() => import('./views/Pages/Estabelecimentos/Estabelecimentos'));
const UsuariosEstabelecimentos = React.lazy(() => import('./views/Pages/UsuariosEstabelecimentos/UsuariosEstabelecimentos'));
const Categorias = React.lazy(() => import('./views/Pages/Categorias/Categorias'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/usuarios', name: 'Usuários', component: Usuarios },
  { path: '/produtos', name: 'Produtos', component: Produtos },
  { path: '/ramos', name: 'Ramos', component: Ramos },
  { path: '/categorias', name: 'Categorias', component: Categorias },
  { path: '/estabelecimentos', name: 'Estabelecimenttos', component: Estabelecimentos },
  { path: '/usuarios-estabelecimentos', name: 'Usuários Estabelecimento', component: UsuariosEstabelecimentos }


];

export default routes;
