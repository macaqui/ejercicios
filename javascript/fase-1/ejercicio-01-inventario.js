let productos = ["arroz", "huevo", "aceite"];

productos.push("azucar");
productos.unshift("sal");
productos.pop();
console.log(productos.includes("sal"));
console.log(productos.indexOf("aceite"));

let primero = productos.shift();
console.log(productos, primero);
