//Se hace el array correspondiente
const mesesAño = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Noviembre","Diciembre"];
//Se pide al usuario por pantalla un valor
let numeroMes = prompt("Ingrese un número del 1 al 12:");
//Se pone una condicion
if (numeroMes >= 1 && numeroMes <= 12) {
    // Muestra el nombre del mes correspondiente 
    alert("El mes correspondiente es: " + mesesAño[numeroMes - 1]);
} else {
    // Muestra un mensaje de error si el número no es válido
    alert("DAto invalido");
}