import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
import Loading from './components/Loading';

const Routes = () => (
  <Suspense fallback={<Loading />}>
  <Switch>
      <Route
        exact
        path="/"
        component={lazy(() => import('./views/marvel'))}
      />
      <Route
        exact
        path="/404"
        component={lazy(() => <p>404</p> )}
      />
      <Redirect to="/404" />
    </Switch>
  </Suspense>
);

export default Routes;
