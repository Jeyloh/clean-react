import * as ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.scss';

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);

root.render(<App />);
