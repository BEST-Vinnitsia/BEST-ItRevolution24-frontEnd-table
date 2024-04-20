import React, { Suspense, lazy, ComponentType } from 'react';

interface iLoadable {
  [key: string]: unknown;
}

/* eslint-disable react/display-name */
const Loadable = (Component: ComponentType) => {
  return ({ ...props }: iLoadable) => {
    return (
      <Suspense>
        <Component {...props} />
      </Suspense>
    );
  };
};

// ----------------------------------------------------------------------

//
// IMPORTS
//

// ----------------------------------------------------------------------

// Pages
export const AdminPage = Loadable(lazy(() => import('../pages/Admin')));
export const GuestPage = Loadable(lazy(() => import('../pages/Guest')));
