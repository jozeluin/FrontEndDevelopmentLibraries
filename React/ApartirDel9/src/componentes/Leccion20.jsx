/**
 * Leccion20 "Review Using Props with Stateless Functional Components"
 */
import React from "react";
import PropTypes from "prop-types";

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Abajo va el nombre</h1>
        <Camper name="MiNombre" />
        {/* <Camper/>  Sin nombre se escribiria el de por defecto*/}
      </div>
    );
  }
}
export default CampSite;

// Este codigo funciona
// function Camper(props) {
//   return <p>{props.name}</p>;
// }

// Este codigo funciona
// const Camper = (props) => {
//   return <p>{props.name}</p>;
// };

//Este tambien
//const Camper = (props) => <p>{props.name}</p>;

//Funciona Pero da error en consola chrome
//Camper.defaultProps = { name: "CamperBot" };

//Default Props que no dan error, nombre por defecto
const Camper = ({ name = "Perico" }) => <p>{name}</p>;

Camper.propTypes = { name: PropTypes.string.isRequired };
