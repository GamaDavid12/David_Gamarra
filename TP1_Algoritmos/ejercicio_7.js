//Empezamos con los string
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
let textos = valores.filter(value => typeof value === "string");
let mayorTexto = textos.reduce((a, b) => a.length > b.length ? a : b);
console.log("El texto mayor es:", mayorTexto);
textos.sort((a, b) => a.length - b.length);
console.log("Textos ordenados de menor a mayor cantidad de letras:", textos);

//Se pasa a la operaciones con Numeros
let numeros = valores.filter(value => typeof value === "number");
if (numeros.length >= 2) {
    let [num1, num2] = numeros;
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
} else {
    console.log("No hay suficientes números para realizar las operaciones matemáticas.");
}
