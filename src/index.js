import './components/style/_base.scss';
import './components/style/_wrapper.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter basename='/4p22-final-project-aleksandr-khalaim'>
            <App />
        </HashRouter>
    </React.StrictMode>
);