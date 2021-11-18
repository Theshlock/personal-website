import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MketBot from './components/pages/MketBot';
import Flipic from './components/pages/Flipic';
import SignUp from './components/pages/Doctra';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/MketBot' component={MketBot} />
          <Route path='/Flipic' component={Flipic} />
          <Route path='/Doctra' component={SignUp} />
          <Route path='/flipic_git' component={() => { window.location.href = 'https://github.com/bryanwongyk/flipic'; }}/>
          <Route path='/flipic_award' component={() => { window.location.href = 'https://devpost.com/software/flipic'; }}/>
          <Route path='/flipic_page' component={() => { window.location.href = 'https://www.flipic.net/'; }}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
