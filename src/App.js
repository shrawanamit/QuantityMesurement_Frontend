import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QuantityMesurement} from './Components/QuantityMesurement';

function App() {
  return (
    <div>
    <Router>
      <Route exact path="/" component={ QuantityMesurement} />
    </Router>
  </div>
  );
}

export default App;
