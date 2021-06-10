import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import RegisterPage from '../../components/auth/RegisterPage';
import LoginPage from '../../components/auth/LoginPage';
import ResetPwdPage from '../../components/auth/ResetPwdPage';
import Alert from '../../components/layout/Alert';
import CreatePostPage from '../../components/CreatePostPage/CreatePostPage';
import ViewPostPage from '../../components/ViewPostPage/ViewPostPage';
import Profile from '../../components/Profile/Profile';
import NotFound from '../../components/NotFoundPage/NotFound';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/resetpwd' component={ResetPwdPage} />
        <Route exact path='/viewpost/:car/:id' component={ViewPostPage} />
        <PrivateRoute exact path='/create-post' component={CreatePostPage} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;