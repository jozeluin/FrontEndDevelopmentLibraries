import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Vegetables from "./componentes/Leccion12.jsx";
import Fruits from "./componentes/Leccion12.jsx";

 ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
 );
// ReactDOM.createRoot(document.getElementById("rotor")).render(
//   <React.StrictMode>
//     <h1>Este es el segundo Directamente llamo a la clase</h1>
//     <Fruits />
//     <h1>Lo siguiente es Vegetables</h1>
//     <Vegetables />
//   </React.StrictMode>
// );
