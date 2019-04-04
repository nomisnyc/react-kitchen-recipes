import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/root';

import './index.css';

const title = 'Kitchen Recipes';

ReactDOM.render(
  <div>{title}
    <App />
  </div>,
  document.getElementById('app')
);

module.hot.accept();
