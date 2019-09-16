import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component = { Main } />
    </div>
  );
}

export default App;
