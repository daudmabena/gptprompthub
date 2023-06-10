import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './static/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);

/*
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Routes>
            <Route path="/*" element={<App/>}/>
        </Routes>
    </React.StrictMode>,
)
*/
