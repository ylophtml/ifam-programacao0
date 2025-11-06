let numeros = parseInt(prompt("Digite um número para ver sua tabuada até 10x:"))
let resultado = []
for (let i = 0; i <=10; i++) {
    resultado = resultado + (numero * i) + " ";
}
alert("Tabuada: " + resultado);
