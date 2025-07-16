$(document).ready(function () {
  //Borramos todo. Vamos a cambiar una propiedad de estilo css.
  $("#target1").css("color", "red");
  //Tambien podemos mediante jQuery cambiar propiedades HTML
  $("#target1").prop("disabled", true);
  //Con .html podemos agregar tags y cambiar texto en elementos HTML. Tambien hay otra comando que es .text que podemos cambiar texto directamente sin tags
  $("#target4").html("<em>#target4</em>");
});

// En Jquery sus estamentos empiezan con "$",
//aqui vamos a a hacer que todos los botones reboten
// $("button").addClass("animated bounce");
//});
