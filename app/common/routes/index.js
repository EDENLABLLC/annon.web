import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';

import ApiListPage from 'containers/pages/ApiListPage';
import ExamplePage from 'containers/pages/ExamplePage';
import ApiCreatePage from 'containers/pages/ApiCreatePage';

import App from 'containers/layouts/App';
import MainLayout from 'containers/layouts/Main';

export const configureRoutes = ({ store }) => { // eslint-disable-line
  return (
    <Route path="/" component={App}>
      <Route component={MainLayout}>
        <IndexRedirect to="apis" />
        <Route path="example" component={ExamplePage} />

        <Route path="/apis">
          <IndexRoute component={ApiListPage} />
          <Route path="create" component={ApiCreatePage} />
        </Route>
      </Route>
    </Route>
  );
};
