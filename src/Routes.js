import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import Main from './containers/Main';
import EditContainer from './containers/EditContainer';

const Routes = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="edit" component={EditContainer} />
    </Router>
  </div>
);

export default Routes;
