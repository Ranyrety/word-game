import React from 'react';
import {Route, HashRouter} from 'react-router-dom'
import logo from './logo.svg';
import Game from './Game'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <HashRouter>
        <Route path="/" component={Game}/>
      </HashRouter>
    )
  }
}

export default App;
