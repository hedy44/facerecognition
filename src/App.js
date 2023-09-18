import React, { Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import ParticlesBg from 'particles-bg'
import Logo from './components/Logo/Logo.js'
import './App.css';

class App extends Component  {
  render(){
     return (
    <div className="App">
      <ParticlesBg num={100} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      {/* <ImageLinkForm />
      <FaceRecognition /> */}
    </div>
    );
  }
 
}

export default App;
