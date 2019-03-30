import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Kitchen Recipes';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
