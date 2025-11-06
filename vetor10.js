let disciplinas = parseInt(prompt("Quantas disciplinas?"));
let soma = 0;
for (let i = 0; i < disciplinas; i++) {
    let nota = parseFloat(prompt("Nota da disciplina " + (i+1) + ":"));
    soma = soma + nota;
}
let media = soma / disciplinas;
if (media >= 6) {
    alert("Média geral = " + media + ". Estudante aprovado de módulo!");
} else {
    alert("Média geral = " + media + ". Estudante reprovado de módulo.");
}
