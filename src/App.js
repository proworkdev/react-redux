import React, { Component } from 'react';
import './App.css';
import Lister from './containers/Lister'
import store from './store/'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Lister store={store}/>
       
      </div>
    );
  }
}

export default App;
