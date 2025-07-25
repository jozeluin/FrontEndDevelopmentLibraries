/**
 * Leccion 42, "Use Array.map() to Dynamically Render Elements". Creamos dinamicamente un array, y cuando le damos al boton. Creamos unos elementos "li", mediante un .map
 */

import React from "react";

const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: "",
      toDoList: [],
    };
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * Al clickar recogemos el valor de input, la separacion entre strings la hace mediante la coma. Si no hay comas lo une todo
   */
  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray,
    });
  }
  /**
   * Cuando va cambiando el intput recogemos lo que nos da el evento y lo colocamos en la variable input del state
   * @param {EventoOnchange} e Es el propio evento
   */
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  render() {
    const items = this.state.toDoList.map((item) => <li>{item}</li>); // map recorre toDoList.
    return (
      <div>
        <textarea
          onChange={this.handleChange}//al ir cambiando llamamos a esta funcion
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
export default MyToDoList;
