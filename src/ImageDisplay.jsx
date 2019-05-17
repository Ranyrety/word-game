import React from 'react'


function ImageDisplay(props){
    return(
        <div>
            <img src={props.url}></img>
        </div>
    )
}
export default ImageDisplay