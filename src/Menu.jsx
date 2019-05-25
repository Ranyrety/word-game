import React from 'react'


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
    let style = {
      display: "block",
      backgroundColor: "#124650",
      border: 1
    }

    return (
      <ul style={style}>
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