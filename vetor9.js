let n = parseInt(prompt("Quantos números terá a lista?"));
let numeros = [];
for(let i = 0; i < n; i++) {
    numeros[i] = parseInt(prompt("Digite um número:"));
}
let soma = 0;
for(let i = 1; i < n; i++) {
    soma = soma + numeros[i];
}
alert("Soma das posições ímpares = " + soma);
