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
import Footer from './components/Footer';
function App() {

  return (
    <div>
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
    </div>
  );
}

export default App;