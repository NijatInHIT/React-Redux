import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterPanel from './counterPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterPanel />, document.getElementById('root'));
registerServiceWorker();
