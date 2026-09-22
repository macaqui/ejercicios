let temperatura = 36
let lloviendo = false

if (!lloviendo) {
  console.log("Salimos a la calle")
} else {
  console.log("Mejor quedarse en casa")
}

if (temperatura > 35 && !lloviendo) {
  console.log("Cuidado, hace mucho calor")
} else {
  console.log("Sin aviso de calor")
}