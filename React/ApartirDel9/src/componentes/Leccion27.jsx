/**
 * Leccion 27, "Create a Controlled Input". Creamos un input el cual guardamos su valor en el state, y despues lo mostramos a traves tambien del state.
 */

import React from "react";
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default ControlledInput;
