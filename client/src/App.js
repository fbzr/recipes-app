import React from 'react';
import './App.less';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Page Components
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
