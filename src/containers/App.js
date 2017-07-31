import React, { Component } from 'react';
import Header from '../components/Header'
import MainSection from '../components/MainSection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainSection />
      </div>
    );
  }
}

export default App;
