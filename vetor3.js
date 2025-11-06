let quantidade = parseInt(prompt("Quantos números?"))
var pares = 0, impares = 0
for(let i=0; i<quantidade; i++){
numeros[i] = prompt()
if(numeros [i] % 2 == 0)
  pares++
else
  impares++
}
document.writeln(`<b>Números informados<br>`)
for(let i=0; i<quantidade;i++){
  document.writeln(numeros[i])
}
document.writeln(`<br>Quantidade de pares: ${pares}<br>Quantidade de impares: ${impares}`)
