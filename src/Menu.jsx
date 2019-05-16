import React from 'react'
import {NavLink} from 'react-router-dom'

class Menu extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            started: false
        }
    }

    render()
    {
        return(
        <ul>
            <li>
            {
                this.state.started ?
            <button>Pause</button>
            :
            <button>New Game</button>
            }
            </li>
            <li>
                <button>Restart</button>
            </li>
        </ul>
        )
    }
}
export default Menu