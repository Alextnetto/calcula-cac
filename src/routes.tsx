import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CalculateCac from './pages/CalculateCac'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={CalculateCac}/>
    </BrowserRouter>
  );
}

export default Routes;