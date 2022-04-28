import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './App.jsx';
import './App.scss';

const container = document.getElementById('app');

const root = ReactDOMClient.createRoot(container);
root.render(<App />);
