// Tipos De Dado

// Conversão Implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); //booleanos false
console.log(numero == numeroString); //Converte em String true
console.log(numero + numeroString); //Forma uma concatenação "456456"

// Conversão Explícita

console.log(numero + Number(numeroString));

// Converter String para Number == Number()
// Converter Number para String == String()
