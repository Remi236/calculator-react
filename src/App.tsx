import React from 'react';
import './App.css';
import './Calculator.css';
import Calculator from './components/Calculator';

const App = () =>  (
  <div className="App">
    <header className="App-header">
      <h1>Calculator App</h1>
    </header>
    <main>
      <Calculator/>
    </main>
    <footer>
      <p className="copyright">
        © 2023 by Remi Kykoyubi. All rights reversed
      </p>
    </footer>
  </div>
);

export default App;
