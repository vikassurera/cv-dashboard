import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import CvPage from "./CvPage";
import Test from "./pages/Test";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <CvPage /> } />
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </Router>
  );
}

export default App;
