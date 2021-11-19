import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './components/pages/Blogs';
import Places from './components/pages/Places';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/places' component={Places} />
          <Route path='/' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;