let n = parseInt(prompt("Quantos itens?"));
let preco = [];
let i = 0;
let total = 0;

while (i < n) {
  preco[i] = parseFloat(prompt("Preço do item " + (i + 1) + ":"));
  total = total + preco[i];
  i = i + 1;
}

document.writeln("Quantidade de itens: " + n + "<br>");
document.writeln("Valor total: R$ " + total.toFixed(2));
