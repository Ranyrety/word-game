import React from 'react'
import './ImageDisplay.css'

function ImageDisplay(props) {
  return (
    <div>
      <img src={props.url} alt="For the word"></img>
    </div>
  )
}
export default ImageDisplay