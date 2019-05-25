import React from 'react'


function ImageDisplay(props){
    return(
        <div>
            <img src={props.url} alt="For the word"></img>
        </div>
    )
}
export default ImageDisplay