/**
 * Leccion 33, "Add Event Listeners". Hasta que no se renderiza por primera vez no entrara "componentDidMount", despues ya podremos dar al enter para visualizar el mensaje
 */

import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + "You pressed the enter key! ",
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>Primer Mensaje</h1>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

/**
 * Ejemplo de utlizacion del componentDidMount
 */
class MiComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: null,
      cargando: true,
    };
  }

  componentDidMount() {
    // Simulación de una llamada a la API
    setTimeout(() => {
      this.setState({
        datos: { mensaje: "Datos obtenidos de la API" },
        cargando: false,
      });
    }, 2000);
  }

  render() {
    if (this.state.cargando) {
      return <p>Cargando...</p>;
    }

    return (
      <div>
        <p>{this.state.datos.mensaje}</p>
      </div>
    );
  }
}

/**
 * Otro ejemplo para entender componentWillUnmount
 */

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hola, mundo!</h1>
        <h2>Son las {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
