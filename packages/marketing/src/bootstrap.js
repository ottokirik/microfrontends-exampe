import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (htmlRoot) => {
  ReactDOM.render(<App />, htmlRoot);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing_dev_root');

  if (devRoot) mount(devRoot);
}

export { mount };
