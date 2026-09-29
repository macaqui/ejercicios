let catalogo = [
  { nombre: "Martillo", precio: 35000, stock: 12 },
  { nombre: "Destornillador", precio: 15000, stock: 0 },
  { nombre: "Alicate", precio: 28000, stock: 7 },
];
let total = 0;

for (let i = 0; i < catalogo.length; i++) {
  total = total + catalogo[i].precio * catalogo[i].stock;
  if (catalogo[i].stock === 0) {
    console.log(catalogo[i].nombre);
  }
  console.log(catalogo[i].nombre, catalogo[i].precio);
  console.log(total);
}

catalogo.push({
  nombre: "Gráfica",
  precio: 2100000,
  stock: 2,
});

console.log(catalogo.length);
