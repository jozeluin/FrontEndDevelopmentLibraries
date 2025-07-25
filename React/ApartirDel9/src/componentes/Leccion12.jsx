/*Leccion 12
ReactDOM.render(componentToRender, targetNode) Esta deprecado
Ahora se utliza "ReactDOM.createRoot()", es lo que se utiliza en main.jsx

*/
import React from "react";

const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Coles</li>
        <li>Ripollo</li>
        <li>Lechuga</li>
        <li>Zanahorias</li>
      </ul>
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
}

export default TypesOfFood;
// ReactDOM.createRoot(document.getElementById('challenge-node')).render(
//   <React.StrictMode>
//     <TypesOfFood />
//   </React.StrictMode>,
//Leccion 13, ReactDom.render() Deprecado
// class MyComponent  extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>My First React Component!</h1>
//       </div>
//     )
    

//     }
// }
// ReactDOM.render(<MyComponent/>,document.getElementById("challenge-node"))