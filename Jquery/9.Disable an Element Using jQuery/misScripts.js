$(document).ready(function () {
  //Borramos todo. Vamos a cambiar una propiedad de estilo css.
  $("#target1").css("color", "red");
  //Tambien podemos mediante jQuery cambiar propiedades HTML
  $("#target1").prop("disabled", true);
});

// En Jquery sus estamentos empiezan con "$",
//aqui vamos a a hacer que todos los botones reboten
// $("button").addClass("animated bounce");
//});
