import React from 'react'
import WordDisplay from './WordDisplay'
import Letter from './Letter'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            word: "dom",
            timeToFinishInSec: 10,
            correctGuessedLetter: 0,
            bgColor: "#395501",
            gameData: {},
        }

        fetch("gameData.json")
            .then(response => response.json())
            .then(json => {
                let tmp = { gameData: json, nextCorrectLetter: json.startCharacterIndex, loading: false }
                this.setState(tmp)
            }
            )
        this.onClick = this.onClick.bind(this);
        this.playSound = this.playSound.bind(this)
        this.playWrong = this.playWrong.bind(this)
    }

    componentDidMount() {

    }

    onClick(e) {
        const target = e.target;
        let letterIndex = this.state.gameData.letters.findIndex(l => { return l.id === target.id })
        if (!this.state.gameData.word[this.state.correctGuessedLetter].correctClicked) {
            if (target.innerText === this.state.gameData.word[this.state.correctGuessedLetter]) {

                this.setState(prevState => {
                    if (prevState.gameData.letters[letterIndex].incorrectClicked) {
                        prevState.gameData.letters[letterIndex].incorrectClicked = false;
                    }
                    prevState.gameData.letters[letterIndex].correctClicked = true
                    prevState.correctGuessedLetter += 1
                    return prevState
                }
                )
                this.playSound()
            }
            else if (target.innerText !== this.state.gameData.word[this.state.correctGuessedLetter]) {
                this.setState(prevState => {
                    prevState.gameData.letters[letterIndex].incorrectClicked = true
                    return prevState
                })
                this.playWrong()
            }
        }
    }

    componentDidUpdate() {
        if (this.state.correctGuessedLetter === this.state.word.length) {
            //add point set new word,
            this.setState({ word: "kotek", correctGuessedLetter: 0 })
        }
    }

    playSound() {
        let audio = new Audio("clickSound.wav")
        audio.play();
    }

    playWrong() {
        let audio = new Audio("wrongClick.wav")
        audio.play()
    }

    render() {
        return (
            this.state.loading ? <h1>loading</h1> :
                <div>
                    <WordDisplay word={this.state.gameData.word} />
                    {
                        this.state.gameData.letters.map((o, id) =>
                            <Letter key={id} id={o.id} letter={o.character} onClicked={this.onClick}
                                correctClicked={o.correctClicked} incorrectClicked={o.incorrectClicked} />
                        )
                    }
                </div>
        )
    }
}

export default Game