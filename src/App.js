import React from 'react';

import Calculator from './containers/calculator';
import History from './containers/history';

import './App.scss';

function App() {
  return (
    <div className="prime-app">
      <Calculator />
      <History />
    </div>
  );
}

export default App;
