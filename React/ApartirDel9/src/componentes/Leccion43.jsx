/**
 * Leccion 43, "Give Sibling Elements a Unique Key Attribute", dale a un elemento hermano una clave unica
 */



const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks =frontEndFrameworks.map(
    (framework)=> <li key={framework}>{framework}</li>
  ) ; // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};