const notas =[9.5, 10, 9.5, 10]

console.log(notas[1]);
console.log(notas.length);
notas[3] = 8;
for ( let i = 0; i < notas.length; i++) {
  console.log("Nota " + (i + 1) + ": " + notas[i]);
}
