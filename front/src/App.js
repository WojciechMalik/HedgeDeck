import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./views/login";
import Dashboard from "./views/dashboard";
import NewSet from "./views/newset";
import Registration from "./views/registration"; 
import Practise from "./views/practise";
import ViewSet from './views/viewSet';

function App() {
  return (
    <Router>
      <Routes>
          
          <Route path="" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newSet" element={<NewSet />} />
          <Route path="/viewSet" element={<ViewSet />} /> 
          <Route path="/practise" element={<Practise />} /> 
        
    </Routes>
  </Router>
  );
}

export default App;
