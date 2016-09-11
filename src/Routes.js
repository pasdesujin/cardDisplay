import React from 'react';
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router';
import Main from './containers/Main';
import EditContainer from './containers/EditContainer';

const Routes = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <IndexRedirect to="/" />
      <Route path="edit" component={EditContainer} />
    </Router>
  </div>
);

export default Routes;
