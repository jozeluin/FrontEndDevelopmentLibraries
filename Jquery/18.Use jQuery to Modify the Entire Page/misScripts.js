$(document).ready(function () {
  //Borramos todo. Vamos a cambiar una propiedad de estilo css.
  $("#target1").css("color", "red");
  //Tambien podemos mediante jQuery cambiar propiedades HTML
  $("#target1").prop("disabled", true);
  //Con .html podemos agregar tags y cambiar texto en elementos HTML. Tambien hay otra comando que es .text que podemos cambiar texto directamente sin tags
  $("#target4").html("<em>#target4</em>");
  //Y con esto como se ve borra elementos
  $("#target4").remove();
  //con .appendTo cambiamos un elemento de un div a otro
  $("#target2").appendTo("#right-well");
  // con .clone se pueden copiar elementos, y ademas podemos encadenar comandos jQuery
  $("#target5").clone().appendTo("#left-well");
  //con .parent podemos cambiar propiedades del elemento padre del elemento que indicamos
  $("#target1").parent().css("background-color", "red");
  //Igual que podemos modificar a los elementos padre con .parent, tambien podemos modificar los hijos, "children", con .children
  $("#right-well").children().css("color", "orange");
  //Asi podemos elegir en concreto un elemento ,de los diferentes elementos pertenecientes
  // de una clase, con este comando y un numero que es el numero de orden.
  $(".target:nth-child(2)").addClass("animated bounce");
  //Seleccionameos pares o impares, en este caso los pares
  $(".target:even").addClass("animated shake");
  //Asi modificamos todo el el body, y lo tiramos
  $("body").addClass("animated hinge");
});

// En Jquery sus estamentos empiezan con "$",
//aqui vamos a a hacer que todos los botones reboten
// $("button").addClass("animated bounce");
//});
