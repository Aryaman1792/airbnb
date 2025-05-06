import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import SearchPage from './SearchPage';
import BecomeHost from './BecomeAHost';
import Login from './Login';
import Signup from './Signup';
import HostExperience from './HostExperience';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/become-a-host">
            <BecomeHost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/host-experience">
            <HostExperience />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
