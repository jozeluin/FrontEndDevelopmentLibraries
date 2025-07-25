/**
 * Leccion40, "Render Conditionally from Props", la logica , el condicional esta en el hijo, en su prop. Segun el valor de fiftyFifty colocara una cosa u otra
 */

import React from "react";
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}


    return <h1>{this.props.fiftyFifty ? 'You Win!':'You Lose! ' }</h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1 
      }
    });
  }
  render() {
    const expression = Math.random() >= .5; // Aqui se elige un numero al azar o 0 o 1
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
export default GameOfChance;