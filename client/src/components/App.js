import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header';

// Dummy components
const Landing = () => <h2>Landing</h2>
const Home = () => <h2>Home</h2>
const Cabinet = () => <h2>Medicine Cabinet!</h2>

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Header} />
        </Switch>
        <Route path='/home' component={Home} />
        <Route path='/cabinet' component={Cabinet} />
      </div>
    </BrowserRouter>
  );
};

export default App;
