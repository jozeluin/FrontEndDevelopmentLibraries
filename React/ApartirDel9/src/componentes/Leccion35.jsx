/**
 * Leccion 35, "Introducing Inline Styles", introduccion al estilo en linea. Se trabaja como si fuera un objeto, se colocan dos pares de llaves. Las propiedades cambian , los nombres con guiones se colocan con camelCase, la segunda palabra empieza en mayusculas
 */
import React from "react";
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color:"red",fontSize:72}}>Big Red</div>//72 o "72px"
    );
  }
};

export default Colorful



/**
 * Leccion 36,"Add Inline Styles in React". Ahora los stilos priemro los colocamos en una variable
 */

// Change code above this line
 const styles={color:'purple', fontSize: 40, border:"2px solid purple"};
 
class Colorfull extends React.Component {
  render() {
    // Change code below this line
   
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};