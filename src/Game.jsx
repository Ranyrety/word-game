import React from 'react'
import Letter from './Letter'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      correctGuessedLetter: 0,
      gameData: {}
    }

    this.correctAudio = new Audio("clickSound.wav")
    this.wrongAudio = new Audio("wrongClick.wav")

    this.onClick = this.onClick.bind(this);
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.puzzle !== prevState.gameData) {
      return { correctGuessedLetter: 0, gameData: nextProps.puzzle, loading: nextProps.running }
    }
    if (nextProps.running !== prevState.loading)
      return { loading: nextProps.running }
    return null
  }

  onClick(e) {
    const target = e.target;
    const clickedLetterIndex = target.id
    if (!this.state.gameData.letters[clickedLetterIndex].correctClicked) {
      if (target.innerText === this.state.gameData.word[this.state.correctGuessedLetter]) {
        this.setState(prevState => {
          if (prevState.gameData.letters[clickedLetterIndex].incorrectClicked) {
            prevState.gameData.letters[clickedLetterIndex].incorrectClicked = false;
          }
          prevState.gameData.letters[clickedLetterIndex].correctClicked = true
          prevState.correctGuessedLetter += 1
          return prevState
        }
        )
        this.correctAudio.pause();
        this.correctAudio.currentTime = 0;
        this.correctAudio.play()
      }
      else if (target.innerText !== this.state.gameData.word[this.state.correctGuessedLetter]) {
        this.setState(prevState => {
          prevState.gameData.letters[clickedLetterIndex].incorrectClicked = true
          return prevState
        })
        this.wrongAudio.pause();
        this.wrongAudio.currentTime = 0;
        this.wrongAudio.play()
      }
    }
  }

  componentDidUpdate() {
    if (!this.state.loading) {
      if (this.state.correctGuessedLetter === this.state.gameData.word.length) {
        this.setState({ correctGuessedLetter: 0 })
        this.props.onPuzzleCompleted()
      }
    }
  }

  render() {
    return (

      this.state.loading ? <h1>loading</h1> :
        <div>
          {
            this.state.gameData.letters.map((o, id) =>
              <Letter key={id} id={id} letter={o.character} onClicked={this.onClick}
                correctClicked={o.correctClicked} incorrectClicked={o.incorrectClicked} />
            )
          }
        </div>
    )
  }
}

export default Game