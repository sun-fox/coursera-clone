import React from 'react';
import './css/bootstrap.min.css';
import Header from './components/Header';
import Collaborator from './components/Collaborator';
import Features from './components/Features';
import Promosec from './components/Promosec';
import QualityAssurance from './components/QualityAssurance';
import Accessibilitypromo from './components/Accessibilitypromo';
import Teachingmethodology from './components/Teachingmethodology';
import Certificates from './components/Certificates';
import Community from './components/Community';
import Promosec2 from './components/Promosec2';
import Bussiness from './components/Bussiness';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" render = { props => (
          <React.Fragment>
          <Header/>
          <Collaborator/>
          <Features/>
          <Promosec/>
          <QualityAssurance/>
          <Accessibilitypromo/>
          <Teachingmethodology/>
          <Certificates/>
          <Community/>
          <Promosec2/>
          <Bussiness/>
          <Footer/>
        </React.Fragment>
        )}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
    </div>
    </Router>
  );
}

export default App;