import Myprueba from "./componentes/Myprueba";

function App() {
  //Leccion 5
  const JSX = (
    <div className="myDiv">
      {/* Las clases de los elementos se llaman className */}
      <h1>Add a class to this div</h1>
    </div>
  );
  /**
   * Leccion 6, se pueden escribir tags sin tag de cierre como estos:
   * <div />, <br />,<hr />. Aunque no pueden mostrar nada
   */
  const JSX2 = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );
  /*
   * Leccion 7. Creacion de un componente funcional sin estado. Parfa llamar la funcion, MyComponent().
   *.Se puede definir como un tipo de elemento que puede recivir datos y representarlos. Pero no puede *  administrar ni seguir datos. Hay que intentar colocar la primera letra en mayuscula
   *
   */

  const MyComponent = function () {
    return <div>Hola Caracola</div>;
  };

  return (
 
     // MyComponent()
      <Myprueba></Myprueba>
      
  
  );
}

export default App;
/**
 * Leccion 8,The other way to define a React component is with the ES6 class syntax.
 * This creates an ES6 class MyComponent which extends the React.Component class. So the Kitten class
 *  now has  access to many useful React features, such as local state and lifecycle hooks.
 * Por ahora lo que hay que saber que esta es la forma estandarizada de hacerlo
 */
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//       return(
//           <div>
//             <h1>Hello React!</h1>
//           </div>
//       );

//   }
// };
