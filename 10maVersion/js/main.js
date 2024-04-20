/*ejercicio 1*/

alert("Hello Word");

/*ejercicio 2*/
document.write("Hello Word <br> ");

/*ejercicio 3*/
document.write(3 + 5 + "<br>");
/*ejercicio 4*/
let nombre = prompt("HOla! ¿como te llamás?");
document.write("Hola " + nombre + "<br>");

/*ejercicio 5*/
let num1 = parseInt(prompt("Ingresá un número:"));
let num2 = parseInt(prompt("Ingresá otro número:"));
document.write("El número que dió como resultado de los dos números que ingresaste es: " + (num1 + num2) + "<br>")

/*ejercicio 6*/
if (num1 > num2) {
    document.write("El  número mayor es el que ingresaste en 1º lugar: " + num1 + "<br>");
} else if (num2 > num1) {
    document.write("El  número mayor es el que ingresaste en 2º lugar: " + num2 + "<br>");
}

/*ejercicio 7*/
let num3 = parseInt(prompt("Ingresa un tercer número")); /*Utilizo las otras del ejercicio 5*/
if (num1 >= num2 && num1 >= num3) {
    document.write("El  número mayor es el que ingresaste en 1º lugar: " + num1 + "<br>");
} else if (num2 >= num2 && num2 >= num3) {
    document.write("El número mayor es el que ingresaste en 2º lugar: " + num2 + "<br>");
} else {
    document.write("El número mayor es el que ingresaste en 3º lugar: " + num3 + "<br>");
}

/* Ejercicio 8*/

let pnum2 = prompt("Ingrese un numero que sea divisible por 2: ");
if (pnum2 % 2 === 0) {
    document.write("¡Felicitaciones! el numero " + pnum2 + " es divisible por 2.<br>");
} else {
    document.write("MMMM debes estudiar mas matemáticas, el número " + pnum2 + " no es divisible por 2. <br>");
}

/* Ejercicio 9 */

let frase = prompt("Por favor escriba una frase cualquiera, la que mas te guste: ");

let contadorMay = 0;
let contadorMin = 0; //declaro para que comience a contar de 0 la variable contador.

for (let i = 0; i < frase.length; i++) { //declaro i, a frese le sumo la propiedad de longitud y que aumente de a 1.
    if (frase[i] === 'a') {
        contadorMin++;

    } else if (frase[i] === 'A') {

        contadorMay++

    }
}
document.write("Tu frase es: " + frase + "<br>");
document.write("La letra <strong>A</strong> aparece " + contadorMay + " veces <br>");
document.write("La letra <strong>a</strong> aparece " + contadorMin + " veces <br>");



/* Ejercicio 10 */

let frase2 = prompt("Por favor escriba una frase cualquiera, la que mas te guste: ");
//en una misma variable, todas las vocales como valores:

let contadorvocales = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0

};

//para no hacer todo por mayuscula y por minusculas, convierto todo a minuscula en este caso, que lo convierta para que pueda contar.SIMPLIFICO

frase2 = frase2.toLowerCase();

//ahora que haga el conteo por toda la frase:

for (let i = 0; i < frase2.length; i++) { //declaro i, a frese le sumo la propiedad de longitud y que aumente de a 1.
    let caracter = frase2[i];

    //aca verifico que el carácter sea una vocal
    if (caracter in contadorvocales) {
        contadorvocales[caracter]++;
    }

}
document.write("<br>Tu frase es: " + frase2 + "<br>");

for (let vocal in contadorvocales) {
    document.write("<p>La letra " + vocal + " aparece " + contadorvocales[vocal] + " veces en la frase.</p>");
}
