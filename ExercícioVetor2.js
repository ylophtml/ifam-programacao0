let numeros = parseInt(prompt("Quantos números?"))
const vetor = []
for(let i = 0; i<numeros; i++){
    vetor[i] = prompt("")
}
document.writeln(`<br>Números informados pelo usuário<br>`)
vetor.reverse()
for(let i = 0; i<numeros; i++){
    document.writeln(`${vetor[i]}`)
}
