let empleado = {
  nombre: "Carlos",
  cargo: "Técnico",
  salario: 2500000,
  skills: ["electricidad", "soldadura"],
};
empleado.salario = empleado.salario * 1.15;
console.log(empleado.nombre, empleado.cargo);

for (let i = 0; i < empleado.skills.length; i++) {
  console.log(empleado.skills[i]);
}

empleado.skills.push("Cocinar");

for (let clave in empleado) {
  console.log(clave, empleado[clave]);
}

