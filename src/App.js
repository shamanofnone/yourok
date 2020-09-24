import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import PayersPage from './components/pages/solutions/Payers';
import ProvidersPage from './components/pages/solutions/Providers';
import SchoolsPage from './components/pages/solutions/Schools';
import ParentsPage from './components/pages/solutions/Parents';
import SolutionsPage from './components/pages/solutions/Solutions';
import Science from './components/pages/Science';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/contact' component = {ContactUs} />
        <Route path='/about' component = {AboutUs} />
        <Route path='/science' component = {Science} />
        <Route path='/payers' component = {PayersPage} />
        <Route path='/providers' component = {ProvidersPage} />
        <Route path='/schools' component = {SchoolsPage} />
        <Route path='/parents' component = {ParentsPage} />
        <Route path='/solutions' component = {SolutionsPage} />
      </Switch>
    </Router>
  );
}

export default App;
