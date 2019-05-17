import React from 'react'
import Modal from './Modal';

class MainMenu extends React.Component{

    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e)
    {
        const id = e.target.id
        this.props.onSetDifficulty(id)
    }

    render(){
        return (
            <div>
                <Modal show={this.props.difficultyVisible} handleClose={this.props.handleClose}>
                    <button id='0' onClick={this.handleClick}>Easy</button>
                    <button id='1' onClick={this.handleClick}>Medium</button>
                    <button id='2' onClick={this.handleClick}>Hard</button>
                </Modal>
                <ul>
                    <li>
                        <button onClick={this.props.onNewGame}>New Game</button>
                    </li>
                    <li>
                        <button onClick={this.props.showChoseDifficulty}>Difficulty settings</button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default MainMenu
