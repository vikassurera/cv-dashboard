import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import CvPage from "./CvPage";
import HomePage from "./Pages/HomePage";
import {CursorHintProvider} from "./context/cursorHint";


function App() {
    return (
        <Router>
            <CursorHintProvider>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/portfolio'} element={<CvPage/>}/>
                </Routes>
            </CursorHintProvider>
        </Router>
    )
}

export default App;
