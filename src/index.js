import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components
import TodoContainer from './functionBased/components/TodoContainer';

// styles
import './functionBased/App.css';

// render
render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
