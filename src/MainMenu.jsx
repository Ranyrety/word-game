import React from 'react'
import Modal from './Modal';

function MainMenu (props) {

  const handleClick = (e) =>{
    {
      const id = e.target.id
      props.onSetDifficulty(id)
    }
  }
  return (
    <div>
      <Modal show={props.difficultyVisible} handleClose={props.handleClose}>
        <button id='0' onClick={handleClick}>Easy</button>
        <button id='1' onClick={handleClick}>Medium</button>
        <button id='2' onClick={handleClick}>Hard</button>
      </Modal>
      <ul>
        <li>
          <button onClick={props.onNewGame}>New Game</button>
        </li>
        <li>
          <button onClick={props.showChoseDifficulty}>Difficulty settings</button>
        </li>
      </ul>
    </div>
  )
}
export default MainMenu
