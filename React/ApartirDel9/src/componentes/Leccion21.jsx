/**
 * Leccion 21, "Create a Stateful Component". State, accediendo al state
 */
import React from "react";

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: "Jose Luis",
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}
//export default StatefulComponent;

/**
 * Leccion 22. Es parecido al anterior pero esta vez llamamos al state
 * . Tenemos que acordarnos que en JSX, cualquier codigo que este escrot
 */
class MyComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCampppppp",
    };
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>{this.state.name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
export default MyComponent;
