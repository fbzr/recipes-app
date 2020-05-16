import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Page Components
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Route exact path='/'>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
