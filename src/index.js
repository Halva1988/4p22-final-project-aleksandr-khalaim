import './components/style/_base.scss';
import './components/style/_wrapper.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='4p22-final-project-aleksandr-khalaim'>
        <App />
    </BrowserRouter>
);