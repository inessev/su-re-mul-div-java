alert ("Escriba dos números para obtener el resultado de su suma, resta, multiplicación y división");
var number1,number2,vsuma;
n1 = parseInt(prompt('Escriba aquí el primer numero'));
n2 = parseInt(prompt('Escriba aquí el segundo numero'));
vsuma = n1 + n2;
alert("La suma de "  + number1 +" y " + number2 +" es " +  +vsuma);
alert ("La suma de " + number1 +" y " + number2 +" es " + ( number1 + number2));
alert ("La resta de " + number1 +" y " + number2 +" es " + ( number1 - number2));
alert ("La multiplicación de " + number1 +" y " + number2 +" es " + ( number1 * number2));
alert ("La división de " + number1 +" y " + number2 +" es " + ( number1 / number2));

<script>
	var n1,n2,vsuma;
	
	n1 = parseInt(prompt('Ingresar numero 1'));
	n2 = parseInt(prompt('Ingresar numero 2'));
	
	vsuma = n1 + n2;
	document.write('La suma es '+vsuma);
</script>