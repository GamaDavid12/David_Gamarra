//Aqui se asignan variables locales dentro de este bloque de codigo
let dato, resultado;
//Atraves de una vetana se pide tu numbre
val1 = window.prompt("Introduce tu nombre", "...");
//Aqui se pide tu apellido
val2 = window.prompt("Introduce tu apellido", "...");
//Aqui se le asigna el valor a la variable "resultado"
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//Se muestra por pantalla
document.write(resultado);