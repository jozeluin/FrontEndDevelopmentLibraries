/**
 * Leccion 41, "Change Inline CSS Conditionally Based on Component State". Segun el valor de un componente, tendra el componente un estilo u otro
 */

import React from "react";
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        input: "",
      };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value }); //con un evento de cambio pasamos el valor del input que es una variable que guarda el state
  }
  render() {
    let inputStyle = {
      border: "1px solid black",
    };
    // Change code below this line
    let danger = {
      border: "3px solid red",
    };
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={this.state.input.length > 15 ? danger : inputStyle} //Segun el tamaño del input cambiara a un estilo u a otro
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default GateKeeper;
