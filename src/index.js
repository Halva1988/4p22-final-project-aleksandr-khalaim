import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import FormRegistration from './components/formRegistration';
import Cards from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        {/* <FormRegistration /> */}
        <Cards />
    </>
);


