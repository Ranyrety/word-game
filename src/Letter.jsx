import React from 'react'
import './Letter.css'

class Letter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      correctClicked: false,
      incorrectClicked: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.correctClicked)
      return null
    else
      if (nextProps.correctClicked !== prevState.correctClicked || nextProps.incorrectClicked !== prevState.incorrectClicked) {
        return { correctClicked: nextProps.correctClicked, incorrectClicked: nextProps.incorrectClicked }
      }
    return null
  }


  render() {
    let bgColor = "#095567"
    if (this.state.incorrectClicked) {
      bgColor = "#771010"
    }
    else if (this.state.correctClicked) {
      bgColor = "#395501"
    }
    let style = {
      backgroundColor: bgColor
    };

    return (
      <div className="letter" id={this.props.id} style={style} onClick={this.props.onClicked}>{this.props.letter}</div>
    );
  }
}
export default Letter