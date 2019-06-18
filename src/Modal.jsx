import React from 'react'
import "./Modal.css"

class Modal extends React.Component {


  render() {
    

    return (
      <div className={this.props.show ? "modalVisible" : "modalHidden"}>
        <section className="modalMain">
          {this.props.children}
          <button onClick={this.props.handleClose}>close</button>
        </section>
      </div>
    )
  }
}
export default Modal