let vetorA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let vetorB = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
let vetorC = []
const n = 10
for (let i = 0; i < n; i = i + 1){
  vetorC[i] = vetorA[i] * vetorB[i]
  document.writeln(`Vetor C [${i}] = ${vetorC[i]}<br>`)
}
