import React from 'react';

import NumberForm from './containers/form';
import History from './containers/history';

import './App.scss';

function App() {
  return (
    <div className="prime-app">
      <NumberForm />
      <History />
    </div>
  );
}

export default App;
