/**
 * Leccion 32,"Use the Lifecycle Method componentDidMount". Despues del montaje en el Dom, setTimeout este metodo esperara los milisegundos que coloquemos y despues se ejecutara.
 * "componentWillUnmount()", es al reves, antes de montar aunque esta deprecado
 */

import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {//Componenete despues del montaje
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 3300); //Milisegundos de retardo
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users:{this.state.activeUsers} </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
export default MyComponent;
