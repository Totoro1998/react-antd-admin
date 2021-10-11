import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <div>1111</div>
    </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
