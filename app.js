const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
]

//Listar todos los productos del carro
var mostrarCarrito = () => {
    console.log("Contenido de su carrito:");

    for (i = 0; i < carrito.length; i++) {
        console.log(carrito[i].count + "x " + carrito[i].name);
    }
console.log("------------------");
}

mostrarCarrito();

//Eliminar el producto con id 54657
var pos;
var i = 0;

while (i < carrito.length  ){
    if (carrito[i].id === 54657) {
        pos = i;
    }
    i++
}

carrito.splice(pos,1);

mostrarCarrito();


//Calcular total del carrito
var total = 0;
for (i = 0; i < carrito.length; i++) {
    total += carrito[i].price * carrito[i].count
}

console.log("Total del Carrito: ", total);

//Filtrar por productos prime
// Declarada línea 45
i = 0;

console.log("Productos premium:");

while (i < carrito.length){
    if (carrito[i].premium) console.log(carrito[i].name);
    i++
}

//Opcional:

//Si todos los productos son prime no tiene gastos de envío
var freeDelivery = true
i=0;

while (i < carrito.length || freeDelivery) {
    carrito[i].premium ? freeDelivery = true : freeDelivery= false
    i++
}

freeDelivery ? console.log("Pedido sin gastos de envío ") : console.log("Este pedido tiene gastos de envío");


//Mostrar carrtio en listado de html básico
for (i=0; i< carrito.length; i++){
    document.getElementById(i).innerHTML = carrito[i].name
}


// Aplicar descuento del 5% para compras > 100€
// Ya se ha calculado el total del carro en la líneas 61-64
total > 100 ? total= total * 0.95 : total;
console.log("Total de su carrito con descuento: ", total);