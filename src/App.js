import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'; // Your CSS file for styling
import './App.css';
import EventRegistrationForm from './FormComponent/EventRegistrationForm';
import SummaryPage from './FormComponent/SummaryPage';


const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>

        <Route exact path='/'element={<EventRegistrationForm/>}/>
        <Route exact path='/summary'element={<SummaryPage/>}/>
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
