// Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”
let miLista1 = ["velma", "exploradora", "jane", "john", "harry"];

for (let i = 0; i < miLista1.length; i++) {
    console.log(miLista1[i]);
}

// Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.
console.log("");

let miLista2 = miLista1;

let i = 0;
while (i < miLista2.length) {
    console.log(miLista2[i]);
    i++;
}

// Cree una función de flecha que devuelva "Hola mundo".
console.log("");

const greeting = () => "Hola mundo";
console.log(greeting());