import React from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/headers/Header';
import InnerPage from './components/innerpage/InnerPage';
import Demo from './components/mainbody/Demo';
import TemplateFeatuer from './components/templatefeature/TemplateFeature';
import TemplateFeatuer2 from './components/templatefeature/TemplateFeature2';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Demo />
      <TemplateFeatuer/>
      <TemplateFeatuer2/>
      <InnerPage/>
      <Footer/>
    </div>
  );
}

export default App;
