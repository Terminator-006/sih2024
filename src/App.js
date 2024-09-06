import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EndorphinEndorsers from './components/LoginForm/Landing.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import SignUp from './components/LoginForm/SignUp.jsx';
import Dashboard from './components/LoginForm/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route that redirects to Landing page */}
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<EndorphinEndorsers />} />
        <Route path="/login" element={<LoginForm />} /> 
         <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;