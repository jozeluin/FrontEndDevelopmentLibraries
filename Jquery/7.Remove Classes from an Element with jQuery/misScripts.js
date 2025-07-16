$(document).ready(function () {

//Estamos accediendo de diferentes maneras a los mismos elementos, y en el ultimo caso
//estamos escogiendo el boton con el id=#target1
  $("button").addClass("animated bounce");
  $(".btn").addClass("shake");
  $("#target1").addClass("btn-primary");
  //tambien podemos borrar clases
  $("button").removeClass("btn-default");
});

// En Jquery sus estamentos empiezan con "$",
//aqui vamos a a hacer que todos los botones reboten
// $("button").addClass("animated bounce");
//});
