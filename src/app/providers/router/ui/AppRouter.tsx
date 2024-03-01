import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/route-config/route-config";

export const AppRouter = () => {

  const routes = Object.values(routeConfig).map(({element, path}) => (
    <Route
      key={path}
      path={path}
      element={element}
    />
  ));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {...routes}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
