import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './routes/Main';
import About from './routes/About';
import Detail from './routes/Detail';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Main} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;