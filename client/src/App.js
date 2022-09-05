import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Routes from './components/Routing/Routes';
import ScrollTopArrow from './components/Layout/ScrollTopArrow';
import {ThemeContext} from './contexts/ThemeContext';

import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  const [darkMode] = useContext(ThemeContext);

  // useEffect(() => {
    // check for token in LS
    // if (localStorage.token)
      // setAuthToken(localStorage.token);    

    // log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
      // if (!localStorage.token)
        // store.dispatch({ type: LOGOUT });
    // });
  // }, []);
  
  return (
      <div className={`App ${darkMode ? 'darkmode' : 'lightmode'}`}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route component={Routes} />
          </Switch>
        </Router>
        <ScrollTopArrow />
        <Footer />
      </div>
  )
};

export default App;