//Promise

const fs = require("node:fs/promises");

fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Error al leer el directorio: ", err);
      return;
    }
  });

//Sencillo
// const { error } = require("node:console");
// const fs = require("node:fs");
// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.error("Error al leer el directorio: ", error);
//     return;
//   }

//   files.forEach((file) => {
//     console.log(file);
//   });
// });
