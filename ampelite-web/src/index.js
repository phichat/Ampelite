import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter basename="/AmpeliteWeb">
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
