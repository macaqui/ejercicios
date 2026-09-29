let estudiantes = [
  { nombre: "Ana", nota: 4.5 },
  { nombre: "Luis", nota: 2.0 },
  { nombre: "Sofía", nota: 5.0 }
];

for (let i = 0; i < estudiantes.length; i++) {
  if (catalogo[i].stock === 0) {
    console.log(catalogo[i].nombre);
  }
  console.log(catalogo[i].nombre, catalogo[i].precio);
  console.log(total);
}
