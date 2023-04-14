alert ("Escriba dos números para obtener el resultado de su suma, resta, multiplicación y división");
var number1,number2,vsuma;
number1 = parseInt(prompt('Escriba aquí el primer numero'));
number2 = parseInt(prompt('Escriba aquí el segundo numero'));
vsuma = number1 + number2;
alert("La suma de "  + number1 +" y " + number2 +" es " +  +vsuma);
alert ("La resta de " + number1 +" y " + number2 +" es " + ( number1 - number2));
alert ("La multiplicación de " + number1 +" y " + number2 +" es " + ( number1 * number2));
alert ("La división de " + number1 +" y " + number2 +" es " + ( number1 / number2));