function App() {
  const JSX = (
    <div>
      {/**Esto es un comentario en JSX */}
      <h1>Hello JSX</h1>
      <p>Mi parrafo</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );

  const JSX1 = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line
  //ReactDOM.render(JSX1, document.getElementById("challenge-node")); Descatolagado
  return JSX1;
}


export default App;
// Define an HTML Class in JSX, lecci