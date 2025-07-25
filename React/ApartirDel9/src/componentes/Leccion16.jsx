//  Leccion 16 Use Default Props
/**
 * 
 * @param {*} props "items":Es el argumento, sera opcional
 * @returns 
 */

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component {props.items} </h1>
    </div>
  )
};
// Change code below this line
/**
 * Argumento opcional
 */
ShoppingCart.defaultProps={items:0}

export default ShoppingCart


// Leccion 17 Override Default Props. Sobreescrivir los defaultProps

// const Items = (props) => {
//   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// }

// Items.defaultProps = {
//   quantity: 0
// }

// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     { /* Change code below this line */ }
//     return <Items quantity={10} />
//     { /* Change code above this line */ }
//   }
// };