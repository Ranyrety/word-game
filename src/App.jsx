import React from 'react';
import Game from './Game'
import Menu from './Menu'
import MainMenu from  './MainMenu'
import ImageDisplay from './ImageDisplay'
import Modal from './Modal'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  
    this.state = {
      loading: true,
      currentLevel: 0,
      difficulty: 0,
      puzzlesURL: [
        './assets/data/gameData.json',
        './assets/data/gameData02.json',
        './assets/data/gameData03.json'
      ],
      gameState: {
        running: false,
      },
      gameData: {},
      showModal: false,
      showDiffSetting: false
    }

    this.onNewGameClick = this.onNewGameClick.bind(this)
    this.onPauseClick = this.onPauseClick.bind(this)
    this.onRestartClick = this.onRestartClick.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.showDifficulty = this.showDifficulty.bind(this)
    this.hideDifficulty = this.hideDifficulty.bind(this)

    this.puzzleCompletedCallback = () => {
      this.loadNextPuzzle()
    }

    this.setDifficulty = (diffLvl) => {
      console.error(`Difficulty is set to: ${diffLvl}. To bad we don't have data for different levels of difficulty.`)
      this.setState({showDiffSetting: false})
    }

  }

  showDifficulty(){
    this.setState({showDiffSetting: true})
  }

  hideDifficulty(){
    this.setState({showDiffSetting: false})
  }
  
  showModal(){
    this.setState({showModal: true})
  }

  hideModal(){
    this.setState({showModal: false})
  }

  componentDidMount()
  {
  }

  loadNextPuzzle(){
    this.setState({loading: true})
    const level = this.getNextLevel(this.state.puzzlesURL, this.state.currentLevel)
    if(level){
    fetch(level)
    .then(response => response.json())
    .then(
      json => this.setState(
        (prevState) => {
          return {
            gameData: json,
            loading: false,
            currentLevel: prevState.currentLevel +1,
            gameState: {
              running: true
            }
          }
        }
      )
    )
  }
  else{
    this.setState({gameState: {running: false}})
  }
  }

  getNextLevel(levels, currentlyFinishedLevel) {
    const nextLevel  = currentlyFinishedLevel + 1
    if(levels.length > nextLevel) {
      return levels[nextLevel]
    } else {
      return null
    }
  }

  onNewGameClick(e){
    fetch(this.state.puzzlesURL[0]).then(response => response.json() ).then(
      json => this.setState({gameData: json, loading: false, gameState:{running: true}})
    ) 
  }

  onRestartClick(e){
    this.setState({ loading: true })
    fetch(this.state.puzzlesURL[this.state.currentLevel]).then(response => response.json()).then(
      json => this.setState({ gameData: json, loading: false,  gameState: { running: true }})
    )
  }

  onPauseClick(e){
    this.showModal()
  }

  render(){
    return(

      this.state.gameState.running ? 
        <div>
        <div>
          <Menu  running={this.state.gameState.running} onPause={this.onPauseClick}
                                       onNewGame={this.onNewGameClick} onRestart={this.onRestartClick}/>
        </div>
        <ImageDisplay url="assets/images/dom.png"/>
        <div>
          <Modal show={this.state.showModal} handleClose={this.hideModal}> <p>Game currently paused, but since we still don't have timer this doesn't mean anything.</p></Modal>
          <Game puzzle={this.state.gameData}
                         running={this.state.loading} onPuzzleCompleted={this.puzzleCompletedCallback}/>
        </div>
        </div>
        :
        <div>
        <MainMenu onNewGame={this.onNewGameClick} difficultyVisible={this.state.showDiffSetting} 
                        onSetDifficulty={this.setDifficulty} showChoseDifficulty={this.showDifficulty} 
                        handleClose={this.hideDifficulty}/>
        <Modal show={this.state.showModal} handleClose={this.hideModal}> <p>Data 1</p></Modal>
        </div>
    )
  }
}

export default App;
