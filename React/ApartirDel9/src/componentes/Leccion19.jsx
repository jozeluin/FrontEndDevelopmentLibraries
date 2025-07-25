/**
 * Leccion19 "Access Props Using this.props". Accedemos a las props mediante this, quedando this.props.nombreDeProp
 */
import React from "react";
class AppWelcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Welcome name="Jose" />
        {/* Change code above this line */}
      </div>
    );
  }
}

export default AppWelcome;

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* Change code above this line */}
      </div>
    );
  }
}
