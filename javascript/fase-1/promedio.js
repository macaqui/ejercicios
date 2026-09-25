const notas = [9.5, 10, 9.5, 10, 8];
let suma = 0;
 for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
} 
let promedio = suma / notas.length;
console.log("El promedio es: " + promedio);