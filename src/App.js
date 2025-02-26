import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/About';

function App() {
    const [mode, setMode] = useState('light'); // initially mode is light
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };
   
    const toggleMode = () => {
       
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(7 58 72)';
            showAlert('Dark mode has been enabled', 'success');
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light mode has been enabled', 'success');
        }
    };

    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <TextForm
                                    heading="Enter text here to analyze below"
                                    mode={mode}
                                    home='Home'
                                    showAlert={showAlert}
                                />
                            }
                        />
                        <Route path="/about" element={<About about='About' mode = {mode}/>} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
