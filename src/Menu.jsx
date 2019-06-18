import React from 'react'
import "./Menu.css"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.started !== nextProps.running) {
      return { started: nextProps.running }
    }
    return null
  }

  render(props) {
    

    return (
      <ul className="mainMenu">
        <li>
          {
            this.state.started ?
              <button onClick={this.props.onPause}>Pause</button>
              :
              <button onClick={this.props.onNewGame}>New Game</button>
          }
        </li>
        <li>
          <button onClick={this.props.onRestart}>Restart</button>
        </li>
      </ul>
    )
  }
}
export default Menu