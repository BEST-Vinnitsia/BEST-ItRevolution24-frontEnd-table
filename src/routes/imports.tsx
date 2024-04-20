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
export const Table1AdminPage = Loadable(lazy(() => import('../pages/Table1Admin')));
export const Table1GuestPage = Loadable(lazy(() => import('../pages/Table1Guest')));
