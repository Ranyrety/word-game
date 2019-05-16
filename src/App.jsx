import React from 'react';
import {Route, HashRouter} from 'react-router-dom'
import logo from './logo.svg';
import Game from './Game'
import Menu from './Menu'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  
  }

  componentDidMount()
  {
  }

  render(){
    return(
      <HashRouter>
        <div>
        <div>
          <Menu />
        </div>
        <div>
          <Route path="/" component={Game}/>
        </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
