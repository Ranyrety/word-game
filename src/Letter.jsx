import React from 'react'
import './Letter.css'



function Letter(props) {
    let bgColor = "#095567"
    if (props.incorrectClicked) {
      bgColor = "#771010"
    }
    else if (props.correctClicked) {
      bgColor = "#395501"
    }
    let style = {
      backgroundColor: bgColor
    };

    return (
      <div className="letter" id={props.id} style={style} onClick={props.onClicked}>{props.letter}</div>
    );
  }

export default Letter