import React from 'react'

class Letter extends React.Component{
    constructor(props){
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
            width: "200px",
            height: "200px",
            backgroundColor: bgColor,
            color: "#ffffff",
            fontSize: 80,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "200px",
            verticalAlign: "middle",
            padding: 10,
            display: "inline-block",
            margin: 15,
            border: 1,
            borderRadius: "200px"
        };

        return (
            <div id={this.props.id} style={style} onClick={this.props.onClicked}>{this.props.letter}</div>
        );
    }
}
export default Letter