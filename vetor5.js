let n = parseInt(prompt("Quantas pessoas foram entrevistadas?"))
let idades = []
let soma = 0
for (let i = 0; i < n; i = i + 1) {
  idades[i] = parseInt(prompt("Idade da pessoa " + (i + 1) + ":"))
  soma = soma + idades[i]
}
let media = soma / n
document.writeln("A média das idades é: " + media)
