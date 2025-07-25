import React from "react";
/**
 * Este es el componente hijo.
 * Es una Arrow Function
 * @returns Un Texto
 */
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};
/**
 * Componente padre
 */
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* Change code below this line */}
        <ChildComponent />

        {/* Change code above this line */}
      </div>
    );
  }
}
export default ParentComponent;
/*
Leccion 9: Relaccion entre componentes hijos y padres
 */