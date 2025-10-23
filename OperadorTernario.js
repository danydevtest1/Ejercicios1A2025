//Libreria para usar los comandos de la consola
const prompt = require("prompt-sync")();

//Funcion de inicio de operaciones
function Calificacion() {
  let cal = parseInt(prompt("Ingresa la calificacion: "));
  let respuesta = cal > 6 && cal <8? "Regular" : cal >= 8 ? "Excelente" : "Reprobado";
  console.log(`La calificación es ${cal} y es ${respuesta}`);
}

Calificacion();
