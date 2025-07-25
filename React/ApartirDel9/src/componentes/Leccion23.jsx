/**
 * Leccion 23 "Set State with this.setState". Utilizar this.setState para cambiar el state
 */
import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({name:"React Rocks!"})
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
export default MyComponent

//Leccion 24: Es como la anterior. Explica como encadenamos,bind, una funcion para poder llamarla mediante el "this". 
    // " this.handleClick = this.handleClick.bind(this);", encadenamos al this
    // " <button onClick={this.handleClick}>Click Me</button>",aqui lo utilizamos

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "Hello"
//     };
//     // Change code below this line
//   this.handleClick = this.handleClick.bind(this);
//     // Change code above this line
//   }
//   handleClick() {
//     this.setState({
//       text: "You clicked!"
//     });
//   }
//   render() {
//     return (
//       <div>
//         { /* Change code below this line */ }
//         <button onClick={this.handleClick}>Click Me</button>
//         { /* Change code above this line */ }
//         <h1>{this.state.text}</h1>
//       </div>
//     );
//   }
// };