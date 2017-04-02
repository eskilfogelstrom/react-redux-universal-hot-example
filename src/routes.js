import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Main from './layouts/Main';


export default (store) => {
  return (
    <Route path="/" component={Main}>
    </Route>
  );
};
