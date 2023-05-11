// == (Comparação implícita) Só compara o valor

const numero = 7;
const texto = "7";

console.log(numero == texto); // True

// === Compara o valor e o tipo de dado

console.log(numero === texto); // False

// Typeof

console.log(typeof numero);
console.log(typeof texto);

// Conversão explícita (Boa prática colocar os === e fazer a conversão)

Number();
String();
