
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LoginForm from './pages/Login';
import Welcome from './pages/Welcome';


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LoginForm />} />   
        <Route path="/welcome/:Id" element={<Welcome/>} />
        
      </Routes>
   
  );
};

export default App;
