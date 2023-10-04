document.addEventListener('DOMContentLoaded', function () {
  const botonCompra = document.querySelector('button');

  botonCompra.addEventListener('click', function () {
    realizarVenta();
  });
});

const Producto = function (item, precio, stock) {
  this.item = item;
  this.precio = precio;
  this.stock = stock;
}

let Producto1 = new Producto("Bota industrial", 80000, 10);
let Producto2 = new Producto("Tapa oído", 113000, 1);
let Producto3 = new Producto("Casco", 215000, 150);
let Producto4 = new Producto("Gafas", 30000, 5);
let Producto5 = new Producto("Guantes", 14000, 250);

function verificaritemExistente(items, itemDeseado) {
  return items.some(producto => producto.item.toUpperCase() === itemDeseado.toUpperCase());
}

function verificarStockDisponible(items, itemDeseado) {
  let itemEncontrado = items.find(producto => producto.item.toUpperCase() === itemDeseado.toUpperCase());

  if (itemEncontrado && itemEncontrado.stock > 0) {
    return itemEncontrado.stock;
  } else {
    return 0;
  }
}

function sacarValor(cantidad, valorUnitario) {
  return cantidad * valorUnitario;
}

function realizarVenta() {
  const itemDeseado = prompt("¿Qué ítem desea comprar? - Opciones: Bota Industrial, Tapa Oído, Casco, Gafas o Guantes ");

  let stockDisponible = verificarStockDisponible([Producto1, Producto2, Producto3, Producto4, Producto5], itemDeseado);

  if (stockDisponible === 0) {
    alert("Lo sentimos, de este ítem no hay stock.");
  } else {
    let cantidadComprar = parseInt(prompt(`Hay ${stockDisponible} unidades disponibles. ¿Cuántos deseas comprar? `));

    if (cantidadComprar > stockDisponible) {
      alert("Venta no disponible, la cantidad a comprar supero el stock disponible.");
    } else {
      let itemEncontrado = [Producto1, Producto2, Producto3, Producto4, Producto5].find(producto => producto.item.toUpperCase() === itemDeseado.toUpperCase());
      let totalAPagar = sacarValor(cantidadComprar, itemEncontrado.precio);
      alert(`Valor a pagar: $${totalAPagar}`);
    }
  }
}