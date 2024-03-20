import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import CvPage from "./CvPage";
import HomePage from "./Pages/HomePage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/portoflio'} element={<CvPage/>}/>
            </Routes>
        </Router>
    )
}

export default App;
