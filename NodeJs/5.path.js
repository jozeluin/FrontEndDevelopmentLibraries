const path = require("node:path");
//barra de separacion de carpetas segun SO
console.log(path.sep);
//unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);
//content\subfolder\test.txt

//De una ruta saca el nombre del archivo final
const base = path.basename("/tmp/midu/secret-files/password.txt");
console.log(base);
//Lo mismo pero sacando extension
const fileName = path.basename("/tmp/midu/secret-files/password.txt",".txt");
console.log(fileName);
//Te dice la extension
const extension=path.extname("password.txt")
console.log(extension);