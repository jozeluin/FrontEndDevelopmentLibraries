/**
 * leccion 22 "Render State in the User Interface Another Way", Otra manera de renderizar . En el metodo render antes del return, podemos escribir codigo javaScript. Conseguimos el state y se lo pasamos a un variable
 */
import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp-Locuras-vairas",
    };
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        {/* Change code below this line */}
        <h1>{name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
export default MyComponent;
