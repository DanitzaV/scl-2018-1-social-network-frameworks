import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import app from './base';
import { Redirect } from 'react-router-dom';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
