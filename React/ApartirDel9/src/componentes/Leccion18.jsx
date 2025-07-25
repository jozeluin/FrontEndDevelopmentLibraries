//Leccion 18 Use PropTypes to Define the Props You Expect
//Le decimos el tipo de las props
import PropTypes from "prop-types";
import React from "react";

const Items = ({ quantity = 10 }) => {
  return <h1>Current Quantity of Items in Cart: {quantity}</h1>;
};

// Change code below this line

Items.propTypes = {
  quantity: PropTypes.number,
};
// Change code above this line

//  Items.defaultProps = { // Deprecado. Se tiene que usar la forma de arriba, colocar el valor en la definicion
//   quantity: 10,          // const Items = ({ quantity = 10 }) 
//   };

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Items quantity={this.props.quantity} />;
  }
}
export default ShoppingCart;
