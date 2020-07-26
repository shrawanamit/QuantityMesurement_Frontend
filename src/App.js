import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QuantityMesurement} from './Components/DashBoard';
import  History  from './Components/History';

function App() {
  return (
    <div>
    <Router>
      <Route exact path="/" component={ QuantityMesurement} />
      
       <Route exact path="/history" component={ History} /> 
    </Router>
  </div>
  );
}

export default App;
