let n = parseInt(prompt("Quantos números deseja somar?"))
let numeros = []
let soma = 0
for (let i = 0; i < n; i++) {
  let numero = parseInt(prompt("Digite um número"))
  numeros[i] = numero
  soma = soma + numero
}
if (soma > 100) {
  document.writeln("A soma é " + soma)
} else {
  document.writeln("A soma é menor ou igual a 100")
}
