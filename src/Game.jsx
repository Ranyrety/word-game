import React from 'react'
import WordDisplay from './WordDisplay'
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

    componentDidMount() {
        if(typeof this.state.gameData.word !== 'undefined' )
            this.setState({loading: false})
        else{
            fetch("gameData.json").then(response => response.json()).then(json => this.setState({ gameData: json, loading: false }))
        }
    }

    onClick(e) {
        const target = e.target;
        let letterIndex = this.state.gameData.letters.findIndex(l => { return l.character === target.innerText })
        if (!this.state.gameData.letters[this.state.correctGuessedLetter].correctClicked) {
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
                this.correctAudio.play()
            }
            else if (target.innerText !== this.state.gameData.word[this.state.correctGuessedLetter]) {
                this.setState(prevState => {
                    prevState.gameData.letters[letterIndex].incorrectClicked = true
                    return prevState
                })
                this.wrongAudio.play()
            }
        }
    }

    componentDidUpdate() {
        if(!this.state.loading){
        if (this.state.correctGuessedLetter === this.state.gameData.word.length) {
            //add point set new word,
            this.setState({ word: "kotek", correctGuessedLetter: 0 })
        }
        }
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