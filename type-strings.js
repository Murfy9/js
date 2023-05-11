// Tipo Strings

const texto = "Óla, Mundo!";
const stringsDeNumeros = "234656327";

const citacao = 'em Bioshock "A man choose, a slave obeys"';
const personagem = "dita por Andrew Ryan";
const opiniao = "uns dos jogos mais incríveis já feito";

// Concatenaçâo (+)

console.log(citacao + personagem);

// Unicode

const cifrao = "\u0024";
const aMaiusculo = "\u0041";
const tique = "\u2705";
const hiragana = "\u3041";

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// Templete String

const frase = `Uma frase de jogo que gosto é ${citacao}, que é ${personagem} faz com que os jogadores pensam nas ações feitas até ali, que me faz considerar ${opiniao}.`;

console.log(frase);
