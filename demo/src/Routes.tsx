import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/layout';
import Login from './components/Login';

const Routes = () => (
  <Layout>
    <Route path="/auth/login" component={Login} exact />
  </Layout>
);

export default Routes;
