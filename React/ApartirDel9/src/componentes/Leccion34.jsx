/**
 * Leccion 34, "Optimize Re-Renders with shouldComponentUpdate". Con el metodo "shouldComponentUpdate", podemos cazar los cambios en las props de la funcion y devolver true cuando nos interesa. Al devolver true el componente se puede actualizar y renderizar. Cuando eso ocurre(que se redenderize, despues de la primera vez) el metodo "componentDidUpdate" se ejecuta.
 */

import React from "react";
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    // Change code below this line
    if (nextProps.jose % 2 === 0) {
      return true;
    } else {
      return false;
    }
    // Change code above this line
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.jose}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens jose={this.state.value} />
      </div>
    );
  }
}

export default Controller;
