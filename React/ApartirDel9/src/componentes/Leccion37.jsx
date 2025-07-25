/**
 * Leccion 37, "Render with an If-Else Condition". Dentro del render efectuamos la comprobacion de la variable de estado, segun su valor actuara un return con o sin "Displayed!"
 */

import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>

          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}
export default MyComponent;

/**
 * 
Leccion 38, "Use && for a More Concise Conditional", podriamos hacer el ejercicio anterior con otro condicional , el "&&". Quedando mucho mas conciso dentro del codigo JSX quedando asi:

return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};

 */
