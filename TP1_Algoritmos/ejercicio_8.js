function encontrarPrimeraVocal(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            return { vocal: texto[i], posicion: i + 1 };
        }
    }

    return null; // Si no se encuentra ninguna vocal
}

var texto = prompt ("Ingrese una palabra");

let resultado = encontrarPrimeraVocal(texto);

if (resultado) {
    alert(`La primera vocal es "${resultado.vocal}" y es la letra Nº${resultado.posicion}`);
} else {
    alert("No se encontraron vocales en el texto ingresado.");
}
