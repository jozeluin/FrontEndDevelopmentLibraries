/**
 * Leccion 44, "Use Array.filter() to Dynamically Filter an Array". 
 * Filtramos el map
 */
import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }
  render() {
    //Filtramos el array, el que online sea true
    let usersOnline = this.state.users.filter((user) => user.online); 
    //Ese array lo mapeamos, creamos unos "<li>" con los nombres de ese array
    const renderOnline = usersOnline.map((users) => (
      <li key={users.username}>{users.username}</li>
    )); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul> 
        {/* mostramos esos "<li></li>" */}
      </div>
    );
  }
}
export default MyComponent;


/**
 * Leccion 44, Renderizado en el servidor
 */

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <div/>
//   }
// };

// // Change code below this line
// ReactDOMServer.renderToString(<App/>);