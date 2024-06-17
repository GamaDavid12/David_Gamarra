
    // Función para notas y verificar que son válidas
    function obtenerNotas() {
        let notas = [];
        for (let i = 0; i < 5; i++) {
            let nota;
            do {
                nota = parseInt(prompt(`Ingrese la nota ${i + 1} (número natural menor que 11):`));
            } while (isNaN(nota) || nota < 0 || nota >= 11);
            notas.push(nota);
        }
        return notas;
    }

    //  calcular el promedio
    function calcularPromedio(notas) {
        let suma = notas.reduce((acc, nota) => acc + nota, 0);
        return suma / notas.length;
    }

    // Solicita las 5 notas 
    let notas = obtenerNotas();

    // Calcula el promedio
    let promedio = calcularPromedio(notas);

    // Determina el mensaje basado en el promedio
    let mensaje;
    if (promedio < 5) {
        mensaje = "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
        mensaje = "Aprobado";
    } else if (promedio > 8) {
        mensaje = "Sobresaliente";
    } else {
        mensaje = "Promedio no definido";
    }

    // Muestra el resultado en pantalla
    alert(`El promedio de las notas es: ${promedio.toFixed(2)}. Resultado: ${mensaje}`);
