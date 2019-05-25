import React from 'react'

class Modal extends React.Component{


    render(){
        let modalVisible = {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100 %",
            background: "rgba(0, 0, 0, 0.6)",
            display: "block"
        }

        let modalHidden = {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            display: "none"
        }

        let modalMain = {
            position: "fixed",
            background: "white",
            width: "80%",
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }

            return (
                <div style={this.props.show ? modalVisible : modalHidden }>
                    <section style={modalMain}>
                        {this.props.children}
                        <button onClick={this.props.handleClose}>close</button>
                    </section>
                </div>
            )
    }
}
export default Modal