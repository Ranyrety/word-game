import React from 'react';
import {Route, HashRouter} from 'react-router-dom'
import logo from './logo.svg';
import Game from './Game'
import Menu from './Menu'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  
    this.state = {
      loading: true,
      currentLevel: 0,
      puzzlesURL: ["gameData.json", 'gameData02.json', 'gameData03.json'],
      gameState: {
        running: false,
      },
      gameData: {}
    }

    this.onNewGameClick = this.onNewGameClick.bind(this)
    this.onPauseClick = this.onPauseClick.bind(this)
    this.onRestartClick = this.onRestartClick.bind(this)

    this.puzzleCompletedCallback = (dataFromChild) => {
      this.loadNextPuzzle()
    }
  }

  

  componentDidMount()
  {
  }

  loadNextPuzzle(){
    this.setState({loading: true})
    fetch(this.state.puzzlesURL[this.state.currentLevel + 1]).then(response => response.json()).then(
      json => this.setState((prevState) => {return { gameData: json, loading: false, currentLevel: prevState.currentLevel +1,gameState: { running: true } }})
    )
  }

  onNewGameClick(e){
    //load json for puzzle and send it to game component
    const target = e.target
    console.log(target)
    fetch(this.state.puzzlesURL[0]).then(response => response.json() ).then(
      json => this.setState({gameData: json, loading: false, gameState:{running: true}})
    ) 
  }

  onRestartClick(e){
    this.setState({ loading: true })
    fetch(this.state.gameState.puzzlesURL[this.state.currentLevel + 1]).then(response => response.json()).then(
      json => this.setState({ gameData: json, loading: false, gameState: { running: true }})
    )
  }

  onPauseClick(e){
    const target = e.target
    console.log(target)
  }

  render(){
    return(
     
        <div>
        <div>
          <Menu  running={this.state.gameState.running} onPause={this.onPauseClick}
                                       onNewGame={this.onNewGameClick} onRestart={this.onRestartClick}/>
        </div>
        <div>
          <Game puzzle={this.state.gameData}
                         running={this.state.loading} onPuzzleCompleted={this.puzzleCompletedCallback}/>
        </div>
        </div>
    )
  }
}

export default App;
